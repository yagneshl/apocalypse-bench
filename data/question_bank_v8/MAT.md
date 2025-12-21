## MAT-201: Vulcanizing Rubber Latex
- **Category:** Materials
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** You tapped rubber trees for white sap. You made boots, but they get sticky and melt in the sun.
- **Resources:** Raw rubber sap, yellow powder found near a hot spring (Sulfur), fire.

### Prompt
```text
We made boots from tree sap rubber, but they melt in the sun.
We have this yellow powder from a volcano vent.
How do we treat the rubber so it stays hard and tough?
```

### Rubric (10 points)
1.  Identifies the yellow powder as **Sulfur**.
2.  Identifies the process as **Vulcanization**.
3.  Process: Mix Sulfur powder into the rubber.
4.  **Truth Anchor:** Heat the mixture. Sulfur atoms form cross-links (bridges) between the rubber chains, stopping them from sliding (melting).
5.  Temperature: Requires roughly **140°C to 160°C**.
6.  Additives: Mentioning adding soot/charcoal dust (Carbon Black) is excellent (adds UV resistance and massive strength).
7.  Forming: Shape the item *before* heating (it won't mold after).
8.  Safety: Fumes are toxic/unpleasant.
9.  Clear structure.
10. Actionable steps.

### Auto-fail (score = 0 if any)
-  Suggests just drying/smoking the rubber (this makes crepe rubber, which still melts).

---

## MAT-202: Making Waterglass (Sodium Silicate)
- **Category:** Chemistry / Materials
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** You need to preserve eggs for 6 months without refrigeration.
- **Resources:** Sand, white powder from burning seaweed (Soda Ash), very high heat.

### Prompt
```text
We need to preserve eggs for winter.
We have sand and the white ash from burnt seaweed.
How do we make the "liquid glass" preservative?
```

### Rubric (10 points)
1.  Identifies the product as **Sodium Silicate** (Waterglass).
2.  Ingredients: Silica Sand and Soda Ash (Sodium Carbonate).
3.  Process: Fuse them together in a crucible.
4.  **Truth Anchor:** Requires melting heat (~1100°C+). The sand and ash melt into a glass.
5.  Dissolving: Crush the resulting glass and boil it in water (pressure helps) to make a thick syrup.
6.  Application: Dip eggs in the syrup; it seals the pores preventing air ingress/spoilage.
7.  Other uses: Fireproof glue/cement.
8.  Safety: The liquid is highly alkaline (caustic).
9.  Clear structure.
10. Actionable steps.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-203: Making Refractory Bricks (Insulation for Forge)
- **Category:** Materials / Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** You built a clay furnace to melt metal, but the walls get too hot and the metal won't melt.
- **Resources:** Clay, huge pile of sawdust (or rice husks), water.

### Prompt
```text
Our clay furnace gets hot but loses heat through the walls too fast to melt metal.
We have clay and a lot of sawdust.
How do we make bricks that keep the heat inside?
```

### Rubric (10 points)
1.  Identifies the goal: Creating **Insulating Firebrick** (porous structure).
2.  Recipe: Mix a very high volume of sawdust (burn-out material) into the clay (up to 50% by volume).
3.  **Truth Anchor:** When the brick is fired, the sawdust burns away, leaving thousands of tiny air pockets.
4.  Physics: Stationary air is a poor conductor of heat. The porous brick insulates; dense clay conducts.
5.  Process: Mold, dry slowly (high shrinkage risk), then fire.
6.  Application: Use these for the inner lining or outer shell of the forge.
7.  Trade-off: These bricks are mechanically weaker/softer than dense bricks.
8.  Clear structure.
9.  Actionable steps.
10. Mentioning charcoal dust or Styrofoam as alternatives.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-001: Build a sturdy workbench with limited tools
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Workshop needs a stable bench for sawing, planing, and assembly
- Tools: saw, axe, chisel, brace/auger (optional), mallet
- Fasteners: limited nails; wooden pegs preferred

### Prompt
```text
Design a workbench that can be built in 2 days.
Include: layout/marking, joinery, bracing, and how to make it flat enough for accurate work.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a workbench that can be built in 2 days; layout/marking.
3. Viably covers (correct + usable; mere mention earns 0): joinery; bracing.
4. Viably covers (correct + usable; mere mention earns 0): how to make it flat enough for accurate work.
5. Truth anchor: A rigid bench needs triangulation/bracing to resist racking; a heavy top with weak legs/joints will wobble unless the frame is braced and joints resist shear.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- A rigid bench needs triangulation/bracing to resist racking; a heavy top with weak legs/joints will wobble unless the frame is braced and joints resist shear.

---

## MAT-002: Make a tight wooden container without metal hoops
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Need containers for dry grain storage
- Materials: wood, rope, pitch/wax; tools: saw, knife, mallet
- No metal hoops or waterproof liners available

### Prompt
```text
Propose a method to make a lidded wooden container that keeps pests out.
Include joinery/assembly, sealing options, and how to test for leaks/gaps.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): joinery/assembly.
3. Viably covers (correct + usable; mere mention earns 0): sealing options.
4. Viably covers (correct + usable; mere mention earns 0): how to test for leaks/gaps.
5. Truth anchor: Wood swells/shrinks with moisture; a watertight wooden vessel relies on tight joints and swelling when wet—green wood shrinkage will open leaks unless allowed for.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Wood swells/shrinks with moisture; a watertight wooden vessel relies on tight joints and swelling when wet—green wood shrinkage will open leaks unless allowed for.

