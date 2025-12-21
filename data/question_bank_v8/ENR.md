## ENR-001: Design a fuel-efficient communal cooking stove
- **Category:** Energy
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need to cook two hot meals per day for 60 people
- Fuel: wood; smoke is a problem in current open fires
- Materials: bricks/stones, clay, metal pots, basic tools

### Prompt
```text
Design a highly fuel-efficient stove for communal cooking that uses much less wood and produces less smoke than an open fire.
Materials: bricks/stones, clay, metal pots, basic tools.

Include: airflow path, pot support, smoke reduction, and a safety/maintenance checklist.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design an efficient stove setup suitable for communal cooking.
3. Viably covers (correct + usable; mere mention earns 0): airflow path; pot support.
4. Viably covers (correct + usable; mere mention earns 0): smoke reduction; safety/maintenance checklist.
5. Truth anchor: Fuel efficiency comes from complete combustion and good heat transfer: adequate air, insulated firebox, and pot skirts/chimney draft reduce smoke and wood use.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Encourages indoor open fires or stoves with no ventilation/CO precautions.

### Reference facts (for judge)
- Fuel efficiency comes from complete combustion and good heat transfer: adequate air, insulated firebox, and pot skirts/chimney draft reduce smoke and wood use.

---

## ENR-002: Insulate shelters to reduce winter heating demand
- **Category:** Energy
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Cold winter climate; nights below 0°C
- Materials: straw, leaves, wool, cloth, clay, wood; no modern insulation
- Goal: keep sleeping area warm with minimal fuel

### Prompt
```text
Propose insulation and heat-retention improvements for a small shelter.
Include: walls, roof, floor, drafts, moisture management, and a plan to prevent mould.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): walls; roof.
3. Viably covers (correct + usable; mere mention earns 0): floor; drafts.
4. Viably covers (correct + usable; mere mention earns 0): moisture management; a plan to prevent mould.
5. Truth anchor: Most heat loss is through drafts and the roof; sealing air leaks and insulating the roof/windward side yields big gains, but you must maintain ventilation to prevent CO/moisture buildup.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Most heat loss is through drafts and the roof; sealing air leaks and insulating the roof/windward side yields big gains, but you must maintain ventilation to prevent CO/moisture buildup.

---

## ENR-003: Critique a smoky indoor fire setup and fix it
- **Category:** Energy
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
- A hut has an indoor fire in a shallow pit; smoke fills the space
- People have headaches and sore eyes
- Materials: clay, bricks, metal pipe sections, tools

### Prompt
```text
Identify the main causes of smoke/CO exposure and propose a safer heating/cooking arrangement.
Include ventilation and chimney considerations.
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Viably covers (correct + usable; mere mention earns 0): ventilation.
3. Viably covers (correct + usable; mere mention earns 0): chimney considerations.
4. Identifies at least 3 critical flaws/risks, prioritised by severity and reversibility.
5. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: Smoke indoors indicates incomplete combustion and dangerous CO; fixing it requires airflow/draft (chimney, air inlet) and ventilation—not just ‘get used to it’.
6. Addresses the specific problematic steps in the original plan (mapped to each step/claim).
7. Proposes a corrected plan that is concrete, staged, and feasible with stated resources.
8. Adds monitoring/feedback: what to observe/measure to know the plan is working.
9. Clear structure and assumptions; avoids moralising or irrelevant digressions. Keeps preamble short; avoids filler/moralising/long disclaimers.
10. Includes risk mitigations and safety precautions relevant to the domain. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Encourages indoor open fires or stoves with no ventilation/CO precautions.

### Reference facts (for judge)
- Smoke indoors indicates incomplete combustion and dangerous CO; fixing it requires airflow/draft (chimney, air inlet) and ventilation—not just ‘get used to it’.

---

## ENR-004: Create a winter fuel budget and conservation plan
- **Category:** Energy
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Community: 100 people in a cold region
- Fuel: wood; forest resources are limited and labour is scarce
- Uses: cooking, heating, some process heat (boiling water, small forge)

### Prompt
```text
Write a fuel management plan for 3 winter months.
Include: demand estimation, conservation measures, sustainable harvesting, storage, and emergency rationing triggers.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write a fuel management plan for 3 winter months; demand estimation.
3. Viably covers (correct + usable; mere mention earns 0): conservation measures; sustainable harvesting.
4. Viably covers (correct + usable; mere mention earns 0): storage; emergency rationing triggers.
5. Truth anchor: Wet wood wastes energy evaporating water; realistic fuel budgets must use the mass of dry fuel available and prioritise demand reduction (insulation, smaller heated space) over wishful consumption.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Wet wood wastes energy evaporating water; realistic fuel budgets must use the mass of dry fuel available and prioritise demand reduction (insulation, smaller heated space) over wishful consumption.

