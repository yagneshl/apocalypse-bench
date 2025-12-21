## MAT-201: Vulcanizing Rubber Latex
- **Category:** Materials
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The user has successfully tapped *Hevea brasiliensis* (rubber trees) and fashioned a pair of boots from the raw latex. However, the rubber remains in its natural thermoplastic state—becoming brittle in the cold and dangerously soft/sticky in the summer sun.
- **Resources:** The user has discovered a cabinet in an old workshop containing three unlabeled containers. They need to know which one (if any) will stabilize their boots and how to use it.

### Prompt
```text
I managed to make some boots out of raw rubber sap, but they are a mess. They practically started melting off my feet during a hike yesterday. I found three different jars in a shed, but I'm not sure what they are or if they can help:

1. A jar of fine white powder. When I dropped a pinch into some vinegar, it started fizzing like crazy.
2. A bucket of bright yellow, crumbly powder. It smells a bit like eggs.
3. A container of heavy, white crystals. I tasted a tiny bit and it just tastes like salt.

Can any of these be used to treat my rubber so it stops melting in the heat?
```

### Rubric (10 points)
1.  **Identification:** Correctlly identifies Jar #2 as **Sulfur** and explains that Jar #1 (Baking Soda) and Jar #3 (Table Salt) are irrelevant to the chemical process of curing rubber.
2.  **Terminology:** Identifies the required process as **Vulcanization**.
3.  **Mixing:** Instructs the user to thoroughly knead/mix the Sulfur powder into the raw rubber or latex.
4.  **Truth Anchor (The "Why"):** Explains that heat triggers the Sulfur atoms to form **cross-links** (or "sulfur bridges") between the long-chain polymer molecules (polyisoprene).
5.  **Structural Change:** Mentions that these bridges prevent the polymer chains from sliding past one another, which is why the material no longer melts.
6.  **Temperature:** Specifies the need for heat, ideally between **140°C and 160°C** (approx. 285°F–320°F).
7.  **Additives:** Suggests adding carbon black (soot/charcoal) for UV protection and increased tensile strength.
8.  **Forming:** Warns the user to shape the boots *before* the heating process, as vulcanized rubber is a thermoset and cannot be easily reshaped once cured.
9.  **Safety:** Notes that the process produces toxic/foul-smelling fumes (Sulfur Dioxide) and should be done outdoors or with ventilation.
10. **Structure:** The response is logical, moving from identification to chemistry, then to the practical step-by-step guide.

### Auto-fail (score = 0 if any)
-  Suggests using the baking soda or salt to "dry out" the rubber.
-  Suggests "smoking" the rubber as a permanent solution (smoking only preserves it; it does not prevent the thermoplastic melting behavior).
-  Fails to identify Sulfur as the active ingredient.

---

## MAT-202: Making Waterglass (Sodium Silicate)
- **Category:** Chemistry / Materials
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The user needs to preserve eggs for winter without refrigeration. 
- **Resources:** They have access to silica sand and a white powder derived from burning seaweed (Soda Ash), and a high-heat furnace.

### Prompt
```text
I need to keep a large batch of eggs fresh for the winter but I don't have a fridge. I heard you can make some kind of "liquid glass" to seal them. I have sand and some white ash from burning seaweed—how do I turn those into a preservative for the eggs?
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
- **Situation:** The user has a clay furnace for melting metal, but it is inefficient because the walls conduct heat away too quickly.
- **Resources:** They have clay, a large quantity of sawdust or rice husks, and water.

### Prompt
```text
I built a clay forge to melt down some metal, but I can't get it hot enough because the heat just leaks through the walls. I have plenty of clay and a huge pile of sawdust. Is there a way to make special bricks that will keep the heat inside the forge instead of letting it out?
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
- **Situation:** The user is setting up a workshop and needs a stable bench for heavy manual work (sawing, planing).
- **Resources:** Hand tools (saw, axe, chisel, mallet, brace/auger). They have very few nails and must rely on wooden joinery.