---

## MAT-003: Repair a broken ladder safely using pegs and lashings
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- A wooden ladder has a cracked rung and loose side rail
- You have scrap wood, rope, and basic hand tools
- The ladder will be used for roof work

### Prompt
```text
Describe how to repair and reinforce the ladder.
Include: assessment (when to scrap it), repair method, and a load test before use.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): assessment (when to scrap it).
3. Viably covers (correct + usable; mere mention earns 0): repair method.
4. Viably covers (correct + usable; mere mention earns 0): a load test before use.
5. Truth anchor: A ladder repair must restore load paths in bending and shear: rungs/rails must be secured against rotation and pull-out, and the repair should be proof-tested at low risk before full use.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- A ladder repair must restore load paths in bending and shear: rungs/rails must be secured against rotation and pull-out, and the repair should be proof-tested at low risk before full use.

---

## MAT-004: Critique this joinery plan and improve it
- **Category:** Materials & manufacturing
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
- You are reviewing a novice plan

### Prompt
```text
Joinery plan:
- Use green wood for everything.
- Nail joints wherever pieces meet.
- No bracing needed if nails are tight.
- If it wobbles, add more nails.
Task: Explain what will fail and propose a better approach with pegs/joints/bracing.
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Viably covers (correct + usable; mere mention earns 0): Use green wood for everything; Nail joints wherever pieces meet; No bracing needed if nails are tight.
3. Viably covers (correct + usable; mere mention earns 0): If it wobbles; add more nails.
4. Viably covers (correct + usable; mere mention earns 0): Explain what will fail; propose a better approach with pegs/joints/bracing.
5. Identifies at least 3 critical flaws/risks, prioritised by severity and reversibility.
6. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: Green wood shrinks as it dries, loosening nailed joints; nails alone do not prevent racking—bracing and proper joinery/pegs are needed for stiffness.
7. Addresses the specific problematic steps in the original plan (mapped to each step/claim).
8. Proposes a corrected plan that is concrete, staged, and feasible with stated resources.
9. Adds monitoring/feedback: what to observe/measure to know the plan is working.
10. Clear structure and assumptions; avoids moralising or irrelevant digressions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Green wood shrinks as it dries, loosening nailed joints; nails alone do not prevent racking—bracing and proper joinery/pegs are needed for stiffness.

---

## MAT-005: Make pine pitch sealant for waterproofing
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need to seal seams in a roof and waterproof wooden containers
- Materials: pine resin, charcoal powder/ash, fibres; heat source available
- Tools: pot, stick, cloth

### Prompt
```text
Provide a practical recipe and procedure for making and applying pitch sealant.
Include surface prep, safety (hot pitch), and how to test waterproofing.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Provide a practical recipe; procedure for making.
3. Viably covers (correct + usable; mere mention earns 0): applying pitch sealant; surface prep.
4. Viably covers (correct + usable; mere mention earns 0): safety (hot pitch); how to test waterproofing.
5. Truth anchor: Pine pitch is thermoplastic: it must be heated to apply and can soften in heat; adding fillers (ash/fibre) can reduce brittleness, and fire/flash risks must be managed.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Pine pitch is thermoplastic: it must be heated to apply and can soften in heat; adding fillers (ash/fibre) can reduce brittleness, and fire/flash risks must be managed.

---

## MAT-006: Make casein glue from milk for woodworking
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- You have surplus milk and need a strong wood glue
- Materials: milk, vinegar/lemon, lime/wood ash (optional), cloth filter
- No commercial glue

### Prompt
```text
We have surplus milk and need a strong glue for woodworking.
Materials: milk, vinegar/lemon, lime/wood ash (optional), cloth filter. No commercial glue.

