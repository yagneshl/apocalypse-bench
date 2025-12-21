import fs from 'node:fs';
import path from 'node:path';
import { datasetLineSchema } from '../core/dataset/schema';
import { compileQuestionBankMdFile } from '../core/dataset/compileQuestionBankMd';

// Usage:
//   pnpm -s compile:dataset -- --in data/question_bank_v8 --out data/question_bank_v8_jsonl
// Notes:
// - `data/question_bank_v8/*.md` is the human-editable source (shared context in info.md).
// - `data/question_bank_v8_jsonl/*.jsonl` is what apocbench loads at runtime.
// - `pnpm -s test -- test/dataset-sync-split.test.ts` enforces they match.

function writeJsonl(filePath: string, lines: unknown[]): void {
  const out = lines.map(l => JSON.stringify(l)).join('\n') + '\n';
  fs.writeFileSync(filePath, out, 'utf8');
}

export function compileDataset(params: { inPath: string; outPath: string }): void {
  const compiled = compileQuestionBankMdFile(params.inPath);
  const areaFromFilename = path.basename(params.inPath, path.extname(params.inPath));
  const normalized = compiled.questions.map(q => {
    // Ensure output matches what the runtime loader expects.
    const withArea = { ...q, area: areaFromFilename };

    const parsed = datasetLineSchema.parse(withArea);
    return { ...parsed, rubric: parsed.rubric.map(r => r.text) };
  });
  writeJsonl(params.outPath, normalized);
}

function listTopLevelMarkdownFiles(dirPath: string): string[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  return entries
    .filter(e => e.isFile() && e.name.toLowerCase().endsWith('.md') && e.name.toLowerCase() !== 'info.md')
    .map(e => path.join(dirPath, e.name))
    .sort((a, b) => {
      const ra = path.relative(dirPath, a).replaceAll(path.sep, '/');
      const rb = path.relative(dirPath, b).replaceAll(path.sep, '/');
      return ra < rb ? -1 : ra > rb ? 1 : 0;
    });
}

function compileDatasetDirToDir(params: { inDir: string; outDir: string }): void {
  const inFiles = listTopLevelMarkdownFiles(params.inDir);
  if (inFiles.length === 0) {
    throw new Error(`No .md files found in input directory: ${params.inDir}`);
  }

  fs.mkdirSync(params.outDir, { recursive: true });

  for (const inFile of inFiles) {
    const stem = path.basename(inFile, path.extname(inFile));
    const outFile = path.join(params.outDir, `${stem}.jsonl`);
    compileDataset({ inPath: inFile, outPath: outFile });
  }
}

function main(): void {
  const args = process.argv.slice(2);
  const inIdx = args.indexOf('--in');
  const outIdx = args.indexOf('--out');

  const inPath = inIdx === -1 ? undefined : args[inIdx + 1];
  const outPath = outIdx === -1 ? undefined : args[outIdx + 1];

  if (!inPath || !outPath) {
    console.error('Usage: pnpm -s compile:dataset -- --in data/question_bank_v8 --out data/question_bank_v8_jsonl');
    process.exitCode = 2;
    return;
  }

  const absIn = path.resolve(inPath);
  const absOut = path.resolve(outPath);

  const inStat = fs.statSync(absIn);
  const outStat = fs.existsSync(absOut) ? fs.statSync(absOut) : null;

  if (inStat.isFile()) {
    if (outStat && outStat.isDirectory()) {
      throw new Error(`Invalid IO: file -> dir is not allowed (in=${inPath}, out=${outPath})`);
    }
    compileDataset({ inPath: absIn, outPath: absOut });
    return;
  }

  if (inStat.isDirectory()) {
    if (outStat && outStat.isFile()) {
      throw new Error(`Invalid IO: dir -> file is not allowed (in=${inPath}, out=${outPath})`);
    }
    compileDatasetDirToDir({ inDir: absIn, outDir: absOut });
    return;
  }

  throw new Error(`Input path must be a file or directory: ${inPath}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
