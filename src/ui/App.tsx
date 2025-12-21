import React, { useEffect, useState } from 'react';
import { Box, Text, useInput } from 'ink';
import type { RunnerEvent } from '../core/runner/orchestrator';
import { RunScreen } from './screens/RunScreen';
import { SummaryScreen } from './screens/SummaryScreen';
import { computeUiStats } from './uiStats';

type RunResult = {
  runId: string;
  outDir: string;
  summaryPath: string;
  reportPath: string;
};

type TokenUsage = { promptTokens: number; completionTokens: number; totalTokens: number };

type ModelTotals = {
  completed: number;
  failed: number;
  scoreSum: number;
  tokens: TokenUsage;
  costUsd: number;
};

type TotalsState = {
  completedCount: number;
  failedCount: number;
  runningScoreSum: number;
  perModel: Record<string, ModelTotals>;
};

function emptyTokens(): TokenUsage {
  return { promptTokens: 0, completionTokens: 0, totalTokens: 0 };
}

function getModelTotals(state: TotalsState, modelId: string): ModelTotals {
  return (
    state.perModel[modelId] ?? {
      completed: 0,
      failed: 0,
      scoreSum: 0,
      tokens: emptyTokens(),
      costUsd: 0,
    }
  );
}

function addTokens(a: TokenUsage, b: TokenUsage): TokenUsage {
  return {
    promptTokens: a.promptTokens + b.promptTokens,
    completionTokens: a.completionTokens + b.completionTokens,
    totalTokens: a.totalTokens + b.totalTokens,
  };
}

function getUsageTokens(usage: unknown): TokenUsage {
  if (!usage || typeof usage !== 'object') return emptyTokens();
  const u = usage as Record<string, unknown>;
  const promptTokens = typeof u.promptTokens === 'number' ? u.promptTokens : 0;
  const completionTokens =
    typeof u.completionTokens === 'number' ? u.completionTokens : 0;
  const totalTokens = typeof u.totalTokens === 'number' ? u.totalTokens : 0;
  return {
    promptTokens: Number.isFinite(promptTokens)
      ? Math.max(0, Math.floor(promptTokens))
      : 0,
    completionTokens: Number.isFinite(completionTokens)
      ? Math.max(0, Math.floor(completionTokens))
      : 0,
    totalTokens: Number.isFinite(totalTokens) ? Math.max(0, Math.floor(totalTokens)) : 0,
  };
}

function getCostUsd(costUsd: unknown): number {
  return typeof costUsd === 'number' && Number.isFinite(costUsd)
    ? Math.max(0, costUsd)
    : 0;
}

function totalsReducer(state: TotalsState, e: RunnerEvent): TotalsState {
  if (e.type !== 'question_completed' && e.type !== 'question_failed') return state;

  const current = getModelTotals(state, e.modelId);
  const usageTokens = getUsageTokens(
    (e as { usage?: unknown } | null | undefined)?.usage,
  );
  const costUsd = getCostUsd((e as { costUsd?: unknown } | null | undefined)?.costUsd);

  const nextModel: ModelTotals = {
    ...current,
    tokens: addTokens(current.tokens, usageTokens),
    costUsd: current.costUsd + costUsd,
  };

  if (e.type === 'question_completed') {
    nextModel.completed += 1;
    nextModel.scoreSum += e.overallScore;
    return {
      completedCount: state.completedCount + 1,
      failedCount: state.failedCount,
      runningScoreSum: state.runningScoreSum + e.overallScore,
      perModel: { ...state.perModel, [e.modelId]: nextModel },
    };
  }

  nextModel.failed += 1;
  return {
    completedCount: state.completedCount,
    failedCount: state.failedCount + 1,
    runningScoreSum: state.runningScoreSum,
    perModel: { ...state.perModel, [e.modelId]: nextModel },
  };
}

function buildTotalsFromEvents(events: RunnerEvent[]): TotalsState {
  let state: TotalsState = {
    completedCount: 0,
    failedCount: 0,
    runningScoreSum: 0,
    perModel: {},
  };
  for (const e of events) state = totalsReducer(state, e);
  return state;
}

export function App({
  runPromise,
  getInitialEvents,
  subscribeToEvents,
  totalQuestions,
  questionsPerModel,
  modelCount,
}: {
  runPromise: Promise<RunResult | null>;
  getInitialEvents: () => RunnerEvent[];
  subscribeToEvents: (onEvent: (e: RunnerEvent) => void) => () => void;
  totalQuestions: number;
  questionsPerModel: number;
  modelCount: number;
}) {
  // MEMORY OPTIMIZATION: Only store a small window of recent events for display.
  // The UI only needs:
  // - Last ~50 events for the logs panel and lastEvent display
  // - Aggregated totals (computed incrementally, not from events)
  // Previously we stored 2000 events which caused memory issues with Ink rendering.
  const EVENTS_LIMIT = 50;

  const [events, setEvents] = useState<RunnerEvent[]>(() => {
    const initial = getInitialEvents();
    return initial.length <= EVENTS_LIMIT ? initial : initial.slice(-EVENTS_LIMIT);
  });

  const [totals, setTotals] = useState<TotalsState>(() =>
    buildTotalsFromEvents(getInitialEvents()),
  );

  useEffect(() => {
    let pendingEvents: RunnerEvent[] = [];
    let flushScheduled = false;
    let flushTimer: ReturnType<typeof setTimeout> | null = null;

    const flush = () => {
      if (pendingEvents.length === 0) {
        flushScheduled = false;
        flushTimer = null;
        return;
      }

      const toAdd = pendingEvents;
      pendingEvents = [];
      flushScheduled = false;
      flushTimer = null;

      // Update events window - keep only recent events for display
      setEvents((prev) => {
        const next = [...prev, ...toAdd];
        if (next.length <= EVENTS_LIMIT) return next;
        return next.slice(-EVENTS_LIMIT);
      });

      // Update totals incrementally - this is the source of truth for stats
      setTotals((prev) => {
        let next = prev;
        for (const e of toAdd) next = totalsReducer(next, e);
        return next;
      });
    };

    const unsubscribe = subscribeToEvents((e) => {
      pendingEvents.push(e);
      if (!flushScheduled) {
        flushScheduled = true;
        flushTimer = setTimeout(flush, 16);
      }
    });

    return () => {
      unsubscribe();
      if (flushTimer) clearTimeout(flushTimer);
      pendingEvents = [];
    };
  }, [subscribeToEvents]);

  const [done, setDone] = useState<RunResult | null>(null);

  useEffect(() => {
    runPromise
      .then((r) => {
        setDone(r);
      })
      .catch((err) => {
        setDone({
          runId: 'failed',
          outDir: '',
          summaryPath: '',
          reportPath: (err as Error).message,
        });
      });
  }, [runPromise]);

  const [showLogs, setShowLogs] = useState(false);
  useInput(
    (input, key) => {
      if (input === 'q' || key.escape) process.exit(0);
      if (input === 'l') setShowLogs((v) => !v);
    },
    { isActive: process.stdin.isTTY === true },
  );

  if (!done) {
    return (
      <RunScreen
        events={events}
        totals={totals}
        showLogs={showLogs}
        totalQuestions={totalQuestions}
        questionsPerModel={questionsPerModel}
        modelCount={modelCount}
      />
    );
  }

  if (done === null) {
    return (
      <Box>
        <Text>dry-run complete</Text>
      </Box>
    );
  }

  const summaryStats = computeUiStats({
    events: getInitialEvents(),
    totals,
    totalQuestions,
    questionsPerModel,
    modelCount,
  });

  return <SummaryScreen result={done} stats={summaryStats} />;
}
