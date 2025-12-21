# Mini Question Bank (2) — for verifying MD→JSONL

**Schema (per JSONL line):** `id, category, title, difficulty, task_type, scenario[], prompt, rubric[10], auto_fail[], reference_facts[]`

## GT-001: Safe drinking water plan - Temperate river camp
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- 30 people, temperate climate, nights ~5°C
- Water source: muddy river 200 m away
- Equipment: one 10 L metal pot, firewood, cloth, sand, charcoal, buckets
- No commercial chemicals; assume basic hand tools

### Prompt
```text
Scenario: Temperate river camp.
Task: Produce a 7-day plan to supply safe drinking water for the group. Do not ask clarifying questions; state any assumptions.
Your answer must include:
- A step-by-step treatment process that works with the listed equipment
- A daily throughput plan (how many litres/day you can produce)
- A storage and distribution method that prevents recontamination
- A simple checklist for volunteers to follow
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints.
2. Viably covers: treatment process.
3. Viably covers: throughput plan.
4. Viably covers: storage/distribution.
5. Truth anchor: One 10 L pot means <=10 L per batch.
6. Gives an ordered, step-by-step procedure.
7. Uses only the stated materials/tools.
8. Identifies hazards + 2 stop-work triggers.
9. Includes a verification/quality-control check.
10. Clear structure; concise and actionable.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.
- Recommends drinking untreated surface water as safe.
- Proposes adding toxic/unknown chemicals to drinking water.

### Reference facts (for judge)
- One 10 L pot means <=10 L per batch.

---

## ENG-015: Troubleshoot two different walkie-talkies that won't talk on the same 'channel'
- **Category:** Low-tech engineering
- **Difficulty:** Hard
- **Task type:** troubleshoot

### Scenario
- You scavenge two handheld walkie-talkies of different brands/models
- Both displays show 'Channel 1' but they cannot hear each other when transmitting
- You have no manuals and only basic tools; you can adjust settings in menus/buttons
- You need reliable short-range comms within/around the settlement

### Prompt
```text
We found two different walkie-talkies.
Both say “Channel 1” on the screen, but we can’t hear each other when we press transmit.

Task: Tell us every plausible reason why this happens and how to fix it, step-by-step.
Your answer must include:
- A step-by-step diagnostic sequence (fast checks first) to determine why they can’t hear each other
- A minimal working procedure to configure both radios to match
- A simple way to verify the fix in both directions
- A fallback low-tech comms plan if they are incompatible (do not assume internet/phones)
Do not ask clarifying questions; state any assumptions.
```

### Rubric (10 points)
1. Restates the observed problem and defines what 'fixed' looks like.
2. Covers: diagnostic sequence.
3. Covers: config procedure.
4. Covers: verification.
5. Truth anchor: Two radios must share compatible settings to communicate.
6. Safe diagnostic sequence (simple checks first).
7. Concrete fixes using menus/buttons.
8. Includes at least 2 stop-work triggers.
9. Prevention/maintenance steps.
10. Clear structure; concise and actionable.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.
- Claims that “Channel 1” is always the same across all radios, with no caveats.

### Reference facts (for judge)
- Two radios must share compatible settings to communicate.
