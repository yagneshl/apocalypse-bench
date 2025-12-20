# feat: apocalypse-bench full implementation plan

## Overview

Build a professional, easy-to-use CLI + TUI benchmark runner (`apocbench`) that evaluates candidate LLMs on an offline survival/apocalypse question bank, scores responses with a judge model (Gemini 3 Flash via OpenRouter), and emits reproducible, resumable run artifacts and reports.

Primary inputs today:
- `data/question_bank_v7.jsonl`
- `docs/apocalypse-bench_PRD.md`
- `docs/apocalypse-bench_TechStack.md`

Primary outcomes:
- One-command run on macOS with Ollama and/or OpenRouter
- Deterministic, resumable runs persisted to SQLite
- Clear TUI with progress + errors
- Machine-readable exports + static HTML report

## Goals (MVP)

- Evaluate one or more candidate models against `data/question_bank_v7.jsonl`.
- Judge each answer with Gemini 3 Flash (OpenRouter).
- Provide strict config validation (YAML/JSON), strict dataset validation (JSONL), and strict judge output validation.
- Persist all artifacts to allow resume and audit.
- Generate `summary.json` and `report.html` per run.
- Provide a polished default TUI and CI-friendly `--json` / `--quiet` modes.

## Non-goals (MVP)

- Hosted leaderboard.
- llama.cpp adapter.
- Multi-judge ensembles.
- Browsing/tool-use eval.

## User experience

### Fast path

1) Install deps
- `pnpm i`

2) Configure
- Create `apocbench.yml` (see schema below)
- Set env vars (`OPENROUTER_API_KEY` if using OpenRouter)

3) Run
- `apocbench run -c apocbench.yml`

4) Review
- Open `runs/<runId>/report.html`

### Core commands

- `apocbench run -c apocbench.yml`
- `apocbench run -c apocbench.yml --dry-run` (validate config/dataset only, no API calls)
- `apocbench validate -c apocbench.yml`
- `apocbench report <runId>`
- `apocbench diff <runId1> <runId2>`
- `apocbench resume <runId>` (alias to run with resume)

## Project structure (proposed)

```
src/
  cli/
    index.ts                 # CLI entry
    commands/
      run.ts
      validate.ts
      report.ts
      diff.ts
  ui/
    App.tsx                  # Ink root
    screens/
      RunScreen.tsx
      SummaryScreen.tsx
    components/
      ModelTable.tsx
      LogsPanel.tsx
      QuestionPanel.tsx
  core/
    config/
      loadConfig.ts
      schema.ts
    dataset/
      loadJsonl.ts
      schema.ts
    prompts/
      candidatePrompt.ts
      judgePrompt.ts
    runner/
      orchestrator.ts
      types.ts
    scoring/
      aggregate.ts
      diff.ts
    budget/
      budget.ts
  adapters/
    openrouter/
      client.ts
    ollama/
      client.ts
  storage/
    sqlite/
      db.ts
      schema.sql
      runs.ts
      results.ts
  reports/
    html/
      renderHtml.ts
    json/
      exports.ts
  utils/
    backoff.ts
    hash.ts
    redaction.ts
    time.ts
```

## Data contracts

### Dataset JSONL schema

Each line is one object (strict; unknown keys rejected by default):

- `id`: string
- `category`: string
- `difficulty`: string (dataset uses human labels like `"Easy" | "Medium" | "Hard"`)
- `scenario`: string[] (dataset stores an array of bullet strings)
- `prompt`: string
- `rubric`: array of rubric items
- `auto_fail`: array of strings (or structured rules later)
- Optional: `version`, `source` (only if present in the dataset)

Rubric item (normalize to strict object):
- `id`: string
- `text`: string
- `weight?`: number (default 1)
- `maxScore?`: number (default 1)

### Judge output schema

