# Plan: Fix JavaScript Heap Out of Memory in Long Benchmark Runs

## Problem Statement

During benchmark runs with multiple models (6+) and many questions (240+ per model), the application crashes with:

```
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
```

The crash occurs at ~24-31% completion with heap usage reaching ~4GB.

## Root Cause Analysis (Updated)

After initial fixes (sanitizing events, batching UI updates) failed to resolve the issue, deeper investigation revealed the **true root cause**: the orchestrator was retaining full AI SDK response objects in async closures.

### Primary Issue: Closure Retention in Fire-and-Forget Async Functions

In `src/core/runner/orchestrator.ts`, the `maybeEmitOpenRouterGenerationMetrics` function was being called with the **entire** `candidateResult` object:

```typescript
// BEFORE (problematic):
void maybeEmitOpenRouterGenerationMetrics({
  modelId: modelEntry.id,
  questionId: q.id,
  result: candidateResult, // Full AI SDK response retained until async completes!
});
```

This function:

1. Extracts a generation ID from the result
2. Makes up to 3 HTTP requests with 1.5s delays between them
3. Only releases the closure after ~4.5 seconds

**With 8 models × high concurrency, dozens of these closures were active simultaneously**, each holding a full AI SDK response object that can be several MB in size.

### Secondary Issue: Usage Field Retaining References

The `lastCandidateUsage` variable was typed as `unknown` and assigned from `candidateResult.usage`, which could retain references to the parent AI SDK response object through internal JavaScript object references.

### Contributing Factors (Already Partially Addressed)

1. Events stored `usage: unknown` which could reference AI SDK response objects
2. UI state updates created array copies on every event
3. Frequent re-renders from 250ms timer

## Implementation (Completed)

### Fix 1: Don't Pass Full Result Objects to Async Functions

**File:** `src/core/runner/orchestrator.ts`

Changed `maybeEmitOpenRouterGenerationMetrics` to only receive the generation ID string:

```typescript
// AFTER (fixed):
async function maybeEmitOpenRouterGenerationMetrics(p: {
  modelId: string;
  questionId: string;
  generationId: string; // Just the string, not the full result
}): Promise<void> {
  // ...
}

// Call sites extract ID first:
const candidateGenerationId = extractOpenRouterGenerationId(candidateResult);
if (candidateGenerationId) {
  void maybeEmitOpenRouterGenerationMetrics({
    modelId: modelEntry.id,
    questionId: q.id,
    generationId: candidateGenerationId,
  });
}
```

### Fix 2: Normalize Usage Immediately, Break References

**File:** `src/core/runner/openrouterUsage.ts`

Added `normalizeUsage()` function to extract only token counts:

```typescript
export function normalizeUsage(usage: unknown): NormalizedUsage | null {
  if (!usage || typeof usage !== 'object') return null;
  // Extract only primitive numbers, no object references
  const promptTokens = ...;
  const completionTokens = ...;
  const totalTokens = ...;
  return { promptTokens, completionTokens, totalTokens };
}
```

**File:** `src/core/runner/orchestrator.ts`

Changed `lastCandidateUsage` to be typed as `NormalizedUsage | null | undefined` and immediately normalized:

```typescript
// BEFORE:
let lastCandidateUsage: unknown | undefined;
lastCandidateUsage = candidateOr.usage ?? candidateResult.usage;

// AFTER:
let lastCandidateUsage: NormalizedUsage | null | undefined;
lastCandidateUsage = candidateOr.usage ?? normalizeUsage(candidateResult.usage);
```

### Fix 3: Remove Null Result Calls

Removed the fire-and-forget call on failure paths that passed `null`:

```typescript
// BEFORE:
void maybeEmitOpenRouterGenerationMetrics({
  modelId: modelEntry.id,
  questionId: q.id,
  result: null, // Pointless call
});

// AFTER:
// On failure path, no generation ID to fetch metrics for
// (removed fire-and-forget call that passed null result)
```

### Previously Implemented Fixes (Still Active)

1. **sanitizeEvent()** - Sanitizes events at CLI buffer boundary
2. **Batched UI updates** - Events batched with 16ms setTimeout
3. **Incremental stats** - totalsReducer computes stats incrementally

## Files Changed

1. `src/core/runner/orchestrator.ts` - Main memory leak fixes
2. `src/core/runner/openrouterUsage.ts` - Added `normalizeUsage()` function
3. `src/core/runner/sanitizeEvent.ts` - Event sanitization (unchanged, already existed)
4. `src/cli/index.tsx` - Applies sanitizeEvent (unchanged)
5. `src/ui/App.tsx` - Batched updates (unchanged)

## Validation

### Unit Tests

All existing tests pass:

- `src/core/runner/sanitizeEvent.test.ts` - 4 tests passing
- `src/ui/uiStats.test.ts` - 5 tests passing
- All other test files passing (21 total tests)

### Integration Testing

Run with constrained heap to verify fix:

```bash
NODE_OPTIONS="--max-old-space-size=1024" pnpm dev run -c apocbench.yml
```

### Expected Improvements

1. **Before fix**: Dozens of full AI SDK response objects retained in closures simultaneously
2. **After fix**: Only primitive values (strings, numbers) retained in closures
3. **Memory impact**: Each AI SDK response could be 1-10MB; now only ~100 bytes per closure

## Success Criteria

- [ ] Full benchmark run (1440+ questions) completes without OOM
- [ ] Peak heap usage stays under 1GB
- [ ] No degradation in UI responsiveness
- [ ] All existing tests pass ✓

## Key Learnings

1. **Fire-and-forget async functions can cause memory leaks** - Even with `void`, the closure retains all captured variables until the async operation completes.

2. **Extract only what you need immediately** - Don't pass large objects to async functions; extract the specific data needed first.

3. **Type `unknown` is a red flag for memory** - When storing data for later use, prefer specific types that force extraction of only needed fields.

4. **Event sanitization alone isn't enough** - The events were being sanitized at the CLI boundary, but the original large objects were still retained by pending async operations in the orchestrator.

5. **Ink/React TUI has significant memory overhead** - Storing 2000 events in React state with Ink causes memory issues even with small event objects. The `--quiet` mode (no TUI) works fine, proving the issue is in rendering.

6. **JSON.stringify in render paths is expensive** - The `formatEventSummary` function used `JSON.stringify` as a fallback for unknown event types (`generation_metrics`), which was called on every render.

7. **Only store what you display** - The UI only needs ~50 recent events (16 for logs panel + buffer), but we were storing 2000. Aggregated stats should be computed incrementally, not derived from the full event history.

## Additional Fix: Ink/React Memory Optimization

After the orchestrator fixes, the OOM still occurred. Investigation showed:

- `--quiet` mode works perfectly (no TUI = no leak)
- Stack trace showed `JSSegmentIterator::Next` (string operations in Ink)

### Changes Made

1. **Reduced EVENTS_LIMIT dramatically**:
   - CLI buffer: 2000 → 100
   - UI state: 2000 → 50

2. **Added `generation_metrics` case to `formatEventSummary`** to avoid `JSON.stringify` fallback

3. **Totals computed from full initial events**, then incrementally updated (not re-derived from truncated events array)
