## ENR-001: Design a fuel-efficient communal cooking stove
- **Category:** Energy
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
The person is responsible for feeding a community of 60 people, requiring two hot meals per day. They are currently using open fires, which are consuming far too much wood and creating a dangerous amount of smoke. They have access to bricks, stones, clay, metal pots, and basic hand tools.

### Prompt
```text
I’m trying to cook for about 60 people twice a day, but we're going through wood way too fast and the smoke is making everyone cough. We have plenty of bricks, stones, and clay, plus our cooking pots and basic tools. 

Can you design a stove for us that is much more efficient than an open fire? I need to know how to build it so the air flows right, how the pots should sit on it, and how to keep the smoke down. Also, please give me a checklist for keeping it safe and in good repair.
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
The person is in a cold winter climate where nights drop below 0°C. They need to keep a small sleeping area warm while using as little fuel as possible. They have no modern insulation, only raw materials like straw, leaves, wool, cloth, clay, and wood.

### Prompt
```text
It’s getting freezing at night—well below zero—and we don't have enough wood to keep a big fire going all night. I need to insulate my small shelter using stuff I can find like straw, leaves, wool, and clay. 

How should I go about fixing up the walls, roof, and floor to keep the heat in? I'm also worried about drafts and how to keep the place from getting damp or moldy inside. What's the best way to do this?
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
The person is observing a hut where an indoor fire is kept in a shallow pit. The space is constantly filled with smoke, and the inhabitants are suffering from chronic headaches and sore eyes. They have clay, bricks, metal pipe sections, and basic tools available to fix the situation.

### Prompt
```text
I’m looking at a setup where people are cooking over a shallow fire pit inside their hut. It’s a mess—the room is full of smoke, and everyone has red eyes and headaches. I have some bricks, clay, and some old metal pipe sections. 

Can you tell me why it’s so smoky and dangerous? I need a plan to fix the cooking and heating setup so it’s safer. What should I do about ventilation and how do I use the pipes for a chimney?
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
The person is managing a community of 100 people in a cold region. They rely on wood for cooking, heating, and small-scale processing (like boiling water). Wood is becoming scarce, and there is very little labor available for harvesting. They need a plan to survive the 3-month winter.

### Prompt
```text
I’m looking after 100 people and winter is coming. We use wood for everything—cooking, staying warm, and boiling water—but we’re short on wood and even shorter on people to go out and chop it. 

Can you help me write a fuel plan for the next 3 months? I need to know how much we’ll actually need, how we can use less, how to harvest it without ruining the forest, and the best way to store it. Also, what should the "emergency rules" be if we start running out too fast?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write a fuel management plan for 3 winter months; demand estimation.
3. Viably covers (correct + usable; mere mention earns 0): conservation measures; sustainable harvesting.
4. Viably covers (correct + usable; mere mention earns 0): storage; emergency rationing triggers.
5. Truth anchor: Wet wood wastes energy evaporating water; realistic fuel budgets must use the mass of dry fuel available and prioritise demand reduction (insulation, smaller heated space) over wishful consumption.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not FBviolate constraints or introduce toxicity.
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
The person needs to produce charcoal for a blacksmith forge and for cleaner indoor cooking. They do not have metal drums, only shovels, soil, water, and a wood supply.

### Prompt
```text
I need to make some charcoal for a forge and for cooking, but I don't have any metal drums or fancy equipment. I just have shovels, dirt, and wood. 

Can you explain how to make charcoal using a pit or a mound? I need to know how to control the air so I don't just burn the wood to ash, what the smoke tells me about the process, how to cool it down safely, and how to store the charcoal without it catching fire later.
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
The person has salvaged one steel drum and some basic pipe fittings. They want to produce higher-quality charcoal than a pit would allow, with less waste and smoke. They have basic workshop tools but no welding equipment.

### Prompt
```text
I’ve got an old steel drum and some pipe fittings, and I want to make high-quality charcoal. I want to waste less wood than the old "bury it in a pit" method and keep the smoke down. I don't have a welder, just basic tools. 

Can you help me design a way to make charcoal in this drum? How do I control the burn, where do the gases go, and how do I seal it up? I also need to know how to load and unload it safely.
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
The person tried making charcoal using a mound covered with soil, lit from one end. However, the result was mostly ash and tiny fragments. The weather is currently very windy and dry.

### Prompt
```text
I tried making a batch of charcoal by covering a wood mound with dirt and lighting it, but when I opened it up, it was almost all ash and tiny bits. It’s been really windy and dry lately. 

What did I do wrong? Can you help me figure out why it’s over-burning and how to fix it for the next batch? I need to know what to watch for while it's burning and exactly when I should shut it down.
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
A workshop requires charcoal weekly for forging. The local woodland is limited, and the person wants to ensure they don't deplete the resource. They have a team of 8 people working part-time.

### Prompt
```text
We need a steady supply of charcoal for our forge every week, but the trees around here aren't unlimited and I don't want to clear-cut the whole area. I have 8 people who can help part-time. 

