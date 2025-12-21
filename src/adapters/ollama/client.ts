import { createOllama } from 'ollama-ai-provider-v2';

export type OllamaClientOptions = {
  baseUrl: string;
};

export function createOllamaClient(opts: OllamaClientOptions) {
  const baseURL = opts.baseUrl.replace(/\/$/, '');
  return createOllama({
    baseURL,
    name: 'ollama',
  });
}
