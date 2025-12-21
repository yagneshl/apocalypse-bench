## ENG-201: Case Hardening Mild Steel
- **Category:** Materials & Manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** You forged a chisel from an old threaded bolt found in a wall.
- **Problem:** The edge bends when you hit rock. Heating it red hot and quenching it in water didn't make it hard.
- **Resources:** Forge, charcoal, old leather boots, animal bones, clay.

### Prompt
```text
We made a chisel from an old bolt, but the metal is soft. We heated it and dunked it in water, but it still bends.
We have old leather boots, bones, and charcoal.
How can we use these things to make the metal hard enough to hold an edge?
```

### Rubric (10 points)
1.  Identifies the metal as **Low Carbon (Mild) Steel**, which cannot be hardened by simple quenching.
2.  Identifies the process as **Case Hardening** (or Pack Carburizing).
3.  **Truth Anchor:** Carbon needs to migrate into the surface of the steel. This requires a carbon-rich environment and **time** at high heat.
4.  Recipe: Pack the tool in a metal box or clay canister filled with carbon material (chopped leather, burnt bone, charcoal dust).
5.  Seal: Seal the container with clay (airtight) to prevent the carbon from just burning away (oxidizing).
6.  Process: Heat to glowing orange/yellow (~900°C) and **hold** for several hours (time = depth of hardness).
7.  Quench: Dump the contents into water while still red hot (or reheat the part and quench).
8.  Result: A hard high-carbon "case" (skin) over a soft core.
9.  Clear steps.
10. Mentions that the core remains tough/ductile.

### Auto-fail (score = 0 if any)
-  Suggests just rubbing the hot metal with carbon (ineffective) or simple tempering.

---

## ENG-202: Indexing a Gear without a Dividing Head
- **Category:** Precision Engineering
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- **Situation:** You are building a waterwheel governor. You need to make a metal gear with exactly 40 teeth.
- **Constraint:** You have no machine to measure angles or divide circles.
- **Resources:** Metal files, a large table, a tape measure, a compass (geometry tool).

### Prompt
```text
We need to cut a metal gear with exactly 40 teeth.
We don't have any fancy tools to measure angles.
How can we mark the 40 slots perfectly evenly using just a tape measure and a large table?
```

### Rubric (10 points)
1.  Describes the "Large Diameter" leverage method.
2.  Step 1: Draw a **very large circle** (e.g., 1 meter diameter) on the table.
3.  Step 2: Center the small gear blank on this large circle.
4.  **Truth Anchor:** Divide the *large* circle circumference by 40. A small error on the large circle (e.g., 1mm) shrinks to a microscopic error on the small gear (the ratio of diameters).
5.  Technique: Use a non-stretchy tape or strip of paper wrapped around the large perimeter.
6.  Mark the 40 points on the large circle.
7.  Use a straightedge from the center point to the large marks to transfer the lines onto the small gear blank.
8.  Verification: Walk a compass around to check spacing.
9.  Clear structure.
10. Actionable advice.

### Auto-fail (score = 0 if any)
-  Suggests measuring the small gear circumference directly (too small for precision with a tape measure).

---

## ENG-203: Centrifugal Governor design
- **Category:** Engineering / Mechanics
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** Your waterwheel powers a sawmill. When you stop cutting, the wheel spins dangerously fast. When you cut, it slows down too much.
- **Problem:** You need it to stay at a steady speed automatically.
- **Resources:** Scrap metal, weights, hinges.

### Prompt
```text
Our waterwheel spins too fast when we stop the saw, and too slow when we start cutting.
How do we build a mechanical device to keep the speed steady automatically?
```

### Rubric (10 points)
1.  Identifies the device as a **Centrifugal Governor** (or Watt Governor).
2.  Mechanism: A vertical shaft geared to the main axle spins two hinged weights (balls).
3.  Physics: As speed increases, the weights fly outward/upward due to centrifugal force.
4.  **Truth Anchor:** The lifting weights pull a sliding collar *up* the shaft. This linear movement is linked to the water gate.
5.  Feedback Loop: Fast spin -> Weights lift -> Collar rises -> Linkage *closes* water gate -> Speed drops.
6.  Tuning: Adjusting the weight mass or using a spring to set the target speed.
7.  Damping: Mentioning friction/dashpot to prevent "hunting" (surging speed up and down).
8.  Clear structure.
9.  Actionable steps.
10. Linkage explanation (converting spin to push/pull).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## ENG-001: Build a rainproof timber-and-tarp shelter for 12 people
- **Category:** Low-tech engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Temperate climate, frequent rain and wind
- Materials: straight poles, tarps, rope, stakes, basic hand saw/axe
- One small stove will be used inside for heat/cooking

### Prompt
```text
Design a shelter that can be built in 1 day by 6 people and will survive a week of wind and rain.
Do not ask clarifying questions; state assumptions.
Include: frame geometry, anchoring, roof design, ventilation and fire safety, and a simple inspection checklist.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a shelter that can be built in 1 day by 6 people; will survive a week of wind; rain.
3. Viably covers (correct + usable; mere mention earns 0): frame geometry; anchoring; roof design.
4. Viably covers (correct + usable; mere mention earns 0): ventilation; fire safety; a simple inspection checklist.
5. Truth anchor: A tarp must be pitched with slope/ridge to shed water and resist wind; any indoor fire/stove requires ventilation because CO can build up even if smoke seems minimal.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- A tarp must be pitched with slope/ridge to shed water and resist wind; any indoor fire/stove requires ventilation because CO can build up even if smoke seems minimal.

---

## ENG-002: Assess and reinforce a damaged masonry building for safe use
- **Category:** Low-tech engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Urban ruins; aftershocks possible
- A two-storey brick building has cracked walls and partial roof damage
- Tools: timber, rope, wedges, basic hand tools; no heavy machinery

### Prompt
```text
You must decide whether the group can safely use the ground floor as a workshop.
Write a step-by-step assessment and reinforcement plan.
Include: what to look for (warning signs), what to avoid, temporary shoring/bracing ideas, and how to set a 'no-go' zone.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write a step-by-step assessment; reinforcement plan.
3. Viably covers (correct + usable; mere mention earns 0): what to look for (warning signs); what to avoid.
4. Viably covers (correct + usable; mere mention earns 0): temporary shoring/bracing ideas; how to set a 'no-go' zone.
5. Truth anchor: Notes that masonry is strong in compression but weak in tension/out-of-plane; bulging/out-of-plumb walls and widening cracks are 'no‑go' signs and bracing must create a clear load path to solid ground.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Notes that masonry is strong in compression but weak in tension/out-of-plane; bulging/out-of-plumb walls and widening cracks are 'no‑go' signs and bracing must create a clear load path to solid ground.

---

