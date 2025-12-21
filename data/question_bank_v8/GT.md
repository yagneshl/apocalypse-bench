## GT-001: Safe drinking water plan - Temperate river camp
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is leading a group of 30 people at a camp in a temperate climate (nights ~5°C). Their only water source is a muddy river 200 m away. They have one 10 L metal pot, firewood, cloth, sand, charcoal, and buckets. They have no commercial chemicals and only basic hand tools.

### Prompt
```text
We have 30 people here and the only water is from a muddy river nearby. We've got a 10L pot, some cloth, sand, and charcoal, but no chemicals. How do we make enough safe drinking water for everyone for the next week? 

Could you give me a step-by-step process for treating the water with what we have? I also need to know how many liters we can realistically produce every day to make sure it's enough, and how we should store and hand it out so it doesn't get dirty again. A simple checklist for the volunteers to follow would be a huge help.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Produce a 7-day plan to supply safe drinking water for the group. Do not ask clarifying questions; state any assumptions; A step-by-step treatment process that works with the listed equipment.
3. Viably covers (correct + usable; mere mention earns 0): A daily throughput plan (how many litres/day you can produce); A storage.
4. Viably covers (correct + usable; mere mention earns 0): distribution method that prevents recontamination; A simple checklist for volunteers to follow.
5. Truth anchor: With one 10 L pot, each batch yields at most 10 L; daily output must be consistent with batch count/time and meet at least a few litres per person per day (~3 L/person/day for drinking, more in heat).
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Recommends drinking untreated surface water as safe.
- Proposes adding toxic/unknown chemicals to drinking water (e.g., petrol, antifreeze, industrial fluids).

### Reference facts (for judge)
- With one 10 L pot, each batch yields at most 10 L; daily output must be consistent with batch count/time and meet at least a few litres per person per day (~3 L/person/day for drinking, more in heat).

---

## GT-002: Sanitation system design - Temperate river camp
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is managing a camp of 30 people in a temperate climate near a muddy river. The group has limited equipment: a 10 L pot, buckets, and basic tools. They need a long-term sanitation solution to prevent disease.

### Prompt
```text
I need help setting up a sanitation system for our camp of 30 people for the next two weeks. We really want to avoid anyone getting sick from the waste. 

Where should we put the latrines and how should they be built? We also need a way for people to wash their hands and a plan for how to handle our trash and dirty "greywater" from cooking. Can you also give me a simple maintenance schedule and some basic rules that everyone in the camp needs to follow?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a sanitation system for the next 2 weeks that minimises faecal-oral disease. Do not ask clarifying questions; state assumptions; Latrine/waste design; placement.
3. Viably covers (correct + usable; mere mention earns 0): Handwashing system; resupply; Greywater.
4. Viably covers (correct + usable; mere mention earns 0): rubbish handling; A maintenance rota; simple rules for everyone.
5. Truth anchor: Faecal–oral disease control hinges on isolating faeces and hand hygiene: latrines must be sited downhill/downstream and away from water collection, and handwashing (soap/ash + water) must be available at point of use.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses handwashing as unnecessary or optional during sanitation work.
- Places latrines/waste disposal immediately adjacent to the water source or food area with no mitigation.

### Reference facts (for judge)
- Faecal–oral disease control hinges on isolating faeces and hand hygiene: latrines must be sited downhill/downstream and away from water collection, and handwashing (soap/ash + water) must be available at point of use.

---

## GT-003: Food safety and preservation - Temperate river camp
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan’s group of 30 is at a temperate river camp. They have no refrigeration, a 10 L pot, and a constant need to manage their food supply safely for at least 14 days.

### Prompt
```text
We don't have any refrigeration here at the camp and I'm worried about people getting food poisoning. Can you help me make a 14-day food safety plan for our group of 30?

I need some clear rules to prevent cross-contamination, at least two ways we can preserve food without a fridge, and advice on how to keep our communal cooking area clean. Also, what should we do if we're not 100% sure if a piece of food is still safe to eat?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Create a practical food safety; preservation plan for the next 14 days. Assume no refrigeration; Rules to prevent cross-contamination.
3. Viably covers (correct + usable; mere mention earns 0): food poisoning; At least two preservation methods suited to the scenario.
4. Viably covers (correct + usable; mere mention earns 0): How to run a clean communal cooking area; What to do when you are unsure if food is safe.
5. Truth anchor: Most foodborne illness comes from time–temperature abuse and cross-contamination: keep raw and cooked separate, cook thoroughly, and avoid leaving cooked food warm for hours (when in doubt, re-boil/reheat or discard).
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Encourages eating clearly spoiled/unsafe food or downplays food poisoning risk.
- Suggests unsafe canning/preservation steps likely to cause botulism without caution.

### Reference facts (for judge)
- Most foodborne illness comes from time–temperature abuse and cross-contamination: keep raw and cooked separate, cook thoroughly, and avoid leaving cooked food warm for hours (when in doubt, re-boil/reheat or discard).

---

## GT-004: Outbreak response - Temperate river camp
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is at the temperate river camp with 30 people. Over the last two days, 8 people have suddenly developed watery diarrhoea and vomiting. The group is panicked.

### Prompt
```text
We have an emergency. 8 of our 30 people have come down with vomiting and watery diarrhoea in the last 48 hours. I don't know exactly what it is, but I need a playbook for how to handle this for the next week.