Judge must return a JSON object:
- `rubric_scores`: record<string, number>
- `auto_fail`: boolean
- `auto_fail_reason?`: string
- `overall_score`: number
- `notes`: string
- Optional: `unsafe_flags?`: string[] (if you choose to add)

Validation rules:
- If `auto_fail === true` then `overall_score` must be `0`.
- Otherwise `overall_score` is computed by the runner as the weighted sum of rubric scores.
- All rubric keys must be a subset of rubric item ids; missing keys treated as 0.
- Scores must be within `[0, maxScore]`.

### Run configuration schema (`apocbench.yml`)

Strict YAML/JSON schema (unknown keys error by default):

`run`:
- `name`: string
- `datasetPath`: string
- `outDir`: string
- `resume`: boolean
- `questionLimit?`: number | null
- `categories?`: string[] | null
- `maxBudgetUsd?`: number | null
- `concurrency`:
  - `candidate`: number
  - `judge`: number

`judge`:
- `router`: "openrouter" (MVP)
- `model`: string
- `provider?`: string
- `temperature?`: number | null
- `maxTokens`: number
- `structured`: boolean

Optional (OpenRouter only):
- `routing?`: same shape as per-model `routing` (used for the judge request)

`routers`:
- `ollama`:
  - `baseUrl`: string
  - `apiKeyEnv?`: string | null
  - `default`: request defaults
- `openrouter`:
  - `baseUrl`: string
  - `apiKeyEnv`: string
  - `headers?`: record<string, string>
  - `default`: request defaults

`models`: array of model entries
- `id`: string
- `router`: "ollama" | "openrouter"
- `model`: string
- `provider?`: string
- `params?`: overrides for request defaults
- `promptFormat?`: string
 - `routing?`: OpenRouter routing options (OpenRouter models only)

#### OpenRouter routing options (per-model)

Optional `routing` block for models with `router: "openrouter"`:

- `routing`:
  - `requireParameters?`: boolean
  - `allowFallbacks?`: boolean
  - `order?`: string[]
  - `only?`: string[]
  - `ignore?`: string[]
  - `sort?`: "price" | "throughput" | "latency"
  - `dataCollection?`: "allow" | "deny"
  - `zdr?`: boolean
  - `maxPrice?`:
    - `prompt?`: number
    - `completion?`: number
    - `request?`: number
    - `image?`: number
  - `quantizations?`: string[]

Notes:
- These map to OpenRouter's `provider` preferences (snake_case in raw HTTP, camelCase in higher-level SDKs).
- We keep this optional and pass-through; unknown routing fields are rejected by schema.

#### OpenRouter structured outputs (judge)

Judge always uses structured outputs. Config only controls the judge schema/strategy, not whether we attempt unstructured parsing.

## Persistence & resume

### Storage choice

- SQLite via `better-sqlite3`.
- **Shared DB**: `runs/apocbench.sqlite` (single DB for all runs).
- Per-run artifacts still stored in `runs/<runId>/` (report.html, summary.json).

Benefits of shared DB:
- Cross-run queries are trivial (`apocbench diff`, "find best score across runs")
- Atomic run comparisons without opening multiple DB handles
- Single schema migration path, single backup target

### Run ID generation

Format: `{name}-{YYYYMMDD}-{HHMMSS}` (e.g., `mbp-small-pack-20241220-143052`)
- Human-readable and sortable
- `name` comes from config `run.name`
- Timestamp is UTC

### Tables (MVP)

- `runs`
  - `run_id` TEXT PRIMARY KEY
  - `created_at` TEXT (ISO 8601)
  - `tool_version` TEXT
  - `config_json` TEXT
  - `dataset_path` TEXT
  - `dataset_sha256` TEXT
  - `prompt_template_hash` TEXT (hash of candidate + judge prompt templates for reproducibility)
  - `status` TEXT (running|completed|aborted)

