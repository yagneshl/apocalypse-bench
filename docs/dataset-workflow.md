# Dataset workflow

## Source of truth

- Edit questions in `data/question_bank_v7.md`.

## Generate JSONL

`apocbench` loads JSONL at runtime (see `run.datasetPath` in `apocbench.yml`).

Regenerate JSONL from markdown:

```bash
pnpm -s compile:dataset -- --in data/question_bank_v7.md --out data/question_bank_v7.jsonl
```

## Verify sync

This test fails if the checked-in JSONL drifts from the markdown:

```bash
pnpm -s test -- test/dataset-sync.test.ts
```

## Mini sanity check

There is a tiny markdown bank for quick verification:

- `data/question_bank_mini.md`

The test `test/compile-mini-dataset.test.ts` compiles it to `tmp/mini_compiled.jsonl` and ensures `loadJsonl(...)` accepts it.
