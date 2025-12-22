## SAFE-201: Building a Kearny Fallout Meter
- **Category:** Safety
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The person is sheltering in a basement after a nuclear explosion occurred approximately 100 miles away. They have no professional equipment and need to determine if radiation levels outside are dropping to decide when it is safe to leave.
- **Resources:** A jar with a lid, aluminum foil, fishing line/thread, a drying agent (like silica gel or dry wall gypsum), a plastic comb.

### Prompt
```text
There was a nuclear blast 100 miles from here and we are sheltering in our basement. We're terrified of the fallout but we don't have any Geiger counters or electronics. I have a glass jar, some aluminum foil, and some thread. Is there any way I can build a meter with this stuff to tell if the radiation is high or if it's dropping?
```

### Rubric (10 points)
1. Identifies the device as a **Kearny Fallout Meter** (KFM) or Gold-Leaf Electroscope.
2. Construction: Two light strips of foil suspended on a thread inside the jar.
3. Desiccant: The air inside must be bone dry (use gypsum/silica), otherwise humidity drains the charge.
4. Operation: Charge the leaves using static electricity (rub plastic comb on hair). The leaves repel and stand apart.
5. **Truth Anchor:** Ionizing radiation creates ions in the air. These ions neutralize the static charge. The *rate* at which the leaves droop (discharge) indicates the radiation dose. Fast droop = High radiation.
6. Calibration concept: It measures Rate, not just Presence.
7. Safety: Stay inside while measuring.
8. Clear structure.
9. Actionable steps.
10. Limits: Doesn't detect Alpha (jar blocks it), detects Gamma/Beta.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## SAFE-001: Risk assessment for building a bridge with volunteers
- **Category:** Safety
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Project:** A group of 12 volunteers of mixed experience levels is building a log footbridge over a stream.
- **Hazards:** Sharp tools (axes, saws), heavy lifting with ropes, and cold, deep water.
- **Goal:** The user needs a safety plan and risk assessment to prevent injuries during the build.

### Prompt
```text
I've got a dozen volunteers helping me build a wooden footbridge over a stream today. We're using logs, axes, saws, and rope. Some of these people have never used an axe before. It's cold out and the water is deep. Can you give me a risk assessment and a plan to keep them safe? I especially need a checklist for when we should just stop working because it's too dangerous.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): hazards; risk ranking.
3. Viably covers (correct + usable; mere mention earns 0): controls.
4. Viably covers (correct + usable; mere mention earns 0): a 'stop work' checklist.
5. Truth anchor: High-risk volunteer work needs controls: eliminate/guard hazards first, then procedures/PPE; relying on ‘be careful’ is not a safety plan.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-002: Safety plan for operating a kiln or furnace
- **Category:** Safety
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Project:** A community is operating a pottery or lime kiln.
- **Hazards:** Extreme heat, risk of structural collapse, Carbon Monoxide (CO) poisoning, and fire spread from flying embers.
- **Context:** PPE is very limited and the site is located dangerously close to residential shelters.

### Prompt
```text
We're running a kiln to make lime and pottery for the settlement. It's right near our sleeping shelters. I'm worried about people getting burned, the thing collapsing, or the smoke and "invisible" gases making people sick. We don't have real safety gear. Can you write me a safety guide for the crew? I need to know how to lay out the site and what to do in an emergency.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write a safety plan (SOP) for kiln operation; site layout.
3. Viably covers (correct + usable; mere mention earns 0): roles; PPE substitutes.
4. Viably covers (correct + usable; mere mention earns 0): ventilation; emergency response.
5. Truth anchor: Kilns/furnaces create CO, burns, and fire risk; ventilation, exclusion zones, and heat management are essential because hot surfaces and CO are often ‘invisible’.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-003: Pre-task briefing template for high-risk work
- **Category:** Safety
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- **Context:** The user is managing a team performing various high-risk physical tasks such as heavy lifting, tree felling, and trench digging.
- **Goal:** They need a standardized, 5-minute safety briefing template to use before starting any dangerous task.

