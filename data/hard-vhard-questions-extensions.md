## ENG-101: Generate a flat surface reference from scratch (Three Plates Method)
- **Category:** Precision Engineering
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- You need a perfectly flat metal surface to layout precision parts
- You have three roughly flat cast iron plates and scraping tools
- You have no existing reference flat or straightedge

### Prompt
```text
You have three roughly flat cast iron plates and scraping tools, but no straightedge or known-flat reference.
Explain how to process the plates to generate a truly flat reference surface. Describe the comparison/scraping sequence and the logic of why three plates are necessary, not just two.
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
- **Category:** Precision Engineering
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- You need a large metal screw for a press
- You have metal rod, files, paper, glue, and saws
- You have no lathe and no existing screw to copy

### Prompt
```text
Describe a method to layout and cut a functional screw thread on a metal rod by hand.
Include how to ensure the pitch is consistent and the helix angle is correct.
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
- A generator shaft bearing has disintegrated
- You have scrap lead, tin, antimony (or old pewter/type metal)
- You have the steel shaft and the housing

### Prompt
```text
Explain how to pour a new plain bearing in place (Babbitting).
Include shaft preparation (sooting), pre-heating, and how to prevent the metal sticking to the shaft.
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
- **Category:** Materials & Manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need waterproof mortar for a pier/cistern
- No Portland cement available
- You have quicklime, volcanic ash (or crushed brick/pottery dust), and aggregate

### Prompt
```text
Formulate a hydraulic mortar recipe and mixing procedure using these resources.
Explain why mixing just lime and sand won't work underwater, and what specific chemical role the volcanic ash plays in the cure.
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
- Building a roof with a 6m span
- You need to determine if your timber beams are strong enough
- You understand basic leverage but need to estimate tension/compression

### Prompt
```text
Explain how to identify which members of an A-frame truss are in tension vs compression.
Describe how to reinforce the bottom chord joint to prevent spread.
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

---

## CHEM-101: Extracting Ethanol (High Proof) via Fractional Distillation
- **Category:** Chemistry
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- You have 10% alcohol beer/wine
- You need 90%+ ethanol for fuel or medical disinfection
- You have a copper pot, tubing, heat, and thermometer

### Prompt
```text
Design a distillation setup and operation plan to achieve high purity.
Explain the temperature plateau, what early fractions must be discarded for safety and why, and the limits of simple distillation.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Describes the setup: Pot > Column/Head > Condenser.
3.  Crucial Truth Anchor: Methanol boils at ~64.7°C, Ethanol at ~78°C, Water at 100°C. You must discard the first fraction ("heads") which contains methanol/acetone.
4.  Explains the "Azeotrope" limit (you cannot get past ~95.6% ethanol with simple distillation).
5.  Describes "reflux" or re-distilling to increase purity.
6.  Safety: Open flame + ethanol vapor = explosion. Must seal system and control heat.
7.  Temperature monitoring logic (steady temp = pure fraction coming over).
8.  Hazards of drinking the product (blindness from methanol).
9.  Clear structure.
10. Actionable steps.

### Auto-fail (score = 0 if any)
-  Suggests distilling indoors with no ventilation.
-  Fails to mention discarding the heads (methanol risk).

---

## CHEM-102: Manufacturing Black Powder (Gunpowder)
- **Category:** Chemistry
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Need explosive for rock clearing/stump removal
- You have charcoal, sulfur, and potassium nitrate (saltpetre) crystals
- You need a reliable burn rate

### Prompt
```text
Describe the manufacturing process.
Explain why simply mixing the dry dust isn't enough for a reliable result, and describe the wet-processing steps required to make it consistent.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Ratios: ~75% KNO3, 15% Charcoal, 10% Sulfur (approximate is acceptable).
3.  Truth anchor: "Meal powder" (dry mixed dust) burns unpredictably/slowly. "Corning" (wetting, pressing into a cake, drying, and crushing into grains) allows the flame to travel between grains, increasing burn speed/pressure.
4.  Safety: Never mill metal-on-metal (spark risk). Use lead/wood/brass media.
5.  Moisture addition (dampening) is critical for safety during pressing.
6.  Sieving for grain size.
7.  Hazards: Static electricity, impact, friction.
8.  Clear structure.
9.  Includes a test burn procedure.
10. Actionable advice.

### Auto-fail (score = 0 if any)
-  Suggests grinding dry ingredients together in a metal mortar (high explosion risk).
-  Suggests creating a pipe bomb or weapon for harm (breaches safety policies) - *Note: The prompt scenario is rock clearing, but answer must remain on the manufacture process, not weaponization.*

---

## CHEM-103: Vegetable Tanning of Leather
- **Category:** Materials & Manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- You have raw hides and oak/hemlock trees
- Goal: Durable leather for shoes/belts (not rawhide)
- Time: You have weeks

### Prompt
```text
Explain the chemistry of tanning and the step-by-step process.
Include scraping, deliming/bating (neutralizing), and the tannin soaking sequence.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Explains "fleshing" (removing fat/meat) and hair removal (often using lime/ash).
3.  Truth anchor: Tanning binds collagen proteins. You must remove the basic lime (deliming) before adding acidic tannins, or the leather creates a hard surface crust and rots inside ("dead streak").
4.  Sequence: Start with weak tannin tea, progressively move to strong liquor.
5.  Sources of tannin (Oak bark, Hemlock, etc.).
6.  Rinsing and oiling ("fat liquoring") at the end to restore flexibility.
7.  Timeframes (it takes weeks/months).
8.  Hazards (alkaline burns from lime).
9.  Verification: Cutting a test strip to check color penetration.
10. Clear structure.