Task: Explain how to turn milk into a usable wood glue and how to use it on joints.
Include preparation, mixing, working time, clamping, and limitations (water resistance).
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): preparation; mixing.
3. Viably covers (correct + usable; mere mention earns 0): working time; clamping.
4. Viably covers (correct + usable; mere mention earns 0): limitations (water resistance).
5. Truth anchor: Casein glue works by curdling milk and activating casein with an alkali (lime/ash); it sets strong but is not fully waterproof and can mould if kept damp.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Casein glue works by curdling milk and activating casein with an alkali (lime/ash); it sets strong but is not fully waterproof and can mould if kept damp.

---

## MAT-007: Choose an adhesive for tool handles, pottery repair, and waterproofing
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** compare

### Scenario
- You can make: hide glue, starch paste, pine pitch, and lime-based putty
- Tasks: (A) fix a loose axe head, (B) repair a cracked pot, (C) waterproof a cloth tarp seam

### Prompt
```text
For each task A-C, pick the best option and justify.
Include failure modes and how to test before committing.
```

### Rubric (10 points)
1. Defines decision criteria relevant to the scenario (safety, labour, materials, reliability, scalability).
2. Viably covers (correct + usable; mere mention earns 0): failure modes. Truth anchor: No single adhesive fits all jobs: moisture/heat resistance matters (e.g., pitch is water-resistant but heat-soft; casein is strong but water-sensitive; mechanical keying often beats glue alone).
3. Viably covers (correct + usable; mere mention earns 0): how to test before committing.
4. Compares the available options against those criteria (not just a list).
5. Recommends a choice and explains why it is best under the stated conditions.
6. Provides a staged implementation plan for the chosen option (what to do first).
7. Identifies key risks/hazards of the recommendation and mitigations.
8. Provides a fallback option and triggers for switching.
9. Clear communication (bullets/table) and stated assumptions. Keeps preamble short; avoids filler/moralising/long disclaimers.
10. Acknowledges constraints/uncertainty and how they change the ranking. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- No single adhesive fits all jobs: moisture/heat resistance matters (e.g., pitch is water-resistant but heat-soft; casein is strong but water-sensitive; mechanical keying often beats glue alone).

---

## MAT-008: Design simple tests to compare homemade adhesives
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** compare

### Scenario
- You can make 3 adhesives but do not know which is strongest/water-resistant
- Materials: scrap wood strips, clamps/rope, weights, water

### Prompt
```text
Design a small experiment to rank adhesives by strength and water resistance.
Include: controls, repeatability, and how to record results.
```

### Rubric (10 points)
1. Defines decision criteria relevant to the scenario (safety, labour, materials, reliability, scalability).
2. Viably covers (correct + usable; mere mention earns 0): Design a small experiment to rank adhesives by strength; water resistance. Truth anchor: Adhesive tests must control variables (joint area, cure time, surface prep) and test relevant modes (shear/tension, wet/dry) or results are meaningless.
3. Viably covers (correct + usable; mere mention earns 0): controls; repeatability.
4. Viably covers (correct + usable; mere mention earns 0): how to record results.
5. Compares the available options against those criteria (not just a list).
6. Recommends a choice and explains why it is best under the stated conditions.
7. Provides a staged implementation plan for the chosen option (what to do first).
8. Identifies key risks/hazards of the recommendation and mitigations.
9. Provides a fallback option and triggers for switching.
10. Clear communication (bullets/table) and stated assumptions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Adhesive tests must control variables (joint area, cure time, surface prep) and test relevant modes (shear/tension, wet/dry) or results are meaningless.

---

## MAT-009: Make clay water jars and reduce leakage
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need 10-20 L clay jars for water storage
- Clay is locally available; firing via pit or simple kiln
- No commercial glaze

