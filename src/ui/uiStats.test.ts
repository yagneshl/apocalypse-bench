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
