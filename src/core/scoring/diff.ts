export type RunSummary = {
  runId: string;
  models: Array<{ modelId: string; overallScore: number; autoFailCount: number }>;
};

export function diffSummaries(a: RunSummary, b: RunSummary) {
  const byModel = (s: RunSummary) => new Map(s.models.map(m => [m.modelId, m] as const));
  const am = byModel(a);
  const bm = byModel(b);
  const modelIds = Array.from(new Set([...am.keys(), ...bm.keys()])).sort();

  return modelIds.map(id => {
    const left = am.get(id);
    const right = bm.get(id);
    return {
      modelId: id,
      aOverall: left?.overallScore ?? null,
      bOverall: right?.overallScore ?? null,
      deltaOverall:
        left && right ? Number((right.overallScore - left.overallScore).toFixed(6)) : null,
      aAutoFail: left?.autoFailCount ?? null,
      bAutoFail: right?.autoFailCount ?? null,
    };
  });
}