## ENG-003: Build a simple footbridge over a 2 m stream using logs
- **Category:** Low-tech engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Forest settlement; stream is 2 m wide, 0.5 m deep
- Materials: logs up to 4 m long, rope, stones; hand tools
- Bridge must carry people with 30 kg loads

### Prompt
```text
Propose a bridge design that can be built in 2 days and inspected for safety.
Include: abutments/foundations, deck, handrail, anchoring against flood, and a load test procedure.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): abutments/foundations; deck.
3. Viably covers (correct + usable; mere mention earns 0): handrail; anchoring against flood.
4. Viably covers (correct + usable; mere mention earns 0): a load test procedure.
5. Truth anchor: Bending stress is highest mid-span: use the strongest/straightest logs as stringers on solid abutments, prevent rolling/slip with decking and lashings, and test gradually before full use.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Bending stress is highest mid-span: use the strongest/straightest logs as stringers on solid abutments, prevent rolling/slip with decking and lashings, and test gradually before full use.

---

## ENG-004: Critique this shelter plan and fix it
- **Category:** Low-tech engineering
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
- A draft plan is provided; you must review it

### Prompt
```text
Draft plan:
- Stretch a tarp flat between four poles.
- Put the stove in the middle for warmth.
- Tie ropes anywhere they fit.
- Sleep directly on the ground.
Task: List the top 8 engineering/safety problems and rewrite the plan so it is robust.
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Viably covers (correct + usable; mere mention earns 0): Draft plan:; Stretch a tarp flat between four poles; Put the stove in the middle for warmth.
3. Viably covers (correct + usable; mere mention earns 0): Tie ropes anywhere they fit; Sleep directly on the ground.
4. Viably covers (correct + usable; mere mention earns 0): List the top 8 engineering/safety problems; rewrite the plan so it is robust.
5. Identifies at least 3 critical flaws/risks, prioritised by severity and reversibility.
6. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: An unventilated stove inside a tarp shelter risks lethal CO and fire; tarps must be sloped (not flat) to avoid water pooling and collapse.
7. Addresses the specific problematic steps in the original plan (mapped to each step/claim).
8. Proposes a corrected plan that is concrete, staged, and feasible with stated resources.
9. Adds monitoring/feedback: what to observe/measure to know the plan is working.
10. Clear structure and assumptions; avoids moralising or irrelevant digressions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- An unventilated stove inside a tarp shelter risks lethal CO and fire; tarps must be sloped (not flat) to avoid water pooling and collapse.

---

## ENG-005: Make strong rope from plant fibres
- **Category:** Low-tech engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need 30 m of strong rope for hauling and shelter guy lines
- Fibre sources: nettle, flax-like plants, tree bark; no synthetic cord
- Tools: knife, simple wooden spindle possible

### Prompt
```text
Write instructions to produce reliable cordage and then rope.
Include fibre preparation, how to twist it into cord, how to combine cords into thicker rope, how to make it long enough without creating weak spots, quality control, and how to store it dry.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write instructions to produce reliable cordage; then rope; fibre preparation.
3. Viably covers (correct + usable; mere mention earns 0): twisting/plying method; joins/splices.
4. Viably covers (correct + usable; mere mention earns 0): quality control; how to store it dry.
5. Truth anchor: Strong rope needs long fibres aligned and twisted into strands, then counter-twisted into rope; to lengthen rope, add new fibres by overlapping and tapering the join (a splice) over a long distance—abrupt joins and knots create weak points and reduce strength.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Strong rope needs long fibres aligned and twisted into strands, then counter-twisted into rope; to lengthen rope, add new fibres by overlapping and tapering the join (a splice) over a long distance—abrupt joins and knots create weak points and reduce strength.

---

## ENG-006: Choose knots and lashings for shelter and hauling
- **Category:** Low-tech engineering
- **Difficulty:** Easy
- **Task type:** compare

### Scenario
- You have rope of unknown quality and rough timber poles
- You need: (1) guy lines, (2) a fixed loop for pulling, (3) joining two ropes, (4) lashing two poles at 90 degrees

### Prompt
```text
For each of the four needs, recommend an appropriate knot/lashing and explain in words how to tie it and how to check it.
Keep it teachable for novices.
```

### Rubric (10 points)
1. Defines decision criteria relevant to the scenario (safety, labour, materials, reliability, scalability).
2. Compares the available options against those criteria (not just a list). Truth anchor: Knots and sharp bends reduce rope strength; for critical loads, prefer appropriate knots/lashings that minimise bend radius and avoid loading the weakest orientation.
3. Recommends a choice and explains why it is best under the stated conditions.
4. Provides a staged implementation plan for the chosen option (what to do first).
5. Identifies key risks/hazards of the recommendation and mitigations.
6. Provides a fallback option and triggers for switching.
7. Clear communication (bullets/table) and stated assumptions. Keeps preamble short; avoids filler/moralising/long disclaimers.
8. Acknowledges constraints/uncertainty and how they change the ranking.
9. Includes rough quantification (outputs/costs) or explains how to estimate them.
10. Includes monitoring/verification to confirm the choice is working. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Knots and sharp bends reduce rope strength; for critical loads, prefer appropriate knots/lashings that minimise bend radius and avoid loading the weakest orientation.

---

## ENG-007: Splice and repair a frayed rope safely
- **Category:** Low-tech engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- A critical rope has frayed near the end; you cannot replace it immediately
- Rope is natural fibre; you have a knife, needle, and wax/pitch

### Prompt
```text
Describe how to restore a usable end (or join to a new section) with a splice or whipping.
Include how to decide whether the rope is safe enough and what tasks it should NOT be used for.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): how to decide whether the rope is safe enough.
3. Viably covers (correct + usable; mere mention earns 0): what tasks it should NOT be used for.
4. Truth anchor: A proper splice preserves far more rope strength than a knot by maintaining the rope’s lay and tapering the join; abrupt steps create stress concentrations and early failure.
5. Gives an ordered, step-by-step procedure that a novice could follow.
6. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
7. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
8. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
9. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers.
10. Quantifies key parameters (ratios, dimensions, timing, rates, temperatures) or explains how to measure them — and sanity-checks plausibility. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- A proper splice preserves far more rope strength than a knot by maintaining the rope’s lay and tapering the join; abrupt steps create stress concentrations and early failure.

---

## ENG-008: Diagnose a rope failure during a lift
- **Category:** Low-tech engineering
- **Difficulty:** Hard
- **Task type:** troubleshoot

### Scenario
- While lifting a 150 kg load, the rope snapped near a knot and the load dropped
- No one was hurt, but you must prevent recurrence

### Prompt
```text
Perform a root-cause analysis. List plausible causes, how to test/inspect each, and changes to procedure/equipment.
Include a safer lift protocol for next time.
```

