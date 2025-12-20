import { z } from 'zod';

const requestDefaultsSchema = z
  .object({
    temperature: z.number().nullable().optional(),
    maxTokens: z.number().int().positive().optional(),
    timeoutMs: z.number().int().positive().optional(),
  })
  .strict();

const openRouterRoutingSchema = z
  .object({
    requireParameters: z.boolean().optional(),
    allowFallbacks: z.boolean().optional(),
    order: z.array(z.string()).optional(),
    only: z.array(z.string()).optional(),
    ignore: z.array(z.string()).optional(),
    sort: z.enum(['price', 'throughput', 'latency']).optional(),
    dataCollection: z.enum(['allow', 'deny']).optional(),
    zdr: z.boolean().optional(),
    maxPrice: z
      .object({
        prompt: z.number().optional(),
        completion: z.number().optional(),
        request: z.number().optional(),
        image: z.number().optional(),
      })
      .strict()
      .optional(),
    quantizations: z.array(z.string()).optional(),
  })
  .strict();

export const configSchema = z
  .object({
    run: z
      .object({
        name: z.string().min(1),
        datasetPath: z.string().min(1),
        outDir: z.string().min(1),
        resume: z.boolean(),
        questionLimit: z.number().int().positive().nullable().optional(),
        categories: z.array(z.string().min(1)).nullable().optional(),
        maxBudgetUsd: z.number().positive().nullable().optional(),
        concurrency: z
          .object({
            candidate: z.number().int().positive(),
            judge: z.number().int().positive(),
          })
          .strict(),
      })
      .strict(),

    judge: z
      .object({
        router: z.literal('openrouter'),
        model: z.string().min(1),
        provider: z.string().min(1).optional(),
        temperature: z.number().nullable().optional(),
        maxTokens: z.number().int().positive(),
        structured: z.boolean(),
        routing: openRouterRoutingSchema.optional(),
      })
      .strict(),

    routers: z
      .object({
        ollama: z
          .object({
            baseUrl: z.string().min(1),
            apiKeyEnv: z.string().min(1).nullable().optional(),
            default: requestDefaultsSchema,
          })
          .strict(),
        openrouter: z
          .object({
            baseUrl: z.string().min(1),
            apiKeyEnv: z.string().min(1),
            headers: z.record(z.string(), z.string()).optional(),
            default: requestDefaultsSchema,
          })
          .strict(),
      })
      .strict(),

    models: z
      .array(
        z
          .object({
            id: z.string().min(1),
            router: z.enum(['ollama', 'openrouter']),
            model: z.string().min(1),
            provider: z.string().min(1).optional(),
            params: requestDefaultsSchema.optional(),
            promptFormat: z.string().min(1).optional(),
            routing: openRouterRoutingSchema.optional(),
          })
          .strict(),
      )
      .min(1),
  })
  .strict();

export type ApocbenchConfig = z.infer<typeof configSchema>;