### Auto-fail (score = 0 if any)
-  Suggests boiling the hide (will make glue, not leather).

---

## CHEM-104: Rendering Pine Pitch/Tar for Waterproofing
- **Category:** Materials & Manufacturing
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need waterproofing for boots and boats
- You have resinous pine wood (fatwood)
- You have two metal containers

### Prompt
```text
Describe the "dry distillation" method to extract pine tar.
Explain the arrangement of the pots and temperature control.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Setup: One pot full of wood (inverted), mesh/holes in bottom, draining into a receiver pot buried in cool ground.
3.  Truth anchor: You are "cooking" the wood without oxygen (pyrolysis) to sweat out the tar. If air gets in, it burns to ash. If the receiver gets too hot, the tar boils/vaporizes.
4.  Sealing the top pot with clay/soil.
5.  Building the fire *over* the top pot.
6.  Separating tar from charcoal residue.
7.  Safety: Highly flammable vapor.
8.  Yield expectations.
9.  Clear structure.
10. Actionable steps.

---

## CHEM-105: Making Hard Soap vs Soft Soap (Potash vs Lye)
- **Category:** Chemistry
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- You made lye from wood ash, but the soap stays slimy/liquid (soft soap)
- You need hard bars for storage
- You have access to salt

### Prompt
```text
My wood-ash soap stays slimy and liquid. I need hard bars for storage.
Explain how to process this into hard soap bars and why it works.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Truth anchor: Wood ash lye is Potassium Hydroxide (KOH) -> Soft soap. Modern lye is Sodium Hydroxide (NaOH) -> Hard soap.
3.  Process: Add common salt (NaCl) to the soft soap mix.
4.  Chemistry: The sodium displaces the potassium (ion exchange), creating sodium stearate (hard soap), which precipitates out.
5.  Separation: The hard curds float, the "spent lye" sinks.
6.  Safety precautions with hot caustic liquids.
7.  Curing time.
8.  Verification check (zap test or tongue test for neutrality).
9.  Clear structure.
10. Actionable advice.

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

---

## ENERGY-101: Wood gas engine seizing with black gunk
- **Category:** Energy
- **Difficulty:** Very Hard
- **Task type:** troubleshoot

### Scenario
- Running a gasoline generator on wood gas
- The engine runs for 20 minutes then valves seize with sticky black gunk
- You are using a simple updraft gasifier

### Prompt
```text
An engine running on wood gas runs for ~20 minutes, then valves seize with sticky black gunk. Your current reactor is a simple updraft gasifier.
Diagnose the failure mode and propose a reactor + cleaning/cooling/filtration redesign that prevents the gunk from reaching the engine.
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

---

## ENERGY-102: Desulfating Lead-Acid Batteries
- **Category:** Energy
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Found car batteries that read 10V and won't take a charge
- You have a charger and distilled water
- Need to restore capacity

### Prompt
```text
Explain the chemistry of sulfation and a controlled overcharge/equalization process.
Include voltage targets and safety management.
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

---

## ENERGY-103: Principles of the Hydraulic Ram Pump
- **Category:** Energy
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- You have a stream with 2m drop
- You need to pump water up 20m to a tank
- No electricity/fuel
- You have pipe and check valves

