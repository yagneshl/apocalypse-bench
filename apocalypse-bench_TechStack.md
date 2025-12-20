# apocalypse-bench — Tech Stack & Architecture

## 1) Runtime & language
- **Node.js 20+**
- **TypeScript** (strict mode)
- **pnpm** for package management (strict dependency resolution, better for native modules like `better-sqlite3`)
- **Use latest stable versions** of all dependencies (e.g., AI SDK 5.x, Ink 6.x, etc.)—no legacy version pinning unless required for compatibility

## 2) UI / CLI
### Terminal UI
- **Ink** (`vadimdemedes/ink`) to render a React-based TUI.
- Optional: **ink-ui** primitives for nicer widgets (spinners, progress, panels).

### Command interface
- **Stricli** (`@stricli/core`) for type-safe CLI parsing and command routing.
  - Generates TypeScript boilerplate with `@stricli/create-app`
  - Built-in shell autocomplete
  - Strict type checking for flags and arguments
- TUI is the default; provide `--json` / `--quiet` modes for CI.

## 3) Key modules (project structure)
Suggested layout:
```
src/
  cli/                 # argv parsing, command routing
  ui/                  # Ink components/screens
  core/
    runner/            # orchestration, concurrency, retries
    dataset/           # JSONL loading + validation
    prompts/           # render candidate/judge prompts
    scoring/           # aggregates + metrics computation
    config/            # config loading + schema validation
  adapters/
    openrouter/        # OpenRouter client wrapper
    ollama/            # Ollama client wrapper
  storage/
    sqlite/            # persistence + resume logic
  reports/
    html/              # static report generator
    json/              # exports
  utils/               # backoff, timing, hashing, redaction
```

## 4) Provider strategy
We use the **Vercel AI SDK** (`ai`) as our unified interface for all model providers:
- **OpenRouter**: via `@openrouter/ai-sdk-provider`
- **Ollama**: via `ollama-ai-provider-v2` (community provider)

Benefits:
- Unified `generateText` / `streamText` API across all providers
- Built-in structured output support (integrates with Zod)
- Streaming for live token display in TUI
- Handles provider quirks under the hood

This keeps our adapters minimal—just provider instantiation and config mapping.

## 5) Configuration
### File formats
- Primary: YAML (`yaml` npm package)
- Also accept JSON

### Validation
- Use **Zod** for:
  - config schema
  - dataset schema (per JSONL line)
  - judge output schema (structured scoring JSON)

Strictness:
- default to “unknown keys = error”
- allow `--lenient` for experimentation

## 6) HTTP, retries, rate limiting
- HTTP handled by Vercel AI SDK providers (uses `fetch` internally).
- Concurrency control:
  - `p-queue` to cap in-flight requests per provider and per model.
- Retries:
  - exponential backoff with jitter
  - classify retryable status codes (429, 500–599, network timeouts)
- Cost tracking:
  - OpenRouter returns cost in response; accumulate for `maxBudgetUsd` enforcement.

## 7) Persistence & resume
### MVP storage
- **SQLite** via `better-sqlite3` (fast, simple, no async footguns).
- Deterministic keys:
  - `run_id`, `model_id`, `question_id`

### Stored artefacts
- rendered candidate prompt
- candidate completion
- judge request payload (redacted headers)
- judge response + parsed score JSON
- timing metrics (ms), token usage (if available), cost estimate (OpenRouter)

## 8) Reporting
- Generate:
  - `summary.json` (all scores + metadata)
  - `report.html` (static, local file; no server)
  - optional `report.md` for GitHub-friendly viewing

HTML generator options:
- simple template strings + minimal CSS
- (later) add charts via a small client-side bundle, but keep MVP offline-first

## 9) Suggested dependencies
### Core
- `typescript`
- `tsx` (dev runner) and/or `tsup` (build)
- `zod`
- `yaml`
- `p-queue`
- `pino` (logging)

### CLI
- `@stricli/core`

### AI providers
- `ai` (Vercel AI SDK)
- `@openrouter/ai-sdk-provider`
- `ollama-ai-provider-v2`

### UI
- `ink`
- `react`
- `ink-ui` (optional)

### Storage
- `better-sqlite3`

### Testing & quality
- `vitest`
- `eslint` + `@typescript-eslint/*`
- `prettier`

## 10) Model request defaults (sane baseline)
Candidate models:
- temperature: 0.2–0.3
- maxTokens: 600–1000 (depends on your rubric expectations)
- stop: none (unless you enforce structured formatting)

Judge (Gemini 3 Flash):
- temperature: 0
- maxTokens: 600–1000
- structured output: **on** (Gemini 3 Flash supports it natively)

## 11) Judge structured outputs
Preferred: ask the judge for a JSON object matching a schema.
Implementation:
- Define a Zod schema for judge output
- Use Vercel AI SDK's `generateObject` with the schema for type-safe structured output
- Gemini 3 Flash supports structured outputs natively; however, if parse fails, retry once with “repair to valid JSON” instruction

## 12) Local-first ergonomics (MacBook Pro)
- Encourage users to run small local models in Ollama (3B–8B class).
- Provide a “quick smoke test” mode:
  - 5 questions across categories
  - fast sanity check before full 240-question run

## 13) Observability
- `pino` logs written to:
  - console (pretty in TUI logs panel)
  - `runs/<runId>/run.log` (jsonlines)

Metrics:
- per-question latency
- per-model median latency
- judge failure rate
- auto-fail rate

## 14) CI / distribution
- GitHub Actions:
  - lint + typecheck + tests
  - optional “mocked provider” run (no real API keys)
- Distribution:
  - `npm` package with `bin` entry (`apocbench`)
  - optional single-file build via `tsup` for easier installation

## 15) Explicitly out of scope
- llama.cpp adapter
- hosted web UI
- continuous public leaderboard (for now)
