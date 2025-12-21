# Plan: Fix JavaScript Heap Out of Memory in Long Benchmark Runs

## Problem Statement

During benchmark runs with multiple models (6+) and many questions (240+ per model), the application crashes with:

```
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
```

The crash occurs at ~24% completion (340/1440 questions) with heap usage reaching ~4GB.

## Root Cause Analysis

The stack trace reveals the crash occurs during `structuredClone` operations, which are triggered by:

1. React/Ink state updates when new events arrive
2. The `usage` field in `RunnerEvent` objects retains references to large AI SDK response objects
3. High-frequency state updates (every event + 250ms timer) create constant GC pressure

### Primary Issue: Large Objects in Event Stream

The `question_completed` and `question_failed` events include a `usage?: unknown` field that stores AI SDK response metadata. This object may contain:

- Internal buffers and references
- Full response metadata
- Provider-specific nested structures

With 2000 events stored and frequent array spreading (`[...prev, e]`), each React state update clones these large objects.

## Implementation Plan

### Phase 1: Normalize Event Data (Critical)

**Goal:** Ensure events only contain primitive/simple data structures, not references to large SDK objects.

#### 1.1 Create a strict event normalization function

**File:** `src/core/runner/normalizeEvent.ts` (new file)

```typescript
import type { RunnerEvent } from './orchestrator';
import type { NormalizedUsage } from '../../ui/format';

/**
 * Normalizes a RunnerEvent to contain only primitive values and simple objects.
 * This prevents memory leaks from AI SDK response objects being retained in the event stream.
 */
export function normalizeEvent(e: RunnerEvent): RunnerEvent {
  // Events without usage field pass through unchanged
  if (e.type !== 'question_completed' && e.type !== 'question_failed') {
    return e;
  }

  // Normalize usage to a simple object with only the fields we need
  const normalizedUsage = normalizeUsageField(e.usage);

  if (e.type === 'question_completed') {
    return {
      type: 'question_completed',
      runId: e.runId,
      modelId: e.modelId,
      questionId: e.questionId,
      overallScore: e.overallScore,
      latencyMs: e.latencyMs,
      usage: normalizedUsage,
      costUsd: e.costUsd,
    };
  }

  // question_failed
  return {
    type: 'question_failed',
    runId: e.runId,
    modelId: e.modelId,
    questionId: e.questionId,
    stage: e.stage,
    message: e.message,
    latencyMs: e.latencyMs,
    usage: normalizedUsage,
    costUsd: e.costUsd,
  };
}

function normalizeUsageField(usage: unknown): NormalizedUsage | undefined {
  if (!usage || typeof usage !== 'object') return undefined;

  const u = usage as Record<string, unknown>;

  // Handle AI SDK format (camelCase)
  const promptTokens =
    toNonNegativeInt(u.promptTokens) ?? toNonNegativeInt(u.prompt_tokens) ?? 0;
  const completionTokens =
    toNonNegativeInt(u.completionTokens) ?? toNonNegativeInt(u.completion_tokens) ?? 0;
  const totalTokens =
    toNonNegativeInt(u.totalTokens) ??
    toNonNegativeInt(u.total_tokens) ??
    promptTokens + completionTokens;

  if (totalTokens === 0 && promptTokens === 0 && completionTokens === 0) {
    return undefined;
  }

  return { promptTokens, completionTokens, totalTokens };
}

function toNonNegativeInt(value: unknown): number | null {
  if (typeof value !== 'number' || !Number.isFinite(value)) return null;
  const rounded = Math.floor(value);
  return rounded >= 0 ? rounded : null;
}
```

#### 1.2 Apply normalization at the event emission point

**File:** `src/cli/index.tsx`

Modify the `onEvent` callback in `runCommand`:

```typescript
import { normalizeEvent } from '../core/runner/normalizeEvent';

// In runCommand:
onEvent: (e) => {
  const normalized = normalizeEvent(e);  // <-- Add this
  events.push(normalized);
  if (events.length > EVENTS_LIMIT) events.splice(0, events.length - EVENTS_LIMIT);
  for (const s of subscribers) s(normalized);  // <-- Use normalized
  if (flags.json) process.stdout.write(JSON.stringify(normalized) + '\n');  // <-- Use normalized
},
```

### Phase 2: Optimize React State Updates

**Goal:** Reduce GC pressure from frequent array operations.

#### 2.1 Batch event updates in the UI

**File:** `src/ui/App.tsx`

Replace the current subscription effect with a batched version:

```typescript
useEffect(() => {
  let pendingEvents: RunnerEvent[] = [];
  let flushScheduled = false;

  const flush = () => {
    if (pendingEvents.length === 0) return;

    const toAdd = pendingEvents;
    pendingEvents = [];
    flushScheduled = false;

    setEvents((prev) => {
      // Single array operation for all pending events
      const next =
        prev.length + toAdd.length <= EVENTS_LIMIT
          ? [...prev, ...toAdd]
          : [...prev, ...toAdd].slice(-EVENTS_LIMIT);
      return next;
    });
  };

  const unsubscribe = subscribeToEvents((e) => {
    pendingEvents.push(e);

    if (!flushScheduled) {
      flushScheduled = true;
      // Use queueMicrotask for minimal delay while still batching
      // Falls back to setTimeout if many events arrive in same tick
      queueMicrotask(() => {
        if (pendingEvents.length > 10) {
          // High throughput: use setTimeout to batch more aggressively
          setTimeout(flush, 50);
        } else {
          flush();
        }
      });
    }
  });

  return unsubscribe;
}, [subscribeToEvents]);
```

