## MEAS-201: Creating a Vernier Scale
- **Category:** Measurement
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- **Situation:** The person is making a precise machine part and needs to measure dimensions down to 0.1 millimeters. However, they only have a standard ruler with 1 mm markings, a metal scribe, and a strip of scrap metal to work with.

### Prompt
```text
I'm trying to measure a part really accurately, but my ruler only has 1 mm marks on it. I need to get it down to a tenth of a millimeter (0.1 mm). Is there a way I can make some kind of sliding tool or an attachment out of a strip of metal that would let me read those tiny fractions? How do I mark it out so the lines actually line up correctly?
```

### Rubric (10 points)
1. Identifies the device as a **Vernier Scale**.
2. Principle: The sliding scale uses a different spacing than the main scale.
3. Construction: Take a length of **9 mm** on the sliding scale.
4. **Truth Anchor:** Divide that 9 mm length into **10 equal segments**.
5. Math: Each sliding division is now 0.9 mm. The difference between a main mark (1.0) and a slide mark (0.9) is 0.1 mm.
6. Reading: The mark on the slider that lines up perfectly with a mark on the main ruler indicates the decimal value (e.g., 3rd line aligns = 0.3 mm).
7. Clear instructions on marking/dividing.
8. Actionable steps.
9. Example of a reading.
10. Application constraints (scribing accuracy).

### Auto-fail (score = 0 if any)
- Suggests just "looking closer" or magnifying the 1mm marks.

---

## MEAS-101: Determine latitude at night
- **Category:** Measurement
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** The person is lost in the Northern Hemisphere at night. They need to determine their latitude to figure out their position. They have access to basic materials: a straight stick, a protractor, some string, and a small weight.

### Prompt
```text
I'm stuck outside at night in the Northern Hemisphere and I've lost my way. I have a protractor, some string, a heavy nut for a weight, and a stick. How can I use the stars to figure out my latitude? I need a step-by-step on how to find the right star and how to use these tools to get an actual degree measurement.
```

### Rubric (10 points)
1. Directly answers the task.
2. Truth anchor: In the Northern Hemisphere, the altitude of the North Celestial Pole above the horizon equals your latitude.
3. Finding the reference point: Identify the Little Dipper/Ursa Minor, or use the Big Dipper’s pointer stars to locate the star near the north celestial pole.
4. Measuring angle: Quadrant (Quarter circle with plumb bob). Sight along top edge to star, read string angle.
5. Accuracy check (hand widths: pinky \( \sim 1^\circ \), fist \( \sim 10^\circ \)).
6. Correction: Horizon dip (minor, but good to mention).
7. Southern hemisphere variation (Southern Cross/no pole star).
8. Clear structure.
9. Actionable steps.
10. Limitation: Doesn't give Longitude.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MEAS-102: Estimating Longitude (Local Noon Drift)
- **Category:** Measurement
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The person needs to find their longitude. They have a digital watch that is still functioning and set to GMT (London time). They have a clear sunny day and can set up a basic sun dial.

### Prompt
```text
I have a digital watch that is still set to London time (GMT), but I'm lost and need to know my longitude. I can see the sun and I have a stick I can put in the ground. How do I find "local noon" here, and what's the math to turn the time on my watch into my East/West position?
```