### Prompt
```text
Explain the operating cycle of a Ram Pump (Water Hammer).
Detail the "Waste Valve" vs "Delivery Valve" tuning.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Principle: Falling water accelerates -> Waste valve slams shut -> Momentum (Water Hammer) forces high pressure slug through delivery valve -> Pressure drops -> Waste valve opens. Repeat.
3.  Truth anchor: It trades volume for height. You lose ~90% of water to lift 10%.
4.  Tuning: Waste valve must be heavy enough to open against flow, light enough to slam shut when flow accelerates.
5.  The "Snifter" valve: Needs to let a tiny air bubble in to cushion the hammer in the pressure vessel, or the tank waterlogs.
6.  Pipe rigidity (drive pipe must be rigid, not hose).
7.  Clear structure.
8.  Actionable advice.
9.  Setup geometry (Drive pipe length/slope).
10. Verification steps.

---

## ENERGY-104: Use an induction motor as a generator
- **Category:** Energy
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- You have a 3-phase AC motor (scavenged from industry) and a waterwheel
- You want to generate electricity
- It produces no power when spun

### Prompt
```text
You have a 3‑phase AC motor coupled to a waterwheel. When you spin it, you get no useful voltage.
Explain how you can wire and start it so it produces electricity, and why it must be driven above synchronous speed.
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

---

## AG-101: Clone a good fruit tree
- **Category:** Agriculture
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- You grew apples from seed; the fruit is bitter
- You found one good old apple tree
- You want to clone the good tree onto your young saplings

### Prompt
```text
You grew apples from seed and the fruit is bitter. You found one old tree with good fruit and you want to clone it.
Describe a reliable grafting technique to splice good scion wood onto a young rootstock. Explain the critical alignment needed for the graft to take.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Truth anchor: The wood (xylem) doesn't heal; only the thin green cambium layer under the bark heals. These *must* touch/cross.
3.  Technique: Slanted cut with a "tongue" notch for mechanical interlock.
4.  Scion (good wood) must be dormant (collected in winter/kept cold).
5.  Sealing: Wax/tape to prevent drying out.
6.  Timing: Spring (when sap flows in rootstock).
7.  Removing rootstock suckers.
8.  Clear structure.
9.  Actionable advice.
10. Safety with grafting knives.

---

## AG-102: Making Silage for Winter Feed
- **Category:** Agriculture
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Wet climate; can't dry hay for livestock
- Grass/Corn is available
- Need to preserve fodder for winter without rotting

### Prompt
```text
Explain the process of ensiling (fermentation).
Focus on the role of anaerobic conditions, pH drop, and packing density.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Mechanism: Anaerobic fermentation converts sugars to Lactic Acid, dropping pH to ~4, stopping rot.
3.  Truth anchor: Oxygen is the enemy. Material must be chopped (to release sugars/pack tight) and compressed heavily to exclude air.
4.  Sealing: Plastic sheets/weights. Pits or piles.
5.  Moisture content control (wilting to ~65%).
6.  Failures: Slimy/smelly (Butyric acid) = too wet/not acidic enough. Mould = Air leaks.
7.  Botulism risk in animals.
8.  Clear structure.
9.  Actionable steps.
10. Monitoring cues (sweet acid smell).

---

## AG-103: Fish Farming: Oxygen and Ammonia Management
- **Category:** Agriculture
- **Difficulty:** Medium
- **Task type:** troubleshoot

### Scenario
- Tilapia pond is cloudy
- Fish are gasping at the surface at dawn
- Mortality is rising

### Prompt
```text
Diagnose the dawn gasping behavior.
Explain the Nitrogen Cycle in aquaculture and immediate interventions.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Diagnosis: Dissolved Oxygen (DO) crash. Algae produce O2 by day but consume it by night. Dawn is the lowest point.
3.  Nitrogen Cycle: Fish Waste (Ammonia) -> Nitrite -> Nitrate. Ammonia is toxic.
4.  Intervention: Mechanical aeration (splashing), water exchange.
5.  Truth anchor: Stop feeding immediately. Food decay consumes O2 and creates Ammonia.
6.  Checking stocking density.
7.  Clear structure.
8.  Actionable advice.
9.  Cloudiness indicates algal bloom (instability).
10. Safety: Don't eat dying fish.

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

---

## COMMS-101: Simple long-range emergency transmitter
- **Category:** Comms
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- Need to signal a rescue ship 20km away
- You have a car ignition coil, car battery, and wire
- You accept this causes massive interference (broadband)

### Prompt
```text
Design a simple Spark Gap transmitter and antenna.
Explain the circuit and the role of the spark.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Components: Battery -> Buzzer/Interrupter -> Ignition Coil (High Voltage) -> Spark Gap -> Antenna/Ground.
3.  Tuning: A capacitor (Leyden jar) and inductor coil in parallel across the gap forms a resonant circuit that rings at a frequency.
4.  Truth anchor: The spark acts as a high-speed switch that excites the resonant circuit, generating RF bursts.
5.  Antenna: Long wire (quarter wave ideal, but long as possible).
6.  Safety: High voltage lethal shock hazard. Ozone production.
7.  Interference warning (illegal in civilization, okay in apocalypse).
8.  Clear structure.
9.  Actionable steps.
10. Morse Key implementation.

