export function renderHtmlReport(params: { runId: string; summaryJson: unknown }): string {
  const summaryJson = params.summaryJson as Record<string, unknown> | null;
  const summaryPretty = JSON.stringify(params.summaryJson, null, 2);

  const models = Array.isArray(summaryJson?.models) ? summaryJson?.models : [];
  const sortedModels = [...models].sort((a, b) => number(b?.overallScore) - number(a?.overallScore));

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>apocbench - ${escapeHtml(params.runId)}</title>
    <style>
      :root { color-scheme: light dark; }
      body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; margin: 24px; line-height: 1.35; }
      code, pre, table { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
      h1 { margin: 0 0 8px; }
      h2 { margin: 24px 0 8px; }
      .muted { opacity: 0.75; }
      .card { border: 1px solid rgba(127,127,127,0.25); border-radius: 10px; padding: 12px 14px; margin: 12px 0; }
      .grid { display: grid; grid-template-columns: max-content 1fr; gap: 6px 12px; }
      table { width: 100%; border-collapse: collapse; }
      th, td { padding: 6px 10px; border-bottom: 1px solid rgba(127,127,127,0.25); vertical-align: top; }
      th { text-align: left; font-weight: 600; }
      td.num, th.num { text-align: right; }
      tr:hover td { background: rgba(127,127,127,0.08); }
      details { margin: 12px 0; }
      summary { cursor: pointer; font-weight: 600; }
      pre { background: rgba(127,127,127,0.12); padding: 12px; border-radius: 10px; overflow: auto; }
    </style>
  </head>
  <body>
    <h1>apocbench</h1>
    <p>runId: <code>${escapeHtml(params.runId)}</code></p>

    <div class="card">
      <div class="grid">
        ${row('createdAt', string(summaryJson?.createdAt))}
        ${row('datasetPath', string(summaryJson?.datasetPath))}
        ${row('datasetSha256', string(summaryJson?.datasetSha256))}
        ${row('promptTemplateHash', string((summaryJson as any)?.promptTemplateHash))}
        ${row(
          'judge',
          string((summaryJson as any)?.judge?.model)
            ? `${escapeHtml(String((summaryJson as any).judge.model))}${
                string((summaryJson as any)?.judge?.provider)
                  ? ` (${escapeHtml(String((summaryJson as any).judge.provider))})`
                  : ''
              }`
            : null,
        )}
      </div>
      <div class="muted" style="margin-top: 8px">
        Note: prompts and completions may contain sensitive data.
      </div>
    </div>

    ${
      sortedModels.length > 0
        ? `
    <h2>Models</h2>
    <table>
      <thead>
        <tr>
          <th>modelId</th>
          <th class="num">score</th>
          <th class="num">avg</th>
          <th class="num">done</th>
          <th class="num">failed</th>
          <th class="num">skipped</th>
          <th class="num">auto-fail</th>
          <th class="num">p50 ms</th>
          <th class="num">p90 ms</th>
        </tr>
      </thead>
      <tbody>
        ${sortedModels.map(m => renderModelRow(m)).join('\n')}
      </tbody>
    </table>

    <h2>Breakdowns</h2>
    ${sortedModels.map(m => renderModelDetails(m)).join('\n')}
    `
        : `<p class="muted">No model summaries found.</p>`
    }

    <h2>Raw summary JSON</h2>
    <pre>${escapeHtml(summaryPretty)}</pre>
  </body>
</html>`;
}

function row(label: string, value: string | null): string {
  if (!value) return '';
  return `<div class="muted">${escapeHtml(label)}</div><div><code>${value}</code></div>`;
}

function number(v: unknown): number {
  return typeof v === 'number' && Number.isFinite(v) ? v : 0;
}

function string(v: unknown): string | null {
  return typeof v === 'string' && v.length > 0 ? escapeHtml(v) : null;
}

function fmtNum(v: unknown, digits = 2): string {
  const n = typeof v === 'number' && Number.isFinite(v) ? v : null;
  return n == null ? '—' : n.toFixed(digits);
}

function fmtInt(v: unknown): string {
  const n = typeof v === 'number' && Number.isFinite(v) ? v : null;
  return n == null ? '—' : String(Math.trunc(n));
}

function fmtPct(v: unknown): string {
  const n = typeof v === 'number' && Number.isFinite(v) ? v : null;
  return n == null ? '—' : `${(n * 100).toFixed(1)}%`;
}

function fmtMs(v: unknown): string {
  const n = typeof v === 'number' && Number.isFinite(v) ? v : null;
  return n == null ? '—' : `${Math.round(n)}ms`;
}

function renderModelRow(m: any): string {
  const latency = m?.latencyMs ?? {};
  return `
    <tr>
      <td>${escapeHtml(String(m?.modelId ?? 'unknown'))}</td>
      <td class="num">${fmtNum(m?.overallScore, 2)}</td>
      <td class="num">${fmtNum(m?.overallScoreMean, 4)}</td>
      <td class="num">${fmtInt(m?.completed)}</td>
      <td class="num">${fmtInt(m?.failures)}</td>
      <td class="num">${fmtInt(m?.skipped)}</td>
      <td class="num">${fmtPct(m?.autoFailRate)}</td>
      <td class="num">${fmtMs(latency?.medianMs)}</td>
      <td class="num">${fmtMs(latency?.p90Ms)}</td>
    </tr>
  `.trim();
}

function renderBreakdownTable(params: { kind: 'category' | 'difficulty'; rows: any[] }): string {
  const key = params.kind === 'category' ? 'category' : 'difficulty';
  const sorted = [...params.rows].sort(
    (a, b) => number(b?.overallScore) - number(a?.overallScore) || String(a?.[key]).localeCompare(String(b?.[key])),
  );

  return `
    <table>
      <thead>
        <tr>
          <th>${key}</th>
          <th class="num">score</th>
          <th class="num">avg</th>
          <th class="num">done</th>
          <th class="num">failed</th>
          <th class="num">skipped</th>
          <th class="num">auto-fail</th>
          <th class="num">p50 ms</th>
          <th class="num">p90 ms</th>
        </tr>
      </thead>
      <tbody>
        ${sorted
          .map(r => {
            const latency = r?.latencyMs ?? {};
            return `
              <tr>
                <td>${escapeHtml(String(r?.[key] ?? 'unknown'))}</td>
                <td class="num">${fmtNum(r?.overallScore, 2)}</td>
                <td class="num">${fmtNum(r?.overallScoreMean, 4)}</td>
                <td class="num">${fmtInt(r?.completed)}</td>
                <td class="num">${fmtInt(r?.failures)}</td>
                <td class="num">${fmtInt(r?.skipped)}</td>
                <td class="num">${fmtPct(r?.autoFailRate)}</td>
                <td class="num">${fmtMs(latency?.medianMs)}</td>
                <td class="num">${fmtMs(latency?.p90Ms)}</td>
              </tr>
            `.trim();
          })
          .join('\n')}
      </tbody>
    </table>
  `.trim();
}

function renderModelDetails(m: any): string {
  const categories = Array.isArray(m?.categoryBreakdown) ? m.categoryBreakdown : [];
  const difficulties = Array.isArray(m?.difficultyBreakdown) ? m.difficultyBreakdown : [];

  return `
    <details>
      <summary>${escapeHtml(String(m?.modelId ?? 'unknown'))}</summary>
      <div class="card">
        <div class="grid">
          ${row('totalQuestions', fmtInt(m?.totalQuestions))}
          ${row('completed', fmtInt(m?.completed))}
          ${row('failures', fmtInt(m?.failures))}
          ${row('skipped', fmtInt(m?.skipped))}
          ${row('overallScore', fmtNum(m?.overallScore, 2))}
          ${row('overallScoreMean', fmtNum(m?.overallScoreMean, 4))}
          ${row('autoFailRate', fmtPct(m?.autoFailRate))}
        </div>
      </div>
      ${
        categories.length > 0
          ? `<h3>By category</h3>${renderBreakdownTable({ kind: 'category', rows: categories })}`
          : `<p class="muted">No category breakdown available.</p>`
      }
      ${
        difficulties.length > 0
          ? `<h3>By difficulty</h3>${renderBreakdownTable({ kind: 'difficulty', rows: difficulties })}`
          : `<p class="muted">No difficulty breakdown available.</p>`
      }
    </details>
  `.trim();
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