### Rubric (10 points)
1. Directly answers the task.
2. Concept: Earth spins 15 degrees per hour.
3. Method: Stick in ground. Mark shadow tip every 10 mins. Shortest shadow = Local Noon (Sun highest).
4. Calculation: Compare Local Noon time on watch to 12:00 GMT.
5. Example: If Local Noon happens at 14:00 GMT, you are 2 hours "behind" the sun -> 30 degrees West.
6. Truth anchor: 1 hour difference = 15 degrees longitude. Earlier = East, Later = West.
7. Equation of Time note (Sun isn't perfectly consistent, varies \( \pm 16 \) mins), nice to have but not auto-fail.
8. Clear structure.
9. Actionable steps.
10. Limitation: Accuracy depends on exact determination of shortest shadow.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MEAS-103: Multiply large numbers without a calculator
- **Category:** Measurement
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The person is performing engineering tasks that require multiplying large numbers and finding square roots, but no calculators are available. They have scrap wood, paper, and a ruler to build a manual calculating aid.

### Prompt
```text
I'm doing some calculations for a project and I don't have a calculator. I remember seeing these old sliding rulers made of wood or paper that could multiply big numbers just by moving them back and forth. How do I actually make one of those using a regular ruler to mark the lines? What is the math principle that makes the markings work?
```

### Rubric (10 points)
1. Directly answers the task.
2. Math principle: \( \log(a \times b) = \log(a) + \log(b) \).
3. Construction: Mark two strips with logarithmic spacing (1 at start, 10 at end, 2 is at 30.1% distance, etc.).
4. Operation: Slide scale B's "1" to align with Scale A's number "2". Look at Scale B's "3". The aligned number on Scale A is the answer (6).
5. Truth anchor: Adding physical distance on a log scale represents multiplication of the values.
6. Verification points (\( \log(10)=1 \), \( \log(1)=0 \)).
7. Clear structure.
8. Actionable steps.
9. Precision limitation (reading the markings).
10. Mentioning Trig scales (optional).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MEAS-104: Measure humidity with wet/dry thermometers
- **Category:** Measurement
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** The person needs to monitor humidity for a greenhouse or medical area but lacks a dedicated hygrometer. They happen to have two standard liquid thermometers and basic materials like cloth and water.

### Prompt
```text
I need to keep track of the humidity in my greenhouse, but I don't have a humidity sensor. I do have two regular thermometers, though. Is there a way to use them to figure out how much moisture is in the air? I've heard you can use a wet cloth for this, but I don't know the steps or how to read the results.
```

### Rubric (10 points)
1. Directly answers the task.
2. Setup: One bulb dry. One bulb wrapped in wet cloth (wick), swung or fanned (air movement is key).
3. Truth anchor: Water evaporates from the wet bulb, cooling it. Drier air = faster evaporation = greater temperature difference (depression).
4. Reading: If temps are identical, humidity is 100%. Big difference = dry air.
5. Need for a chart (or math estimation).
6. Water purity (distilled/rain water preferred).
7. Clear structure.
8. Actionable steps.
9. Sling psychrometer concept.
10. Accuracy limitations.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MEAS-105: Calibrating a Balance Scale with Coins
- **Category:** Measurement
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- **Situation:** The person has a simple beam balance scale and needs to weigh out a specific amount (5 grams) of medicine or chemicals. They have no official weights but do have standard modern coins in their pocket.

### Prompt
```text
I have a basic beam scale but no weights for it. I need to weigh out exactly 5 grams of something. Can I use common coins as a substitute for weights? Which ones should I use to get exactly 5 grams, and are there any tips for making sure the measurement is actually accurate?
```

### Rubric (10 points)
1. Directly answers the task.
2. Reference facts: US Nickel = 5.00g (new). US Penny (post-82) = 2.5g. Euro 1 cent = 2.30g, etc. (Must list a valid known weight).
3. Truth anchor: Coins are minted to tight tolerances. They make excellent emergency calibration weights.
4. Zeroing the scale.
5. Using water as a secondary check (5g = 5ml).
6. Clear structure.
7. Actionable steps.
8. Mentioning wear on old coins reduces weight.
9. Stacking for larger weights.
10. Sensitivity check.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MEAS-106: Estimate distance across a river with parallax
- **Category:** Measurement
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- **Situation:** The person is standing on the edge of a river and needs to estimate the distance to a landmark on the opposite side. They have no tools, measuring tapes, or equipment.

### Prompt
```text
I'm standing at a river and I need to figure out how far it is to the other side, but I don't have a rangefinder or even a ruler. I remember there's some kind of trick using your thumb or your eyes to estimate distance. Can you walk me through how to do that step-by-step?
```

### Rubric (10 points)
1. Directly answers the task.
2. Method: Hold thumb at arm's length. Close left eye, align thumb with target. Switch eyes. Thumb "jumps" sideways.
3. Estimate the lateral jump distance at the target (e.g., "it jumped half a house width, say 5 meters").
4. Multiplier: Ratio of (Arm length) to (Distance between eyes) is roughly 10:1.
5. Truth anchor: Distance = (Lateral Jump) x 10.
6. Example calculation.
7. Limitations.
8. Clear structure.
9. Actionable steps.
10. Accuracy (rough estimate).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MEAS-001: Create a community length standard and basic measuring tools
- **Category:** Measurement
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
(omitted)

### Prompt
```text
"I don't have any rulers or tape measures, but I need to make some tools and furniture that actually fit together. Can you tell me how to make a standard ruler from scratch using wood or scrap metal? I also need to know how to make a perfect right angle and a straightedge so things aren't wonky, and how to mark it out into smaller units."
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a length standard system; how to reproduce it.
3. Viably covers (correct + usable; mere mention earns 0): making a straightedge; a right angle.
4. Viably covers (correct + usable; mere mention earns 0): a method to mark subdivisions.
5. Truth anchor: A measurement standard must be shared and repeatable: keep a protected ‘master’ reference and routinely calibrate working tools against it to prevent drift.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- A measurement standard must be shared and repeatable: keep a protected ‘master’ reference and routinely calibrate working tools against it to prevent drift.

### Reference facts (for judge)
- A measurement standard must be shared and repeatable: keep a protected ‘master’ reference and routinely calibrate working tools against it to prevent drift.

---

## MEAS-002: Survey and lay out a rectangular building footprint accurately
- **Category:** Measurement
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
(omitted)

### Prompt
```text
"I'm trying to mark out the ground for a 6m by 4m workshop, but the ground is really bumpy and I only have some rope, stakes, and a plumb line. How do I make sure the corners are perfectly square and the walls are the right length even with the uneven ground? How do I check it's not lopsided?"
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): methods to compensate for uneven ground.
3. Viably covers (correct + usable; mere mention earns 0): to verify diagonals.
4. Truth anchor: A right angle can be constructed and checked with a 3–4–5 triangle and by verifying equal diagonals; without such checks, small errors compound.
5. Gives an ordered, step-by-step procedure that a novice could follow.
6. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
7. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
8. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
9. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers.
10. Quantifies key parameters (ratios, dimensions, timing, rates, temperatures) or explains how to measure them — and sanity-checks plausibility. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- A right angle can be constructed and checked with a 3–4–5 triangle and by verifying equal diagonals; without such checks, small errors compound.

