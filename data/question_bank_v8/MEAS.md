## MEAS-201: Creating a Vernier Scale
- **Category:** Measurement / Math
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- **Situation:** You are making a machine part. You need to measure it very precisely (better than your ruler allows).
- **Resources:** A ruler with only 1mm marks, a scribe, a strip of metal.

### Prompt
```text
I need to measure a part more accurately than my ruler allows. I need to measure 0.1 millimeters, but my ruler only shows 1 millimeter marks.
How can I make a sliding tool to read the tenths?
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
- Lost at sea or in desert
- You have a clear view of the night sky (Northern Hemisphere)
- You have a stick and a protractor/string

### Prompt
```text
Explain how to determine your latitude at night using the stars and simple angle-measuring tools you can make (stick, string, weight, protractor).
Include how you find the relevant reference star and how you measure its angle above the horizon.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Truth anchor: In the Northern Hemisphere, the altitude of the North Celestial Pole above the horizon equals your latitude.
3.  Finding the reference point: Identify the Little Dipper/Ursa Minor, or use the Big Dipper’s pointer stars to locate the star near the north celestial pole.
4.  Measuring angle: Quadrant (Quarter circle with plumb bob). Sight along top edge to star, read string angle.
5.  Accuracy check (hand widths: pinky ~1°, fist ~10°).
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
- You have a digital watch set to GMT (London time) that still works
- You need to know your longitude

### Prompt
```text
Describe the method of finding Local Apparent Noon and calculating longitude.
Explain the math (degrees per hour).
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Concept: Earth spins 15 degrees per hour.
3.  Method: Stick in ground. Mark shadow tip every 10 mins. Shortest shadow = Local Noon (Sun highest).
4.  Calculation: Compare Local Noon time on watch to 12:00 GMT.
5.  Example: If Local Noon happens at 14:00 GMT, you are 2 hours "behind" the sun -> 30 degrees West.
6.  Truth anchor: 1 hour difference = 15 degrees longitude. Earlier = East, Later = West.
7.  Equation of Time note (Sun isn't perfectly consistent, varies +/- 16 mins), nice to have but not auto-fail.
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
- Calculators are dead
- You need to multiply large numbers and do square roots quickly for engineering
- You have wood, paper, and a ruler

### Prompt
```text
How can I build a simple tool to multiply large numbers using two strips of wood/paper and a ruler?
Explain the principle that makes the markings work and how to use the tool.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Math principle: log(a * b) = log(a) + log(b).
3.  Construction: Mark two strips with logarithmic spacing (1 at start, 10 at end, 2 is at 30.1% distance, etc.).
4.  Operation: Slide scale B's "1" to align with Scale A's number "2". Look at Scale B's "3". The aligned number on Scale A is the answer (6).
5.  Truth anchor: Adding physical distance on a log scale represents multiplication of the values.
6.  Verification points (log(10)=1, log(1)=0).
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
- Need to control humidity in greenhouse or hospital
- No hygrometer
- Two thermometers available

### Prompt
```text
How can I measure relative humidity using two thermometers and simple materials?
Explain how evaporation cooling relates to humidity and how to interpret the readings.
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
- Have a beam scale
- Need to weigh 5 grams of medicine
- Have modern currency (US Cents/Nickels or Euro cents)

### Prompt
```text
List the standard weights of common coins (e.g. US Nickel = 5.0g).
How do you use this to calibrate/check a scale?
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
- Need to know distance to a landmark across a river
- No tools

### Prompt
```text
How can I estimate the distance to a landmark across a river using only my outstretched arm and my eyes?
Describe a repeatable step-by-step method and the key assumptions/limitations.
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