#### 2.2 Reduce timer frequency for elapsed time display

**File:** `src/ui/screens/RunScreen.tsx`

Change the timer interval from 250ms to 1000ms (1 second):

```typescript
useEffect(() => {
  const t = setInterval(() => setNowMs(Date.now()), 1000); // Changed from 250
  return () => clearInterval(t);
}, []);
```

### Phase 3: Optimize Stats Computation

**Goal:** Avoid recomputing stats when only elapsed time changes.

#### 3.1 Separate elapsed time from stats computation

**File:** `src/ui/uiStats.ts`

Add a new field to track the run start time and compute elapsed time separately:

```typescript
export type UiStats = {
  // ... existing fields ...
  runStartedAtMs: number | null; // Add this field
};

export function computeUiStats(params: {
  events: RunnerEvent[];
  totalQuestions: number;
  questionsPerModel: number;
  modelCount: number;
  // Remove nowMs from params - compute elapsed time separately
}): UiStats {
  // ... existing code ...

  return {
    // ... existing fields ...
    runStartedAtMs, // Return raw timestamp instead of computing elapsed
    elapsedMs: 0, // Will be computed by caller
  };
}
```

**File:** `src/ui/screens/RunScreen.tsx`

```typescript
// Memoize stats computation - only recompute when events change
const baseStats = useMemo(
  () =>
    computeUiStats({
      events: props.events,
      totalQuestions: props.totalQuestions,
      questionsPerModel: props.questionsPerModel,
      modelCount: props.modelCount,
    }),
  [props.events, props.totalQuestions, props.questionsPerModel, props.modelCount],
);

// Compute elapsed time separately (this changes every second)
const elapsedMs =
  baseStats.runStartedAtMs != null ? Math.max(0, nowMs - baseStats.runStartedAtMs) : 0;

// Combine for rendering
const stats = { ...baseStats, elapsedMs };
```

### Phase 4: Safety Net - Reduce Event Limit

**Goal:** Provide hard cap on memory even if other issues arise.

#### 4.1 Reduce EVENTS_LIMIT from 2000 to 500

**Files:** `src/cli/index.tsx` and `src/ui/App.tsx`

```typescript
const EVENTS_LIMIT = 500; // Reduced from 2000
```

**Rationale:**

- 500 events is still plenty for UI display (logs panel shows 16)
- With 6 models, this covers ~80 questions worth of history per model
- Reduces worst-case memory by 75%

### Phase 5: Add Memory Monitoring (Optional)

**Goal:** Detect and warn about high memory usage before crash.

#### 5.1 Add periodic memory check in orchestrator

**File:** `src/core/runner/orchestrator.ts`

```typescript
// Add at top of runBenchmark function
let lastMemoryWarning = 0;
const MEMORY_WARNING_INTERVAL_MS = 30000; // Warn at most every 30s
const MEMORY_WARNING_THRESHOLD_MB = 2048; // Warn at 2GB

function checkMemoryUsage() {
  const now = Date.now();
  if (now - lastMemoryWarning < MEMORY_WARNING_INTERVAL_MS) return;

  const usage = process.memoryUsage();
  const heapUsedMB = usage.heapUsed / 1024 / 1024;

  if (heapUsedMB > MEMORY_WARNING_THRESHOLD_MB) {
    lastMemoryWarning = now;
    console.warn(`[apocbench] High memory usage: ${heapUsedMB.toFixed(0)}MB heap`);
  }
}

// Call periodically in the task loop or via setInterval
```

## Implementation Order

1. **Phase 1** (Critical) - Normalize events to strip large objects
2. **Phase 4** (Quick win) - Reduce event limit as safety net
3. **Phase 2** (Important) - Batch React state updates
4. **Phase 3** (Optimization) - Separate elapsed time computation
5. **Phase 5** (Optional) - Add memory monitoring

## Testing Plan

### Unit Tests

1. Add test for `normalizeEvent`:
   - Verify it strips unknown properties
   - Verify it preserves required fields
   - Verify it handles edge cases (null usage, invalid numbers)

2. Add test for batched event updates:
   - Verify events are batched correctly
   - Verify EVENTS_LIMIT is respected

### Integration Test

1. Run benchmark with `--limit 50` and 6 models (300 total questions)
2. Monitor memory usage with `node --expose-gc`:
   ```bash
   NODE_OPTIONS="--max-old-space-size=512" pnpm dev run -c apocbench.yml --limit 50
   ```
3. Verify run completes without OOM with 512MB heap limit

### Stress Test

1. Run full benchmark (240 questions × 6 models = 1440 questions)
2. Monitor memory with:
   ```bash
   node --expose-gc --trace-gc src/cli/index.tsx run -c apocbench.yml 2>&1 | grep -E "(Mark-Compact|Scavenge)"
   ```
3. Verify heap stays under 1GB throughout run

## Rollback Plan

If issues arise:

1. Each phase is independent and can be reverted separately
2. The most critical fix (Phase 1) is purely additive and low-risk
3. Phase 4 (reduced limit) can be easily adjusted via constant

## Success Criteria

- [ ] Full benchmark run (1440 questions) completes without OOM
- [ ] Peak heap usage stays under 1GB
- [ ] No degradation in UI responsiveness
- [ ] All existing tests pass
