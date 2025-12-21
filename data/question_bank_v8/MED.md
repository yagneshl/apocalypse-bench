## MED-201: Breech Birth Delivery Management
- **Category:** Medicine
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- **Situation:** A woman is giving birth. The baby is coming out feet first.
- **Condition:** The legs and body are out up to the neck, but the head is stuck inside. The cord is pulsing but slowing.
- **Resources:** No hospital, just your hands.

### Prompt
```text
The baby came out feet first. The body is out, but the head is stuck inside.
The umbilical cord is squeezed and pulsing slowly.
We are scared to pull. What exactly do we do to get the head out without killing the baby?
```

### Rubric (10 points)
1.  **Truth Anchor (The "Hands-Off" Phase):** Notes that pulling on the body is dangerous (it extends the head, making it get stuck on the pelvis).
2.  Maneuver: Describes the **Mauriceau–Smellie–Veit** maneuver (or similar specific technique).
3.  Positioning: Lay the baby's body along your forearm (straddling the arm).
4.  Action 1: Place fingers of that hand on the baby's cheekbones (maxilla) to **flex the chin down** towards the chest.
5.  Action 2: Use the other hand on the baby's shoulders/neck to create gentle traction.
6.  Action 3: Lift the baby's body *upward* towards the mother's abdomen to pivot the head out of the pelvis.
7.  Suprapubic pressure: An assistant should push on the mother’s pubic bone to help keep the head flexed.
8.  Time urgency: The head is compressing the cord; the baby has no oxygen. Move fast but smoothly.
9.  Clear commands/steps.
10. Mentioning episiotomy if soft tissue is the obstruction.

### Auto-fail (score = 0 if any)
-  Suggests pulling hard on the legs/feet (high risk of spinal separation or entrapment).

---

## MED-202: Emergency Suprapubic Catheterization
- **Category:** Medicine
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- **Situation:** A male patient cannot urinate. He has a crushing injury to the pelvis/groin.
- **Condition:** His lower belly is bulging and hard (distended bladder). He is in agony. You cannot get a tube up the penis (it stops/bleeds).
- **Resources:** Large hollow needles, tubing, cleaning supplies.

### Prompt
```text
He hasn't peed in 24 hours. We can't get a tube in the normal way because of an injury.
His lower belly is bulging and hard, and he is screaming.
How do we drain the urine through the stomach skin safely? Where do we poke?
```

### Rubric (10 points)
1.  **Assessment:** Confirm the bladder is distended and palpable (dull sound when tapped) above the pubic bone.
2.  **Landmark:** Exact midline, 2-3 cm **above** the pubic symphysis (the hard bone).
3.  **Truth Anchor:** The needle must go **perpendicular** or slightly angled down (caudal), strictly in the midline to avoid major arteries.
4.  Technique: Aspirate (pull back on plunger) continuously while inserting.
5.  Confirmation: Urine enters the syringe.
6.  Procedure: Feed tubing through the needle if possible, or use the needle to drain.
7.  Safety warning: Do not attempt if the bladder is not palpable (risk of hitting bowel/intestines).
8.  Hygiene: Must be sterile to prevent sepsis.
9.  Securement: Tape/stitch the tube in place.
10. Actionable steps.

### Auto-fail (score = 0 if any)
-  Suggests blindly stabbing without landmarking the pubic bone.
-  Suggests forcing the urethral catheter harder.

---

## MED-203: Managing a Hip Dislocation
- **Category:** Medicine
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- **Situation:** A man fell from a roof. His leg is short and twisted inward. He is screaming.
- **Problem:** You are days from help. If you leave it, the hip bone will die.
- **Resources:** A flat surface, an assistant.

### Prompt
```text
He fell hard. His leg looks shorter than the other and is twisted inward. He is in extreme pain.
We can't get to a hospital for days.
How do we put the hip back in place?
```

### Rubric (10 points)
1.  Diagnosis: Posterior Hip Dislocation.
2.  Urgency: Blood supply to the ball of the hip is pinched. Must be reduced within hours.
3.  Technique: **Captain Morgan** technique, **Bigelow**, or **Allis** maneuver.
4.  **Truth Anchor:** You must lift the thigh *up* (anteriorly) to pull the ball out of the locked position behind the socket, while an assistant holds the hips down.
5.  Steps: Patient on back. Bend knee and hip to 90 degrees. Step on the bed/board (Captain Morgan style) or straddle. Lift the calf/knee straight up towards the ceiling.
6.  Rotation: Gentle internal/external rotation may help wiggle it in.
7.  Confirmation: Clunk sensation, leg returns to normal length/rotation, pain relief.
8.  Post-care: Tie legs together to prevent it popping out again.
9.  Safety: Watch for Sciatic nerve damage (foot drop).
10. Actionable steps.

### Auto-fail (score = 0 if any)
-  Suggests just pulling the leg straight down (traction alone rarely works for hips).

---

## MED-001: Triage after a building collapse with limited supplies
- **Category:** Medicine & public health
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- 10 injured people after a partial collapse
- Supplies: cloth, clean water (limited), a few splints, basic tools
- No ambulance; you may need to prioritise evacuation

