## ENG-201: Case Hardening Mild Steel
- **Category:** Engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The person forged a chisel from an old threaded bolt found in a wall.
- **Problem:** The edge bends when they hit rock. Heating it red hot and quenching it in water didn't make it hard.
- **Resources:** Forge, charcoal, old leather boots, animal bones, clay.

### Prompt
```text
I made a chisel from an old steel bolt I found, but it's way too soft and the edge just curls over when I use it. I tried heating it until it was red and dunking it in water, but that didn't help at all. 
I have some old leather boots, some animal bones, and plenty of charcoal. Is there a way to use these things to actually make the metal hard enough to hold an edge? 
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
- **Category:** Engineering
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- **Situation:** The person is building a waterwheel governor. They need to make a metal gear with exactly 40 teeth.
- **Constraint:** They have no machine to measure angles or divide circles.
- **Resources:** Metal files, a large table, a tape measure, a compass (geometry tool).

### Prompt
```text
I need to cut a metal gear with exactly 40 teeth for a project. I don't have a dividing head or any fancy tools to measure out degrees or angles. 
I've got a tape measure, a compass, and a large flat table. How can I mark out the 40 slots perfectly evenly so the gear actually works?
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
- **Category:** Engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** A person's waterwheel powers a sawmill. When they stop cutting, the wheel spins dangerously fast. When they cut, it slows down too much.
- **Problem:** They need it to stay at a steady speed automatically.
- **Resources:** Scrap metal, weights, hinges.

### Prompt
```text
My waterwheel is driving me crazy—it spins way too fast when the saw isn't under load, but then it bogs down the moment I start cutting. 
I need a way to keep the speed steady automatically. I have some scrap metal, heavy weights, and hinges. How do I build a mechanical device that can throttle the water based on how fast the wheel is spinning?
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
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** 6 people need to build a shelter for 12 people. Temperate climate, frequent rain and wind.
- **Materials:** Straight poles, tarps, rope, stakes, basic hand saw/axe.
- **Problem:** A small stove will be used inside for heat/cooking.

### Prompt
```text
We have 6 people and need to build a shelter for 12 of us by the end of the day. It's been really windy and rainy lately. 
We have tarps, rope, straight poles, and a hand saw. We're also planning on putting a small stove inside to keep warm. 
Can you give me a plan for the frame and the roof so it doesn't blow down or leak? I also need to know how to handle the stove safely so we don't get smoke or fire problems.
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
- **Category:** Engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** A person is in urban ruins where aftershocks are possible.
- **Problem:** A two-storey brick building has cracked walls and partial roof damage.
- **Tools:** Timber, rope, wedges, basic hand tools; no heavy machinery.

### Prompt
```text
I found a two-story brick building in the ruins that I want to use as a workshop, but the walls are cracked and part of the roof is messed up. 
How do I tell if the ground floor is actually safe to be in? If it needs work, how can I use timber and rope to brace the walls? I also need to know what signs mean I should just stay out entirely.
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
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** A person in a forest settlement needs to cross a stream that is 2 m wide and 0.5 m deep.
- **Materials:** Logs up to 4 m long, rope, stones; hand tools.
- **Problem:** Bridge must carry people with 30 kg loads.

### Prompt
```text
I need to build a bridge over a 2-meter wide stream so we can carry 30kg packs across. I have some 4-meter logs, plenty of rope, and stones. 
How do I build this in a couple of days so it's sturdy enough not to sag too much and won't just wash away if the water rises? I need to know how to do the foundations and a handrail too.
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
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where some numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

### Reference facts (for judge)
- Bending stress is highest mid-span: use the strongest/straightest logs as stringers on solid abutments, prevent rolling/slip with decking and lashings, and test gradually before full use.

---

## ENG-004: Critique this shelter plan and fix it
- **Category:** Engineering
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
- **Situation:** A person is reviewing a draft plan for a shelter.
- **Plan:** Stretch a tarp flat between four poles; put the stove in the middle for warmth; tie ropes anywhere they fit; sleep directly on the ground.

### Prompt
```text
I was given this plan for a shelter:
- Stretch a tarp flat between four poles.
- Put the stove in the middle for warmth.
- Tie ropes anywhere they fit.
- Sleep directly on the ground.

What are the biggest problems with this from an engineering and safety standpoint, and how should I actually set this up so it works?
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
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** A person needs 30 m of strong rope for hauling and shelter guy lines.
- **Resources:** Nettle, flax-like plants, tree bark; no synthetic cord.
- **Tools:** Knife, simple wooden spindle possible.

### Prompt
```text
I need about 30 meters of strong rope for hauling some supplies, but I don't have any cordage. I have access to nettles, bark, and some flax-like plants. 
How do I turn these into a rope that won't just snap under load? I need to know how to prep the fibers and how to twist them together so I can make a long rope without having weak spots where I join the sections.
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
- **Category:** Engineering
- **Difficulty:** Easy
- **Task type:** compare

