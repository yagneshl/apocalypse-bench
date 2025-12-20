import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';
import { datasetLineSchema, type DatasetLine } from './schema';

export type LoadJsonlResult = {
  absolutePath: string;
  lines: DatasetLine[];
};

export function loadJsonl(datasetPath: string): LoadJsonlResult {
  const absolutePath = path.resolve(process.cwd(), datasetPath);
  const contents = fs.readFileSync(absolutePath, 'utf8');
  const rawLines = contents
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(Boolean);

  const lines: DatasetLine[] = [];
  for (let i = 0; i < rawLines.length; i++) {
    let parsedJson: unknown;
    try {
      parsedJson = JSON.parse(rawLines[i]);
    } catch (err) {
      throw new Error(`Invalid JSONL at ${datasetPath}:${i + 1}: ${(err as Error).message}`);
    }

    const parsed = datasetLineSchema.safeParse(parsedJson);
    if (!parsed.success) {
      const message = new z.ZodError(parsed.error.issues).message;
      throw new Error(`Invalid dataset line at ${datasetPath}:${i + 1}: ${message}`);
    }

    lines.push(parsed.data);
  }

  return { absolutePath, lines };
}