---

## COMMS-102: Making a Foxhole Radio (Crystal Detector)
- **Category:** Comms
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Listening for AM broadcasts
- No batteries available
- You have wire, toilet paper roll, razor blade, pencil lead

### Prompt
```text
Construct a passive receiver (Foxhole radio).
Explain how the razor blade and pencil lead act as a diode (detector).
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Circuit: Antenna -> Coil (Tuning) -> Detector -> High Impedance Earphone -> Ground.
3.  Detector mechanics: Touching the graphite (pencil) to the blued steel/oxide (razor) creates a semiconductor junction (Schottky diode).
4.  Truth anchor: The diode rectifies the AC radio wave into DC audio pulses the ear can hear. It needs NO battery (powered by the radio wave).
5.  Earphone requirement: Must be Piezo or High Impedance (old phone). Modern low-ohm earbuds won't work well without a transformer.
6.  Antenna requirement: Very long wire.
7.  Clear structure.
8.  Actionable steps.
9.  Tuning via coil wiper or capacitor.
10. Patience in finding the "hot spot" on the blade.

---

## MAT-101: Identification of Scrap Metals by Spark Testing
- **Category:** Materials
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Scavenging steel for a knife vs a prybar
- You have an angle grinder or grinding wheel
- Heap includes mild steel, high carbon steel, cast iron

### Prompt
```text
Describe the spark test for identifying metals.
Differentiate the spark patterns of Mild Steel vs High Carbon Steel vs Cast Iron.
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

---

## ENG-106: Making a "Surface Plate" from Granite Countertop
- **Category:** Precision Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need a fairly flat surface for layout
- Found a polished granite kitchen island slab
- Need to map its flatness errors

### Prompt
```text
Explain how to map the flatness of a surface using a sensitive level to find high and low spots.
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

---

## ENG-107: Casting a replacement aluminum part (Sand Casting)
- **Category:** Materials & Manufacturing
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Broken aluminum bracket critical for a pump
- You have scrap aluminum cans/engine block
- You have sand and clay (bentonite/cat litter)

### Prompt
```text
Describe the "Green Sand" casting process using a two-part flask.
Include sand preparation, venting, gating, and shrinkage allowance.
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

---

## CHEM-106: Making Calcium Carbide (Acetylene source)
- **Category:** Chemistry
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- Need acetylene for welding or bright lamps
- You have lime (CaO) and Coke/Charcoal (Carbon)
- You have a very high temperature source (Electric Arc)

### Prompt
```text
Explain the reaction to produce Calcium Carbide.
How is it then used to generate gas?
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Reaction: CaO + 3C -> CaC2 + CO.
3.  Truth anchor: Requires immense heat (~2000°C), achievable mostly by electric arc furnace. Not possible in a campfire.
4.  Generation: Drop CaC2 into water -> Acetylene (C2H2) + Lime.
5.  Safety: Acetylene is explosive over 15psi free state.
6.  Purity issues (Phosphine gas byproduct - smells like garlic, toxic).
7.  Clear structure.
8.  Actionable steps.
9.  Handling precautions (reacts with moisture in air).
10. Storage safety.

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

---

## AG-104: Troubleshooting Canning: Botulism Signs
- **Category:** Agriculture / Food Safety
- **Difficulty:** Medium
- **Task type:** troubleshoot

### Scenario
- Found a cache of home-canned beans
- Need to determine safety
- No "pop top" lids

### Prompt
```text
Explain the specific conditions Clostridium botulinum needs to grow.
List the sensory signs of spoilage and the "boil test" safety rule.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Conditions: Anaerobic (no air), Low Acid (pH > 4.6), Moist, Warm.
3.  Truth anchor: Botulism toxin is odorless and tasteless. Spoilage smells/gas (bulging) are good indicators of *other* bacteria, but their absence does not guarantee safety from botulism.
4.  Safety Rule: Boil low-acid canned goods for 10-15 minutes before eating. The toxin is heat labile (destroyed by heat), even though the spores are not.
5.  Signs: Bulging, spurting liquid, mushy texture, weird smell (for other spoilage).
6.  Caution: Never taste to test.
7.  Clear structure.
8.  Actionable steps.
9.  High acid (fruit) is generally safe from botulism.
10. Pressure canning necessity explanation.

---

## AG-105: Selecting seed potatoes (Chitting and cutting)
- **Category:** Agriculture
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- Planting season
- You have large potatoes
- Need to maximize yield