### Prompt
```text
Outline a process from clay collection to finished jars.
Include tempering, forming, drying, firing, and sealing options to reduce porosity.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Outline a process from clay collection to finished jars; tempering.
3. Viably covers (correct + usable; mere mention earns 0): forming; drying.
4. Viably covers (correct + usable; mere mention earns 0): firing; sealing options to reduce porosity.
5. Truth anchor: Earthenware leaks because it is porous; reducing leakage requires better clay prep (fine fraction), adequate firing/sintering, and/or post-sealing (burnishing/wax/oil), not just thicker walls.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Earthenware leaks because it is porous; reducing leakage requires better clay prep (fine fraction), adequate firing/sintering, and/or post-sealing (burnishing/wax/oil), not just thicker walls.

---

## MAT-010: Produce simple clay roof tiles for a shed
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Need weatherproof roofing for a small shed
- You can build a basic kiln; clay is available
- Workforce: 6 people; time: 2 weeks

### Prompt
```text
Design a tile-making workflow.
Include moulds/jigs, drying racks, firing schedule, and how to reject defective tiles.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a tile-making workflow; moulds/jigs.
3. Viably covers (correct + usable; mere mention earns 0): drying racks; firing schedule.
4. Viably covers (correct + usable; mere mention earns 0): how to reject defective tiles.
5. Truth anchor: Tiles warp/crack from uneven drying and shrinkage; uniform thickness, slow drying, and consistent firing are more important than ‘hotter is always better’.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Tiles warp/crack from uneven drying and shrinkage; uniform thickness, slow drying, and consistent firing are more important than ‘hotter is always better’.

---

## MAT-011: Troubleshoot: your pots crack during drying and firing
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** troubleshoot

### Scenario
- 50% of pots crack while drying; some explode in firing
- Clay contains fine sand; weather is hot and windy
- You have limited fuel so you want to minimise failed firings

### Prompt
```text
Diagnose likely causes and propose fixes for both drying cracks and firing failures.
Include a small test plan to confirm improvements.
```

### Rubric (10 points)
1. Restates the observed problem and defines what 'fixed' looks like.
2. Viably covers (correct + usable; mere mention earns 0): Diagnose likely causes; propose fixes for both drying cracks.
3. Viably covers (correct + usable; mere mention earns 0): firing failures; a small test plan to confirm improvements.
4. Lists plausible causes and ranks them by likelihood/impact. Truth anchor: Cracking is usually moisture/thermal stress: uneven drying, too-fast firing, or thermal shock; adding grog, slow drying, and gradual heat ramps reduce failures.
5. Gives a safe diagnostic sequence (simple, non-destructive checks first).
6. Proposes concrete fixes/repairs using low-tech tools/materials.
7. Includes safety precautions during diagnosis/repair (PPE, isolation, ventilation, etc.). Includes at least 2 specific stop-work triggers.
8. Verifies the fix (measure/observe performance after changes).
9. Includes prevention/maintenance steps to avoid recurrence.
10. Clear structure and assumptions; keeps advice realistic. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Cracking is usually moisture/thermal stress: uneven drying, too-fast firing, or thermal shock; adding grog, slow drying, and gradual heat ramps reduce failures.

---

## MAT-012: Food-safe surface treatments for ceramics without modern glaze
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need cooking and storage vessels that do not leach toxins
- You can access ash, clay slip, burnishing stones, and plant oils
- No lead/tin compounds and no modern chemicals

### Prompt
```text
List and compare low-tech ways to make ceramic surfaces more functional and safe.
Include what NOT to use and how to test for porosity/leaching.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): what NOT to use.
3. Viably covers (correct + usable; mere mention earns 0): how to test for porosity/leaching.
4. Truth anchor: Many traditional glazes (especially lead) are toxic; unglazed porous ceramics are not ideal for long-term wet food storage unless thoroughly cleaned/dried and used appropriately.
5. Gives an ordered, step-by-step procedure that a novice could follow.
6. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
7. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
8. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
9. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers.
10. Quantifies key parameters (ratios, dimensions, timing, rates, temperatures) or explains how to measure them — and sanity-checks plausibility. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Many traditional glazes (especially lead) are toxic; unglazed porous ceramics are not ideal for long-term wet food storage unless thoroughly cleaned/dried and used appropriately.

---

## MAT-013: Make lime mortar from shells/limestone and use it in masonry
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Access to limestone or sea shells; wood/charcoal fuel available
- Goal: build a small stone wall and plaster an interior surface
- Tools: kiln/furnace possible, buckets, sand

### Prompt
```text
We have limestone or shells and a way to heat them. We need a mortar/binder for building a small stone wall and plastering an interior surface.

Task: Write a practical end-to-end plan to turn these stones into a usable mortar and apply it.
Include safety precautions and a small test wall plan.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write a practical end-to-end plan: make quicklime; slake it; prepare lime putty.
3. Viably covers (correct + usable; mere mention earns 0): mix mortar; cure it.
4. Viably covers (correct + usable; mere mention earns 0): safety precautions; a small test wall plan.
5. Truth anchor: Lime mortar cures by carbonation (absorbing CO₂) and needs time/moisture; quicklime slaking is highly exothermic—mixing/curing practices matter as much as ratios.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Lime mortar cures by carbonation (absorbing CO₂) and needs time/moisture; quicklime slaking is highly exothermic—mixing/curing practices matter as much as ratios.