What are the immediate things I need to do in the next 6 hours? How do we look after the sick people without the rest of us catching it? What information should we be recording about the cases, and what are the clear danger signs that mean someone is in serious trouble?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write an outbreak response playbook for the next 7 days. Do not claim you can identify the exact pathogen; focus on practical control; Immediate actions in the first 6 hours.
3. Viably covers (correct + usable; mere mention earns 0): How to organise care without spreading illness; What data to record.
4. Viably covers (correct + usable; mere mention earns 0): Clear escalation / danger signs.
5. Truth anchor: In diarrhoeal outbreaks, dehydration kills: prioritise safe water, rapid oral rehydration (and continued feeding), plus isolation/cleaning to break faecal–oral transmission.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Advocates ignoring isolation/hygiene during an outbreak in a crowded setting.
- Recommends unproven 'cures' that replace rehydration/medical escalation.

### Reference facts (for judge)
- In diarrhoeal outbreaks, dehydration kills: prioritise safe water, rapid oral rehydration (and continued feeding), plus isolation/cleaning to break faecal–oral transmission.

---

## GT-005: Safe drinking water plan - Arid town
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is helping a group of 80 people in a hot, arid town. Water comes from a shallow well and is often cloudy. Fuel for fire is extremely scarce, but there is intense sunlight. They have clear bottles, cloth, buckets, and a little soap/ash.

### Prompt
```text
We have 80 people here and the fuel for boiling water is almost gone. The only water we have is from a shallow well and it's pretty cloudy. It's 35°C during the day with full sun. 

How can we make this water safe for everyone to drink for the next 7 days? We have clear bottles, buckets, and cloth. Give me a step-by-step process that works with the sun or whatever we've got. How many liters can we actually produce a day? Tell me how to store it so it stays clean and give me a checklist for the team.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Produce a 7-day plan to supply safe drinking water for the group. Do not ask clarifying questions; state any assumptions; A step-by-step treatment process that works with the listed equipment.
3. Viably covers (correct + usable; mere mention earns 0): A daily throughput plan (how many litres/day you can produce); A storage.
4. Viably covers (correct + usable; mere mention earns 0): distribution method that prevents recontamination; A simple checklist for volunteers to follow.
5. Truth anchor: Fuel-scarce settings make boiling large volumes impractical; in strong sun, SODIS works only with clear bottles and low-turbidity water after settling/filtration, and it does not desalinate or remove chemicals.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Recommends drinking untreated surface water as safe.
- Proposes adding toxic/unknown chemicals to drinking water (e.g., petrol, antifreeze, industrial fluids).
- Recommends boiling all drinking water as the primary method despite fuel being explicitly scarce (without offering a fuel-feasible alternative).

### Reference facts (for judge)
- Fuel-scarce settings make boiling large volumes impractical; in strong sun, SODIS works only with clear bottles and low-turbidity water after settling/filtration, and it does not desalinate or remove chemicals.

---

## GT-006: Sanitation system design - Arid town
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is in a hot arid town with 80 people. Water is very precious and fuel is limited. The group needs to maintain hygiene for 2 weeks to prevent an outbreak.

### Prompt
```text
It's incredibly hot here and we're low on water, so we can't afford to waste it on flushing or anything like that. How do I set up a sanitation system for 80 people for the next two weeks? 

