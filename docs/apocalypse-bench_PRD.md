# apocalypse-bench — PRD (Product Requirements Document)

## 1) One-liner
A TypeScript benchmark that evaluates how useful LLMs are in an **offline survival/apocalypse** scenario, running a fixed question bank against **Ollama local models** and **OpenRouter-hosted models**, then scoring responses with **Gemini 3 Flash** as the judge.

## 2) Context & motivation
When the internet is gone, “smart” models that depend on retrieval or up-to-date knowledge often degrade. apocalypse-bench focuses on **practical, safety-conscious reasoning**: field-expedient medicine, sanitation, low-tech engineering, materials, energy, agriculture, measurement, organisation, and risk management.

## 3) Goals (MVP)
1. **Run-once reproducible benchmark**:
   - Load a JSONL question bank (e.g. `question_bank_v7.jsonl`)
   - Generate candidate answers for each question
   - Judge each answer with Gemini 3 Flash
   - Produce a local report and machine-readable artefacts
2. **Two execution backends**:
   - **Ollama** (local models)
   - **OpenRouter** (remote hosted models; also the judge)
3. **Config-driven runs**:
   - Models/providers are **manually specified per run** in a config file
   - Minimal assumptions / no dynamic discovery required
4. **Nice terminal UX**:
   - A responsive TUI with progress, live metrics (openrouter supports token counts, cost, many other interesting things), and failure visibility using **Ink** (+ optional **ink-ui** components)
5. **Safety-aware scoring**:
   - Rubric-based scoring + explicit “auto-fail” conditions (dangerous advice, refusal-only, etc.)
6. **Resumable**:
   - If a run is interrupted, it can resume without redoing completed questions.
7. **Broad model support**:
    - Must be able to support reasoning as well as non reasoning models, such as GPT-OSS 20/120b or liquid/lfm-7b. 

## 4) Non-goals (MVP)
- llama.cpp support (explicitly out of scope)
- Hosting a public leaderboard service (local reports only)
- Tool-use / browsing evaluation (scenario assumes “no internet”)
- Fine-tuning/training pipelines
- Multi-judge ensembles (single judge for MVP)

## 5) Users
- Local LLM hobbyists comparing small models on a MacBook Pro
- Researchers comparing “capability under constraints”
- Engineers selecting an offline fallback assistant model

## 6) Benchmark artefacts
**Input**
- JSONL question bank with fields like: `id`, `category`, `difficulty`, `scenario`, `prompt`, `rubric[]`, `auto_fail[]`

**Output (per run)**
- Raw candidate completions (full text)
- Judge scoring JSON (structured)
- Aggregates by category/difficulty
- Latency + token usage where available
- HTML/Markdown summary report

## 7) Core concepts & definitions
- **Candidate model**: the model being evaluated.
- **Judge model**: Gemini 3 Flash (via OpenRouter) scoring candidate answers.
- **Run**: a benchmark execution with a fixed config, dataset version, prompt templates, and judge settings.
- **Question**: one dataset entry (scenario + prompt + rubric + auto-fail rules).
- **Rubric item**: a discrete criterion scored 0/1 (or 0–N if specified).
- **Auto-fail**: conditions that force a score of 0 for a question (e.g., unsafe/dangerous advice).

## 8) UX / UI (Ink TUI)
### 8.1 Primary screens
1. **Run screen** (default)
   - Header: run name, dataset, judge model
   - Progress: completed/total, ETA-like “pace” (not a promise), retry counts
   - Table: per-model status (queued/running/done), rolling score, median latency, failures
   - Current question panel: category, id, truncated prompt
2. **Logs / errors panel**
   - Collapsible recent errors (timeouts, JSON parse issues, rate limits)
3. **Summary screen**
   - Final overall score per model
   - Safety fail rate
   - Links/paths to saved outputs and report(s)

### 8.2 Ink components
- `ink` for rendering
- optional `ink-ui` for nicer primitives (spinners, progress bars, panels)
- Keyboard controls (minimal):
  - `q`: quit (with “resume” hint)
  - `l`: toggle logs
  - `s`: toggle per-question scores view

## 9) Config-driven runs
### 9.1 Config file format
- Recommended: YAML (`apocbench.yml`)
- Also accept: JSON (`apocbench.json`)
- Validation with a strict schema; unknown fields rejected by default.

