import fs from 'node:fs';
import path from 'node:path';
import { datasetLineSchema, type DatasetLine } from '../core/dataset/schema';

// Usage:
//   pnpm -s decompile:dataset -- --in data/question_bank_v8_jsonl --out data/question_bank_v8
// Notes:
// - `data/question_bank_v8_jsonl/*.jsonl` is the runtime dataset.
// - This script regenerates markdown files for human review/editing.

function normalizeNewlines(s: string): string {
  return s.replace(/\r\n?/g, '\n');
}

function readJsonl(filePath: string): DatasetLine[] {
  const text = fs.readFileSync(filePath, 'utf8');
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  return lines.map(line => datasetLineSchema.parse(JSON.parse(line)));
}

function formatScenario(scenario: string[]): string[] {
  if (scenario.length === 0) return ['(omitted)'];
  if (scenario.length === 1 && scenario[0]?.trim() === '(omitted)') return ['(omitted)'];
  return scenario.map(line => `- ${line}`);
}

function formatRubric(rubric: DatasetLine['rubric']): string[] {
  return rubric.map((item, index) => `${index + 1}. ${item.text.replace(/\s+/g, ' ').trim()}`);
}

function formatAutoFail(autoFail: string[]): string[] {
  if (autoFail.length === 0) return ['- (omitted)'];
  return autoFail.map(line => `- ${line}`);
}

function formatReferenceFacts(referenceFacts: string[] | undefined): string[] {
  if (!referenceFacts || referenceFacts.length === 0) return [];
  return referenceFacts.map(line => `- ${line}`);
}

function formatQuestion(q: DatasetLine): string {
  const title = q.title?.trim() || q.id;
  const category = q.category;
  const difficulty = q.difficulty;
  const taskType = q.task_type?.trim() || 'procedure';
  const scenarioLines = formatScenario(q.scenario ?? ['(omitted)']);
  const prompt = normalizeNewlines(q.prompt ?? '').trimEnd();
  const rubricLines = formatRubric(q.rubric);
  const autoFailLines = formatAutoFail(q.auto_fail ?? []);
  const referenceFactLines = formatReferenceFacts(q.reference_facts);

  const lines: string[] = [];
  lines.push(`## ${q.id}: ${title}`);
  lines.push(`- **Category:** ${category}`);
  lines.push(`- **Difficulty:** ${difficulty}`);
  lines.push(`- **Task type:** ${taskType}`);
  lines.push('');
  lines.push('### Scenario');
  lines.push(...scenarioLines);
  lines.push('');
  lines.push('### Prompt');
  lines.push('```text');
  lines.push(prompt);
  lines.push('```');
  lines.push('');
  lines.push('### Rubric (10 points)');
  lines.push(...rubricLines);
  lines.push('');
  lines.push('### Auto-fail (score = 0 if any)');
  lines.push(...autoFailLines);
  if (referenceFactLines.length > 0) {
    lines.push('');
    lines.push('### Reference facts (for judge)');
    lines.push(...referenceFactLines);
  }

  return lines.join('\n');
}

function writeMarkdown(filePath: string, questions: DatasetLine[]): void {
  const sections = questions.map(q => formatQuestion(q));
  const text = sections.join('\n\n---\n\n') + '\n';
  fs.writeFileSync(filePath, text, 'utf8');
}

function listTopLevelJsonlFiles(dirPath: string): string[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  return entries
    .filter(e => e.isFile() && e.name.toLowerCase().endsWith('.jsonl'))
    .map(e => path.join(dirPath, e.name))
    .sort((a, b) => {
      const ra = path.relative(dirPath, a).replaceAll(path.sep, '/');
      const rb = path.relative(dirPath, b).replaceAll(path.sep, '/');
      return ra < rb ? -1 : ra > rb ? 1 : 0;
    });
}

function decompileDatasetFile(params: { inPath: string; outPath: string }): void {
  const questions = readJsonl(params.inPath);
  writeMarkdown(params.outPath, questions);
}

function decompileDatasetDirToDir(params: { inDir: string; outDir: string }): void {
  const inFiles = listTopLevelJsonlFiles(params.inDir);
  if (inFiles.length === 0) {
    throw new Error(`No .jsonl files found in input directory: ${params.inDir}`);
  }

  fs.mkdirSync(params.outDir, { recursive: true });

  for (const inFile of inFiles) {
    const stem = path.basename(inFile, path.extname(inFile));
    const outFile = path.join(params.outDir, `${stem}.md`);
    decompileDatasetFile({ inPath: inFile, outPath: outFile });
  }
}

function main(): void {
  const args = process.argv.slice(2);
  const inIdx = args.indexOf('--in');
  const outIdx = args.indexOf('--out');

  const inPath = inIdx === -1 ? undefined : args[inIdx + 1];
  const outPath = outIdx === -1 ? undefined : args[outIdx + 1];

  if (!inPath || !outPath) {
    console.error('Usage: pnpm -s decompile:dataset -- --in data/question_bank_v8_jsonl --out data/question_bank_v8');
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
    decompileDatasetFile({ inPath: absIn, outPath: absOut });
    return;
  }

  if (inStat.isDirectory()) {
    if (outStat && outStat.isFile()) {
      throw new Error(`Invalid IO: dir -> file is not allowed (in=${inPath}, out=${outPath})`);
    }
    decompileDatasetDirToDir({ inDir: absIn, outDir: absOut });
    return;
  }

  throw new Error(`Input path must be a file or directory: ${inPath}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
