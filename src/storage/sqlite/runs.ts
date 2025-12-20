import type { DbHandle } from './db';

export type RunRow = {
  run_id: string;
  created_at: string;
  tool_version: string;
  config_json: string;
  dataset_path: string;
  dataset_sha256: string;
  prompt_template_hash: string;
  status: string;
};

export function insertRun(db: DbHandle, row: RunRow): void {
  db.prepare(
    `
    INSERT INTO runs (
      run_id, created_at, tool_version, config_json, dataset_path,
      dataset_sha256, prompt_template_hash, status
    ) VALUES (
      @run_id, @created_at, @tool_version, @config_json, @dataset_path,
      @dataset_sha256, @prompt_template_hash, @status
    )
  `,
  ).run(row);
}

export function getRun(db: DbHandle, runId: string): RunRow | undefined {
  return db.prepare('SELECT * FROM runs WHERE run_id = ?').get(runId) as RunRow | undefined;
}

export function updateRunStatus(db: DbHandle, runId: string, status: string): void {
  db.prepare('UPDATE runs SET status = ? WHERE run_id = ?').run(status, runId);
}
