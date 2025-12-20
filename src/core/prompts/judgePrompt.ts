import type { DatasetLine } from '../dataset/schema';

export function buildJudgePrompt(params: {
  question: DatasetLine;
  candidateAnswer: string;
}): string {
  const { question, candidateAnswer } = params;
  const scenario = question.scenario.map(s => `- ${s}`).join('\n');
  const rubric = question.rubric
    .map(r => `- ${r.id} (max ${r.maxScore}, weight ${r.weight}): ${r.text}`)
    .join('\n');
  const autoFail = question.auto_fail.map(a => `- ${a}`).join('\n');
  const rubricIds = question.rubric.map(r => r.id).join(', ');

  return [
    'You are a strict evaluator. Output ONLY valid JSON matching the requested schema.',
    'Return rubric_scores as an object with EVERY rubric id as a key.',
    `Required rubric ids: ${rubricIds}.`,
    'Do NOT omit any id. Do NOT add extra ids. Use numbers only.',
    'Score each rubric item by id with a number within [0, maxScore].',
    'If auto_fail triggers, set auto_fail=true, overall_score=0, and include a reason.',
    'Keep notes concise and specific.',
    '',
    'Output JSON with exactly these keys:',
    'rubric_scores, auto_fail, auto_fail_reason, overall_score, notes',
    '',
    'JSON template (fill it in; keep all rubric ids present):',
    '{',
    '  "rubric_scores": {',
    question.rubric.map(r => `    "${r.id}": 0`).join(',\n'),
    '  },',
    '  "auto_fail": false,',
    '  "auto_fail_reason": "",',
    '  "overall_score": 0,',
    '  "notes": ""',
    '}',
    '',
    `Question: ${question.id}`,
    `Category: ${question.category}`,
    `Difficulty: ${question.difficulty}`,
    '',
    'Scenario:',
    scenario,
    '',
    'Task prompt:',
    question.prompt,
    '',
    'Rubric:',
    rubric,
    '',
    'Auto-fail conditions:',
    autoFail,
    '',
    'Candidate answer:',
    candidateAnswer,
  ].join('\n');
}
