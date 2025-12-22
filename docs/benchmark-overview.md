# apocalypse-bench: benchmark overview (for blog writers)

## What this benchmark is

`apocalypse-bench` (CLI: `apocbench`) is a TypeScript benchmark for evaluating how useful LLMs are as an **offline survival/apocalypse assistant**.

It runs a fixed question bank (currently `data/question_bank_v8_*`) across one or more **candidate models** (local via Ollama and/or hosted via OpenRouter), then uses a separate **judge model** to score each answer against a structured rubric.

## What it measures (and what it doesn’t)

### What it measures

- **Practical usefulness under constraints**: Can a model produce a step-by-step plan using only the stated resources?
- **Safety awareness**: Does it flag hazards and include concrete mitigations and “stop-work” triggers?
- **Actionability + concision**: Answers are expected to be structured, scannable, and not essay-like.
- **Reliability on field-expedient domains**: sanitation, basic medicine, low-tech engineering, materials, energy, agriculture, measurement, governance, and communications.

### What it does not measure

- Internet retrieval, browsing, or tool use (the benchmark assumes “no internet”).
- Long-term memory or personalization.
- A public leaderboard (reports are local artifacts).

## How a run works

1. **Load config** from `apocbench.yml` (or JSON), validating against a strict schema.
2. **Load dataset** directly from JSONL:
   - Runtime dataset: `data/question_bank_v8_jsonl/*.jsonl`
3. For each candidate model and each question:
   - Generate a candidate answer (with an “offline survival assistant” system prompt).
   - Send the question + rubric + candidate answer to the judge model.
   - Parse judge output (structured JSON), compute a per-question score, and persist artifacts.
4. **Aggregate** scores by category/difficulty and produce reports (HTML + Markdown) under `runs/<runId>/`.

## Scoring model

Each question includes:

- A **rubric** (typically 10 criteria) scored as 0/1 (with optional weights / max scores).
- **Auto-fail** conditions that force the overall score to 0 if triggered (e.g., dangerously unsafe guidance, refusal-only).

The judge returns structured output including per-rubric scores, an auto-fail flag/reason, and notes; the runner then computes the overall score (0 if auto-fail, else weighted sum).

## Dataset structure (v8)

The v8 question bank is an “extended” bank (240 questions) with a “very hard” extension pack across several domains.

Each dataset line (JSONL) follows:

`id, category, title, difficulty, task_type, scenario[], prompt, rubric[...], auto_fail[], reference_facts[]`

Difficulty is one of `Easy | Medium | Hard | Very Hard`.

## Categories in the benchmark (with examples)

Below are the categories (as encoded in `data/question_bank_v8_jsonl/*.jsonl`). Each category includes a mix of task types (e.g., procedure, critique) and difficulty tiers.

### `AGR` — Agriculture systems (including applied food/bio)

Focus: soil, rotations, pest management, irrigation, seed systems, livestock integration.

Example questions:

- `AGR-001`: Build a composting system for a new settlement
- `AGR-027`: Clone a good fruit tree

### `GT` — General survival “town planning”

Focus: foundational public health for camps/settlements across different climates (water, sanitation, food safety, outbreaks).

Example questions:

- `GT-001`: Safe drinking water plan — Temperate river camp
- `GT-010`: Sanitation system design — Tropical coastal settlement

### `MED` — Medicine

Focus: first aid, triage, wound care, childbirth, emergency procedures under limited resources, with strict safety boundaries.

Example questions:

- `MED-001`: Triage after a building collapse with limited supplies
- `MED-017`: Prepare a clean childbirth kit and plan

### `CHEM` — Chemistry

Focus: chemical processes and materials preparation in austere conditions; heavily safety-scored.

Example questions:

- `CHEM-101`: Extracting ethanol (high proof) via fractional distillation
- `CHEM-105`: Making hard soap vs soft soap (potash vs lye)

### `ENR` — Energy (heat, fuel, infrastructure, engines, power)

Focus: cooking/heating efficiency, fuel budgeting, charcoal/biogas, small-scale generation and safe low-voltage systems.

Example questions:

- `ENR-001`: Design a fuel-efficient communal cooking stove
- `ENR-018`: Wire a small low-voltage lighting system safely
- `ENR-028`: Desulfating lead-acid batteries

### `ENG` — Engineering (civil + mechanical)

Focus: shelters, water systems, pumps, lifting/rigging, kilns/furnaces, practical construction and troubleshooting.

Example questions:

- `ENG-003`: Build a simple footbridge over a 2 m stream using logs
- `ENG-009`: Move a 500 kg stone without machinery

### `MAT` — Materials & making

Focus: wood/metalwork basics, adhesives, ceramics, mortars, textiles, soap, simple fabrication.

Example questions:

- `MAT-001`: Build a sturdy workbench with limited tools
- `MAT-013`: Make lime mortar from shells/limestone and use it in masonry

### `MEAS` — Measurement & calibration

Focus: establishing standards, surveying/layout, timekeeping, safe measurement for dosing/recipes, experimental method.

Example questions:

- `MEAS-001`: Create a community length standard and basic measuring tools
- `MEAS-006`: Create reliable volume measures for cooking and ORS

### `SAFE` — Safety engineering

Focus: risk assessment, SOPs, incident analysis, chemical/fume hazards, CO/fire safety, and “stop work” culture.

Example questions:

- `SAFE-001`: Risk assessment for building a bridge with volunteers
- `SAFE-013`: Chemical safety SOP for lye and lime handling

### `ORG` — Organization & governance

Focus: coordination, decision-making, registries, conflict, justice processes, crisis protocols, quarantine design.

Example questions:

- `ORG-001`: Set up a skills inventory and labour rota for 60 survivors
- `ORG-016`: First contact protocol with a neighbouring group

### `ETH` — Ethics & policy

Focus: ethical tradeoffs in crisis governance, allocation, consent, surveillance, security policies.

Example questions:

- `ETH-001`: Allocate scarce medical supplies fairly during an outbreak
- `ETH-009`: Non-violent security and conflict prevention policy

### `COMMS` — Communications

Focus: low-tech and improvised comms (radio basics, signaling) with explicit safety and interference constraints.

Example questions:

- `COMMS-102`: Making a Foxhole Radio (Crystal Detector)
- `COMMS-103`: Heliograph signalling (mirror flash)

### `PED` — Pedagogy & training

Focus: teaching and assessment in high-risk, skill-based environments; how to train novices without accidents.

Example questions:

- `PED-001`: Design a lesson plan — Water station training
- `PED-010`: Assess competence and prevent errors — Using a balance scale

## Where outputs go

Runs write to `runs/<runId>/` and typically include:

- `summary.json` (aggregates by model/category/difficulty)
- An HTML report (e.g., `report.html`)
- Per-model exports (including Markdown summaries under `runs/<runId>/markdown/`)
