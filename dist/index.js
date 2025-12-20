#!/usr/bin/env node

// src/cli/index.tsx
import { buildApplication, buildCommand, buildRouteMap, numberParser, run } from "@stricli/core";

// src/adapters/openrouter/client.ts
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
function createOpenRouterClient(opts) {
  return createOpenRouter({
    apiKey: opts.apiKey,
    baseURL: opts.baseUrl,
    headers: opts.headers
  });
}

// src/adapters/ollama/client.ts
import { createOllama } from "ollama-ai-provider-v2";
function createOllamaClient(opts) {
  return createOllama({
    baseURL: opts.baseUrl
  });
}

// src/core/config/loadConfig.ts
import fs from "fs";
import path from "path";
import YAML from "yaml";
import { z as z2 } from "zod";

// src/core/config/schema.ts
import { z } from "zod";
var requestDefaultsSchema = z.object({
  temperature: z.number().nullable().optional(),
  maxTokens: z.number().int().positive().optional(),
  timeoutMs: z.number().int().positive().optional()
}).strict();
var openRouterRoutingSchema = z.object({
  requireParameters: z.boolean().optional(),
  allowFallbacks: z.boolean().optional(),
  order: z.array(z.string()).optional(),
  only: z.array(z.string()).optional(),
  ignore: z.array(z.string()).optional(),
  sort: z.enum(["price", "throughput", "latency"]).optional(),
  dataCollection: z.enum(["allow", "deny"]).optional(),
  zdr: z.boolean().optional(),
  maxPrice: z.object({
    prompt: z.number().optional(),
    completion: z.number().optional(),
    request: z.number().optional(),
    image: z.number().optional()
  }).strict().optional(),
  quantizations: z.array(z.string()).optional()
}).strict();
var configSchema = z.object({
  run: z.object({
    name: z.string().min(1),
    datasetPath: z.string().min(1),
    outDir: z.string().min(1),
    resume: z.boolean(),
    questionLimit: z.number().int().positive().nullable().optional(),
    categories: z.array(z.string().min(1)).nullable().optional(),
    maxBudgetUsd: z.number().positive().nullable().optional(),
    concurrency: z.object({
      candidate: z.number().int().positive(),
      judge: z.number().int().positive()
    }).strict()
  }).strict(),
  judge: z.object({
    router: z.literal("openrouter"),
    model: z.string().min(1),
    provider: z.string().min(1).optional(),
    temperature: z.number().nullable().optional(),
    maxTokens: z.number().int().positive(),
    structured: z.boolean(),
    routing: openRouterRoutingSchema.optional()
  }).strict(),
  routers: z.object({
    ollama: z.object({
      baseUrl: z.string().min(1),
      apiKeyEnv: z.string().min(1).nullable().optional(),
      default: requestDefaultsSchema
    }).strict(),
    openrouter: z.object({
      baseUrl: z.string().min(1),
      apiKeyEnv: z.string().min(1),
      headers: z.record(z.string(), z.string()).optional(),
      default: requestDefaultsSchema
    }).strict()
  }).strict(),
  models: z.array(
    z.object({
      id: z.string().min(1),
      router: z.enum(["ollama", "openrouter"]),
      model: z.string().min(1),
      provider: z.string().min(1).optional(),
      params: requestDefaultsSchema.optional(),
      promptFormat: z.string().min(1).optional(),
      routing: openRouterRoutingSchema.optional()
    }).strict()
  ).min(1)
}).strict();

// src/core/config/loadConfig.ts
function parseConfigFile(contents, absolutePath) {
  const ext = path.extname(absolutePath).toLowerCase();
  if (ext === ".json") return JSON.parse(contents);
  return YAML.parse(contents, { strict: true });
}
function loadConfig(configPath) {
  const absolutePath = path.resolve(process.cwd(), configPath);
  const contents = fs.readFileSync(absolutePath, "utf8");
  const raw = parseConfigFile(contents, absolutePath);
  const parsed = configSchema.safeParse(raw);
  if (!parsed.success) {
    throw new z2.ZodError(parsed.error.issues);
  }
  return { config: parsed.data, raw, absolutePath };
}

// src/core/dataset/loadJsonl.ts
import fs2 from "fs";
import path2 from "path";
import { z as z4 } from "zod";

// src/core/dataset/schema.ts
import { z as z3 } from "zod";
var rubricItemSchema = z3.object({
  id: z3.string().min(1),
  text: z3.string().min(1),
  weight: z3.number().positive().optional().default(1),
  maxScore: z3.number().positive().optional().default(1)
}).strict();
var datasetRubricSchema = z3.union([
  z3.array(z3.string().min(1)).transform(
    (values) => values.map((text, index) => ({ id: `r${index + 1}`, text }))
  ),
  z3.array(rubricItemSchema)
]);
var datasetLineSchema = z3.object({
  id: z3.string().min(1),
  category: z3.string().min(1),
  difficulty: z3.string().min(1),
  scenario: z3.array(z3.string().min(1)),
  prompt: z3.string().min(1),
  rubric: datasetRubricSchema,
  auto_fail: z3.array(z3.string().min(1)),
  version: z3.string().min(1).optional(),
  source: z3.string().min(1).optional()
}).strict().transform((v) => {
  const rubric = v.rubric.map((r) => ({
    id: r.id,
    text: r.text,
    weight: "weight" in r ? r.weight : 1,
    maxScore: "maxScore" in r ? r.maxScore : 1
  }));
  return { ...v, rubric };
});