### Prompt
```text
I'm leading a crew doing some dangerous jobs today—we're cutting down trees and digging deep trenches. I need a 5-minute safety talk I can give the team before we start. What should I cover every time to make sure everyone knows their job and knows when to stop if things go wrong?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Create a 5-minute pre-task briefing template; hazards.
3. Viably covers (correct + usable; mere mention earns 0): roles; communications.
4. Viably covers (correct + usable; mere mention earns 0): stop signals.
5. Truth anchor: Effective briefings assign roles and stop-work authority, identify hazards and controls, and confirm understanding; vague encouragement does not prevent incidents.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-004: Critique this unsafe work culture and correct it
- **Category:** Safety
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
- **Context:** A project leader is openly dismissive of safety, calling it a "luxury" and stating that injuries are simply "part of the job."
- **Goal:** The user wants to understand why this is a dangerous mindset and how to implement a better safety culture without significantly slowing down necessary work.

### Prompt
```text
Our project leader just told us that safety is a 'luxury' we can't afford right now and that getting injured is just part of the job in an apocalypse. I think he's wrong, but I don't want to sound like I'm trying to slow down our work. Can you explain why his mindset is actually going to cost us more in the long run and give me a practical way to fix our safety culture?
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Viably covers (correct + usable; mere mention earns 0): Explain why this mindset is costly.
3. Viably covers (correct + usable; mere mention earns 0): propose a practical safety culture alternative.
4. Viably covers (correct + usable; mere mention earns 0): how to implement it without slowing work excessively.
5. Identifies at least 3 critical flaws/risks, prioritised by severity and reversibility.
6. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: Blame-heavy cultures suppress near-miss reporting; learning cultures treat near-misses as system signals and fix hazards before someone is killed.
7. Addresses the specific problematic steps in the original plan (mapped to each step/claim).
8. Proposes a corrected plan that is concrete, staged, and feasible with stated resources.
9. Adds monitoring/feedback: what to observe/measure to know the plan is working.
10. Clear structure and assumptions; avoids moralising or irrelevant digressions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-005: CO and fire safety rules for indoor stoves
- **Category:** Safety
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** Shelters are using wood/fuel stoves for heating and cooking. Multiple people are reporting headaches and nausea, which are classic signs of CO poisoning.
- **Constraints:** No electronic CO alarms are available.

### Prompt
```text
A bunch of people in our shelters are complaining of headaches and feeling nauseous since we started using the indoor stoves for heat. We don't have any CO detectors or alarms. Can you give me a list of rules and a checklist to make sure we don't die of carbon monoxide or burn the shelters down? What should we be checking on the chimneys?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write rules; a checklist to reduce CO/fire risk.
3. Viably covers (correct + usable; mere mention earns 0): ventilation; chimney checks.
4. Viably covers (correct + usable; mere mention earns 0): emergency response.
5. Truth anchor: CO is colourless and odourless; headache/dizziness/nausea in multiple people is a stop trigger—ventilation and safe stove rules prevent deaths.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where some numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-006: Design a safe firewood and fuel storage area
- **Category:** Safety
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- **Situation:** A camp needs to store a large volume of firewood, charcoal, and lamp oils.
- **Environment:** Windy conditions; the buildings are made of flammable wood and tarp. Children are frequently present in the area.

### Prompt
```text
I need to organize our fuel storage. We have a lot of firewood, some charcoal, and a few jugs of lamp oil. It's really windy here and our shelters are just wood and tarp. Also, kids are running around everywhere. Where should I put the fuel and what rules do I need to enforce so one accident doesn't burn the whole camp down?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a fuel storage layout; rules.
3. Viably covers (correct + usable; mere mention earns 0): separation distances; firebreaks.
4. Viably covers (correct + usable; mere mention earns 0): access control.
5. Truth anchor: Fuel storage safety depends on separation and containment: keep fuels dry, off the ground, and away from ignition sources so one fire doesn’t consume all reserves.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-007: Fire response plan for a dense camp
- **Category:** Safety
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** A dense camp of 80 people living in close proximity.
- **Constraints:** Limited water supply for firefighting. High risk of a night-time fire causing mass casualties.