---

## MAT-014: Plaster a wall with lime plaster and avoid cracking
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need to plaster an interior wall to reduce dust and improve hygiene
- Substrate: rough stone or wattle-and-daub
- Climate: dry and windy

### Prompt
```text
Describe surface prep, plaster layers, mix, application, and curing.
Include how to prevent rapid drying and cracking.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): how to prevent rapid drying.
3. Viably covers (correct + usable; mere mention earns 0): cracking.
4. Truth anchor: Lime plaster cracks from shrinkage and rapid drying; thin coats, fibre reinforcement, and keeping it damp while curing reduce cracking and improve strength.
5. Gives an ordered, step-by-step procedure that a novice could follow.
6. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
7. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
8. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
9. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers.
10. Quantifies key parameters (ratios, dimensions, timing, rates, temperatures) or explains how to measure them — and sanity-checks plausibility. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Lime plaster cracks from shrinkage and rapid drying; thin coats, fibre reinforcement, and keeping it damp while curing reduce cracking and improve strength.

---

## MAT-015: Repair old brick/stone masonry without causing damage
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- You found an old brick building with soft bricks
- You can make lime mortar but not Portland cement
- Goal: patch cracks and repoint joints

### Prompt
```text
Explain how to choose an appropriate mortar and repoint safely.
Include why overly hard mortar can be harmful, and how to test a small area first.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Explain how to choose an appropriate mortar; repoint safely.
3. Viably covers (correct + usable; mere mention earns 0): why overly hard mortar can be harmful.
4. Viably covers (correct + usable; mere mention earns 0): how to test a small area first.
5. Truth anchor: Hard cement can damage soft historic masonry by trapping moisture; repairs should use compatible, breathable mortar (often lime-based) and gentle repointing methods.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Hard cement can damage soft historic masonry by trapping moisture; repairs should use compatible, breathable mortar (often lime-based) and gentle repointing methods.

---

## MAT-016: Critique this mortar recipe and correct it
- **Category:** Materials & manufacturing
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
- A novice wrote this recipe

### Prompt
```text
Mortar recipe:
- Crush limestone into powder.
- Add water and sand.
- Use immediately as mortar; it will set quickly.
Task: Explain what is missing/wrong and provide a correct low-tech approach.
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Viably covers (correct + usable; mere mention earns 0): Crush limestone into powder; Add water.
3. Viably covers (correct + usable; mere mention earns 0): sand; Use immediately as mortar; it will set quickly.
4. Viably covers (correct + usable; mere mention earns 0): Explain what is missing/wrong; provide a correct low-tech approach.
5. Identifies at least 3 critical flaws/risks, prioritised by severity and reversibility.
6. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: Mortar that is too strong/too cement-like can crack masonry and trap moisture; lime mortars need correct aggregate and curing (damp, time) to carbonate and gain strength.
7. Addresses the specific problematic steps in the original plan (mapped to each step/claim).
8. Proposes a corrected plan that is concrete, staged, and feasible with stated resources.
9. Adds monitoring/feedback: what to observe/measure to know the plan is working.
10. Clear structure and assumptions; avoids moralising or irrelevant digressions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Mortar that is too strong/too cement-like can crack masonry and trap moisture; lime mortars need correct aggregate and curing (damp, time) to carbonate and gain strength.

---

## MAT-017: Set up a simple forge and make a basic knife
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- You have scrap steel (springs, files) and can produce charcoal
- Tools: hammer, anvil substitute, tongs (can be improvised), bellows possible
- Goal: a functional utility knife

### Prompt
```text
Describe the staged plan: fuel, forge, tooling, and forging steps.
Include how to make the blade hard enough to hold an edge without snapping.
Include safety and how to test the knife.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): safety.
3. Viably covers (correct + usable; mere mention earns 0): how to test the knife.
4. Truth anchor: A blade is made usable by heat treatment: harden (austenitise then quench) then temper to reduce brittleness; overheating and poor quench choices can ruin the steel.
5. Gives an ordered, step-by-step procedure that a novice could follow.
6. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
7. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
8. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
9. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers.
10. Quantifies key parameters (ratios, dimensions, timing, rates, temperatures) or explains how to measure them — and sanity-checks plausibility. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Encourages working hot metal in enclosed spaces without eye protection/ventilation or fire control.

