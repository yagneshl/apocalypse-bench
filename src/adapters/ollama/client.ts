import { createOllama } from 'ollama-ai-provider-v2';

export type OllamaClientOptions = {
  baseUrl: string;
};

export function createOllamaClient(opts: OllamaClientOptions) {
  return createOllama({
    baseURL: opts.baseUrl,
  });
}
