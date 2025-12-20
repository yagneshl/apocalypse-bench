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
  const costUsd = typeof costRaw === 'number' && Number.isFinite(costRaw) ? costRaw : null;
  return { usage: usageNorm, costUsd };
}