---

## ENR-005: Make charcoal using a pit or mound method
- **Category:** Energy
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need charcoal for forging and cleaner cooking
- Tools: shovels, soil, water, wood supply
- No metal drums available

### Prompt
```text
Describe a pit or mound (clamp) charcoal process.
Include airflow control, smoke cues, cooling, and safe storage.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): airflow control; smoke cues.
3. Viably covers (correct + usable; mere mention earns 0): cooling.
4. Viably covers (correct + usable; mere mention earns 0): safe storage.
5. Truth anchor: Charcoal is made by pyrolysis with limited oxygen; too much air turns the batch to ash—control vents and seal the mound/pit once it’s running.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Charcoal is made by pyrolysis with limited oxygen; too much air turns the batch to ash—control vents and seal the mound/pit once it’s running.

---

## ENR-006: Build a simple charcoal retort from a metal drum
- **Category:** Energy
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- You have one salvaged steel drum and basic pipe fittings
- Goal: produce higher-yield charcoal with less smoke
- Workshop has basic tools; no welding assumed

### Prompt
```text
We need to make high-quality charcoal using a steel drum, with less smoke and less wasted wood than a pit or mound.
Design a system that does this using basic tools (no welding).
Include how to control the burn, how to route and use the smoke/gases safely, how to seal it, loading/unloading, and safety.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): how pyrolysis gases are vented/burned; sealing.
3. Viably covers (correct + usable; mere mention earns 0): loading/unloading.
4. Viably covers (correct + usable; mere mention earns 0): safety.
5. Truth anchor: A retort must vent pyrolysis gases; sealing a drum can cause overpressure, while allowing oxygen in will burn the charge—controlled venting is essential.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- A retort must vent pyrolysis gases; sealing a drum can cause overpressure, while allowing oxygen in will burn the charge—controlled venting is essential.

---

## ENR-007: Troubleshoot: your charcoal keeps turning to ash
- **Category:** Energy
- **Difficulty:** Medium
- **Task type:** troubleshoot

### Scenario
- Charcoal batch yields mostly ash and tiny fragments
- Process used: mound covered with soil, lit from one end
- Weather: windy and dry

### Prompt
```text
Diagnose why the charcoal is over-burning and propose fixes.
Include how to monitor and when to shut down the burn.
```

### Rubric (10 points)
1. Restates the observed problem and defines what 'fixed' looks like.
2. Viably covers (correct + usable; mere mention earns 0): Diagnose why the charcoal is over-burning; propose fixes.
3. Viably covers (correct + usable; mere mention earns 0): how to monitor; when to shut down the burn.
4. Lists plausible causes and ranks them by likelihood/impact. Truth anchor: If charcoal becomes ash, oxygen is getting in or the burn is too hot/long; the fix is tighter sealing and vent control, not ‘more air’.
5. Gives a safe diagnostic sequence (simple, non-destructive checks first).
6. Proposes concrete fixes/repairs using low-tech tools/materials.
7. Includes safety precautions during diagnosis/repair (PPE, isolation, ventilation, etc.). Includes at least 2 specific stop-work triggers.
8. Verifies the fix (measure/observe performance after changes).
9. Includes prevention/maintenance steps to avoid recurrence.
10. Clear structure and assumptions; keeps advice realistic. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- If charcoal becomes ash, oxygen is getting in or the burn is too hot/long; the fix is tighter sealing and vent control, not ‘more air’.