### Reference facts (for judge)
- A blade is made usable by heat treatment: harden (austenitise then quench) then temper to reduce brittleness; overheating and poor quench choices can ruin the steel.

---

## MAT-018: Make nails and simple fasteners from scrap
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need hundreds of nails for construction
- You have scrap iron/steel rod and a forge
- Tools: hammer, anvil, hardy hole substitute, nail header possible

### Prompt
```text
Propose a nail-making workflow.
Include jigs/tools (nail header), how to standardise sizes, and throughput estimates.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): jigs/tools (nail header).
3. Viably covers (correct + usable; mere mention earns 0): how to standardise sizes.
4. Viably covers (correct + usable; mere mention earns 0): throughput estimates.
5. Truth anchor: Hand-forged nails are made by drawing a taper and upsetting a head at forging heat; output is limited by heat cycles and an anvil/heading setup—claims must match that reality.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Hand-forged nails are made by drawing a taper and upsetting a head at forging heat; output is limited by heat cycles and an anvil/heading setup—claims must match that reality.

---

## MAT-019: Heat-treat a chisel for durability
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- You forged a chisel from spring steel but it chips or bends
- You have water/oil for quenching, a fire, and a file
- No thermometer

### Prompt
```text
Explain a practical hardening and tempering process.
Include how to judge temperature without instruments and how to test the result.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Explain a practical hardening; tempering process.
3. Viably covers (correct + usable; mere mention earns 0): how to judge temperature without instruments.
4. Viably covers (correct + usable; mere mention earns 0): how to test the result.
5. Truth anchor: Chisels need a hard edge but tough body: harden then temper (often to a ‘straw’ range) so the edge doesn’t chip catastrophically under impact.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Chisels need a hard edge but tough body: harden then temper (often to a ‘straw’ range) so the edge doesn’t chip catastrophically under impact.

---

## MAT-020: Select safe scrap metals for tools and cookware
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** compare

### Scenario
- You have access to mixed scrap: painted steel, galvanised steel, unknown alloys, aluminium, copper
- Goal: make (A) a cooking pot, (B) tool blades, (C) nails

### Prompt
```text
For A-C, recommend suitable scrap sources and what to avoid.
Include cleaning steps and safety concerns (fumes, coatings).
```

### Rubric (10 points)
1. Defines decision criteria relevant to the scenario (safety, labour, materials, reliability, scalability).
2. Viably covers (correct + usable; mere mention earns 0): cleaning steps. Truth anchor: Cookware/tool safety depends on metallurgy: avoid lead and zinc/galvanised scrap for food-contact and avoid unknown plated metals that can fume or leach when heated.
3. Viably covers (correct + usable; mere mention earns 0): safety concerns (fumes.
4. Viably covers (correct + usable; mere mention earns 0): coatings).
5. Compares the available options against those criteria (not just a list).
6. Recommends a choice and explains why it is best under the stated conditions.
7. Provides a staged implementation plan for the chosen option (what to do first).
8. Identifies key risks/hazards of the recommendation and mitigations.
9. Provides a fallback option and triggers for switching.
10. Clear communication (bullets/table) and stated assumptions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Cookware/tool safety depends on metallurgy: avoid lead and zinc/galvanised scrap for food-contact and avoid unknown plated metals that can fume or leach when heated.

---

## MAT-021: Spin wool into yarn and weave a warm blanket
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- You have access to sheep wool and basic wood tools
- Need warm bedding before winter
- No existing textile tools; must make simple spindle/loom

### Prompt
```text
Outline the process from raw fleece to a usable blanket.
Include washing, carding, spinning, weaving, and finishing.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Outline the process from raw fleece to a usable blanket; washing.
3. Viably covers (correct + usable; mere mention earns 0): carding; spinning.
4. Viably covers (correct + usable; mere mention earns 0): weaving; finishing.
5. Truth anchor: Yarn strength comes from controlled twist and fibre alignment; warp needs stronger, more tightly spun yarn, and consistent tension is key for weaving a durable blanket.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Yarn strength comes from controlled twist and fibre alignment; warp needs stronger, more tightly spun yarn, and consistent tension is key for weaving a durable blanket.

---

## MAT-022: Make netting for carrying and simple fishing
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Need strong netting for carrying loads and potentially fishing
- Materials: plant fibres or wool; tools: knife, spindle
- No synthetic cord

### Prompt
```text
Describe how to produce cord and then make a net (knot type, mesh size selection, and testing).
Include trade-offs between strength and material use.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): trade-offs between strength.
3. Viably covers (correct + usable; mere mention earns 0): material use.
4. Truth anchor: Net strength depends on mesh geometry and knot reliability; mesh size trades catch efficiency vs strength/drag, and wet fibres can stretch/loosen without proper knots/tension.
5. Gives an ordered, step-by-step procedure that a novice could follow.
6. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
7. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
8. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
9. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers.
10. Quantifies key parameters (ratios, dimensions, timing, rates, temperatures) or explains how to measure them — and sanity-checks plausibility. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Net strength depends on mesh geometry and knot reliability; mesh size trades catch efficiency vs strength/drag, and wet fibres can stretch/loosen without proper knots/tension.