### Scenario
- **Situation:** A person has rope of unknown quality and rough timber poles.
- **Problem:** They need: (1) guy lines, (2) a fixed loop for pulling, (3) joining two ropes, (4) lashing two poles at 90 degrees.

### Prompt
```text
I'm building a structure with some rough timber poles and rope I made. I need to know the best way to tie guy lines, make a loop for pulling a load, join two ropes together, and lash two poles at a 90-degree angle. 
Can you tell me which knots to use for these four things and how to tie them so they don't slip?
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
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** A critical rope has frayed near the end. It cannot be replaced immediately.
- **Materials:** Natural fibre rope; knife, needle, and wax/pitch.

### Prompt
```text
One of my main ropes is starting to fray badly near the end. I can't replace it right now. I have a knife, a needle, and some wax. 
How do I fix the end or join it to a fresh piece of rope using a splice instead of just a big knot? Also, how do I know if the rope is still safe to use or if I should stop using it for heavy lifting?
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
- **Category:** Engineering
- **Difficulty:** Hard
- **Task type:** troubleshoot

### Scenario
- **Situation:** While lifting a 150 kg load, the rope snapped near a knot and the load dropped.
- **Goal:** Perform a root-cause analysis and prevent recurrence.

### Prompt
```text
We were lifting a 150kg stone today and the rope just snapped right next to a knot. The whole thing dropped. Thankfully nobody was hit, but I need to know why that happened so it doesn't happen again. 
What could have caused it to break there, and how do I test my other ropes to see if they're okay? What should our procedure be for the next lift so we're safe?
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
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** A person needs to move a 500 kg stone 30 m across flat ground.
- **Resources:** Logs, rope, crowbars, wedges; 10 people available.

### Prompt
```text
We have to move a 500kg stone about 30 meters across flat ground. There are 10 of us and we have logs, rope, crowbars, and wedges. 
How can we use these to move it safely without anyone getting a foot crushed? Can you give me a step-by-step for the method and the commands I should call out so we all work together?
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
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** A person needs to lift a 200 kg object 1.5 m onto a platform.
- **Materials:** Rope, salvaged pulleys or smooth wooden blocks, strong beam/tree for anchor.

### Prompt
```text
I need to lift a 200kg load up about 1.5 meters onto a platform. I have plenty of rope and some salvaged pulleys. 
How should I set up the pulleys to make this lift manageable, and how much force am I going to have to pull with? Can you walk me through the rigging and how to lower it safely once it's up there?
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
- **Category:** Engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** A person needs to tension a large structure or drag heavy logs.
- **Materials:** Timber, rope; tools: saw/axe, drill/auger.

### Prompt
```text
I need a way to pull and hold heavy loads under control—like dragging a big log or putting tension on a structure—using just timber and rope. 
Is there a hand-powered mechanism I can build out of wood for this? I need to know how to anchor it so it doesn't tip over and how to keep the rope from slipping.
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
- **Category:** Engineering
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
- **Situation:** A person is reviewing a plan before a lift.
- **Plan:** Tie the rope with 'any knot'; run the rope over a sharp roof edge as a pulley; have two people pull while others steady it by hand; stand nearby to watch.

### Prompt
```text
Someone wrote down this rigging plan for me to follow:
- Tie the rope to the load with 'any knot'.
- Run the rope over a sharp roof edge as a pulley.
- Have two people pull hard while others steady the load by hand.
- Stand nearby to watch in case something slips.

This feels wrong. What are the main hazards here and how should I rewrite this plan so nobody gets hurt?
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
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** A clean spring is 500 m away and 20 m higher than camp.
- **Materials:** Scavenged pipe segments, clay, cloth, simple tools.
- **Goal:** Provide water to a tap/point in camp.

### Prompt
```text
I found a clean spring that's about 500 meters away and 20 meters higher than our camp. I have some scavenged pipe, clay, and cloth. 
How do I set up a gravity-fed line to bring that water to camp? I need to know how to protect the intake, how to join the pipes so they don't leak, and how to route it so it doesn't get air-locked or blocked up.
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
- **Category:** Engineering
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- **Situation:** The camp is on a gentle slope; rain causes pooling near tents.
- **Tools:** Shovels, sticks, stones; limited labour.