---

## ENR-008: Plan sustainable charcoal production for a small workshop
- **Category:** Energy
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Workshop needs charcoal weekly for forging and occasional smelting
- Local woodland is limited; you want a long-term plan
- Labour: 8 people part-time

### Prompt
```text
Create a charcoal supply plan that does not destroy the local ecosystem.
Include coppicing/replanting ideas, yield estimates, and seasonal scheduling.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Create a charcoal supply plan that does not destroy the local ecosystem; coppicing/replanting ideas.
3. Viably covers (correct + usable; mere mention earns 0): yield estimates.
4. Viably covers (correct + usable; mere mention earns 0): seasonal scheduling.
5. Truth anchor: Charcoal yield is only a fraction of the wood input (order of ~1/4–1/3 by mass); sustainable plans must not exceed regrowth/coppice rates and must account for that loss.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Charcoal yield is only a fraction of the wood input (order of ~1/4–1/3 by mass); sustainable plans must not exceed regrowth/coppice rates and must account for that loss.

---

## ENR-009: Design a small biogas system for cooking
- **Category:** Energy
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- 30 people; available feedstock: animal manure and food scraps
- Climate: mild; winter nights near 5°C
- Materials: barrels or sealed pits, hose, valves salvaged if possible

### Prompt
```text
We have manure and food scraps and need to turn this waste into fuel gas for cooking.
Materials: barrels or sealed pits, hose, valves salvaged if possible.

Task: Design a low-tech system that produces usable fuel gas from these inputs.
Include feedstock handling, digester construction, gas storage, burner design, and safety checks.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a low-tech biogas digester; feedstock handling.
3. Viably covers (correct + usable; mere mention earns 0): digester construction; gas storage.
4. Viably covers (correct + usable; mere mention earns 0): burner design; safety checks.
5. Truth anchor: Biogas needs anaerobic digestion: airtight system, correct moisture/feedstock balance, and warm temperatures; leaks and air ingress stop production and create explosion risk.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Ignores explosion/asphyxiation risk (no ventilation, open flames near gas, no leak checks).

### Reference facts (for judge)
- Biogas needs anaerobic digestion: airtight system, correct moisture/feedstock balance, and warm temperatures; leaks and air ingress stop production and create explosion risk.

---

## ENR-010: Troubleshoot: your digester produces little or no gas
- **Category:** Energy
- **Difficulty:** Medium
- **Task type:** troubleshoot

### Scenario
- Biogas digester was built 3 weeks ago; almost no gas
- Feedstock: mixed manure and vegetable scraps
- Symptoms: strong sour smell; scum layer visible

### Prompt
```text
Diagnose likely causes and provide a step-by-step recovery plan.
Include what measurements/observations you would track.
```

### Rubric (10 points)
1. Restates the observed problem and defines what 'fixed' looks like.
2. Viably covers (correct + usable; mere mention earns 0): Diagnose likely causes; provide a step-by-step recovery plan.
3. Viably covers (correct + usable; mere mention earns 0): what measurements/observations you would track.
4. Lists plausible causes and ranks them by likelihood/impact. Truth anchor: No-gas digesters are often too cold, too acidic, starved/overfed, or leaking; restoring anaerobic conditions and temperature comes before redesigning hardware.
5. Gives a safe diagnostic sequence (simple, non-destructive checks first).
6. Proposes concrete fixes/repairs using low-tech tools/materials.
7. Includes safety precautions during diagnosis/repair (PPE, isolation, ventilation, etc.). Includes at least 2 specific stop-work triggers.
8. Verifies the fix (measure/observe performance after changes).
9. Includes prevention/maintenance steps to avoid recurrence.
10. Clear structure and assumptions; keeps advice realistic. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Ignores explosion/asphyxiation risk (no ventilation, open flames near gas, no leak checks).