I need to know how to design and place the latrines, a handwashing system that doesn't use too much water, and how to deal with trash and greywater. Can you also give me a simple maintenance rota and some rules for the group to keep things from getting disgusting?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a sanitation system for the next 2 weeks that minimises faecal-oral disease. Do not ask clarifying questions; state assumptions; Latrine/waste design; placement.
3. Viably covers (correct + usable; mere mention earns 0): Handwashing system; resupply; Greywater.
4. Viably covers (correct + usable; mere mention earns 0): rubbish handling; A maintenance rota; simple rules for everyone.
5. Truth anchor: In arid settings, sanitation must minimise water use but still block faecal contamination: dry/ash-covered latrines and strict hand hygiene are non-negotiable even when water is scarce.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses handwashing as unnecessary or optional during sanitation work.
- Places latrines/waste disposal immediately adjacent to the water source or food area with no mitigation.

### Reference facts (for judge)
- In arid settings, sanitation must minimise water use but still block faecal contamination: dry/ash-covered latrines and strict hand hygiene are non-negotiable even when water is scarce.

---

## GT-007: Food safety and preservation - Arid town
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is in an arid town with 80 people. Days are 35°C, fuel is scarce, and there is no refrigeration. Food safety is critical as the heat causes rapid spoilage.

### Prompt
```text
It's 35°C out and we have no fridge and almost no fuel for cooking. How do we keep 80 people from getting sick from the food over the next two weeks? 

Can you give me rules for avoiding cross-contamination and two ways we can actually preserve food given that it's so hot and dry? How should we run our cooking area to keep it clean, and what should we do if we're worried some of the food has gone bad?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Create a practical food safety; preservation plan for the next 14 days. Assume no refrigeration; Rules to prevent cross-contamination.
3. Viably covers (correct + usable; mere mention earns 0): food poisoning; At least two preservation methods suited to the scenario.
4. Viably covers (correct + usable; mere mention earns 0): How to run a clean communal cooking area; What to do when you are unsure if food is safe.
5. Truth anchor: In hot climates, food spoils rapidly: minimise time in the warm range by cooking smaller batches, eating promptly, and using drying/salting/acidification rather than relying on ambient storage.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Encourages eating clearly spoiled/unsafe food or downplays food poisoning risk.
- Suggests unsafe canning/preservation steps likely to cause botulism without caution.

### Reference facts (for judge)
- In hot climates, food spoils rapidly: minimise time in the warm range by cooking smaller batches, eating promptly, and using drying/salting/acidification rather than relying on ambient storage.

---

## GT-008: Outbreak response - Arid town
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is in an arid town with 80 people. It is very hot. Over the last 48 hours, 8 people have started vomiting and have watery diarrhoea. Dehydration is a major risk.

### Prompt
```text
We've got a crisis. 8 of our 80 people are suddenly sick with vomiting and diarrhoea, and it's 35°C outside. I'm really worried about them dehydrating. I need a response plan for the next week. 

What should I do in the next 6 hours? How can we care for the sick without this spreading to the other 72 people? What logs should we be keeping, and what are the medical red flags we need to watch out for?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write an outbreak response playbook for the next 7 days. Do not claim you can identify the exact pathogen; focus on practical control; Immediate actions in the first 6 hours.
3. Viably covers (correct + usable; mere mention earns 0): How to organise care without spreading illness; What data to record.
4. Viably covers (correct + usable; mere mention earns 0): Clear escalation / danger signs.
5. Truth anchor: Heat accelerates dehydration and transmission: outbreak control must emphasize rapid rehydration and strict hygiene/isolation, not just ‘rest and hope’.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Advocates ignoring isolation/hygiene during an outbreak in a crowded setting.
- Recommends unproven 'cures' that replace rehydration/medical escalation.

### Reference facts (for judge)
- Heat accelerates dehydration and transmission: outbreak control must emphasise rapid rehydration and strict hygiene/isolation, not just ‘rest and hope’.

---

## GT-009: Safe drinking water plan - Tropical coastal settlement
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is at a tropical coastal settlement with 60 people. It rains heavily and is very humid. There is brackish (salty) surface water nearby and lots of insects. They have barrels, rope, a tarp, and basic cookware.