---

## MAT-023: Dye fabric using plant dyes safely
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- You want coloured cloth for signalling and morale
- Materials: local plants, ash/alkali, salt; heat source
- No synthetic dyes

### Prompt
```text
Provide a safe low-tech dyeing process.
Include dye extraction, optional mordants with safety cautions, rinsing, and colourfastness testing.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Provide a safe low-tech dyeing process; dye extraction.
3. Viably covers (correct + usable; mere mention earns 0): optional mordants with safety cautions; rinsing.
4. Viably covers (correct + usable; mere mention earns 0): colourfastness testing.
5. Truth anchor: Many plant dyes need a mordant to bind well; pH and heat affect colour, and colourfastness must be tested (wash/light) rather than assumed.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Many plant dyes need a mordant to bind well; pH and heat affect colour, and colourfastness must be tested (wash/light) rather than assumed.

---

## MAT-024: Repair clothing and extend fabric life
- **Category:** Materials & manufacturing
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- Clothing is scarce; repairs must be durable
- Tools: needle, thread/yarn, patches; basic scissors/knife

### Prompt
```text
Write a practical guide to mending: patching, darning, reinforcing seams, and preventing future wear.
Include a triage system for what to repair first.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write a practical guide to mending: patching; darning.
3. Viably covers (correct + usable; mere mention earns 0): reinforcing seams; preventing future wear.
4. Viably covers (correct + usable; mere mention earns 0): a triage system for what to repair first.
5. Truth anchor: Durable repairs use stitches that lock (e.g., backstitch) and patches aligned with fabric grain; reinforcing high-stress points prevents re-tears better than cosmetic stitching.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Durable repairs use stitches that lock (e.g., backstitch) and patches aligned with fabric grain; reinforcing high-stress points prevents re-tears better than cosmetic stitching.

---

## MAT-025: Make soap from wood ash lye and rendered fat
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- You have wood ash and animal fat/tallow
- Goal: produce usable hand and laundry soap for the community
- Tools: pots, buckets, stirring sticks; limited PPE