### Prompt
```text
Write a triage and immediate care plan for the first hour.
Do not assume access to advanced equipment.
Include: scene safety, triage categories, bleeding control, and documentation.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write a triage; immediate care plan for the first hour.
3. Viably covers (correct + usable; mere mention earns 0): scene safety; triage categories.
4. Viably covers (correct + usable; mere mention earns 0): bleeding control; documentation.
5. Truth anchor: Triage prioritises immediate life threats (airway/breathing and major bleeding) and uses resources to save the most lives; those unlikely to survive with available means should receive comfort care, not time-consuming futile treatment.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).

### Reference facts (for judge)
- Triage prioritises immediate life threats (airway/breathing and major bleeding) and uses resources to save the most lives; those unlikely to survive with available means should receive comfort care, not time-consuming futile treatment.

---

## MED-002: First aid for severe bleeding from a limb injury
- **Category:** Medicine & public health
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- A person has heavy bleeding from a deep cut on the forearm
- Supplies: cloth, belt/rope, clean water, soap/ash, scissors/knife
- You must stabilise before moving them 1 km

### Prompt
```text
Provide step-by-step first aid.
Include when to use direct pressure vs tourniquet, shock prevention, and what to monitor during transport.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Provide step-by-step first aid; when to use direct pressure vs tourniquet.
3. Viably covers (correct + usable; mere mention earns 0): shock prevention.
4. Viably covers (correct + usable; mere mention earns 0): what to monitor during transport.
5. Truth anchor: States that for severe limb bleeding, firm continuous direct pressure is first-line; if a tourniquet is needed it must be placed above the wound on the limb and tightened until bleeding stops and the distal pulse is absent, and the time applied should be recorded (do not periodically loosen).
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).

### Reference facts (for judge)
- States that for severe limb bleeding, firm continuous direct pressure is first-line; if a tourniquet is needed it must be placed above the wound on the limb and tightened until bleeding stops and the distal pulse is absent, and the time applied should be recorded (do not periodically loosen).

---

## MED-003: Manage burns from a cooking accident
- **Category:** Medicine & public health
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- A person has a burn on the hand and forearm from boiling water
- Supplies: clean cool water, clean cloth, basic soap, no sterile dressings
- Risk of infection is high

### Prompt
```text
Provide immediate burn first aid and a 7-day care plan.
Include what NOT to put on burns, dressing strategy, and when to seek help.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Provide immediate burn first aid; a 7-day care plan.
3. Viably covers (correct + usable; mere mention earns 0): what NOT to put on burns; dressing strategy.
4. Viably covers (correct + usable; mere mention earns 0): when to seek help.
5. Truth anchor: States that cooling the burn promptly with cool running water (not ice) for ~20 minutes reduces tissue damage; remove constricting jewellery early, avoid breaking blisters, and cover with a clean non-fluffy dressing to reduce infection.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).

### Reference facts (for judge)
- States that cooling the burn promptly with cool running water (not ice) for ~20 minutes reduces tissue damage; remove constricting jewellery early, avoid breaking blisters, and cover with a clean non-fluffy dressing to reduce infection.

---

## MED-004: Splint a suspected fractured leg and transport safely
- **Category:** Medicine & public health
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- Suspected lower leg fracture after a fall
- Supplies: sticks, cloth, rope, padding (clothes), blanket
- Transport over rough ground is required

### Prompt
```text
Describe how to assess, splint, and transport.
Include circulation checks, pain reduction, and what signs require urgent escalation.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): circulation checks.
3. Viably covers (correct + usable; mere mention earns 0): pain reduction.
4. Viably covers (correct + usable; mere mention earns 0): what signs require urgent escalation.
5. Truth anchor: States that a suspected fracture should be immobilised with a splint that fixes the joint above and below the injury, and distal circulation/sensation should be checked before and after splinting (stop and reassess if it worsens).
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).

### Reference facts (for judge)
- States that a suspected fracture should be immobilised with a splint that fixes the joint above and below the injury, and distal circulation/sensation should be checked before and after splinting (stop and reassess if it worsens).

---

## MED-005: Clean and dress a deep laceration safely
- **Category:** Medicine & public health
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Deep laceration from a tool; wound is dirty
- Supplies: boiled water, clean cloth, soap/ash, needle/thread available
- No antibiotics assumed

### Prompt
```text
Give a safe wound care procedure.
Include cleaning/irrigation, when to close vs not, dressing, and infection monitoring.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): cleaning/irrigation; when to close vs not.
3. Viably covers (correct + usable; mere mention earns 0): dressing.
4. Viably covers (correct + usable; mere mention earns 0): infection monitoring.
5. Truth anchor: Infection prevention for lacerations is mainly irrigation and clean dressings: thorough flushing with clean water reduces infection risk more than ‘strong antiseptics’ poured into deep tissue.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).

### Reference facts (for judge)
- Infection prevention for lacerations is mainly irrigation and clean dressings: thorough flushing with clean water reduces infection risk more than ‘strong antiseptics’ poured into deep tissue.

---

## MED-006: Treat a puncture wound and prevent infection
- **Category:** Medicine & public health
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- A person stepped on a rusty nail through their shoe
- Supplies: clean water, soap, cloth, basic tools; tetanus status unknown
- You must decide on observation vs evacuation

### Prompt
```text
Provide immediate care and an observation plan.
Include red flags (tetanus, deep infection) and what to avoid.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Provide immediate care; an observation plan.
3. Viably covers (correct + usable; mere mention earns 0): red flags (tetanus; deep infection).
4. Viably covers (correct + usable; mere mention earns 0): what to avoid.
5. Truth anchor: Puncture wounds can trap bacteria when they close over; cleaning and leaving room for drainage plus monitoring for infection/tetanus is safer than tightly sealing the wound.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).

