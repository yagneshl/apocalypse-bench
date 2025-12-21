# fix: TUI run cost should include candidate + judge OpenRouter spend

## Overview

The Ink TUI currently shows `cost` as the sum of per-question `costUsd` attached to `question_completed` / `question_failed` events.

Today, those per-question events include **candidate** cost only (`lastCandidateCostUsd`). **Judge** cost is tracked separately via `budget_spent` (incremented by `recordSpend()`), but it is not included in the displayed `cost`.

Goal: ensure the **top-of-screen** TUI “run cost” is accurate and includes **all OpenRouter spend** for both candidate and judge (and any future OpenRouter calls), while **per-model cost remains candidate-only**.

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

### A) Show top-level “Cost” as total spend + judge delta (recommended)

Use the existing `budget_spent` stream as the single source of truth for total OpenRouter billed cost, and display judge spend as a derived delta.

- Display top-level line like: `cost: $0.24 (judge: $0.04)`.
- Compute:
  - `totalUsd = stats.budgetSpentUsd ?? sum(stats.models[].costUsd)`
  - `candidateUsd = sum(stats.models[].costUsd)`
  - `judgeUsd = stats.budgetSpentUsd != null ? max(0, totalUsd - candidateUsd) : null`
- Render `(judge: …)` only when `stats.budgetSpentUsd` is present.
- Keep the model table cost columns as-is (candidate-only).

Changes:
- Update `src/ui/screens/RunScreen.tsx` and `src/ui/screens/SummaryScreen.tsx`:
  - Global “cost” should show total spend and, when available, the derived judge delta.

Rationale:
- `recordSpend()` already increments for both candidate and judge OpenRouter calls.
- Avoids missing judge spend and avoids double counting.

### B) Explicitly do *not* change per-model cost attribution

Per-model cost should remain candidate-only.

- Do not attach judge cost to `question_completed` / `question_failed`.
- Do not change `src/ui/uiStats.ts` per-model cost aggregation.

## Technical Notes / Constraints

- Cost extraction sources in code:
  - `providerMetadata.openrouter.cost` (used today)
  - `providerMetadata.openrouter.usage.cost` (normalized in `src/core/runner/openrouterUsage.ts`)
- OpenRouter provider (`@openrouter/ai-sdk-provider`) can provide usage/cost under `providerMetadata.openrouter.usage` when usage accounting is enabled.
- Streaming/retries can lead to partial/missing cost fields; using the same field as budget enforcement keeps behavior consistent.

## Acceptance Criteria

- The TUI global `cost` includes both candidate + judge OpenRouter spend for the run.
- When `budgetSpentUsd` is available, the TUI shows `cost: $TOTAL (judge: $DELTA)` where `DELTA = max(0, TOTAL - sumCandidateCosts)`.
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