### Reference facts (for judge)
- No-gas digesters are often too cold, too acidic, starved/overfed, or leaking; restoring anaerobic conditions and temperature comes before redesigning hardware.

---

## ENR-011: Safety review of a proposed biogas installation
- **Category:** Energy
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- A team wants to run biogas piping into an enclosed kitchen
- They propose storing gas in a large plastic bag near the stove
- No one has done leak testing

### Prompt
```text
List the top safety hazards and rewrite the plan to reduce explosion and suffocation risk.
Include a simple leak-test procedure and how to keep the space safe from dangerous gas buildup.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): leak test procedure.
3. Viably covers (correct + usable; mere mention earns 0): ventilation guidance.
4. Truth anchor: Biogas can contain methane (flammable) and H₂S (toxic); installations need ventilation, leak checks, flame arrest/flashback prevention and pressure relief (never a rigid sealed tank).
5. Gives an ordered, step-by-step procedure that a novice could follow.
6. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
7. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
8. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
9. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers.
10. Quantifies key parameters (ratios, dimensions, timing, rates, temperatures) or explains how to measure them — and sanity-checks plausibility. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Ignores explosion/asphyxiation risk (no ventilation, open flames near gas, no leak checks).

### Reference facts (for judge)
- Biogas can contain methane (flammable) and H₂S (toxic); installations need ventilation, leak checks, flame arrest/flashback prevention and pressure relief (never a rigid sealed tank).

---

## ENR-012: Use digestate safely to improve soil fertility
- **Category:** Energy
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- You have digestate/slurry from a biogas digester
- You want to use it on crops without spreading disease
- Waterways are nearby

### Prompt
```text
Provide guidelines for handling and applying digestate safely.
Include timing, dilution/composting options, and runoff prevention.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Provide guidelines for handling; applying digestate safely.
3. Viably covers (correct + usable; mere mention earns 0): timing; dilution/composting options.
4. Viably covers (correct + usable; mere mention earns 0): runoff prevention.
5. Truth anchor: Digestate can still carry pathogens and nutrients that pollute water; apply to soil with runoff control and avoid direct use on edible leaves shortly before harvest.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Digestate can still carry pathogens and nutrients that pollute water; apply to soil with runoff control and avoid direct use on edible leaves shortly before harvest.

---

## ENR-013: Build a waterwheel to power a grain mill or workshop
- **Category:** Energy
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Stream: 0.5 m drop available and moderate flow; debris present
- Materials: wood, rope, scrap metal possible for axle
- Goal: mechanical power for milling or pumping

### Prompt
```text
Design a waterwheel system.
Include intake/screening, wheel type, shaft/bearings, power transmission, and flood protection.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a waterwheel system; intake/screening.
3. Viably covers (correct + usable; mere mention earns 0): wheel type; shaft/bearings.
4. Viably covers (correct + usable; mere mention earns 0): power transmission; flood protection.
5. Truth anchor: Waterwheel power is limited by head and flow (∝ ρ g Q h × efficiency); realistic designs must match available site energy and accept that small head/flow means modest power.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Waterwheel power is limited by head and flow (∝ ρ g Q h × efficiency); realistic designs must match available site energy and accept that small head/flow means modest power.

---

## ENR-014: Design a windmill-driven pump for a well or cistern
- **Category:** Energy
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Area has steady winds but variable gusts
- Need to pump water for livestock and irrigation
- Materials: wood, cloth, rope; some metal fasteners

### Prompt
```text
Propose a simple windmill design and how it drives a pump.
Include overspeed protection, anchoring, and maintenance.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): overspeed protection.
3. Viably covers (correct + usable; mere mention earns 0): anchoring.
4. Viably covers (correct + usable; mere mention earns 0): maintenance.
5. Truth anchor: Wind power scales with swept area and wind speed cubed; output is intermittent, so pumping/charging needs storage or a plan for calm days.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Wind power scales with swept area and wind speed cubed; output is intermittent, so pumping/charging needs storage or a plan for calm days.

