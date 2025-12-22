import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, test } from 'vitest';
import { compileQuestionBankMdFile } from '../src/core/dataset/compileQuestionBankMd';
import { datasetLineSchema } from '../src/core/dataset/schema';
import { loadJsonlMany } from '../src/core/dataset/loadJsonl';

describe('question bank jsonl -> md', () => {
  test('compiled MD matches split JSONL files (content + order)', () => {
    const mdDir = 'data/question_bank_v8';
    const splitJsonlDir = 'data/question_bank_v8_jsonl';

    const jsonlFiles = fs
      .readdirSync(path.resolve(splitJsonlDir))
      .filter(p => p.endsWith('.jsonl'))
      .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

    expect(jsonlFiles.length).toBeGreaterThan(0);

    const mdFiles = fs
      .readdirSync(path.resolve(mdDir))
      .filter(p => p.endsWith('.md') && p !== 'info.md')
      .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

    const jsonlStems = jsonlFiles.map(p => path.basename(p, path.extname(p)));
    const mdStems = mdFiles.map(p => path.basename(p, path.extname(p)));
    expect(mdStems).toEqual(jsonlStems);

    for (const stem of jsonlStems) {
      const mdFile = path.join(mdDir, `${stem}.md`);
      const compiled = compileQuestionBankMdFile(mdFile);
      const compiledLines = compiled.questions.map(q =>
        datasetLineSchema.parse({ ...q, area: stem }),
      );

      const dataset = loadJsonlMany([`data/question_bank_v8_jsonl/${stem}.jsonl`]);
      expect(dataset.lines).toEqual(compiledLines);

      const raw = fs.readFileSync(path.join(splitJsonlDir, `${stem}.jsonl`), 'utf8');
      expect(raw.endsWith('\n')).toBe(true);
    }
  });
});
