# Library notes: AI SDK + providers

This file captures practical integration notes for the libraries used by `apocbench`.

## Vercel AI SDK (`ai`)

- We use the AI SDK as the unified interface for both candidate generation and judge structured outputs.
- Preferred patterns:
  - `generateText(...)` / `streamText(...)` for candidate responses.
  - `generateObject(...)` for judge scoring JSON.
- Schema enforcement:
  - Judge responses are always schema-validated.
  - On schema/parse failure: retry once with a JSON repair instruction.
  - No unstructured parsing fallback.

Notes:
- `generateObject(...)` + Zod provides the structured output contract; we do not hand-roll JSON Schema plumbing.

## Ollama provider (`ollama-ai-provider-v2`)

Source: `nordwestt/ollama-ai-provider-v2`.

- Purpose: run local models via Ollama (offline, no cost).
- Provider instance:
  - Default instance: `import { ollama } from 'ollama-ai-provider-v2'`.
  - Custom instance (e.g. non-default base URL): `createOllama({ baseURL })`.

### Token / usage metrics (Ollama)

- Ollama can return usage-like counters in its native API responses:
  - `prompt_eval_count` (input tokens)
  - `eval_count` (output tokens)
  - plus timing fields like `total_duration`, `prompt_eval_duration`, `eval_duration`.
- In `apocbench`, store these as best-effort metrics:
  - If present, persist them into `candidate_metrics_json`.
  - If absent (common in some OpenAI-compat responses/providers), persist `null` and continue.

Notes:
- These metrics come from Ollama itself; do not estimate tokens.
- Ollama is local-only and never contributes to `maxBudgetUsd`.

## OpenRouter provider (`@openrouter/ai-sdk-provider`)

Source: `@openrouter/ai-sdk-provider`.

- Purpose: run hosted candidate models and the judge model (Gemini 3 Flash) through OpenRouter.
- We rely on OpenRouter response metadata for authoritative cost at runtime.
- Use OpenRouter’s routing controls when desired:
  - provider ordering / fallbacks
  - `require_parameters` to ensure structured outputs support when needed
  - data policy controls (e.g. ZDR / data collection flags)

### Structured outputs via OpenRouter

- For judge calls, require structured outputs and strict schema conformance.
- If a model/provider does not support required parameters, treat as a hard failure for that request (surface error, mark `judge_failed`).