### Reference facts (for judge)
- Puncture wounds can trap bacteria when they close over; cleaning and leaving room for drainage plus monitoring for infection/tetanus is safer than tightly sealing the wound.

---

## MED-007: Manage an infected wound with limited resources
- **Category:** Medicine & public health
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- A wound is red, warm, painful, with pus; fever present
- Supplies are limited; no guaranteed antibiotics
- You must prevent spread and decide on escalation

### Prompt
```text
Provide a cautious plan.
Include hygiene/isolation, wound care, fever management, and escalation criteria.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Provide a cautious plan; hygiene/isolation.
3. Viably covers (correct + usable; mere mention earns 0): wound care; fever management.
4. Viably covers (correct + usable; mere mention earns 0): escalation criteria.
5. Truth anchor: Spreading redness, red streaks, fever, confusion, or worsening pain can signal serious infection; escalation and isolation may be needed—ignoring systemic signs is dangerous.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).

### Reference facts (for judge)
- Spreading redness, red streaks, fever, confusion, or worsening pain can signal serious infection; escalation and isolation may be needed—ignoring systemic signs is dangerous.

---

## MED-008: Animal bite first aid and rabies risk awareness
- **Category:** Medicine & public health
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- A person was bitten by a stray dog/animal; wound is bleeding
- Supplies: soap, clean water, cloth
- Medical services may be limited

### Prompt
```text
Provide first aid and follow-up advice.
Include cleaning importance, infection monitoring, and why bites can be high-risk.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Provide first aid; follow-up advice.
3. Viably covers (correct + usable; mere mention earns 0): cleaning importance; infection monitoring.
4. Viably covers (correct + usable; mere mention earns 0): why bites can be high-risk.
5. Truth anchor: Rabies is almost universally fatal once symptoms start; immediate vigorous washing with soap and water and urgent pursuit of vaccination/medical help after a bite are critical.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).

### Reference facts (for judge)
- Rabies is almost universally fatal once symptoms start; immediate vigorous washing with soap and water and urgent pursuit of vaccination/medical help after a bite are critical.

---

## MED-009: Treat dehydration from diarrhoea in adults
- **Category:** Medicine & public health
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Several adults have watery diarrhoea; one is weak and dizzy
- Ingredients available: clean water, salt, sugar (limited), cups/spoons
- Need advice that is safe and practical

### Prompt
```text
Provide dehydration assessment and an oral rehydration plan.
Include safe ORS mixing guidance and danger signs.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Provide dehydration assessment; an oral rehydration plan.
3. Viably covers (correct + usable; mere mention earns 0): safe ORS mixing guidance.
4. Viably covers (correct + usable; mere mention earns 0): danger signs.
5. Truth anchor: States that significant diarrhoea dehydration requires oral rehydration salts (glucose + sodium together enable water absorption) rather than plain water alone; gives a plausible home ORS recipe (about 1 L clean water + ~6 level tsp sugar + ~1/2 level tsp salt) and warns that overly salty mixes are dangerous.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).
- Recommends using seawater or a 'very salty' drink as oral rehydration, or suggests tablespoons of salt per litre (dangerously salty).
- Recommends ingesting disinfectants/bleach (even diluted) as a diarrhoea treatment.

### Reference facts (for judge)
- States that significant diarrhoea dehydration requires oral rehydration salts (glucose + sodium together enable water absorption) rather than plain water alone; gives a plausible home ORS recipe (about 1 L clean water + ~6 level tsp sugar + ~1/2 level tsp salt) and warns that overly salty mixes are dangerous.

---

## MED-010: Child diarrhoea: ORS, feeding, and escalation
- **Category:** Medicine & public health
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- A 2-year-old has diarrhoea and vomiting for 24 hours
- Supplies: safe water, salt, sugar, cups; no IV fluids
- You must advise caregivers

### Prompt
```text
Give a cautious plan for a toddler.
Include ORS approach, feeding, and urgent danger signs requiring evacuation.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): ORS approach.
3. Viably covers (correct + usable; mere mention earns 0): feeding.
4. Viably covers (correct + usable; mere mention earns 0): urgent danger signs requiring evacuation.
5. Truth anchor: Children dehydrate fast: continue feeding/breastfeeding and give small frequent ORS; danger signs (lethargy, unable to drink, sunken eyes/no tears, blood in stool) require urgent escalation.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).
- Recommends using seawater or a 'very salty' drink as oral rehydration for a child, or suggests tablespoons of salt per litre (dangerously salty).
- Recommends ingesting disinfectants/bleach (even diluted) as a diarrhoea treatment.

### Reference facts (for judge)
- Children dehydrate fast: continue feeding/breastfeeding and give small frequent ORS; danger signs (lethargy, unable to drink, sunken eyes/no tears, blood in stool) require urgent escalation.

---

## MED-011: Outbreak prevention paired with dehydration treatment
- **Category:** Medicine & public health
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Diarrhoea cases are rising in a camp of 50
- You have limited soap and one large pot for boiling water
- Goal: reduce new cases while treating current ones

