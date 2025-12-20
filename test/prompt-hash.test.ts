import { describe, expect, test } from 'vitest';
import { promptTemplateHash } from '../src/core/runner/runId';
import { buildCandidatePrompt } from '../src/core/prompts/candidatePrompt';
import { buildJudgePrompt } from '../src/core/prompts/judgePrompt';

describe('prompt template hashing', () => {
  test('is deterministic for the same inputs', () => {
    const h1 = promptTemplateHash(buildCandidatePrompt, buildJudgePrompt);
    const h2 = promptTemplateHash(buildCandidatePrompt, buildJudgePrompt);
    expect(h1).toBe(h2);
    expect(h1).toMatch(/^[a-f0-9]{64}$/);
  });

  test('changes when templates change', () => {
    const a = promptTemplateHash('candidate', 'judge');
    const b = promptTemplateHash('candidate', 'judge v2');
    expect(a).not.toBe(b);

    const f1 = () => 'x';
    const f2 = () => 'y';
    expect(promptTemplateHash(f1, f1)).not.toBe(promptTemplateHash(f1, f2));
  });
});

