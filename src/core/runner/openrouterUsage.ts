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

/**
 * Normalize usage from any format (AI SDK, OpenAI-style, etc.) to a simple object.
 * This is critical for memory management: the original usage object from the AI SDK
 * may retain references to internal buffers and response objects. By extracting just
 * the numeric token counts, we allow the full response to be garbage collected.
 */
export function normalizeUsage(usage: unknown): NormalizedUsage | null {
  if (!usage || typeof usage !== 'object') return null;
  const u = usage as Record<string, unknown>;

  // Handle AI SDK format (camelCase)
  const promptTokens =
    toNonNegativeInt(u.promptTokens) ?? toNonNegativeInt(u.prompt_tokens) ?? 0;
  const completionTokens =
    toNonNegativeInt(u.completionTokens) ?? toNonNegativeInt(u.completion_tokens) ?? 0;
  const totalTokens =
    toNonNegativeInt(u.totalTokens) ??
    toNonNegativeInt(u.total_tokens) ??
    (promptTokens > 0 || completionTokens > 0 ? promptTokens + completionTokens : 0);

  if (promptTokens === 0 && completionTokens === 0 && totalTokens === 0) return null;
  return { promptTokens, completionTokens, totalTokens };
}

export function normalizeOpenRouterUsageFromProviderMetadata(providerMetadata: unknown): {
  usage: NormalizedUsage | null;
  costUsd: number | null;
} {
  const pm = providerMetadata as
    | {
        openrouter?: {
          usage?: {
            promptTokens?: unknown;
            completionTokens?: unknown;
            totalTokens?: unknown;
            cost?: unknown;
          };
        };
      }
    | null
    | undefined;

  const orUsage = pm?.openrouter?.usage;
  const promptTokens = toNonNegativeInt(orUsage?.promptTokens) ?? 0;
  const completionTokens = toNonNegativeInt(orUsage?.completionTokens) ?? 0;
  const totalTokens =
    toNonNegativeInt(orUsage?.totalTokens) ??
    (promptTokens > 0 || completionTokens > 0 ? promptTokens + completionTokens : 0);
  const usageNorm =
    totalTokens === 0 && promptTokens === 0 && completionTokens === 0
      ? null
      : { promptTokens, completionTokens, totalTokens };

  const costRaw = orUsage?.cost;
  const costUsd =
    typeof costRaw === 'number' && Number.isFinite(costRaw) ? costRaw : null;
  return { usage: usageNorm, costUsd };
}
