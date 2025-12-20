import { describe, expect, test } from 'vitest';
import { aggregateModel } from '../src/core/scoring/aggregate';
import { diffSummaries } from '../src/core/scoring/diff';

describe('scoring aggregation', () => {
  test('computes totals, rates, latency stats, and breakdowns', () => {
    const summary = aggregateModel({
      modelId: 'm1',
      questionScores: [
        {
          questionId: 'Q1',
          category: 'food',
          difficulty: 'Easy',
          status: 'done',
          overallScore: 2,
          autoFail: false,
          latencyMs: 100,
        },
        {
          questionId: 'Q2',
          category: 'food',
          difficulty: 'Easy',
          status: 'done',
          overallScore: 0,
          autoFail: true,
          latencyMs: 300,
        },
        {
          questionId: 'Q3',
          category: 'water',
          difficulty: 'Hard',
          status: 'judge_failed',
          overallScore: 0,
          autoFail: false,
          latencyMs: 200,
        },
        {
          questionId: 'Q4',
          category: 'water',
          difficulty: 'Hard',
          status: 'skipped',
          overallScore: 0,
          autoFail: false,
          latencyMs: null,
        },
      ],
    });

    expect(summary.totalQuestions).toBe(4);
    expect(summary.completed).toBe(2);
    expect(summary.failures).toBe(1);
    expect(summary.skipped).toBe(1);
    expect(summary.autoFailCount).toBe(1);
    expect(summary.autoFailRate).toBeCloseTo(0.5);
    expect(summary.overallScore).toBe(2);
    expect(summary.overallScoreMean).toBeCloseTo(1);
    expect(summary.latencyMs).toEqual({
      medianMs: 200,
      meanMs: 200,
      p90Ms: 300,
      minMs: 100,
      maxMs: 300,
    });

    expect(summary.categoryBreakdown.map(b => b.category)).toEqual(['food', 'water']);
    expect(summary.categoryBreakdown[0]).toMatchObject({
      category: 'food',
      totalQuestions: 2,
      completed: 2,
      failures: 0,
      skipped: 0,
      autoFailCount: 1,
      overallScore: 2,
    });
    expect(summary.categoryBreakdown[1]).toMatchObject({
      category: 'water',
      totalQuestions: 2,
      completed: 0,
      failures: 1,
      skipped: 1,
      overallScore: 0,
      autoFailRate: null,
    });

    expect(summary.difficultyBreakdown.map(b => b.difficulty)).toEqual(['Easy', 'Hard']);
  });
});

describe('scoring diff', () => {
  test('diffs overall score and auto-fail counts', () => {
    const a = {
      runId: 'a',
      models: [
        { modelId: 'm1', overallScore: 1, autoFailCount: 0 },
        { modelId: 'm3', overallScore: 10, autoFailCount: 0 },
      ],
    };
    const b = {
      runId: 'b',
      models: [
        { modelId: 'm1', overallScore: 3, autoFailCount: 1 },
        { modelId: 'm2', overallScore: 2, autoFailCount: 0 },
      ],
    };

    expect(diffSummaries(a, b)).toEqual([
      {
        modelId: 'm1',
        aOverall: 1,
        bOverall: 3,
        deltaOverall: 2,
        aAutoFail: 0,
        bAutoFail: 1,
      },
      {
        modelId: 'm2',
        aOverall: null,
        bOverall: 2,
        deltaOverall: null,
        aAutoFail: null,
        bAutoFail: 0,
      },
      {
        modelId: 'm3',
        aOverall: 10,
        bOverall: null,
        deltaOverall: null,
        aAutoFail: 0,
        bAutoFail: null,
      },
    ]);
  });
});