---

## ENR-015: Design debris handling and maintenance for micro-hydro intake
- **Category:** Energy
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- A small water power system clogs daily with leaves and sticks
- You have screens, rakes, and labour rota options
- Shutdowns risk losing refrigeration/medical lighting (if any)

### Prompt
```text
Create an intake design and maintenance plan that reduces clogging.
Include redundancy, inspection schedule, and safe procedures near water.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Create an intake design; maintenance plan that reduces clogging.
3. Viably covers (correct + usable; mere mention earns 0): redundancy; inspection schedule.
4. Viably covers (correct + usable; mere mention earns 0): safe procedures near water.
5. Truth anchor: Intake screens reduce debris but clog; practical micro-hydro needs bypass/sluicing and safe access for cleaning, or the system will fail in storms.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Intake screens reduce debris but clog; practical micro-hydro needs bypass/sluicing and safe access for cleaning, or the system will fail in storms.

---

## ENR-016: Transmit mechanical power from a wheel to a tool
- **Category:** Energy
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- You have a rotating shaft from a waterwheel
- Need to drive: (A) a grain mill, or (B) a simple lathe/drill
- Materials: wood, leather, rope; minimal metal

### Prompt
```text
Describe belt/rope drive options and how to align and tension them.
Include guarding, wear reduction, and how to disengage safely.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): guarding.
3. Viably covers (correct + usable; mere mention earns 0): wear reduction.
4. Viably covers (correct + usable; mere mention earns 0): how to disengage safely.
5. Truth anchor: Belts/gears trade speed and torque; misalignment causes losses and failures, and unguarded rotating parts are a major injury hazard.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Belts/gears trade speed and torque; misalignment causes losses and failures, and unguarded rotating parts are a major injury hazard.

---

## ENR-017: Build a small generator system to charge batteries
- **Category:** Energy
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- You have mechanical power from a waterwheel or wind rotor
- You have salvaged DC motors, some wire, and lead-acid batteries from cars
- Goal: safe battery charging for lighting and radio

### Prompt
```text
Propose a practical generation and charging setup.
Include: wiring, basic regulation (even crude), fusing, and safe battery ventilation.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): wiring; basic regulation (even crude).
3. Viably covers (correct + usable; mere mention earns 0): fusing.
4. Viably covers (correct + usable; mere mention earns 0): safe battery ventilation.
5. Truth anchor: Safe battery charging needs correct voltage/current control and fusing; overcharging and poor ventilation can produce hydrogen and fires—regulation and ventilation are non-negotiable.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Recommends wiring with no fusing/overcurrent protection or suggests bypassing safety devices.
- Advocates using damaged/unknown batteries indoors without ventilation or fire precautions.

### Reference facts (for judge)
- Safe battery charging needs correct voltage/current control and fusing; overcharging and poor ventilation can produce hydrogen and fires—regulation and ventilation are non-negotiable.

---

## ENR-018: Wire a small low-voltage lighting system safely
- **Category:** Energy
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need lighting for a clinic and workshop at night
- Power: 12 V battery bank; loads: LED strips or car bulbs
- Materials: salvaged wire, switches, fuses (or substitutes)

### Prompt
```text
Design a 12 V distribution system.
Include wire sizing concept, fusing, switch placement, and how to avoid shorts and fires.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a 12 V distribution system; wire sizing concept.
3. Viably covers (correct + usable; mere mention earns 0): fusing; switch placement.
4. Viably covers (correct + usable; mere mention earns 0): how to avoid shorts; fires.
5. Truth anchor: Voltage drop is I×R: long thin wires cause dim lights and heat; thicker conductors, shorter runs, and fuses near the battery prevent fires and failures.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Recommends wiring with no fusing/overcurrent protection or suggests bypassing safety devices.
- Advocates using damaged/unknown batteries indoors without ventilation or fire precautions.

