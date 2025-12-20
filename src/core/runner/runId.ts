import { sha256Hex } from '../../utils/hash';

export type PromptTemplateSource = string | ((...args: never[]) => unknown);

export function formatUtcTimestampForRunId(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return [
    d.getUTCFullYear(),
    pad(d.getUTCMonth() + 1),
    pad(d.getUTCDate()),
    '-',
    pad(d.getUTCHours()),
    pad(d.getUTCMinutes()),
    pad(d.getUTCSeconds()),
  ].join('');
}

export function makeRunId(name: string, now: Date = new Date()): string {
  const safeName = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64);

  return `${safeName}-${formatUtcTimestampForRunId(now)}`;
}

export function promptTemplateHash(
  candidatePromptTemplate: PromptTemplateSource,
  judgePromptTemplate: PromptTemplateSource,
): string {
  const candidateSource =
    typeof candidatePromptTemplate === 'string'
      ? candidatePromptTemplate
      : candidatePromptTemplate.toString();
  const judgeSource =
    typeof judgePromptTemplate === 'string' ? judgePromptTemplate : judgePromptTemplate.toString();

  return sha256Hex(candidateSource + '\n---\n' + judgeSource);
}
