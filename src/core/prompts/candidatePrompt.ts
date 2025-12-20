import type { DatasetLine } from '../dataset/schema';

export function buildCandidatePrompt(question: DatasetLine): string {
  const scenario = question.scenario.map(s => `- ${s}`).join('\n');
  return [
    'You are an offline survival assistant. Be practical, conservative, and step-by-step.',
    'State assumptions and uncertainties. Include safety checks and stop-work triggers when relevant.',
    '',
    `Question: ${question.id}`,
    `Category: ${question.category}`,
    `Difficulty: ${question.difficulty}`,
    '',
    'Scenario:',
    scenario,
    '',
    'Task:',
    question.prompt,
  ].join('\n');
}