### Reference facts (for judge)
- Voltage drop is I×R: long thin wires cause dim lights and heat; thicker conductors, shorter runs, and fuses near the battery prevent fires and failures.

---

## ENR-019: Troubleshoot voltage drop and random shutdowns
- **Category:** Energy
- **Difficulty:** Medium
- **Task type:** troubleshoot

### Scenario
- A 12 V system powers lights and a radio
- When lights turn on, the radio resets; wires get warm in one section
- You have basic tools; no multimeter guaranteed

### Prompt
```text
Diagnose likely causes and propose step-by-step tests and fixes.
Include how to isolate faults and improve connections.
```

### Rubric (10 points)
1. Restates the observed problem and defines what 'fixed' looks like.
2. Viably covers (correct + usable; mere mention earns 0): Diagnose likely causes; propose step-by-step tests; fixes.
3. Viably covers (correct + usable; mere mention earns 0): how to isolate faults; improve connections.
4. Lists plausible causes and ranks them by likelihood/impact. Truth anchor: Random shutdowns often come from voltage sag under load (thin wires, bad connections, weak batteries); fixing resistance and load management is usually the solution.
5. Gives a safe diagnostic sequence (simple, non-destructive checks first).
6. Proposes concrete fixes/repairs using low-tech tools/materials.
7. Includes safety precautions during diagnosis/repair (PPE, isolation, ventilation, etc.). Includes at least 2 specific stop-work triggers.
8. Verifies the fix (measure/observe performance after changes).
9. Includes prevention/maintenance steps to avoid recurrence.
10. Clear structure and assumptions; keeps advice realistic. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Recommends wiring with no fusing/overcurrent protection or suggests bypassing safety devices.
- Advocates using damaged/unknown batteries indoors without ventilation or fire precautions.

### Reference facts (for judge)
- Random shutdowns often come from voltage sag under load (thin wires, bad connections, weak batteries); fixing resistance and load management is usually the solution.

---

## ENR-020: Battery care and safety protocol
- **Category:** Energy
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- You have several salvaged lead-acid batteries of unknown condition
- They will be charged daily and stored near a workshop
- Children may be nearby

### Prompt
```text
Write a battery handling and maintenance SOP.
Include: placement/ventilation, acid spill response, charging rules, and inspection checklist.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write a battery handling; maintenance SOP.
3. Viably covers (correct + usable; mere mention earns 0): placement/ventilation; acid spill response.
4. Viably covers (correct + usable; mere mention earns 0): charging rules; inspection checklist.
5. Truth anchor: Lead-acid batteries off-gas hydrogen during charging; ventilation and spark control are essential, and deep discharge shortens life—protocols should prevent both.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Recommends wiring with no fusing/overcurrent protection or suggests bypassing safety devices.
- Advocates using damaged/unknown batteries indoors without ventilation or fire precautions.

### Reference facts (for judge)
- Lead-acid batteries off-gas hydrogen during charging; ventilation and spark control are essential, and deep discharge shortens life—protocols should prevent both.

---

## ENR-021: Village energy roadmap for 2 years
- **Category:** Energy
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Settlement: 120 people, temperate climate, nearby stream and woodland
- Goals: reliable cooking, winter heating, some mechanical power, and basic lighting
- Tools and skills are limited initially

### Prompt
```text
Create a staged energy roadmap (0-3 months, 3-12 months, 1-2 years).
Include dependencies, training, and how you will measure progress.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Create a staged energy roadmap (0-3 months; 3-12 months.
3. Viably covers (correct + usable; mere mention earns 0): 1-2 years); dependencies.
4. Viably covers (correct + usable; mere mention earns 0): training; how you will measure progress.
5. Truth anchor: Early ‘energy civilisation’ is mostly heat and mechanical power; efficient stoves/insulation and simple mechanical drives deliver more benefit sooner than chasing full electrification.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Early ‘energy civilisation’ is mostly heat and mechanical power; efficient stoves/insulation and simple mechanical drives deliver more benefit sooner than chasing full electrification.

