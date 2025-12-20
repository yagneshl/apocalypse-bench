## Overview

The Ink TUI currently renders once and appears “stuck” during a run because `src/cli/index.tsx` mutates an `events` array (`events.push(e)`) and passes the same array reference into `<App />`. React/Ink does not rerender on in-place mutation, so runner progress can’t repaint even though work is happening.

Goal: add a minimal, correct “reactive bridge” from runner events → React state so the Ink UI updates live throughout a benchmark run.

## Current Behavior

- `src/cli/index.tsx` collects `RunnerEvent`s into a local array and passes it to Ink once.
- `src/ui/App.tsx` and `src/ui/screens/RunScreen.tsx` derive progress/logs from `props.events`.
- Since `props.events` is the same array reference for the lifetime of the run, React does not see prop changes and doesn’t trigger rerenders.

## Desired Behavior

- While `runBenchmark` is executing, the Ink UI updates as runner events arrive.
- Progress counters, tables, and logs repaint incrementally during the run.
- JSON mode (`--json`) continues to stream JSONL events without Ink.
- Quiet mode (`--quiet`) continues to suppress Ink.

## Proposed Solution (Minimal)

### Approach A (preferred): event handler updates React state

Create a small wrapper component rendered by Ink that:

- Holds `events` in React state (`useState` or `useReducer`).
- Passes an `onEvent` callback down (or closes over it) that appends events immutably (`setEvents(prev => [...prev, e])`).
- Starts the benchmark run and completes `runPromise` state, without requiring imperative `rerender` calls.

This keeps React responsible for state and rendering and avoids manual `instance.rerender()`.

## Implementation Steps

1. Refactor `src/cli/index.tsx` to avoid in-place mutation of the `events` prop passed into `<App />`.
2. Introduce a reactive event collection mechanism:
   - Either store `events` in component state (preferred), or call `rerender` with a fresh array.
3. Ensure run completion still transitions to the summary screen.
4. Keep behavior of `--json` and `--quiet` unchanged.

## Acceptance Criteria

- [ ] Running `pnpm dev -- run -c apocbench.yml --dry-run` shows the TUI updating during the run (progress/logs change without keypress).
- [ ] Running with `--quiet` produces no Ink output.
- [ ] Running with `--json` produces JSONL events and does not render Ink.
- [ ] No React/Ink warnings about state updates after unmount.
- [ ] Typecheck passes: `pnpm typecheck`.
- [ ] Lint passes: `pnpm lint`.
- [ ] Tests pass: `pnpm test`.

## References

- Current mutation + stable prop reference: `src/cli/index.tsx`
- UI derives display from props.events: `src/ui/App.tsx`, `src/ui/screens/RunScreen.tsx`
- Ink guidance: use React state for external events; avoid in-place mutation.
