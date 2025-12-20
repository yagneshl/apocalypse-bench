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

  return [
    'You are a strict evaluator. Output ONLY valid JSON matching the requested schema.',
    'Score each rubric item by id with a number within [0, maxScore].',
    'If auto_fail triggers, set auto_fail=true, overall_score=0, and include a reason.',
    'Keep notes concise and specific.',
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
