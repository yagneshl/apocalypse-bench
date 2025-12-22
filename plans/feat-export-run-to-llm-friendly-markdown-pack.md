# feat: export run to LLM-friendly markdown pack

## Goal

Convert a completed run into an LLM-friendly Markdown “report pack” (a folder of `.md` files) that contains everything needed to write a comprehensive blog post:

- Scenario(s)
- Full prompts given to models
- Each model’s answer per question
- Scoring rubric (and any auto-fail rules)
- Judge scores + judge comments
- Run metadata (config, model IDs, sampling params, timestamps, git commit, dataset info, etc.)

Support **two output organizations**:

1. **By domain**: one `.md` file per domain/category, containing all models for questions in that domain.
2. **By model**: one `.md` file per model, containing all questions that model answered.

Test run for iteration speed: `runs/default-20251222-084108` (only 1 question answered).

## Non-goals (for MVP)

- Generating charts/plots (leave to later)
- Packaging the folder into `.zip`/`.tar` (optional follow-up)
- Redaction system beyond a simple `--redact` toggle (follow-up)

## Current Repo Context (where data comes from)

- Runs/results are persisted in SQLite (`runs/apocbench.sqlite`).
- Existing HTML report generation exists:
  - CLI route: `src/cli/index.tsx` (command: `report`)
  - HTML renderer: `src/reports/html/renderHtml.ts`
  - DB query used for report/diff: `src/storage/sqlite/queries.ts#L1`
- Dataset question schema (prompt/rubric/etc.): `src/core/dataset/schema.ts#L1`

The Markdown exporter should reuse the same **source-of-truth** data used by `report`: query from SQLite for model_results + questions.

## Proposed Output Format

### Output directory layout

Create a deterministic folder under the run directory:

```
runs/<runId>/markdown/
  RUN.md
  metadata.json
  results.jsonl
  by-domain/
    <domainSlug>.md
  by-model/
    <modelSlug>.md
  cases/
    <caseId>.md
```

Notes:
- `RUN.md` is a human/LLM index (short, link-heavy).
- `metadata.json` is canonical machine metadata.
- `results.jsonl` is canonical per-(model,case) records (easy to grep, diff, post-process).
- `cases/<caseId>.md` is optional but recommended: single “deep dive” file per question with full scenario/prompt/rubric and a table of all model answers + judge.
- `by-domain/` and `by-model/` are the two requested “views”.

### Front matter conventions

Add YAML front matter to Markdown files (but keep canonical metadata in JSON):

- `RUN.md` front matter: `run_id`, `created_utc`, `dataset`, `config_id`, `git_commit`, `schema_version`
- `by-domain/*.md`: `run_id`, `domain`, `case_count`, `model_count`
- `by-model/*.md`: `run_id`, `model`, `case_count`
- `cases/*.md`: `run_id`, `case_id`, `domain`, `difficulty`

Use the existing `yaml` dependency for front matter stringification.

### Markdown content conventions (LLM-friendly)

- Stable headings: `## Scenario`, `## Prompt`, `## Rubric`, `## Results`, `## Judge`.
- Put long text (prompt/answer/judge) in fenced blocks:
  - Prompt: ```text
  - Answer: ```text
  - Judge output: ```json
- Keep tables small; if too long, link to `cases/<caseId>.md`.
- Normalize newlines to `\n`.

## CLI Interface (new command)

Add a new CLI route in `src/cli/index.tsx`:

`apocbench export-md <runId>`

Flags:

- `--out <dir>` (default: `runs/<runId>/markdown`)
- `--mode <by-domain|by-model|both>` (default: `both`)
- `--include-cases <true|false>` (default: `true`)
- `--overwrite` (default: `false`)
- `--redact <none|basic>` (default: `none`) (MVP can implement `none` only; keep flag for forward compat)

Implementation should follow existing CLI patterns (async command function + `buildCommand`).

## Data Requirements (what we must extract)

### Run-level

- `run_id`, `started_at`, `completed_at`, duration
- runner version / schema version (if present)
- config: models list, judge model, dataset path/selection, sampling params, retry/budget policies
- git commit + dirty flag (if present)

Sources:
- `runs` table for run metadata
- config source: wherever `run` command stores it today (likely in DB or run folder; confirm during implementation)

### Question-level (case)

From dataset schema (`src/core/dataset/schema.ts`):

- `id`, `category` (treat as domain), `difficulty`
- `scenario[]`
- `prompt`
- `rubric[]` (id, text, weight, maxScore)
- `auto_fail[]`
- `reference_facts[]` (if present)

From DB `questions` row (joined in `listRunModelResults`):

- `questionJson` (if stored), or fields needed to reconstruct the above

### Result-level (per model per case)

From DB `model_results` row:

- model identifier (the display name and the canonical ID used in config)
- final answer text
- usage/cost metadata (if stored)
- judge output:
  - total score
  - per-rubric item scores (if available)
  - judge comments/rationale
  - failures / auto-fails if any

## Edge Cases / Handling

- Partial runs (some models missing results for some cases): show as `MISSING`.
- Judge parse failures: include raw judge text if present; otherwise note missing.
- Very long prompts/answers: always keep full text in `results.jsonl`; Markdown may include full or excerpt + link.
- Duplicate model names: disambiguate slug with short hash suffix.
- Overwrite behavior:
  - If `--overwrite=false` and target exists: fail fast with clear message.

## Implementation Plan (MVP)

### Phase 1 — Read run + results

1. Add `export-md` command stub in `src/cli/index.tsx`.
2. Implement `src/reports/markdown/` module (new):
   - `renderRunIndexMd(...)`
   - `renderByDomainMd(...)`
   - `renderByModelMd(...)`
   - `renderCaseMd(...)`
   - helpers: slugify, front matter writer, newline normalization.
3. Reuse existing SQLite query functions:
   - Use `listRunModelResults(runId)` from `src/storage/sqlite/queries.ts`.
   - Use `getRun(runId)` from `src/storage/sqlite/runs.ts`.
4. Define an internal “export record” shape derived from DB rows.

### Phase 2 — Write pack

1. Create output directories.
2. Write:
   - `metadata.json`
   - `results.jsonl`
   - `RUN.md`
3. If `--mode=both`:
   - Write all `by-domain/*.md` and `by-model/*.md`.
4. If `--include-cases=true`:
   - Write `cases/<caseId>.md`.

### Phase 3 — Validate on sample run

1. Run `apocbench export-md runs/default-20251222-084108`.
2. Confirm:
   - folder created
   - `RUN.md` links are correct
   - `cases/*.md` contains full prompt/answer/judge

## Acceptance Criteria

- [ ] `apocbench export-md <runId>` creates a deterministic folder with `RUN.md`, `metadata.json`, `results.jsonl`.
- [ ] `--mode=by-domain` creates `by-domain/*.md` with correct grouping.
- [ ] `--mode=by-model` creates `by-model/*.md` with correct grouping.
- [ ] `--mode=both` creates both.
- [ ] Output includes scenario, prompt, rubric, answers, judge results, and run metadata.
- [ ] Works on `runs/default-20251222-084108`.

## Follow-ups (optional)

- `--zip` flag to bundle the pack.
- `--redact=basic` (emails, API keys, obvious secrets) + metrics in metadata.
- Add “top failures” section to `RUN.md`.