### Reference facts (for judge)
- A right angle can be constructed and checked with a 3–4–5 triangle and by verifying equal diagonals; without such checks, small errors compound.

---

## MEAS-003: Build a simple angle/level tool and use it
- **Category:** Measurement
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
(omitted)

### Prompt
```text
"I need to build a roof and make sure the water drains off properly, but I don't have a spirit level. Can you show me how to build a tool using string, weights, and wood to measure angles and check if things are level? Also, how do I make sure the tool itself is accurate?"
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a simple clinometer or plumb-bob level tool.
3. Viably covers (correct + usable; mere mention earns 0): calibration.
4. Viably covers (correct + usable; mere mention earns 0): how to use it for roof pitch/drainage.
5. Truth anchor: A plumb line gives true vertical and a water level gives true horizontal; these are robust low-tech references for angles/levels.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- A plumb line gives true vertical and a water level gives true horizontal; these are robust low-tech references for angles/levels.

### Reference facts (for judge)
- A plumb line gives true vertical and a water level gives true horizontal; these are robust low-tech references for angles/levels.

---

## MEAS-004: Critique this measurement approach and improve it
- **Category:** Measurement
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
(omitted)

### Prompt
```text
"Some people here want to build things using the leader's hand span as the 'standard' inch, and they're just eyeballing the cuts and sanding them down if they don't fit. That sounds like a disaster for making parts that fit together. Can you explain why this is a bad idea and give us a better way to have a measurement system everyone can use?"
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Viably covers (correct + usable; mere mention earns 0): Use the leader's hand span as the unit; Everyone measures by eye; If parts don't fit.
3. Viably covers (correct + usable; mere mention earns 0): sand them; Explain problems.
4. Viably covers (correct + usable; mere mention earns 0): propose a better; repeatable measurement system.
5. Identifies at least 3 critical flaws/risks, prioritised by severity and reversibility.
6. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: Uncalibrated measures create hidden error; even simple work needs a stable reference and repeatability checks to avoid compounding measurement drift.
7. Addresses the specific problematic steps in the original plan (mapped to each step/claim).
8. Proposes a corrected plan that is concrete, staged, and feasible with stated resources.
9. Adds monitoring/feedback: what to observe/measure to know the plan is working.
10. Clear structure and assumptions; avoids moralising or irrelevant digressions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Uncalibrated measures create hidden error; even simple work needs a stable reference and repeatability checks to avoid compounding measurement drift.

