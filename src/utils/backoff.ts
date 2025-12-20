export type BackoffOptions = {
  retries: number;
  baseMs: number;
  maxMs: number;
};

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function computeBackoffMs(attempt: number, opts: BackoffOptions): number {
  const exp = Math.min(opts.maxMs, opts.baseMs * 2 ** attempt);
  const jitter = exp * (0.2 * (Math.random() - 0.5) * 2);
  return Math.max(0, Math.round(exp + jitter));
}
