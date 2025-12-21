import fs from 'node:fs';
import { describe, expect, test } from 'vitest';
import { compileDataset } from '../src/cli/compileDataset';
import { loadJsonl } from '../src/core/dataset/loadJsonl';

describe('compileDataset (mini bank)', () => {
  test('compiles a tiny markdown bank to jsonl that loadJsonl accepts', () => {
    const outPath = 'tmp/mini_compiled.jsonl';
    fs.mkdirSync('tmp', { recursive: true });

    compileDataset({
      inPath: 'data/question_bank_mini.md',
      outPath,
    });

    const loaded = loadJsonl(outPath);
    expect(loaded.lines).toHaveLength(2);
    expect(loaded.lines[0]?.id).toBe('GT-001');
    expect(loaded.lines[1]?.id).toBe('ENG-015');
  });
});