### Reference facts (for judge)
- Uncalibrated measures create hidden error; even simple work needs a stable reference and repeatability checks to avoid compounding measurement drift.

---

## MEAS-005: Build a balance scale and calibrate it using water
- **Category:** Measurement
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
(omitted)

### Prompt
```text
"I need to weigh out grain and some ingredients for medicine, but I have no scale or weights. How can I build a balance scale from wood and cord? And since I don't have any 'grams' or 'ounces,' how can I use water to create a set of standard weights that I can trust?"
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a beam balance; a way to create standard weights.
3. Viably covers (correct + usable; mere mention earns 0): calibration procedure.
4. Viably covers (correct + usable; mere mention earns 0): how to check drift over time.
5. Truth anchor: Water provides a calibration reference: about 1 L of water has mass ~1 kg (order-of-magnitude), enabling rough scale calibration with volume measures.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Water provides a calibration reference: about 1 L of water has mass ~1 kg (order-of-magnitude), enabling rough scale calibration with volume measures.

### Reference facts (for judge)
- Water provides a calibration reference: about 1 L of water has mass ~1 kg (order-of-magnitude), enabling rough scale calibration with volume measures.

---

## MEAS-006: Create reliable volume measures for cooking and ORS
- **Category:** Measurement
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
(omitted)

### Prompt
```text
"I need to make sure we're getting the right amounts for recipes and especially for mixing rehydration salts for sick people. I have different sized jars and bottles. How do I turn these into reliable measuring cups with clear marks? How do I make sure people don't grab the wrong ones?"
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): labelling.
3. Viably covers (correct + usable; mere mention earns 0): preventing mix-ups.
4. Truth anchor: Reliable volume measures come from calibration (marking with known water volumes) rather than ‘eyeballing’; dosing tasks (e.g., ORS) require repeatable measures.
5. Gives an ordered, step-by-step procedure that a novice could follow.
6. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
7. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
8. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
9. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers.
10. Quantifies key parameters (ratios, dimensions, timing, rates, temperatures) or explains how to measure them — and sanity-checks plausibility. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Reliable volume measures come from calibration (marking with known water volumes) rather than ‘eyeballing’; dosing tasks (e.g., ORS) require repeatable measures.

### Reference facts (for judge)
- Reliable volume measures come from calibration (marking with known water volumes) rather than ‘eyeballing’; dosing tasks (e.g., ORS) require repeatable measures.

---

## MEAS-007: Estimate food rations with uncertainty and sanity checks
- **Category:** Measurement
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
(omitted)