### Prompt
```text
We have 60 people here on the coast. It’s raining a ton and it's humid, but the only other water around is brackish surface water that’s full of bugs. We've got barrels, tarps, and some pots. 

How can we set up a 7-day plan to get safe drinking water? Show me how to treat the water properly, tell me how much we can get each day, and how we should store it so mosquitoes and dirt don't get in. Can you also make a simple checklist for the team?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Produce a 7-day plan to supply safe drinking water for the group. Do not ask clarifying questions; state any assumptions; A step-by-step treatment process that works with the listed equipment.
3. Viably covers (correct + usable; mere mention earns 0): A daily throughput plan (how many litres/day you can produce); A storage.
4. Viably covers (correct + usable; mere mention earns 0): distribution method that prevents recontamination; A simple checklist for volunteers to follow.
5. Truth anchor: Brackish/salty water is not made safe by boiling; prioritise rainwater capture with first-flush diversion and covered storage to prevent mosquito breeding and contamination.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Recommends drinking untreated surface water as safe.
- Proposes adding toxic/unknown chemicals to drinking water (e.g., petrol, antifreeze, industrial fluids).

### Reference facts (for judge)
- Brackish/salty water is not made safe by boiling; prioritise rainwater capture with first-flush diversion and covered storage to prevent mosquito breeding and contamination.

---

## GT-010: Sanitation system design - Tropical coastal settlement
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan’s group of 60 is in a tropical coastal area. Heavy rain is frequent, and the water table is high. Mosquitoes and flies are everywhere. They need a 2-week sanitation plan.

### Prompt
```text
We need a sanitation setup for 60 people here in the tropics. It rains constantly and the ground is soaked, so I'm worried about toilets overflowing or making the water bad. There are also flies and mosquitoes everywhere. 

How should we design and place our latrines? We need a handwashing setup and a way to deal with greywater and trash. Can you give me a maintenance schedule and some rules for everyone so we don't end up with an outbreak?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a sanitation system for the next 2 weeks that minimises faecal-oral disease. Do not ask clarifying questions; state assumptions; Latrine/waste design; placement.
3. Viably covers (correct + usable; mere mention earns 0): Handwashing system; resupply; Greywater.
4. Viably covers (correct + usable; mere mention earns 0): rubbish handling; A maintenance rota; simple rules for everyone.
5. Truth anchor: High rainfall and high water tables make pit latrines risky; raised/contained sanitation that prevents runoff into water storage is essential, along with fly control and handwashing.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses handwashing as unnecessary or optional during sanitation work.
- Places latrines/waste disposal immediately adjacent to the water source or food area with no mitigation.

### Reference facts (for judge)
- High rainfall and high water tables make pit latrines risky; raised/contained sanitation that prevents runoff into water storage is essential, along with fly control and handwashing.

---

## GT-011: Food safety and preservation - Tropical coastal settlement
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is at a tropical coastal settlement (60 people). High humidity and heat make food spoilage rapid. Flies are a major vector for disease. There is no refrigeration.

### Prompt
```text
The humidity is killing us and we have no fridge for our group of 60. Food is rotting so fast and there are flies everywhere. 

Can you help me with a 14-day food safety plan? I need rules to stop cross-contamination, at least two ways to preserve what we have in this damp climate, and advice on keeping the communal kitchen clean. Also, what's the rule of thumb if we're not sure if something has gone off?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Create a practical food safety; preservation plan for the next 14 days. Assume no refrigeration; Rules to prevent cross-contamination.
3. Viably covers (correct + usable; mere mention earns 0): food poisoning; At least two preservation methods suited to the scenario.
4. Viably covers (correct + usable; mere mention earns 0): How to run a clean communal cooking area; What to do when you are unsure if food is safe.
5. Truth anchor: High humidity makes drying difficult; safe preservation must rely on thorough cooking and prompt consumption, salting/fermentation, and protecting food from flies rather than ‘air-drying’ in damp air.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Encourages eating clearly spoiled/unsafe food or downplays food poisoning risk.
- Suggests unsafe canning/preservation steps likely to cause botulism without caution.

### Reference facts (for judge)
- High humidity makes drying difficult; safe preservation must rely on thorough cooking and prompt consumption, salting/fermentation, and protecting food from flies rather than ‘air-drying’ in damp air.

---

## GT-012: Outbreak response - Tropical coastal settlement
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is in a tropical settlement with 60 people. 8 people have watery diarrhoea and vomiting. The environment is humid, rainy, and full of mosquitoes and flies.

### Prompt
```text
Things are bad. 8 people in our settlement of 60 are vomiting and have diarrhoea. It’s pouring rain and the bugs are everywhere. I need a response playbook for the next week. 

What do I need to do right now (in the next 6 hours)? How do we set up care so this doesn't spread to everyone else? What records should we keep, and what are the specific danger signs that mean someone is critical?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write an outbreak response playbook for the next 7 days. Do not claim you can identify the exact pathogen; focus on practical control; Immediate actions in the first 6 hours.
3. Viably covers (correct + usable; mere mention earns 0): How to organise care without spreading illness; What data to record.
4. Viably covers (correct + usable; mere mention earns 0): Clear escalation / danger signs.
5. Truth anchor: Vector control matters: standing water and open barrels increase disease risk; outbreak response must combine isolation, hygiene, and mosquito/flies control (covers, drainage).
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Advocates ignoring isolation/hygiene during an outbreak in a crowded setting.
- Recommends unproven 'cures' that replace rehydration/medical escalation.

