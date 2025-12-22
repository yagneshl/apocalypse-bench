# Extended Question Bank (240) — v8

- JSONL in `data/question_bank_v8_jsonl/*.jsonl` is the source of truth; markdown is generated from JSONL.

- v8 adds a "very hard" extension pack (CHEM/MED/ENG/SAFE/MAT/MEAS/ORG) merged into the main JSONL categories.
- ENG-005 truth anchor is tightened to require correct guidance on lengthening/joining fibres (splicing/overlap) rather than only twist/ply.
- MED-009 and MED-010 auto-fails are refined to catch dangerously salty ORS recipes and disinfectant ingestion.
- All rubrics now explicitly reward concision/actionability (penalising long, fluffy answers that waste context/battery).

**Schema (per JSONL line):** `id, category, title, difficulty, task_type, scenario[], prompt, rubric[10], auto_fail[], reference_facts[]`