### Prompt
```text
I need to build a solid workbench that won't wobble when I'm sawing or planing wood. I only have a saw, an axe, some chisels, and almost no nails, so I'll need to use wooden pegs. How can I design and build one in about two days that stays flat and sturdy?
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
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.

---

## MAT-002: Make a tight wooden container without metal hoops
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The user needs to store dry grain safely away from pests.
- **Resources:** Wood, rope, and pitch or wax. They have basic hand tools but no metal hoops for traditional coopering and no plastic liners.

### Prompt
```text
I need a way to store my grain so pests can't get to it, but I don't have any metal to make hoops for barrels. How can I build a tight wooden container with a lid using just wood, rope, and some pitch or wax? How do I make sure it doesn't have gaps?
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
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-003: Repair a broken ladder safely using pegs and lashings
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** A wooden ladder has a cracked rung and a loose side rail. It must be made safe enough for roof work.
- **Resources:** Scrap wood, rope, and basic hand tools.

### Prompt
```text
One of the rungs on my wooden ladder is cracked and the side rail is starting to wobble. I need to get up on the roof safely. Can I fix this with some scrap wood and rope, or is it too dangerous? If it can be fixed, how do I reinforce it so it won't break while I'm on it?
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
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-004: Critique this joinery plan and improve it
- **Category:** Materials & manufacturing
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
- **Situation:** A novice has proposed a plan to build structures using green (unseasoned) wood and simple nailing without any triangulation or bracing.

### Prompt
```text
Someone told me I should just use green wood for all my building projects and just nail the joints together wherever the wood pieces meet. They said if it wobbles, I just need more nails and I don't need any special bracing. Does that actually work, or is it going to fail? If it's a bad plan, what should I do instead?
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Viably covers (correct + usable; mere mention earns 0): Use green wood for everything; Nail joints wherever pieces meet; No bracing needed if nails are tight.
3. Viably covers (correct + usable; mere mention earns 0): If it wobbles; add more nails.
4. Viably covers (correct + usable; mere mention earns 0): Explain what will fail; propose a better approach with pegs/joints/bracing.
5. Identifies at least 3 critical flaws/risks, prioritised by severity and reversibility.
6. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: Green wood shrinks as it dries, loosening nailed joints; nails alone do not prevent racking—bracing and proper joinery/pegs are needed for stiffness.
7. Addresses the specific problematic steps in the original plan.
8. Proposes a corrected plan that is concrete, staged, and feasible with stated resources.
9. Adds monitoring/feedback: what to observe/measure to know the plan is working.
10. Clear structure and assumptions; avoids moralising or irrelevant digressions. Keeps answer concise and actionable.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-005: Make pine pitch sealant for waterproofing
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** The user needs to seal seams on a roof and waterproof wooden buckets.
- **Resources:** Pine resin (resin), charcoal powder or ash, and plant fibers. They have a heat source and basic tools.

### Prompt
```text
I need to waterproof my roof seams and some wooden buckets. I have a bunch of pine resin and some charcoal ash. How do I turn these into a sealant that won't just crack? Also, how do I apply it safely so I don't burn myself or catch the whole pot on fire?
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
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-006: Make casein glue from milk for woodworking
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** The user has extra milk and needs a strong adhesive for furniture/woodworking.
- **Resources:** Milk, vinegar or lemon juice, lime or wood ash, and a cloth filter. No modern glues are available.

### Prompt
```text
I have a surplus of milk and I heard I can turn it into a strong glue for woodworking. I've got some vinegar and some wood ash—how do I actually make the glue, and how do I use it on wood joints? Is there anything it's not good for, like things that get wet?
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
9. Includes a verification/quality-control check.
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-007: Choose an adhesive for tool handles, pottery repair, and waterproofing
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** compare

### Scenario
- **Situation:** The user needs to solve three distinct problems: (A) fix a loose axe head, (B) repair a cracked clay pot, (C) waterproof a cloth tarp seam.
- **Resources:** They know how to make hide glue, starch paste, pine pitch, and lime-based putty.

### Prompt
```text
I have three things to fix: a loose axe head, a cracked clay cooking pot, and a leaky seam on a cloth tarp. I can make animal hide glue, starch paste, pine pitch, or lime putty. Which one should I use for each job so they actually last, and how can I test them before I commit?
```