### Rubric (10 points)
1. Restates the observed problem and defines what 'fixed' looks like.
2. Viably covers (correct + usable; mere mention earns 0): a safer lift protocol for next time.
3. Lists plausible causes and ranks them by likelihood/impact. Truth anchor: Rope can fail from shock loading, abrasion over edges, knots reducing strength, or hidden rot; a sharp edge can cut a rope quickly even if it 'looked strong'.
4. Gives a safe diagnostic sequence (simple, non-destructive checks first).
5. Proposes concrete fixes/repairs using low-tech tools/materials.
6. Includes safety precautions during diagnosis/repair (PPE, isolation, ventilation, etc.). Includes at least 2 specific stop-work triggers.
7. Verifies the fix (measure/observe performance after changes).
8. Includes prevention/maintenance steps to avoid recurrence.
9. Clear structure and assumptions; keeps advice realistic. Keeps preamble short; avoids filler/moralising/long disclaimers.
10. Uses practical tests/observations to confirm or rule out each cause. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Encourages standing under a suspended load or skipping anchor/rope inspection for lifting work.

### Reference facts (for judge)
- Rope can fail from shock loading, abrasion over edges, knots reducing strength, or hidden rot; a sharp edge can cut a rope quickly even if it 'looked strong'.

---

## ENG-009: Move a 500 kg stone without machinery
- **Category:** Low-tech engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need to move a 500 kg stone 30 m across flat ground
- Tools: logs, rope, crowbars, wedges; 10 people available

### Prompt
```text
Propose a safe method using levers, rollers, and cribbing.
Include step-by-step procedure, commands, and how to prevent crush injuries.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): step-by-step procedure.
3. Viably covers (correct + usable; mere mention earns 0): commands.
4. Viably covers (correct + usable; mere mention earns 0): how to prevent crush injuries.
5. Truth anchor: Mechanical advantage trades distance for force: levers, rollers, and cribbing can move heavy loads safely, but only if the load is continuously supported and hands/feet are kept out of pinch points.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Mechanical advantage trades distance for force: levers, rollers, and cribbing can move heavy loads safely, but only if the load is continuously supported and hands/feet are kept out of pinch points.

---

## ENG-010: Design a block-and-tackle to lift a 200 kg load
- **Category:** Low-tech engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need to lift a 200 kg object 1.5 m to place it on a platform
- Materials: rope, salvaged pulleys or smooth wooden blocks, strong beam/tree for anchor

### Prompt
```text
Design a pulley system and estimate the pull force required.
Include rigging steps, safety checks, and a method to lower the load safely.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a pulley system; estimate the pull force required.
3. Viably covers (correct + usable; mere mention earns 0): rigging steps; safety checks.
4. Viably covers (correct + usable; mere mention earns 0): a method to lower the load safely.
5. Truth anchor: Mechanical advantage trades distance for force: the ideal MA equals the number of supporting rope segments, but friction reduces real MA; anchors and rope must be rated for the full load plus dynamic factors.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Encourages standing under a suspended load or skipping anchor/rope inspection for lifting work.

### Reference facts (for judge)
- Mechanical advantage trades distance for force: the ideal MA equals the number of supporting rope segments, but friction reduces real MA; anchors and rope must be rated for the full load plus dynamic factors.

---

## ENG-011: Build a windlass/capstan for controlled pulling
- **Category:** Low-tech engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Need to tension a large structure and occasionally pull heavy loads
- Materials: timber, rope; tools: saw/axe, drill/auger if available

### Prompt
```text
We need a way to pull and hold a heavy load under control (e.g., tension a large structure or drag a log) using only timber and rope.

Task: Design a hand-powered pulling-and-holding mechanism we can build from wood.
Include: how to prevent tipping, how to anchor it, how to keep the rope from slipping, and a safe operating procedure.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): how to prevent tipping; how to anchor it.
3. Viably covers (correct + usable; mere mention earns 0): how to avoid rope slip.
4. Viably covers (correct + usable; mere mention earns 0): safe operating procedure.
5. Truth anchor: Explains that a capstan/windlass holds load primarily by friction—adding wraps increases holding power; the rope should not be hard-tied to the drum and hands must stay clear of the wraps under load.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Explains that a capstan/windlass holds load primarily by friction—adding wraps increases holding power; the rope should not be hard-tied to the drum and hands must stay clear of the wraps under load.

---

## ENG-012: Critique this rigging plan for hazards
- **Category:** Low-tech engineering
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
- You are reviewing a plan before a lift

### Prompt
```text
Rigging plan:
- Tie the rope to the load with 'any knot'.
- Run the rope over a sharp roof edge as a pulley.
- Have two people pull hard while others steady the load by hand.
- Stand nearby to watch in case something slips.
Task: Identify the top hazards and rewrite the plan safely.
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Viably covers (correct + usable; mere mention earns 0): Tie the rope to the load with 'any knot'; Run the rope over a sharp roof edge as a pulley.
3. Viably covers (correct + usable; mere mention earns 0): Have two people pull hard while others steady the load by hand; Stand nearby to watch in case something slips.
4. Viably covers (correct + usable; mere mention earns 0): Identify the top hazards; rewrite the plan safely.
5. Identifies at least 3 critical flaws/risks, prioritised by severity and reversibility.
6. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: Using a sharp edge as a 'pulley' can sever the rope and standing near/under a loaded line is dangerous; rigging must control edges, anchors, and exclusion zones.
7. Addresses the specific problematic steps in the original plan (mapped to each step/claim).
8. Proposes a corrected plan that is concrete, staged, and feasible with stated resources.
9. Adds monitoring/feedback: what to observe/measure to know the plan is working.
10. Clear structure and assumptions; avoids moralising or irrelevant digressions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Encourages standing under a suspended load or skipping anchor/rope inspection for lifting work.

### Reference facts (for judge)
- Using a sharp edge as a 'pulley' can sever the rope and standing near/under a loaded line is dangerous; rigging must control edges, anchors, and exclusion zones.

---

## ENG-013: Design a gravity-fed water line from a spring to camp
- **Category:** Low-tech engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- A clean spring is 500 m away and 20 m higher than camp
- Materials: scavenged pipe segments, clay, cloth, simple tools
- Goal: provide water to a tap/point in camp