// src/core/dataset/loadJsonl.ts
function loadJsonl(datasetPath) {
  const absolutePath = path2.resolve(process.cwd(), datasetPath);
  const contents = fs2.readFileSync(absolutePath, "utf8");
  const rawLines = contents.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const lines = [];
  for (let i = 0; i < rawLines.length; i++) {
    let parsedJson;
    try {
      parsedJson = JSON.parse(rawLines[i]);
    } catch (err) {
      throw new Error(`Invalid JSONL at ${datasetPath}:${i + 1}: ${err.message}`);
    }
    const parsed = datasetLineSchema.safeParse(parsedJson);
    if (!parsed.success) {
      const message = new z4.ZodError(parsed.error.issues).message;
      throw new Error(`Invalid dataset line at ${datasetPath}:${i + 1}: ${message}`);
    }
    lines.push(parsed.data);
  }
  return { absolutePath, lines };
}

// src/core/runner/orchestrator.ts
import fs7 from "fs";
import path6 from "path";
import PQueue from "p-queue";
import { generateText } from "ai";

// src/core/prompts/candidatePrompt.ts
function buildCandidatePrompt(question) {
  const scenario = question.scenario.map((s) => `- ${s}`).join("\n");
  return [
    "You are an offline survival assistant. Be practical, conservative, and step-by-step.",
    "State assumptions and uncertainties. Include safety checks and stop-work triggers when relevant.",
    "",
    `Question: ${question.id}`,
    `Category: ${question.category}`,
    `Difficulty: ${question.difficulty}`,
    "",
    "Scenario:",
    scenario,
    "",
    "Task:",
    question.prompt
  ].join("\n");
}

// src/core/prompts/judgePrompt.ts
function buildJudgePrompt(params) {
  const { question, candidateAnswer } = params;
  const scenario = question.scenario.map((s) => `- ${s}`).join("\n");
  const rubric = question.rubric.map((r) => `- ${r.id} (max ${r.maxScore}, weight ${r.weight}): ${r.text}`).join("\n");
  const autoFail = question.auto_fail.map((a) => `- ${a}`).join("\n");
  return [
    "You are a strict evaluator. Output ONLY valid JSON matching the requested schema.",
    "Score each rubric item by id with a number within [0, maxScore].",
    "If auto_fail triggers, set auto_fail=true, overall_score=0, and include a reason.",
    "Keep notes concise and specific.",
    "",
    `Question: ${question.id}`,
    `Category: ${question.category}`,
    `Difficulty: ${question.difficulty}`,
    "",
    "Scenario:",
    scenario,
    "",
    "Task prompt:",
    question.prompt,
    "",
    "Rubric:",
    rubric,
    "",
    "Auto-fail conditions:",
    autoFail,
    "",
    "Candidate answer:",
    candidateAnswer
  ].join("\n");
}

// src/core/scoring/aggregate.ts
function median(values) {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}
function aggregateModel(input) {
  const totalQuestions = input.questionScores.length;
  const completed = input.questionScores.filter((q) => !q.failed).length;
  const failures = input.questionScores.filter((q) => q.failed).length;
  const autoFailCount = input.questionScores.filter((q) => q.autoFail).length;
  const overallScore = input.questionScores.reduce((acc, q) => acc + q.overallScore, 0);
  const latencies = input.questionScores.filter((q) => !q.failed).map((q) => q.latencyMs);
  return {
    modelId: input.modelId,
    totalQuestions,
    completed,
    failures,
    autoFailCount,
    overallScore,
    rubricScoreSum: overallScore,
    medianLatencyMs: median(latencies)
  };
}

// src/core/runner/judge.ts
import { generateObject } from "ai";

// src/core/runner/types.ts
import { z as z5 } from "zod";
var judgeOutputSchema = z5.object({
  rubric_scores: z5.record(z5.string(), z5.number()),
  auto_fail: z5.boolean(),
  auto_fail_reason: z5.string().optional(),
  overall_score: z5.number(),
  notes: z5.string(),
  unsafe_flags: z5.array(z5.string()).optional()
}).strict();

// src/utils/backoff.ts
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function computeBackoffMs(attempt, opts) {
  const exp = Math.min(opts.maxMs, opts.baseMs * 2 ** attempt);
  const jitter = exp * (0.2 * (Math.random() - 0.5) * 2);
  return Math.max(0, Math.round(exp + jitter));
}

// src/core/runner/judge.ts
async function judgeOnce(req) {
  const result = await generateObject({
    model: req.model,
    schema: judgeOutputSchema,
    prompt: req.prompt,
    maxOutputTokens: req.maxTokens,
    temperature: req.temperature ?? void 0,
    providerOptions: req.providerOptions
  });
  return { object: result.object, raw: result.response };
}
async function judgeWithRepairRetry(req) {
  try {
    const { object, raw } = await judgeOnce(req);
    return { object, raw, didRepairRetry: false };
  } catch (err) {
    const retryPrompt = req.prompt + "\n\nIMPORTANT: Repair your output to be strictly valid JSON matching the schema. Output JSON only.";
    const shouldRetry = true;
    if (!shouldRetry) throw err;
    const backoff = computeBackoffMs(0, { retries: 1, baseMs: 800, maxMs: 4e3 });
    await sleep(backoff);
    const { object, raw } = await judgeOnce({ ...req, prompt: retryPrompt });
    return { object, raw, didRepairRetry: true };
  }
}
function computeOverallScore(params) {
  const { judgeOutput, rubric } = params;
  const rubricScores = {};
  let sum = 0;
  for (const item of rubric) {
    const raw = judgeOutput.rubric_scores[item.id] ?? 0;
    const bounded = Math.max(0, Math.min(item.maxScore, raw));
    rubricScores[item.id] = bounded;
    sum += bounded * item.weight;
  }
  return { overallScore: judgeOutput.auto_fail ? 0 : sum, rubricScores };
}