### Rubric (10 points)
1. Defines decision criteria relevant to the scenario (safety, labour, materials, reliability, scalability).
2. Viably covers (correct + usable; mere mention earns 0): failure modes. Truth anchor: No single adhesive fits all jobs: moisture/heat resistance matters (e.g., pitch is water-resistant but heat-soft; casein is strong but water-sensitive; mechanical keying often beats glue alone).
3. Viably covers (correct + usable; mere mention earns 0): how to test before committing.
4. Compares the available options against those criteria (not just a list).
5. Recommends a choice and explains why it is best under the stated conditions.
6. Provides a staged implementation plan for the chosen option.
7. Identifies key risks/hazards of the recommendation and mitigations.
8. Provides a fallback option and triggers for switching.
9. Clear communication (bullets/table) and stated assumptions. 
10. Acknowledges constraints/uncertainty and how they change the ranking. Keeps answer concise and actionable.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-008: Design simple tests to compare homemade adhesives
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** compare

### Scenario
- **Situation:** The user has produced three different types of homemade glue but does not know which is superior for different conditions (strength vs. moisture).
- **Resources:** Scrap wood, rope, weights, and water.

### Prompt
```text
I've managed to make three different kinds of glue, but I have no idea which one is actually the strongest or which one will fall apart in the rain. I have some scrap wood and some weights—how can I set up a fair experiment to rank them so I know which one to use for my building projects?
```

### Rubric (10 points)
1. Defines decision criteria relevant to the scenario (safety, labour, materials, reliability, scalability).
2. Viably covers (correct + usable; mere mention earns 0): Design a small experiment to rank adhesives by strength; water resistance. Truth anchor: Adhesive tests must control variables (joint area, cure time, surface prep) and test relevant modes (shear/tension, wet/dry) or results are meaningless.
3. Viably covers (correct + usable; mere mention earns 0): controls; repeatability.
4. Viably covers (correct + usable; mere mention earns 0): how to record results.
5. Compares the available options against those criteria (not just a list).
6. Recommends a choice and explains why it is best under the stated conditions.
7. Provides a staged implementation plan for the chosen option.
8. Identifies key risks/hazards of the recommendation and mitigations.
9. Provides a fallback option and triggers for switching.
10. Clear communication (bullets/table) and stated assumptions. 

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-009: Make clay water jars and reduce leakage
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** The user needs large (10-20 L) jars for water storage. Previous attempts have resulted in jars that "sweat" or leak through the walls.
- **Resources:** Local clay and a simple pit kiln. No commercial glazes are available.

### Prompt
```text
I'm trying to make big clay jars to store water, but the ones I've made so far just let the water seep through the walls. I don't have any real glaze. How should I prepare the clay and fire it so the jars actually hold water? Are there any other ways to seal them after they're fired?
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
9. Includes a verification/quality-control check.
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-010: Produce simple clay roof tiles for a shed
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The user needs to produce a large quantity of weatherproof tiles for a shed roof.
- **Resources:** A team of 6 people, 2 weeks of time, local clay, and the ability to build a basic kiln.

### Prompt
```text
I need to roof a small shed with clay tiles in the next two weeks. I have five other people to help me. How should we set up our workflow so we can produce enough tiles? What kind of molds or drying racks do we need, and how do we fire them so they don't all warp or crack?
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
9. Includes a verification/quality-control check.
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-011: Troubleshoot: your pots crack during drying and firing
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** troubleshoot

### Scenario
- **Situation:** The user is experiencing a 50% failure rate; pots are cracking during drying or "exploding" during firing. The clay has fine sand, and the weather is currently hot and windy.
- **Resources:** Limited fuel and local clay.