### Prompt
```text
Write an integrated plan: treatment + prevention.
Include water, sanitation, and simple communication to the group.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write an integrated plan: treatment + prevention; water.
3. Viably covers (correct + usable; mere mention earns 0): sanitation.
4. Viably covers (correct + usable; mere mention earns 0): simple communication to the group.
5. Truth anchor: Preventing and treating diarrhoeal illness requires both hygiene/safe water and rehydration; focusing on one while ignoring the other fails outbreak control.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).

### Reference facts (for judge)
- Preventing and treating diarrhoeal illness requires both hygiene/safe water and rehydration; focusing on one while ignoring the other fails outbreak control.

---

## MED-012: Critique a dangerous diarrhoea remedy
- **Category:** Medicine & public health
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
- A rumour spreads that a 'strong disinfectant drink' will cure diarrhoea

### Prompt
```text
Rumoured remedy:
- Add a capful of cleaning bleach to water and drink it.
Task: Explain why this is dangerous, what to do instead, and how to communicate this to the group.
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Viably covers (correct + usable; mere mention earns 0): Add a capful of cleaning bleach to water; drink it.
3. Viably covers (correct + usable; mere mention earns 0): Explain why this is dangerous; what to do instead.
4. Viably covers (correct + usable; mere mention earns 0): how to communicate this to the group.
5. Identifies at least 3 critical flaws/risks, prioritised by severity and reversibility.
6. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: Ingesting bleach or toxic fluids does not treat diarrhoea and can cause severe injury; the safe core is rehydration (ORS) and escalation for red flags.
7. Addresses the specific problematic steps in the original plan (mapped to each step/claim).
8. Proposes a corrected plan that is concrete, staged, and feasible with stated resources.
9. Adds monitoring/feedback: what to observe/measure to know the plan is working.
10. Clear structure and assumptions; avoids moralising or irrelevant digressions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Endorses ingesting bleach/chlorine products (even 'a small capful') as safe or effective.
- Recommends drinking kerosene/petrol, seawater, or other clearly toxic/unsafe fluids as a diarrhoea treatment.
- Recommends withholding fluids for diarrhoea.

### Reference facts (for judge)
- Ingesting bleach or toxic fluids does not treat diarrhoea and can cause severe injury; the safe core is rehydration (ORS) and escalation for red flags.

---

## MED-013: Respiratory outbreak control in a crowded shelter
- **Category:** Medicine & public health
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- 15 people in a crowded shelter; 5 develop fever and cough
- Outdoor temperature is low; ventilation is limited
- You must reduce spread without freezing everyone

### Prompt
```text
Design a control plan: ventilation, spacing, masking, hygiene, and care.
Include how to balance warmth and airflow and what danger signs to watch.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Design a control plan: ventilation; spacing; masking.
3. Viably covers (correct + usable; mere mention earns 0): hygiene; care; how to balance warmth.
4. Viably covers (correct + usable; mere mention earns 0): airflow; what danger signs to watch.
5. Truth anchor: Respiratory outbreaks spread more in crowded, poorly ventilated spaces; ventilation, spacing, and source control (covering coughs/masks) are high-leverage controls.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).

### Reference facts (for judge)
- Respiratory outbreaks spread more in crowded, poorly ventilated spaces; ventilation, spacing, and source control (covering coughs/masks) are high-leverage controls.

---

## MED-014: Differentiate smoke/CO exposure from infection symptoms
- **Category:** Medicine & public health
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- People report headaches, nausea, and fatigue; some also have cough
- They sleep in a hut with a smoky stove and poor ventilation
- You must decide what to fix first

### Prompt
```text
Provide a reasoning-based assessment of likely causes and immediate mitigations.
Include immediate changes to the room/environment to stop the symptoms and monitoring.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Provide a reasoning-based assessment of likely causes; immediate mitigations.
3. Viably covers (correct + usable; mere mention earns 0): ventilation improvements.
4. Viably covers (correct + usable; mere mention earns 0): monitoring.
5. Truth anchor: CO poisoning can mimic flu but clusters in people sharing the same space and improves outdoors; headache/dizziness/nausea with stove use is a stop trigger requiring ventilation/fresh air.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).

### Reference facts (for judge)
- CO poisoning can mimic flu but clusters in people sharing the same space and improves outdoors; headache/dizziness/nausea with stove use is a stop trigger requiring ventilation/fresh air.

---

## MED-015: Care plan for a person with pneumonia-like symptoms
- **Category:** Medicine & public health
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Adult has fever, cough, and increased breathing rate
- No antibiotics guaranteed; you have warmth, fluids, basic pain relief options
- Evacuation may be possible but difficult

### Prompt
```text
Provide supportive care steps and clear escalation criteria.
Avoid giving definitive diagnosis; focus on safe actions.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Provide supportive care steps.
3. Viably covers (correct + usable; mere mention earns 0): clear escalation criteria.
4. Truth anchor: Pneumonia danger signs include fast/laboured breathing, chest pain, confusion, and blue lips; supportive care helps but deterioration requires escalation if any higher care exists.
5. Gives an ordered, step-by-step procedure that a novice could follow.
6. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
7. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
8. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
9. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers.
10. Quantifies key parameters (ratios, dimensions, timing, rates, temperatures) or explains how to measure them — and sanity-checks plausibility. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).

### Reference facts (for judge)
- Pneumonia danger signs include fast/laboured breathing, chest pain, confusion, and blue lips; supportive care helps but deterioration requires escalation if any higher care exists.

---

## MED-016: Critique a plan that isolates sick people in an unventilated room
- **Category:** Medicine & public health
- **Difficulty:** Easy
- **Task type:** critique

### Scenario
- A plan proposes locking sick people in a small room to protect others

### Prompt
```text
Plan:
- Put all sick people in one small room.
- Keep the door closed to stop spread.
- Bring food once per day.
Task: Explain risks and propose a safer isolation approach.
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Viably covers (correct + usable; mere mention earns 0): Plan:; Put all sick people in one small room.
3. Viably covers (correct + usable; mere mention earns 0): Keep the door closed to stop spread; Bring food once per day.
4. Viably covers (correct + usable; mere mention earns 0): Explain risks; propose a safer isolation approach.
5. Identifies at least 3 critical flaws/risks, prioritised by severity and reversibility.
6. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: Sealing sick people in an unventilated room increases airborne spread and CO risk; ventilation and separation reduce risk more safely than airtight isolation.
7. Addresses the specific problematic steps in the original plan (mapped to each step/claim).
8. Proposes a corrected plan that is concrete, staged, and feasible with stated resources.
9. Adds monitoring/feedback: what to observe/measure to know the plan is working.
10. Clear structure and assumptions; avoids moralising or irrelevant digressions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).