### Prompt
```text
"We have 300kg of grain and 60 people to feed. I need a solid plan to make this last as long as possible. How do I calculate the weekly rations, and how do I do an 'audit' every week to check how much is left? What do I do if we're eating it faster than expected or if my initial measurements were off?"
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Create a ration calculation method; a weekly audit routine.
3. Viably covers (correct + usable; mere mention earns 0): uncertainty ranges.
4. Viably covers (correct + usable; mere mention earns 0): how to adjust rations based on measured remaining stock.
5. Truth anchor: Sanity checks catch nonsense: adult food energy needs are on the order of ~2000 kcal/day; outputs that imply 200 or 20,000 kcal/person/day should trigger re-checks.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Sanity checks catch nonsense: adult food energy needs are on the order of ~2000 kcal/day; outputs that imply 200 or 20,000 kcal/person/day should trigger re-checks.

### Reference facts (for judge)
- Sanity checks catch nonsense: adult food energy needs are on the order of ~2000 kcal/day; outputs that imply 200 or 20,000 kcal/person/day should trigger re-checks.

---

## MEAS-008: Critique a 'scoop-based' dosing plan
- **Category:** Measurement
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
(omitted)

### Prompt
```text
"One of the guys suggested we just use an old scoop to dose out the chemicals and medicine, saying as long as it's the 'same scoop' for everyone, it's fine. I'm worried about people getting the wrong dose. Can you tell me the risks of using an unmarked scoop like that and suggest a safer way to do it?"
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Viably covers (correct + usable; mere mention earns 0): Plan:; Use one scoop per person.
3. Viably covers (correct + usable; mere mention earns 0): The scoop size doesn't matter as long as it's the same scoop; Explain risks.
4. Viably covers (correct + usable; mere mention earns 0): propose a safer measurement approach.
5. Identifies at least 3 critical flaws/risks, prioritised by severity and reversibility.
6. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: Scoop-based dosing is unreliable because powders have variable density and packing; safer dosing needs consistent measures or calibration by mass/volume.
7. Addresses the specific problematic steps in the original plan (mapped to each step/claim).
8. Proposes a corrected plan that is concrete, staged, and feasible with stated resources.
9. Adds monitoring/feedback: what to observe/measure to know the plan is working.
10. Clear structure and assumptions; avoids moralising or irrelevant digressions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Scoop-based dosing is unreliable because powders have variable density and packing; safer dosing needs consistent measures or calibration by mass/volume.

### Reference facts (for judge)
- Scoop-based dosing is unreliable because powders have variable density and packing; safer dosing needs consistent measures or calibration by mass/volume.

---

## MEAS-009: Build a simple timekeeping system for work shifts
- **Category:** Measurement
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
(omitted)

### Prompt
```text
"We need to coordinate the night watch and water station shifts, but we don't have any clocks or watches. Can you help me set up a system to tell the time using the sun or a simple device I can build with wood and string? Also, what do we do when it's cloudy and the sun is hidden?"
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a timekeeping method (sundial; water clock.
3. Viably covers (correct + usable; mere mention earns 0): pendulum); how to calibrate.
4. Viably covers (correct + usable; mere mention earns 0): share it; how to handle cloudy days.
5. Truth anchor: Timekeeping drifts without reference; a shared routine with a repeatable physical process (e.g., marked shadow/pendulum) beats ‘whenever it feels like’ for shifts.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Timekeeping drifts without reference; a shared routine with a repeatable physical process (e.g., marked shadow/pendulum) beats ‘whenever it feels like’ for shifts.

### Reference facts (for judge)
- Timekeeping drifts without reference; a shared routine with a repeatable physical process (e.g., marked shadow/pendulum) beats ‘whenever it feels like’ for shifts.

---

## MEAS-010: Measure short time intervals for an experiment
- **Category:** Measurement
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
(omitted)

### Prompt
```text
"I'm trying to time how long things boil or ferment, usually between 1 and 30 minutes, but I don't have a stopwatch. Is there a way to build something like a pendulum or a water timer to do this accurately? How do I make sure it doesn't speed up or slow down over time?"
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): repeatability checks.
3. Truth anchor: A pendulum’s period depends mainly on length \( T \approx 2\pi\sqrt{L/g} \) for small swings; counting swings can measure short intervals more reliably than human counting alone.
4. Gives an ordered, step-by-step procedure that a novice could follow.
5. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
6. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
7. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
8. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers.
9. Quantifies key parameters (ratios, dimensions, timing, rates, temperatures) or explains how to measure them — and sanity-checks plausibility.
10. Anticipates common failure modes and provides troubleshooting steps. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- A pendulum’s period depends mainly on length \( T \approx 2\pi\sqrt{L/g} \) for small swings; counting swings can measure short intervals more reliably than human counting alone.

### Reference facts (for judge)
- A pendulum’s period depends mainly on length \( T \approx 2\pi\sqrt{L/g} \) for small swings; counting swings can measure short intervals more reliably than human counting alone.

---

## MEAS-011: Synchronise time across two nearby settlements
- **Category:** Measurement
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
(omitted)