### Prompt
```text
Design a gravity-fed system from the spring to camp.
Include intake protection, how to join/seal pipes, how to route it so water keeps flowing reliably, how to fix it if flow stops unexpectedly, and where to add access points for clearing blockages.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a gravity-fed system; intake protection.
3. Viably covers (correct + usable; mere mention earns 0): how to join/seal pipes; how to handle air locks.
4. Viably covers (correct + usable; mere mention earns 0): where to put cleanouts.
5. Truth anchor: States that gravity-fed flow requires the source head above the outlet and that trapped air at high points (air locks) stops flow—avoid high points or add vents/cleanouts to purge air.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- States that gravity-fed flow requires the source head above the outlet and that trapped air at high points (air locks) stops flow—avoid high points or add vents/cleanouts to purge air.

---

## ENG-014: Build drainage to keep shelters dry in heavy rain
- **Category:** Low-tech engineering
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- Camp is on gentle slope; rain causes pooling near tents
- Tools: shovels, sticks, stones; limited labour

### Prompt
```text
Propose a drainage plan that can be implemented in half a day.
Include ditches/berms, where water should go, and how to avoid erosion.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): ditches/berms.
3. Viably covers (correct + usable; mere mention earns 0): where water should go.
4. Viably covers (correct + usable; mere mention earns 0): how to avoid erosion.
5. Truth anchor: Keeping shelters dry is about diverting surface water and giving it a downhill path; drains need fall and must resist clogging (e.g., gravel + filter layers) or they will fail in heavy rain.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Keeping shelters dry is about diverting surface water and giving it a downhill path; drains need fall and must resist clogging (e.g., gravel + filter layers) or they will fail in heavy rain.

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
- Assume they might be on different radio services/bands (e.g., UHF vs VHF) or using privacy codes

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
2. Viably covers (correct + usable; mere mention earns 0): Diagnose why two radios on 'Channel 1' cannot communicate; includes battery/power, volume/squelch, scan/lockout, service/band mismatch, and privacy-code mismatch; proposes a working configuration process.
3. Viably covers (correct + usable; mere mention earns 0): How to identify and clear/match privacy codes (CTCSS/DCS), ensure the same channel/frequency, and confirm transmit/receive works both directions.
4. Lists plausible causes and ranks them by likelihood/impact. Truth anchor: Two radios must share the same actual frequency/band and compatible settings: 'Channel 1' is not universal across services (e.g., FRS/GMRS vs PMR446 vs VHF); CTCSS/DCS 'privacy codes' must match or be disabled or you will not hear the other radio.
5. Gives a safe diagnostic sequence (simple, non-destructive checks first).
6. Proposes concrete fixes/repairs using low-tech tools/materials.
7. Includes safety precautions during diagnosis/repair (PPE, isolation, etc.). Includes at least 2 specific stop-work triggers.
8. Verifies the fix (measure/observe performance after changes).
9. Includes prevention/maintenance steps to avoid recurrence.
10. Clear structure and assumptions; keeps advice realistic. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Claims that 'Channel 1' is always the same frequency across different radio types/services, with no caveats.
- Encourages opening/modifying lithium batteries in a way that risks fire (puncturing/shorting) as part of the troubleshooting.
- Recommends transmitting on emergency/aviation/military frequencies as a default without acknowledging legality/safety and without a genuine life-threatening emergency.

### Reference facts (for judge)
- Two radios must share the same actual frequency/band and compatible settings: 'Channel 1' is not universal across services (e.g., FRS/GMRS vs PMR446 vs VHF); CTCSS/DCS 'privacy codes' must match or be disabled or you will not hear the other radio.

---

## ENG-016: Troubleshoot: your channel keeps leaking and eroding
- **Category:** Low-tech engineering
- **Difficulty:** Hard
- **Task type:** troubleshoot

### Scenario
- A newly dug channel loses most of its flow within 30 m
- The banks are collapsing in two places after rain
- You have clay, stones, vegetation, and basic tools

### Prompt
```text
Diagnose likely causes and propose fixes.
Include quick patch methods, longer-term redesign options, and how to verify the repair.
```

### Rubric (10 points)
1. Restates the observed problem and defines what 'fixed' looks like.
2. Viably covers (correct + usable; mere mention earns 0): Diagnose likely causes; propose fixes; quick patch methods.
3. Viably covers (correct + usable; mere mention earns 0): longer-term redesign options; how to verify the repair.
4. Lists plausible causes and ranks them by likelihood/impact. Truth anchor: Leaking/eroding channels usually mean excessive velocity or poor compaction/lining; reducing slope/flow energy (checks, lining, vegetation) is often the real fix.
5. Gives a safe diagnostic sequence (simple, non-destructive checks first).
6. Proposes concrete fixes/repairs using low-tech tools/materials.
7. Includes safety precautions during diagnosis/repair (PPE, isolation, ventilation, etc.). Includes at least 2 specific stop-work triggers.
8. Verifies the fix (measure/observe performance after changes).
9. Includes prevention/maintenance steps to avoid recurrence.
10. Clear structure and assumptions; keeps advice realistic. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Leaking/eroding channels usually mean excessive velocity or poor compaction/lining; reducing slope/flow energy (checks, lining, vegetation) is often the real fix.

---

## ENG-017: Build a treadle pump to lift water from a shallow source
- **Category:** Low-tech engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Need to lift water 2 m from a stream into barrels for irrigation
- Materials: wood, leather/cloth, nails or wooden pegs, pitch/wax
- No metal valves available

### Prompt
```text
We need to lift water about 2 m from a stream into barrels for irrigation using leg power so hands stay free.
Materials: wood, leather/cloth, nails or wooden pegs, pitch/wax. No metal valves.

Task: Design a foot-powered pump system we can build and repair with these materials.
Include the valve concept, seal materials, key dimensions, build steps, and expected flow rate.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a foot-powered pump; valve concept.
3. Viably covers (correct + usable; mere mention earns 0): seal materials; key dimensions.
4. Viably covers (correct + usable; mere mention earns 0): build steps; expected flow rate.
5. Truth anchor: States that a suction pump cannot lift water much more than ~7–10 m by suction (atmospheric pressure limit) and requires correctly oriented check valves plus an airtight suction side/priming to work.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Recommends using lead pipe/lead solder or fuel/pesticide containers for any component that touches drinking water.
- Claims the pump can lift water by suction from a depth >10 m without noting this is physically unrealistic.

### Reference facts (for judge)
- States that a suction pump cannot lift water much more than ~7–10 m by suction (atmospheric pressure limit) and requires correctly oriented check valves plus an airtight suction side/priming to work.

---

## ENG-018: Use a siphon to drain a flooded pit safely
- **Category:** Low-tech engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- A pit latrine excavation flooded; you must drain it without pumps
- Materials: hose/tubing or hollow reed pipes, buckets
- Water may be contaminated

### Prompt
```text
We need to drain a flooded pit but we have no pump.
We have hose/tubing (or hollow reeds) and buckets, and the ground outside is lower than the water level.
Explain how to get the water out safely (avoid mouth contact), including contamination precautions and where to put the discharged water.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Explain when a siphon will work; how to set one up with minimal mouth contact.
3. Viably covers (correct + usable; mere mention earns 0): contamination precautions.
4. Viably covers (correct + usable; mere mention earns 0): a plan to dispose of the water safely.
5. Truth anchor: States that a siphon requires a continuous, fully filled tube and an outlet lower than the source liquid level; if air enters or the outlet rises above the source level, flow stops.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Suggests starting a siphon by mouth from potentially contaminated water without alternatives.
- Suggests using a pump as the primary method despite the prompt explicitly requiring draining without pumps.