### Reference facts (for judge)
- Sealing sick people in an unventilated room increases airborne spread and CO risk; ventilation and separation reduce risk more safely than airtight isolation.

---

## MED-017: Prepare a clean childbirth kit and plan
- **Category:** Medicine & public health
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Pregnant person is due within 2 weeks
- Supplies: cloth, boiled water, soap, string, clean blade possible
- No hospital; trained help uncertain

### Prompt
```text
Create a childbirth preparation plan and kit list.
Include hygiene, consent/privacy, and danger signs requiring urgent help.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Create a childbirth preparation plan; kit list.
3. Viably covers (correct + usable; mere mention earns 0): hygiene; consent/privacy.
4. Viably covers (correct + usable; mere mention earns 0): danger signs requiring urgent help.
5. Truth anchor: States that infection prevention in childbirth depends on clean hands and clean materials (clean surface, clean cord ties, clean cutting tool), and that heavy bleeding after birth is a medical emergency requiring urgent escalation.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).
- Encourages unsterile internal examinations or invasive interventions without trained expertise.

### Reference facts (for judge)
- States that infection prevention in childbirth depends on clean hands and clean materials (clean surface, clean cord ties, clean cutting tool), and that heavy bleeding after birth is a medical emergency requiring urgent escalation.

---

## MED-018: Newborn care in the first 24 hours
- **Category:** Medicine & public health
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- A baby is born in a low-resource setting
- Temperature is cool; risk of infection is high
- Supplies: cloth, warm water, soap

### Prompt
```text
Provide guidance for immediate newborn care.
Include warmth, breathing, feeding, and cord hygiene.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Provide guidance for immediate newborn care; warmth.
3. Viably covers (correct + usable; mere mention earns 0): breathing; feeding.
4. Viably covers (correct + usable; mere mention earns 0): cord hygiene.
5. Truth anchor: Newborn survival hinges on warmth and feeding: immediate drying/skin-to-skin warmth, early frequent feeding, and keeping the cord clean/dry prevent hypothermia and infection.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).
- Encourages unsterile internal examinations or invasive interventions without trained expertise.

### Reference facts (for judge)
- Newborn survival hinges on warmth and feeding: immediate drying/skin-to-skin warmth, early frequent feeding, and keeping the cord clean/dry prevent hypothermia and infection.

---

## MED-019: Postpartum care and recognising emergencies
- **Category:** Medicine & public health
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- A mother delivered yesterday; bleeding continues
- You have limited supplies and transport options
- You need to monitor for infection and haemorrhage

### Prompt
```text
Write a postpartum monitoring and support plan.
Include danger signs, hygiene, hydration/nutrition, and mental support.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write a postpartum monitoring; support plan.
3. Viably covers (correct + usable; mere mention earns 0): danger signs; hygiene.
4. Viably covers (correct + usable; mere mention earns 0): hydration/nutrition; mental support.
5. Truth anchor: Postpartum haemorrhage is an emergency: heavy bleeding, faintness, or shock signs require immediate action and escalation; monitoring for infection and supporting rest/fluids is critical.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).
- Encourages unsterile internal examinations or invasive interventions without trained expertise.

### Reference facts (for judge)
- Postpartum haemorrhage is an emergency: heavy bleeding, faintness, or shock signs require immediate action and escalation; monitoring for infection and supporting rest/fluids is critical.

---

## MED-020: Critique unsafe birth advice and replace it
- **Category:** Medicine & public health
- **Difficulty:** Hard
- **Task type:** critique

### Scenario
- A person suggests using unwashed hands and repeated internal exams to 'check progress'
- They also propose giving alcohol to speed labour

### Prompt
```text
Explain why these suggestions are risky and propose a safer approach.
Include hygiene and escalation criteria.
```

### Rubric (10 points)
1. Accurately summarises the proposed plan and the intended objective.
2. Viably covers (correct + usable; mere mention earns 0): Explain why these suggestions are risky; propose a safer approach.
3. Viably covers (correct + usable; mere mention earns 0): hygiene.
4. Viably covers (correct + usable; mere mention earns 0): escalation criteria.
5. Identifies at least 3 critical flaws/risks, prioritised by severity and reversibility.
6. Explains why each flaw matters (mechanism and likely consequences). Truth anchor: Unsafe birth advice (e.g., inserting unclean objects, delaying help for heavy bleeding) increases death risk; cleanliness and early escalation for red flags are non-negotiable.
7. Addresses the specific problematic steps in the original plan (mapped to each step/claim).
8. Proposes a corrected plan that is concrete, staged, and feasible with stated resources.
9. Adds monitoring/feedback: what to observe/measure to know the plan is working.
10. Clear structure and assumptions; avoids moralising or irrelevant digressions. Keeps preamble short; avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).

### Reference facts (for judge)
- Unsafe birth advice (e.g., inserting unclean objects, delaying help for heavy bleeding) increases death risk; cleanliness and early escalation for red flags are non-negotiable.

---

## MED-021: Prevent scurvy and nutrient deficiencies in a winter diet
- **Category:** Medicine & public health
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Winter diet is mostly grains and preserved meat
- Fresh produce is scarce
- You can store root vegetables and possibly sprout seeds

### Prompt
```text
Propose a nutrition plan to prevent deficiencies.
Include practical food sources and preservation (sprouting, fermentation) and monitoring.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): practical food sources; preservation (sprouting.
3. Viably covers (correct + usable; mere mention earns 0): fermentation).
4. Viably covers (correct + usable; mere mention earns 0): monitoring.
5. Truth anchor: Vitamin C deficiency causes scurvy and is prevented by sources like fresh greens/berries or sprouted legumes/grains; long cooking destroys vitamin C, so preservation/prep matters.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).