- `questions`
  - `run_id` TEXT NOT NULL
  - `question_id` TEXT NOT NULL
  - `category` TEXT
  - `difficulty` TEXT
  - `scenario` TEXT
  - `prompt` TEXT
  - `rubric_json` TEXT
  - `auto_fail_json` TEXT
  - PRIMARY KEY (run_id, question_id)
  - FOREIGN KEY (run_id) REFERENCES runs(run_id) ON DELETE CASCADE

- `model_results`
  - `run_id` TEXT NOT NULL
  - `model_id` TEXT NOT NULL
  - `question_id` TEXT NOT NULL
  - `candidate_prompt` TEXT
  - `candidate_completion` TEXT
  - `candidate_metrics_json` TEXT (latency, tokens if available)
  - `judge_request_json` TEXT (redacted)
  - `judge_response_json` TEXT (raw)
  - `judge_parsed_json` TEXT (validated)
  - `score_overall` REAL
  - `score_rubric_json` TEXT
  - `auto_fail` INTEGER (0/1)
  - `auto_fail_reason` TEXT
  - `status` TEXT (done|candidate_failed|judge_failed)
  - `error_json` TEXT
  - PRIMARY KEY (run_id, model_id, question_id)
  - FOREIGN KEY (run_id, question_id) REFERENCES questions(run_id, question_id) ON DELETE CASCADE

### Idempotency

- A result row is “complete” when `status == done` and `judge_parsed_json` is present.
- Resume logic skips any completed `(run_id, model_id, question_id)`.
- Writes occur in a transaction per completed question.

## Execution flow (MVP)

1) Parse CLI args and load config.
2) Validate config (strict).
3) Load dataset JSONL; validate each line; compute dataset hash.
4) Compute prompt template hash (candidate + judge templates).
5) If `--dry-run`: validate config/dataset, display summary, exit (no API calls, no cost estimate).
6) Generate run ID: `{name}-{YYYYMMDD}-{HHMMSS}`.
7) Create run directory: `runs/<runId>/`.
8) Initialize shared SQLite DB (`runs/apocbench.sqlite`); store run metadata and questions.
9) For each model:
   - Queue candidate completions with `p-queue` respecting `run.concurrency.candidate`.
10) For each question completion:
    - Build candidate prompt and call provider via AI SDK.
    - Persist candidate output.
    - Queue judge call respecting `run.concurrency.judge`.
11) Judge:
    - Prefer `generateObject` with Zod schema.
    - On schema/parse failure: retry once with a JSON repair instruction.
    - No unstructured parsing fallback.
    - Persist raw + parsed judge outputs.
12) Aggregate:
    - Per-model overall score, category breakdown, difficulty breakdown, safety auto-fail rate, latency metrics.
13) Write exports:
    - `runs/<runId>/summary.json`
    - `runs/<runId>/report.html`
14) Exit codes:
   - non-zero if config/dataset invalid; otherwise zero even with per-question failures (but surface in report).

## TUI specification

### Screens

#### Run screen (default)
- Header: run name, dataset, judge model
- Progress: completed/total, retry counts, elapsed
- Model table:
  - model id
  - status (queued/running/done)
  - rolling score (mean)
  - median latency
  - failures count
- Current question panel: id, category, truncated prompt
- Logs panel (toggle `l`): recent errors/events

#### Summary screen
- Final score per model
- Auto-fail rate per model
- Links to `runs/<runId>/` artifacts

### Controls

- `q`: quit (show resume hint)
- `l`: toggle logs
- `s`: toggle per-question score view

### CI-friendly modes

- `--json`: emit progress as JSONL events
- `--quiet`: errors only

## Reliability: retries & backoff

- Retry transient errors (429, 5xx, network timeouts) with exponential backoff + jitter.
- Cap retries (e.g., 3 candidate, 4 judge) and log retry reasons.
- Hard fail on config/dataset validation errors.

## Budget enforcement

### Pre-run cost estimation (--dry-run)

None (MVP): `--dry-run` performs validation only and does not estimate cost.

### Runtime budget tracking

