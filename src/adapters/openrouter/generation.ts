export type OpenRouterGeneration = {
  data?: {
    id?: string;
    generation_time?: number | null;
    latency?: number | null;
    tokens_prompt?: number | null;
    tokens_completion?: number | null;
    native_tokens_prompt?: number | null;
    native_tokens_completion?: number | null;
  };
};

export type OpenRouterGenerationMetrics = {
  generationTimeMs: number | null;
  latencyMs: number | null;
  promptTokens: number | null;
  completionTokens: number | null;
  totalTokens: number | null;
  tps: number | null;
};

function toFiniteNumber(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

function toNonNegativeInt(value: unknown): number | null {
  const num = toFiniteNumber(value);
  if (num == null) return null;
  const floored = Math.floor(num);
  return floored >= 0 ? floored : null;
}

export function computeTpsFromGeneration(data: OpenRouterGeneration['data']): OpenRouterGenerationMetrics {
  const generationTimeMs = toFiniteNumber(data?.generation_time);
  const latencyMs = toFiniteNumber(data?.latency);

  const promptTokens =
    toNonNegativeInt(data?.tokens_prompt) ??
    toNonNegativeInt(data?.native_tokens_prompt) ??
    null;
  const completionTokens =
    toNonNegativeInt(data?.tokens_completion) ??
    toNonNegativeInt(data?.native_tokens_completion) ??
    null;

  const totalTokens =
    promptTokens != null && completionTokens != null ? promptTokens + completionTokens : null;

  const tps =
    completionTokens != null && generationTimeMs != null && generationTimeMs > 0
      ? completionTokens / (generationTimeMs / 1000)
      : null;

  return {
    generationTimeMs,
    latencyMs,
    promptTokens,
    completionTokens,
    totalTokens,
    tps,
  };
}

export async function fetchOpenRouterGeneration(params: {
  baseUrl: string;
  apiKey: string;
  headers?: Record<string, string>;
  generationId: string;
}): Promise<OpenRouterGenerationMetrics | null> {
  const url = new URL('generation', params.baseUrl);
  url.searchParams.set('id', params.generationId);

  const res = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${params.apiKey}`,
      ...(params.headers ?? {}),
    },
  });

  if (!res.ok) return null;

  const json = (await res.json()) as OpenRouterGeneration;
  return computeTpsFromGeneration(json.data);
}
