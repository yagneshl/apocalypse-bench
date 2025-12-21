## MEAS-201: Creating a Vernier Scale
- **Category:** Measurement / Math
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- **Situation:** The person is making a precise machine part and needs to measure dimensions down to 0.1 millimeters. However, they only have a standard ruler with 1 mm markings, a metal scribe, and a strip of scrap metal to work with.

### Prompt
```text
I'm trying to measure a part really accurately, but my ruler only has 1 mm marks on it. I need to get it down to a tenth of a millimeter (0.1 mm). Is there a way I can make some kind of sliding tool or an attachment out of a strip of metal that would let me read those tiny fractions? How do I mark it out so the lines actually line up correctly?
```

### Rubric (10 points)
1.  Identifies the device as a **Vernier Scale**.
2.  Principle: The sliding scale uses a different spacing than the main scale.
3.  Construction: Take a length of **9 mm** on the sliding scale.
4.  **Truth Anchor:** Divide that 9 mm length into **10 equal segments**.
5.  Math: Each sliding division is now 0.9 mm. The difference between a main mark (1.0) and a slide mark (0.9) is 0.1 mm.
6.  Reading: The mark on the slider that lines up perfectly with a mark on the main ruler indicates the decimal value (e.g., 3rd line aligns = 0.3 mm).
7.  Clear instructions on marking/dividing.
8.  Actionable steps.
9.  Example of a reading.
10. Application constraints (scribing accuracy).

### Auto-fail (score = 0 if any)
-  Suggests just "looking closer" or magnifying the 1mm marks.

---

## MEAS-101: Determine latitude at night
- **Category:** Measurement & Nav
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** The person is lost in the Northern Hemisphere at night. They need to determine their latitude to figure out their position. They have access to basic materials: a straight stick, a protractor, some string, and a small weight.

### Prompt
```text
I'm stuck outside at night in the Northern Hemisphere and I've lost my way. I have a protractor, some string, a heavy nut for a weight, and a stick. How can I use the stars to figure out my latitude? I need a step-by-step on how to find the right star and how to use these tools to get an actual degree measurement.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Truth anchor: In the Northern Hemisphere, the altitude of the North Celestial Pole above the horizon equals your latitude.
3.  Finding the reference point: Identify the Little Dipper/Ursa Minor, or use the Big Dipper’s pointer stars to locate the star near the north celestial pole.
4.  Measuring angle: Quadrant (Quarter circle with plumb bob). Sight along top edge to star, read string angle.
5.  Accuracy check (hand widths: pinky \( \sim 1^\circ \), fist \( \sim 10^\circ \)).
6.  Correction: Horizon dip (minor, but good to mention).
7.  Southern hemisphere variation (Southern Cross/no pole star).
8.  Clear structure.
9.  Actionable steps.
10. Limitation: Doesn't give Longitude.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MEAS-102: Estimating Longitude (Local Noon Drift)
- **Category:** Measurement & Nav
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The person needs to find their longitude. They have a digital watch that is still functioning and set to GMT (London time). They have a clear sunny day and can set up a basic sun dial.

### Prompt
```text
I have a digital watch that is still set to London time (GMT), but I'm lost and need to know my longitude. I can see the sun and I have a stick I can put in the ground. How do I find "local noon" here, and what's the math to turn the time on my watch into my East/West position?
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Concept: Earth spins 15 degrees per hour.
3.  Method: Stick in ground. Mark shadow tip every 10 mins. Shortest shadow = Local Noon (Sun highest).
4.  Calculation: Compare Local Noon time on watch to 12:00 GMT.
5.  Example: If Local Noon happens at 14:00 GMT, you are 2 hours "behind" the sun -> 30 degrees West.
6.  Truth anchor: 1 hour difference = 15 degrees longitude. Earlier = East, Later = West.
7.  Equation of Time note (Sun isn't perfectly consistent, varies \( \pm 16 \) mins), nice to have but not auto-fail.
8.  Clear structure.
9.  Actionable steps.
10. Limitation: Accuracy depends on exact determination of shortest shadow.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## MEAS-103: Multiply large numbers without a calculator
- **Category:** Measurement & Math
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The person is performing engineering tasks that require multiplying large numbers and finding square roots, but no calculators are available. They have scrap wood, paper, and a ruler to build a manual calculating aid.

### Prompt
```text
I'm doing some calculations for a project and I don't have a calculator. I remember seeing these old sliding rulers made of wood or paper that could multiply big numbers just by moving them back and forth. How do I actually make one of those using a regular ruler to mark the lines? What is the math principle that makes the markings work?
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Math principle: \( \log(a \times b) = \log(a) + \log(b) \).
3.  Construction: Mark two strips with logarithmic spacing (1 at start, 10 at end, 2 is at 30.1% distance, etc.).
4.  Operation: Slide scale B's "1" to align with Scale A's number "2". Look at Scale B's "3". The aligned number on Scale A is the answer (6).
5.  Truth anchor: Adding physical distance on a log scale represents multiplication of the values.
6.  Verification points (\( \log(10)=1 \), \( \log(1)=0 \)).
7.  Clear structure.
8.  Actionable steps.
9.  Precision limitation (reading the markings).
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
1.  Directly answers the task.
2.  Setup: One bulb dry. One bulb wrapped in wet cloth (wick), swung or fanned (air movement is key).
3.  Truth anchor: Water evaporates from the wet bulb, cooling it. Drier air = faster evaporation = greater temperature difference (depression).
4.  Reading: If temps are identical, humidity is 100%. Big difference = dry air.
5.  Need for a chart (or math estimation).
6.  Water purity (distilled/rain water preferred).
7.  Clear structure.
8.  Actionable steps.
9.  Sling psychrometer concept.
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
1.  Directly answers the task.
2.  Reference facts: US Nickel = 5.00g (new). US Penny (post-82) = 2.5g. Euro 1 cent = 2.30g, etc. (Must list a valid known weight).
3.  Truth anchor: Coins are minted to tight tolerances. They make excellent emergency calibration weights.
4.  Zeroing the scale.
5.  Using water as a secondary check (5g = 5ml).
6.  Clear structure.
7.  Actionable steps.
8.  Mentioning wear on old coins reduces weight.
9.  Stacking for larger weights.
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
1.  Directly answers the task.
2.  Method: Hold thumb at arm's length. Close left eye, align thumb with target. Switch eyes. Thumb "jumps" sideways.
3.  Estimate the lateral jump distance at the target (e.g., "it jumped half a house width, say 5 meters").
4.  Multiplier: Ratio of (Arm length) to (Distance between eyes) is roughly 10:1.
5.  Truth anchor: Distance = (Lateral Jump) x 10.
6.  Example calculation.
7.  Limitations.
8.  Clear structure.
9.  Actionable steps.
10. Accuracy (rough estimate).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.
