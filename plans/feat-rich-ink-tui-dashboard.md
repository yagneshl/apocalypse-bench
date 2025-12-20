# feat: rich Ink TUI dashboard

## Overview

The current Ink TUI is functional but too barebones and occasionally shows unreadable output like `[object Object]`. Build a richer, stable “dashboard” UI during runs that surfaces the most useful runtime stats (progress, time, tokens/cost, per-model status) and presents events/logs in a readable, bounded way.

This should continue to follow the repo’s existing architecture: the TUI is derived from the streaming `RunnerEvent` log (currently collected and appended in `src/ui/App.tsx`), without the UI directly querying SQLite during the run.

## Problem

- Output contains `[object Object]` where provider payloads or complex objects are interpolated into `<Text>`.
- The run screen is too simplistic and does not show key operational stats (elapsed time, tokens/cost, progress bar semantics, per-model progress/latency).
- Some metrics exist only in DB (e.g., candidate usage/latency/cost is stored) which makes “correct live stats” impossible unless we emit richer events or snapshot stats.

## Goals

- Make the running UI “dashboard-like”: clean layout, stable regions, easy scanning.
- Show useful, correct runtime stats (with explicit semantics and graceful unknown handling).
- Eliminate `[object Object]` rendering in all UI surfaces.
- Keep rendering responsive for long runs and large event volumes.

## Non-goals

- Redesigning the runner or storage system beyond adding small event fields/types.
- Adding new documentation/README.
- Adding new build system or large UI framework.

## Current State (internal references)

- CLI mounts Ink and streams events: `src/cli/index.tsx`
- TUI state is derived from `RunnerEvent[]` and subscribes to new events: `src/ui/App.tsx`
- Running layout is composed from panels and reducers over events: `src/ui/screens/RunScreen.tsx`, `src/ui/components/*`
- Run orchestration emits events and writes detailed per-candidate metrics to SQLite: `src/core/runner/orchestrator.ts`

## Proposed Solution

### 1) Define a canonical UI “stats view model”

Create a small module that reduces `RunnerEvent[]` into a `UiStats` object used by the running screen.

`UiStats` (draft):
- `runId`
- `elapsedMs`
- `totalQuestions`
- `completedCount`, `failedCount`
- `progress` (0..1 if total known, else `null`)
- `models[]` summary rows (per `modelId`): `completed`, `failed`, `scoreMean`, `lastQuestionId`, `lastLatencyMs?`, `tokens?`, `costUsd?`
- `budgetSpentUsd?`, `budgetMaxUsd?`
- `currentQuestionId?`, `currentModelId?`
- `lastEventSummary` (small string, no raw objects)

Keep this module pure and testable.

### 2) Fix object presentation once

Add a formatter that turns events (and any attached provider metadata) into short, stable strings:

- Never render raw objects via string interpolation.
- Prefer “pick fields” summaries (e.g., `modelId`, `questionId`, `overallScore`, `costUsd`, `latencyMs`, `tokens`).
- Truncate long strings.

Apply this to:
- `LogsPanel` (event feed)
- “last event” status line
- any “current code/current item” panel

### 3) Richer dashboard layout in Ink

Update `RunScreen` composition to a stable layout:

- Header: run id + phase + elapsed time
- Primary row:
  - Left: Progress + key stats (counts, budget, tokens/cost)
  - Right: Per-model table (compact)
- Secondary row:
  - Current item panel (current question/model; optional “current code” excerpt, size-limited)
- Footer: key bindings + last event summary
- Optional log panel toggled by key (`l`) with bounded height and capped items

Implementation choices:
- Use Ink core `<Box>` borders for panels.
- Optionally adopt `@inkjs/ui` for `ProgressBar`, `Spinner`, and `StatusMessage` if already compatible with current dependencies.

### 4) Emit richer events for live-correct metrics (if needed)

If token/latency/cost data is only present in DB today, add minimal event fields so the TUI can be correct during the run without DB polling.

Preferred approach:
- Extend existing events (`question_completed`, `question_failed`) with optional metrics:
  - `latencyMs?`
  - `usage?` (normalized tokens)
  - `costUsd?`

Fallback approach (if per-event metrics are hard):
- Emit periodic `run_stats` snapshot events (throttled) containing cumulative counters.

### 5) Performance and reliability

- Cap in-memory event list used by logs panel (ring buffer or slice for display).
- Batch UI updates if events can be high-frequency.
- Ensure no state updates after unmount in `src/ui/App.tsx`.

## Open Questions (need decisions)

1. What is the progress denominator?
   - Default: `completed + failed` out of total questions from config.
2. Which token metrics must be shown?
   - Default: cumulative `totalTokens` and (if available) `promptTokens`, `completionTokens`.
3. Does “correct” mean live-correct during run, or only final-correct on completion?
   - Default: live best-effort with explicit unknowns; final reconciled to DB/aggregate at completion.
4. What is “current code”? (prompt snippet, generated code, or something else)
   - Default: show current question id + model id, plus last short “event summary”; no large code by default.

## Acceptance Criteria

- [ ] No `[object Object]` appears anywhere in the TUI.
- [ ] Running screen shows: elapsed time, progress bar, completed/failed counts, per-model summary.
- [ ] Token/cost/budget stats show readable numbers or `—` (never `undefined`).
- [ ] UI remains responsive during long runs and with many events (bounded logs, no uncontrolled growth).
- [ ] Error/failure states show an explicit failure indicator and preserve last-known stats.
- [ ] `pnpm lint`, `pnpm typecheck`, `pnpm test` pass.

## Implementation Tasks (MVP)

- [ ] Add `UiStats` reducer module from `RunnerEvent[]`.
- [ ] Add event formatter helpers to remove raw object rendering.
- [ ] Refactor `RunScreen` into a stable dashboard layout (header/body/footer).
- [ ] Make logs panel bounded/capped; toggleable.
- [ ] (If needed) extend `RunnerEvent` to include latency/tokens/cost so live stats are correct.
- [ ] Add unit tests for `UiStats` reducer and event formatting.

## References

- Ink: https://github.com/vadimdemedes/ink
- Ink UI components (`@inkjs/ui`): https://term.ink/ui