### Prompt
```text
"There's another group of survivors about 2km away. We want to meet up for trade and coordinate our tasks, but our 'clocks' are always out of sync. How can we get both settlements on the exact same time without radios? What's the best way to signal each other, and what do we do if we miss a signal because of fog?"
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a time synchronisation method; a protocol.
3. Viably covers (correct + usable; mere mention earns 0): error bounds.
4. Viably covers (correct + usable; mere mention earns 0): how to handle missed signals.
5. Truth anchor: Synchronisation requires a shared reference event and accounting for travel/communication delay; without a protocol, ‘same time’ quickly diverges between settlements.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Synchronisation requires a shared reference event and accounting for travel/communication delay; without a protocol, ‘same time’ quickly diverges between settlements.

### Reference facts (for judge)
- Synchronisation requires a shared reference event and accounting for travel/communication delay; without a protocol, ‘same time’ quickly diverges between settlements.

---

## MEAS-012: Critique an uncalibrated time standard
- **Category:** Measurement
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
(omitted)

### Prompt
```text
"Someone suggested we use the length of a popular song to measure 'one minute' for our tasks. I think that's going to cause problems. Can you explain why 'song time' is a bad standard for work and help me come up with a better way to measure a minute using just basic materials?"
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Viably covers (correct + usable; mere mention earns 0): Define 1 minute as the length of a song people know.
3. Viably covers (correct + usable; mere mention earns 0): Explain why this is unreliable.
4. Viably covers (correct + usable; mere mention earns 0): propose a better standard with materials available.
5. Identifies at least 3 critical flaws/risks, prioritised by severity and reversibility.
6. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: A time standard without calibration will drift; periodic re-synchronisation to an external cue (sun/noon) or a master reference is necessary for consistency.
7. Addresses the specific problematic steps in the original plan (mapped to each step/claim).
8. Proposes a corrected plan that is concrete, staged, and feasible with stated resources.
9. Adds monitoring/feedback: what to observe/measure to know the plan is working.
10. Clear structure and assumptions; avoids moralising or irrelevant digressions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- A time standard without calibration will drift; periodic re-synchronisation to an external cue (sun/noon) or a master reference is necessary for consistency.

### Reference facts (for judge)
- A time standard without calibration will drift; periodic re-synchronisation to an external cue (sun/noon) or a master reference is necessary for consistency.

---

## MEAS-013: Create a safe thermometer or temperature reference system
- **Category:** Measurement
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
(omitted)

### Prompt
```text
"I need to check the temperature for cooking and some metalwork, but I obviously don't have a thermometer. Can I make something using glass bottles and liquid to track heat? What can I use as 'anchor points' to calibrate it, and how accurate should I expect it to be? Make sure it's safe and doesn't use anything toxic."
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): calibration points.
3. Viably covers (correct + usable; mere mention earns 0): safety.
4. Viably covers (correct + usable; mere mention earns 0): expected accuracy.
5. Truth anchor: Fixed points anchor temperature: an ice–water mix is ~0°C and boiling water is ~100°C at sea level (lower at altitude); these references enable crude thermometry.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Fixed points anchor temperature: an ice–water mix is ~0°C and boiling water is ~100°C at sea level (lower at altitude); these references enable crude thermometry.

### Reference facts (for judge)
- Fixed points anchor temperature: an ice–water mix is ~0°C and boiling water is ~100°C at sea level (lower at altitude); these references enable crude thermometry.

---

## MEAS-014: Use boiling point as a process control cue
- **Category:** Measurement
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
(omitted)

### Prompt
```text
"I'm using boiling water to clean things and cook, but I'm up in the mountains. Does water boil at a different temperature here? Can I rely on 'the boil' to know it's hot enough, and are there any limits to using boiling as a guide for heat? How should I change my cooking if I'm high up?"
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Explain how boiling can be used as a cue; its limitations.
3. Viably covers (correct + usable; mere mention earns 0): altitude effects.
4. Viably covers (correct + usable; mere mention earns 0): simple ways to adjust practices.
5. Truth anchor: Boiling point depends on pressure/altitude; boiling indicates the maximum achievable temperature at that pressure, so it can’t prove ‘very hot’ beyond that.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Boiling point depends on pressure/altitude; boiling indicates the maximum achievable temperature at that pressure, so it can’t prove ‘very hot’ beyond that.

