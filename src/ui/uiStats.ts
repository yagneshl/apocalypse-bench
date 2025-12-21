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
  lastTps: number | null;
  questionsPerModel: number;
  rank: number | null; // 1 = best score, null if no completed questions
};

type ModelUiStatsWithAttempts = ModelUiStats & { _attempts: number };

export type UiStats = {
  runId: string | null;
  startedAtMs: number | null;
  totalQuestions: number;
  questionsPerModel: number;
  modelCount: number;
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

export type UiTotals = {
  completedCount: number;
  failedCount: number;
  runningScoreSum: number;
  tpsSamples: number[];
  perModelTpsSamples: Record<string, number[]>;
  perModel: Record<
    string,
    {
      completed: number;
      failed: number;
      scoreSum: number;
      tokens: { promptTokens: number; completionTokens: number; totalTokens: number };
      costUsd: number;
    }
  >;
};

function median(values: number[]): number | null {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 1) return sorted[mid];
  const a = sorted[mid - 1];
  const b = sorted[mid];
  return (a + b) / 2;
}

// Maximum TPS samples to keep. Matches TPS_RESERVOIR_SIZE in App.tsx.
const TPS_RESERVOIR_SIZE = 200;

function limitReservoir(samples: number[]): number[] {
  if (samples.length <= TPS_RESERVOIR_SIZE) return samples;
  return samples.slice(-TPS_RESERVOIR_SIZE);
}

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

export function getQuestionsPerModel(
  config: ApocbenchConfig,
  selectedQuestionsCount: number,
): number {
  const limit = config.run.questionLimit ?? null;
  return typeof limit === 'number'
    ? Math.min(limit, selectedQuestionsCount)
    : selectedQuestionsCount;
}

type ModelAgg = {
  completed: number;
  failed: number;
  scoreSum: number;
  lastQuestionId: string | null;
  lastLatencyMs: number | null;
  usage: NormalizedUsage | null;
  costUsd: number;
  lastTps: number | null;
};

