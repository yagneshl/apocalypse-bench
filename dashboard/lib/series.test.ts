import { describe, expect, it } from "vitest";

import { buildCategorySeries, buildDifficultySeries } from "./series";
import type { SummaryModelBreakdown } from "./runs";

describe("buildCategorySeries", () => {
  it("returns sorted series by overallScoreMean", () => {
    const model: SummaryModelBreakdown = {
      modelId: "m",
      totalQuestions: 2,
      completed: 2,
      failures: 0,
      skipped: 0,
      autoFailCount: 0,
      autoFailRate: 0,
      overallScore: 0,
      overallScoreMean: 0,
      categoryBreakdown: [
        {
          category: "B",
          totalQuestions: 1,
          completed: 1,
          failures: 2,
          skipped: 0,
          autoFailCount: 0,
          autoFailRate: 0,
          overallScore: 0,
          overallScoreMean: 1,
        },
        {
          category: "A",
          totalQuestions: 1,
          completed: 1,
          failures: 1,
          skipped: 0,
          autoFailCount: 0,
          autoFailRate: 0,
          overallScore: 0,
          overallScoreMean: 2,
        },
      ],
    };

    expect(buildCategorySeries(model)).toEqual([
      { category: "A", overallScoreMean: 2, failures: 1 },
      { category: "B", overallScoreMean: 1, failures: 2 },
    ]);
  });
});

describe("buildDifficultySeries", () => {
  it("coerces null autoFailRate to 0", () => {
    const model: SummaryModelBreakdown = {
      modelId: "m",
      totalQuestions: 1,
      completed: 1,
      failures: 0,
      skipped: 0,
      autoFailCount: 0,
      autoFailRate: 0,
      overallScore: 0,
      overallScoreMean: 0,
      difficultyBreakdown: [
        {
          difficulty: "Easy",
          totalQuestions: 1,
          completed: 1,
          failures: 0,
          skipped: 0,
          autoFailCount: 0,
          autoFailRate: null,
          overallScore: 0,
          overallScoreMean: 0,
        },
      ],
    };

    expect(buildDifficultySeries(model)).toEqual([
      { difficulty: "Easy", autoFailRate: 0 },
    ]);
  });
});
