export function redactSecrets(value: unknown): unknown {
  if (value == null) return value;
  if (typeof value === 'string') {
    return value.replace(/(sk-[A-Za-z0-9_-]{8,})/g, 'sk-REDACTED');
  }
  if (Array.isArray(value)) return value.map(redactSecrets);
  if (typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      const lower = k.toLowerCase();
      if (lower.includes('authorization') || lower.includes('api_key') || lower.includes('apikey')) {
        out[k] = 'REDACTED';
      } else {
        out[k] = redactSecrets(v);
      }
    }
    return out;
  }
  return value;
}
