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

function normalizeRelativeForSort(baseDir: string, filePath: string): string {
  return path.relative(baseDir, filePath).replaceAll(path.sep, '/');
}

export function expandDatasetPaths(datasetPaths: readonly string[]): string[] {
  const resolved: string[] = [];

  for (const p of datasetPaths) {
    const abs = path.resolve(process.cwd(), p);
    const stat = fs.statSync(abs);
    if (stat.isFile()) {
      resolved.push(p);
      continue;
    }

    if (!stat.isDirectory()) {
      throw new Error(`Dataset path must be a file or directory: ${p}`);
    }

    const entries = fs
      .readdirSync(abs, { withFileTypes: true })
      .filter(e => e.isFile() && e.name.toLowerCase().endsWith('.jsonl'))
      .map(e => path.join(abs, e.name))
      .sort((a, b) => {
        const ra = normalizeRelativeForSort(abs, a);
        const rb = normalizeRelativeForSort(abs, b);
        return ra < rb ? -1 : ra > rb ? 1 : 0;
      });

    for (const absEntry of entries) {
      const relFromCwd = path.relative(process.cwd(), absEntry).replaceAll(path.sep, '/');
      resolved.push(relFromCwd);
    }
  }

  return resolved;
}

export type LoadJsonlManyResult = {
  absolutePaths: string[];
  lines: DatasetLine[];
};

export function loadJsonlMany(datasetPaths: readonly string[]): LoadJsonlManyResult {
  const expanded = expandDatasetPaths(datasetPaths);
  const allLines: DatasetLine[] = [];
  const absolutePaths: string[] = [];

  const seenIds = new Map<string, string>();
  for (const datasetPath of expanded) {
    const { absolutePath, lines } = loadJsonl(datasetPath);
    absolutePaths.push(absolutePath);

    const areaFromFile = path.basename(datasetPath, path.extname(datasetPath));

    for (const line of lines) {
      const prev = seenIds.get(line.id);
      if (prev) {
        throw new Error(`Duplicate question id: ${line.id} (seen in ${prev} and ${datasetPath})`);
      }
      seenIds.set(line.id, datasetPath);

      if (line.area && line.area !== areaFromFile) {
        throw new Error(
          `Area mismatch for ${line.id}: filename implies ${areaFromFile} but line has area=${line.area} (${datasetPath})`,
        );
      }

      if (!line.area) {
        allLines.push({ ...line, area: areaFromFile });
        continue;
      }
      allLines.push(line);
    }
  }

  return { absolutePaths, lines: allLines };
}