- If `run.maxBudgetUsd` set:
  - Track OpenRouter reported cost as results stream in (OpenRouter returns authoritative cost).
  - Applies to OpenRouter candidate calls and OpenRouter judge calls.
  - Ollama is local-only and never contributes to `maxBudgetUsd`.
  - Stop scheduling new work when exceeding budget.
  - Mark remaining as skipped with reason `budget_exceeded`.

## Security & privacy

- API keys read only from env vars.
- Redact auth headers and secrets in logs and persisted request payloads.
- Report warns that prompts/completions may contain sensitive data.

## Testing plan

### Unit tests (Vitest)

- `src/core/config/schema.ts`: validate config strictness + overrides.
- `src/core/dataset/schema.ts`: dataset line validation (including bad lines).
- `src/core/prompts/*`: stable prompt rendering.
- `src/utils/hash.ts`: dataset hash determinism.
- `src/core/scoring/aggregate.ts`: aggregation logic, auto-fail logic.

### Integration tests (mock providers)

Mock AI SDK provider calls to avoid network:
- One “happy path” run of 2 questions x 1 model produces:
  - sqlite rows
  - `summary.json`
  - `report.html`

### Manual smoke tests

- `apocbench validate -c apocbench.yml`.
- `apocbench run -c apocbench.yml --limit 5`.
- Interrupt and `apocbench resume <runId>` resumes without duplication.

## CI plan

- GitHub Actions job:
  - `pnpm i --frozen-lockfile`
  - `pnpm lint`
  - `pnpm typecheck`
  - `pnpm test`
- No real API calls in CI.

## Milestones

### Milestone 0: Repo scaffolding
- Initialize pnpm + TypeScript project
- Add lint/format/test tooling
- Create CLI entry + basic commands

### Milestone 1: Config + dataset
- Implement strict config loader (YAML/JSON)
- Implement JSONL loader + Zod validation
- Add hashing + deterministic run id

### Milestone 2: Storage + resume
- Implement SQLite schema + persistence layer
- Resume logic + idempotency

### Milestone 3: Providers + judge
- Integrate AI SDK providers (OpenRouter, Ollama)
- Implement candidate prompt + judge prompt
- Implement judge structured output with retry repair

### Milestone 4: Runner + TUI
- Orchestrator with concurrency limits
- Ink run screen + logs
- Summary screen

### Milestone 5: Reporting + diff
- Summary JSON export
- HTML report generator
- Diff command for run comparisons

### Milestone 6: Polish
- Error messages, better defaults
- `--json` mode for CI
- Performance tuning (batching, prepared statements)

## Acceptance criteria

- `apocbench run -c apocbench.yml` runs end-to-end with at least:
  - one Ollama model
  - one OpenRouter model
  - judge = Gemini 3 Flash via OpenRouter
- Interrupting mid-run and resuming does not duplicate completed work.
- Run artifacts include:
  - `runs/apocbench.sqlite` (shared DB)
  - `runs/<runId>/summary.json`
  - `runs/<runId>/report.html`
- Dataset and config validation fail fast with clear errors.
- Judge output is schema-validated; parse failures are retried once with repair.

## References

Internal:
- `docs/apocalypse-bench_PRD.md`
- `docs/apocalypse-bench_TechStack.md`
- `data/question_bank_v7.jsonl`

External best practices and docs:
- BetterBench: https://arxiv.org/html/2411.12990v1
- HELM: https://crfm.stanford.edu/helm/
- LM Eval Harness: https://github.com/EleutherAI/lm-evaluation-harness
- OpenAI eval best practices: https://platform.openai.com/docs/guides/evaluation-best-practices
- Vercel AI SDK: https://sdk.vercel.ai/docs
- OpenRouter: https://openrouter.ai/docs
- Ink: https://github.com/vadimdemedes/ink
- Stricli: https://github.com/bloomberg/stricli
- JSON Lines: https://jsonlines.org/
