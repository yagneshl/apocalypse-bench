import type { ApocbenchConfig } from '../core/config/schema';
import type { RunnerEvent } from '../core/runner/orchestrator';
import { normalizeUsage, type NormalizedUsage } from './format';

export type ModelUiStats = {
  modelId: string;
  completed: number;
  failed: number;
  scoreSum: number;
  scoreMean: number | null;
  lastQuestionId: string | null;
  lastLatencyMs: number | null;
  usage: NormalizedUsage | null;
  costUsd: number;
};

type ModelUiStatsWithAttempts = ModelUiStats & { _attempts: number };

export type UiStats = {
  runId: string | null;
  elapsedMs: number;
  totalQuestions: number;
  completedCount: number;
  failedCount: number;
  progress: number | null;
  runningScoreMean: number | null;
  lastTps: number | null;
  hasOpenRouterGenerationId: boolean;
  budgetSpentUsd: number | null;
  budgetMaxUsd: number | null;
  models: ModelUiStats[];
  lastEvent: RunnerEvent | null;
};

export function getTotalQuestions(
  config: ApocbenchConfig,
  selectedQuestionsCount: number,
  modelCount: number,
): number {
  const limit = config.run.questionLimit ?? null;
  const questionCount =
    typeof limit === 'number'
      ? Math.min(limit, selectedQuestionsCount)
      : selectedQuestionsCount;
  // Total work = questions × models (each model answers each question)
  return questionCount * modelCount;
}

type ModelAgg = {
  completed: number;
  failed: number;
  scoreSum: number;
  lastQuestionId: string | null;
  lastLatencyMs: number | null;
  usage: NormalizedUsage | null;
  costUsd: number;
};

export function computeUiStats(params: {
  events: RunnerEvent[];
  totalQuestions: number;
  nowMs: number;
}): UiStats {
  const { events, totalQuestions, nowMs } = params;

  const prev = events
    .slice()
    .reverse()
    .find((e) => e.type === 'generation_metrics') as { tps?: unknown } | undefined;
  const prevTps =
    typeof prev?.tps === 'number' && Number.isFinite(prev.tps) && prev.tps >= 0
      ? prev.tps
      : null;

  let runId: string | null = null;
  let runStartedAtMs: number | null = null;
  let budgetSpentUsd: number | null = null;
  let budgetMaxUsd: number | null = null;
  let completedCount = 0;
  let failedCount = 0;
  let runningScoreSum = 0;
  let lastTps: number | null = prevTps;
  let hasOpenRouterGenerationId = false;

  const perModel = new Map<string, ModelAgg>();

  for (const e of events) {
    if (e.type === 'generation_metrics') {
      const generationId = (e as { generationId?: unknown } | null | undefined)
        ?.generationId;
      if (typeof generationId === 'string' && generationId.length > 0) {
        hasOpenRouterGenerationId = true;
      }
      const tps = (e as { tps?: unknown } | null | undefined)?.tps;
      if (typeof tps === 'number' && Number.isFinite(tps) && tps >= 0) {
        lastTps = tps;
      }
      continue;
    }
    if (e.type === 'run_started') {
      runId = e.runId;
      if (runStartedAtMs == null) {
        runStartedAtMs = (e as { startedAtMs?: unknown } | null)?.startedAtMs as
          | number
          | null;
        if (typeof runStartedAtMs !== 'number' || !Number.isFinite(runStartedAtMs)) {
          runStartedAtMs = nowMs;
        }
      }
      continue;
    }

    if (e.type === 'budget_spent') {
      budgetSpentUsd = e.spentUsd;
      continue;
    }

    if (e.type === 'budget_exceeded') {
      budgetMaxUsd = e.maxBudgetUsd;
      continue;
    }

    if (e.type === 'question_completed') {
      completedCount += 1;
      runningScoreSum += e.overallScore;
      const agg = perModel.get(e.modelId) ?? {
        completed: 0,
        failed: 0,
        scoreSum: 0,
        lastQuestionId: null,
        lastLatencyMs: null,
        usage: null,
        costUsd: 0,
      };
      agg.completed += 1;
      agg.scoreSum += e.overallScore;
      agg.lastQuestionId = e.questionId;
      agg.lastLatencyMs = typeof e.latencyMs === 'number' ? e.latencyMs : null;
      const normalized = normalizeUsage(e.usage);
      if (normalized) {
        agg.usage = {
          promptTokens: (agg.usage?.promptTokens ?? 0) + normalized.promptTokens,
          completionTokens:
            (agg.usage?.completionTokens ?? 0) + normalized.completionTokens,
          totalTokens: (agg.usage?.totalTokens ?? 0) + normalized.totalTokens,
        };
      }
      if (typeof e.costUsd === 'number' && Number.isFinite(e.costUsd))
        agg.costUsd += e.costUsd;
      perModel.set(e.modelId, agg);
      continue;
    }

    if (e.type === 'question_failed') {
      failedCount += 1;
      const agg = perModel.get(e.modelId) ?? {
        completed: 0,
        failed: 0,
        scoreSum: 0,
        lastQuestionId: null,
        lastLatencyMs: null,
        usage: null,
        costUsd: 0,
      };
      agg.failed += 1;
      agg.lastQuestionId = e.questionId;
      agg.lastLatencyMs = typeof e.latencyMs === 'number' ? e.latencyMs : null;
      const normalized = normalizeUsage(e.usage);
      if (normalized) {
        agg.usage = {
          promptTokens: (agg.usage?.promptTokens ?? 0) + normalized.promptTokens,
          completionTokens:
            (agg.usage?.completionTokens ?? 0) + normalized.completionTokens,
          totalTokens: (agg.usage?.totalTokens ?? 0) + normalized.totalTokens,
        };
      }
      if (typeof e.costUsd === 'number' && Number.isFinite(e.costUsd))
        agg.costUsd += e.costUsd;
      perModel.set(e.modelId, agg);
      continue;
    }
  }

  const elapsedMs = runStartedAtMs == null ? 0 : Math.max(0, nowMs - runStartedAtMs);
  const doneTotal = completedCount + failedCount;
  const progress = totalQuestions > 0 ? Math.min(1, doneTotal / totalQuestions) : null;
  const runningScoreMean = completedCount > 0 ? runningScoreSum / completedCount : null;

  const models: ModelUiStats[] = (
    Array.from(perModel.entries()) as Array<[string, ModelAgg]>
  )
    .map(([modelId, agg]) => {
      const attempts = agg.completed + agg.failed;
      const withAttempts: ModelUiStatsWithAttempts = {
        modelId,
        completed: agg.completed,
        failed: agg.failed,
        scoreSum: agg.scoreSum,
        scoreMean: agg.completed > 0 ? agg.scoreSum / agg.completed : null,
        lastQuestionId: agg.lastQuestionId,
        lastLatencyMs: agg.lastLatencyMs,
        usage: agg.usage,
        costUsd: agg.costUsd,
        _attempts: attempts,
      };
      return withAttempts;
    })
    .sort((a, b) => {
      const aa = a._attempts;
      const bb = b._attempts;
      return bb - aa;
    })
    .map((m) => {
      const { _attempts: _ignored, ...rest } = m;
      return rest;
    });

  return {
    runId,
    elapsedMs,
    totalQuestions,
    completedCount,
    failedCount,
    progress,
    runningScoreMean,
    lastTps,
    hasOpenRouterGenerationId,
    budgetSpentUsd,
    budgetMaxUsd,
    models,
    lastEvent: events.length > 0 ? events[events.length - 1] : null,
  };
}