### Prompt
```text
We have 80 people living in shelters that are basically touching each other. If a fire starts at night, we're in huge trouble because we don't have much water. Can you write us a fire plan? I need to know how to organize drills, who should do what, and how we can stop fires from starting in the first place.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write a fire prevention; response plan.
3. Viably covers (correct + usable; mere mention earns 0): drills; roles.
4. Viably covers (correct + usable; mere mention earns 0): evacuation; how to reduce ignition sources.
5. Truth anchor: Dense-camp fires spread via embers and wind; rapid alarm, clear evacuation lanes, and pre-positioned suppression resources are higher leverage than heroics.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-008: Investigate recurring smoke backdrafts in a stove
- **Category:** Safety
- **Difficulty:** Medium
- **Task type:** investigate

### Scenario
- **Problem:** A stove is puffing smoke back into a room during wind gusts.
- **System:** The chimney is short and terminates near the roofline. Residents are complaining of throat/eye irritation.

### Prompt
```text
Every time the wind gusts, smoke from our wood stove blows back into the room. The chimney is kind of short and ends right near the roof. It's making everyone cough. Why is this happening? Can you tell me how to diagnose it safely and how to fix it without spending a lot of resources?
```

### Rubric (10 points)
1. Restates the observed problem and defines what 'fixed' looks like.
2. Viably covers (correct + usable; mere mention earns 0): Diagnose likely causes; propose mitigations.
3. Viably covers (correct + usable; mere mention earns 0): safe testing; maintenance steps.
4. Lists plausible causes and ranks them by likelihood/impact. Truth anchor: Backdraft/smoke rollback usually indicates poor draft or blocked flue/air supply; CO exposure symptoms (headache/dizziness) are immediate stop triggers during diagnosis.
5. Gives a safe diagnostic sequence (simple, non-destructive checks first).
6. Proposes concrete fixes/repairs using low-tech tools/materials.
7. Includes safety precautions during diagnosis/repair (PPE, isolation, ventilation, etc.). Includes at least 2 specific stop-work triggers.
8. Verifies the fix (measure/observe performance after changes).
9. Includes prevention/maintenance steps to avoid recurrence.
10. Clear structure and assumptions; keeps advice realistic. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-009: Safe axe and saw SOP for woodcutting crews
- **Category:** Safety
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Context:** A woodcutting crew is felling small trees and splitting wood daily.
- **Workforce:** Includes many novices; safety gear (PPE) is extremely limited.
- **Goal:** To reduce common injuries like lacerations and crushed feet.

### Prompt
```text
I've got a crew of beginners using axes and saws to get firewood and clear brush. They're working close together and I'm worried about someone getting a nasty cut or a crushed foot. We don't have much in the way of gloves or boots. Can you give me a simple set of rules for tool checks, how far apart they should stand, and what to do if someone gets hurt?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write a short SOP; tool checks.
3. Viably covers (correct + usable; mere mention earns 0): spacing; communication.
4. Viably covers (correct + usable; mere mention earns 0): first aid readiness.
5. Truth anchor: Most cutting injuries come from poor spacing, bad stance, and fatigue; SOPs must enforce exclusion zones and rest, not just ‘use gloves’.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-010: Safety for a hand-cranked drill/lathe setup
- **Category:** Safety
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** A workshop uses a treadle-powered or hand-cranked lathe and drill press.
- **Hazard:** Entanglement risk from loose clothing and long hair; current guards are poorly made and improvised.

