import type { DatasetLine } from '../dataset/schema';

export function buildCandidatePrompt(question: DatasetLine): string {
  return [
    'You are an offline survival assistant. Be practical, conservative, and step-by-step.',
    'State assumptions and uncertainties. Include safety checks and stop-work triggers when relevant.',
    '',
    question.prompt,
  ].join('\n');
}