### Reference facts (for judge)
- Boiling point depends on pressure/altitude; boiling indicates the maximum achievable temperature at that pressure, so it can’t prove ‘very hot’ beyond that.

---

## MEAS-015: Design a simple fermentation monitoring protocol
- **Category:** Measurement
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
(omitted)

### Prompt
```text
"I'm starting to ferment some vegetables so they don't rot, but I'm terrified of accidentally poisoning people. Since I don't have a pH meter, how can I tell if a batch is safe just by looking at it or smelling it? What kind of 'check-up' routine should I have for the jars, and what are the absolute red flags that mean I have to throw it away?"
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a monitoring protocol; temperature considerations.
3. Viably covers (correct + usable; mere mention earns 0): visual/smell cues with caution.
4. Viably covers (correct + usable; mere mention earns 0): when to discard.
5. Truth anchor: Fermentation monitoring relies on observable indicators (CO₂ bubbles, smell, pH/acid taste) and temperature control; sealed vessels can overpressure.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Fermentation monitoring relies on observable indicators (CO₂ bubbles, smell, pH/acid taste) and temperature control; sealed vessels can overpressure.

### Reference facts (for judge)
- Fermentation monitoring relies on observable indicators (CO₂ bubbles, smell, pH/acid taste) and temperature control; sealed vessels can overpressure.

---

## MEAS-016: Critique unsafe measurement materials
- **Category:** Measurement
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
(omitted)

### Prompt
```text
"Someone here found a container of 'heavy silver liquid' and wants to use it to make a barometer. I think that's dangerous. Can you explain why we have to be careful about what materials we use for our tools, especially if they are going to be around food or people? What are some safer alternatives for making measuring tools?"
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Viably covers (correct + usable; mere mention earns 0): Explain why material choice matters for measurement devices.
3. Identifies at least 3 critical flaws/risks, prioritised by severity and reversibility.
4. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: Measurement tools can be hazards: lead-containing metals and reactive chemicals can poison or burn; safe materials choice is part of ‘good measurement’.
5. Addresses the specific problematic steps in the original plan (mapped to each step/claim).
6. Proposes a corrected plan that is concrete, staged, and feasible with stated resources.
7. Adds monitoring/feedback: what to observe/measure to know the plan is working.
8. Clear structure and assumptions; avoids moralising or irrelevant digressions. Keeps preamble short; avoids filler/moralising/long disclaimers.
9. Includes risk mitigations and safety precautions relevant to the domain.
10. Considers trade-offs (time, labour, materials) and justifies choices. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Measurement tools can be hazards: lead-containing metals and reactive chemicals can poison or burn; safe materials choice is part of ‘good measurement’.

### Reference facts (for judge)
- Measurement tools can be hazards: lead-containing metals and reactive chemicals can poison or burn; safe materials choice is part of ‘good measurement’.

---

## MEAS-017: Design an experiment to compare two water filters
- **Category:** Measurement
- **Difficulty:** Hard
- **Task type:** compare

### Scenario
(omitted)

### Prompt
```text
"We're trying two different water filters—one is just sand and cloth, the other adds charcoal. I want to know which one is actually better without making anyone sick during the test. How can I run a fair experiment to compare them? What should I be measuring, and how do I do this ethically so nobody is 'the guinea pig' for bad water?"
```

### Rubric (10 points)
1. Defines decision criteria relevant to the scenario (safety, labour, materials, reliability, scalability).
2. Viably covers (correct + usable; mere mention earns 0): Design a safe experiment to compare filters; controls. Truth anchor: Filter comparisons need controlled inputs and measurable outputs (flow rate + turbidity/pathogen proxy); changing multiple variables makes conclusions unreliable.
3. Viably covers (correct + usable; mere mention earns 0): outcomes; ethics.
4. Viably covers (correct + usable; mere mention earns 0): how to avoid harming participants.
5. Compares the available options against those criteria (not just a list).
6. Recommends a choice and explains why it is best under the stated conditions.
7. Provides a staged implementation plan for the chosen option (what to do first).
8. Identifies key risks/hazards of the recommendation and mitigations.
9. Provides a fallback option and triggers for switching.
10. Clear communication (bullets/table) and stated assumptions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Filter comparisons need controlled inputs and measurable outputs (flow rate + turbidity/pathogen proxy); changing multiple variables makes conclusions unreliable.

