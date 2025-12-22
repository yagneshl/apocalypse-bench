export type RetryPolicy = {
  maxRetries: number;
  baseMs: number;
  maxMs: number;
  maxTotalTimeMs?: number | null;
};

export const DEFAULT_RETRY_POLICY: RetryPolicy = {
  maxRetries: 3,
  baseMs: 600,
  maxMs: 8000,
  maxTotalTimeMs: null,
};

export function isRetryableError(err: unknown): boolean {
  const message = err instanceof Error ? err.message : String(err);
  return /429|5\d\d|timeout|ECONNRESET|ENOTFOUND|aborted/i.test(message);
}