### Reference facts (for judge)
- States that a siphon requires a continuous, fully filled tube and an outlet lower than the source liquid level; if air enters or the outlet rises above the source level, flow stops.

---

## ENG-019: Build a simple piston pump from wood and leather
- **Category:** Low-tech engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Need to lift cleaner water from a well 5 m deep
- Materials: straight timber, leather, wax/pitch, rope; basic drilling tools

### Prompt
```text
We need a hand-operated pump made from wood and leather to lift cleaner water from a well ~5 m deep.

Task: Design a hand-operated pump that moves water upward and prevents it from falling back between strokes.
Explain the moving parts, how to build it from wood/leather, how to prime it, and how to maintain it.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): cylinder; piston cup seal.
3. Viably covers (correct + usable; mere mention earns 0): check valve; handle.
4. Viably covers (correct + usable; mere mention earns 0): priming; maintenance.
5. Truth anchor: States that a piston pump needs an airtight cylinder + seal and a one-way valve arrangement (foot valve and piston/ outlet check); the suction lift limit still applies and valve orientation is critical.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- States that a piston pump needs an airtight cylinder + seal and a one-way valve arrangement (foot valve and piston/ outlet check); the suction lift limit still applies and valve orientation is critical.

---

## ENG-020: Troubleshoot: your pump loses prime and flow drops
- **Category:** Low-tech engineering
- **Difficulty:** Medium
- **Task type:** troubleshoot

### Scenario
- A hand pump worked yesterday but now loses prime after a few strokes
- Flow rate has halved; squeaking noise present
- You have basic tools and seal materials (leather, wax)

### Prompt
```text
Diagnose likely causes and list inspection steps and fixes.
Include how to test for air leaks and worn seals.
```

### Rubric (10 points)
1. Restates the observed problem and defines what 'fixed' looks like.
2. Viably covers (correct + usable; mere mention earns 0): Diagnose likely causes; list inspection steps; fixes.
3. Viably covers (correct + usable; mere mention earns 0): how to test for air leaks; worn seals.
4. Lists plausible causes and ranks them by likelihood/impact. Truth anchor: Loss of prime is commonly caused by air leaks on the suction side or a leaking/blocked foot valve; diagnosing air ingress comes before redesigning the whole pump.
5. Gives a safe diagnostic sequence (simple, non-destructive checks first).
6. Proposes concrete fixes/repairs using low-tech tools/materials.
7. Includes safety precautions during diagnosis/repair (PPE, isolation, ventilation, etc.). Includes at least 2 specific stop-work triggers.
8. Verifies the fix (measure/observe performance after changes).
9. Includes prevention/maintenance steps to avoid recurrence.
10. Clear structure and assumptions; keeps advice realistic. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Loss of prime is commonly caused by air leaks on the suction side or a leaking/blocked foot valve; diagnosing air ingress comes before redesigning the whole pump.

---

## ENG-021: Build an updraft pottery kiln from clay and brick
- **Category:** Low-tech engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Goal: fire simple clay pots reliably
- Materials: clay, sand, some salvaged bricks, wood fuel
- Tools: shovels, trowel substitutes

### Prompt
```text
We need a simple kiln structure to fire clay pots reliably using wood fuel.

Task: Design a small pottery kiln we can build from clay/sand and salvaged bricks.
Include structure, firebox, airflow/chimney, a drying + firing schedule, and how to avoid cracking wares.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a small updraft kiln; structure; firebox.
3. Viably covers (correct + usable; mere mention earns 0): airflow; chimney.
4. Viably covers (correct + usable; mere mention earns 0): drying schedule; how to avoid cracking wares.
5. Truth anchor: Kilns fail when moisture and thermal shock are ignored: ware must be fully dry and temperature must be ramped gradually with controlled airflow to avoid cracking/explosions.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Kilns fail when moisture and thermal shock are ignored: ware must be fully dry and temperature must be ramped gradually with controlled airflow to avoid cracking/explosions.

---

## ENG-022: Design a lime kiln to make binder for mortar
- **Category:** Low-tech engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- You have access to limestone or sea shells
- Fuel: wood and/or charcoal
- Goal: produce quicklime for mortar/plaster

### Prompt
```text
Propose a lime kiln design and operating procedure.
Include: loading, airflow, burn duration, how to tell by observation when the stone/shells are ready for mortar use, and key safety hazards.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): loading; airflow.
3. Viably covers (correct + usable; mere mention earns 0): burn duration; how to tell when calcination is complete.
4. Viably covers (correct + usable; mere mention earns 0): key safety hazards.
5. Truth anchor: Identifies calcination as CaCO₃ → CaO + CO₂ requiring sustained high heat; warns that quicklime reacts exothermically with water (burn risk) and must be stored dry; CO/CO₂ and hot dust are key hazards.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Identifies calcination as CaCO₃ → CaO + CO₂ requiring sustained high heat; warns that quicklime reacts exothermically with water (burn risk) and must be stored dry; CO/CO₂ and hot dust are key hazards.

---

## ENG-023: Build a bloomery-style furnace for small iron production
- **Category:** Low-tech engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Goal: produce a small bloom of iron from local ore or rust scrap
- Fuel: charcoal; air: bellows or forced draft possible
- Materials: clay/sand, tuyere from pipe/clay

### Prompt
```text
Outline a practical bloomery build and run plan.
Include furnace dimensions (approximate), air supply, charcoal handling, slag management, and safety.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Outline a practical bloomery build; run plan; furnace dimensions (approximate).
3. Viably covers (correct + usable; mere mention earns 0): air supply; charcoal handling.
4. Viably covers (correct + usable; mere mention earns 0): slag management; safety.
5. Truth anchor: States that a bloomery produces a solid spongy iron 'bloom' (not a pot of molten iron to pour); it needs continuous air blast and charcoal and the bloom must be consolidated by hot working while managing slag.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- States that a bloomery produces a solid spongy iron 'bloom' (not a pot of molten iron to pour); it needs continuous air blast and charcoal and the bloom must be consolidated by hot working while managing slag.

---

## ENG-024: Critique this kiln schedule and fix it
- **Category:** Low-tech engineering
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
- A novice wrote this plan