How can we set up a charcoal plan that won't destroy the local woods? I need to know about things like coppicing or replanting, how much wood we actually need to get a certain amount of charcoal, and when we should be doing the cutting and burning throughout the year.
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
The person has access to animal manure and food scraps from a group of 30 people. The climate is mild, but winter nights can drop to 5°C. They have barrels, some salvaged hoses, and valves.

### Prompt
```text
We have about 30 people here and plenty of animal manure and food scraps going to waste. I want to turn that waste into gas we can use for cooking. We’ve got some barrels, hoses, and valves we’ve scavenged. 

Can you show me how to build a simple system to do this? I need to know how to handle the "fuel" (the manure and scraps), how to build the digester and store the gas, how to make a burner, and what I need to check to make sure it doesn't leak or blow up.
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
A biogas digester was started 3 weeks ago but is producing almost no gas. The feedstock is a mix of manure and vegetable scraps. The system currently has a strong sour smell and a visible layer of scum has formed inside.

### Prompt
```text
I set up a biogas digester three weeks ago using manure and food scraps, but I’m barely getting any gas out of it. It smells really sour and there’s a thick layer of scum on top. 

What’s going wrong? Can you help me figure out why it’s not working and give me a step-by-step plan to get it back on track? Tell me what I should be looking at or measuring to know if it's getting better.
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
A team is planning to run biogas pipes into a small, enclosed kitchen and store the gas in a large plastic bag near the stove. They haven't performed any leak testing yet. The person needs to evaluate the safety of this setup.

### Prompt
```text
Some of my group want to run our biogas pipes right into the kitchen and just keep the gas in a big plastic bag next to the stove so it's easy to use. They haven't checked for leaks yet. 

This feels a bit sketchy to me. Can you list the biggest hazards here? I need you to rewrite the plan so we don't end up blowing ourselves up or suffocating. How do we do a proper leak test, and how do we keep the kitchen air safe?
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
The person has a lot of digestate (slurry) from their biogas digester and wants to use it as fertilizer for their crops. There are local waterways nearby that they need to protect from runoff.

### Prompt
```text
I’ve got all this leftover slurry from our biogas digester and I want to use it to help our garden grow, but I don't want to make people sick or pollute the nearby creek. 

What are the rules for handling this stuff and putting it on the soil safely? When is the best time to do it? Should I dilute it or compost it first? And how do I make sure it doesn't just wash away into the water when it rains?
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
The person has a stream with a small 0.5m drop and decent flow. They need mechanical power for a grain mill. They have wood, rope, and some scrap metal for an axle. They need to protect the system from debris and flooding.

### Prompt
```text
There’s a stream near us with a little half-meter drop. I want to build a waterwheel to help us grind grain so we don't have to do it by hand. I have wood, rope, and some scrap metal for an axle. 

Can you help me design a waterwheel system? I need to know how to set up the intake so it doesn't get clogged with sticks, what kind of wheel is best for such a small drop, how to make the shaft and bearings, and how to get the power to the mill. Also, how do I keep it from getting washed away if the stream floods?
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
The person lives in an area with steady winds but frequent gusts. They need to pump water for livestock and irrigation using wood, cloth, rope, and basic fasteners.

### Prompt
```text
We have plenty of wind here, but it's gusty. I need to build a windmill to pump water from our well for the animals and the garden. I’ve only got wood, some heavy cloth, rope, and basic nails/bolts. 

Can you show me a simple windmill design and how to connect it to a pump? I especially need to know how to keep it from spinning too fast and breaking when the wind picks up, how to anchor it down, and what I need to do to keep it running smoothly.
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
A small hydro system is clogging daily with leaves and sticks, which threatens the power for refrigeration and medical lighting. The person has screens and a few people who can help with a rotation, but they need a more robust plan and design.

### Prompt
```text
Our little water-power setup keeps getting clogged with leaves and gunk every single day, and if the power goes out, our fridge and clinic lights fail. We have screens and rakes, and I can get people to help on a schedule. 

Can you help me design a better intake so it doesn't clog so easily? I need a solid maintenance plan, a backup option so the power doesn't just cut out, and a safety guide for people working near the fast water to clean it.
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
The person has a rotating shaft coming off a waterwheel. They need to use it to power a grain mill and a simple lathe. They only have wood, leather, rope, and minimal metal.

### Prompt
```text
I’ve got a shaft spinning from our waterwheel, but now I need to actually make it turn our grain mill and a small lathe I’m building. I’ve only got wood, leather, and rope to work with. 

