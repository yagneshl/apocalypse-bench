import fs from 'node:fs';
import path from 'node:path';
import PQueue from 'p-queue';
import { generateText } from 'ai';
import type { LanguageModel } from 'ai';
import type { ProviderOptions } from '@ai-sdk/provider-utils';

import type { ApocbenchConfig } from '../config/schema';
import type { DatasetLine } from '../dataset/schema';
import { buildCandidatePrompt } from '../prompts/candidatePrompt';
import { buildJudgePrompt } from '../prompts/judgePrompt';
import { CANDIDATE_SYSTEM_PROMPT, JUDGE_SYSTEM_PROMPT } from '../prompts/systemPrompts';
import { aggregateModel } from '../scoring/aggregate';
import { computeOverallScore, judgeWithRubricCompletenessRetry } from './judge';
import { makeRunId, promptTemplateHash } from './runId';
import type { CandidateMetrics, JudgeOutput } from './types';
import { sha256FileHex } from '../../utils/hash';
import { redactSecrets } from '../../utils/redaction';
import { computeBackoffMs, sleep } from '../../utils/backoff';
import { writeJson } from '../../reports/json/exports';
import { renderHtmlReport } from '../../reports/html/renderHtml';
import { openAndMigrate } from '../../storage/sqlite/migrate';
import { insertRun, updateRunStatus } from '../../storage/sqlite/runs';
import { insertQuestions } from '../../storage/sqlite/questions';
import { isResultDone, upsertResult } from '../../storage/sqlite/results';
import { listRunModelResults } from '../../storage/sqlite/queries';
import {
  normalizeOpenRouterUsageFromProviderMetadata,
  normalizeUsage,
  type NormalizedUsage,
} from './openrouterUsage';
import { fetchOpenRouterGeneration } from '../../adapters/openrouter/generation';
import { toOpenRouterProviderParam } from '../config/schema';

export type RunnerEvent =
  | { type: 'run_started'; runId: string; startedAtMs: number }
  | { type: 'question_started'; runId: string; modelId: string; questionId: string }
  | {
      type: 'generation_metrics';
      runId: string;
      modelId: string;
      questionId: string;
      generationId?: string;
      tps?: number;
      generationTimeMs?: number;
      tokens?: { prompt: number; completion: number; total: number };
    }
  | {
      type: 'question_completed';
      runId: string;
      modelId: string;
      questionId: string;
      overallScore: number;
      latencyMs?: number;
      usage?: unknown;
      costUsd?: number;
    }
  | {
      type: 'question_failed';
      runId: string;
      modelId: string;
      questionId: string;
      stage: 'candidate' | 'judge';
      message: string;
      latencyMs?: number;
      usage?: unknown;
      costUsd?: number;
    }
  | { type: 'budget_exceeded'; runId: string; maxBudgetUsd: number }
  | { type: 'budget_spent'; runId: string; spentUsd: number; source: 'candidate' | 'judge' }
  | { type: 'run_completed'; runId: string };

export type RunnerDeps = {
  resolveModel: (
    modelEntry: ApocbenchConfig['models'][number],
    config: ApocbenchConfig,
  ) => LanguageModel;
  resolveJudgeModel: (config: ApocbenchConfig) => LanguageModel;
  toolVersion: string;
};

type AbortableCall<T> = {
  call: () => Promise<T>;
  signal: AbortSignal;
  abort: () => void;
};

function createAbortableCall<T>(call: (signal: AbortSignal) => Promise<T>): AbortableCall<T> {
  const controller = new AbortController();
  return {
    call: () => call(controller.signal),
    signal: controller.signal,
    abort: () => controller.abort(new Error('aborted')),
  };
}

export type RunResult = {
  runId: string;
  outDir: string;
  summaryPath: string;
  reportPath: string;
};