### Prompt
```text
Kiln plan:
- Build the kiln today.
- Put freshly made pots straight in.
- Light a big fire and keep it roaring for 2 hours.
- Open the kiln immediately to check the pots.
Task: Explain what will likely go wrong and rewrite a safer firing schedule.
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Viably covers (correct + usable; mere mention earns 0): Build the kiln today; Put freshly made pots straight in; Light a big fire.
3. Viably covers (correct + usable; mere mention earns 0): keep it roaring for 2 hours; Open the kiln immediately to check the pots.
4. Viably covers (correct + usable; mere mention earns 0): Explain what will likely go wrong; rewrite a safer firing schedule.
5. Identifies at least 3 critical flaws/risks, prioritised by severity and reversibility.
6. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: Fast heat-up/cool-down causes thermal shock; kiln schedules must ramp and soak appropriately and avoid sealing off airflow in ways that create uneven heating or CO hazards.
7. Addresses the specific problematic steps in the original plan (mapped to each step/claim).
8. Proposes a corrected plan that is concrete, staged, and feasible with stated resources.
9. Adds monitoring/feedback: what to observe/measure to know the plan is working.
10. Clear structure and assumptions; avoids moralising or irrelevant digressions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Fast heat-up/cool-down causes thermal shock; kiln schedules must ramp and soak appropriately and avoid sealing off airflow in ways that create uneven heating or CO hazards.

---

## ENG-025: Design a hand-built cart or sledge for hauling supplies
- **Category:** Low-tech engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need to move 200 kg of supplies 3 km over uneven ground
- Materials: wood, rope, some scrap metal possible; limited nails
- No bearings available

### Prompt
```text
Propose a cart or sledge design.
Include load distribution, runners/wheels, how to reduce friction, and a maintenance plan.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): load distribution; runners/wheels.
3. Viably covers (correct + usable; mere mention earns 0): how to reduce friction.
4. Viably covers (correct + usable; mere mention earns 0): a maintenance plan.
5. Truth anchor: A cart’s usability depends on axle/bearing friction and stability: aligned axles, lubricated bearings, and a low centre of mass matter more than adding extra structure.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- A cart’s usability depends on axle/bearing friction and stability: aligned axles, lubricated bearings, and a low centre of mass matter more than adding extra structure.

---

## ENG-026: Build a temporary road across muddy terrain
- **Category:** Low-tech engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- A 50 m stretch of path becomes impassable mud in rain
- Materials: logs/branches, stones, straw; tools: shovels
- Need a solution that lasts at least 1 month

### Prompt
```text
We need to reinforce a 50 m stretch of muddy path so wheels/feet don’t sink during rain.
Materials: logs/branches, stones, straw; tools: shovels. Must last ~1 month.

Task: Propose a low-tech way to reinforce the path.
Include drainage, materials, build steps, and how to maintain it.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): drainage; materials.
3. Viably covers (correct + usable; mere mention earns 0): build steps.
4. Viably covers (correct + usable; mere mention earns 0): how to maintain it.
5. Truth anchor: Mud failures are bearing-capacity failures: you must spread load and manage water (corduroy/brush mat + drainage) or wheels will simply sink and rut deeper.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Mud failures are bearing-capacity failures: you must spread load and manage water (corduroy/brush mat + drainage) or wheels will simply sink and rut deeper.

---

## ENG-027: Construct a small retaining wall for a terrace
- **Category:** Low-tech engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Need to terrace a sloped garden to prevent erosion
- Materials: stones, clay/soil; no cement initially
- Wall height ~0.8 m; length 10 m

### Prompt
```text
Design a dry-stone (or minimally bound) retaining wall.
Include base preparation, drainage behind the wall, how to shape/slope the wall so it doesn’t topple, and how to prevent failure.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a dry-stone (or minimally bound) retaining wall; base preparation.
3. Viably covers (correct + usable; mere mention earns 0): drainage behind the wall; batter angle.
4. Viably covers (correct + usable; mere mention earns 0): how to prevent failure.
5. Truth anchor: States that water pressure is a primary retaining-wall failure mode; requires free-draining backfill + drainage/weep paths and a wider battered base to prevent sliding/overturning.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Explicitly states drainage is unnecessary, or recommends impermeable backfill (e.g., clay) directly behind the wall with no drainage/weep path.
- Encourages working in a deep (>1 m) vertical-sided excavation/trench without shoring/benching/sloping or collapse precautions.

### Reference facts (for judge)
- States that water pressure is a primary retaining-wall failure mode; requires free-draining backfill + drainage/weep paths and a wider battered base to prevent sliding/overturning.

---

## ENG-028: Plan safe digging and trenching for utilities
- **Category:** Low-tech engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need to dig a 30 m trench for a water line
- Soil is damp and can slump; you have shovels and planks
- Work must be done by volunteers with mixed experience

### Prompt
```text
Write a trenching plan that minimises collapse and injury.
Include slope/shoring guidance, spoil placement, access/egress, and a supervision checklist.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write a trenching plan that minimises collapse; injury.
3. Viably covers (correct + usable; mere mention earns 0): slope/shoring guidance; spoil placement.
4. Viably covers (correct + usable; mere mention earns 0): access/egress; a supervision checklist.
5. Truth anchor: States that deep vertical-sided trenches can collapse without warning; a safe plan must use sloping/benching/shoring and keep spoil/loads back from the edge with safe access/egress.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Encourages entering a deep (>1 m) vertical-sided trench without shoring/benching/sloping or collapse precautions.
- Recommends placing spoil piles, vehicles, or heavy loads right at the trench edge (increasing collapse risk).

### Reference facts (for judge)
- States that deep vertical-sided trenches can collapse without warning; a safe plan must use sloping/benching/shoring and keep spoil/loads back from the edge with safe access/egress.

---

## ENG-101: Generate a flat surface reference from scratch (Three Plates Method)
- **Category:** Precision Engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- You need a perfectly flat metal surface to layout precision parts
- You have three roughly flat cast iron plates and scraping tools
- You have no existing reference flat or straightedge

### Prompt
```text
You have three roughly flat cast iron plates and scraping tools, but no straightedge or known-flat reference.
Explain how to process the plates to generate a truly flat reference surface. Describe the comparison/scraping sequence and the logic of why three plates are necessary, not just two.
```

### Rubric (10 points)
1.  Directly answers the task using only the stated resources; strictly respects negative constraints.
2.  Explains the flaw of using only two plates (they can form matching convex/concave curves).
3.  Describes the specific rotation sequence (A against B, A against C, B against C).
4.  Explains how identifying high spots works (using a marking medium like soot/oil or Prussian blue).
5.  Truth anchor: "Automatic generation of truth": You must rotate the pairing so that error is cancelled out. If A matches B, and A matches C, but B does not match C, you identify the specific convexity/concavity errors.
6.  Gives an ordered, step-by-step procedure.
7.  Mentions the scraping technique (removing high spots, not filing low spots).
8.  Identifies stop-work triggers (e.g., heat expansion from friction/handling affecting flatness).
9.  Includes a verification check.
10. Clear structure and actionable advice.

### Auto-fail (score = 0 if any)
-  Suggests using only two plates.
-  Suggests grinding/sanding randomly without a scraping pattern.

### Reference facts (for judge)
-  Two plates will simply mate (one convex, one concave). Three plates compared in a specific cycle are required to eliminate curvature and generate a true plane.

---

## ENG-102: Cut a screw thread without a tap or die
- **Category:** Precision Engineering
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- You need a large metal screw for a press
- You have metal rod, files, paper, glue, and saws
- You have no lathe and no existing screw to copy

### Prompt
```text
Describe a method to layout and cut a functional screw thread on a metal rod by hand.
Include how to ensure the pitch is consistent and the helix angle is correct.
```

### Rubric (10 points)
1.  Directly answers the task using only the stated resources.
2.  Viably covers generating the helix geometry (e.g., the inclined plane wrapping method).
3.  Describes creating a paper template (right-angled triangle where base = circumference, height = pitch).
4.  Explains wrapping the template to mark the spiral path.
5.  Truth anchor: The hypotenuse of a triangle wrapped around a cylinder forms a helix. Accuracy depends on the straightness of the initial scribe line following this paper edge.
6.  Gives ordered steps for filing (starting with a triangular file to establish the groove).
7.  Discusses maintaining the thread profile angle (usually 60 degrees).
8.  Identifies hazards (rod bending, losing the track).
9.  Includes a sanity check for pitch consistency (threads per inch).
10. Clear structure and actionable advice.

### Auto-fail (score = 0 if any)
-  Suggests "eyeballing" the spiral.

---

## ENG-103: Pouring Babbitt bearings for a shaft
- **Category:** Engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- A generator shaft bearing has disintegrated
- You have scrap lead, tin, antimony (or old pewter/type metal)
- You have the steel shaft and the housing

### Prompt
```text
We need to cast a new plain bearing in place for a steel shaft using melted soft metal scrap.

