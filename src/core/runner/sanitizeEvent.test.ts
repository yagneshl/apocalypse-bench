import { describe, expect, it } from 'vitest';

import { sanitizeEvent } from './sanitizeEvent';
import type { RunnerEvent } from './orchestrator';

describe('sanitizeEvent', () => {
  it('passes through non-question events unchanged', () => {
    const e: RunnerEvent = { type: 'run_completed', runId: 'r1' };
    expect(sanitizeEvent(e)).toBe(e);
  });

  it('drops usage when it cannot extract token counts', () => {
    const e: RunnerEvent = {
      type: 'question_completed',
      runId: 'r1',
      modelId: 'm1',
      questionId: 'q1',
      overallScore: 1,
      usage: { foo: 'bar' },
    };

    expect(sanitizeEvent(e)).toEqual({
      ...e,
      usage: undefined,
    });
  });

  it('extracts tokens from camelCase', () => {
    const e: RunnerEvent = {
      type: 'question_failed',
      runId: 'r1',
      modelId: 'm1',
      questionId: 'q1',
      stage: 'candidate',
      message: 'nope',
      usage: { promptTokens: 1.2, completionTokens: 3.9, totalTokens: 6 },
    };

    expect(sanitizeEvent(e)).toEqual({
      ...e,
      usage: { promptTokens: 1, completionTokens: 3, totalTokens: 6 },
    });
  });

  it('extracts tokens from snake_case and derives totalTokens when missing', () => {
    const e: RunnerEvent = {
      type: 'question_completed',
      runId: 'r1',
      modelId: 'm1',
      questionId: 'q1',
      overallScore: 1,
      usage: { prompt_tokens: 2, completion_tokens: 4 },
    };

    expect(sanitizeEvent(e)).toEqual({
      ...e,
      usage: { promptTokens: 2, completionTokens: 4, totalTokens: 6 },
    });
  });
});
