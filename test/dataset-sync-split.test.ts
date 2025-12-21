import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, test } from 'vitest';
import { compileQuestionBankMdFile } from '../src/core/dataset/compileQuestionBankMd';
import { datasetLineSchema } from '../src/core/dataset/schema';
import { loadJsonlMany } from '../src/core/dataset/loadJsonl';

describe('question bank split md -> jsonl', () => {
  test('compiled split MD matches legacy combined dataset (content + order)', () => {
    const mdDir = 'data/question_bank_v8';
    const mdFiles = fs
      .readdirSync(path.resolve(mdDir))
      .filter(p => p.endsWith('.md') && p !== 'info.md')
      .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
      .map(p => path.join(mdDir, p));

    expect(mdFiles.length).toBeGreaterThan(0);

    const compiledAll = mdFiles.flatMap(mdFile => {
      const compiled = compileQuestionBankMdFile(mdFile);
      const areaFromFilename = path.basename(mdFile, path.extname(mdFile));
      return compiled.questions.map(q =>
        datasetLineSchema.parse({ ...q, area: areaFromFilename }),
      );
    });

    const splitJsonlDir = 'data/question_bank_v8_jsonl';
    const loadedByArea = new Map<string, unknown[]>();
    for (const p of fs.readdirSync(path.resolve(splitJsonlDir))) {
      if (!p.endsWith('.jsonl')) continue;
      const area = p.replace(/\.jsonl$/, '');
      const dataset = loadJsonlMany([`data/question_bank_v8_jsonl/${p}`]);
      loadedByArea.set(area, dataset.lines);
    }

    // Merge while preserving legacy order: take the next question from each area's list when it appears.
    const cursors = new Map<string, number>();
    const mergedOrdered = compiledAll.map(q => {
      const area = q.area;
      if (!area) throw new Error(`Missing area for question ${q.id}`);

      const areaLines = loadedByArea.get(area) as unknown[];
      const idx = cursors.get(area) ?? 0;
      const line = areaLines[idx];
      cursors.set(area, idx + 1);
      return line;
    });

    expect(mergedOrdered).toEqual(compiledAll);

    for (const p of fs.readdirSync(path.resolve(splitJsonlDir))) {
      if (!p.endsWith('.jsonl')) continue;
      const raw = fs.readFileSync(path.join(splitJsonlDir, p), 'utf8');
      expect(raw.endsWith('\n')).toBe(true);
    }
  });
});