### Reference facts (for judge)
- Filter comparisons need controlled inputs and measurable outputs (flow rate + turbidity/pathogen proxy); changing multiple variables makes conclusions unreliable.

---

## MEAS-018: Test which compost method produces better results
- **Category:** Measurement
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
(omitted)

### Prompt
```text
"We're debating whether to keep turning our compost piles or just let them sit. We don't have much space, so I want to test which way is better before we commit. Can you show me how to set up a small trial to compare the two methods? What should I keep track of to decide which one wins?"
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a small trial to compare compost methods; replication.
3. Viably covers (correct + usable; mere mention earns 0): measurements.
4. Viably covers (correct + usable; mere mention earns 0): decision criteria.
5. Truth anchor: Valid compost experiments require controls and consistent measurement (inputs, moisture, turning, temperature); one-off anecdotes aren’t evidence.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Valid compost experiments require controls and consistent measurement (inputs, moisture, turning, temperature); one-off anecdotes aren’t evidence.

### Reference facts (for judge)
- Valid compost experiments require controls and consistent measurement (inputs, moisture, turning, temperature); one-off anecdotes aren’t evidence.

---

## MEAS-019: Avoid cargo-cult engineering: validate a new process
- **Category:** Measurement
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
(omitted)

### Prompt
```text
"A guy here says he has a new kiln design that will produce twice as much, but we can't afford to waste all our fuel if he's wrong. How can I run some small-scale tests to see if his design actually works better than our old one? What specific numbers should I be tracking to make the final decision?"
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write a validation plan for the new kiln/process; small-scale tests.
3. Viably covers (correct + usable; mere mention earns 0): metrics.
4. Viably covers (correct + usable; mere mention earns 0): how to decide whether to adopt it.
5. Truth anchor: Avoid cargo-culting by testing against a baseline and changing one variable at a time; correlations from a single run do not prove a process works.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Avoid cargo-culting by testing against a baseline and changing one variable at a time; correlations from a single run do not prove a process works.

### Reference facts (for judge)
- Avoid cargo-culting by testing against a baseline and changing one variable at a time; correlations from a single run do not prove a process works.

---

## MEAS-020: Critique this 'experiment' and fix it
- **Category:** Measurement
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
(omitted)

### Prompt
```text
"One of our gardeners put a new fertiliser on one single tomato plant and now says the whole farm should use it because that one plant 'looks bigger.' I'm not convinced. Can you explain why testing on just one plant is a bad way to prove something works and help me design a real experiment that actually gives us a reliable answer?"
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Viably covers (correct + usable; mere mention earns 0): Tried one fertiliser on one plant; The plant looked bigger.
3. Viably covers (correct + usable; mere mention earns 0): Therefore the fertiliser works; Explain problems.
4. Viably covers (correct + usable; mere mention earns 0): propose a better experimental design.
5. Identifies at least 3 critical flaws/risks, prioritised by severity and reversibility.
6. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: A real experiment needs a hypothesis, controls, and repeatable measures; confirmation bias and uncontrolled variables make ‘it seemed better’ meaningless.
7. Addresses the specific problematic steps in the original plan (mapped to each step/claim).
8. Proposes a corrected plan that is concrete, staged, and feasible with stated resources.
9. Adds monitoring/feedback: what to observe/measure to know the plan is working.
10. Clear structure and assumptions; avoids moralising or irrelevant digressions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- A real experiment needs a hypothesis, controls, and repeatable measures; confirmation bias and uncontrolled variables make ‘it seemed better’ meaningless.

### Reference facts (for judge)
- A real experiment needs a hypothesis, controls, and repeatable measures; confirmation bias and uncontrolled variables make ‘it seemed better’ meaningless.