### Prompt
```text
Describe how to prepare potatoes for planting.
Include "chitting" (greensprouting) and rules for cutting tubers.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Chitting: Expose to light/warmth to start strong sprouts (eyes).
3.  Cutting: Large potatoes can be cut, but each piece must have at least one "eye".
4.  Truth anchor: Cut surfaces must "cure" (scab over) for a day or two before planting to prevent rot in wet soil.
5.  Planting depth/hilling up.
6.  Disease check (discard mushy/black centers).
7.  Clear structure.
8.  Actionable steps.
9.  Crop rotation importance (solanaceae).
10. Timing relative to frost.

---

## ENG-108: Square a large foundation with a tape
- **Category:** Measurement / Math
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- Layout a building foundation 20m x 30m
- Needs perfectly square corners
- No optical square

### Prompt
```text
I need to lay out a large rectangular foundation (20 m x 30 m) with perfectly square corners using only a tape measure and stakes/string.
Describe a practical method to square the first corner and verify the full rectangle is square.
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

---

## ENERGY-105: Air-Lock in a gravity water system
- **Category:** Energy / Fluid Dynamics
- **Difficulty:** Medium
- **Task type:** troubleshoot

### Scenario
- Pipeline from spring (high) to village (low) stops flowing
- No leaks visible
- Pipe goes up and down over hills

### Prompt
```text
Explain the "Air Lock" phenomenon in undulating pipes.
How do you clear it and prevent it?
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

---

## CHEM-107: Low-tech extraction of plant scents
- **Category:** Chemistry
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need clove/mint oil for toothache or insecticide
- Steam distillation is too complex for current setup
- You have alcohol or oil/fat

### Prompt
```text
Steam distillation is too complex with my current setup.
Describe two low-tech ways to extract plant scents using either fat/oil or alcohol, and how you separate/collect the final product.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Maceration: Soak plant material in carrier oil/alcohol warm.
3.  Enfleurage: Press petals into cold fat plates (for delicate scents).
4.  Truth anchor: If using alcohol, you can evaporate the alcohol to leave concentrated oil (extract). If using carrier oil, it stays dilute (infused oil).
5.  Straining/Pressing.
6.  Refresh material (re-soak fresh plants in same liquid) to boost strength.
7.  Storage (dark glass).
8.  Clear structure.
9.  Actionable steps.
10. Safety (flammability of alcohol).

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

---

## AG-106: Saving Tomato Seeds (Fermentation step)
- **Category:** Agriculture
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Harvesting tomatoes
- Need to save seeds for next year
- Just drying them leads to poor germination

### Prompt
```text
Explain why tomato seeds need a fermentation bath before drying.
Describe the process.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Mechanism: Tomato seeds have a gelatinous inhibitor coat.
3.  Process: Squeeze seeds+pulp into jar. Add water. Let sit 2-4 days until mold forms/scum.
4.  Truth anchor: Fermentation destroys the inhibitor coat and kills some seed-borne diseases.
5.  Cleaning: Good seeds sink, bad seeds/pulp float. Pour off top.
6.  Drying: Rapidly on screens/paper.
7.  Storage: Cool/Dry.
8.  Clear structure.
9.  Actionable steps.
10. Time limit (sprouting in jar).

---

## ENG-109: Making a "Vise" from wood
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need to hold workpieces
- No metal screw available
- You have wedges and timber

### Prompt
```text
Design a wedge-actuated woodworking vise or clamp.
Explain the mechanics of locking it.
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

---

## ENG-110: Troubleshooting a Rope Pump (Washer pump)
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** troubleshoot

### Scenario
- Rope pump installed in well
- Water comes up but splashes back down; efficiency is terrible
- Pipe is vertical

### Prompt
```text
Diagnose the back-flow issue.
Check clearance tolerances and wheel speed.
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

---

## CHEM-108: Purify raw clay for pottery
- **Category:** Materials
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- Dug raw clay from riverbank
- It has rocks, sand, and roots
- Need smooth clay for pots

### Prompt
```text
I dug raw clay from a riverbank but it is full of rocks, sand, and roots.
Describe a water-based process to separate the fine clay from the grit and purify it for pottery.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Process: Mix dirt into thin slurry (slip) with water.
3.  Settling: Heavy sand sinks fast (seconds/minutes). Fine clay stays suspended (hours).
4.  Truth anchor: Pour off the milky liquid (clay water) into a drying bed, leave the sediment (sand/rocks) behind.
5.  Drying: Evaporate until plastic.
6.  Wedging: Knead to remove air bubbles.
7.  Clear structure.
8.  Actionable steps.
9.  Testing plasticity (coil test).
10. Repeated cycles for purity.

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

---

## AG-107: Using "Trap Crops" in gardening
- **Category:** Agriculture
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Pests (beetles/aphids) destroying main crop
- No pesticides
- You have seeds for nasturtium, mustard, sunflowers

