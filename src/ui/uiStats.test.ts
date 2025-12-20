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
      nowMs: 10_000,
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
      nowMs: 10_000,
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
      nowMs: 10_000,
    });
    expect(stats.hasOpenRouterGenerationId).toBe(true);
    expect(stats.lastTps).toBe(null);
  });
});
