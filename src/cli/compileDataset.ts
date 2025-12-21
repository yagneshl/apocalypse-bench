import fs from 'node:fs';
import path from 'node:path';
import { datasetLineSchema } from '../core/dataset/schema';
import { compileQuestionBankMdFile } from '../core/dataset/compileQuestionBankMd';

// Usage:
//   pnpm -s compile:dataset -- --in data/question_bank_v7.md --out data/question_bank_v7.jsonl
// Notes:
// - `data/question_bank_v7.md` is the human-editable source.
// - `data/question_bank_v7.jsonl` is what apocbench loads at runtime.
// - `pnpm -s test -- test/dataset-sync.test.ts` enforces they match.

function writeJsonl(filePath: string, lines: unknown[]): void {
  const out = lines.map(l => JSON.stringify(l)).join('\n') + '\n';
  fs.writeFileSync(filePath, out, 'utf8');
}

export function compileDataset(params: { inPath: string; outPath: string }): void {
  const compiled = compileQuestionBankMdFile(params.inPath);
  const normalized = compiled.questions.map(q => {
    // Ensure output matches what the runtime loader expects.
    const parsed = datasetLineSchema.parse(q);
    return { ...parsed, rubric: parsed.rubric.map(r => r.text) };
  });
  writeJsonl(params.outPath, normalized);
}

function main(): void {
  const args = process.argv.slice(2);
  const inIdx = args.indexOf('--in');
  const outIdx = args.indexOf('--out');

  const inPath = inIdx === -1 ? undefined : args[inIdx + 1];
  const outPath = outIdx === -1 ? undefined : args[outIdx + 1];

  if (!inPath || !outPath) {
    console.error('Usage: pnpm -s compile:dataset -- --in data/question_bank_v7.md --out data/question_bank_v7.jsonl');
    process.exitCode = 2;
    return;
  }

  const absIn = path.resolve(inPath);
  const absOut = path.resolve(outPath);
  compileDataset({ inPath: absIn, outPath: absOut });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