### Prompt
```text
Explain the trap crop strategy.
How does planting a sacrificial crop save the main harvest?
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Mechanism: Pest prefers the trap crop (more tasty/attractive) over the cash crop.
3.  Timing: Plant trap crop earlier so it establishes first.
4.  Truth anchor: You must manage the trap crop (destroy pests on it) or it just becomes a nursery for more pests.
5.  Examples: Nasturtiums for aphids, Blue Hubbard squash for vine borers.
6.  Intercropping placement.
7.  Clear structure.
8.  Actionable steps.
9.  Push-Pull strategy mention (repel from main, attract to trap).
10. Observation routine.

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

---

## SAFE-101: Confined Space Entry (Wells/Tanks)
- **Category:** Safety
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Person collapsed inside a freshly dug well or empty biogas tank
- Rescuers want to jump in
- Invisible gas hazard

### Prompt
```text
Stop the rescue. Write a confined space entry/rescue protocol.
Identify the specific gas hazards (CO2, H2S, O2 deficiency) and checking method without electronics.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Truth anchor: Most well rescuers die. "One dead, two dead, three dead." DO NOT ENTER without verifying atmosphere.
3.  Hazards: CO2 (heavy, sinks), H2S (rotten eggs, numbs nose, toxic), Methane (lighter, explosive), Low Oxygen.
4.  Test: Bucket test (lower a candle/lantern). If it dims/goes out -> Bad air.
5.  Ventilation: Force fresh air in (fan/bellows) for long duration.
6.  Rescue: Do not go in. Use grappling hook or rope if attached. If entry needed, must have lifeline and topside team to haul out.
7.  Harness requirement.
8.  Clear structure.
9.  Actionable steps.
10. Trigger: If candle flickers, abort.

---

## SAFE-102: Identifying Lead Paint/Pipes
- **Category:** Safety
- **Difficulty:** Medium
- **Task type:** investigate

### Scenario
- Scavenging old building for water pipes/crib
- Need to avoid lead poisoning
- No chemical test kit

### Prompt
```text
Describe physical characteristics to identify lead pipes and paint.
(Hardness, sound, oxide color).
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Pipes: Soft (scratches with fingernail/knife to shiny silver), dull grey oxidizes, "Thud" sound when struck (not ringing like steel/copper). Non-magnetic. Wipe joints (bulbus wiped joints).
3.  Paint: "Alligatoring" (square crack pattern), chalky residue.
4.  Truth anchor: Assume lead in old systems until proven otherwise.
5.  Solubility in acidic water warning.
6.  Clear structure.
7.  Actionable steps.
8.  Heavy weight.
9.  Dangers for children/pregnant.
10. Mitigation (run water cold).

---

## MAT-102: Making a Waterproof Lime-Casein Paint (Whitewash variant)
- **Category:** Materials
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need durable, sanitary coating for hospital/dairy walls
- Plain whitewash rubs off
- You have Lime, Milk (Curds), Pigment

### Prompt
```text
Formulate a "Milk Paint" recipe.
Explain the reaction between Casein and Lime.
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

---

## ENG-111: Troubleshooting a Solar Thermal Hot Water Loop
- **Category:** Energy
- **Difficulty:** Hard
- **Task type:** troubleshoot

### Scenario
- Thermosyphon system (Tank above collector)
- Water gets hot in collector but doesn't move to tank
- Pipes are hot, tank is cold

### Prompt
```text
Diagnose the flow stoppage.
Check for "vapor lock" and pipe slope issues.
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

---

## ORG-101: Designing a Quarantine Zone ("Red/Green" Zones)
- **Category:** Organization / Medical
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Outbreak of contagious unknown fever
- Need to care for sick while keeping community safe
- One building available

### Prompt
```text
Design the physical layout and flow of a cholera/Ebola treatment unit.
Detail the "Uni-directional flow" concept, Donning/Doffing areas, and waste path.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Zones: Green (Clean/Staff), Yellow (Transition/Laundry), Red (Patient).
3.  Flow: Staff enter Green -> Put on PPE -> Enter Red -> Treat -> Doff PPE in Yellow -> Shower/Wash -> Exit to Green. NEVER go Red to Green.
4.  Truth anchor: Waste moves Red -> Burn pit/Latrine. Never crosses clean path.
5.  Fencing/barriers visibility.
6.  Water supply direction (Clean to Dirty).
7.  Visitor distance rules.
8.  Clear structure.
9.  Actionable steps.
10. Dead body management zone.

---

## ETH-101: Ethical Triage: The "Utility" vs "Equality" Dilemma
- **Category:** Ethics
- **Difficulty:** Medium
- **Task type:** critique