### Prompt
```text
Half of my pots are cracking before I even fire them, and the ones that make it to the kiln often explode once it gets hot. It's really windy and hot here lately. What's causing this, and how can I fix it? Can you give me a small test plan to make sure the fix works before I waste more of my fuel?
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
10. Clear structure and assumptions; keeps advice realistic. 

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-012: Food-safe surface treatments for ceramics without modern glaze
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** The user needs to create cooking and storage vessels that are non-toxic and functional.
- **Resources:** Ash, clay slip, burnishing stones, and plant oils. No lead or modern chemicals are allowed.

### Prompt
```text
I want to make sure my clay cooking pots are safe to eat from and won't leak grease or soak up old food. I have wood ash, some smooth stones, and plant oils—what's the best way to treat the surfaces? Also, are there things I should definitely NOT use? How do I test if they're actually sealed?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): what NOT to use.
3. Viably covers (correct + usable; mere mention earns 0): how to test for porosity/leaching.
4. Truth anchor: Many traditional glazes (especially lead) are toxic; unglazed porous ceramics are not ideal for long-term wet food storage unless thoroughly cleaned/dried and used appropriately.
5. Gives an ordered, step-by-step procedure that a novice could follow.
6. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
7. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
8. Includes a verification/quality-control check.
9. Clear structure (headings/checklist); states assumptions; keeps preamble short.
10. Quantifies key parameters (ratios, timing, temperatures) or explains how to measure them.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-013: Make lime mortar from shells/limestone and use it in masonry
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The user needs to build a stone wall and plaster a room.
- **Resources:** Limestone or sea shells, wood/charcoal fuel for a kiln, buckets, sand, and water.

### Prompt
```text
I have a big pile of sea shells and limestone, and a way to burn them in a kiln. I need to make mortar for a stone wall and some plaster for the inside of my hut. How do I turn these stones into usable mortar? I'm worried about the safety since I heard it gets dangerously hot when you add water—how do I do this right?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints.
2. Viably covers (correct + usable; mere mention earns 0): Write a practical end-to-end plan: make quicklime; slake it; prepare lime putty.
3. Viably covers (correct + usable; mere mention earns 0): mix mortar; cure it.
4. Viably covers (correct + usable; mere mention earns 0): safety precautions; a small test wall plan.
5. Truth anchor: Lime mortar cures by carbonation (absorbing CO₂) and needs time/moisture; quicklime slaking is highly exothermic—mixing/curing practices matter as much as ratios.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check.
10. Clear structure (headings/checklist); states assumptions; keeps preamble short.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-014: Plaster a wall with lime plaster and avoid cracking
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** The user is plastering an interior stone or wattle-and-daub wall. The climate is currently very dry and windy, which is high-risk for lime plaster.
- **Resources:** Lime, sand, and water.

### Prompt
```text
I'm ready to plaster my interior walls to keep the dust down, but I'm worried it's going to crack because the air is so dry and windy here. How should I prep the wall, and what's the best way to apply the layers so the plaster stays solid and doesn't just flake off? How do I keep it from drying too fast?
```

### Rubric (10 points)
1. Directly answers the task.
2. Viably covers (correct + usable; mere mention earns 0): how to prevent rapid drying.
3. Viably covers (correct + usable; mere mention earns 0): cracking.
4. Truth anchor: Lime plaster cracks from shrinkage and rapid drying; thin coats, fibre reinforcement, and keeping it damp while curing reduce cracking and improve strength.
5. Gives an ordered, step-by-step procedure that a novice could follow.
6. Uses only the stated materials/tools.
7. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers.
8. Includes a verification/quality-control check.
9. Clear structure (headings/checklist); states assumptions.
10. Quantifies key parameters (ratios, dimensions, timing, etc.).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-015: Repair old brick/stone masonry without causing damage
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The user has found an old building made of soft, historical bricks that need repointing and crack repair.
- **Resources:** They can make lime mortar, but have no access to Portland cement.

### Prompt
```text
I found an old brick building I want to fix up, but the bricks are really soft and crumbly. I can make lime mortar, but I don't have any modern cement. How do I fix the cracks and joints without damaging the building? I heard that using the wrong kind of mortar can actually destroy old bricks—is that true?
```

### Rubric (10 points)
1. Directly answers the task.
2. Viably covers (correct + usable; mere mention earns 0): Explain how to choose an appropriate mortar; repoint safely.
3. Viably covers (correct + usable; mere mention earns 0): why overly hard mortar can be harmful.
4. Viably covers (correct + usable; mere mention earns 0): how to test a small area first.
5. Truth anchor: Hard cement can damage soft historic masonry by trapping moisture; repairs should use compatible, breathable mortar (often lime-based) and gentle repointing methods.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers.
9. Includes a verification/quality-control check.
10. Clear structure and actionable steps.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-016: Critique this mortar recipe and correct it
- **Category:** Materials & manufacturing
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
- **Situation:** The user is considering a recipe suggested by a neighbor: crushing raw limestone into powder and mixing it with water and sand to use immediately as a "quick-set" mortar.

### Prompt
```text
My neighbor says I can make mortar just by crushing up raw limestone into a fine powder, mixing it with sand and water, and slapping it onto my stone wall immediately. He says it will set quickly. Does this actually work? If it's a bad recipe, what am I actually supposed to do to make proper mortar?
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Viably covers (correct + usable; mere mention earns 0): Crush limestone into powder; Add water.
3. Viably covers (correct + usable; mere mention earns 0): sand; Use immediately as mortar; it will set quickly.
4. Viably covers (correct + usable; mere mention earns 0): Explain what is missing/wrong; provide a correct low-tech approach.
5. Identifies at least 3 critical flaws/risks.
6. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: Mortar that is too strong/too cement-like can crack masonry and trap moisture; lime mortars need correct aggregate and curing (damp, time) to carbonate and gain strength.
7. Addresses the specific problematic steps in the original plan.
8. Proposes a corrected plan that is concrete, staged, and feasible.
9. Adds monitoring/feedback: what to observe/measure to know the plan is working.
10. Clear structure and assumptions.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-017: Set up a simple forge and make a basic knife
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The user wants to create a functional utility knife for survival work.
- **Resources:** Scrap steel (springs or files), charcoal, a hammer, a heavy metal block (anvil substitute), and materials to make a bellows.