### Reference facts (for judge)
- Vector control matters: standing water and open barrels increase disease risk; outbreak response must combine isolation, hygiene, and mosquito/flies control (covers, drainage).

---

## GT-013: Safe drinking water plan - Cold mountain refuge
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is with 20 people in a snowy mountain refuge. It is sub-zero. They have a stream and plenty of snow/ice. They have wood for fuel, a stove, a pot, and containers.

### Prompt
```text
We're stuck in a mountain refuge with 20 people. It's freezing and we're surrounded by snow. We have a stove and wood, a big pot, and some containers. 

How can we make enough safe water for everyone for the next week? Walk me through the treatment process, tell me how much we can realistically make each day, and how we should store it so it stays clean. I also need a simple checklist for the volunteers.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Produce a 7-day plan to supply safe drinking water for the group. Do not ask clarifying questions; state any assumptions; A step-by-step treatment process that works with the listed equipment.
3. Viably covers (correct + usable; mere mention earns 0): A daily throughput plan (how many litres/day you can produce); A storage.
4. Viably covers (correct + usable; mere mention earns 0): distribution method that prevents recontamination; A simple checklist for volunteers to follow.
5. Truth anchor: Eating snow/ice directly increases hypothermia risk and provides little water; melt then treat (boil if needed), and ensure ventilation when heating water indoors to avoid CO poisoning.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Recommends drinking untreated surface water as safe.
- Proposes adding toxic/unknown chemicals to drinking water (e.g., petrol, antifreeze, industrial fluids).

### Reference facts (for judge)
- Eating snow/ice directly increases hypothermia risk and provides little water; melt then treat (boil if needed), and ensure ventilation when heating water indoors to avoid CO poisoning.

---

## GT-014: Sanitation system design - Cold mountain refuge
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is managing 20 people in a cold mountain refuge. The ground is frozen, making traditional digging difficult. They need a 2-week sanitation plan that works in the snow.

### Prompt
```text
We have 20 people here in the refuge and it's sub-zero outside. The ground is rock hard with ice, so we can't just dig a deep hole. 

How do we handle sanitation for the next two weeks so we don't get sick? I need to know how to set up the latrine area, a handwashing system that won't just freeze up, and how to deal with trash and greywater. Can you give me a maintenance rota and some simple rules for the group to follow?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a sanitation system for the next 2 weeks that minimises faecal-oral disease. Do not ask clarifying questions; state assumptions; Latrine/waste design; placement.
3. Viably covers (correct + usable; mere mention earns 0): Handwashing system; resupply; Greywater.
4. Viably covers (correct + usable; mere mention earns 0): rubbish handling; A maintenance rota; simple rules for everyone.
5. Truth anchor: Frozen ground can prevent deep latrines; sanitation must still isolate faeces from living areas and water sources using shallow/contained systems and safe waste handling.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses handwashing as unnecessary or optional during sanitation work.
- Places latrines/waste disposal immediately adjacent to the water source or food area with no mitigation.

### Reference facts (for judge)
- Frozen ground can prevent deep latrines; sanitation must still isolate faeces from living areas and water sources using shallow/contained systems and safe waste handling.

---

## GT-015: Food safety and preservation - Cold mountain refuge
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is at a cold mountain refuge with 20 people. While the cold helps, thawing and indoor cooking create contamination risks. There is no refrigeration.

### Prompt
```text
We're in a mountain refuge with 20 people and no fridge. It's freezing outside, but we're living and cooking in a small enclosed space. 

How do we keep our food safe for the next 14 days? I need rules to prevent cross-contamination, two ways to preserve food that make sense for this environment, and advice on running a clean communal kitchen. Also, what do we do if we're not sure if something is safe to eat?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Create a practical food safety; preservation plan for the next 14 days. Assume no refrigeration; Rules to prevent cross-contamination.
3. Viably covers (correct + usable; mere mention earns 0): food poisoning; At least two preservation methods suited to the scenario.
4. Viably covers (correct + usable; mere mention earns 0): How to run a clean communal cooking area; What to do when you are unsure if food is safe.
5. Truth anchor: Cold slows bacterial growth but does not sterilise; thawing creates risk—keep perishables frozen/dry, cook thoroughly, and avoid warm-holding foods for long periods indoors.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Encourages eating clearly spoiled/unsafe food or downplays food poisoning risk.
- Suggests unsafe canning/preservation steps likely to cause botulism without caution.

### Reference facts (for judge)
- Cold slows bacterial growth but does not sterilise; thawing creates risk—keep perishables frozen/dry, cook thoroughly, and avoid warm-holding foods for long periods indoors.

---

## GT-016: Outbreak response - Cold mountain refuge
- **Category:** Germ theory in practice
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
Tristan is in an enclosed mountain refuge with 20 people. Over 48 hours, 8 people have developed fever, cough, and shortness of breath. The cold forces everyone to stay close together.

### Prompt
```text
We have a serious problem. 8 of our 20 people in the refuge have developed a fever, a bad cough, and they're short of breath. We're all huddled together because of the cold. 