### 9.2 Example config (YAML)
```yaml
run:
  name: "mbp-small-pack"
  datasetPath: "./data/question_bank_v7.jsonl"
  outDir: "./runs"
  resume: true
  questionLimit: null        # optional: only run first N questions (useful for dev)
  categories: null           # optional: filter to specific categories ["medical", "water"]
  maxBudgetUsd: null         # optional: stop run if estimated cost exceeds this
  concurrency:
    candidate: 3             # parallel questions per model
    judge: 5                 # parallel judge calls

judge:
  router: "openrouter"
  model: "google/gemini-3-flash-preview"
  provider: "google-vertex"
  temperature: null # default temp
  maxTokens: 16000
  # use structured outputs when available
  structured: true

routers:
  ollama:
    baseUrl: "http://localhost:11434/v1"
    apiKeyEnv: null
    default:
      temperature: 0.2
      maxTokens: 800
      timeoutMs: 120000

  openrouter:
    baseUrl: "https://openrouter.ai/api/v1"
    apiKeyEnv: "OPENROUTER_API_KEY"
    headers:
      HTTP-Referer: "https://github.com/yourname/apocalypse-bench"
      X-Title: "apocalypse-bench"
    default:
      temperature: 0.2
      maxTokens: 800
      timeoutMs: 120000

models:
  - id: "ollama:llama3.2:3b-instruct"   # user-defined aliasing allowed
    router: "ollama"
    model: "llama3.2:3b-instruct"
    params:
      temperature: 0.3

  - id: "openrouter:gpt-oss-20b"
    router: "openrouter"
    model: "openai/gpt-oss-20b"
    provider: "groq" # can specify specific providers from openrouter
    # there are many more options available in openrouter which we could support

  - id: "ollama:mistral-nemo"
    router: "ollama"
    model: "mistral-nemo:12b-instruct"
    promptFormat: "mistral"  # optional: override chat template if needed
```

### 9.3 CLI interface
- `apocbench run -c apocbench.yml`
- `apocbench run -c apocbench.yml --models openrouter:mistral7b`
- `apocbench run -c apocbench.yml --limit 20 --categories medical,water`
- `apocbench report <runId>`
- `apocbench diff <runId1> <runId2>` — compare scores between two runs
- `apocbench validate -c apocbench.yml`
- `apocbench resume <runId>` (alias of `run` with `resume: true`)

### 9.4 CLI flags
- `--verbose` / `-v`: increase log verbosity
- `--quiet` / `-q`: minimal output (errors only)
- `--limit <N>`: override `run.questionLimit`
- `--categories <list>`: override `run.categories` (comma-separated)
- `--budget <USD>`: override `run.maxBudgetUsd`

## 10) Execution flow (MVP)
1. Load and validate config
2. Load dataset JSONL; validate each entry
3. Create run record + snapshot config and prompt templates
4. For each candidate model:
   - Iterate questions (with concurrency limits)
   - Generate candidate answer
   - Call judge with question + rubric + candidate answer
   - Parse judge output (strict JSON / schema)
   - Persist artefacts (candidate + judge + metrics)
5. Compute aggregates and generate report

## 11) Prompting strategy
### 11.1 Candidate prompt template
- System: “Offline survival assistant. Be practical, conservative, step-by-step, include safety checks, state assumptions and uncertainties.” (probably can be fleshed out a little into a proper system prompt)
- User:
  - Scenario bullets
  - Task prompt
  - Required formatting (e.g. numbered steps, materials list, warnings) (formatting isn't so strict, as Gemini 3 Flash is the judge and can easily interpret the output)

### 11.2 Judge prompt template
Inputs:
- question id + category + scenario + prompt
- rubric array + auto-fail array
- candidate answer

Outputs (JSON):
- rubric_scores: object mapping rubric item id to score (0/1 or 0–N for weighted items)
- auto_fail: boolean + reason (if true)
- overall_score: numeric (weighted sum, or 0 if auto-fail)
- notes: short text (why it scored that way)

## 12) Scoring
- Default rubric scoring: each rubric item is 0/1 (present/correct vs missing/incorrect).
- Weighted rubric items: optionally specify `weight` (default 1) for items of varying importance.
- Overall score per question: sum(rubric * weight) unless auto-fail triggers a zero.
- Report additional flags:
  - refusal-only
  - unsafe medical advice
  - hallucinated dangerous chemical processes
  - “hand-wavy / not actionable”

## 13) Data storage & reproducibility
- Every run stores:
  - dataset file hash
  - config snapshot
  - candidate prompts (rendered)
  - model identifiers
  - timing + token metrics when available
  - tool version (for reproducibility)
- Resuming requires idempotent persistence keyed by (runId, modelId, questionId).
- Token counts may be unavailable for some Ollama models; store `null` and note in report.

## 14) Reliability requirements
- Retries with exponential backoff for transient errors:
  - rate limits (OpenRouter)
  - network errors
  - 5xx responses
- Hard fail (no retries) for:
  - invalid config
  - invalid dataset schema
- “Best effort” for judge parse errors:
  - retry judge call once with “repair JSON” instruction
  - else mark question as “judge_failed” and continue

## 15) Security & privacy
- API keys only from env vars (never written to disk, we need a .env.example).
- Logs redact headers and auth tokens.
- Output includes prompts and completions—warn users not to publish runs if they include sensitive data.

## 16) MVP deliverables checklist
- [ ] Ink TUI runner for one or more models
- [ ] Ollama adapter (OpenAI-compatible `/v1/chat/completions`)
- [ ] OpenRouter adapter (OpenAI-compatible)
- [ ] Gemini 3 Flash judge integration
- [ ] Config schema + validator
- [ ] SQLite persistence + resumable runs
- [ ] HTML + JSON report generation
- [ ] Basic test coverage for parsing/validation and a mocked run