### Prompt
```text
I've got some old truck springs and a big pile of charcoal. I need to make a functional utility knife. How do I set up a simple forge, and what are the steps to shape the blade? Most importantly, how do I make the steel hard enough to stay sharp but not so brittle that it snaps the first time I use it?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources.
2. Viably covers (correct + usable; mere mention earns 0): safety.
3. Viably covers (correct + usable; mere mention earns 0): how to test the knife.
4. Truth anchor: A blade is made usable by heat treatment: harden (austenitise then quench) then temper to reduce brittleness; overheating and poor quench choices can ruin the steel.
5. Gives an ordered, step-by-step procedure that a novice could follow.
6. Uses only the stated materials/tools.
7. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers.
8. Includes a verification/quality-control check.
9. Clear structure (headings/checklist); states assumptions.
10. Quantifies key parameters (ratios, timing, temperatures) or explains how to measure them.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.
- Encourages working hot metal in enclosed spaces without ventilation.

---

## MAT-018: Make nails and simple fasteners from scrap
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** The user needs to produce hundreds of nails for a large construction project.
- **Resources:** Scrap iron or steel rod and a basic forge. They have a hammer and anvil.

### Prompt
```text
I need to make hundreds of nails for a building project and all I have is some scrap iron rods and my forge. Is there a specific way to forge them quickly so I'm not here for months? How do I make a jig to keep them all roughly the same size and head shape?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources.
2. Viably covers (correct + usable; mere mention earns 0): jigs/tools (nail header).
3. Viably covers (correct + usable; mere mention earns 0): how to standardise sizes.
4. Viably covers (correct + usable; mere mention earns 0): throughput estimates.
5. Truth anchor: Hand-forged nails are made by drawing a taper and upsetting a head at forging heat; output is limited by heat cycles and an anvil/heading setup—claims must match that reality.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers.
9. Includes a verification/quality-control check.
10. Clear structure (headings/checklist).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-019: Heat-treat a chisel for durability
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The user forged a chisel from spring steel, but the edge either bends immediately or chips off during use.
- **Resources:** Water or oil for quenching, a file, and a fire. They have no thermometer.