### Scenario
- One ventilator/advanced treatment spot available
- Two patients: A) 60yo community leader/doctor, B) 20yo labourer
- Both equally sick

### Prompt
```text
Analyze the ethical frameworks (Utilitarian vs Egalitarian) for this decision.
Propose a tie-breaker policy decided *before* the crisis.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Utilitarian: Save the doctor because they save others (Instrumental value) or Life-years saved (Youth).
3.  Egalitarian: First come first served, or lottery. Every life equal worth.
4.  Truth anchor: Decisions made in the moment are biased. Pre-agreed criteria (e.g., "Instrumental value applies only during active crisis") reduces social fracture.
5.  Recognizes valid arguments on both sides.
6.  Proposes a transparent mechanism (e.g., Committee blind to social status, or strict lottery).
7.  Avoiding corruption.
8.  Clear structure.
9.  Actionable policy drafting.
10. Handling the grief of the family not chosen.

---

## COMMS-103: Heliograph Signalling (Mirror flash)
- **Category:** Comms
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
- Need long distance (10km) comms in sunlight
- No radio
- Have mirrors

### Prompt
```text
Describe how to aim a mirror flash accurately at a distant target.
Explain the "foresight" method.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Aiming problem: You can't see where your reflection lands at 10km.
3.  Method: Hold a sighting stick/finger in front of you, aligned with the target.
4.  Truth anchor: Maneuver the mirror until the shadow of the sighting tip is in the center of the mirror's reflected bright spot. Or, flash the reflection onto the foresight stick's tip.
5.  Shuttering for Morse code.
6.  Range capabilities (line of sight).
7.  Clear structure.
8.  Actionable steps.
9.  Sun position issues.
10. Emergency signal (SOS).

---

## ENG-112: Mixing and Using Cobb (Mud/Straw Building)
- **Category:** Engineering
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Building shelter walls
- Clay soil, sand, straw available
- Wet climate

