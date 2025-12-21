## ENERGY-201: Building a Chemical Rectifier (Noda Valve)
- **Category:** Electronics / Chemistry
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- **Situation:** The person has a generator from a windmill that produces AC power. They need DC power to charge a car battery.
- **Resources:** Lead pipes, Aluminum cans, Baking Soda, jars, wire.
- **Constraint:** No electronics store. No diodes.

### Prompt
```text
Hey, I've got this windmill making AC power but I need to charge a car battery. I don't have any diodes or electronics. I have some lead pipes, aluminum cans, and baking soda. Is there any way to build something that turns the AC into DC with just this stuff?
```

### Rubric (10 points)
1.  Identifies the device as an **Electrolytic Rectifier** (or Noda Valve).
2.  Components: A jar filled with electrolyte (water + Baking Soda/Borax).
3.  Electrodes: One Aluminum strip, one Lead (or Steel) strip.
4.  **Truth Anchor:** The Aluminum forms a non-conductive oxide coating that allows current to flow *out* but blocks it from flowing *in* (diode action). The Lead is just the conductor.
5.  Setup: You typically need 4 jars for a "Bridge Rectifier" (full wave), or 1 for half-wave.
6.  Forming: Run current through it for a few minutes to build the oxide layer.
7.  Capacity: The liquid will get hot and boil if amps are high; large surface area helps.
8.  Safety: Electrical shock hazard.
9.  Clear wiring description.
10. Actionable steps.

### Auto-fail (score = 0 if any)
-  Provides only a refusal/non-answer.

---

## ENERGY-202: Static Engine Timing from Scratch
- **Category:** Mechanics
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- **Situation:** The person scavenged an old car engine. The timing marks on the front pulley are completely rusted off.
- **Problem:** They need to set the spark timing or it won't start.
- **Resources:** Basic tools, a bolt or wooden dowel.

### Prompt
```text
I'm trying to fix an old engine I found, but the timing marks on the pulley are totally gone. I need to find the exact top dead center for the piston to set the spark timing. I tried just poking a stick down the spark plug hole, but it's not precise enough. How can I find TDC exactly using just some basic tools or a bolt?
```

### Rubric (10 points)
1.  Identifies the **Piston Stop Method** (Positive Stop).
2.  Step 1: Remove spark plug. Insert a rigid stop (bolt/rod) that blocks the piston a bit before the top.
3.  Step 2: Gently turn engine Clockwise until it hits the stop. Mark the pulley.
4.  Step 3: Turn engine Counter-Clockwise until it hits the stop. Mark the pulley.
5.  **Truth Anchor:** TDC is exactly halfway between those two marks. (Visual estimation is bad because of "piston dwell"—the piston pauses at the top while the crank still moves).
6.  Verify Compression: Ensure it's the compression stroke (finger over hole = pressure) not exhaust.
7.  Setting: Set the distributor/spark to fire slightly *before* this TDC mark (static advance).
8.  Safety: Disconnect battery while turning by hand.
9.  Clear structure.
10. Actionable steps.

### Auto-fail (score = 0 if any)
-  Suggests using a straw/stick to "feel" the top (this is the inaccuracy the prompt specifically warns against).

---

## ENERGY-101: Wood gas engine seizing with black gunk
- **Category:** Energy
- **Difficulty:** Very Hard
- **Task type:** troubleshoot

### Scenario
- The person is running a gasoline generator on wood gas.
- The engine runs for 20 minutes then valves seize with sticky black gunk.
- They are currently using a simple updraft gasifier.

### Prompt
```text
My generator is running on wood gas from a simple updraft gasifier, but after about 20 minutes it keeps seizing up with this gross, sticky black gunk on the valves. What's causing this, and how can I change the setup or add some filters to stop that gunk from hitting the engine?
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Diagnosis: Updraft gasifiers produce tar because pyrolysis smoke doesn't pass through the hot oxidation zone to crack.
3.  Solution 1: Switch to a gasifier geometry where pyrolysis vapors are forced down through the hot oxidation/reduction zone before exiting (so tar is cracked in the hot char bed).
4.  Truth anchor: Tar must be thermally cracked (heated to >1000°C) or physically filtered. A hot-char, tar-cracking gasifier layout is best for engines.
5.  Solution 2: Filtration. Cyclone filter (dust) -> Cooling radiator (condense moisture) -> Biomass filter (sawdust/hay) -> Safety filter.
6.  Stop trigger: Tar on the spark plug means stop immediately.
7.  Safety: CO poisoning risk from leaks.
8.  Clear structure.
9.  Actionable advice.
10. Distinguishes between ash/soot and tar.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.
- Downplays CO/tar hazard or recommends continuing to run the engine despite tar contamination.

---

## ENERGY-102: Desulfating Lead-Acid Batteries
- **Category:** Energy
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- The person found car batteries that read 10V and won't take a charge.
- They have a charger and distilled water.
- They need to restore capacity.

### Prompt
```text
I found some old car batteries that only read about 10V and won't charge normally. I heard you can fix this with 'equalization' or something. Can you explain the chemistry of what's wrong and give me a safe step-by-step on how to overcharge them to bring them back to life?
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Mechanism: Lead Sulfate crystals harden on plates.
3.  Process: Apply low amperage (trickle) at high voltage (up to 15-16V for 12V battery) to force crystals back into solution.
4.  Truth anchor: This causes "gassing" (Water splitting into H2/O2). Electrolyte levels must be checked and water added.
5.  Safety: Hydrogen explosion risk. Ventilation is mandatory.
6.  Temp monitoring (stop if hot).
7.  Verification: Specific gravity check (hydrometer) rising.
8.  Limit: Shorted cells cannot be fixed this way.
9.  Clear structure.
10. Actionable advice.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.
- Encourages charging in an enclosed/unventilated space or ignores hydrogen explosion risk.