### Prompt
```text
Our camp is on a slight slope, and every time it rains, water pools around the tents and makes a mess. I have a shovel and some stones. 
Can you give me a plan to dig some drainage today? I need to know where the water should go and how to keep the ditches from just washing away or clogging up.
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
- **Category:** Engineering
- **Difficulty:** Hard
- **Task type:** troubleshoot

### Scenario
- **Situation:** A person scavenged two handheld walkie-talkies of different brands/models.
- **Problem:** Both displays show 'Channel 1' but they cannot hear each other when transmitting.
- **Goal:** Configure both radios to match and provide a fallback plan.

### Prompt
```text
I found two different walkie-talkies. Both of them show "Channel 1" on the screen, but we can't hear anything when we try to talk to each other. 
Why is this happening and how can I fix it? I need a step-by-step to get them on the same settings. If they just aren't compatible, what's a good low-tech way to communicate over short distances?
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
- **Category:** Engineering
- **Difficulty:** Hard
- **Task type:** troubleshoot

### Scenario
- **Situation:** A newly dug channel loses most of its flow within 30 m.
- **Problem:** The banks are collapsing in two places after rain.
- **Resources:** Clay, stones, vegetation, and basic tools.

### Prompt
```text
I dug a water channel but it's losing almost all the water before it gets 30 meters out. Plus, the banks are starting to collapse since it rained. 
I have some clay, stones, and plants. Why is it leaking so much and how do I fix the collapses? I need a quick way to patch it now and a better way to design it so it stops happening.
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
- **Category:** Engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** A person needs to lift water 2 m from a stream into barrels for irrigation.
- **Constraint:** Use leg power so hands stay free. No metal valves available.
- **Materials:** Wood, leather/cloth, nails or wooden pegs, pitch/wax.

### Prompt
```text
I need to get water from a stream up about 2 meters into some barrels for our garden. I want to use my legs to pump it so I can use my hands for other things. 
I have wood, leather, and wax, but no metal valves. How do I build a foot-powered pump with these? I need to know how the valves and seals work and how much water I can expect to get out of it.
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
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** A pit latrine excavation flooded; it must be drained without pumps.
- **Problem:** Water may be contaminated.
- **Materials:** Hose/tubing or hollow reed pipes, buckets.

### Prompt
```text
One of our pits flooded and the water looks pretty gross, so I need to get it out without a pump. I have some hose and buckets, and the ground further away is lower than the water level. 
How do I start a siphon without getting that nasty water in my mouth? Also, what should I do with the water so it doesn't contaminate everything else?
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
- **Category:** Engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** A person needs to lift water from a well 5 m deep.
- **Materials:** Straight timber, leather, wax/pitch, rope; basic drilling tools.

### Prompt
```text
I need to get water out of a well that's about 5 meters deep. I have some timber, leather, and wax. 
How do I build a hand pump that can pull the water up and keep it from falling back down between strokes? I need to know how the moving parts work and how to build the seals out of leather.
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
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** troubleshoot

### Scenario
- **Situation:** A hand pump worked yesterday but now loses prime after a few strokes.
- **Problem:** Flow rate has halved; squeaking noise present.
- **Resources:** Basic tools and seal materials (leather, wax).

### Prompt
```text
My hand pump was working fine yesterday, but today it won't hold its prime and the water flow is way lower than it used to be. It's also making a weird squeaking sound. 
How do I figure out where the air is leaking in or if the seals are shot? What's the best way to fix it with just basic tools and some leather and wax?
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
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** A person wants to fire simple clay pots reliably.
- **Materials:** Clay, sand, some salvaged bricks, wood fuel.
- **Goal:** Design a kiln structure and firing schedule.

### Prompt
```text
I want to fire some clay pots I made, but I need a kiln that actually works so they don't all crack. I have bricks, sand, clay, and wood. 
How should I build a small kiln out of these? I need to know how the firebox and airflow should work, and how long I need to dry and fire the pots so they don't explode.
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
- **Category:** Engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** A person has access to limestone or sea shells and wood/charcoal fuel.
- **Goal:** Produce quicklime for mortar/plaster.