### Prompt
```text
We're using a hand-cranked lathe and a drill in our workshop. I'm really nervous about someone's hair or loose sleeves getting caught in the spinning parts. Can you help me design some simple guards for them and give me a set of safety rules for training the crew? What should we do if someone gets caught?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Create safety rules; guard designs.
3. Viably covers (correct + usable; mere mention earns 0): training; clothing rules.
4. Viably covers (correct + usable; mere mention earns 0): emergency stop; inspection.
5. Truth anchor: Rotating machinery hazards include entanglement; guarding and no loose clothing/hair control prevent life-changing injuries more than warnings alone.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-011: Prevent falls from height during roof work
- **Category:** Safety
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** Workers are repairing roofs and installing chimneys.
- **Constraints:** No commercial harnesses or safety equipment; scaffolding is improvised. High risk of catastrophic falls.

### Prompt
```text
We have to fix some roofs and put in chimneys, but we don't have any safety harnesses. We're using old ladders and some wood for scaffolding we built ourselves. How do we keep people from falling? I need to know how to set up the ladders safely and when we should call off the work because of wind or rain.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): scaffold safety; ladders.
3. Viably covers (correct + usable; mere mention earns 0): spotters.
4. Viably covers (correct + usable; mere mention earns 0): when to stop work (wind/rain).
5. Truth anchor: Fall prevention relies on guardrails/anchors and safe ladder setup; ‘holding on’ is not reliable, and falls are often fatal even from modest height.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-012: Investigate repeated minor injuries and fix the system
- **Category:** Safety
- **Difficulty:** Easy
- **Task type:** investigate

### Scenario
- **Problem:** A workshop has a high frequency of minor cuts and "smashed fingers."
- **Root Causes:** People are rushing to meet quotas and the tools being used are dull.

### Prompt
```text
Everyone in our workshop keeps getting small cuts or smashing their fingers. We're in a huge rush to get things done and our tools are getting really dull. Why is this happening so much, and how do I fix the workflow and tool maintenance so people stop getting hurt?
```

### Rubric (10 points)
1. Restates the observed problem and defines what 'fixed' looks like.
2. Viably covers (correct + usable; mere mention earns 0): training; tool maintenance.
3. Viably covers (correct + usable; mere mention earns 0): workflow changes.
4. Lists plausible causes and ranks them by likelihood/impact. Truth anchor: Repeated minor injuries indicate system issues (training, tools, fatigue, housekeeping); blaming individuals misses root causes and increases underreporting.
5. Gives a safe diagnostic sequence (simple, non-destructive checks first).
6. Proposes concrete fixes/repairs using low-tech tools/materials.
7. Includes safety precautions during diagnosis/repair (PPE, isolation, ventilation, etc.). Includes at least 2 specific stop-work triggers.
8. Verifies the fix (measure/observe performance after changes).
9. Includes prevention/maintenance steps to avoid recurrence.
10. Clear structure and assumptions; keeps advice realistic. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-013: Chemical safety SOP for lye and lime handling
- **Category:** Safety
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** The user is producing soap (using lye) and mortar (using lime).
- **Context:** Limited PPE; children are frequently nearby. Needs protocols for safe mixing, storage, and emergency response.

### Prompt
```text
 I'm making soap with lye and lime mortar for repairs. I've got no real safety gear and there are kids running around near my workspace. Can you give me a safety guide for mixing and storing this stuff? What should I label the containers with, and what do I do if someone gets this stuff in their eyes or on their skin?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write a chemical safety SOP; labeling.
3. Viably covers (correct + usable; mere mention earns 0): mixing rules; PPE substitutes.
4. Viably covers (correct + usable; mere mention earns 0): emergency response.
5. Truth anchor: Lye/quicklime cause severe burns; always add chemical to water (not vice versa) and flush exposures with plenty of water immediately—PPE and labelling matter.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-014: Dust and fume control when working with ash, lime, and metal
- **Category:** Safety
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Problem:** A workshop is producing heavy dust from ash and lime, and fumes from heating scrap metal.
- **Situation:** Limited ventilation; workers are experiencing coughing and eye irritation.

### Prompt
```text
We're working with ash, lime, and burning scrap metal in our workshop. Everyone is starting to cough and their eyes are always irritated. We don't have good ventilation. How can we control the dust and fumes? Can you give me a plan for using wet methods or DIY masks to keep us from getting sick?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design exposure controls; ventilation.
3. Viably covers (correct + usable; mere mention earns 0): wet methods; PPE.
4. Viably covers (correct + usable; mere mention earns 0): safe scrap preparation.
5. Truth anchor: Dust/fume hazards are chronic: wet methods, ventilation, and respiratory protection reduce exposure; waiting until symptoms appear is too late.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-015: Safe storage and disposal for chemicals and fuels
- **Category:** Safety
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- **Situation:** The user has small quantities of various hazardous materials: bleach, petrol, oil, lye, and battery acid.
- **Constraints:** Limited storage space; high risk of accidental mixing or child poisoning.

