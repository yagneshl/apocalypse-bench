import type { AggregateGroupSummary, ModelRunSummary } from '../runner/types';

export type AggregateInput = {
  modelId: string;
  questionScores: Array<{
    questionId: string;
    category: string;
    difficulty: string;
    status: 'done' | 'candidate_failed' | 'judge_failed' | 'skipped';
    overallScore: number;
    autoFail: boolean;
    latencyMs: number | null;
  }>;
};

function median(values: number[]): number | null {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

function mean(values: number[]): number | null {
  if (values.length === 0) return null;
  return values.reduce((acc, v) => acc + v, 0) / values.length;
}

function p90(values: number[]): number | null {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.max(0, Math.ceil(0.9 * sorted.length) - 1);
  return sorted[index] ?? null;
}

function min(values: number[]): number | null {
  if (values.length === 0) return null;
  return values.reduce((acc, v) => (v < acc ? v : acc), values[0]!);
}

function max(values: number[]): number | null {
  if (values.length === 0) return null;
  return values.reduce((acc, v) => (v > acc ? v : acc), values[0]!);
}

function safeRate(numerator: number, denominator: number): number | null {
  if (denominator <= 0) return null;
  return numerator / denominator;
}

function aggregateGroup(questionScores: AggregateInput['questionScores']): AggregateGroupSummary {
  const totalQuestions = questionScores.length;
  const completed = questionScores.filter(q => q.status === 'done').length;
  const failures = questionScores.filter(
    q => q.status === 'candidate_failed' || q.status === 'judge_failed',
  ).length;
  const skipped = questionScores.filter(q => q.status === 'skipped').length;
  const autoFailCount = questionScores.filter(q => q.status === 'done' && q.autoFail).length;
  const overallScore = questionScores.reduce((acc, q) => acc + q.overallScore, 0);
  const latencies = questionScores
    .filter(q => q.status === 'done')
    .map(q => q.latencyMs)
    .filter((v): v is number => typeof v === 'number' && Number.isFinite(v));

  return {
    totalQuestions,
    completed,
    failures,
    skipped,
    autoFailCount,
    autoFailRate: safeRate(autoFailCount, completed),
    overallScore,
    overallScoreMean: safeRate(overallScore, completed),
    rubricScoreSum: overallScore,
    latencyMs: {
      medianMs: median(latencies),
      meanMs: mean(latencies),
      p90Ms: p90(latencies),
      minMs: min(latencies),
      maxMs: max(latencies),
    },
  };
}

export function aggregateModel(input: AggregateInput): ModelRunSummary {
  const totals = aggregateGroup(input.questionScores);

  const byCategory = new Map<string, AggregateInput['questionScores']>();
  const byDifficulty = new Map<string, AggregateInput['questionScores']>();

  for (const q of input.questionScores) {
    const cat = byCategory.get(q.category) ?? [];
    cat.push(q);
    byCategory.set(q.category, cat);

    const diff = byDifficulty.get(q.difficulty) ?? [];
    diff.push(q);
    byDifficulty.set(q.difficulty, diff);
  }

  return {
    modelId: input.modelId,
    ...totals,
    categoryBreakdown: Array.from(byCategory.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([category, scores]) => ({ category, ...aggregateGroup(scores) })),
    difficultyBreakdown: Array.from(byDifficulty.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([difficulty, scores]) => ({ difficulty, ...aggregateGroup(scores) })),
  };
}
