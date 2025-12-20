# Library notes: Ollama

This file captures the Ollama-specific operational assumptions for `apocbench`.

## What we use Ollama for

- Local candidate models only (offline).
- No hosted/Ollama cloud models.

## Integration

- We use the community AI SDK provider `ollama-ai-provider-v2` (not raw HTTP) for candidate generation.

## Endpoints and compatibility

- Ollama exposes a native API and an OpenAI-compat layer.
- Token/usage counters are documented on the native API responses (usage metrics included in the final chunk for streaming).

## Token / usage metrics

When present, record these fields (names from Ollama docs):
- `prompt_eval_count` (input tokens)
- `eval_count` (output tokens)
- `total_duration`, `load_duration`, `prompt_eval_duration`, `eval_duration` (nanoseconds)

`apocbench` policy:
- Persist these best-effort; never estimate tokens.
- If unavailable, store `null` and proceed.
