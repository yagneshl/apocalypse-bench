import { describe, expect, test } from 'vitest';
import { datasetLineSchema } from '../src/core/dataset/schema';

describe('dataset schema', () => {
  test('accepts string rubric and normalizes it', () => {
    const result = datasetLineSchema.parse({
      id: 'Q1',
      category: 'cat',
      difficulty: 'Medium',
      scenario: ['a'],
      prompt: 'p',
      rubric: ['one', 'two'],
      auto_fail: ['no'],
    });

    expect(result.rubric).toHaveLength(2);
    expect(result.rubric[0].id).toBe('r1');
    expect(result.rubric[0].weight).toBe(1);
    expect(result.rubric[0].maxScore).toBe(1);
  });
});
