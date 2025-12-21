# fix: TUI run cost should include candidate + judge OpenRouter spend

## Overview

The Ink TUI currently shows `cost` as the sum of per-question `costUsd` attached to `question_completed` / `question_failed` events.

Today, those per-question events include **candidate** cost only (`lastCandidateCostUsd`). **Judge** cost is tracked separately via `budget_spent` (incremented by `recordSpend()`), but it is not included in the displayed `cost`.

Goal: ensure the TUI “run cost” is accurate and includes **all OpenRouter spend** for both candidate and judge (and any future OpenRouter calls).

## Current Implementation (What’s Wrong)

- Candidate cost extraction:
  - `src/core/runner/orchestrator.ts` extracts cost from `providerMetadata.openrouter.cost` and `providerMetadata.openrouter.usage.cost`.
  - It emits `question_completed` / `question_failed` with `costUsd: lastCandidateCostUsd`.
- Judge cost extraction:
  - `src/core/runner/orchestrator.ts` extracts judge cost from `providerMetadata.openrouter.cost` and calls `recordSpend(judgeCostUsd)`.
  - It does **not** attach judge cost to any per-question event.
- UI aggregation:
  - `src/ui/uiStats.ts` sums `e.costUsd` only from `question_completed` / `question_failed`.
  - `budgetSpentUsd` is read from `budget_spent` events.
- TUI display:
  - `src/ui/screens/RunScreen.tsx` and `src/ui/screens/SummaryScreen.tsx` compute `cost` by summing per-model `costUsd` (from `uiStats`).

Net result: displayed `cost` is candidate-only, while `budget:` is candidate+judge (when costs are present).

## Proposed Solution

### A) Treat “Cost” as authoritative OpenRouter spend (recommended)

Use the existing `budget_spent` stream as the single source of truth for total OpenRouter billed cost.

- Add a new UI field `openRouterSpentUsd` (or reuse `budgetSpentUsd` when present) and display that as the global “cost”.
- Keep the model table cost columns as-is (candidate-only) unless we also implement per-model attribution for judge.

Changes:
- Update `src/ui/screens/RunScreen.tsx` and `src/ui/screens/SummaryScreen.tsx`:
  - Global “cost” should be derived from `stats.budgetSpentUsd` when present; fall back to the existing `sum(models[].costUsd)` when budget is not configured.

Rationale:
- `recordSpend()` already increments for both candidate and judge OpenRouter calls.
- Avoids missing judge spend and avoids double counting.

### B) Also attribute judge spend to per-question/per-model (optional follow-up)

If we want per-model “cost” to reflect judge spend too, we need to decide attribution:

- Option B1: Attribute judge spend to the candidate model being judged (simplest: judge call happens per `(candidateModel, question)` pair).
- Option B2: Keep judge spend separate (report candidate cost vs judge cost separately).

Implementation for either:
- Extend `RunnerEvent` payloads to include `candidateCostUsd` and `judgeCostUsd` (or `costUsdByRole`).
- Update `src/ui/uiStats.ts` to aggregate those fields.
- Update `src/ui/components/ModelStatsTable.tsx` to show separate columns or a combined “total”.

This is more invasive; start with (A) to fix correctness of the global run cost.

## Technical Notes / Constraints

- Cost extraction sources in code:
  - `providerMetadata.openrouter.cost` (used today)
  - `providerMetadata.openrouter.usage.cost` (normalized in `src/core/runner/openrouterUsage.ts`)
- OpenRouter provider (`@openrouter/ai-sdk-provider`) can provide usage/cost under `providerMetadata.openrouter.usage` when usage accounting is enabled.
- Streaming/retries can lead to partial/missing cost fields; using the same field as budget enforcement keeps behavior consistent.

## Acceptance Criteria

- The TUI global `cost` includes both candidate + judge OpenRouter spend for the run.
- When a run is configured with `run.maxBudgetUsd`, the displayed `cost` matches the `budget` “spent” number.
- When no OpenRouter budget tracking is present (or cost fields are missing), the TUI still shows a reasonable fallback cost (current behavior).
- Add/adjust tests to cover the new display logic.

## Implementation Tasks

1. Update `RunScreen` global “cost” calculation to prefer `stats.budgetSpentUsd`.
2. Update `SummaryScreen` global “cost” calculation similarly.
3. Update/add unit tests for `uiStats` or screen calculations (prefer existing UI stats tests).
4. Run validators: `pnpm -s lint`, `pnpm -s typecheck`, `pnpm -s test`.

## References

- `src/core/runner/orchestrator.ts` (candidate vs judge cost extraction + `recordSpend()`)
- `src/ui/uiStats.ts` (cost aggregation and `budget_spent` handling)
- `src/ui/screens/RunScreen.tsx` (global cost display)
- `src/ui/screens/SummaryScreen.tsx` (summary cost display)
- `plans/library-notes-openrouter.md` (budget policy: OpenRouter-reported cost is authoritative)
