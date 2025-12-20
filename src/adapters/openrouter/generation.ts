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

export function computeTpsFromGeneration(
  data: OpenRouterGeneration['data'],
): OpenRouterGenerationMetrics {
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
    promptTokens != null && completionTokens != null
      ? promptTokens + completionTokens
      : null;

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

async function fetchOnce(
  url: string,
  apiKey: string,
  headers?: Record<string, string>,
): Promise<OpenRouterGeneration | null> {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      ...(headers ?? {}),
    },
  });

  if (!res.ok) return null;
  return (await res.json()) as OpenRouterGeneration;
}

export async function fetchOpenRouterGeneration(params: {
  baseUrl: string;
  apiKey: string;
  headers?: Record<string, string>;
  generationId: string;
}): Promise<OpenRouterGenerationMetrics | null> {
  // Ensure baseUrl ends with '/' so URL resolution appends rather than replaces the last segment
  const normalizedBase = params.baseUrl.endsWith('/')
    ? params.baseUrl
    : `${params.baseUrl}/`;
  const url = new URL('generation', normalizedBase);
  url.searchParams.set('id', params.generationId);
  const urlStr = url.toString();

  // OpenRouter generation data isn't available immediately after a request completes.
  // Retry with short delays to allow the data to become available.
  const maxAttempts = 3;
  const delayMs = 1500;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    if (attempt > 0) {
      await new Promise((r) => setTimeout(r, delayMs));
    }

    const json = await fetchOnce(urlStr, params.apiKey, params.headers);
    if (json) {
      return computeTpsFromGeneration(json.data);
    }
  }

  return null;
}