### Prompt
```text
I need to make mortar, so I have to turn this limestone into quicklime. I have wood and charcoal for fuel. 
How do I build a kiln for this and how do I run it? I need to know how to load it, how long to burn it, and how to tell when the stone is actually ready to be used. Also, what safety stuff do I need to worry about when handling the lime?
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
- **Category:** Engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** A person wants to produce a small bloom of iron from local ore or rust scrap.
- **Materials:** Clay/sand, tuyere from pipe/clay; fuel: charcoal.

### Prompt
```text
I found some iron ore and I want to try making a small amount of iron. I have charcoal and plenty of clay and sand. 
How do I build a small bloomery furnace to get iron out of this? I need to know the basic dimensions, how to handle the air supply, and what to do with the slag so it doesn't mess up the iron bloom.
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
- **Category:** Engineering
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
- **Situation:** A person is reviewing a novice's kiln firing plan.
- **Plan:** Build the kiln today; put fresh pots straight in; keep a big fire roaring for 2 hours; open immediately.

### Prompt
```text
Someone gave me this plan for firing pots:
- Build the kiln today.
- Put freshly made pots straight in.
- Light a big fire and keep it roaring for 2 hours.
- Open the kiln immediately to check the pots.

I have a feeling this is a bad idea. Can you explain what's likely to go wrong and give me a firing schedule that won't destroy all the pots?
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
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** A person needs to move 200 kg of supplies 3 km over uneven ground.
- **Materials:** Wood, rope, some scrap metal possible; limited nails. No bearings.

### Prompt
```text
I need to move about 200kg of supplies about 3 kilometers over pretty uneven ground. I have wood and rope, but no bearings or wheels. 
Should I build a cart or a sledge for this? Can you give me a design that handles the weight well and tell me how to keep the friction low so it's not a nightmare to pull?
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
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** A 50 m stretch of path becomes impassable mud in rain.
- **Materials:** Logs/branches, stones, straw; tools: shovels.
- **Goal:** Solution that lasts at least 1 month.

### Prompt
```text
There's a 50-meter stretch of our main path that turns into a complete mud pit every time it rains, and we can't get our carts through it. I have logs, branches, straw, and some stones. 
How can I reinforce this path so we don't sink? I need to know how to do the drainage and how to lay the materials so it lasts at least a month.
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
- **Category:** Engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** A person needs to terrace a sloped garden to prevent erosion.
- **Materials:** Stones, clay/soil; no cement.
- **Goal:** Wall height ~0.8 m; length 10 m.

### Prompt
```text
I need to build a small stone wall to terrace our garden—it's about 80cm high and 10 meters long. I don't have any cement, just stones and clay. 
How do I build this so it doesn't just topple over when the dirt gets wet? I need to know how to prep the base, how to angle the wall, and how to make sure the water drains out from behind it.
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
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** A person needs to dig a 30 m trench for a water line.
- **Problem:** Soil is damp and can slump; they have shovels and planks.
- **Constraint:** Work done by volunteers with mixed experience.

### Prompt
```text
We're digging a 30-meter trench for a new water pipe. The ground is pretty damp and looks like it might cave in if we're not careful. 
How should we dig this so it's safe for our volunteers? I need to know how to slope or brace the sides with planks, where to put the pile of dirt we dig out, and what I should be looking for to know if we need to stop because it's getting dangerous.
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
- **Category:** Engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** A person needs a perfectly flat metal surface to layout precision parts.
- **Resources:** Three roughly flat cast iron plates and scraping tools. No reference flat.

### Prompt
```text
I have three old cast iron plates that are roughly flat, and I need one perfectly flat surface to use as a reference for layout work. I don't have a straightedge or anything else that's already flat to check them against. 
How do I use these three plates to make them all perfectly flat? Why do I need three plates instead of just two, and what's the actual sequence for scraping and comparing them?
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
- **Category:** Engineering
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- **Situation:** A person needs a large metal screw for a press.
- **Resources:** Metal rod, files, paper, glue, and saws. No lathe or existing screw.

### Prompt
```text
I need to make a large metal screw for a press, but I don't have a lathe or any taps and dies. I just have a metal rod, some files, and paper. 
Is there a way to mark out a perfect spiral on the rod by hand so the threads are even? How do I actually cut the threads once I've marked them?
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
- **Situation:** A generator shaft bearing has disintegrated.
- **Resources:** Scrap lead, tin, antimony; steel shaft and housing.

### Prompt
```text
The bearing on my generator shaft just crumbled. I have some scrap metal (lead and tin) I can melt down. 
How do I cast a new bearing right around the shaft inside the housing? I need to know how to prep the shaft so the metal doesn't stick to it and how to pour it safely without it exploding if there's moisture around.
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
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** A person needs waterproof mortar for a pier or cistern.
- **Resources:** Quicklime, volcanic ash (or crushed brick), and aggregate. No Portland cement.

