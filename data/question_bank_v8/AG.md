## AG-201: Extracting Rennet for Cheese Making
- **Category:** Agriculture / Food Science
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- **Situation:** You have 500L of milk and need to make hard cheese for winter. You have no tablets to curdle the milk.
- **Resources:** A calf you just slaughtered.

### Prompt
```text
We have too much milk and need to make hard cheese. We don't have the commercial tablets to curdle it.
We just slaughtered a calf that was still drinking milk.
Which part of the calf do we need, and how do we prepare it to curdle the milk?
```

### Rubric (10 points)
1.  Source: Identify the **Fourth Stomach** (Abomasum). It *must* be from an unweaned (milk-fed) calf.
2.  Reason: An adult cow's stomach produces pepsin (makes cheese bitter/hard); a calf produces chymosin (rennet).
3.  Preparation: Clean gently (don't wash away the enzyme mucus), inflate or stretch, and dry/salt it.
4.  **Truth Anchor:** Heat kills the enzyme. Do not cook/boil the stomach.
5.  Activation: Cut a small strip of the dried stomach and soak it in cool/warm water (or whey) to extract the enzyme liquid.
6.  Application: Add this liquid to the warm milk to set the curd.
7.  Storage: The dried stomach lasts a long time; the liquid spoils fast.
8.  Clear structure.
9.  Actionable steps.
10. Vegetable alternatives (Thistle/Fig) as backup.

### Auto-fail (score = 0 if any)
-  Suggests using the Rumen (1st stomach) or boiling the stomach.

---

## AG-202: Extraction of Penicillin (The "pH Swing")
- **Category:** Medicine / Chemistry
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
- **Situation:** You grew the blue Penicillium mold on broth. The liquid is weak and full of impurities.
- **Goal:** You need to extract the medicine into a clean, concentrated form.
- **Resources:** Vinegar (Acid), Baking Soda (Base), Vegetable Oil, Water.

### Prompt
```text
We grew the blue mold on soup broth, but the liquid is too weak and dirty to use.
How do we extract the penicillin from the water into a pure form using vegetable oil, vinegar, and baking soda?
```

### Rubric (10 points)
1.  Identifies the **Solvent Extraction** method (specifically the pH swing).
2.  Step 1 (Acidify): Add vinegar to the broth (lower pH).
3.  **Truth Anchor 1:** In acid, Penicillin becomes soluble in organic solvents (oil) but not water.
4.  Step 2 (Extract): Mix acidified broth with oil. The Penicillin moves into the oil. Discard the broth.
5.  Step 3 (Alkalinize): Mix the oil with clean water containing baking soda (raise pH).
6.  **Truth Anchor 2:** As a salt (neutral/base), Penicillin becomes soluble in water, but not oil. It moves back into the clean water. Discard the oil.
7.  Result: A concentrated solution of Penicillin in clean water.
8.  Temperature warning: Keep everything cold (heat destroys Penicillin).
9.  Safety: Do not inject oil.
10. Clear structure.

### Auto-fail (score = 0 if any)
-  Suggests injecting the mold broth directly (sepsis risk).
-  Suggests boiling it to concentrate (destroys drug).

---

## AG-203: Detoxifying Cassava (Manioc)
- **Category:** Agriculture / Food Safety
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
- **Situation:** You are starving. You found large tubers that look like Cassava/Manioc.
- **Problem:** Locals call it "Bitter" and say it kills you if you cook it wrong.
- **Resources:** Water, grater/scraper, fire.

### Prompt
```text
We found these big roots called "Bitter Manioc". We are starving.
We heard that just boiling them isn't enough to stop the poison.
How exactly do we prepare them so we don't die?
```

### Rubric (10 points)
1.  Identifies the toxin: **Cyanide**.
2.  **Truth Anchor:** The cell walls must be ruptured to release the enzyme that frees the cyanide gas. Boiling whole chunks keeps the poison inside.
3.  Step 1: Peel and **Grate/Mash** the roots to a pulp (essential).
4.  Step 2: Soak/Ferment or Squeeze. Squeezing the milky liquid out removes a lot of toxin.
5.  Step 3: Roast/Dry the pulp. The heat drives off the remaining cyanide gas.
6.  Signs of safety: "Sweet" smell (no almond/bitter smell).
7.  Symptoms of failure: Rapid breathing, weakness.
8.  Clear structure.
9.  Actionable steps.
10. Warning: Do not drink the squeeze water (concentrated poison).

### Auto-fail (score = 0 if any)
-  Suggests simply boiling or roasting the whole root.

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


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


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


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


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


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


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


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


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


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


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


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


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


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


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


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


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


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


---