export function computeUiStats(params: {
  events: RunnerEvent[];
  totalQuestions: number;
  questionsPerModel: number;
  modelCount: number;
  totals?: UiTotals;
}): UiStats {
  const { events, totalQuestions, questionsPerModel, modelCount, totals } = params;

  const nowMs = Date.now();

  let runId: string | null = null;
  let runStartedAtMs: number | null = null;
  let budgetSpentUsd: number | null = null;
  let budgetMaxUsd: number | null = null;
  const completedCount = totals?.completedCount ?? 0;
  const failedCount = totals?.failedCount ?? 0;
  const runningScoreSum = totals?.runningScoreSum ?? 0;
  let lastTps: number | null = null;
  let hasOpenRouterGenerationId = false;

  // Initialize TPS samples from totals (accumulated history) if provided.
  // When totals is provided, it contains the full TPS history, so we don't
  // need to re-collect from events (which may be a truncated window).
  const tpsSamples: number[] = totals?.tpsSamples ? [...totals.tpsSamples] : [];
  const perModelTpsSamples = new Map<string, number[]>(
    totals?.perModelTpsSamples
      ? Object.entries(totals.perModelTpsSamples).map(([k, v]) => [k, [...v]])
      : [],
  );

  const perModel = new Map<string, ModelAgg>();
  const perModelTps = new Map<string, number>();

  for (const e of events) {
    if (e.type === 'generation_metrics') {
      const generationId = (e as { generationId?: unknown } | null | undefined)
        ?.generationId;
      if (typeof generationId === 'string' && generationId.length > 0) {
        hasOpenRouterGenerationId = true;
      }
      const tps = (e as { tps?: unknown } | null | undefined)?.tps;
      const modelId = (e as { modelId?: unknown } | null | undefined)?.modelId;
      if (typeof tps === 'number' && Number.isFinite(tps) && tps >= 0) {
        lastTps = tps;
        // Only collect from events if totals was not provided (i.e., first pass
        // where we're building totals from all events). When totals is provided,
        // the TPS samples are already accumulated there.
        if (!totals) {
          tpsSamples.push(tps);
          if (typeof modelId === 'string') {
            perModelTps.set(modelId, tps);
            const samples = perModelTpsSamples.get(modelId) ?? [];
            samples.push(tps);
            perModelTpsSamples.set(modelId, samples);
          }
        } else if (typeof modelId === 'string') {
          // Still track lastTps per model for display purposes
          perModelTps.set(modelId, tps);
        }
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
  }

  if (totals) {
    for (const [modelId, t] of Object.entries(totals.perModel)) {
      perModel.set(modelId, {
        completed: t.completed,
        failed: t.failed,
        scoreSum: t.scoreSum,
        lastQuestionId: null,
        lastLatencyMs: null,
        usage: {
          promptTokens: t.tokens.promptTokens,
          completionTokens: t.tokens.completionTokens,
          totalTokens: t.tokens.totalTokens,
        },
        costUsd: t.costUsd,
        lastTps: null,
      });
    }

    // Preserve “last” fields (questionId/latency) from recent event window
    for (const e of events) {
      if (e.type === 'question_completed') {
        const agg = perModel.get(e.modelId);
        if (agg) {
          agg.lastQuestionId = e.questionId;
          agg.lastLatencyMs = typeof e.latencyMs === 'number' ? e.latencyMs : null;
        }
      }
      if (e.type === 'question_failed') {
        const agg = perModel.get(e.modelId);
        if (agg) {
          agg.lastQuestionId = e.questionId;
          agg.lastLatencyMs = typeof e.latencyMs === 'number' ? e.latencyMs : null;
        }
      }
    }
  }

  if (!totals) {
    let completedCount = 0;
    let failedCount = 0;
    let runningScoreSum = 0;

    for (const e of events) {
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
          lastTps: null,
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
          lastTps: null,
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

    // Overwrite the outer consts via shadowing for return below
    return computeUiStats({
      events,
      totalQuestions,
      questionsPerModel,
      modelCount,
      totals: {
        completedCount,
        failedCount,
        runningScoreSum,
        tpsSamples: limitReservoir(tpsSamples),
        perModelTpsSamples: Object.fromEntries(
          Array.from(perModelTpsSamples.entries()).map(([k, v]) => [
            k,
            limitReservoir(v),
          ]),
        ),
        perModel: Object.fromEntries(
          Array.from(perModel.entries()).map(([modelId, agg]) => [
            modelId,
            {
              completed: agg.completed,
              failed: agg.failed,
              scoreSum: agg.scoreSum,
              tokens: {
                promptTokens: agg.usage?.promptTokens ?? 0,
                completionTokens: agg.usage?.completionTokens ?? 0,
                totalTokens: agg.usage?.totalTokens ?? 0,
              },
              costUsd: agg.costUsd,
            },
          ]),
        ),
      },
    });
  }

  const startedAtMs = runStartedAtMs;
  const doneTotal = completedCount + failedCount;
  const progress = totalQuestions > 0 ? Math.min(1, doneTotal / totalQuestions) : null;
  const runningScoreMean = completedCount > 0 ? runningScoreSum / completedCount : null;

  const medianTps = median(tpsSamples);

  // First pass: build model stats without rank
  const modelsWithAttempts: ModelUiStatsWithAttempts[] = (
    Array.from(perModel.entries()) as Array<[string, ModelAgg]>
  ).map(([modelId, agg]) => {
    const attempts = agg.completed + agg.failed;
    const modelMedianTps = median(perModelTpsSamples.get(modelId) ?? []);
    return {
      modelId,
      completed: agg.completed,
      failed: agg.failed,
      scoreSum: agg.scoreSum,
      scoreMean: agg.completed > 0 ? agg.scoreSum / agg.completed : null,
      lastQuestionId: agg.lastQuestionId,
      lastLatencyMs: agg.lastLatencyMs,
      usage: agg.usage,
      costUsd: agg.costUsd,
      lastTps: modelMedianTps ?? perModelTps.get(modelId) ?? null,
      questionsPerModel,
      rank: null as number | null,
      _attempts: attempts,
    };
  });

  // Sort by score (descending) to calculate ranks
  const sortedByScore = [...modelsWithAttempts]
    .filter((m) => m.scoreMean != null)
    .sort((a, b) => (b.scoreMean ?? 0) - (a.scoreMean ?? 0));

  // Assign ranks (1 = best)
  sortedByScore.forEach((m, idx) => {
    m.rank = idx + 1;
  });

  // Sort by attempts (most active first) for display
  const models: ModelUiStats[] = modelsWithAttempts
    .sort((a, b) => b._attempts - a._attempts)
    .map((m) => {
      const { _attempts: _ignored, ...rest } = m;
      return rest;
    });

  return {
    runId,
    startedAtMs,
    totalQuestions,
    questionsPerModel,
    modelCount,
    completedCount,
    failedCount,
    progress,
    runningScoreMean,
    lastTps: medianTps ?? lastTps,
    hasOpenRouterGenerationId,
    budgetSpentUsd,
    budgetMaxUsd,
    models,
    lastEvent: events.length > 0 ? events[events.length - 1] : null,
  };
}