// src/utils/hash.ts
import crypto from "crypto";
import fs3 from "fs";
function sha256Hex(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}
function sha256FileHex(filePath) {
  const data = fs3.readFileSync(filePath);
  return sha256Hex(data);
}

// src/core/runner/runId.ts
function formatUtcTimestampForRunId(d) {
  const pad = (n) => String(n).padStart(2, "0");
  return [
    d.getUTCFullYear(),
    pad(d.getUTCMonth() + 1),
    pad(d.getUTCDate()),
    "-",
    pad(d.getUTCHours()),
    pad(d.getUTCMinutes()),
    pad(d.getUTCSeconds())
  ].join("");
}
function makeRunId(name, now = /* @__PURE__ */ new Date()) {
  const safeName = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 64);
  return `${safeName}-${formatUtcTimestampForRunId(now)}`;
}
function promptTemplateHash(candidatePromptTemplate, judgePromptTemplate) {
  return sha256Hex(candidatePromptTemplate + "\n---\n" + judgePromptTemplate);
}

// src/utils/redaction.ts
function redactSecrets(value) {
  if (value == null) return value;
  if (typeof value === "string") {
    return value.replace(/(sk-[A-Za-z0-9_-]{8,})/g, "sk-REDACTED");
  }
  if (Array.isArray(value)) return value.map(redactSecrets);
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      const lower = k.toLowerCase();
      if (lower.includes("authorization") || lower.includes("api_key") || lower.includes("apikey")) {
        out[k] = "REDACTED";
      } else {
        out[k] = redactSecrets(v);
      }
    }
    return out;
  }
  return value;
}

