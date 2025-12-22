import type { RunnerEvent } from './orchestrator';

export type BudgetState = {
  maxBudgetUsd: number | null;
  spentUsd: number;
  budgetExceededEmitted: boolean;
};

export function initBudgetState(maxBudgetUsd: number | null): BudgetState {
  return {
    maxBudgetUsd,
    spentUsd: 0,
    budgetExceededEmitted: false,
  };
}

export function extractOpenRouterCost(raw: unknown): number | null {
  const pm = (raw as { providerMetadata?: unknown } | null | undefined)?.providerMetadata as
    | {
        openrouter?: {
          cost?: unknown;
          usage?: { cost?: unknown };
        };
      }
    | null
    | undefined;

  const cost = pm?.openrouter?.cost;
  if (typeof cost === 'number' && Number.isFinite(cost)) return cost;

  const usageCost = pm?.openrouter?.usage?.cost;
  return typeof usageCost === 'number' && Number.isFinite(usageCost) ? usageCost : null;
}

export function emitBudgetExceededIfNeeded(params: {
  state: BudgetState;
  runId: string;
  onEvent?: (e: RunnerEvent) => void;
}): void {
  const { state, runId, onEvent } = params;
  if (
    state.maxBudgetUsd == null ||
    state.spentUsd < state.maxBudgetUsd ||
    state.budgetExceededEmitted
  ) {
    return;
  }
  state.budgetExceededEmitted = true;
  onEvent?.({ type: 'budget_exceeded', runId, maxBudgetUsd: state.maxBudgetUsd });
}

export function recordSpend(params: {
  state: BudgetState;
  runId: string;
  costUsd: number;
  source: 'candidate' | 'judge';
  onEvent?: (e: RunnerEvent) => void;
}): void {
  const { state, runId, costUsd, source, onEvent } = params;
  if (!Number.isFinite(costUsd) || costUsd <= 0) return;
  state.spentUsd += costUsd;
  onEvent?.({ type: 'budget_spent', runId, spentUsd: state.spentUsd, source });
  emitBudgetExceededIfNeeded({ state, runId, onEvent });
}

export function isBudgetExceeded(params: {
  state: BudgetState;
  runId: string;
  onEvent?: (e: RunnerEvent) => void;
}): boolean {
  const { state, runId, onEvent } = params;
  emitBudgetExceededIfNeeded({ state, runId, onEvent });
  return state.maxBudgetUsd != null && state.spentUsd >= state.maxBudgetUsd;
}