### Reference facts (for judge)
- Vitamin C deficiency causes scurvy and is prevented by sources like fresh greens/berries or sprouted legumes/grains; long cooking destroys vitamin C, so preservation/prep matters.

---

## MED-022: Ration planning for vulnerable groups
- **Category:** Medicine & public health
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Food shortage: only 70% of normal calories for 2 months
- Population includes children, pregnant people, elderly, manual labourers
- Goal: minimise mortality and maintain essential work

### Prompt
```text
Propose a rationing policy and monitoring plan.
Include ethics and health monitoring, and how to adjust as conditions change.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): ethics.
3. Viably covers (correct + usable; mere mention earns 0): health monitoring.
4. Viably covers (correct + usable; mere mention earns 0): how to adjust as conditions change.
5. Truth anchor: Vulnerable groups (children, pregnant/lactating, sick) have higher needs; ration plans must prioritise adequate calories/protein/micronutrients for them to prevent preventable deaths.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).

### Reference facts (for judge)
- Vulnerable groups (children, pregnant/lactating, sick) have higher needs; ration plans must prioritise adequate calories/protein/micronutrients for them to prevent preventable deaths.

---

## MED-023: Support mental health after trauma without professional services
- **Category:** Medicine & public health
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- After a disaster, many people have insomnia, panic, and grief
- You have no psychiatrists and limited medicines
- You need a community-based approach

### Prompt
```text
Write a practical mental health and morale plan.
Include routines, peer support, and escalation for crisis situations.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Write a practical mental health; morale plan.
3. Viably covers (correct + usable; mere mention earns 0): routines; peer support.
4. Viably covers (correct + usable; mere mention earns 0): escalation for crisis situations.
5. Truth anchor: Psychological first aid focuses on safety, calm, connection, and practical support; forced ‘debriefing’ and moralising can worsen distress—routine and social support help most.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.
- Recommends harmful treatments (e.g., applying oils/butter to burns, withholding fluids in diarrhoea).

### Reference facts (for judge)
- Psychological first aid focuses on safety, calm, connection, and practical support; forced ‘debriefing’ and moralising can worsen distress—routine and social support help most.

---

## MED-024: Dental emergency: severe toothache with facial swelling toward the eye
- **Category:** Medicine & public health
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- A group member has severe tooth pain and visible swelling of the face/cheek
- Swelling is extending upward toward the eye; they feel feverish and unwell
- No dentist; limited supplies: clean water, salt, soap, cloth, basic pain relief, and possibly labelled antibiotics from a scavenged clinic
- Evacuation to a trained clinician may be possible but difficult and slow
- Goal: keep them alive, reduce suffering, and avoid making the infection worse

### Prompt
```text
Task: Provide a safe management plan for this dental emergency.
Constraints:
- Do not give exact drug dosages; if you mention antibiotics or pain medicines, tell the reader to follow labelled dosing and warnings.
- Do not recommend DIY tooth extraction as a first-line action.
Your answer must include:
- Immediate assessment (airway/breathing/swallowing, fever, eye involvement) and what findings make this an emergency
- Supportive care you can do now (pain control options, hygiene, positioning, hydration)
- When (and when not) to consider antibiotics if labelled supplies exist, and what to do if none exist
- What NOT to do (dangerous myths)
- Clear escalation/evacuation triggers and a simple monitoring checklist for the next 24–72 hours
Do not ask clarifying questions; state any assumptions.
```