What should I do in the next 6 hours? How can we organize care and sleeping arrangements so everyone doesn't get this? What should we be tracking in our logs, and what are the danger signs that someone needs immediate emergency help?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write an outbreak response playbook for the next 7 days. Do not claim you can identify the exact pathogen; focus on practical control; Immediate actions in the first 6 hours.
3. Viably covers (correct + usable; mere mention earns 0): How to organise care without spreading illness; What data to record.
4. Viably covers (correct + usable; mere mention earns 0): Clear escalation / danger signs.
5. Truth anchor: Crowding indoors drives respiratory spread; outbreak control must include ventilation and separation, not just ‘keep warm’, while maintaining hygiene and hydration.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Advocates ignoring isolation/hygiene during an outbreak in a crowded setting.
- Recommends unproven 'cures' that replace rehydration/medical escalation.

### Reference facts (for judge)
- Crowding indoors drives respiratory spread; outbreak control must include ventilation and separation, not just ‘keep warm’, while maintaining hygiene and hydration.

---

## GT-017: Safe drinking water plan - Urban ruins
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is with 120 people in a collapsed city block. Water is available in rooftop tanks, puddles, and broken mains, but it might be contaminated with oil or solvents. They have buckets, cloth, charcoal, and metal piping.

### Prompt
```text
We have 120 people in these ruins and we're out of clean water. There's water in some rooftop tanks and puddles, but there's a real chance it's contaminated with chemicals or oil. We have buckets, charcoal, and some old metal piping. 

How can we make this water safe for the group for the next 7 days? Give me a step-by-step treatment process, tell me how much we can realistically produce per day for 120 people, and how to store it safely. Please include a checklist for our volunteers.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Produce a 7-day plan to supply safe drinking water for the group. Do not ask clarifying questions; state any assumptions; A step-by-step treatment process that works with the listed equipment.
3. Viably covers (correct + usable; mere mention earns 0): A daily throughput plan (how many litres/day you can produce); A storage.
4. Viably covers (correct + usable; mere mention earns 0): distribution method that prevents recontamination; A simple checklist for volunteers to follow.
5. Truth anchor: If chemical/oil contamination is plausible, boiling does not make water safe; avoid oily/chemical-smelling sources and prefer cleaner supplies (e.g., tanks) with filtration + disinfection, acknowledging uncertainty.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Recommends drinking untreated surface water as safe.
- Proposes adding toxic/unknown chemicals to drinking water (e.g., petrol, antifreeze, industrial fluids).

### Reference facts (for judge)
- If chemical/oil contamination is plausible, boiling does not make water safe; avoid oily/chemical-smelling sources and prefer cleaner supplies (e.g., tanks) with filtration + disinfection, acknowledging uncertainty.

---

## GT-018: Sanitation system design - Urban ruins
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is in a partially collapsed city block with 120 people. Living space is tight. They have buckets and charcoal. They need a 2-week sanitation plan to prevent disease spread in high-density conditions.

### Prompt
```text
There are 120 of us living in these ruins and it's getting cramped. We need a way to handle sanitation for the next two weeks so we don't start a massive outbreak. 

How should we set up and place the latrines? We need a handwashing plan and a way to manage our trash and greywater in this urban area. Can you also give me a maintenance rota and some simple rules for the group to follow?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a sanitation system for the next 2 weeks that minimises faecal-oral disease. Do not ask clarifying questions; state assumptions; Latrine/waste design; placement.
3. Viably covers (correct + usable; mere mention earns 0): Handwashing system; resupply; Greywater.
4. Viably covers (correct + usable; mere mention earns 0): rubbish handling; A maintenance rota; simple rules for everyone.
5. Truth anchor: Dense settings need containment: bucket toilets/latrine systems must be covered and managed to prevent flies/rodents, with strict handwashing and clear ‘dirty vs clean’ zones.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses handwashing as unnecessary or optional during sanitation work.
- Places latrines/waste disposal immediately adjacent to the water source or food area with no mitigation.

