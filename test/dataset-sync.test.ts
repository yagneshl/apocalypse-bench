import fs from 'node:fs';
import { describe, expect, test } from 'vitest';
import { compileQuestionBankMdFile } from '../src/core/dataset/compileQuestionBankMd';
import { datasetLineSchema } from '../src/core/dataset/schema';
import { loadJsonl } from '../src/core/dataset/loadJsonl';

describe('question bank md -> jsonl', () => {
  test('compiled MD matches checked-in JSONL', () => {
    const compiled = compileQuestionBankMdFile('data/question_bank_v7.md');
    const jsonl = loadJsonl('data/question_bank_v7.jsonl');

    // loadJsonl normalizes rubric to objects; the checked-in JSONL uses string rubrics.
    // Normalize the compiled MD to the same shape that loadJsonl returns.
    const compiledNormalized = compiled.questions.map(q => datasetLineSchema.parse(q));
    expect(jsonl.lines).toEqual(compiledNormalized);

    // Also ensure the checked-in JSONL is newline-terminated (stable diff behavior).
    const raw = fs.readFileSync('data/question_bank_v7.jsonl', 'utf8');
    expect(raw.endsWith('\n')).toBe(true);
  });
});
