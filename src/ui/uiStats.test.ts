import { describe, expect, test } from 'vitest';
import type { RunnerEvent } from '../core/runner/orchestrator';
import { computeUiStats } from './uiStats';

describe('computeUiStats', () => {
  test('aggregates completed/failed, tokens, cost, and progress', () => {
    const events: RunnerEvent[] = [
      { type: 'run_started', runId: 'r1', startedAtMs: 1_000 },
      { type: 'question_started', runId: 'r1', modelId: 'm1', questionId: 'q1' },
      {
        type: 'question_completed',
        runId: 'r1',
        modelId: 'm1',
        questionId: 'q1',
        overallScore: 0.8,
        latencyMs: 1200,
        usage: { prompt_tokens: 10, completion_tokens: 5, total_tokens: 15 },
        costUsd: 0.002,
      },
      {
        type: 'generation_metrics',
        runId: 'r1',
        modelId: 'm1',
        questionId: 'q1',
        tps: 50,
      },
      {
        type: 'generation_metrics',
        runId: 'r1',
        modelId: 'm1',
        questionId: 'q1',
        tps: 10,
      },
      {
        type: 'generation_metrics',
        runId: 'r1',
        modelId: 'm1',
        questionId: 'q1',
        tps: 100,
      },
      { type: 'question_started', runId: 'r1', modelId: 'm1', questionId: 'q2' },
      {
        type: 'question_failed',
        runId: 'r1',
        modelId: 'm1',
        questionId: 'q2',
        stage: 'candidate',
        message: 'boom',
        latencyMs: 500,
        usage: { prompt_tokens: 3, completion_tokens: 0, total_tokens: 3 },
        costUsd: 0.001,
      },
      { type: 'budget_spent', runId: 'r1', spentUsd: 0.003 },
      { type: 'budget_exceeded', runId: 'r1', maxBudgetUsd: 1 },
    ];

    const stats = computeUiStats({
      events,
      totalQuestions: 4,
      questionsPerModel: 4,
      modelCount: 1,
    });
    expect(stats.runId).toBe('r1');
    expect(stats.completedCount).toBe(1);
    expect(stats.failedCount).toBe(1);
    expect(stats.progress).toBeCloseTo(0.5);
    expect(stats.budgetSpentUsd).toBeCloseTo(0.003);
    expect(stats.budgetMaxUsd).toBe(1);

    expect(stats.models).toHaveLength(1);
    expect(stats.models[0].modelId).toBe('m1');
    expect(stats.models[0].completed).toBe(1);
    expect(stats.models[0].failed).toBe(1);
    expect(stats.models[0].usage?.totalTokens).toBe(18);
    expect(stats.models[0].costUsd).toBeCloseTo(0.003);

    expect(stats.lastTps).toBe(50);
    expect(stats.hasOpenRouterGenerationId).toBe(false);
  });

  test('keeps totals monotonic even when event window drops old events', () => {
    const makeCompleted = (questionId: string, costUsd: number): RunnerEvent => ({
      type: 'question_completed',
      runId: 'r1',
      modelId: 'm1',
      questionId,
      overallScore: 1,
      usage: { promptTokens: 1, completionTokens: 1, totalTokens: 2 },
      costUsd,
    });

    const totals = {
      completedCount: 3,
      failedCount: 0,
      runningScoreSum: 3,
      tpsSamples: [],
      perModelTpsSamples: {},
      perModel: {
        m1: {
          completed: 3,
          failed: 0,
          scoreSum: 3,
          tokens: { promptTokens: 3, completionTokens: 3, totalTokens: 6 },
          costUsd: 0.006,
        },
      },
    };

    // Simulate truncated window that only contains the last completion.
    const truncated: RunnerEvent[] = [
      { type: 'run_started', runId: 'r1', startedAtMs: 1_000 },
      makeCompleted('q3', 0.003),
    ];

    const stats = computeUiStats({
      events: truncated,
      totals,
      totalQuestions: 3,
      questionsPerModel: 3,
      modelCount: 1,
    });

    expect(stats.completedCount).toBe(3);
    expect(stats.failedCount).toBe(0);
    expect(stats.models).toHaveLength(1);
    expect(stats.models[0].costUsd).toBeCloseTo(0.006);
    expect(stats.models[0].usage?.totalTokens).toBe(6);
    expect(stats.lastEvent).toEqual(truncated[truncated.length - 1]);

    // Sanity check: without totals, aggregation would reflect truncated window only.
    const statsWithoutTotals = computeUiStats({
      events: truncated,
      totalQuestions: 3,
      questionsPerModel: 3,
      modelCount: 1,
    });
    expect(statsWithoutTotals.completedCount).toBe(1);
  });

  test('preserves TPS median from totals when event window is truncated', () => {
    // TPS samples: 10, 50, 100 → median = 50
    const totals = {
      completedCount: 3,
      failedCount: 0,
      runningScoreSum: 3,
      tpsSamples: [10, 50, 100],
      perModelTpsSamples: { m1: [10, 50, 100] },
      perModel: {
        m1: {
          completed: 3,
          failed: 0,
          scoreSum: 3,
          tokens: { promptTokens: 3, completionTokens: 3, totalTokens: 6 },
          costUsd: 0.006,
        },
      },
    };

    // Truncated window has no generation_metrics events
    const truncated: RunnerEvent[] = [
      { type: 'run_started', runId: 'r1', startedAtMs: 1_000 },
    ];

    const stats = computeUiStats({
      events: truncated,
      totals,
      totalQuestions: 3,
      questionsPerModel: 3,
      modelCount: 1,
    });

    // Should use median from totals.tpsSamples (50), not null
    expect(stats.lastTps).toBe(50);
    // Model TPS should also use median from totals
    expect(stats.models[0].lastTps).toBe(50);
  });

  test('computes correct median TPS with even number of samples', () => {
    // TPS samples: 10, 20, 30, 40 → median = (20 + 30) / 2 = 25
    const totals = {
      completedCount: 4,
      failedCount: 0,
      runningScoreSum: 4,
      tpsSamples: [10, 20, 30, 40],
      perModelTpsSamples: { m1: [10, 20, 30, 40] },
      perModel: {
        m1: {
          completed: 4,
          failed: 0,
          scoreSum: 4,
          tokens: { promptTokens: 4, completionTokens: 4, totalTokens: 8 },
          costUsd: 0.008,
        },
      },
    };

    const stats = computeUiStats({
      events: [{ type: 'run_started', runId: 'r1', startedAtMs: 1_000 }],
      totals,
      totalQuestions: 4,
      questionsPerModel: 4,
      modelCount: 1,
    });

    expect(stats.lastTps).toBe(25);
    expect(stats.models[0].lastTps).toBe(25);
  });

  test('ignores computed/guessed TPS and shows not available when missing', () => {
    const events: RunnerEvent[] = [
      { type: 'run_started', runId: 'r1', startedAtMs: 1_000 },
      { type: 'question_started', runId: 'r1', modelId: 'm1', questionId: 'q1' },
      {
        type: 'question_completed',
        runId: 'r1',
        modelId: 'm1',
        questionId: 'q1',
        overallScore: 0.8,
        latencyMs: 1200,
        usage: { prompt_tokens: 10, completion_tokens: 5, total_tokens: 15 },
        costUsd: 0.002,
      },
      {
        type: 'generation_metrics',
        runId: 'r1',
        modelId: 'm1',
        questionId: 'q1',
      },
    ];

    const stats = computeUiStats({
      events,
      totalQuestions: 1,
      questionsPerModel: 1,
      modelCount: 1,
    });
    expect(stats.lastTps).toBe(null);
    expect(stats.hasOpenRouterGenerationId).toBe(false);
  });

  test('tracks presence of OpenRouter generation id separately from TPS', () => {
    const events: RunnerEvent[] = [
      { type: 'run_started', runId: 'r1', startedAtMs: 1_000 },
      {
        type: 'generation_metrics',
        runId: 'r1',
        modelId: 'm1',
        questionId: 'q1',
        generationId: 'gen_123',
      },
    ];

    const stats = computeUiStats({
      events,
      totalQuestions: 1,
      questionsPerModel: 1,
      modelCount: 1,
    });
    expect(stats.hasOpenRouterGenerationId).toBe(true);
    expect(stats.lastTps).toBe(null);
  });

  test('ranks models by score (highest first)', () => {
    const events: RunnerEvent[] = [
      { type: 'run_started', runId: 'r1', startedAtMs: 1_000 },
      {
        type: 'question_completed',
        runId: 'r1',
        modelId: 'm1',
        questionId: 'q1',
        overallScore: 5,
      },
      {
        type: 'question_completed',
        runId: 'r1',
        modelId: 'm2',
        questionId: 'q1',
        overallScore: 8,
      },
      {
        type: 'question_completed',
        runId: 'r1',
        modelId: 'm3',
        questionId: 'q1',
        overallScore: 3,
      },
    ];

    const stats = computeUiStats({
      events,
      totalQuestions: 3,
      questionsPerModel: 1,
      modelCount: 3,
    });

    expect(stats.models).toHaveLength(3);
    const m1 = stats.models.find((m) => m.modelId === 'm1');
    const m2 = stats.models.find((m) => m.modelId === 'm2');
    const m3 = stats.models.find((m) => m.modelId === 'm3');

    expect(m2?.rank).toBe(1); // highest score
    expect(m1?.rank).toBe(2);
    expect(m3?.rank).toBe(3); // lowest score
  });
});
