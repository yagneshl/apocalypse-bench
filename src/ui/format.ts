import type { RunnerEvent } from '../core/runner/orchestrator';

export function formatNumber(value: number, decimals: number): string {
  if (!Number.isFinite(value)) return '—';
  return value.toFixed(decimals);
}

export function formatUsd(value: number | null | undefined): string {
  if (typeof value !== 'number' || !Number.isFinite(value)) return '—';
  return `$${formatNumber(value, 4)}`;
}

export function formatDuration(ms: number): string {
  if (!Number.isFinite(ms) || ms < 0) return '—';
  const secondsTotal = Math.floor(ms / 1000);
  const hours = Math.floor(secondsTotal / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = secondsTotal % 60;

  if (hours > 0) return `${hours}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
  if (minutes > 0) return `${minutes}m ${String(seconds).padStart(2, '0')}s`;
  return `${seconds}s`;
}

export type NormalizedUsage = {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
};

function toNonNegativeInt(value: unknown): number | null {
  if (typeof value !== 'number' || !Number.isFinite(value)) return null;
  const rounded = Math.floor(value);
  return rounded >= 0 ? rounded : null;
}

export function normalizeOpenAiStyleUsage(usage: unknown): NormalizedUsage | null {
  const u = usage as
    | {
        prompt_tokens?: unknown;
        completion_tokens?: unknown;
        total_tokens?: unknown;
      }
    | null
    | undefined;
  if (!u) return null;

  const promptTokens = toNonNegativeInt(u.prompt_tokens) ?? 0;
  const completionTokens = toNonNegativeInt(u.completion_tokens) ?? 0;
  const totalTokens =
    toNonNegativeInt(u.total_tokens) ??
    (promptTokens > 0 || completionTokens > 0 ? promptTokens + completionTokens : 0);

  if (totalTokens === 0 && promptTokens === 0 && completionTokens === 0) return null;
  return { promptTokens, completionTokens, totalTokens };
}

export function normalizeUsage(usage: unknown): NormalizedUsage | null {
  const openAi = normalizeOpenAiStyleUsage(usage);
  if (openAi) return openAi;

  const u = usage as
    | {
        promptTokens?: unknown;
        completionTokens?: unknown;
        totalTokens?: unknown;
      }
    | null
    | undefined;
  if (!u) return null;

  const promptTokens = toNonNegativeInt(u.promptTokens) ?? 0;
  const completionTokens = toNonNegativeInt(u.completionTokens) ?? 0;
  const totalTokens =
    toNonNegativeInt(u.totalTokens) ??
    (promptTokens > 0 || completionTokens > 0 ? promptTokens + completionTokens : 0);
  if (totalTokens === 0 && promptTokens === 0 && completionTokens === 0) return null;
  return { promptTokens, completionTokens, totalTokens };
}

export function safeJson(value: unknown, maxLen = 240): string {
  try {
    const s = JSON.stringify(value);
    if (typeof s !== 'string') return '…';
    return s.length > maxLen ? `${s.slice(0, maxLen)}…` : s;
  } catch {
    return '…';
  }
}

export function formatEventSummary(e: RunnerEvent): string {
  switch (e.type) {
    case 'run_started':
      return `run_started ${e.runId}`;
    case 'run_completed':
      return `run_completed ${e.runId}`;
    case 'question_started':
      return `question_started ${e.modelId} ${e.questionId}`;
    case 'question_completed':
      return `question_completed ${e.modelId} ${e.questionId} score=${formatNumber(e.overallScore, 2)}`;
    case 'question_failed':
      return `question_failed ${e.modelId} ${e.questionId} stage=${e.stage} ${e.message}`;
    case 'budget_spent':
      return `budget_spent ${formatUsd(e.spentUsd)}`;
    case 'budget_exceeded':
      return `budget_exceeded max=${formatUsd(e.maxBudgetUsd)}`;
    default:
      return safeJson(e);
  }
}
