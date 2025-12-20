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
import { aggregateModel } from '../scoring/aggregate';
import { computeOverallScore, judgeWithRepairRetry } from './judge';
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

export type RunnerEvent =
  | { type: 'run_started'; runId: string }
  | { type: 'question_started'; runId: string; modelId: string; questionId: string }
  | { type: 'question_completed'; runId: string; modelId: string; questionId: string; overallScore: number }
  | { type: 'question_failed'; runId: string; modelId: string; questionId: string; stage: 'candidate' | 'judge'; message: string }
  | { type: 'budget_exceeded'; runId: string; maxBudgetUsd: number }
  | { type: 'budget_spent'; runId: string; spentUsd: number }
  | { type: 'run_completed'; runId: string };

export type RunnerDeps = {
  resolveModel: (
    modelEntry: ApocbenchConfig['models'][number],
    config: ApocbenchConfig,
  ) => LanguageModel;
  resolveJudgeModel: (config: ApocbenchConfig) => LanguageModel;
  toolVersion: string;
};

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
    questions = questions.filter(q => allowed.has(q.category));
  }
  if (questionLimit != null) {
    questions = questions.slice(0, questionLimit);
  }

  const datasetSha = sha256FileHex(datasetAbsolutePath);
  const templateHash = promptTemplateHash(buildCandidatePrompt, buildJudgePrompt);

  if (dryRun) return null;

  const runId = params.runIdOverride ?? makeRunId(config.run.name);
  const runOutDir = path.resolve(process.cwd(), config.run.outDir, runId);

  onEvent?.({ type: 'run_started', runId });

  const db = openAndMigrate(path.resolve(process.cwd(), config.run.outDir, 'apocbench.sqlite'));
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

  const models = config.models.filter(m =>
    selectedModelIds && selectedModelIds.length > 0 ? selectedModelIds.includes(m.id) : true,
  );

  const judgeQueue = new PQueue({ concurrency: config.run.concurrency.judge });
  const perModelQueue = new Map<string, PQueue>();

  for (const model of models) {
    perModelQueue.set(model.id, new PQueue({ concurrency: config.run.concurrency.candidate }));
  }

  const maxBudgetUsd = config.run.maxBudgetUsd ?? null;
  let spentUsd = 0;
  let budgetExceededEmitted = false;

  function extractOpenRouterCost(raw: unknown): number | null {
    const cost = (raw as { providerMetadata?: { openrouter?: { cost?: unknown } } } | null | undefined)
      ?.providerMetadata?.openrouter?.cost;
    return typeof cost === 'number' && Number.isFinite(cost) ? cost : null;
  }

  function emitBudgetExceededIfNeeded(): void {
    if (maxBudgetUsd == null || spentUsd < maxBudgetUsd || budgetExceededEmitted) return;
    budgetExceededEmitted = true;
    onEvent?.({ type: 'budget_exceeded', runId, maxBudgetUsd });
  }

  function recordSpend(costUsd: number): void {
    if (!Number.isFinite(costUsd) || costUsd <= 0) return;
    spentUsd += costUsd;
    onEvent?.({ type: 'budget_spent', runId, spentUsd });
    emitBudgetExceededIfNeeded();
  }

  function isBudgetExceeded(): boolean {
    emitBudgetExceededIfNeeded();
    return maxBudgetUsd != null && spentUsd >= maxBudgetUsd;
  }

  const tasks: Array<Promise<void>> = [];

  const retryPolicy = { maxRetries: 3, baseMs: 600, maxMs: 8000 };

  async function generateTextWithRetry(call: Parameters<typeof generateText>[0]): Promise<
    Awaited<ReturnType<typeof generateText>>
  > {
    for (let attempt = 0; attempt <= retryPolicy.maxRetries; attempt++) {
      try {
        return await generateText(call);
      } catch (err) {
        const msg = (err as Error).message;
        const retryable = /429|5\d\d|timeout|ECONNRESET|ENOTFOUND/i.test(msg);
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

          onEvent?.({ type: 'question_started', runId, modelId: modelEntry.id, questionId: q.id });

          const candidatePrompt = buildCandidatePrompt(q);
          const candidateStart = Date.now();

          try {
            const candidateResult = await generateTextWithRetry({
              model: candidateModel,
              prompt: candidatePrompt,
              temperature:
                modelEntry.params?.temperature ??
                config.routers[modelEntry.router].default.temperature ??
                undefined,
              maxOutputTokens:
                modelEntry.params?.maxTokens ?? config.routers[modelEntry.router].default.maxTokens,
              providerOptions: (modelEntry.router === 'openrouter'
                ? {
                    openrouter: {
                      ...(modelEntry.provider
                        ? { routing: { only: [modelEntry.provider] } }
                        : {}),
                      ...(modelEntry.routing ? { routing: modelEntry.routing } : {}),
                    },
                  }
                : undefined) as ProviderOptions | undefined,
            });

            const candidateText = candidateResult.text;
            const candidateCostUsd = extractOpenRouterCost(candidateResult);
            if (candidateCostUsd != null) recordSpend(candidateCostUsd);

            const metrics: CandidateMetrics = {
              latencyMs: Date.now() - candidateStart,
              usage: candidateResult.usage,
              costUsd: candidateCostUsd ?? undefined,
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

            await judgeQueue.add(async () => {
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

              const judgePrompt = buildJudgePrompt({ question: q, candidateAnswer: candidateText });
              try {
                const { object, raw } = await judgeWithRepairRetry(
                  {
                    model: judgeModel,
                    prompt: judgePrompt,
                    maxTokens: config.judge.maxTokens,
                    temperature: config.judge.temperature,
                    providerOptions: {
                      openrouter: {
                        ...(config.judge.provider
                          ? { routing: { only: [config.judge.provider] } }
                          : {}),
                        ...(config.judge.routing ? { routing: config.judge.routing } : {}),
                      },
                    } as ProviderOptions,
                  },
                  { retry: retryPolicy },
                );

                const computed = computeOverallScore({
                  judgeOutput: object,
                  rubric: q.rubric.map(r => ({ id: r.id, weight: r.weight, maxScore: r.maxScore })),
                });

                const judgeParsed: JudgeOutput = {
                  ...object,
                  overall_score: computed.overallScore,
                };

                const judgeCostUsd = extractOpenRouterCost(raw);
                if (judgeCostUsd != null) recordSpend(judgeCostUsd);

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
                });
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
                });
              }
            });
          } catch (err) {
            const message = (err as Error).message;
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
            });
          }
        }),
      );
    }
  }

  await Promise.all(tasks);
  await judgeQueue.onIdle();

  const modelIds = models.map(m => m.id);
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

          type KnownStatus = 'done' | 'candidate_done' | 'candidate_failed' | 'judge_failed' | 'skipped';
          const toKnownStatus = (s: string): KnownStatus =>
            s === 'done' || s === 'candidate_done' || s === 'candidate_failed' || s === 'judge_failed' || s === 'skipped'
              ? s
              : 'candidate_failed';

          const parseLatencyMs = (candidateMetricsJson: string | null): number | null => {
            if (!candidateMetricsJson) return null;
            try {
              const parsed = JSON.parse(candidateMetricsJson) as { latencyMs?: unknown } | null;
              const latencyMs = parsed?.latencyMs;
              return typeof latencyMs === 'number' && Number.isFinite(latencyMs) ? latencyMs : null;
            } catch {
              return null;
            }
          };

          const perModel = new Map<string, Parameters<typeof aggregateModel>[0]['questionScores']>();
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

          return modelIds.map(modelId =>
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
  const html = renderHtmlReport({ runId, summaryJson: summary });
  fs.mkdirSync(runOutDir, { recursive: true });
  fs.writeFileSync(reportPath, html);

  updateRunStatus(db, runId, 'completed');
  onEvent?.({ type: 'run_completed', runId });
  return { runId, outDir: runOutDir, summaryPath, reportPath };
}
