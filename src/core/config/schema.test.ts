import { describe, expect, test } from 'vitest';

import { toOpenRouterProviderParam } from './schema';

describe('toOpenRouterProviderParam', () => {
  test('returns undefined when empty', () => {
    expect(toOpenRouterProviderParam(undefined)).toBeUndefined();
    expect(toOpenRouterProviderParam({})).toBeUndefined();
  });

  test('converts camelCase routing fields to OpenRouter provider param keys', () => {
    expect(
      toOpenRouterProviderParam({
        requireParameters: true,
        allowFallbacks: false,
        order: ['groq'],
        only: ['groq'],
        ignore: ['moonshot'],
        sort: 'throughput',
        dataCollection: 'deny',
        zdr: true,
        maxPrice: { prompt: 1, completion: 2 },
        quantizations: ['fp8'],
      }),
    ).toEqual({
      require_parameters: true,
      allow_fallbacks: false,
      order: ['groq'],
      only: ['groq'],
      ignore: ['moonshot'],
      sort: 'throughput',
      data_collection: 'deny',
      zdr: true,
      max_price: { prompt: 1, completion: 2 },
      quantizations: ['fp8'],
    });
  });
});