### Prompt
```text
I've got jugs of petrol, bleach, engine oil, and some old battery acid all in the same small shed. I'm worried about them mixing or a kid getting into them. What are the 'never mix' rules for these? How should I organize them safely, and how do I get rid of the stuff I don't need without poisoning our ground?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): 'never mix' rules.
3. Viably covers (correct + usable; mere mention earns 0): child-proofing.
4. Truth anchor: Safe storage needs labelling, segregation, and incompatibility control; unclear containers and mixed fuels/chemicals create fires and poisonings.
5. Gives an ordered, step-by-step procedure that a novice could follow.
6. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
7. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
8. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
9. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers.
10. Quantifies key parameters (ratios, dimensions, timing, rates, temperatures) or explains how to measure them — and sanity-checks plausibility. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-016: Investigate a chemical burn incident and prevent recurrence
- **Category:** Safety
- **Difficulty:** Medium
- **Task type:** investigate

### Scenario
- **Incident:** A person suffered a lye splash in their eye while making soap.
- **Problem:** The first aid response was slow and disorganized.
- **Goal:** The user needs a formal review and a plan to fix the system.

### Prompt
```text
We just had a scary accident—someone got a lye splash in their eye while making soap. We all panicked and it took way too long to get them help. Can you help me write an incident report so we can learn from this? I need a clear plan for first aid, what safety gear we should be using, and how to change our process so this never happens again.
```

### Rubric (10 points)
1. Restates the observed problem and defines what 'fixed' looks like.
2. Viably covers (correct + usable; mere mention earns 0): Write an incident review; corrective action plan; immediate first aid protocol.
3. Viably covers (correct + usable; mere mention earns 0): training; PPE; process changes.
4. Lists plausible causes and ranks them by likelihood/impact. Truth anchor: Chemical burns require immediate water flushing and incident learning; neutralising with random chemicals is risky—prevention comes from controls and training.
5. Gives a safe diagnostic sequence (simple, non-destructive checks first).
6. Proposes concrete fixes/repairs using low-tech tools/materials.
7. Includes safety precautions during diagnosis/repair (PPE, isolation, ventilation, etc.). Includes at least 2 specific stop-work triggers.
8. Verifies the fix (measure/observe performance after changes).
9. Includes prevention/maintenance steps to avoid recurrence.
10. Clear structure and assumptions; keeps advice realistic. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-017: Set up a near-miss and incident reporting system
- **Category:** Safety
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Problem:** A settlement has frequent minor safety incidents, but they go unreported because people fear being blamed.
- **Goal:** Create a lightweight, non-punitive reporting system to drive safety improvements.

### Prompt
```text
We have a lot of minor accidents and close calls here, but nobody wants to talk about them because they're afraid of being blamed or getting in trouble. How can I set up a simple way for people to report these 'near-misses' without fear? I need to know how to keep it confidential and how we can actually use these reports to fix things before someone really gets hurt.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a reporting system; forms/logs.
3. Viably covers (correct + usable; mere mention earns 0): confidentiality where appropriate.
4. Viably covers (correct + usable; mere mention earns 0): how to turn reports into improvements.
5. Truth anchor: Reporting systems only work with psychological safety and low blame; otherwise near-misses are hidden until a fatality occurs.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-018: Root-cause analysis of a dropped load near-miss
- **Category:** Safety
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Incident:** A heavy load slipped and fell during a lift. No injuries occurred, but the potential for death was high.
- **Equipment:** Ropes and improvised pulleys; the team was inexperienced.