export async function runBenchmark(params: {
  config: ApocbenchConfig;
  configPath: string;
  datasetPath: string;
  datasetAbsolutePath: string;
  questions: DatasetLine[];
  deps: RunnerDeps;
  dryRun: boolean;
  runIdOverride?: string;
  selectedModelIds?: string[];
  limitOverride?: number | null;
  categoriesOverride?: string[] | null;
  forceResume?: boolean;
  onEvent?: (e: RunnerEvent) => void;
}): Promise<RunResult | null> {
  const {
    config,
    datasetAbsolutePath,
    questions: allQuestions,
    deps,
    dryRun,
    selectedModelIds,
    onEvent,
  } = params;

  const resumeMode = config.run.resume || params.forceResume === true;

  const questionLimit = params.limitOverride ?? config.run.questionLimit ?? null;
  const categories = params.categoriesOverride ?? config.run.categories ?? null;

  let questions = allQuestions;
  if (categories && categories.length > 0) {
    const allowed = new Set(categories);
    questions = questions.filter((q) => allowed.has(q.category));
  }
  if (questionLimit != null) {
    questions = questions.slice(0, questionLimit);
  }

  const datasetSha = sha256FileHex(datasetAbsolutePath);
  const templateHash = promptTemplateHash(buildCandidatePrompt, buildJudgePrompt);

  if (dryRun) return null;

  const runId = params.runIdOverride ?? makeRunId(config.run.name);
  const runOutDir = path.resolve(process.cwd(), config.run.outDir, runId);

  onEvent?.({ type: 'run_started', runId, startedAtMs: Date.now() });

  const db = openAndMigrate(
    path.resolve(process.cwd(), config.run.outDir, 'apocbench.sqlite'),
  );
  const existingRun = db
    .prepare('SELECT run_id FROM runs WHERE run_id = ?')
    .get(runId) as { run_id: string } | undefined;
  if (!existingRun) {
    insertRun(db, {
      run_id: runId,
      created_at: new Date().toISOString(),
      tool_version: deps.toolVersion,
      config_json: JSON.stringify(config),
      dataset_path: datasetAbsolutePath,
      dataset_sha256: datasetSha,
      prompt_template_hash: templateHash,
      status: 'running',
    });
  } else {
    updateRunStatus(db, runId, 'running');
  }
  insertQuestions(db, runId, questions);

  const judgeModel = deps.resolveJudgeModel(config);

  const models = config.models.filter((m) =>
    selectedModelIds && selectedModelIds.length > 0
      ? selectedModelIds.includes(m.id)
      : true,
  );

  const judgeQueue = new PQueue({ concurrency: config.run.concurrency.judge });
  const perModelQueue = new Map<string, PQueue>();

  for (const model of models) {
    perModelQueue.set(
      model.id,
      new PQueue({ concurrency: config.run.concurrency.candidate }),
    );
  }

  const maxBudgetUsd = config.run.maxBudgetUsd ?? null;
  let spentUsd = 0;
  let budgetExceededEmitted = false;

  function extractOpenRouterCost(raw: unknown): number | null {
    const pm = (raw as { providerMetadata?: unknown } | null | undefined)?.providerMetadata as
      | {
          openrouter?: {
            cost?: unknown;
            usage?: { cost?: unknown };
          };
        }
      | null
      | undefined;

    const cost = pm?.openrouter?.cost;
    if (typeof cost === 'number' && Number.isFinite(cost)) return cost;

    const usageCost = pm?.openrouter?.usage?.cost;
    return typeof usageCost === 'number' && Number.isFinite(usageCost) ? usageCost : null;
  }

  function emitBudgetExceededIfNeeded(): void {
    if (maxBudgetUsd == null || spentUsd < maxBudgetUsd || budgetExceededEmitted) return;
    budgetExceededEmitted = true;
    onEvent?.({ type: 'budget_exceeded', runId, maxBudgetUsd });
  }

  function recordSpend(costUsd: number, source: 'candidate' | 'judge'): void {
    if (!Number.isFinite(costUsd) || costUsd <= 0) return;
    spentUsd += costUsd;
    onEvent?.({ type: 'budget_spent', runId, spentUsd, source });
    emitBudgetExceededIfNeeded();
  }

  function isBudgetExceeded(): boolean {
    emitBudgetExceededIfNeeded();
    return maxBudgetUsd != null && spentUsd >= maxBudgetUsd;
  }

  const tasks: Array<Promise<void>> = [];

  const retryPolicy = { maxRetries: 3, baseMs: 600, maxMs: 8000 };

  function extractOpenRouterGenerationId(result: unknown): string | null {
    const responseId = (result as { response?: { id?: unknown } } | null | undefined)
      ?.response?.id;
    if (typeof responseId === 'string' && responseId.length > 0) return responseId;

    const topLevelId = (result as { id?: unknown } | null | undefined)?.id;
    if (typeof topLevelId === 'string' && topLevelId.length > 0) return topLevelId;

    const providerMetadataId = (
      result as
        | { providerMetadata?: { openrouter?: { id?: unknown } } }
        | null
        | undefined
    )?.providerMetadata?.openrouter?.id;
    if (typeof providerMetadataId === 'string' && providerMetadataId.length > 0)
      return providerMetadataId;

    return null;
  }

  async function maybeEmitOpenRouterGenerationMetrics(p: {
    modelId: string;
    questionId: string;
    generationId: string;
  }): Promise<void> {
    const { generationId } = p;
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
        modelId: p.modelId,
        questionId: p.questionId,
        tps: metrics.tps ?? undefined,
        generationTimeMs: metrics.generationTimeMs ?? undefined,
        tokens,
      });
    } catch {
      // best-effort; do not fail the run
    }
  }

  type GenerateTextArgs = Parameters<typeof generateText>[0];

  type TextMessages = Array<
    | { role: 'system'; content: string }
    | { role: 'user'; content: string }
  >;

  async function generateTextWithRetry(p: {
    call: Omit<GenerateTextArgs, 'abortSignal'>;
    timeoutMs?: number | null;
  }): Promise<Awaited<ReturnType<typeof generateText>>> {
    for (let attempt = 0; attempt <= retryPolicy.maxRetries; attempt++) {
      try {
        const timeoutMs = p.timeoutMs ?? null;
        if (timeoutMs != null && Number.isFinite(timeoutMs) && timeoutMs > 0) {
          const abortable = createAbortableCall((abortSignal) => {
            return generateText({
              ...(p.call as GenerateTextArgs),
              abortSignal,
            });
          });
          const timeoutId = setTimeout(() => abortable.abort(), timeoutMs);
          try {
            return await abortable.call();
          } finally {
            clearTimeout(timeoutId);
          }
        }

        return await generateText(p.call as GenerateTextArgs);
      } catch (err) {
        const msg = (err as Error).message;
        const retryable = /429|5\d\d|timeout|ECONNRESET|ENOTFOUND|aborted/i.test(msg);
        if (!retryable || attempt === retryPolicy.maxRetries) throw err;
        await sleep(
          computeBackoffMs(attempt, {
            retries: retryPolicy.maxRetries,
            baseMs: retryPolicy.baseMs,
            maxMs: retryPolicy.maxMs,
          }),
        );
      }
    }
    throw new Error('unreachable');
  }

  for (const modelEntry of models) {
    const candidateModel = deps.resolveModel(modelEntry, config);
    const modelQueue = perModelQueue.get(modelEntry.id)!;

    for (const q of questions) {
      tasks.push(
        modelQueue.add(async () => {
          if (resumeMode && isResultDone(db, runId, modelEntry.id, q.id)) {
            return;
          }

          if (isBudgetExceeded()) {
            upsertResult(db, {
              runId,
              modelId: modelEntry.id,
              questionId: q.id,
              status: 'skipped',
              errorJson: JSON.stringify({ reason: 'budget_exceeded' }),
            });
            return;
          }

          onEvent?.({
            type: 'question_started',
            runId,
            modelId: modelEntry.id,
            questionId: q.id,
          });

          const candidatePrompt = buildCandidatePrompt(q);
          const candidateStart = Date.now();

          // These variables capture only primitive/normalized data to avoid retaining
          // references to the large AI SDK response objects in closures.
          let lastCandidateLatencyMs: number | undefined;
          let lastCandidateUsage: NormalizedUsage | null | undefined;
          let lastCandidateCostUsd: number | undefined;

          try {
            const candidateResult = await generateTextWithRetry({
              timeoutMs:
                modelEntry.params?.timeoutMs ??
                config.routers[modelEntry.router].default.timeoutMs ??
                null,
              call: {
                model: candidateModel,
                messages: [
                  { role: 'system', content: CANDIDATE_SYSTEM_PROMPT },
                  { role: 'user', content: candidatePrompt },
                ] as TextMessages,
                temperature:
                  modelEntry.params?.temperature ??
                  config.routers[modelEntry.router].default.temperature ??
                  undefined,
                maxOutputTokens:
                  modelEntry.router === 'openrouter'
                    ? (config.candidate?.maxTokens ??
                        modelEntry.params?.maxTokens ??
                        config.routers[modelEntry.router].default.maxTokens ??
                        undefined)
                    : undefined,
                providerOptions: (modelEntry.router === 'openrouter'
                  ? {
                      openrouter: {
                        ...(modelEntry.routing
                          ? { provider: toOpenRouterProviderParam(modelEntry.routing) }
                          : modelEntry.provider
                            ? {
                                provider: {
                                  order: [modelEntry.provider],
                                  allow_fallbacks: false,
                                },
                              }
                            : {}),
                      },
                    }
                  : modelEntry.router === 'ollama'
                    ? {
                        ollama: {
                          options: {
                            num_predict:
                              config.candidate?.maxTokens ??
                              modelEntry.params?.maxTokens ??
                              config.routers[modelEntry.router].default.maxTokens ??
                              undefined,
                          },
                        },
                      }
                    : undefined) as ProviderOptions | undefined,
              },
            });

            const candidateText = candidateResult.text;
            const candidateCostUsd = extractOpenRouterCost(candidateResult);
            if (candidateCostUsd != null) recordSpend(candidateCostUsd, 'candidate');

            lastCandidateLatencyMs = Date.now() - candidateStart;
            // Extract and normalize usage immediately to break reference to candidateResult.
            // This is critical: the AI SDK response object can be large and retaining it
            // in closures (like the judge queue task) causes memory accumulation.
            const candidateOr = normalizeOpenRouterUsageFromProviderMetadata(
              (candidateResult as { providerMetadata?: unknown } | null | undefined)
                ?.providerMetadata,
            );
            // Prefer OpenRouter normalized usage, fall back to normalizing standard usage
            lastCandidateUsage =
              candidateOr.usage ?? normalizeUsage(candidateResult.usage);
            lastCandidateCostUsd = candidateOr.costUsd ?? candidateCostUsd ?? undefined;

            const candidateGenerationId = extractOpenRouterGenerationId(candidateResult);
            if (candidateGenerationId) {
              onEvent?.({
                type: 'generation_metrics',
                runId,
                modelId: modelEntry.id,
                questionId: q.id,
                generationId: candidateGenerationId,
              });
            }

            // Fire-and-forget: don't block candidate slot for metrics fetch
            // Note: Only pass the generationId, not the full result, to avoid retaining
            // the large AI SDK response object in the closure until the async completes.
            if (candidateGenerationId) {
              void maybeEmitOpenRouterGenerationMetrics({
                modelId: modelEntry.id,
                questionId: q.id,
                generationId: candidateGenerationId,
              });
            }

            const metrics: CandidateMetrics = {
              latencyMs: lastCandidateLatencyMs,
              usage: lastCandidateUsage,
              costUsd: lastCandidateCostUsd,
            };

            upsertResult(db, {
              runId,
              modelId: modelEntry.id,
              questionId: q.id,
              candidatePrompt,
              candidateCompletion: candidateText,
              candidateMetricsJson: JSON.stringify(metrics),
              status: 'candidate_done',
            });

            if (isBudgetExceeded()) {
              upsertResult(db, {
                runId,
                modelId: modelEntry.id,
                questionId: q.id,
                status: 'skipped',
                errorJson: JSON.stringify({ reason: 'budget_exceeded' }),
              });
              return;
            }

            // Don't await - let the candidate slot free up immediately
            // The judgeQueue.onIdle() at the end ensures all judge tasks complete
            void judgeQueue.add(async () => {
              if (isBudgetExceeded()) {
                upsertResult(db, {
                  runId,
                  modelId: modelEntry.id,
                  questionId: q.id,
                  status: 'skipped',
                  errorJson: JSON.stringify({ reason: 'budget_exceeded' }),
                });
                return;
              }

              const judgePrompt = buildJudgePrompt({
                question: q,
                candidateAnswer: candidateText,
              });
              const rubricIds = q.rubric.map((r) => r.id);
              try {
                const { object, raw } = await judgeWithRubricCompletenessRetry(
                  {
                    model: judgeModel,
                    messages: [
                      { role: 'system', content: JUDGE_SYSTEM_PROMPT },
                      { role: 'user', content: judgePrompt },
                    ] as TextMessages,
                    maxTokens: config.judge.maxTokens,
                    timeoutMs: config.routers.openrouter.default.timeoutMs ?? null,
                    temperature: config.judge.temperature,
                    providerOptions: {
                      openrouter: {
                        ...(config.judge.routing
                          ? { provider: toOpenRouterProviderParam(config.judge.routing) }
                          : config.judge.provider
                            ? {
                                provider: {
                                  order: [config.judge.provider],
                                  allow_fallbacks: false,
                                },
                              }
                            : {}),
                      },
                    } as ProviderOptions,
                    rubricIds,
                  },
                  { rubric: q.rubric.map((r) => ({ id: r.id })) },
                  { retry: retryPolicy },
                );

                const computed = computeOverallScore({
                  judgeOutput: object,
                  rubric: q.rubric.map((r) => ({
                    id: r.id,
                    weight: r.weight,
                    maxScore: r.maxScore,
                  })),
                });

                const judgeParsed: JudgeOutput = {
                  ...object,
                  overall_score: computed.overallScore,
                };

                const judgeCostUsd = extractOpenRouterCost(raw);
                if (judgeCostUsd != null) recordSpend(judgeCostUsd, 'judge');

                const redactedRequest = redactSecrets({
                  model: config.judge.model,
                  provider: config.judge.provider,
                });

                db.transaction(() => {
                  upsertResult(db, {
                    runId,
                    modelId: modelEntry.id,
                    questionId: q.id,
                    judgeRequestJson: JSON.stringify(redactedRequest),
                    judgeResponseJson: JSON.stringify(raw),
                    judgeParsedJson: JSON.stringify(judgeParsed),
                    scoreOverall: computed.overallScore,
                    scoreRubricJson: JSON.stringify(computed.rubricScores),
                    autoFail: judgeParsed.auto_fail,
                    autoFailReason: judgeParsed.auto_fail_reason,
                    status: 'done',
                  });
                })();

                onEvent?.({
                  type: 'question_completed',
                  runId,
                  modelId: modelEntry.id,
                  questionId: q.id,
                  overallScore: computed.overallScore,
                  latencyMs: lastCandidateLatencyMs,
                  usage: lastCandidateUsage,
                  costUsd: lastCandidateCostUsd,
                });

                // Fire-and-forget: don't block judge slot for metrics fetch
                // Extract generation ID immediately to avoid retaining the full response
                const judgeGenerationId = extractOpenRouterGenerationId(raw);
                if (judgeGenerationId) {
                  void maybeEmitOpenRouterGenerationMetrics({
                    modelId: modelEntry.id,
                    questionId: q.id,
                    generationId: judgeGenerationId,
                  });
                }
              } catch (err) {
                const message = (err as Error).message;
                upsertResult(db, {
                  runId,
                  modelId: modelEntry.id,
                  questionId: q.id,
                  status: 'judge_failed',
                  errorJson: JSON.stringify({ message }),
                });
                onEvent?.({
                  type: 'question_failed',
                  runId,
                  modelId: modelEntry.id,
                  questionId: q.id,
                  stage: 'judge',
                  message,
                  latencyMs: lastCandidateLatencyMs,
                  usage: lastCandidateUsage,
                  costUsd: lastCandidateCostUsd,
                });

                // On failure path, no generation ID to fetch metrics for
                // (removed fire-and-forget call that passed null result)
              }
            });
          } catch (err) {
            const message = (err as Error).message;
            const candidateLatencyMs = Date.now() - candidateStart;
            upsertResult(db, {
              runId,
              modelId: modelEntry.id,
              questionId: q.id,
              candidatePrompt,
              status: 'candidate_failed',
              errorJson: JSON.stringify({ message }),
            });
            onEvent?.({
              type: 'question_failed',
              runId,
              modelId: modelEntry.id,
              questionId: q.id,
              stage: 'candidate',
              message,
              latencyMs: candidateLatencyMs,
            });
          }
        }),
      );
    }
  }

  await Promise.all(tasks);
  await judgeQueue.onIdle();

  const modelIds = models.map((m) => m.id);
  const summaries =
    modelIds.length === 0
      ? []
      : (() => {
          const placeholders = modelIds.map(() => '?').join(', ');
          const rows = db
            .prepare(
              `
              SELECT
                mr.model_id,
                mr.question_id,
                mr.status,
                mr.score_overall,
                mr.auto_fail,
                mr.candidate_metrics_json,
                q.category,
                q.difficulty
              FROM model_results mr
              JOIN questions q
                ON q.run_id = mr.run_id AND q.question_id = mr.question_id
              WHERE mr.run_id = ? AND mr.model_id IN (${placeholders})
            `,
            )
            .all(runId, ...modelIds) as Array<{
            model_id: string;
            question_id: string;
            status: string;
            score_overall: number | null;
            auto_fail: number | null;
            candidate_metrics_json: string | null;
            category: string | null;
            difficulty: string | null;
          }>;

          type KnownStatus =
            | 'done'
            | 'candidate_done'
            | 'candidate_failed'
            | 'judge_failed'
            | 'skipped';
          const toKnownStatus = (s: string): KnownStatus =>
            s === 'done' ||
            s === 'candidate_done' ||
            s === 'candidate_failed' ||
            s === 'judge_failed' ||
            s === 'skipped'
              ? s
              : 'candidate_failed';

          const parseLatencyMs = (candidateMetricsJson: string | null): number | null => {
            if (!candidateMetricsJson) return null;
            try {
              const parsed = JSON.parse(candidateMetricsJson) as {
                latencyMs?: unknown;
              } | null;
              const latencyMs = parsed?.latencyMs;
              return typeof latencyMs === 'number' && Number.isFinite(latencyMs)
                ? latencyMs
                : null;
            } catch {
              return null;
            }
          };

          const perModel = new Map<
            string,
            Parameters<typeof aggregateModel>[0]['questionScores']
          >();
          for (const row of rows) {
            const list = perModel.get(row.model_id) ?? [];
            list.push({
              questionId: row.question_id,
              category: row.category ?? 'unknown',
              difficulty: row.difficulty ?? 'unknown',
              status: toKnownStatus(row.status),
              overallScore: typeof row.score_overall === 'number' ? row.score_overall : 0,
              autoFail: row.auto_fail === 1,
              latencyMs: parseLatencyMs(row.candidate_metrics_json),
            });
            perModel.set(row.model_id, list);
          }

          return modelIds.map((modelId) =>
            aggregateModel({ modelId, questionScores: perModel.get(modelId) ?? [] }),
          );
        })();

  const summary = {
    runId,
    createdAt: new Date().toISOString(),
    datasetPath: datasetAbsolutePath,
    datasetSha256: datasetSha,
    promptTemplateHash: templateHash,
    judge: { model: config.judge.model, provider: config.judge.provider },
    models: summaries,
  };

  const summaryPath = path.join(runOutDir, 'summary.json');
  writeJson(summaryPath, summary);

  const reportPath = path.join(runOutDir, 'report.html');
  const results = listRunModelResults(db, runId);
  const html = renderHtmlReport({ runId, summaryJson: summary, results });
  fs.mkdirSync(runOutDir, { recursive: true });
  fs.writeFileSync(reportPath, html);

  updateRunStatus(db, runId, 'completed');
  onEvent?.({ type: 'run_completed', runId });
  return { runId, outDir: runOutDir, summaryPath, reportPath };
}