### Prompt
```text
Describe the Cobb mix ratio and testing method.
Why is straw added? Why is sand added?
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

---

## CHEM-109: Make disinfectant from saltwater and electricity
- **Category:** Chemistry
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Need disinfectant (Sodium Hypochlorite)
- Have Salt, Water, Car Battery, Carbon rods (pencils)

### Prompt
```text
How can I manufacture disinfectant using salt, water, a car battery, and carbon electrodes?
Describe a safe setup, what products form, and how you end up with a usable disinfecting solution.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Setup: Saltwater electrolyte. Electrodes connected to DC source.
3.  Anode (+): Chlorine Gas (Cl2). Cathode (-): Hydrogen (H2) and Sodium Hydroxide (NaOH).
4.  Truth anchor: To make bleach, you must let the Chlorine mix with the Sodium Hydroxide in the solution. (Don't separate the compartments).
5.  Reaction: 2NaOH + Cl2 -> NaCl + NaClO (Bleach) + H2O.
6.  Safety: Chlorine gas is deadly. Ventilation is critical. Hydrogen is explosive.
7.  Carbon electrodes required (Metal will dissolve/corrode).
8.  Concentration limits.
9.  Clear structure.
10. Actionable steps.

---

## SAFE-103: Chainsaw Safety (Kickback)
- **Category:** Safety
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Using a scavenged chainsaw
- Novice operator
- Clearing storm debris

### Prompt
```text
Explain the mechanics of "Kickback".
Identify the "Kill Zone" on the bar nose and body positioning to survive it.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Mechanism: Upper quadrant of the bar nose (Kickback zone). If this touches wood, the chain grabs and drives the bar violently upward/backward.
3.  Truth anchor: The reaction is faster than human reaction time. You cannot "catch" it.
4.  Positioning: Never stand directly behind the saw path. Left arm straight (to lock the bar). Thumb wrapped around handle.
5.  Chain brake function.
6.  Do not cut over shoulder height.
7.  Clear structure.
8.  Actionable steps.
9.  Plunge cutting risks.
10. PPE relevance (chaps).

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

---

## ENG-113: Making Charcoal for Smelting vs Cooking
- **Category:** Energy / Materials
- **Difficulty:** Medium
- **Task type:** compare

### Scenario
- Need fuel for a forge (smelting iron) vs BBQ
- Making charcoal
- Selecting wood and process

### Prompt
```text
Differentiate "Fuel Charcoal" from "Smithing Charcoal".
How does hardwood vs softwood selection affect maximum temperature and burn rate?
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

---

## AG-108: Is a volunteer squash safe to eat?
- **Category:** Agriculture / Safety
- **Difficulty:** Medium
- **Task type:** troubleshoot

### Scenario
- A squash plant grew from the compost pile
- It looks great; produced gourds
- You want to eat them

### Prompt
```text
A volunteer squash grew from my compost. It looks like a zucchini.
Is it safe to eat? Explain the risks, warning signs, and what simple checks can help you decide to discard it.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Mechanism: Squash cross-pollinate easily with wild gourds/ornamental gourds.
3.  Result: The offspring produce high levels of Cucurbitacin E (toxic/bitter).
4.  Truth anchor: The Taste Test. If a small piece is extremely bitter, spit it out and destroy the plant. Toxicity can cause severe illness/hair loss/death.
5.  Volunteers are F2 hybrids of unknown parentage.
6.  Cooking does *not* destroy the toxin.
7.  Clear structure.
8.  Actionable steps.
9.  Saving seed risks.
10. Symptoms (nausea, diarrhea).

---

## AG-109: Grow crops in drought without irrigation
- **Category:** Agriculture
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Drought conditions
- No irrigation water available
- Soil has deep winter moisture

### Prompt
```text
I need to grow crops in a drought with no irrigation, but the soil has deep winter moisture.
Explain the farming principles required to succeed here. Include how to manage spacing and surface cultivation to preserve moisture.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Principle: Utilize stored residual soil moisture from the wet season.
3.  Spacing: Much wider spacing (e.g., 2x or 4x normal) to give each plant a larger root zone reservoir.
4.  Dust Mulch: Cultivating the top 2-3 inches to break capillary action. This dry dust layer prevents deep moisture from wicking to the surface and evaporating.
5.  Truth anchor: Never water lightly. It encourages shallow roots which die. Force roots deep.
6.  Suitable crops (tomatoes, melons, grains).
7.  Weed control (absolute elimination required).
8.  Clear structure.
9.  Actionable steps.
10. Timing (early planting).

---

## SAFE-104: Leaking munition with a smoking waxy substance
- **Category:** Safety
- **Difficulty:** Hard
- **Task type:** procedure

### Scenario
- Scavenging; found an old canister or munition that leaked
- Waxy yellow/white substance
- Starts smoking when touched

### Prompt
```text
Identify the substance and immediate first aid.
Describe how to handle/isolate it safely.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  ID: A pyrophoric munition filler (commonly white phosphorus). It ignites in air.
3.  First Aid: Cover with MUD or WET cloth immediately. Immerse body part in water.
4.  Truth anchor: It burns until oxygen is removed or it is consumed. Water blocks oxygen. Do not let it dry out or it re-ignites.
5.  Removal: Surgical removal of particles while underwater.
6.  Chemical hazard: Also toxic absorption.
7.  Do not use oil/grease (solubilizes P and increases absorption).
8.  Clear structure.
9.  Actionable steps.
10. Smoke toxicity.

---

## CHEM-110: Making Wood Glue from Fish (Swim Bladders)
- **Category:** Materials
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- Need high strength glue for bow-making
- Have fish waste
- Want a high-strength, flexible glue

### Prompt
```text
Describe how to process fish swim bladders into a high-strength glue.
Comparison with skin glue.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Source: Air bladders (sounds) of fish (sturgeon/cod/catfish).
3.  Process: Wash, remove blood, dry. Rehydrate in warm water (not boiling) to dissolve.
4.  Truth anchor: Isinglass is purer/stronger/more flexible than skin glue. Good for composites.
5.  Temperature sensitivity (don't cook it to death).
6.  Water reversibility.
7.  Clear structure.
8.  Actionable steps.
9.  Hygiene.
10. Storage.

---

## ENG-114: Troubleshoot a hot-air engine that won’t run
- **Category:** Energy
- **Difficulty:** Very Hard
- **Task type:** troubleshoot

### Scenario
- Built a gamma-type stirling engine model
- It won't run when heated
- Moves freely by hand

### Prompt
```text
Diagnose common Stirling Engine failures.
Focus on friction, air leaks, and correct timing between the two moving elements.
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

---

## ORG-102: Managing a community after a violent event (Justice)
- **Category:** Org / Ethics / Psych
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- An execution or violent banishment occurred yesterday
- Community is traumatized and silent
- Rumors of counter-violence

### Prompt
```text
Propose a restorative justice session or community meeting agenda to lower tension.
What rituals or actions rebuild trust?
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Goal: Acknowledge the event, do not hide it.
3.  Restorative action: Allow grief/anger expression in controlled setting.
4.  Truth anchor: Reaffirm the rules. "We did X because of Y. We are now safe." Uncertainty breeds fear.
5.  Ritual: Shared meal or work task to re-bond.
6.  Monitoring for retribution groups.
7.  Transparency on future process.
8.  Clear structure.
9.  Actionable steps.
10. Leadership visibility.

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
