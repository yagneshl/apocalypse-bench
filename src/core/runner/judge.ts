import { generateObject, NoObjectGeneratedError, type LanguageModel } from 'ai';
import type { z } from 'zod';
import type { ProviderOptions } from '@ai-sdk/provider-utils';
import { buildJudgeOutputSchemaWithRubricIds, type JudgeOutput } from './types';
import { computeBackoffMs, sleep } from '../../utils/backoff';

const _deps = {
  generateObject,
};

export type JudgeRequest = {
  model: LanguageModel;
  prompt?: string;
  messages?: Array<{ role: 'system' | 'user'; content: string }>;
  maxTokens: number;
  timeoutMs?: number | null;
  temperature: number | null | undefined;
  providerOptions?: ProviderOptions;
  /** Required rubric IDs - used to build explicit schema keys */
  rubricIds: string[];
};

export type JudgeRetryOptions = {
  maxRetries: number;
  baseMs: number;
  maxMs: number;
};

function isRetryableError(err: unknown): boolean {
  const message = err instanceof Error ? err.message : String(err);
  return /429|5\d\d|timeout|ECONNRESET|ENOTFOUND|aborted/i.test(message);
}

type AbortableCall<T> = {
  call: () => Promise<T>;
  abort: () => void;
};

function createAbortableCall<T>(call: (signal: AbortSignal) => Promise<T>): AbortableCall<T> {
  const controller = new AbortController();
  return {
    call: () => call(controller.signal),
    abort: () => controller.abort(new Error('aborted')),
  };
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
        computeBackoffMs(attempt, {
          retries: retry.maxRetries,
          baseMs: retry.baseMs,
          maxMs: retry.maxMs,
        }),
      );
    }
  }
  throw new Error('unreachable');
}

export async function judgeOnce(req: JudgeRequest): Promise<{
  object: JudgeOutput;
  raw: unknown;
}> {
  // Build schema with explicit rubric ID keys to ensure the model knows which keys are required
  const schema = buildJudgeOutputSchemaWithRubricIds(req.rubricIds);

  if (!req.messages && typeof req.prompt !== 'string') {
    throw new Error('judge request must include either prompt or messages');
  }

  const timeoutMs = req.timeoutMs ?? null;
  if (timeoutMs != null && Number.isFinite(timeoutMs) && timeoutMs > 0) {
    const abortable = createAbortableCall((abortSignal) =>
      _deps.generateObject({
        model: req.model,
        schema: schema as z.ZodTypeAny,
        ...(req.messages ? { messages: req.messages } : { prompt: req.prompt as string }),
        maxOutputTokens: req.maxTokens,
        temperature: req.temperature ?? undefined,
        providerOptions: req.providerOptions,
        abortSignal,
      }),
    );
    const timeoutId = setTimeout(() => abortable.abort(), timeoutMs);
    try {
      const result = await abortable.call();
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
    } finally {
      clearTimeout(timeoutId);
    }
  }

  const result = await _deps.generateObject({
    model: req.model,
    schema: schema as z.ZodTypeAny,
    ...(req.messages ? { messages: req.messages } : { prompt: req.prompt as string }),
    maxOutputTokens: req.maxTokens,
    temperature: req.temperature ?? undefined,
    providerOptions: req.providerOptions,
  });

  // Debug: log parsed object to see what the model is returning
  if (process.env.DEBUG_JUDGE) {
    console.error('[DEBUG_JUDGE] Parsed object:', JSON.stringify(result.object, null, 2));
  }

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

export function __setJudgeDepsForTest(next: Partial<typeof _deps>): void {
  Object.assign(_deps, next);
}

export async function judgeWithRepairRetry(
  req: JudgeRequest,
  opts?: { retry?: Partial<JudgeRetryOptions> },
): Promise<{
  object: JudgeOutput;
  raw: unknown;
  didRepairRetry: boolean;
}> {
  const retry: JudgeRetryOptions = {
    maxRetries: 3,
    baseMs: 600,
    maxMs: 8000,
    ...opts?.retry,
  };

  try {
    const { object, raw } = await judgeOnceWithRetry(req, retry);
    return { object, raw, didRepairRetry: false };
  } catch (err) {
    if (isRetryableError(err)) throw err;
    if (!NoObjectGeneratedError.isInstance(err)) throw err;

    const retryPrompt =
      (req.messages
        ? req.messages.map((m) => m.content).join('\n')
        : (req.prompt as string)) +
      '\n\nIMPORTANT: Repair your output to be strictly valid JSON matching the schema. Output JSON only.';

    const backoff = computeBackoffMs(0, { retries: 1, baseMs: 800, maxMs: 4000 });
    await sleep(backoff);
    const { object, raw } = await judgeOnceWithRetry({ ...req, prompt: retryPrompt, messages: undefined }, retry);
    return { object, raw, didRepairRetry: true };
  }
}

function missingRubricIds(params: {
  judgeOutput: JudgeOutput;
  rubric: Array<{ id: string }>;
}): string[] {
  const scored = params.judgeOutput.rubric_scores ?? {};
  const missing: string[] = [];
  for (const item of params.rubric) {
    if (typeof scored[item.id] !== 'number') missing.push(item.id);
  }
  return missing;
}

export async function judgeWithRubricCompletenessRetry(
  req: JudgeRequest,
  params: { rubric: Array<{ id: string }> },
  opts?: { retry?: Partial<JudgeRetryOptions> },
): Promise<{
  object: JudgeOutput;
  raw: unknown;
  didRepairRetry: boolean;
}> {
  const first = await judgeWithRepairRetry(req, opts);
  const missing = missingRubricIds({ judgeOutput: first.object, rubric: params.rubric });
  if (missing.length === 0) return first;

  const rubricIds = params.rubric.map((r) => r.id).join(', ');
  const retryPrompt =
    (req.messages
      ? req.messages.map((m) => m.content).join('\n')
      : (req.prompt as string)) +
    `\n\nIMPORTANT: Your prior output omitted rubric_scores for required ids. ` +
    `Output JSON only. rubric_scores must include ALL ids: ${rubricIds}. ` +
    `Do not omit any id.`;

  const second = await judgeWithRepairRetry(
    { ...req, prompt: retryPrompt, messages: undefined },
    opts,
  );
  const stillMissing = missingRubricIds({
    judgeOutput: second.object,
    rubric: params.rubric,
  });
  if (stillMissing.length > 0) {
    throw new Error(
      `judge output missing rubric_scores for ids: ${stillMissing.join(', ')}`,
    );
  }

  return { ...second, didRepairRetry: true };
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