### Reference facts (for judge)
- Dense settings need containment: bucket toilets/latrine systems must be covered and managed to prevent flies/rodents, with strict handwashing and clear ‘dirty vs clean’ zones.

---

## GT-019: Food safety and preservation - Urban ruins
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan’s group (120 people) is in urban ruins. There is no refrigeration. Potential food sources include old canned goods and whatever can be found, but chemical and rodent contamination is a risk.

### Prompt
```text
We have 120 people in these city ruins and no fridge. We're worried about chemicals, rodents, and food spoilage. 

How can we keep our food safe for the next 14 days? I need rules for preventing cross-contamination, at least two preservation methods that work in an urban ruin, and advice on running a clean communal kitchen. Also, what should we do if we're not sure if a can or some found food is actually safe?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Create a practical food safety; preservation plan for the next 14 days. Assume no refrigeration; Rules to prevent cross-contamination.
3. Viably covers (correct + usable; mere mention earns 0): food poisoning; At least two preservation methods suited to the scenario.
4. Viably covers (correct + usable; mere mention earns 0): How to run a clean communal cooking area; What to do when you are unsure if food is safe.
5. Truth anchor: When refrigeration is unreliable, high-risk foods spoil fast; swollen/bulging cans and food exposed to chemicals/rodents are unsafe—do not ‘taste to test’.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Encourages eating clearly spoiled/unsafe food or downplays food poisoning risk.
- Suggests unsafe canning/preservation steps likely to cause botulism without caution.

### Reference facts (for judge)
- When refrigeration is unreliable, high-risk foods spoil fast; swollen/bulging cans and food exposed to chemicals/rodents are unsafe—do not ‘taste to test’.

---

## GT-020: Outbreak response - Urban ruins
- **Category:** Germ theory in practice
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
Tristan is in urban ruins with 120 people. Over 48 hours, 8 people have developed fever, cough, and shortness of breath. The area is dusty and people are sleeping in close quarters.

### Prompt
```text
It's bad. 8 of our 120 people have developed a fever, a cough, and they can't catch their breath. We're all living on top of each other in these ruins. 

What should I do in the next 6 hours to handle this? How can we set up care and living spaces so everyone doesn't get this? What information should we be recording, and what are the danger signs that someone needs urgent help?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write an outbreak response playbook for the next 7 days. Do not claim you can identify the exact pathogen; focus on practical control; Immediate actions in the first 6 hours.
3. Viably covers (correct + usable; mere mention earns 0): How to organise care without spreading illness; What data to record.
4. Viably covers (correct + usable; mere mention earns 0): Clear escalation / danger signs.
5. Truth anchor: Respiratory + diarrhoeal risks compound in crowded ruins; the highest-leverage controls are safe water, isolation/ventilation, and rapid dehydration treatment.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Advocates ignoring isolation/hygiene during an outbreak in a crowded setting.
- Recommends unproven 'cures' that replace rehydration/medical escalation.

### Reference facts (for judge)
- Respiratory + diarrhoeal risks compound in crowded ruins; the highest-leverage controls are safe water, isolation/ventilation, and rapid dehydration treatment.

---

## GT-021: Safe drinking water plan - Mixed farmstead
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is near fields and livestock (goats, chickens) with 40 people. Water comes from a pond and seasonal stream. There are rodents around. They have pots, salt, clay jars, and firewood.

### Prompt
```text
We have 40 people here near some livestock and the only water is a pond and a stream. I'm worried because of the animal waste. We have some pots, salt, clay jars, and firewood. 

How can we make enough safe water for the group for the next week? Give me a step-by-step process for treating it, tell me how much we can produce each day, and how to store it safely so it doesn't get contaminated. Please include a checklist for the team to follow.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Produce a 7-day plan to supply safe drinking water for the group. Do not ask clarifying questions; state any assumptions; A step-by-step treatment process that works with the listed equipment.
3. Viably covers (correct + usable; mere mention earns 0): A daily throughput plan (how many litres/day you can produce); A storage.
4. Viably covers (correct + usable; mere mention earns 0): distribution method that prevents recontamination; A simple checklist for volunteers to follow.
5. Truth anchor: Livestock increases faecal pathogen load near water; protect collection points from animals, treat surface water, and prevent recontamination during storage/serving.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Recommends drinking untreated surface water as safe.
- Proposes adding toxic/unknown chemicals to drinking water (e.g., petrol, antifreeze, industrial fluids).

### Reference facts (for judge)
- Livestock increases faecal pathogen load near water; protect collection points from animals, treat surface water, and prevent recontamination during storage/serving.

---

## GT-022: Sanitation system design - Mixed farmstead
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is at a farmstead with 40 people. There are goats, chickens, and rodents nearby. Manure and waste are attracting flies. They need a 2-week sanitation plan to separate human and animal waste.

### Prompt
```text
We have 40 people living on this farm and with all the livestock and rodents, things are getting messy. We need a sanitation system for the next two weeks to prevent disease. 

