import fs from 'node:fs';
import path from 'node:path';

type Question = {
  id: string;
  category: string;
  title: string;
  difficulty: string;
  task_type: string;
  scenario: string[];
  prompt: string;
  rubric: string[];
  auto_fail: string[];
  reference_facts: string[];
};

export type CompileResult = {
  questions: Question[];
};

const SECTION_RE = /^##\s+([A-Z]+-\d+):\s*(.+)\s*$/;
const BULLET_RE = /^-\s+(.*)$/;
const CODE_FENCE_START_RE = /^```\s*text\s*$/;
const CODE_FENCE_END_RE = /^```\s*$/;

function normalizeNewlines(s: string): string {
  return s.replace(/\r\n?/g, '\n');
}

function stripMdBold(s: string): string {
  return s.replace(/\*\*(.*?)\*\*/g, '$1');
}

function fail(msg: string, line?: number): never {
  const suffix = line == null ? '' : ` (line ${line})`;
  throw new Error(`${msg}${suffix}`);
}

function readCodeBlockText(lines: string[], startIndex: number): { value: string; nextIndex: number } {
  if (!CODE_FENCE_START_RE.test(lines[startIndex] ?? '')) {
    fail('Expected ```text block start', startIndex + 1);
  }

  const buf: string[] = [];
  let i = startIndex + 1;
  while (i < lines.length) {
    if (CODE_FENCE_END_RE.test(lines[i] ?? '')) {
      return { value: buf.join('\n').trimEnd(), nextIndex: i + 1 };
    }
    buf.push(lines[i] ?? '');
    i += 1;
  }

  fail('Unterminated ```text block', startIndex + 1);
}

function parseInlineValue(line: string, lineNumber: number): string {
  const normalized = stripMdBold(line);
  const m = normalized.match(/^[-*]\s+(.+?):\s*(.+)\s*$/);
  if (!m) {
    // Helpful for debugging mismatches between expected and actual markdown formatting.
    fail(`Expected metadata line like "- **Category:** ..." but got: ${JSON.stringify(line)}`, lineNumber);
  }
  return m[2]!.trim();
}

function extractRubricAndReferenceFacts(section: string): { rubric: string[]; reference_facts: string[] } {
  const rubricStart = section.indexOf('### Rubric (10 points)');
  if (rubricStart === -1) {
    return { rubric: [], reference_facts: [] };
  }

  const afterRubric = section.slice(rubricStart);
  const rubricPartEnd = afterRubric.indexOf('### Auto-fail');
  const rubricPart = rubricPartEnd === -1 ? afterRubric : afterRubric.slice(0, rubricPartEnd);
  const rubricLines = rubricPart
    .split('\n')
    .map(l => l.trim())
    .filter(l => /^\d+\./.test(l));
  const rubric = rubricLines.map(l => l.replace(/^\d+\.\s*/, '').trim());

  const referenceStart = section.indexOf('### Reference facts (for judge)');
  if (referenceStart === -1) {
    return { rubric, reference_facts: [] };
  }

  const referencePart = section.slice(referenceStart);
  const referenceLines = referencePart
    .split('\n')
    .map(l => l.trim())
    .map(stripMdBold)
    .filter(l => BULLET_RE.test(l))
    .map(l => (l.match(BULLET_RE)?.[1] ?? '').trim())
    .filter(Boolean);

  return { rubric, reference_facts: referenceLines };
}

function extractAutoFail(section: string): string[] {
  const autoStart = section.indexOf('### Auto-fail');
  if (autoStart === -1) return [];
  const autoPart = section.slice(autoStart);

  const lines = autoPart
    .split('\n')
    .map(l => l.trim())
    .map(stripMdBold)
    .filter(l => BULLET_RE.test(l))
    .map(l => (l.match(BULLET_RE)?.[1] ?? '').trim())
    .filter(Boolean);

  return lines;
}

export function compileQuestionBankMd(markdown: string): CompileResult {
  const text = normalizeNewlines(markdown);
  const lines = text.split('\n');

  // Ignore file-level intro before the first question heading.
  {
    let firstHeader = -1;
    for (let idx = 0; idx < lines.length; idx += 1) {
      if (SECTION_RE.test(lines[idx] ?? '')) {
        firstHeader = idx;
        break;
      }
    }
    if (firstHeader > 0) {
      lines.splice(0, firstHeader);
    }
  }

  const questions: Question[] = [];
  let i = 0;

  while (i < lines.length) {
    const header = lines[i] ?? '';
    const m = header.match(SECTION_RE);
    if (!m) {
      i += 1;
      continue;
    }

    const id = m[1]!;
    const title = m[2]!;
    const sectionStart = i;

    let sectionEnd = i + 1;
    while (sectionEnd < lines.length && !SECTION_RE.test(lines[sectionEnd] ?? '')) {
      sectionEnd += 1;
    }

    const sectionLines = lines.slice(sectionStart, sectionEnd);
    const sectionText = sectionLines.join('\n');

    let category = '';
    let difficulty = '';
    let task_type = '';
    let scenario: string[] = [];
    let prompt = '';

    for (let j = 0; j < sectionLines.length; j += 1) {
      const line = sectionLines[j] ?? '';
      const absoluteLine = sectionStart + j + 1;

      const trimmed = line.trim();

      if (trimmed.startsWith('- **Category:**')) category = parseInlineValue(trimmed, absoluteLine);
      if (trimmed.startsWith('- **Difficulty:**')) difficulty = parseInlineValue(trimmed, absoluteLine);
      if (trimmed.startsWith('- **Task type:**')) task_type = parseInlineValue(trimmed, absoluteLine);

      if (line.trim() === '### Scenario') {
        const buf: string[] = [];
        let k = j + 1;
        while (k < sectionLines.length) {
          const raw = sectionLines[k] ?? '';
          if (raw.trim().startsWith('### ')) break;
          const bm = raw.trim().match(BULLET_RE);
          if (bm) buf.push(bm[1]!.trim());
          k += 1;
        }
        scenario = buf;
      }

      if (line.trim() === '### Prompt') {
        let k = j + 1;
        while (k < sectionLines.length && (sectionLines[k] ?? '').trim() === '') k += 1;
        if (k >= sectionLines.length) fail('Missing prompt code block', absoluteLine);

        const { value } = readCodeBlockText(sectionLines, k);
        prompt = value;
      }
    }

    if (!category) fail(`Missing Category for ${id}`);
    if (!difficulty) fail(`Missing Difficulty for ${id}`);
    if (!task_type) fail(`Missing Task type for ${id}`);
    if (scenario.length === 0) fail(`Missing Scenario bullets for ${id}`);
    if (!prompt) fail(`Missing Prompt block for ${id}`);

    const { rubric, reference_facts } = extractRubricAndReferenceFacts(sectionText);
    const auto_fail = extractAutoFail(sectionText);

    if (rubric.length !== 10) fail(`Expected 10 rubric items for ${id}, got ${rubric.length}`);
    if (auto_fail.length === 0) fail(`Missing Auto-fail items for ${id}`);

    questions.push({
      id,
      category,
      title,
      difficulty,
      task_type,
      scenario,
      prompt,
      rubric,
      auto_fail,
      reference_facts,
    });

    i = sectionEnd;
  }

  if (questions.length === 0) {
    throw new Error('No questions found in markdown (expected headings like "## GT-001: ...")');
  }

  return { questions };
}

export function compileQuestionBankMdFile(mdPath: string): CompileResult {
  const abs = path.resolve(mdPath);
  const markdown = fs.readFileSync(abs, 'utf8');
  return compileQuestionBankMd(markdown);
}