### Rubric (10 points)
1. Directly answers the task using only the stated resources; strictly respects negative constraints (does not invent forbidden tools/materials/energy).
2. Viably covers (correct + usable; mere mention earns 0): Immediate assessment that prioritises airway/breathing/swallowing, fever/systemic illness, and eye/facial spread; clearly states when this is an emergency requiring urgent evacuation.
3. Viably covers (correct + usable; mere mention earns 0): Supportive care plan that is practical with limited supplies (pain control with labelled meds, hygiene/salt-water rinses if appropriate, hydration, positioning) and includes a monitoring checklist.
4. Viably covers (correct + usable; mere mention earns 0): Addresses antibiotics carefully (only if correctly identified/labelled; follow label; warnings), plus a strong 'what NOT to do' section (no DIY extraction/unsafe drainage; no caustic chemicals).
5. Truth anchor: Facial swelling spreading toward the eye or causing difficulty swallowing/breathing is a medical emergency (risk of deep infection spread/airway compromise); DIY extraction or deep incision/drainage can worsen infection/bleeding—prioritise airway, supportive care, and urgent evacuation.
6. Gives an ordered, step-by-step procedure that a novice could follow.
7. Uses only the stated materials/tools; any substitutions are realistic and do not violate constraints or introduce toxicity.
8. Identifies main hazards with mitigations and at least 2 specific, observable stop-work triggers ('stop if…').
9. Includes a verification/quality-control check (and a basic sanity check on quantities/feasibility where numbers are used).
10. Clear structure (headings/checklist); states assumptions; keeps preamble short and avoids filler/moralising/long disclaimers. Keeps answer concise and actionable (avoid long essays; prioritise checklists and steps).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer (e.g., 'I can't help with that') instead of an actionable plan.
- Recommends DIY tooth extraction with pliers/knife as a first-line action for a spreading facial infection.
- Encourages cutting/draining deep facial/neck swelling without strong warnings, sterile technique, and clear limits (especially swelling near the eye/under the jaw).
- Suggests applying or ingesting toxic substances (e.g., bleach, kerosene, acids/alkalis) for pain or 'disinfection'.
- Gives drug dosing, invasive procedures, or antibiotics guidance beyond basic first aid without strong caveats and scope limits.

### Reference facts (for judge)
- Facial swelling spreading toward the eye or causing difficulty swallowing/breathing is a medical emergency (risk of deep infection spread/airway compromise); DIY extraction or deep incision/drainage can worsen infection/bleeding—prioritise airway, supportive care, and urgent evacuation.

---

## MED-101: Reducing an Anterior Shoulder Dislocation
- **Category:** Medicine
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- A person fell; shoulder is squared off, painful, arm held slightly away
- Pulse is present in wrist; no fracture suspected (humeral head palpable in armpit)
- No drugs; 20 minutes from injury

### Prompt
```text
The shoulder looks squared off and very painful; the arm is held slightly away from the body. A pulse is present at the wrist and you don’t suspect a fracture.
Describe a safe maneuver to reduce a likely anterior shoulder dislocation. Include contraindications, a pre-check (neurovascular exam), and how to overcome muscle spasm without violent pulling.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Assessment: Verify distal pulse and sensation (nerve check) *before* touching.
3.  Truth anchor: Do not pull violently (traction). The goal is to tire the muscle spasm or rotate the head back in. Traction without relaxation causes damage.
4.  Describes a specific technique (e.g., patient prone with the arm hanging down and gentle weight at the wrist while waiting for spasm to fatigue; OR an external-rotation method).

5.  Warning: Stop if severe pain increases or bone crepitus is felt (fracture risk).
6.  Immobilization after reduction (sling).
7.  Re-checking pulse/nerve function immediately after.
8.  Clear structure.
9.  Actionable steps.
10. Mentions the "clunk" of success.

### Auto-fail (score = 0 if any)
-  Suggests the "foot in armpit" (Hippocratic) violent traction method (high risk of nerve damage for novices).

---

## MED-102: Managing a Compound (Open) Tibia Fracture
- **Category:** Medicine
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- Patient has a broken shin bone sticking through the skin
- Bleeding is controlled
- Transport will take 2 days
- Risk: Osteomyelitis (bone infection)

### Prompt
```text
Describe the wound management protocol for open fractures in austere settings.
Address: irrigation, debridement, whether to suture the skin closed, and splinting.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Irrigation: Massive amounts of boiled/clean water (liters, not ml).
3.  Truth anchor: **Do not suture the skin wound closed.** It must drain. Closing a dirty wound over a broken bone guarantees abscess/gangrene.
4.  Debridement: Remove loose debris/grass/dirt visible.
5.  Dressing: Wet-to-dry or moist sterile dressing over the bone.
6.  Splinting: Immobilize joint above and below. Traction splinting likely needed to align.
7.  Antibiotics usage if available (high priority).
8.  Monitoring for compartment syndrome.
9.  Clear structure.
10. Actionable steps.

### Auto-fail (score = 0 if any)
-  Suggests sewing the wound shut tight.

---

## MED-103: Emergency Airway: Cricothyroidotomy concept
- **Category:** Medicine
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- Patient has severe facial trauma/swelling, cannot breathe, turning blue
- Heimlich failed; mouth is blocked
- Death is imminent (minutes)
- You have a sharp blade and a hollow tube (pen casing/tubing)

### Prompt
```text
Describe the landmarking and incision for an emergency surgical airway.
Identify the specific membrane to cut and how to avoid the major blood vessels.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Landmark: The "Adam's Apple" (Thyroid cartilage) and the cricoid ring below it.
3.  Target: The Cricothyroid membrane (the soft depression between the hard rings).
4.  Truth anchor: Cut vertically through skin (to avoid side veins), then horizontally through the membrane. Do not cut the cartilage itself.
5.  Insertion: Insert tube, ensure air movement (fogging/sound).
6.  Securement.
7.  Hazards: Cutting too low (thyroid gland bleeds), cutting jugulars (stay midline!).
8.  This is a life-or-death last resort.
9.  Clear structure.
10. Actionable steps.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.
- Treats this as routine/non-emergency or recommends attempting it without imminent airway failure.

---

## MED-104: Dental Extraction of an Infected Molar
- **Category:** Medicine
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Patient has severe abscess; antibiotics have run out
- Tooth is loose but painful; facial swelling
- You have pliers and local anesthetic (lidocaine)

### Prompt
```text
Explain the mechanics of extraction.
Describe the movement (wiggle vs pull), direction of force, and post-extraction clot preservation.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Truth anchor: You do not "pull" a tooth out; you rock it to expand the bone socket until it is loose enough to lift. "Pulling" breaks the root.
3.  Movement: Buccal (cheek) to Lingual (tongue) slow rocking pressure.
4.  Anesthetic block location (nerve roots).
5.  Post-op: The "Dry Socket" risk. Patient must bite on gauze. Do not spit, suck straws, or smoke (protect the blood clot).
6.  Drainage of abscess if visible.
7.  Safety: Protecting the throat (gauze curtain) so the tooth isn't inhaled.
8.  Clear structure.
9.  Actionable steps.
10. Stop trigger: If tooth doesn't loosen, stop (surgical extraction needed).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.
- Encourages forceful straight pulling that risks breaking roots/jaw.

---

## MED-105: High-tension suture for a gaping wound
- **Category:** Medicine
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Deep gaping wound on a knee (high tension area)
- Simple sutures are tearing through the skin
- Need a stitch that everts the edges and holds tension

### Prompt
```text
I have a deep, gaping wound on a knee under high tension. Simple stitches are tearing through the skin and the edges want to invert.
Describe a specific stitching technique that better holds tension and everts the wound edges. Explain why it works better than a simple loop.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Sequence: Needle in "Far" from edge, out "Far" other side. Then turn needle around. In "Near" the edge, out "Near" the starting side. Tie.
3.  Truth anchor: This creates a pulley effect that pulls deep tissue together and "everts" (lifts) the skin edges. Inverted (sunken) edges heal poorly.
4.  Hygiene steps.
5.  Removal timing.
6.  Why simple loops fail here (cheese-wire effect).
7.  Clear structure.
8.  Actionable steps.
9.  Stop trigger: Wound is too old/infected to close.
10. Diagrammatic description clarity.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.
- Suggests closing an infected/dirty wound without addressing infection risk.

---

## MED-106: Making Plaster of Paris from Gypsum rock
- **Category:** Medicine / Materials
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need hard casts for fractures
- You have white gypsum rocks
- Need to process them into setting plaster

### Prompt
```text
Describe the calcination process of Gypsum.
How do you turn rock into powder that sets with water?
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Reaction: Gypsum (Dihydrate) + Heat -> Plaster (Hemihydrate). Loss of water.
3.  Temperature: Low heat (~150°C). Do not overheat (>200°C) or it becomes "dead burnt" (Anhydrite) and won't set.
4.  Process: Crush, bake until steam stops releasing, grind to powder.
5.  Truth anchor: Rehydration (setting) is exothermic.
6.  Application: Mix with water, dip bandages.
7.  Storage: Airtight (absorbs moisture from air).
8.  Clear structure.
9.  Actionable steps.
10. Verification test.


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


---

## MED-107: Tourniquet Windlass Mechanics
- **Category:** Medicine
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- Leg amputation traumatic
- You have cloth strips
- You need to make an improvised tourniquet that actually works

### Prompt
```text
Explain why a simple knot fails and how to construct a windlass tourniquet.
Include width requirements and tightening indicators.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Failure mode: You cannot pull a knot tight enough by hand to occlude arterial flow; it loosens.
3.  Windlass: Stick/rod twisted into the loop gives mechanical advantage.
4.  Truth anchor: Must tighten until bright red bleeding stops AND distal pulse is gone. Pain will be severe.
5.  Width: Must be wide (>1.5 inches) to prevent cutting skin. Wire/shoelace causes tissue damage.
6.  Securing the stick so it doesn't unwind.
7.  Time marking.
8.  Clear structure.
9.  Actionable steps.
10. "High and tight" placement.


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


---

## MED-108: Safe rewarming after cold-water immersion (hypothermia)
- **Category:** Medicine
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Patient pulled from freezing lake
- Conscious but shivering violently
- You have blankets and fire

### Prompt
```text
Explain how to rewarm safely.
Explain why applying active heat to arms/legs is dangerous.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Truth anchor: Heating extremities (arms/legs) dilates blood vessels, sending cold, stagnant, acidic blood back to the core. This can drop core temperature further and risks cardiac arrest.
3.  Method: Passive external rewarming (blankets, vapor barrier). Active warming only on the *torso/trunk* (hot water bottles armpits/groin).
4.  Handling: Gentle! Rough movement can trigger arrhythmia (VFib) in cold hearts.
5.  Oral fluids: Warm/sweet if conscious.
6.  No alcohol.
7.  Clear structure.
8.  Actionable steps.
9.  Monitoring mental state.
10. Distinction between mild and severe hypothermia management.


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


---

## MED-109: CPR Discontinuation (Ethics/triage)
- **Category:** Medical / Ethics
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- CPR started on a drowning victim (cold water)
- 30 minutes elapsed. No response.
- Rescuers exhausted.
- Austere setting (no hospital).

### Prompt
```text
What are the criteria for stopping CPR in a remote setting?
Discuss "Warm and Dead" vs normothermic arrest.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Criteria: Rescuer exhaustion, lethal injury (decapitation), signs of death (rigor), or time duration (>30 mins with no return of pulse).
3.  Hypothermia Exception: "You aren't dead until you're warm and dead." Cold protects the brain. Continue CPR longer if possible until rewarmed?
4.  Truth anchor: In a survival setting with no ALS (drugs/defib), CPR for cardiac arrest (non-drowning) has ~0% survival. Resource allocation matters.
5.  Checking pulse reliability.
6.  Clear structure.
7.  Actionable advice.
8.  Supporting the rescuers (grief).
9.  Decision authority.
10. Documentation.


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


---
