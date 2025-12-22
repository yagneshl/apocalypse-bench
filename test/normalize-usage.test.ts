import { describe, expect, test } from 'vitest';
import { normalizeUsage } from '../src/core/runner/openrouterUsage';

describe('normalizeUsage', () => {
  test('normalizes OpenAI-style usage', () => {
    const usage = {
      prompt_tokens: 12,
      completion_tokens: 34,
      total_tokens: 56,
    };

    expect(normalizeUsage(usage)).toEqual({
      promptTokens: 12,
      completionTokens: 34,
      totalTokens: 56,
    });
  });

  test('normalizes camelCase usage', () => {
    const usage = {
      promptTokens: 10,
      completionTokens: 20,
      totalTokens: 30,
    };

    expect(normalizeUsage(usage)).toEqual({
      promptTokens: 10,
      completionTokens: 20,
      totalTokens: 30,
    });
  });

  test('derives totalTokens when missing', () => {
    const usage = {
      prompt_tokens: 5,
      completion_tokens: 7,
    };

    expect(normalizeUsage(usage)).toEqual({
      promptTokens: 5,
      completionTokens: 7,
      totalTokens: 12,
    });
  });

  test('returns null for all-zero or invalid usage', () => {
    expect(normalizeUsage({ prompt_tokens: 0, completion_tokens: 0 })).toBeNull();
    expect(normalizeUsage({ promptTokens: -1, completionTokens: -2 })).toBeNull();
    expect(normalizeUsage({ promptTokens: 'nope', completionTokens: 'bad' })).toBeNull();
  });

  test('ignores invalid fields when other tokens are valid', () => {
    expect(normalizeUsage({ promptTokens: '3', completionTokens: 1 })).toEqual({
      promptTokens: 0,
      completionTokens: 1,
      totalTokens: 1,
    });
  });

  test('keeps totalTokens when it is the only valid number', () => {
    const usage = {
      promptTokens: 'nope',
      completionTokens: null,
      totalTokens: 9,
    };

    expect(normalizeUsage(usage)).toEqual({
      promptTokens: 0,
      completionTokens: 0,
      totalTokens: 9,
    });
  });
});