### Prompt
```text
We were lifting a heavy crate using ropes and some old pulleys we found, and the whole thing just came crashing down. Luckily no one was under it, but it was close. Why did this happen? Can you help me figure out the root cause and tell me what we need to change in our gear and how we lift things so it doesn't happen again?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): training.
3. Viably covers (correct + usable; mere mention earns 0): equipment changes.
4. Viably covers (correct + usable; mere mention earns 0): procedural controls.
5. Truth anchor: Dropped-load near-misses are rarely ‘just luck’: root cause must address rigging/anchors, load control, exclusion zones, and supervision, not only ‘be careful’.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-019: Create a safety drill programme (fire, CO, injury)
- **Category:** Safety
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Goal:** Build emergency readiness for a community.
- **Constraints:** Time is limited; drills must be short. The population includes children.

### Prompt
```text
I want to start doing safety drills for our camp so we're ready for fires or medical emergencies. We don't have much time and we have children here, so they can't be too complicated. Can you design a schedule for the next month? Tell me what we should practice, how often, and how I can tell if we're actually getting better at it.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a drill programme for the next month; frequency.
3. Viably covers (correct + usable; mere mention earns 0): objectives.
4. Viably covers (correct + usable; mere mention earns 0): how to evaluate drills.
5. Truth anchor: Drills build reflexes only if practised and debriefed; unpractised plans fail under stress and lead to panic and injury.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses safety concerns (e.g., 'just be careful') without concrete controls.
- Blames individuals without proposing system-level fixes or controls (for incident investigations).

---

## SAFE-020: Identify unlabelled liquids (possible bleach/acid/fuel) without injuring yourself
- **Category:** Safety
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The person found three unmarked plastic jugs (one clear; one thick white; one blue).
- **Goal:** Sort them into categories (fuel, cleaning supply, or dangerous unknown) safely.
- **Constraints:** No 'taste tests'; must be done outdoors; no mixing.