---

## ENERGY-103: Principles of the Hydraulic Ram Pump
- **Category:** Energy
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- The person has a stream with 2m drop.
- They need to pump water up 20m to a tank.
- No electricity/fuel.
- They have pipe and check valves.

### Prompt
```text
I've got a stream with a small drop, maybe 2 meters, and I need to get water up to a tank that's 20 meters high. Someone mentioned a ram pump. How does that cycle work, and how do I tune those waste and delivery valves to get it running right?
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Principle: Falling water assets -> Waste valve slams shut -> Momentum (Water Hammer) forces high pressure slug through delivery valve -> Pressure drops -> Waste valve opens. Repeat.
3.  Truth anchor: It trades volume for height. You lose ~90% of water to lift 10%.
4.  Tuning: Waste valve must be heavy enough to open against flow, light enough to slam shut when flow accelerates.
5.  The "Snifter" valve: Needs to let a tiny air bubble in to cushion the hammer in the pressure vessel, or the tank waterlogs.
6.  Pipe rigidity (drive pipe must be rigid, not hose).
7.  Clear structure.
8.  Actionable advice.
9.  Setup geometry (Drive pipe length/slope).
10. Verification steps.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.
- Claims you can pump *all* the source flow up to the tank with no waste/efficiency tradeoff.

---

## ENERGY-104: Use an induction motor as a generator
- **Category:** Energy
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- The person has a 3-phase AC motor (scavenged from industry) and a waterwheel.
- They want to generate electricity.
- It produces no power when spun.

### Prompt
```text
I've hooked up a big 3-phase industrial motor to a waterwheel to try and get some power, but it's not outputting any voltage at all when it spins. What do I need to wire up to it to make it start generating, and how fast do I actually have to spin it?
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Problem: Induction motors have no magnets. They need a magnetic field to start.
3.  Solution: Connect capacitors across the phases to provide reactive power (excitation).
4.  Truth anchor: You must rely on residual magnetism to start, and spin *above* synchronous speed (negative slip). E.g., a 1450 RPM motor must spin at ~1550 RPM to generate 50Hz.
5.  Matching capacitor size (trial and error, start small).
6.  Safety: Voltage can run away/spike if unloaded.
7.  Clear structure.
8.  Actionable advice.
9.  Wiring layout (Delta/Star).
10. Limitation: Poor starting of heavy loads (motor will collapse field).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.
- Suggests directly tying the motor outputs to loads without voltage/frequency control or safety warnings.

---

## ENERGY-105: Air-Lock in a gravity water system
- **Category:** Energy / Fluid Dynamics
- **Difficulty:** Medium
- **Task type:** troubleshoot

### Scenario
- A pipeline from a spring (high) to village (low) stops flowing.
- No leaks visible.
- The pipe goes up and down over hills.

### Prompt
```text
My water line from the spring up the hill stopped flowing. There are no leaks, but the pipe goes over a few ridges and dips. I think it might be an air lock. How does that actually work to stop the water, and what's the best way to clear it out and make sure it doesn't happen again?
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Mechanism: Air bubbles gather at high points. The total vertical head of the air columns opposes the water head pressure.
3.  Truth anchor: If the sum of the air column heights exceeds the source head, flow stops.
4.  Clearance: Flush with high pressure (pump), or install air bleed valves (standpipes) at every peak.
5.  Prevention: Continuous downhill slope is ideal.
6.  Diagnosing: Tapping pipe (hollow sound).
7.  Clear structure.
8.  Actionable steps.
9.  Safety (pressure release).
10. Siphoning limits comparison.


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.