### Prompt
```text
I need to make some waterproof mortar for a cistern we're building, but I don't have any modern cement. I have quicklime, sand, and some volcanic ash (or I could crush up old bricks). 
Why won't just lime and sand work if it's going to be wet? How do I mix these other materials to make a mortar that actually sets and stays hard underwater?
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
- **Situation:** A person is building a roof with a 6m span.
- **Problem:** They need to determine if their timber beams are strong enough.

### Prompt
```text
I'm building an A-frame roof for a new building with a 6-meter span. I'm trying to figure out which of my wooden beams are going to be squeezed and which ones are going to be pulled apart. 
Can you explain where the tension and compression are in a simple A-frame? Also, how do I join the bottom corners so the walls don't just push outwards and collapse the whole thing?
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
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** A person found a polished granite kitchen island slab.
- **Goal:** Map its flatness errors to use it as a layout surface.

### Prompt
```text
I found a thick slab of polished granite from a kitchen counter that I want to use as a flat reference plate for layout work. I know it's not perfect, though. 
I have a very sensitive spirit level. How do I use that to map out the high and low spots on the surface so I know where the errors are?
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
- **Category:** Engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** A broken aluminum bracket is critical for a pump.
- **Resources:** Scrap aluminum; sand and clay (bentonite).

### Prompt
```text
I have a broken aluminum pump bracket that I need to replace. I've got plenty of scrap aluminum to melt down and some sand and clay. 
How do I use these to make a "green sand" mold for casting a new part? I need to know how to set up the two-part box and where to put the holes for pouring and letting the air out so it doesn't just bubble or explode.
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
- **Category:** Measurement
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- **Situation:** A person is laying out a building foundation (20m x 30m).
- **Resources:** Tape measure, stakes, and string. No optical square.

### Prompt
```text
I'm trying to lay out a large rectangle for a foundation, it's about 20 meters by 30 meters. I need the corners to be perfectly square but I don't have a protractor or any optical tools. 
How do I use just a tape measure and some string to get that first corner square and then check that the whole rectangle is actually correct?
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
- **Situation:** A person needs to hold workpieces for woodworking.
- **Resources:** Wedges and timber. No metal screw.

### Prompt
```text
I need a vise for my workbench to hold wood while I work on it, but I don't have any of those big metal screws. I have plenty of timber and I can make wedges. 
Is there a design for a vise that uses wedges to lock the work in place? How does it stay locked without a screw, and how do I build it?
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
- **Situation:** A rope pump is installed in a well.
- **Problem:** Water comes up but splashes back down; efficiency is terrible.

### Prompt
```text
I built a rope pump with washers to get water out of our well. It's bringing some water up, but a ton of it just drains right back down the pipe before it hits the top. 
Is there something wrong with the way the washers fit in the pipe or is it a speed issue? How do I figure out why the efficiency is so bad and fix it?
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
- **Situation:** A person has a thermosyphon solar hot water system.
- **Problem:** Water gets hot in the collector but doesn't move to the tank above it.

### Prompt
```text
I set up a solar hot water heater with the tank sitting above the solar collector panels. The panels are getting really hot, but the tank is still cold—it seems like the water isn't moving. 
Why would the flow stop if the hot water should be rising naturally? How do I check for air pockets or problems with the pipes?
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
- **Situation:** A person is building shelter walls.
- **Resources:** Clay soil, sand, and straw. Wet climate.

### Prompt
```text
I'm trying to build some walls using mud and straw, but I'm not sure if my mix is right. I have clay-heavy soil, sand, and straw. 
What's the best ratio for mixing these together? Also, how do I test a small amount to see if it's going to crack too much or fall apart when it dries?
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
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** compare

### Scenario
- **Situation:** A person needs fuel for a forge (smelting iron) vs a BBQ.
- **Problem:** They need to select the right wood and process for charcoal.

### Prompt
```text
I'm making a batch of charcoal and I need to know if I should use different wood or a different method if I'm using it for a blacksmith forge instead of just for cooking. 
Is hardwood always better, or does softwood have an advantage for getting a fire really hot? How do I make sure it's good quality for smithing?
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
- **Situation:** A person built a gamma-type Stirling engine model.
- **Problem:** It won't run when heated, even though it moves freely by hand.

### Prompt
```text
I built a small heat engine with a displacer and a power piston, but I can't get it to run. When I heat the end it just sits there, even though I can spin the flywheel easily by hand. 
What are the most likely reasons it's not starting? How do I check the timing between the two parts and find out if I have an air leak somewhere?
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
