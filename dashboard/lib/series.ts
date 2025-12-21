import type { SummaryModelBreakdown } from "@/lib/runs";

export type CategorySeriesPoint = {
  category: string;
  overallScoreMean: number;
  failures: number;
};

export type DifficultySeriesPoint = {
  difficulty: string;
  autoFailRate: number;
};

export type ModelComparisonPoint = {
  modelId: string;
  overallScoreMean: number;
  autoFailRate: number;
  failures: number;
  completed: number;
  totalQuestions: number;
};

export function buildCategorySeries(model: SummaryModelBreakdown): CategorySeriesPoint[] {
  const breakdown = model.categoryBreakdown;
  if (!breakdown) {
    return [];
  }

  return breakdown
    .filter((b) => typeof b.category === "string")
    .map((b) => ({
      category: b.category,
      overallScoreMean: typeof b.overallScoreMean === "number" ? b.overallScoreMean : 0,
      failures: typeof b.failures === "number" ? b.failures : 0,
    }))
    .sort((a, b) => b.overallScoreMean - a.overallScoreMean);
}

export function buildDifficultySeries(model: SummaryModelBreakdown): DifficultySeriesPoint[] {
  const breakdown = model.difficultyBreakdown;
  if (!breakdown) {
    return [];
  }

  return breakdown
    .filter((b) => typeof b.difficulty === "string")
    .map((b) => ({
      difficulty: b.difficulty,
      autoFailRate: typeof b.autoFailRate === "number" ? b.autoFailRate : 0,
    }));
}

export function buildModelComparisonSeries(
  models: SummaryModelBreakdown[],
): ModelComparisonPoint[] {
  return models
    .map((m) => ({
      modelId: m.modelId,
      overallScoreMean: typeof m.overallScoreMean === "number" ? m.overallScoreMean : 0,
      autoFailRate: typeof m.autoFailRate === "number" ? m.autoFailRate : 0,
      failures: typeof m.failures === "number" ? m.failures : 0,
      completed: typeof m.completed === "number" ? m.completed : 0,
      totalQuestions: typeof m.totalQuestions === "number" ? m.totalQuestions : 0,
    }))
    .sort((a, b) => b.overallScoreMean - a.overallScoreMean);
}