### Prompt
```text
I found three unmarked plastic jugs in a garage. One has clear liquid, one is thick white, and one is blue. I need to know if they're fuel I can use, cleaning supplies, or just dangerous junk I should stay away from. I have some gloves and a glass jar. How do I figure out what these are without hurting myself? What should I look for and what are the 'stop' signs?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Setup (PPE, location, spill control) appropriate for unknown corrosive/oxidiser/flammable liquids; avoids indoor confined-space testing.
3. Viably covers (correct + usable; mere mention earns 0): A step-by-step test sequence ordered by risk (visual/label clues → small water immiscibility check → pH/indicator if available) that can plausibly separate fuel/oil vs water-based, then acid vs bleach-like.
4. Viably covers (correct + usable; mere mention earns 0): Clear isolation/labelling/storage plan (separate containers; secondary containment; away from flames; away from food/water) and an 'if unsure' default-safe path.
5. Truth anchor: Never mix unknown liquids: bleach + acid can release chlorine gas and bleach + ammonia can release toxic chloramines; fuels/oils are typically immiscible with water and float; any odour check must be by wafting from a distance (never direct sniffing).
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Suggests tasting/licking/putting unknown liquid in the mouth.
- Suggests mixing unknown liquids together or adding unknown liquids into bleach/ammonia/acid to 'see what happens'.
- Recommends sniffing directly from the container opening or doing tests in a closed/unventilated room.
- Suggests using an open flame/spark (e.g., lighting it) as the primary identification test.
- Suggests using bare hands/skin contact with unknown liquids as a test.

---

## SAFE-101: Confined Space Entry (Wells/Tanks)
- **Category:** Safety
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** A person has collapsed inside a freshly dug well or empty biogas tank.
- **Problem:** Bystanders and rescuers want to jump in immediately to help, unaware of the invisible gas hazard (one dead, two dead, three dead syndrome).

### Prompt
```text
Someone just passed out at the bottom of the well we're digging. My friends are about to jump in to pull them out. Should I let them? How do I know if the air down there is safe without a gas meter? Can you give me a rescue plan that won't get the rest of us killed?
```

### Rubric (10 points)
1. Directly answers the task.
2. Truth anchor: Most well rescuers die. "One dead, two dead, three dead." DO NOT ENTER without verifying atmosphere.
3. Hazards: CO2 (heavy, sinks), H2S (rotten eggs, numbs nose, toxic), Methane (lighter, explosive), Low Oxygen.
4. Test: Bucket test (lower a candle/lantern). If it dims/goes out -> Bad air.
5. Ventilation: Force fresh air in (fan/bellows) for long duration.
6. Rescue: Do not go in. Use grappling hook or rope if attached. If entry needed, must have lifeline and topside team to haul out.
7. Harness requirement.
8. Clear structure.
9. Actionable steps.
10. Trigger: If candle flickers, abort.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## SAFE-102: Identifying Lead Paint/Pipes
- **Category:** Safety
- **Difficulty:** Medium
- **Task type:** investigate

### Scenario
- **Situation:** Scavengers are exploring an old building for plumbing materials and furniture (like a baby's crib).
- **Goal:** They need to identify if pipes or paint contain lead without modern chemical test kits.

### Prompt
```text
I'm scavenging an old house for water pipes and a crib for my baby. I'm worried about lead poisoning. How can I tell if these metal pipes or the paint on the furniture have lead in them just by looking at them or using a knife? What does lead sound like or look like when you scratch it?
```

### Rubric (10 points)
1. Directly answers the task.
2. Pipes: Soft (scratches with fingernail/knife to shiny silver), dull grey oxidizes, "Thud" sound when struck (not ringing like steel/copper). Non-magnetic. Wipe joints (bulbus wiped joints).
3. Paint: "Alligatoring" (square crack pattern), chalky residue.
4. Truth anchor: Assume lead in old systems until proven otherwise.
5. Solubility in acidic water warning.
6. Clear structure.
7. Actionable steps.
8. Heavy weight.
9. Dangers for children/pregnant.
10. Mitigation (run water cold).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## SAFE-103: Chainsaw Safety (Kickback)
- **Category:** Safety
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** A novice operator is using a scavenged chainsaw to clear storm debris.
- **Goal:** They need to understand the physical mechanics of "kickback" and how to position their body to avoid life-threatening injury.

### Prompt
```text
I found an old chainsaw and I'm using it for the first time to clear some fallen trees. I heard that chainsaws can 'kick back' and hit you in the face. How does that actually happen? Where is the 'kill zone' on the saw blade I should avoid, and how should I be standing so I don't get killed if it jumps?
```

### Rubric (10 points)
1. Directly answers the task.
2. Mechanism: Upper quadrant of the bar nose (Kickback zone). If this touches wood, the chain grabs and drives the bar violently upward/backward.
3. Truth anchor: The reaction is faster than human reaction time. You cannot "catch" it.
4. Positioning: Never stand directly behind the saw path. Left arm straight (to lock the bar). Thumb wrapped around handle.
5. Chain brake function.
6. Do not cut over shoulder height.
7. Clear structure.
8. Actionable steps.
9. Plunge cutting risks.
10. PPE relevance (chaps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## SAFE-104: Leaking munition with a smoking waxy substance
- **Category:** Safety
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** A person found a metal canister while scavenging that is leaking a yellow/white waxy substance.
- **Incident:** The substance starts smoking immediately when exposed to air or touched.
- **Hazard:** This is white phosphorus (pyrophoric).

### Prompt
```text
I found a metal canister while scavenging and it's leaking this weird, waxy yellow stuff. When I poked it with a stick, it started smoking. What is this stuff? If some gets on my skin, how do I stop it from burning me? How do I handle this safely or get it away from our camp?
```

### Rubric (10 points)
1. Directly answers the task.
2. ID: A pyrophoric munition filler (commonly white phosphorus). It ignites in air.
3. First Aid: Cover with MUD or WET cloth immediately. Immerse body part in water.
4. Truth anchor: It burns until oxygen is removed or it is consumed. Water blocks oxygen. Do not let it dry out or it re-ignites.
5. Removal: Surgical removal of particles while underwater.
6. Chemical hazard: Also toxic absorption.
7. Do not use oil/grease (solubilizes P and increases absorption).
8. Clear structure.
9. Actionable steps.
10. Smoke toxicity.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.
