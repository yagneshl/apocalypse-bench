import type { ApocbenchConfig } from '../config/schema';
import type { RunnerEvent } from './orchestrator';
import { fetchOpenRouterGeneration } from '../../adapters/openrouter/generation';

export async function maybeEmitOpenRouterGenerationMetrics(params: {
  config: ApocbenchConfig;
  runId: string;
  modelId: string;
  questionId: string;
  generationId: string;
  onEvent?: (e: RunnerEvent) => void;
}): Promise<void> {
  const { config, runId, modelId, questionId, generationId, onEvent } = params;
  if (!generationId) return;

  const apiKeyEnv = config.routers.openrouter.apiKeyEnv;
  const apiKey = process.env[apiKeyEnv];
  if (!apiKey) return;

  try {
    const metrics = await fetchOpenRouterGeneration({
      baseUrl: config.routers.openrouter.baseUrl,
      apiKey,
      headers: config.routers.openrouter.headers,
      generationId,
    });

    if (!metrics) return;
    const tokens =
      metrics.promptTokens != null &&
      metrics.completionTokens != null &&
      metrics.totalTokens != null
        ? {
            prompt: metrics.promptTokens,
            completion: metrics.completionTokens,
            total: metrics.totalTokens,
          }
        : undefined;

    onEvent?.({
      type: 'generation_metrics',
      runId,
      modelId,
      questionId,
      tps: metrics.tps ?? undefined,
      generationTimeMs: metrics.generationTimeMs ?? undefined,
      tokens,
    });
  } catch {
    // best-effort; do not fail the run
  }
}
