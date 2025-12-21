## AG-201: Extracting Rennet for Cheese Making
- **Category:** Agriculture
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
The user has 500L of milk and needs to make hard cheese for winter storage to avoid spoilage. They have no commercial rennet or citric acid. They have just slaughtered a young calf that was still nursing/milk-fed.

### Prompt
```text
I have a huge amount of fresh milk and I need to turn it into hard cheese so it doesn't go to waste, but I don't have any of those store-bought rennet tablets. We just butchered a calf that was still drinking milk from its mother. Is there something inside the calf I can use to make the milk curdle? How do I get it ready and use it?

```

### Rubric (10 points)

1. Source: Identify the **Fourth Stomach** (Abomasum). It *must* be from an unweaned (milk-fed) calf.
2. Reason: An adult cow's stomach produces pepsin (makes cheese bitter/hard); a calf produces chymosin (rennet).
3. Preparation: Clean gently (don't wash away the enzyme mucus), inflate or stretch, and dry/salt it.
4. **Truth Anchor:** Heat kills the enzyme. Do not cook/boil the stomach.
5. Activation: Cut a small strip of the dried stomach and soak it in cool/warm water (or whey) to extract the enzyme liquid.
6. Application: Add this liquid to the warm milk to set the curd.
7. Storage: The dried stomach lasts a long time; the liquid spoils fast.
8. Clear structure.
9. Actionable steps.
10. Vegetable alternatives (Thistle/Fig) as backup.

### Auto-fail (score = 0 if any)

* Suggests using the Rumen (1st stomach) or boiling the stomach.

---

## AG-202: Extraction of Penicillin (The "pH Swing")

* **Category:** Medicine / Chemistry
* **Difficulty:** Very Hard
* **Task type:** procedure

### Scenario

The user has successfully grown Penicillium mold on a liquid broth. However, the raw broth is too dilute and contaminated for medical use. They need to concentrate the penicillin into a pure aqueous solution using basic household chemicals and oil.

### Prompt

```text
I managed to grow that blue mold on some soup broth to make penicillin, but the liquid is a mess—it's dirty and seems way too weak to actually help anyone. I have some vegetable oil, vinegar, and baking soda. How do I use these to pull the medicine out of the broth and get it into a clean, concentrated form?

```

### Rubric (10 points)

1. Identifies the **Solvent Extraction** method (specifically the pH swing).
2. Step 1 (Acidify): Add vinegar to the broth (lower pH).
3. **Truth Anchor 1:** In acid, Penicillin becomes soluble in organic solvents (oil) but not water.
4. Step 2 (Extract): Mix acidified broth with oil. The Penicillin moves into the oil. Discard the broth.
5. Step 3 (Alkalinize): Mix the oil with clean water containing baking soda (raise pH).
6. **Truth Anchor 2:** As a salt (neutral/base), Penicillin becomes soluble in water, but not oil. It moves back into the clean water. Discard the oil.
7. Result: A concentrated solution of Penicillin in clean water.
8. Temperature warning: Keep everything cold (heat destroys Penicillin).
9. Safety: Do not inject oil.
10. Clear structure.

### Auto-fail (score = 0 if any)

* Suggests injecting the mold broth directly (sepsis risk).
* Suggests boiling it to concentrate (destroys drug).

---

## AG-203: Detoxifying Cassava (Manioc)

* **Category:** Agriculture / Food Safety
* **Difficulty:** Medium
* **Task type:** procedure

### Scenario

The user is facing food scarcity and has located a patch of Bitter Cassava (Manioc). They are aware that the plant is toxic but do not know the specific mechanical process required to make it safe for consumption.

### Prompt

```text
We found a bunch of these big roots that look like Cassava, but the local people here are calling it "Bitter Manioc" and say it's deadly if you don't fix it right. They said just boiling it like a potato won't stop the poison. We're starving, so how exactly are we supposed to prepare this so we don't die?

```

### Rubric (10 points)

1. Identifies the toxin: **Cyanide**.
2. **Truth Anchor:** The cell walls must be ruptured to release the enzyme that frees the cyanide gas. Boiling whole chunks keeps the poison inside.
3. Step 1: Peel and **Grate/Mash** the roots to a pulp (essential).
4. Step 2: Soak/Ferment or Squeeze. Squeezing the milky liquid out removes a lot of toxin.
5. Step 3: Roast/Dry the pulp. The heat drives off the remaining cyanide gas.
6. Signs of safety: "Sweet" smell (no almond/bitter smell).
7. Symptoms of failure: Rapid breathing, weakness.
8. Clear structure.
9. Actionable steps.
10. Warning: Do not drink the squeeze water (concentrated poison).

### Auto-fail (score = 0 if any)

* Suggests simply boiling or roasting the whole root.

---

## AG-101: Clone a good fruit tree

* **Category:** Agriculture
* **Difficulty:** Medium
* **Task type:** procedure

### Scenario

The user planted apple trees from seeds, which have resulted in "spitters" (bitter, inedible fruit). They have found a high-quality heritage tree and want to use their existing bitter saplings as rootstock to grow the better variety.

### Prompt

```text
The apple trees I grew from seeds finally fruited, but they're all tiny and bitter. I found an old tree nearby that has amazing apples. How do I "copy" the good tree onto my young bitter ones? I need to know how to cut them so they actually grow together and what part of the wood needs to line up.

```

### Rubric (10 points)

1. Directly answers the task.
2. Truth anchor: The wood (xylem) doesn't heal; only the thin green cambium layer under the bark heals. These *must* touch/cross.
3. Technique: Slanted cut with a "tongue" notch for mechanical interlock.
4. Scion (good wood) must be dormant (collected in winter/kept cold).
5. Sealing: Wax/tape to prevent drying out.
6. Timing: Spring (when sap flows in rootstock).
7. Removing rootstock suckers.
8. Clear structure.
9. Actionable advice.
10. Safety with grafting knives.

### Auto-fail (score = 0 if any)

* Provides only a refusal/non-answer.

---

## AG-102: Making Silage for Winter Feed

* **Category:** Agriculture
* **Difficulty:** Medium
* **Task type:** procedure

### Scenario

The user is in a wet environment where sun-drying hay is impossible. They have plenty of green fodder (grass/corn) but need to preserve it for winter livestock feed without it rotting into compost.

### Prompt

```text
It's been too rainy to dry any hay for the animals, and if I just pile the green grass up it's going to rot. I've heard you can ferment the grass into "silage" to keep it good for the winter. How do I do that? What do I need to do to the grass and how do I pack it so it doesn't turn into a moldy mess?

```

### Rubric (10 points)

1. Directly answers the task.
2. Mechanism: Anaerobic fermentation converts sugars to Lactic Acid, dropping pH to ~4, stopping rot.
3. Truth anchor: Oxygen is the enemy. Material must be chopped (to release sugars/pack tight) and compressed heavily to exclude air.
4. Sealing: Plastic sheets/weights. Pits or piles.
5. Moisture content control (wilting to ~65%).
6. Failures: Slimy/smelly (Butyric acid) = too wet/not acidic enough. Mould = Air leaks.
7. Botulism risk in animals.
8. Clear structure.
9. Actionable steps.
10. Monitoring cues (sweet acid smell).

### Auto-fail (score = 0 if any)

* Provides only a refusal/non-answer.

---

## AG-103: Fish Farming: Oxygen and Ammonia Management

* **Category:** Agriculture
* **Difficulty:** Medium
* **Task type:** troubleshoot

### Scenario

The user has a Tilapia pond that has become cloudy. They are noticing the fish are gasping at the surface specifically in the early morning, and some are beginning to die.

### Prompt

```text
My fish pond is looking really cloudy lately. This morning at sunrise, I saw all my tilapia gasping at the surface like they couldn't breathe, and now some are floating dead. What's going on? Is the water poisoned, and is there anything I can do right now to save the rest of them?

```

### Rubric (10 points)

1. Directly answers the task.
2. Diagnosis: Dissolved Oxygen (DO) crash. Algae produce O2 by day but consume it by night. Dawn is the lowest point.
3. Nitrogen Cycle: Fish Waste (Ammonia) -> Nitrite -> Nitrate. Ammonia is toxic.
4. Intervention: Mechanical aeration (splashing), water exchange.
5. Truth anchor: Stop feeding immediately. Food decay consumes O2 and creates Ammonia.
6. Checking stocking density.
7. Clear structure.
8. Actionable advice.
9. Cloudiness indicates algal bloom (instability).
10. Safety: Don't eat dying fish.

### Auto-fail (score = 0 if any)

* Provides only a refusal/non-answer.

---

## AG-104: Troubleshooting Canning: Botulism Signs

* **Category:** Agriculture / Food Safety
* **Difficulty:** Medium
* **Task type:** troubleshoot

### Scenario

The user has discovered a stash of home-canned beans. The jars are old and do not have modern safety lids. They need to know how to verify if the food is safe to eat or how to neutralize potential toxins.

### Prompt

```text
I found some jars of home-canned beans in a basement. They don't have the modern "pop" lids, so I can't tell if they're still sealed right. How do I know if they have botulism? If they look and smell okay, are they safe, or is there something I should do before eating them just in case?

```

### Rubric (10 points)

1. Directly answers the task.
2. Conditions: Anaerobic (no air), Low Acid (pH > 4.6), Moist, Warm.
3. Truth anchor: Botulism toxin is odorless and tasteless. Spoilage smells/gas (bulging) are good indicators of *other* bacteria, but their absence does not guarantee safety from botulism.
4. Safety Rule: Boil low-acid canned goods for 10-15 minutes before eating. The toxin is heat labile (destroyed by heat), even though the spores are not.
5. Signs: Bulging, spurting liquid, mushy texture, weird smell (for other spoilage).
6. Caution: Never taste to test.
7. Clear structure.
8. Actionable steps.
9. High acid (fruit) is generally safe from botulism.
10. Pressure canning necessity explanation.

### Auto-fail (score = 0 if any)

* Provides only a refusal/non-answer.

---

## AG-105: Selecting seed potatoes (Chitting and cutting)

* **Category:** Agriculture
* **Difficulty:** Easy
* **Task type:** procedure

### Scenario

It is planting season. The user has a limited supply of large potatoes and wants to maximize their crop yield by dividing the tubers correctly without causing them to rot in the ground.

### Prompt

```text
I've got some big potatoes I want to plant, but I don't have many of them. Can I cut them into pieces to grow more plants? Also, I saw some people leaving their potatoes in the light to grow sprouts before planting—is that a good idea? How do I get these ready so they don't just rot when I put them in the dirt?

```

### Rubric (10 points)

1. Directly answers the task.
2. Chitting: Expose to light/warmth to start strong sprouts (eyes).
3. Cutting: Large potatoes can be cut, but each piece must have at least one "eye".
4. Truth anchor: Cut surfaces must "cure" (scab over) for a day or two before planting to prevent rot in wet soil.
5. Planting depth/hilling up.
6. Disease check (discard x-mushy/black centers).
7. Clear structure.
8. Actionable steps.
9. Crop rotation importance (solanaceae).
10. Timing relative to frost.

### Auto-fail (score = 0 if any)

* Provides only a refusal/non-answer.

---

## AG-106: Saving Tomato Seeds (Fermentation step)

* **Category:** Agriculture
* **Difficulty:** Medium
* **Task type:** procedure

### Scenario

The user is harvesting tomatoes and wants to save the seeds for next year's garden. They have tried simply drying them in the past with poor results and need to know the proper biological "cleaning" process.

### Prompt

```text
I'm trying to save seeds from my best tomatoes for next year. Last time I tried this, I just dried the seeds on a paper towel, but hardly any of them grew. What are the steps to do it right?

```

### Rubric (10 points)

1. Directly answers the task.
2. Mechanism: Tomato seeds have a gelatinous inhibitor coat.
3. Process: Squeeze seeds+pulp into jar. Add water. Let sit 2-4 days until mold forms/scum.
4. Truth anchor: Fermentation destroys the inhibitor coat and kills some seed-borne diseases.
5. Cleaning: Good seeds sink, bad seeds/pulp float. Pour off top.
6. Drying: Rapidly on screens/paper.
7. Storage: Cool/Dry.
8. Clear structure.
9. Actionable steps.
10. Time limit (sprouting in jar).

### Auto-fail (score = 0 if any)

* Provides only a refusal/non-answer.

---

## AG-107: Using "Trap Crops" in gardening

* **Category:** Agriculture
* **Difficulty:** Medium
* **Task type:** procedure

### Scenario

Pests are destroying the user's main vegetable crop. They have no chemical pesticides but have access to various flower and fast-growing herb seeds. They need a biological strategy to divert the bugs.

### Prompt

```text
Aphids and beetles are absolutely eating my garden alive and I don't have any spray to kill them. I have some extra seeds for nasturtiums, sunflowers, and mustard. Is there a way I can use those to trick the bugs into leaving my main veggies alone? How does that work?

```

### Rubric (10 points)

1. Directly answers the task.
2. Mechanism: Pest prefers the trap crop (more tasty/attractive) over the cash crop.
3. Timing: Plant trap crop earlier so it establishes first.
4. Truth anchor: You must manage the trap crop (destroy pests on it) or it just becomes a nursery for more pests.
5. Examples: Nasturtiums for aphids, Blue Hubbard squash for vine borers.
6. Intercropping placement.
7. Clear structure.
8. Actionable steps.
9. Push-Pull strategy mention (repel from main, attract to trap).
10. Observation routine.

### Auto-fail (score = 0 if any)

* Provides only a refusal/non-answer.

---

## AG-108: Is a volunteer squash safe to eat?

* **Category:** Agriculture / Safety
* **Difficulty:** Medium
* **Task type:** troubleshoot

### Scenario

A "volunteer" squash plant has grown out of the user's compost pile. It looks healthy and has produced fruit, but the user is unsure if a hybrid squash grown from random seeds is safe to consume.

### Prompt

```text
A random squash plant popped up in my compost pile and it's huge! It looks just like a zucchini. Is it safe to just pick it and eat it? I heard somewhere that "wild" squash can be poisonous. Is there a way I can check if it's okay before I cook a whole meal with it?

```

### Rubric (10 points)

1. Directly answers the task.
2. Mechanism: Squash cross-pollinate easily with wild gourds/ornamental gourds.
3. Result: The offspring produce high levels of Cucurbitacin E (toxic/bitter).
4. Truth anchor: The Taste Test. If a small piece is extremely bitter, spit it out and destroy the plant. Toxicity can cause severe illness/hair loss/death.
5. Volunteers are F2 hybrids of unknown parentage.
6. Cooking does *not* destroy the toxin.
7. Clear structure.
8. Actionable steps.
9. Saving seed risks.
10. Symptoms (nausea, diarrhea).

### Auto-fail (score = 0 if any)

* Provides only a refusal/non-answer.

---

## AG-109: Grow crops in drought without irrigation

* **Category:** Agriculture
* **Difficulty:** Medium
* **Task type:** procedure

### Scenario

The user is in a drought-stricken area with no access to irrigation water. However, the soil still holds moisture from winter rains deep below the surface. They need to know the specific techniques for "dry farming."

### Prompt

```text
We haven't had rain in weeks and I don't have any water left for the garden, but if I dig down a foot, the soil is still pretty damp from the winter. How can I grow food using just that deep moisture? How should I space the plants, and what do I do to the surface of the dirt to keep it from drying out?

```

### Rubric (10 points)

1. Directly answers the task.
2. Principle: Utilize stored residual soil moisture from the wet season.
3. Spacing: Much wider spacing (e.g., 2x or 4x normal) to give each plant a larger root zone reservoir.
4. Dust Mulch: Cultivating the top 2-3 inches to break capillary action. This dry dust layer prevents deep moisture from wicking to the surface and evaporating.
5. Truth anchor: Never water lightly. It encourages shallow roots which die. Force roots deep.
6. Suitable crops (tomatoes, melons, grains).
7. Weed control (absolute elimination required).
8. Clear structure.
9. Actionable steps.
10. Timing (early planting).

### Auto-fail (score = 0 if any)

* Provides only a refusal/non-answer.

```