### Prompt
```text
I forged a chisel out of an old spring, but it's not working right—the edge either bends when I hit it or chips off like glass. I don't have a thermometer, so how can I tell when the metal is the right temperature to harden it? And how do I temper it so it's actually durable for heavy work?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources.
2. Viably covers (correct + usable; mere mention earns 0): Explain a practical hardening; tempering process.
3. Viably covers (correct + usable; mere mention earns 0): how to judge temperature without instruments.
4. Viably covers (correct + usable; mere mention earns 0): how to test the result.
5. Truth anchor: Chisels need a hard edge but tough body: harden then temper (often to a ‘straw’ range) so the edge doesn’t chip catastrophically under impact.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers.
9. Includes a verification/quality-control check.
10. Clear structure and actionable steps.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-020: Select safe scrap metals for tools and cookware
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** compare

### Scenario
- **Situation:** The user has a heap of mixed scrap: painted steel, galvanised steel, aluminum, copper, and unknown alloys. They need to make: (A) a cooking pot, (B) tool blades, (C) nails.
- **Resources:** Basic cleaning tools and a forge.

### Prompt
```text
I have a pile of scrap metal that's got some painted pieces, some galvanized stuff, and some aluminum and copper. I need to make a cooking pot, some knife blades, and a bunch of nails. Which types of scrap should I use for each job, and is there anything I should stay away from because of toxic fumes or leaching?
```

### Rubric (10 points)
1. Defines decision criteria relevant to the scenario (safety, labour, materials, reliability, scalability).
2. Viably covers (correct + usable; mere mention earns 0): cleaning steps. Truth anchor: Cookware/tool safety depends on metallurgy: avoid lead and zinc/galvanised scrap for food-contact and avoid unknown plated metals that can fume or leach when heated.
3. Viably covers (correct + usable; mere mention earns 0): safety concerns (fumes).
4. Viably covers (correct + usable; mere mention earns 0): coatings).
5. Compares the available options against those criteria (not just a list).
6. Recommends a choice and explains why it is best under the stated conditions.
7. Provides a staged implementation plan for the chosen option.
8. Identifies key risks/hazards of the recommendation and mitigations.
9. Provides a fallback option and triggers for switching.
10. Clear communication (bullets/table) and stated assumptions. 

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-021: Spin wool into yarn and weave a warm blanket
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** The user has raw sheep wool and needs to create warm bedding before the winter.
- **Resources:** Access to wool and basic wood tools to create their own textile equipment.

### Prompt
```text
Winter is coming and I need a warm blanket, but I've never made textiles before. I have a big pile of raw sheep wool and some wood to make tools. How do I go from a greasy fleece to a finished blanket? What kind of simple tools do I need to make for spinning the yarn and weaving the fabric?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources.
2. Viably covers (correct + usable; mere mention earns 0): Outline the process from raw fleece to a usable blanket; washing.
3. Viably covers (correct + usable; mere mention earns 0): carding; spinning.
4. Viably covers (correct + usable; mere mention earns 0): weaving; finishing.
5. Truth anchor: Yarn strength comes from controlled twist and fibre alignment; warp needs stronger, more tightly spun yarn, and consistent tension is key for weaving a durable blanket.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers.
9. Includes a verification/quality-control check.
10. Clear structure (headings/checklist).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-022: Make netting for carrying and simple fishing
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The user needs strong netting for hauling heavy loads and for catching fish.
- **Resources:** Plant fibers, wool, a knife, and a spindle. No synthetic rope is available.