How do I use belts or ropes to drive these tools? I need to know how to line them up and keep them tight so they don't slip. Also, how do I build guards so no one gets caught in the ropes, and how do I stop the tools safely without stopping the whole waterwheel?
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
The person has mechanical power from a waterwheel. They have salvaged a few DC motors, some wire, and several old car batteries. They want to set up a system to charge the batteries for lighting and a radio.

### Prompt
```text
I’ve got a waterwheel spinning and I’ve managed to find some DC motors, wire, and a few old car batteries. I want to use the wheel to charge the batteries so we can have lights and use our radio at night. 

How do I set this up? I need to know how to wire it all together, how to keep the voltage from getting too high and frying things, where to put fuses, and how to make sure the batteries don't build up dangerous gases.
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
The person needs to wire a clinic and workshop for night-time use. They have a 12V battery bank and some LED strips and car bulbs. They have salvaged wire, switches, and some fuses.

### Prompt
```text
I need to get some lights working in our medical clinic and the workshop. We have a bank of 12V batteries and a mix of LED strips and old car bulbs. I’ve scavenged some wire, switches, and a few fuses. 

Can you help me design a 12V wiring system for the buildings? I need to know how to choose the right wire size so things don't get hot, where the fuses and switches should go, and how to make sure we don't cause a fire or short everything out.
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
A 12V electrical system is acting up. Whenever the lights are turned on, the radio resets itself. The person noticed that one section of the wiring feels warm to the touch. They have no multimeter, just basic tools.

### Prompt
```text
Our 12V battery system is doing something weird. Whenever I turn the lights on, the radio shuts off and restarts. I also felt the wires in one spot and they’re getting pretty warm. I don't have a multimeter, just some basic tools. 

Can you help me figure out what's wrong? I need a step-by-step way to find the fault and fix it. How do I make the connections better so this stops happening?
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
The person has several salvaged lead-acid batteries of unknown age and condition. These will be charged daily and kept near a workshop area where children are often present. They need a formal protocol for handling them.

### Prompt
```text
I’ve got a bunch of old car batteries we scavenged. We're going to be charging them every day and keeping them in the workshop area. There are kids around here, so I need to be careful. 

Can you write up a simple guide for how we should handle and look after these batteries? I need to know where to put them for air flow, what to do if the acid spills, the rules for charging them safely, and a checklist of what to look for when I'm checking them every day.
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
Tristan is helping a settlement of 120 people in a temperate climate with a nearby stream and woods. They want to move from having almost nothing to having reliable cooking, heat, mechanical power, and basic light over the next two years.

### Prompt
```text
I’m working with a group of 120 people. We have a stream and some woods nearby, but right now we’re starting from scratch. We want to get to a point where we have reliable cooking and heat, some machines to help with work, and basic lighting. 

Can you give me a 2-year roadmap for this? Break it down into the first 3 months, the first year, and the second year. I need to know what we should build first, what skills people need to learn, and how we can tell if we're actually making progress.
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
The person has enough labor and materials to start exactly one major project this month. Their goal is to reduce the community's fuel burden. The options are a charcoal kiln, a biogas digester, or a waterwheel. They have 8 people available.

### Prompt
```text
I’ve only got 8 people and enough supplies to start one big project this month. We really need to stop using so much wood. Should we build a charcoal kiln, a biogas digester, or a small waterwheel? 

Tell me which one is best to do right now and why. What are we missing out on by not doing the others, and what are the risks? Also, tell me what we should plan to do next month once the first one is running.
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
An enthusiastic but inexperienced person has proposed a plan to immediately switch the community to high-tech energy. The plan involves building solar panels and lithium batteries from scratch to power electric stoves and stop using wood entirely.

### Prompt
```text
One of the guys here is really excited and wants us to stop using wood right away. He’s proposed that we build our own solar panels from scratch, make lithium batteries, and use electric stoves for all our cooking. 

Can you tell me if this is actually realistic for us in the short term? If not, why not? I need a better, more feasible roadmap that we can actually achieve with basic skills.
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
A massive storm has destroyed most of the community's stored firewood just as winter is beginning. Being able to cook and boil water for safety is critical. They have some tools left and can gather loose biomass.

### Prompt
```text
A huge storm just hit and ruined almost all of our dry firewood. Winter is just starting and we’re in trouble—we need to be able to cook and boil our water to stay healthy. We still have some tools and we can find some brush and biomass. 

Can you help me write a 2-week emergency energy plan? We need to know how to ration what's left, what else we can burn, how to make it last longer, and how to stay safe if we're using weird fuels or different stoves.
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