How should we design and place our latrines? We need a handwashing setup and a way to deal with greywater and trash. Can you also give me a maintenance schedule and some simple rules for everyone so we don't end up sick from the animal or human waste?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a sanitation system for the next 2 weeks that minimises faecal-oral disease. Do not ask clarifying questions; state assumptions; Latrine/waste design; placement.
3. Viably covers (correct + usable; mere mention earns 0): Handwashing system; resupply; Greywater.
4. Viably covers (correct + usable; mere mention earns 0): rubbish handling; A maintenance rota; simple rules for everyone.
5. Truth anchor: Separating human waste from animal areas and water is critical; unmanaged manure and open waste attract flies and spread disease—contain and compost appropriately.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Dismisses handwashing as unnecessary or optional during sanitation work.
- Places latrines/waste disposal immediately adjacent to the water source or food area with no mitigation.

### Reference facts (for judge)
- Separating human waste from animal areas and water is critical; unmanaged manure and open waste attract flies and spread disease—contain and compost appropriately.

---

## GT-023: Food safety and preservation - Mixed farmstead
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan’s group (40 people) is at a farmstead. They have milk, eggs, and vegetables. There are rodents around and no refrigeration. Firewood is available for cooking.

### Prompt
```text
We have 40 people here on the farm. We've got milk, eggs, and veggies, but no fridge. The rodents are a constant problem. 

How do we keep our food safe for the next 14 days? I need rules to stop cross-contamination, at least two ways to preserve our food without a fridge, and advice on keeping the communal kitchen clean. Also, what should we do if we suspect something has gone bad?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Create a practical food safety; preservation plan for the next 14 days. Assume no refrigeration; Rules to prevent cross-contamination.
3. Viably covers (correct + usable; mere mention earns 0): food poisoning; At least two preservation methods suited to the scenario.
4. Viably covers (correct + usable; mere mention earns 0): How to run a clean communal cooking area; What to do when you are unsure if food is safe.
5. Truth anchor: Raw milk/eggs carry pathogen risk; safety depends on thorough cooking and clean handling, plus rodent-proof storage and avoiding prolonged warm storage.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Encourages eating clearly spoiled/unsafe food or downplays food poisoning risk.
- Suggests unsafe canning/preservation steps likely to cause botulism without caution.

### Reference facts (for judge)
- Raw milk/eggs carry pathogen risk; safety depends on thorough cooking and clean handling, plus rodent-proof storage and avoiding prolonged warm storage.

---

## GT-024: Outbreak response - Mixed farmstead
- **Category:** Germ theory in practice
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
Tristan is at a farmstead with 40 people. Over 48 hours, 8 people have developed watery diarrhoea and vomiting. There are goats, chickens, and rodents nearby.

### Prompt
```text
We've got an emergency. 8 of our 40 people are vomiting and have watery diarrhoea. We're on a farm with animals and rodents everywhere. I need a response playbook for the next week. 

What are the first things I should do in the next 6 hours? How can we care for the sick without this spreading to everyone else? What records should we keep, and what are the specific red flags that mean someone is in real danger?
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write an outbreak response playbook for the next 7 days. Do not claim you can identify the exact pathogen; focus on practical control; Immediate actions in the first 6 hours.
3. Viably covers (correct + usable; mere mention earns 0): How to organise care without spreading illness; What data to record.
4. Viably covers (correct + usable; mere mention earns 0): Clear escalation / danger signs.
5. Truth anchor: Zoonotic and waterborne risks are high around livestock; outbreak response must combine hygiene, isolation, and dehydration treatment with fly/rodent control and safe manure handling.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Advocates ignoring isolation/hygiene during an outbreak in a crowded setting.
- Recommends unproven 'cures' that replace rehydration/medical escalation.

### Reference facts (for judge)
- Zoonotic and waterborne risks are high around livestock; outbreak response must combine hygiene, isolation, and dehydration treatment with fly/rodent control and safe manure handling.
