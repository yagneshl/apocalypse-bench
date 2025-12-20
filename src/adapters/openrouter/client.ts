import { createOpenRouter } from '@openrouter/ai-sdk-provider';

export type OpenRouterClientOptions = {
  apiKey: string;
  baseUrl?: string;
  headers?: Record<string, string>;
};

export function createOpenRouterClient(opts: OpenRouterClientOptions) {
  return createOpenRouter({
    apiKey: opts.apiKey,
    baseURL: opts.baseUrl,
    headers: opts.headers,
  });
}
