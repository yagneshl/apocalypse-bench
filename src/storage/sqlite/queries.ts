import type { DbHandle } from './db';

export type ModelResultRow = {
  run_id: string;
  model_id: string;
  question_id: string;
  score_overall: number | null;
  auto_fail: number | null;
  status: string;
  candidate_metrics_json: string | null;
};

export function listRunModelResults(db: DbHandle, runId: string): ModelResultRow[] {
  return db
    .prepare(
      `
      SELECT run_id, model_id, question_id, score_overall, auto_fail, status, candidate_metrics_json
      FROM model_results
      WHERE run_id = ?
    `,
    )
    .all(runId) as ModelResultRow[];
}