### Prompt
```text
I need to make some strong nets for carrying heavy loads and for fishing, but I only have plant fibers and some wool. How do I turn the fibers into cord, and then how do I tie it into a net? What's the best knot to use so it doesn't just pull apart when it gets wet or heavy?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources.
2. Viably covers (correct + usable; mere mention earns 0): trade-offs between strength.
3. Viably covers (correct + usable; mere mention earns 0): material use.
4. Truth anchor: Net strength depends on mesh geometry and knot reliability; mesh size trades catch efficiency vs strength/drag, and wet fibres can stretch/loosen without proper knots/tension.
5. Gives an ordered, step-by-step procedure that a novice could follow.
6. Uses only the stated materials/tools.
7. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers.
8. Includes a verification/quality-control check.
9. Clear structure (headings/checklist).
10. Quantifies key parameters (ratios, dimensions, etc.).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-023: Dye fabric using plant dyes safely
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** The user wants to color cloth for morale or signaling purposes.
- **Resources:** Local plants, wood ash (alkali), salt, and a heat source.

### Prompt
```text
I want to dye some of my cloth bright colors so we can use them for signaling. I have some local plants and some wood ash—how do I get the color out of the plants and make it actually stay on the fabric so it doesn't wash out the first time it rains? Are there any safety things I should watch out for?
```

### Rubric (10 points)
1. Directly answers the task.
2. Viably covers (correct + usable; mere mention earns 0): Provide a safe low-tech dyeing process; dye extraction.
3. Viably covers (correct + usable; mere mention earns 0): optional mordants with safety cautions; rinsing.
4. Viably covers (correct + usable; mere mention earns 0): colourfastness testing.
5. Truth anchor: Many plant dyes need a mordant to bind well; pH and heat affect colour, and colourfastness must be tested (wash/light) rather than assumed.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers.
9. Includes a verification/quality-control check.
10. Clear structure (headings/checklist).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-024: Repair clothing and extend fabric life
- **Category:** Materials & manufacturing
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- **Situation:** Clothing is in short supply and the user needs to make their existing garments last as long as possible.
- **Resources:** Needle, thread, yarn, scrap patches, and a knife or scissors.

### Prompt
```text
My clothes are starting to fall apart and I can't get new ones. What's the most durable way to patch holes and fix ripped seams so they don't just tear open again? Which parts of my clothes should I focus on reinforcing first to keep them from wearing out in the first place?
```

### Rubric (10 points)
1. Directly answers the task.
2. Viably covers (correct + usable; mere mention earns 0): Write a practical guide to mending: patching; darning.
3. Viably covers (correct + usable; mere mention earns 0): reinforcing seams; preventing future wear.
4. Viably covers (correct + usable; mere mention earns 0): a triage system for what to repair first.
5. Truth anchor: Durable repairs use stitches that lock (e.g., backstitch) and patches aligned with fabric grain; reinforcing high-stress points prevents re-tears better than cosmetic stitching.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers.
9. Includes a verification/quality-control check.
10. Clear structure (headings/checklist).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-025: Make soap from wood ash lye and rendered fat
- **Category:** Materials & manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The user needs to produce usable hand and laundry soap for a community. 
- **Resources:** Wood ash, animal fat (tallow), pots, buckets, and stirring sticks. Limited PPE is available.

### Prompt
```text
I have a big container of animal fat and plenty of wood ash. I need to make soap so everyone can wash their hands and clothes properly. How do I turn the ash into lye, and how do I mix it with the fat so it actually turns into soap? I'm worried about the lye burning someone—what's the safest way to handle it?
```

### Rubric (10 points)
1. Directly answers the task.
2. Viably covers (correct + usable; mere mention earns 0): how to make lye; how to judge strength roughly.
3. Viably covers (correct + usable; mere mention earns 0): cooking/mixing.
4. Viably covers (correct + usable; mere mention earns 0): curing.
5. Truth anchor: Soap requires correct lye-to-fat balance; lye is caustic and incomplete saponification or excess lye makes soap unsafe—proper dilution, mixing, and curing/testing are essential.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers.
9. Includes a verification/quality-control check.
10. Clear structure (headings/checklist).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.
- Gives unsafe caustic handling (e.g., adding water to lye).

---

## MAT-026: Troubleshoot a failed soap batch (separating or caustic)
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** troubleshoot

### Scenario
- **Situation:** A soap-making attempt has failed; the batch has separated and the resulting product is causing chemical burns on the skin.
- **Resources:** They used ash lye of unknown strength and warm fat.

### Prompt
```text
I tried making a batch of soap, but it's a mess—it's separated into layers and the solid parts actually burn my skin when I touch them. Did I ruin it, or can I save this batch? Most importantly, how do I test if it's safe to use before I give it to anyone else?
```

### Rubric (10 points)
1. Restates the observed problem and defines what 'fixed' looks like.
2. Viably covers (correct + usable; mere mention earns 0): Diagnose likely failure modes; provide salvage options.
3. Viably covers (correct + usable; mere mention earns 0): how to test whether soap is safe to use; how to dispose of failures safely.
4. Lists plausible causes and ranks them by likelihood/impact. Truth anchor: Soap failures usually come from wrong lye concentration/ratio or poor mixing; ‘fixes’ must bring the batch back to correct stoichiometry and allow full cure, not just add perfume.
5. Gives a safe diagnostic sequence.
6. Proposes concrete fixes/repairs.
7. Includes safety precautions during diagnosis/repair (PPE, isolation, etc.). Includes at least 2 specific stop-work triggers.
8. Verifies the fix.
9. Includes prevention/maintenance steps.
10. Clear structure and assumptions.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.
- Gives unsafe caustic handling.

---

## MAT-027: Make simple candles or oil lamps for indoor lighting
- **Category:** Materials & manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** The user needs to provide safe lighting for an indoor workshop and a clinic.
- **Resources:** Tallow, beeswax, or plant oil. They have small jars/tins and various fibers for wicks.

### Prompt
```text
We need some light in the clinic and the workshop after dark. I can get tallow, beeswax, or plant oil. Should I make candles or an oil lamp, and how do I do it? How do I make wicks that don't produce a ton of smoke, and how do I keep them from being a fire hazard?
```

### Rubric (10 points)
1. Directly answers the task.
2. Viably covers (correct + usable; mere mention earns 0): wick selection.
3. Viably covers (correct + usable; mere mention earns 0): smoke reduction.
4. Viably covers (correct + usable; mere mention earns 0): fire safety.
5. Truth anchor: An oil lamp works by capillary action in the wick; wick size and airflow control smoke/soot, and stability/tip protection is essential to prevent fire.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers.
9. Includes a verification/quality-control check.
10. Clear structure (headings/checklist).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-028: Make and test a starch-based paste for paper/wood repairs
- **Category:** Materials & manufacturing
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- **Situation:** The user needs a simple, cheap adhesive for lightweight materials and for holding wood in place during assembly. The environment is currently very humid.
- **Resources:** Flour or starch, water, and a heat source.

### Prompt
```text
I need some cheap glue for paper and for holding wood pieces in place while I'm working on them. I have flour and water—how do I make a proper paste out of them? It's really humid here, so how do I keep the glue from going moldy? And how can I test how strong it is?
```

### Rubric (10 points)
1. Directly answers the task.
2. Viably covers (correct + usable; mere mention earns 0): Provide a recipe for starch paste; how to use it.
3. Viably covers (correct + usable; mere mention earns 0): mould prevention; limitations.
4. Viably covers (correct + usable; mere mention earns 0): a simple strength test.
5. Truth anchor: Starch paste bonds by drying and hydrogen bonding but is not water-resistant and can mould; paste strength depends on correct cooking/gelatinisation and thorough drying.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers.
9. Includes a verification/quality-control check.
10. Clear structure (headings/checklist).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MAT-101: Identification of Scrap Metals by Spark Testing
- **Category:** Materials
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** The user is scavenging steel and needs to differentiate between types for specific tools (a knife needs high-carbon, a prybar needs something tougher like mild steel).
- **Resources:** An angle grinder or grinding wheel and a heap of mystery scrap (mild steel, high carbon, cast iron).

### Prompt
```text
I've got a pile of scrap metal and I need to pick out the right pieces to make a knife and a heavy prybar. I have an angle grinder—how can I tell which piece is high-carbon steel and which is just mild steel or cast iron by looking at the sparks? What should I be looking for?
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
- **Situation:** The user needs to paint the interior of a clinic or dairy to keep it sanitary, but regular whitewash flakes off easily and rubs onto clothing.
- **Resources:** Lime, milk (or curds), water, and earth pigments.

### Prompt
```text
I need to paint the inside of my clinic so I can keep it clean, but the plain whitewash I used just rubs off on everyone's clothes. I have lime and some sour milk—how do I mix those into a paint that's actually waterproof and won't just flake away? How do I apply it so it lasts?
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
