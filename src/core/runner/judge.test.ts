import { describe, expect, test } from 'vitest';

import type { JudgeOutput } from './types';
import { computeOverallScore } from './judge';
describe('computeOverallScore', () => {
  test('treats missing rubric ids as 0 (so callers must enforce completeness)', () => {
    const judgeOutput: JudgeOutput = {
      rubric_scores: {},
      auto_fail: false,
      overall_score: 999,
      notes: 'n',
    };

    const computed = computeOverallScore({
      judgeOutput,
      rubric: [
        { id: 'r1', weight: 1, maxScore: 1 },
        { id: 'r2', weight: 1, maxScore: 1 },
      ],
    });

    expect(computed.rubricScores).toEqual({ r1: 0, r2: 0 });
    expect(computed.overallScore).toBe(0);
  });
});