### Prompt
```text
Describe an end-to-end soap-making process with strong safety precautions.
Include how to make lye, how to judge strength roughly, cooking/mixing, and curing.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): how to make lye; how to judge strength roughly.
3. Viably covers (correct + usable; mere mention earns 0): cooking/mixing.
4. Viably covers (correct + usable; mere mention earns 0): curing.
5. Truth anchor: Soap requires correct lye-to-fat balance; lye is caustic and incomplete saponification or excess lye makes soap unsafe—proper dilution, mixing, and curing/testing are essential.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives unsafe caustic handling (e.g., adding water to lye, no eye/skin protection, no first-aid guidance).

### Reference facts (for judge)
- Soap requires correct lye-to-fat balance; lye is caustic and incomplete saponification or excess lye makes soap unsafe—proper dilution, mixing, and curing/testing are essential.

---

## MAT-026: Troubleshoot a failed soap batch (separating or caustic)
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** troubleshoot

### Scenario
- A soap batch separated and the end product burns skin
- You used ash lye of unknown strength and mixed with warm fat
- You want to salvage if possible

### Prompt
```text
Diagnose likely failure modes and provide salvage options.
Include how to test whether soap is safe to use and how to dispose of failures safely.
```

### Rubric (10 points)
1. Restates the observed problem and defines what 'fixed' looks like.
2. Viably covers (correct + usable; mere mention earns 0): Diagnose likely failure modes; provide salvage options.
3. Viably covers (correct + usable; mere mention earns 0): how to test whether soap is safe to use; how to dispose of failures safely.
4. Lists plausible causes and ranks them by likelihood/impact. Truth anchor: Soap failures usually come from wrong lye concentration/ratio or poor mixing; ‘fixes’ must bring the batch back to correct stoichiometry and allow full cure, not just add perfume.
5. Gives a safe diagnostic sequence (simple, non-destructive checks first).
6. Proposes concrete fixes/repairs using low-tech tools/materials.
7. Includes safety precautions during diagnosis/repair (PPE, isolation, ventilation, etc.). Includes at least 2 specific stop-work triggers.
8. Verifies the fix (measure/observe performance after changes).
9. Includes prevention/maintenance steps to avoid recurrence.
10. Clear structure and assumptions; keeps advice realistic. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives unsafe caustic handling (e.g., adding water to lye, no eye/skin protection, no first-aid guidance).

### Reference facts (for judge)
- Soap failures usually come from wrong lye concentration/ratio or poor mixing; ‘fixes’ must bring the batch back to correct stoichiometry and allow full cure, not just add perfume.

---

## MAT-027: Make simple candles or oil lamps for indoor lighting
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need safe evening lighting for a workshop and clinic
- Fuel sources possible: tallow, beeswax, plant oil
- Containers: small jars, tins; fibres for wicks

### Prompt
```text
Describe how to make candles or oil lamps.
Include wick selection, smoke reduction, and fire safety.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): wick selection.
3. Viably covers (correct + usable; mere mention earns 0): smoke reduction.
4. Viably covers (correct + usable; mere mention earns 0): fire safety.
5. Truth anchor: An oil lamp works by capillary action in the wick; wick size and airflow control smoke/soot, and stability/tip protection is essential to prevent fire.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- An oil lamp works by capillary action in the wick; wick size and airflow control smoke/soot, and stability/tip protection is essential to prevent fire.

---

## MAT-028: Make and test a starch-based paste for paper/wood repairs
- **Category:** Materials & manufacturing
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- Need a cheap glue for paper, light fabric, and temporary wood positioning
- Materials: flour or starch, water; heat source
- High humidity environment

### Prompt
```text
Provide a recipe for starch paste and how to use it.
Include mould prevention, limitations, and a simple strength test.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Provide a recipe for starch paste; how to use it.
3. Viably covers (correct + usable; mere mention earns 0): mould prevention; limitations.
4. Viably covers (correct + usable; mere mention earns 0): a simple strength test.
5. Truth anchor: Starch paste bonds by drying and hydrogen bonding but is not water-resistant and can mould; paste strength depends on correct cooking/gelatinisation and thorough drying.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Starch paste bonds by drying and hydrogen bonding but is not water-resistant and can mould; paste strength depends on correct cooking/gelatinisation and thorough drying.

---

## MAT-101: Identification of Scrap Metals by Spark Testing
- **Category:** Materials
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Scavenging steel for a knife vs a prybar
- You have an angle grinder or grinding wheel
- Heap includes mild steel, high carbon steel, cast iron

### Prompt
```text
Describe the spark test for identifying metals.
Differentiate the spark patterns of Mild Steel vs High Carbon Steel vs Cast Iron.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Mild Steel: Long, yellow straws, very few "starbursts" at end.
3.  High Carbon: Short, energetic, white/bright sparks with *explosive* starbursts/forking.
4.  Cast Iron: Very short, dull red/straw sparks starting at the wheel.
5.  Truth anchor: Carbon content drives the "bursting" of the spark. More carbon = more fireworks.
6.  Stainless note (often short, unbranching).
7.  Safety (eye protection, fire hazard).
8.  Clear structure.
9.  Actionable steps.
10. Reference standard (testing a known file vs known nail).


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


---

## MAT-102: Making a Waterproof Lime-Casein Paint (Whitewash variant)
- **Category:** Materials
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need durable, sanitary coating for hospital/dairy walls
- Plain whitewash rubs off
- You have Lime, Milk (Curds), Pigment

### Prompt
```text
Formulate a "Milk Paint" recipe.
Explain the reaction between Casein and Lime.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Chemistry: Lime (Alkaline) hydrolyzes Casein (Milk Protein) to form Calcium Caseinate.
3.  Truth anchor: This forms a glue/binder that becomes insoluble in water once dry (durable), unlike simple lime wash.
4.  Recipe: Slaked lime putty + Quark/Curds + Water + Earth pigment.
5.  Application: Apply thin.
6.  Spoilage: Use same day (rots liquid, stable dry).
7.  Antimicrobial properties of lime.
8.  Clear structure.
9.  Actionable steps.
10. Surface prep.


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


---