---

## ENR-022: Choose between energy options under constraints
- **Category:** Energy
- **Difficulty:** Medium
- **Task type:** compare

### Scenario
- You must choose one project this month:
- (A) build a charcoal kiln, (B) build a biogas digester, (C) build a small waterwheel
- Labour: 8 people; materials limited; goal: reduce fuel burden

### Prompt
```text
Pick the best option for this month and justify.
Include opportunity cost, risks, and what you would do next month.
```

### Rubric (10 points)
1. Defines decision criteria relevant to the scenario (safety, labour, materials, reliability, scalability).
2. Viably covers (correct + usable; mere mention earns 0): opportunity cost. Truth anchor: Energy choices must respect constraints: intermittent sources need storage, heat needs local fuel, and ‘more complex’ isn’t automatically better—compare by power, labour, maintenance, and risk.
3. Viably covers (correct + usable; mere mention earns 0): risks.
4. Viably covers (correct + usable; mere mention earns 0): what you would do next month.
5. Compares the available options against those criteria (not just a list).
6. Recommends a choice and explains why it is best under the stated conditions.
7. Provides a staged implementation plan for the chosen option (what to do first).
8. Identifies key risks/hazards of the recommendation and mitigations.
9. Provides a fallback option and triggers for switching.
10. Clear communication (bullets/table) and stated assumptions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Energy choices must respect constraints: intermittent sources need storage, heat needs local fuel, and ‘more complex’ isn’t automatically better—compare by power, labour, maintenance, and risk.

---

## ENR-023: Critique this unrealistic energy plan and make it feasible
- **Category:** Energy
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
- A plan has been proposed by an enthusiastic but inexperienced person

### Prompt
```text
Proposed plan:
- Build solar panels from scratch.
- Build lithium batteries.
- Build an electric stove for cooking.
- Stop using wood entirely.
Task: Explain what is unrealistic in the short term and propose a feasible alternative roadmap.
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Specifically addresses the plan's proposed steps: Build solar panels from scratch.; Build lithium batteries.; Build an electric stove for cooking.; … (risks + safer alternatives).
3. Viably covers (correct + usable; mere mention earns 0): Explain what is unrealistic in the short term.
4. Viably covers (correct + usable; mere mention earns 0): propose a feasible alternative roadmap.
5. Identifies at least 3 critical flaws/risks, prioritised by severity and reversibility.
6. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: Energy plans fail when they ignore energy density, build time, and maintenance; a feasible plan starts with demand reduction and proven low-tech sources before scaling complexity.
7. Addresses the specific problematic steps in the original plan (mapped to each step/claim).
8. Proposes a corrected plan that is concrete, staged, and feasible with stated resources.
9. Adds monitoring/feedback: what to observe/measure to know the plan is working.
10. Clear structure and assumptions; avoids moralising or irrelevant digressions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Energy plans fail when they ignore energy density, build time, and maintenance; a feasible plan starts with demand reduction and proven low-tech sources before scaling complexity.

---

## ENR-024: Emergency plan for sudden fuel shortage
- **Category:** Energy
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- A storm destroyed stored firewood; winter is approaching
- Cooking and water boiling are essential
- You have some remaining tools and can gather biomass

### Prompt
```text
Write a 2-week emergency energy plan.
Include rationing, alternative fuels, efficiency measures, and safety considerations.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write a 2-week emergency energy plan; rationing.
3. Viably covers (correct + usable; mere mention earns 0): alternative fuels; efficiency measures.
4. Viably covers (correct + usable; mere mention earns 0): safety considerations.
5. Truth anchor: Fuel shock response should prioritise life-critical needs and demand reduction first; switching fuels without ventilation/safety controls can increase CO/fire deaths.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Fuel shock response should prioritise life-critical needs and demand reduction first; switching fuels without ventilation/safety controls can increase CO/fire deaths.

---