Task: Explain the full procedure to cast the bearing in the housing around the shaft.
Include shaft preparation (release layer), pre-heating, and how to prevent the metal sticking to the shaft.
```

### Rubric (10 points)
1.  Directly answers the task using only the stated resources.
2.  Covers shaft preparation: Using soot (candle smoke) or clay wash as a release agent.
3.  Explains pre-heating the housing/shaft to prevent "cold shuts" and moisture explosion.
4.  Details the damming process (using clay/putty to hold molten metal).
5.  Truth anchor: The shaft must be coated so the babbitt doesn't weld to it, and pre-heated to remove moisture (prevent steam explosion).
6.  Gives pouring instruction (single continuous pour).
7.  Describes post-pour fitting (scraping for clearance/oil channels).
8.  Identifies the moisture explosion hazard clearly.
9.  Includes verification of fit/rotation.
10. Clear structure and actionable advice.

### Auto-fail (score = 0 if any)
-  Fails to mention a release agent/soot for the shaft (bearing will seize/weld).
-  Fails to warn about moisture explosions.

---

## ENG-104: Waterproof mortar without Portland cement
- **Category:** Materials & Manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need waterproof mortar for a pier/cistern
- No Portland cement available
- You have quicklime, volcanic ash (or crushed brick/pottery dust), and aggregate

### Prompt
```text
Formulate a hydraulic mortar recipe and mixing procedure using these resources.
Explain why mixing just lime and sand won't work underwater, and what specific chemical role the volcanic ash plays in the cure.
```

### Rubric (10 points)
1.  Directly answers the task using only the stated resources.
2.  Identifies the reactive additive (volcanic ash or crushed reactive brick/pottery dust).
3.  Explains the mix ratio (typically 1:2 to 1:3 Lime:Ash/dust).
4.  Truth anchor: Lime + Sand = non-hydraulic (needs air to cure). Lime + reactive ash/dust = hydraulic (reacts chemically to cure, even underwater).
5.  Gives mixing steps (slaking lime, integrating aggregate).
6.  Describes the curing requirement (keep moist).
7.  Identifies hazards (lime burns).
8.  Includes a test sample procedure.
9.  Clear structure.
10. Actionable advice avoiding modern cement terminology.

### Auto-fail (score = 0 if any)
-  Recommends standard lime mortar for underwater use.

---

## ENG-105: Calculate loads for a simple A-frame truss
- **Category:** Engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Building a roof with a 6m span
- You need to determine if your timber beams are strong enough
- You understand basic leverage but need to estimate tension/compression

### Prompt
```text
Explain how to identify which members of an A-frame truss are in tension vs compression.
Describe how to reinforce the bottom chord joint to prevent spread.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Identifies top rafters are in compression.
3.  Identifies bottom tie beam is in tension.
4.  Truth anchor: The load pushes the feet of the A-frame outward; the bottom tie's sole job is to hold them together (tension). Failure usually happens at the joinery where the rafter pushes off the tie.
5.  Proposes specific joinery (e.g., heel joint/step joint) or bolting to handle that shear force.
6.  Explains that a king post (vertical) is in tension (holding up the bottom beam), not compression (holding up the ridge), in a standard truss.
7.  Safety factor warnings.
8.  Clear structure.
9.  Includes visual check guidance (sag/separation).
10. Actionable construction advice.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.
- Recommends removing the bottom tie/allowing the feet to spread as acceptable.

---

## ENG-106: Making a "Surface Plate" from Granite Countertop
- **Category:** Precision Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need a fairly flat surface for layout
- Found a polished granite kitchen island slab
- Need to map its flatness errors

### Prompt
```text
Explain how to map the flatness of a surface using a sensitive level to find high and low spots.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Concept: Sliding a rigid base with a sensitive level across the surface.
3.  Mapping: If the bubble moves, the angle changed, implying a hill or valley.
4.  Grid pattern (Union Jack pattern).
5.  Truth anchor: Granite is generally harder and more stable than iron, but kitchen grade isn't "lab grade". Verification is needed.
6.  Cleaning checks (dust creates errors).
7.  Clear structure.
8.  Actionable advice.
9.  Calculating height difference from angle (trig).
10. Limits of this method.


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


---

## ENG-107: Casting a replacement aluminum part (Sand Casting)
- **Category:** Materials & Manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Broken aluminum bracket critical for a pump
- You have scrap aluminum cans/engine block
- You have sand and clay (bentonite/cat litter)

### Prompt
```text
Describe the "Green Sand" casting process using a two-part flask.
Include sand preparation, venting, gating, and shrinkage allowance.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Green Sand recipe: Sand + Clay (~10%) + Water (just enough to clump).
3.  Flask: Cope (top) and Drag (bottom). Use pattern to make void.
4.  Truth anchor: Venting is critical to let air/steam escape, otherwise pressure blows the metal back out.
5.  Gating: Sprue (pour hole), Runner, Gates (entry to part), Riser (reservoir to feed shrinkage).
6.  Shrinkage: Aluminum shrinks on cooling. Riser must cool *last*.
7.  Safety: Molten aluminum + water = steam explosion. Dry tools.
8.  Fluxing/dross removal.
9.  Clear structure.
10. Actionable steps.


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


