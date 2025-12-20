# Library notes: OpenRouter (`@openrouter/ai-sdk-provider`)

This file captures OpenRouter behaviors we may rely on in `apocbench`.

## What we use OpenRouter for

- Hosted candidate models (optional)
- Judge model (Gemini 3 Flash) via OpenRouter
- Runtime budget enforcement via OpenRouter-reported cost

## Routing / provider selection

OpenRouter can route a model request across multiple upstream providers.

Useful request-level controls (conceptually):
- Specify provider order (`provider.order`) and whether fallbacks are allowed.
- Require providers to support all parameters (`provider.require_parameters`).
- Constrain data handling (e.g. ZDR / data collection policy).
- Sort by `price` / `throughput` / `latency`.

In `apocbench`, these map to optional config fields on a per-model basis.

## Structured outputs

OpenRouter supports structured outputs for compatible models via `response_format` / JSON Schema.

`apocbench` policy:
- Judge calls are always structured-output requests.
- On schema/parse failure: retry once with a JSON repair instruction.
- No unstructured parsing fallback.
- If structured output is unsupported or fails schema validation after the retry, mark the question `judge_failed`.

## Cost and budget

`apocbench` policy:
- Runtime budget uses OpenRouter-reported cost (authoritative).
- Budget applies only to OpenRouter calls (candidate + judge).
- Ollama calls are local-only and are excluded from budget.
