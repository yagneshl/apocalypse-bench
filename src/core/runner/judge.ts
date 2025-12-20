import { generateObject, NoObjectGeneratedError, type LanguageModel } from 'ai';
import type { z } from 'zod';
import type { ProviderOptions } from '@ai-sdk/provider-utils';
import { judgeOutputSchema, type JudgeOutput } from './types';
import { computeBackoffMs, sleep } from '../../utils/backoff';

export type JudgeRequest = {
  model: LanguageModel;
  prompt: string;
  maxTokens: number;
  temperature: number | null | undefined;
  providerOptions?: ProviderOptions;
};

export type JudgeRetryOptions = {
  maxRetries: number;
  baseMs: number;
  maxMs: number;
};

function isRetryableError(err: unknown): boolean {
  const message = err instanceof Error ? err.message : String(err);
  return /429|5\d\d|timeout|ECONNRESET|ENOTFOUND/i.test(message);
}

async function judgeOnceWithRetry(
  req: JudgeRequest,
  retry: JudgeRetryOptions,
): Promise<{ object: JudgeOutput; raw: unknown }> {
  for (let attempt = 0; attempt <= retry.maxRetries; attempt++) {
    try {
      return await judgeOnce(req);
    } catch (err) {
      const retryable = isRetryableError(err);
      if (!retryable || attempt === retry.maxRetries) throw err;
      await sleep(
        computeBackoffMs(attempt, { retries: retry.maxRetries, baseMs: retry.baseMs, maxMs: retry.maxMs }),
      );
    }
  }
  throw new Error('unreachable');
}

export async function judgeOnce(req: JudgeRequest): Promise<{
  object: JudgeOutput;
  raw: unknown;
}> {
  const result = await generateObject({
    model: req.model,
    schema: judgeOutputSchema as z.ZodTypeAny,
    prompt: req.prompt,
    maxOutputTokens: req.maxTokens,
    temperature: req.temperature ?? undefined,
    providerOptions: req.providerOptions,
  });

  return {
    object: result.object as JudgeOutput,
    raw: {
      response: result.response,
      providerMetadata: result.providerMetadata,
      usage: result.usage,
      finishReason: result.finishReason,
      warnings: result.warnings,
      request: result.request,
    },
  };
}

export async function judgeWithRepairRetry(
  req: JudgeRequest,
  opts?: { retry?: Partial<JudgeRetryOptions> },
): Promise<{
  object: JudgeOutput;
  raw: unknown;
  didRepairRetry: boolean;
}> {
  const retry: JudgeRetryOptions = { maxRetries: 3, baseMs: 600, maxMs: 8000, ...opts?.retry };

  try {
    const { object, raw } = await judgeOnceWithRetry(req, retry);
    return { object, raw, didRepairRetry: false };
  } catch (err) {
    if (isRetryableError(err)) throw err;
    if (!NoObjectGeneratedError.isInstance(err)) throw err;

    const retryPrompt =
      req.prompt +
      '\n\nIMPORTANT: Repair your output to be strictly valid JSON matching the schema. Output JSON only.';

    const backoff = computeBackoffMs(0, { retries: 1, baseMs: 800, maxMs: 4000 });
    await sleep(backoff);
    const { object, raw } = await judgeOnceWithRetry({ ...req, prompt: retryPrompt }, retry);
    return { object, raw, didRepairRetry: true };
  }
}

export function computeOverallScore(params: {
  judgeOutput: JudgeOutput;
  rubric: Array<{ id: string; weight: number; maxScore: number }>;
}): {
  overallScore: number;
  rubricScores: Record<string, number>;
} {
  const { judgeOutput, rubric } = params;
  const rubricScores: Record<string, number> = {};
  let sum = 0;

  for (const item of rubric) {
    const raw = judgeOutput.rubric_scores[item.id] ?? 0;
    const bounded = Math.max(0, Math.min(item.maxScore, raw));
    rubricScores[item.id] = bounded;
    sum += bounded * item.weight;
  }

  return { overallScore: judgeOutput.auto_fail ? 0 : sum, rubricScores };
}