---

## ENG-108: Square a large foundation with a tape
- **Category:** Measurement / Math
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- Layout a building foundation 20m x 30m
- Needs perfectly square corners
- No optical square

### Prompt
```text
I need to lay out a large rectangular foundation (20 m x 30 m) with perfectly square corners using only a tape measure and stakes/string.
Describe a practical method to square the first corner and verify the full rectangle is square.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Method: Measure 3 units one side, 4 units other side. The diagonal must be exactly 5 units.
3.  Scaling: Use multiples (e.g., 9m, 12m, 15m) for accuracy over distance.
4.  Truth anchor: If diagonals of the rectangle are equal length, it is square (assuming opposite sides are equal length).
5.  Clear structure.
6.  Actionable steps.
7.  Practical tip: Use two tapes or a non-stretchy string.
8.  Correcting error (shift corners until diagonals match).
9.  Visualizing the output.
10. Reference to Pythagoras.


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


---

## ENG-109: Making a "Vise" from wood
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need to hold workpieces
- No metal screw available
- You have wedges and timber

### Prompt
```text
Design a wedge-actuated woodworking vise or clamp.
Explain the mechanics of locking it.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Design: Fixed jaw, movable jaw sliding in a frame.
3.  Actuation: Driven by folding wedges (opposing tapers).
4.  Truth anchor: Low taper angle (<7 degrees) is self-locking (friction > separation force). High angle pops out.
5.  Release: Tap the small end of wedge.
6.  Material choice (hardwood).
7.  Clear structure.
8.  Actionable steps.
9.  Parallel clamping guides.
10. Robustness.


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


---

## ENG-110: Troubleshooting a Rope Pump (Washer pump)
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** troubleshoot

### Scenario
- Rope pump installed in well
- Water comes up but splashes back down; efficiency is terrible
- Pipe is vertical

### Prompt
```text
Diagnose the back-flow issue.
Check clearance tolerances and wheel speed.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Mechanism: Washers lift water by fit, not suction.
3.  Diagnosis 1: Clearance too large between washer and pipe wall (water slips past).
4.  Diagnosis 2: Rope moving too slow (dynamic seal fails).
5.  Truth anchor: Effective rope pumps rely on water inertia and skin friction. Washers shouldn't scrape tight (wear) but shouldn't have large gaps.
6.  Guide block wear at bottom.
7.  Pipe constraints.
8.  Clear structure.
9.  Actionable steps.
10. Washer spacing.


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


---

## ENG-111: Troubleshooting a Solar Thermal Hot Water Loop
- **Category:** Energy
- **Difficulty:** Hard
- **Task type:** troubleshoot

### Scenario
- Thermosyphon system (Tank above collector)
- Water gets hot in collector but doesn't move to tank
- Pipes are hot, tank is cold

### Prompt
```text
Diagnose the flow stoppage.
Check for "vapor lock" and pipe slope issues.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Mechanism: Thermosyphon relies on density difference (hot water rises). Force is weak.
3.  Diagnosis 1: High point in the pipe run trapping air (Vapor lock). Pipe must constantly rise to tank.
4.  Diagnosis 2: Tank not high enough relative to collector (thermal head).
5.  Diagnosis 3: Horizontal runs too long (friction > buoyancy).
6.  Truth anchor: One dip/trap kills the flow.
7.  Solution: Install bleed valve at high point or re-slope pipes.
8.  Clear structure.
9.  Actionable steps.
10. Freeze protection note.


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


---

## ENG-112: Mixing and Using Cobb (Mud/Straw Building)
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Building shelter walls
- Clay soil, sand, straw available
- Wet climate

### Prompt
```text
Describe the Cobb mix ratio and testing method.
Why is straw added? Why is sand added?
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Ratio: Clay (binder) + Sand (aggregate) + Straw (tensile strength). Often 1:2:1 but depends on subsoil.
3.  Truth anchor: Pure clay cracks when drying (shrinks). Sand reduces shrinkage. Straw holds it together (tensile reinforcement) and adds insulation.
4.  Mixing: Puddling with feet.
5.  Test: Make a "cookie" or ball, dry it. If it cracks -> more sand. If it crumbles -> more clay.
6.  "Hat and Boots": Good stone foundation (boots) and overhang roof (hat) essential to protect from rain.
7.  Monolithic building technique.
8.  Clear structure.
9.  Actionable steps.
10. Drying time.


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


---

## ENG-113: Making Charcoal for Smelting vs Cooking
- **Category:** Energy / Materials
- **Difficulty:** Medium
- **Task type:** compare

### Scenario
- Need fuel for a forge (smelting iron) vs BBQ
- Making charcoal
- Selecting wood and process

### Prompt
```text
Differentiate "Fuel Charcoal" from "Smithing Charcoal".
How does hardwood vs softwood selection affect maximum temperature and burn rate?
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Cooking: Hardwood (Oak/Hickory) preferred. Burns long, steady heat, nice flavor.
3.  Smelting/Forging: Softwood (Pine) often preferred!
4.  Truth anchor: Softwood charcoal is less dense, so it burns *faster*. Faster combustion = higher power density (BTU/minute) = hotter fire (needed to melt iron). Hardwood burns too slow for some smelting operations.
5.  Size grading: Smiths need uniform chunks (walnut size) for airflow. Dust chokes the fire.
6.  Purity: Fully charred (no brown wood) to avoid smoke/sulfur.
7.  Clear structure.
8.  Actionable steps.
9.  Process control.
10. Ash content issues.


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


---

## ENG-114: Troubleshoot a hot-air engine that won’t run
- **Category:** Energy
- **Difficulty:** Very Hard
- **Task type:** troubleshoot

### Scenario
- Built a gamma-type stirling engine model
- It won't run when heated
- Moves freely by hand

### Prompt
```text
We built a small heat engine with two moving elements (one moves air between hot and cold zones; one extracts power), but it won’t run when heated.
It moves freely by hand.

Task: Diagnose common failure modes for this kind of heat engine and propose a fix order.
Focus on friction, air leaks, and correct timing between the two moving elements.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Truth anchor: Stirling engines produce very low power. Any friction kills them.
3.  Leaks: The system must be sealed (for working fluid pressure swing) but pistons must slide freely. A dilemma.
4.  Phase Angle: Displacer leads Power Piston by ~90 degrees. If phased wrong, it won't run.
5.  Temperature Differential: Needs Delta-T. Cold side must stay cold (heatsink?).
6.  Displacer touching the walls (friction).
7.  Dead volume (too much air space not being heated/cooled).
8.  Clear structure.
9.  Actionable steps.
10. Lubrication choices (dry graphite vs oil).


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


---
