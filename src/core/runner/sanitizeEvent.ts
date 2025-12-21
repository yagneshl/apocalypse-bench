import type { RunnerEvent } from './orchestrator';

type UsageTokens = {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
};

export function sanitizeEvent(e: RunnerEvent): RunnerEvent {
  if (e.type !== 'question_completed' && e.type !== 'question_failed') return e;

  const usageTokens = extractUsageTokens(e.usage);
  if (!usageTokens) return { ...e, usage: undefined };

  return { ...e, usage: usageTokens };
}

function extractUsageTokens(usage: unknown): UsageTokens | undefined {
  if (!usage || typeof usage !== 'object') return undefined;
  const u = usage as Record<string, unknown>;

  const promptTokens =
    toNonNegativeInt(u.promptTokens) ?? toNonNegativeInt(u.prompt_tokens) ?? 0;
  const completionTokens =
    toNonNegativeInt(u.completionTokens) ??
    toNonNegativeInt(u.completion_tokens) ??
    0;
  const totalTokens =
    toNonNegativeInt(u.totalTokens) ??
    toNonNegativeInt(u.total_tokens) ??
    promptTokens + completionTokens;

  if (promptTokens === 0 && completionTokens === 0 && totalTokens === 0) return undefined;
  return { promptTokens, completionTokens, totalTokens };
}

function toNonNegativeInt(value: unknown): number | null {
  if (typeof value !== 'number' || !Number.isFinite(value)) return null;
  const rounded = Math.floor(value);
  return rounded >= 0 ? rounded : null;
}