// src/reports/json/exports.ts
import fs4 from "fs";
import path3 from "path";
function writeJson(filePath, data) {
  fs4.mkdirSync(path3.dirname(filePath), { recursive: true });
  fs4.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// src/reports/html/renderHtml.ts
function renderHtmlReport(params) {
  const summary = JSON.stringify(params.summaryJson, null, 2);
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>apocbench - ${escapeHtml(params.runId)}</title>
    <style>
      body { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; margin: 24px; }
      pre { background: #0b1020; color: #e6e6e6; padding: 16px; border-radius: 10px; overflow: auto; }
    </style>
  </head>
  <body>
    <h1>apocbench</h1>
    <p>runId: <code>${escapeHtml(params.runId)}</code></p>
    <pre>${escapeHtml(summary)}</pre>
  </body>
</html>`;
}
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// src/storage/sqlite/migrate.ts
import fs6 from "fs";
import path5 from "path";

// src/storage/sqlite/db.ts
import fs5 from "fs";
import path4 from "path";
import Database from "better-sqlite3";
var cachedDb = null;
function openDb(sharedDbPath) {
  if (cachedDb) return cachedDb;
  const absolutePath = path4.resolve(process.cwd(), sharedDbPath);
  fs5.mkdirSync(path4.dirname(absolutePath), { recursive: true });
  const db = new Database(absolutePath);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");
  cachedDb = db;
  return db;
}

// src/storage/sqlite/migrate.ts
function migrate(db) {
  const schemaPath = path5.resolve(
    path5.dirname(new URL(import.meta.url).pathname),
    "schema.sql"
  );
  const sql = fs6.readFileSync(schemaPath, "utf8");
  db.exec(sql);
}
function openAndMigrate(sharedDbPath) {
  const db = openDb(sharedDbPath);
  migrate(db);
  return db;
}

// src/storage/sqlite/runs.ts
function insertRun(db, row) {
  db.prepare(
    `
    INSERT INTO runs (
      run_id, created_at, tool_version, config_json, dataset_path,
      dataset_sha256, prompt_template_hash, status
    ) VALUES (
      @run_id, @created_at, @tool_version, @config_json, @dataset_path,
      @dataset_sha256, @prompt_template_hash, @status
    )
  `
  ).run(row);
}
function updateRunStatus(db, runId, status) {
  db.prepare("UPDATE runs SET status = ? WHERE run_id = ?").run(status, runId);
}

// src/storage/sqlite/questions.ts
function insertQuestions(db, runId, questions) {
  const stmt = db.prepare(
    `
    INSERT OR REPLACE INTO questions (
      run_id, question_id, category, difficulty, scenario, prompt, rubric_json, auto_fail_json
    ) VALUES (
      @run_id, @question_id, @category, @difficulty, @scenario, @prompt, @rubric_json, @auto_fail_json
    )
  `
  );
  const insertMany = db.transaction((rows) => {
    for (const q of rows) {
      stmt.run({
        run_id: runId,
        question_id: q.id,
        category: q.category,
        difficulty: q.difficulty,
        scenario: JSON.stringify(q.scenario),
        prompt: q.prompt,
        rubric_json: JSON.stringify(q.rubric),
        auto_fail_json: JSON.stringify(q.auto_fail)
      });
    }
  });
  insertMany(questions);
}

// src/storage/sqlite/results.ts
function isResultDone(db, runId, modelId, questionId) {
  const row = db.prepare(
    `
      SELECT status, judge_parsed_json
      FROM model_results
      WHERE run_id = ? AND model_id = ? AND question_id = ?
    `
  ).get(runId, modelId, questionId);
  return row?.status === "done" && Boolean(row.judge_parsed_json);
}
function upsertResult(db, p) {
  db.prepare(
    `
    INSERT INTO model_results (
      run_id, model_id, question_id,
      candidate_prompt, candidate_completion, candidate_metrics_json,
      judge_request_json, judge_response_json, judge_parsed_json,
      score_overall, score_rubric_json,
      auto_fail, auto_fail_reason,
      status, error_json
    ) VALUES (
      @run_id, @model_id, @question_id,
      @candidate_prompt, @candidate_completion, @candidate_metrics_json,
      @judge_request_json, @judge_response_json, @judge_parsed_json,
      @score_overall, @score_rubric_json,
      @auto_fail, @auto_fail_reason,
      @status, @error_json
    )
    ON CONFLICT(run_id, model_id, question_id) DO UPDATE SET
      candidate_prompt = COALESCE(excluded.candidate_prompt, model_results.candidate_prompt),
      candidate_completion = COALESCE(excluded.candidate_completion, model_results.candidate_completion),
      candidate_metrics_json = COALESCE(excluded.candidate_metrics_json, model_results.candidate_metrics_json),
      judge_request_json = COALESCE(excluded.judge_request_json, model_results.judge_request_json),
      judge_response_json = COALESCE(excluded.judge_response_json, model_results.judge_response_json),
      judge_parsed_json = COALESCE(excluded.judge_parsed_json, model_results.judge_parsed_json),
      score_overall = COALESCE(excluded.score_overall, model_results.score_overall),
      score_rubric_json = COALESCE(excluded.score_rubric_json, model_results.score_rubric_json),
      auto_fail = COALESCE(excluded.auto_fail, model_results.auto_fail),
      auto_fail_reason = COALESCE(excluded.auto_fail_reason, model_results.auto_fail_reason),
      status = excluded.status,
      error_json = COALESCE(excluded.error_json, model_results.error_json)
  `
  ).run({
    run_id: p.runId,
    model_id: p.modelId,
    question_id: p.questionId,
    candidate_prompt: p.candidatePrompt ?? null,
    candidate_completion: p.candidateCompletion ?? null,
    candidate_metrics_json: p.candidateMetricsJson ?? null,
    judge_request_json: p.judgeRequestJson ?? null,
    judge_response_json: p.judgeResponseJson ?? null,
    judge_parsed_json: p.judgeParsedJson ?? null,
    score_overall: p.scoreOverall ?? null,
    score_rubric_json: p.scoreRubricJson ?? null,
    auto_fail: p.autoFail == null ? null : p.autoFail ? 1 : 0,
    auto_fail_reason: p.autoFailReason ?? null,
    status: p.status,
    error_json: p.errorJson ?? null
  });
}

// src/core/runner/orchestrator.ts
async function runBenchmark(params) {
  const {
    config,
    datasetAbsolutePath,
    questions: allQuestions,
    deps,
    dryRun,
    selectedModelIds,
    onEvent
  } = params;
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
  const templateHash = promptTemplateHash("candidatePrompt:v1", "judgePrompt:v1");
  if (dryRun) return null;
  const runId = params.runIdOverride ?? makeRunId(config.run.name);
  const runOutDir = path6.resolve(process.cwd(), config.run.outDir, runId);
  onEvent?.({ type: "run_started", runId });
  const db = openAndMigrate(path6.resolve(process.cwd(), config.run.outDir, "apocbench.sqlite"));
  const existingRun = db.prepare("SELECT run_id FROM runs WHERE run_id = ?").get(runId);
  if (!existingRun) {
    insertRun(db, {
      run_id: runId,
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      tool_version: deps.toolVersion,
      config_json: JSON.stringify(config),
      dataset_path: datasetAbsolutePath,
      dataset_sha256: datasetSha,
      prompt_template_hash: templateHash,
      status: "running"
    });
  } else {
    updateRunStatus(db, runId, "running");
  }
  insertQuestions(db, runId, questions);
  const judgeModel = deps.resolveJudgeModel(config);
  const models = config.models.filter(
    (m) => selectedModelIds && selectedModelIds.length > 0 ? selectedModelIds.includes(m.id) : true
  );
  const judgeQueue = new PQueue({ concurrency: config.run.concurrency.judge });
  const perModelQueue = /* @__PURE__ */ new Map();
  const perModelScores = /* @__PURE__ */ new Map();
  for (const model of models) {
    perModelQueue.set(model.id, new PQueue({ concurrency: config.run.concurrency.candidate }));
    perModelScores.set(model.id, []);
  }
  const maxBudgetUsd = config.run.maxBudgetUsd ?? null;
  let spentUsd = 0;
  let budgetExceededEmitted = false;
  const tasks = [];
  async function generateTextWithRetry(call) {
    const maxRetries = 3;
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        return await generateText(call);
      } catch (err) {
        const msg = err.message;
        const retryable = /429|5\d\d|timeout|ECONNRESET|ENOTFOUND/i.test(msg);
        if (!retryable || attempt === maxRetries) throw err;
        await sleep(computeBackoffMs(attempt, { retries: maxRetries, baseMs: 600, maxMs: 8e3 }));
      }
    }
    throw new Error("unreachable");
  }
  for (const modelEntry of models) {
    const candidateModel = deps.resolveModel(modelEntry, config);
    const modelQueue = perModelQueue.get(modelEntry.id);
    for (const q of questions) {
      tasks.push(
        modelQueue.add(async () => {
          if (maxBudgetUsd != null && spentUsd >= maxBudgetUsd) {
            if (!budgetExceededEmitted) {
              budgetExceededEmitted = true;
              onEvent?.({ type: "budget_exceeded", runId, maxBudgetUsd });
            }
            upsertResult(db, {
              runId,
              modelId: modelEntry.id,
              questionId: q.id,
              status: "skipped",
              errorJson: JSON.stringify({ reason: "budget_exceeded" })
            });
            return;
          }
          if (config.run.resume && isResultDone(db, runId, modelEntry.id, q.id)) {
            return;
          }
          onEvent?.({ type: "question_started", runId, modelId: modelEntry.id, questionId: q.id });
          const candidatePrompt = buildCandidatePrompt(q);
          const candidateStart = Date.now();
          try {
            const { text, usage } = await generateTextWithRetry({
              model: candidateModel,
              prompt: candidatePrompt,
              temperature: modelEntry.params?.temperature ?? config.routers[modelEntry.router].default.temperature ?? void 0,
              maxOutputTokens: modelEntry.params?.maxTokens ?? config.routers[modelEntry.router].default.maxTokens,
              providerOptions: modelEntry.router === "openrouter" ? {
                openrouter: {
                  provider: modelEntry.provider,
                  ...modelEntry.routing ? { routing: modelEntry.routing } : {}
                }
              } : void 0
            });
            const metrics = {
              latencyMs: Date.now() - candidateStart,
              usage,
              costUsd: void 0
            };
            upsertResult(db, {
              runId,
              modelId: modelEntry.id,
              questionId: q.id,
              candidatePrompt,
              candidateCompletion: text,
              candidateMetricsJson: JSON.stringify(metrics),
              status: "candidate_failed"
            });
            await judgeQueue.add(async () => {
              const judgePrompt = buildJudgePrompt({ question: q, candidateAnswer: text });
              try {
                const { object, raw } = await judgeWithRepairRetry({
                  model: judgeModel,
                  prompt: judgePrompt,
                  maxTokens: config.judge.maxTokens,
                  temperature: config.judge.temperature,
                  providerOptions: {
                    openrouter: {
                      provider: config.judge.provider,
                      ...config.judge.routing ? { routing: config.judge.routing } : {}
                    }
                  }
                });
                const computed = computeOverallScore({
                  judgeOutput: object,
                  rubric: q.rubric.map((r) => ({ id: r.id, weight: r.weight, maxScore: r.maxScore }))
                });
                const judgeParsed = {
                  ...object,
                  overall_score: computed.overallScore
                };
                const judgeCost = raw?.providerMetadata?.openrouter?.cost;
                if (typeof judgeCost === "number") {
                  spentUsd += judgeCost;
                  onEvent?.({ type: "budget_spent", runId, spentUsd });
                }
                const redactedRequest = redactSecrets({
                  model: config.judge.model,
                  provider: config.judge.provider
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
                    status: "done"
                  });
                })();
                perModelScores.get(modelEntry.id).push({
                  overallScore: computed.overallScore,
                  autoFail: judgeParsed.auto_fail,
                  latencyMs: metrics.latencyMs,
                  failed: false
                });
                onEvent?.({
                  type: "question_completed",
                  runId,
                  modelId: modelEntry.id,
                  questionId: q.id,
                  overallScore: computed.overallScore
                });
              } catch (err) {
                const message = err.message;
                upsertResult(db, {
                  runId,
                  modelId: modelEntry.id,
                  questionId: q.id,
                  status: "judge_failed",
                  errorJson: JSON.stringify({ message })
                });
                perModelScores.get(modelEntry.id).push({
                  overallScore: 0,
                  autoFail: false,
                  latencyMs: metrics.latencyMs,
                  failed: true
                });
                onEvent?.({
                  type: "question_failed",
                  runId,
                  modelId: modelEntry.id,
                  questionId: q.id,
                  stage: "judge",
                  message
                });
              }
            });
          } catch (err) {
            const message = err.message;
            upsertResult(db, {
              runId,
              modelId: modelEntry.id,
              questionId: q.id,
              candidatePrompt,
              status: "candidate_failed",
              errorJson: JSON.stringify({ message })
            });
            perModelScores.get(modelEntry.id).push({
              overallScore: 0,
              autoFail: false,
              latencyMs: 0,
              failed: true
            });
            onEvent?.({
              type: "question_failed",
              runId,
              modelId: modelEntry.id,
              questionId: q.id,
              stage: "candidate",
              message
            });
          }
        })
      );
    }
  }
  await Promise.all(tasks);
  await judgeQueue.onIdle();
  const summaries = Array.from(perModelScores.entries()).map(
    ([modelId, scores]) => aggregateModel({ modelId, questionScores: scores })
  );
  const summary = {
    runId,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    datasetPath: datasetAbsolutePath,
    datasetSha256: datasetSha,
    judge: { model: config.judge.model, provider: config.judge.provider },
    models: summaries
  };
  const summaryPath = path6.join(runOutDir, "summary.json");
  writeJson(summaryPath, summary);
  const reportPath = path6.join(runOutDir, "report.html");
  const html = renderHtmlReport({ runId, summaryJson: summary });
  fs7.mkdirSync(runOutDir, { recursive: true });
  fs7.writeFileSync(reportPath, html);
  updateRunStatus(db, runId, "completed");
  onEvent?.({ type: "run_completed", runId });
  return { runId, outDir: runOutDir, summaryPath, reportPath };
}

// src/core/scoring/diff.ts
function diffSummaries(a, b) {
  const byModel = (s) => new Map(s.models.map((m) => [m.modelId, m]));
  const am = byModel(a);
  const bm = byModel(b);
  const modelIds = Array.from(/* @__PURE__ */ new Set([...am.keys(), ...bm.keys()])).sort();
  return modelIds.map((id) => {
    const left = am.get(id);
    const right = bm.get(id);
    return {
      modelId: id,
      aOverall: left?.overallScore ?? null,
      bOverall: right?.overallScore ?? null,
      deltaOverall: left && right ? Number((right.overallScore - left.overallScore).toFixed(6)) : null,
      aAutoFail: left?.autoFailCount ?? null,
      bAutoFail: right?.autoFailCount ?? null
    };
  });
}

// src/storage/sqlite/queries.ts
function listRunModelResults(db, runId) {
  return db.prepare(
    `
      SELECT run_id, model_id, question_id, score_overall, auto_fail, status, candidate_metrics_json
      FROM model_results
      WHERE run_id = ?
    `
  ).all(runId);
}

// src/ui/App.tsx
import { useMemo, useState } from "react";
import { Box as Box6, Text as Text6, useInput } from "ink";

// src/ui/screens/RunScreen.tsx
import { Box as Box4, Text as Text4 } from "ink";

// src/ui/components/ModelTable.tsx
import { Box, Text } from "ink";
import { jsx, jsxs } from "react/jsx-runtime";
function ModelTable(props) {
  const byModel = /* @__PURE__ */ new Map();
  for (const e of props.events) {
    if (e.type === "question_completed") {
      const row = byModel.get(e.modelId) ?? { done: 0, failed: 0, scoreSum: 0 };
      row.done += 1;
      row.scoreSum += e.overallScore;
      byModel.set(e.modelId, row);
    }
    if (e.type === "question_failed") {
      const row = byModel.get(e.modelId) ?? { done: 0, failed: 0, scoreSum: 0 };
      row.failed += 1;
      byModel.set(e.modelId, row);
    }
  }
  const rows = Array.from(byModel.entries()).sort(([a], [b]) => a.localeCompare(b));
  return /* @__PURE__ */ jsxs(Box, { flexDirection: "column", children: [
    /* @__PURE__ */ jsx(Text, { bold: true, children: "models" }),
    rows.length === 0 ? /* @__PURE__ */ jsx(Text, { children: "(waiting)" }) : null,
    rows.map(([modelId, r]) => /* @__PURE__ */ jsxs(Text, { children: [
      modelId,
      "  done:",
      r.done,
      "  failed:",
      r.failed,
      "  score:",
      r.scoreSum.toFixed(2)
    ] }, modelId))
  ] });
}

// src/ui/components/LogsPanel.tsx
import { Box as Box2, Text as Text2 } from "ink";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function LogsPanel(props) {
  return /* @__PURE__ */ jsxs2(Box2, { flexDirection: "column", children: [
    /* @__PURE__ */ jsx2(Text2, { bold: true, children: "logs" }),
    props.events.slice(-12).map((e, i) => /* @__PURE__ */ jsx2(Text2, { children: JSON.stringify(e) }, i))
  ] });
}

// src/ui/components/QuestionPanel.tsx
import { Box as Box3, Text as Text3 } from "ink";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function QuestionPanel(props) {
  const lastStart = [...props.events].reverse().find((e) => e.type === "question_started");
  if (!lastStart || lastStart.type !== "question_started") {
    return /* @__PURE__ */ jsxs3(Box3, { flexDirection: "column", children: [
      /* @__PURE__ */ jsx3(Text3, { bold: true, children: "question" }),
      /* @__PURE__ */ jsx3(Text3, { children: "(waiting)" })
    ] });
  }
  return /* @__PURE__ */ jsxs3(Box3, { flexDirection: "column", children: [
    /* @__PURE__ */ jsx3(Text3, { bold: true, children: "question" }),
    /* @__PURE__ */ jsxs3(Text3, { children: [
      lastStart.questionId,
      " (",
      lastStart.modelId,
      ")"
    ] })
  ] });
}

// src/ui/screens/RunScreen.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function RunScreen(props) {
  const last = props.events[props.events.length - 1];
  const runId = props.events.find((e) => e.type === "run_started")?.runId;
  const completed = props.events.filter((e) => e.type === "question_completed").length;
  const failed = props.events.filter((e) => e.type === "question_failed").length;
  return /* @__PURE__ */ jsxs4(Box4, { flexDirection: "column", paddingX: 1, children: [
    /* @__PURE__ */ jsx4(Text4, { bold: true, children: "apocbench" }),
    /* @__PURE__ */ jsxs4(Text4, { children: [
      "run: ",
      runId ?? "starting..."
    ] }),
    /* @__PURE__ */ jsxs4(Text4, { children: [
      "progress: ",
      completed,
      " done, ",
      failed,
      " failed"
    ] }),
    /* @__PURE__ */ jsx4(Text4, { children: "controls: l=logs s=scores q=quit" }),
    /* @__PURE__ */ jsx4(Box4, { marginTop: 1, children: /* @__PURE__ */ jsx4(ModelTable, { events: props.events }) }),
    /* @__PURE__ */ jsx4(Box4, { marginTop: 1, children: /* @__PURE__ */ jsx4(QuestionPanel, { events: props.events }) }),
    /* @__PURE__ */ jsx4(Box4, { marginTop: 1, children: /* @__PURE__ */ jsxs4(Text4, { children: [
      "last: ",
      last ? JSON.stringify(last).slice(0, 120) : "..."
    ] }) }),
    props.showLogs ? /* @__PURE__ */ jsx4(Box4, { flexDirection: "column", marginTop: 1, children: /* @__PURE__ */ jsx4(LogsPanel, { events: props.events }) }) : null
  ] });
}

// src/ui/screens/SummaryScreen.tsx
import { Box as Box5, Text as Text5 } from "ink";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function SummaryScreen(props) {
  return /* @__PURE__ */ jsxs5(Box5, { flexDirection: "column", paddingX: 1, children: [
    /* @__PURE__ */ jsx5(Text5, { bold: true, children: "completed" }),
    /* @__PURE__ */ jsxs5(Text5, { children: [
      "runId: ",
      props.result.runId
    ] }),
    /* @__PURE__ */ jsxs5(Text5, { children: [
      "outDir: ",
      props.result.outDir
    ] }),
    /* @__PURE__ */ jsxs5(Text5, { children: [
      "summary: ",
      props.result.summaryPath
    ] }),
    /* @__PURE__ */ jsxs5(Text5, { children: [
      "report: ",
      props.result.reportPath
    ] }),
    /* @__PURE__ */ jsx5(Text5, { children: "press q to quit" })
  ] });
}

// src/ui/App.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
function App(props) {
  const [done, setDone] = useState(null);
  useMemo(() => {
    props.runPromise.then((r) => {
      setDone(r);
    }).catch((err) => {
      setDone({
        runId: "failed",
        outDir: "",
        summaryPath: "",
        reportPath: err.message
      });
    });
  }, [props.runPromise]);
  const [showLogs, setShowLogs] = useState(false);
  const [_showScores, setShowScores] = useState(false);
  useInput((input, key) => {
    if (input === "q" || key.escape) process.exit(0);
    if (input === "l") setShowLogs((v) => !v);
    if (input === "s") setShowScores((v) => !v);
  });
  if (!done) {
    return /* @__PURE__ */ jsx6(RunScreen, { events: props.events, showLogs });
  }
  if (done === null) {
    return /* @__PURE__ */ jsx6(Box6, { children: /* @__PURE__ */ jsx6(Text6, { children: "dry-run complete" }) });
  }
  return /* @__PURE__ */ jsx6(SummaryScreen, { result: done });
}

// src/cli/index.tsx
import fs8 from "fs";
import path7 from "path";
import { render } from "ink";
import { jsx as jsx7 } from "react/jsx-runtime";
function die(msg) {
  console.error(msg);
  process.exit(1);
}
async function runCommand(flags, runId) {
  const { config } = loadConfig(flags.config);
  const dataset = loadJsonl(config.run.datasetPath);
  const events = [];
  const resolveModel = (m) => {
    if (m.router === "openrouter") {
      const apiKey = process.env[config.routers.openrouter.apiKeyEnv];
      if (!apiKey) die(`missing env var: ${config.routers.openrouter.apiKeyEnv}`);
      const openrouter = createOpenRouterClient({
        apiKey,
        baseUrl: config.routers.openrouter.baseUrl,
        headers: config.routers.openrouter.headers
      });
      return openrouter(m.model);
    }
    const ollama = createOllamaClient({ baseUrl: config.routers.ollama.baseUrl });
    return ollama(m.model);
  };
  const resolveJudgeModel = () => {
    const apiKey = process.env[config.routers.openrouter.apiKeyEnv];
    if (!apiKey) die(`missing env var: ${config.routers.openrouter.apiKeyEnv}`);
    const openrouter = createOpenRouterClient({
      apiKey,
      baseUrl: config.routers.openrouter.baseUrl,
      headers: config.routers.openrouter.headers
    });
    return openrouter(config.judge.model);
  };
  const runPromise = runBenchmark({
    config,
    configPath: flags.config,
    datasetPath: config.run.datasetPath,
    datasetAbsolutePath: dataset.absolutePath,
    questions: dataset.lines,
    deps: { resolveModel, resolveJudgeModel, toolVersion: "1.0.0" },
    dryRun: flags.dryRun ?? false,
    runIdOverride: runId,
    selectedModelIds: flags.models ? Array.from(flags.models) : void 0,
    limitOverride: typeof flags.limit === "number" ? flags.limit : null,
    categoriesOverride: flags.categories ? Array.from(flags.categories) : null,
    onEvent: (e) => {
      events.push(e);
      if (flags.json) process.stdout.write(JSON.stringify(e) + "\n");
    }
  });
  if (flags.quiet || flags.json) {
    const r = await runPromise;
    if (r && flags.json) process.stdout.write(JSON.stringify(r) + "\n");
    return;
  }
  render(/* @__PURE__ */ jsx7(App, { runPromise, events }));
}
async function validateCommand(flags) {
  const { config } = loadConfig(flags.config);
  const dataset = loadJsonl(config.run.datasetPath);
  if (!flags.quiet) console.log(`config ok; dataset ok (${dataset.lines.length} questions)`);
}
async function reportCommand(flags, runId) {
  const outDir = flags.outDir ?? "./runs";
  const db = openAndMigrate(path7.resolve(process.cwd(), outDir, "apocbench.sqlite"));
  const rows = listRunModelResults(db, runId);
  const byModel = /* @__PURE__ */ new Map();
  for (const r of rows) {
    const model = byModel.get(r.model_id) ?? { overallScore: 0, autoFailCount: 0 };
    if (r.status === "done" && typeof r.score_overall === "number") model.overallScore += r.score_overall;
    if (r.auto_fail === 1) model.autoFailCount += 1;
    byModel.set(r.model_id, model);
  }
  const summary = {
    runId,
    models: Array.from(byModel.entries()).map(([modelId, m]) => ({
      modelId,
      overallScore: m.overallScore,
      autoFailCount: m.autoFailCount
    }))
  };
  const runDir = path7.resolve(process.cwd(), outDir, runId);
  fs8.mkdirSync(runDir, { recursive: true });
  fs8.writeFileSync(path7.join(runDir, "summary.json"), JSON.stringify(summary, null, 2));
  fs8.writeFileSync(path7.join(runDir, "report.html"), renderHtmlReport({ runId, summaryJson: summary }));
  console.log(JSON.stringify(summary, null, 2));
}
async function diffCommand(flags, runId1, runId2) {
  const outDir = flags.outDir ?? "./runs";
  const db = openAndMigrate(path7.resolve(process.cwd(), outDir, "apocbench.sqlite"));
  const toSummary = (runId) => {
    const rows = listRunModelResults(db, runId);
    const byModel = /* @__PURE__ */ new Map();
    for (const r of rows) {
      const model = byModel.get(r.model_id) ?? { overallScore: 0, autoFailCount: 0 };
      if (r.status === "done" && typeof r.score_overall === "number") model.overallScore += r.score_overall;
      if (r.auto_fail === 1) model.autoFailCount += 1;
      byModel.set(r.model_id, model);
    }
    return {
      runId,
      models: Array.from(byModel.entries()).map(([modelId, m]) => ({
        modelId,
        overallScore: m.overallScore,
        autoFailCount: m.autoFailCount
      }))
    };
  };
  console.log(JSON.stringify(diffSummaries(toSummary(runId1), toSummary(runId2)), null, 2));
}
async function resumeCommand(flags, runId) {
  console.log(`resuming run ${runId}`);
  return runCommand.call(this, flags, runId);
}
var root = buildRouteMap({
  routes: {
    run: buildCommand({
      docs: {
        brief: "Run benchmark",
        customUsage: [
          "run -c apocbench.yml [--dry-run] [--json] [--quiet] [--limit N] [--categories a,b]",
          "run <runId> -c apocbench.yml  # resume by runId"
        ]
      },
      parameters: {
        flags: {
          config: { kind: "parsed", brief: "Path to apocbench.yml", parse: (s) => s },
          dryRun: { kind: "boolean", brief: "Validate only (no API calls)", optional: true },
          quiet: { kind: "boolean", brief: "Suppress TUI output", optional: true },
          json: { kind: "boolean", brief: "Emit JSONL events", optional: true },
          limit: { kind: "parsed", brief: "Limit questions", optional: true, parse: numberParser },
          categories: {
            kind: "parsed",
            brief: "Comma-separated categories",
            optional: true,
            variadic: ",",
            parse: (s) => s
          },
          models: {
            kind: "parsed",
            brief: "Comma-separated model ids to run (matches config models[].id)",
            optional: true,
            variadic: ",",
            parse: (s) => s
          }
        },
        aliases: {
          c: "config"
        },
        positional: {
          kind: "tuple",
          parameters: [
            {
              brief: "Optional run id to resume",
              optional: true,
              parse: (s) => s,
              placeholder: "runId"
            }
          ]
        }
      },
      func: runCommand
    }),
    validate: buildCommand({
      docs: { brief: "Validate config and dataset" },
      parameters: {
        flags: {
          config: { kind: "parsed", brief: "Path to apocbench.yml", parse: (s) => s },
          quiet: { kind: "boolean", brief: "Suppress output", optional: true }
        },
        aliases: { c: "config" }
      },
      func: validateCommand
    }),
    report: buildCommand({
      docs: { brief: "Generate run summary and HTML report" },
      parameters: {
        flags: {
          outDir: {
            kind: "parsed",
            brief: "Output directory (defaults to ./runs)",
            optional: true,
            parse: (s) => s
          }
        },
        positional: {
          kind: "tuple",
          parameters: [
            {
              brief: "Run id",
              parse: (s) => s,
              placeholder: "runId"
            }
          ]
        }
      },
      func: reportCommand
    }),
    diff: buildCommand({
      docs: { brief: "Diff two runs" },
      parameters: {
        flags: {
          outDir: {
            kind: "parsed",
            brief: "Output directory (defaults to ./runs)",
            optional: true,
            parse: (s) => s
          }
        },
        positional: {
          kind: "tuple",
          parameters: [
            { brief: "Run id 1", parse: (s) => s, placeholder: "runId1" },
            { brief: "Run id 2", parse: (s) => s, placeholder: "runId2" }
          ]
        }
      },
      func: diffCommand
    }),
    resume: buildCommand({
      docs: { brief: "Resume a run by id (alias of run)" },
      parameters: {
        flags: {
          config: { kind: "parsed", brief: "Path to apocbench.yml", parse: (s) => s },
          dryRun: { kind: "boolean", brief: "Validate only (no API calls)", optional: true },
          quiet: { kind: "boolean", brief: "Suppress TUI output", optional: true },
          json: { kind: "boolean", brief: "Emit JSONL events", optional: true },
          limit: { kind: "parsed", brief: "Limit questions", optional: true, parse: numberParser },
          categories: {
            kind: "parsed",
            brief: "Comma-separated categories",
            optional: true,
            variadic: ",",
            parse: (s) => s
          },
          models: {
            kind: "parsed",
            brief: "Comma-separated model ids to run (matches config models[].id)",
            optional: true,
            variadic: ",",
            parse: (s) => s
          }
        },
        aliases: { c: "config" },
        positional: {
          kind: "tuple",
          parameters: [{ brief: "Run id", parse: (s) => s, placeholder: "runId" }]
        }
      },
      func: resumeCommand
    })
  },
  docs: { brief: "apocbench: offline survival/apocalypse LLM benchmark runner" }
});
var app = buildApplication(root, {
  name: "apocbench",
  scanner: { caseStyle: "allow-kebab-for-camel", allowArgumentEscapeSequence: true }
});
await run(app, process.argv.slice(2), { process });
//# sourceMappingURL=index.js.map