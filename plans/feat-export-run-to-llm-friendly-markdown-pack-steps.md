# feat-export-run-to-llm-friendly-markdown-pack-steps.md

## Steps
1. Confirm scope and locate reference implementations
   Open `plans/feat-export-run-to-llm-friendly-markdown-pack.md` and identify the existing HTML report command and data sources: `src/cli/index.tsx` (command: `report`), `src/reports/html/renderHtml.ts`, and the SQLite query used for reports in `src/storage/sqlite/queries.ts`. Note the dataset schema in `src/core/dataset/schema.ts`. Stop when finished; wait for the next step.
2. Add CLI command stub
   In `src/cli/index.tsx`, add a new command route `export-md <runId>` wired through the existing CLI patterns (async command function + `buildCommand`). Define flags: `--out` (default `runs/<runId>/markdown`), `--mode` (`by-domain|by-model|both`, default `both`), `--include-cases` (default `true`), `--overwrite` (default `false`), and `--redact` (`none|basic`, default `none`, MVP implements `none`). Stop when finished; wait for the next step.
3. Create markdown exporter module skeleton
   Create a new folder/module at `src/reports/markdown/` and add initial exports for: `renderRunIndexMd`, `renderByDomainMd`, `renderByModelMd`, and `renderCaseMd`. Add helpers for slugifying, YAML front matter writing (using the existing `yaml` dependency), and newline normalization to `\n`. Stop when finished; wait for the next step.
4. Reuse existing SQLite query functions
   Wire the exporter to read from the same source-of-truth as `report`: use `listRunModelResults(runId)` from `src/storage/sqlite/queries.ts` and `getRun(runId)` from `src/storage/sqlite/runs.ts`. If the run config metadata isn’t in the DB row, locate where the `run` command stores config today (DB or run folder) and decide the minimal way to include it in `metadata.json` for MVP. Stop when finished; wait for the next step.
5. Define internal export record shape
   Define an internal “export record” structure derived from DB rows that can drive both JSON outputs and Markdown renderers. Ensure it can represent: run-level metadata (timestamps, duration, config, git commit/dirty if present), question/case data (id, category/domain, difficulty, scenario, prompt, rubric, auto-fail, reference facts if present), and per-model results (answer text, usage/cost if present, judge output and raw text where needed). Stop when finished; wait for the next step.
6. Implement output directory layout and overwrite rules
   Implement deterministic output layout under the run directory (or `--out`): `RUN.md`, `metadata.json`, `results.jsonl`, `by-domain/`, `by-model/`, and optionally `cases/`. Enforce overwrite behavior: if target exists and `--overwrite=false`, fail fast with a clear error; if `--overwrite=true`, replace existing output contents deterministically. Stop when finished; wait for the next step.
7. Write canonical machine outputs
   Write `metadata.json` as canonical run metadata and `results.jsonl` as canonical per-(model,case) records (one JSON object per line). Ensure newlines are normalized and the records include full prompt/answer/judge text even if Markdown later links/excerpts. Stop when finished; wait for the next step.
8. Render and write `RUN.md` index
   Generate `RUN.md` as a short, link-heavy index with YAML front matter containing: `run_id`, `created_utc`, `dataset`, `config_id`, `git_commit`, `schema_version`. Include stable headings and links to `by-domain/*.md`, `by-model/*.md`, and `cases/*.md` when present. Stop when finished; wait for the next step.
9. Render and write `by-domain/*.md`
   For `--mode=by-domain` or `both`, group cases by domain/category and generate one Markdown file per domain slug under `by-domain/`. Add YAML front matter: `run_id`, `domain`, `case_count`, `model_count`. Use stable headings (`## Scenario`, `## Prompt`, `## Rubric`, `## Results`, `## Judge`) and fenced blocks for long text (` ```text ` for prompts/answers, ` ```json ` for judge output). Stop when finished; wait for the next step.
10. Render and write `by-model/*.md`
   For `--mode=by-model` or `both`, group results by model and generate one Markdown file per model slug under `by-model/`. Add YAML front matter: `run_id`, `model`, `case_count`. Ensure duplicate model names are disambiguated (e.g., slug + short hash suffix) and partial runs show missing results as `MISSING`. Stop when finished; wait for the next step.
11. Render and write `cases/<caseId>.md` deep dives
   If `--include-cases=true`, generate one `cases/<caseId>.md` per question with YAML front matter: `run_id`, `case_id`, `domain`, `difficulty`. Include full scenario/prompt/rubric and a compact table or list of all model answers plus judge results; if tables get too large, keep them minimal and rely on full text in fenced blocks. Stop when finished; wait for the next step.
12. Handle edge cases consistently
   Implement handling for: partial runs (missing model/case pairs), judge parse failures (include raw judge text if present; otherwise note missing), very long prompts/answers (always full in `results.jsonl`, Markdown may link to case file), and `--redact` (MVP supports `none` only but keeps flag and plumbing for forward compatibility). Stop when finished; wait for the next step.
13. Run the sample export command
   Execute `apocbench export-md runs/default-20251222-084108` (or equivalent invocation in this repo) and confirm the output folder exists with `RUN.md`, `metadata.json`, and `results.jsonl`, plus the requested `by-domain/`, `by-model/`, and `cases/` outputs based on defaults. Stop when finished; wait for the next step.
14. Validate links and content completeness
   Open `RUN.md` and verify links point to existing files. Spot-check a `cases/*.md` file to confirm it contains the full prompt, answer, and judge output; verify `results.jsonl` contains full text for each record. Stop when finished; wait for the next step.
15. Final verification against original plan
   Re-open `plans/feat-export-run-to-llm-friendly-markdown-pack.md` and confirm every required output, CLI flag, data requirement, edge-case rule, and acceptance criterion is implemented and validated (especially the two output organizations and the deterministic folder layout). Stop when finished; wait for the next step.
