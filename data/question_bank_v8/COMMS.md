## COMMS-101: Simple long-range emergency transmitter
- **Category:** Comms
- **Difficulty:** Very Hard
- **Task type:** procedure

### Scenario
(omitted)

### Prompt
```text
I'm trying to signal a ship about 20km away. I don't have a radio, but I've got an old car battery, an ignition coil, and some spare wire. Can you show me how to build a basic emergency transmitter out of these parts so I can send Morse code? Please explain the circuit and what the switching part is actually doing to make it work.
```

### Rubric (10 points)
1. Directly answers the task.
2. Components: Battery -> interrupter -> ignition coil (high voltage) -> switching element -> antenna/ground.
3. Tuning: A capacitor (Leyden jar) and inductor coil in parallel across the gap forms a resonant circuit that rings at a frequency.
4. Truth anchor: The spark acts as a high-speed switch that excites the resonant circuit, generating RF bursts.
5. Antenna: Long wire (quarter wave ideal, but long as possible).
6. Safety: High voltage lethal shock hazard. Ozone production.
7. Interference warning (illegal in civilization, okay in apocalypse).
8. Clear structure.
9. Actionable steps.
10. Morse Key implementation.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## COMMS-102: Making a Foxhole Radio (Crystal Detector)
- **Category:** Comms
- **Difficulty:** Medium
- **Task type:** procedure

### Scenario
(omitted)

### Prompt
```text
I need to pick up AM radio stations, but I don't have any batteries or power sources. I have some wire, a cardboard tube, a razor blade, and a pencil. Is there a way to make a radio that doesn't need power using these things? Also, how does the razor blade and pencil lead part actually detect the signal?
```

### Rubric (10 points)
1. Directly answers the task.
2. Circuit: Antenna -> Coil (Tuning) -> Detector -> High Impedance Earphone -> Ground.
3. Detector mechanics: Touching the graphite (pencil) to the blued steel/oxide (razor) creates a semiconductor junction (Schottky diode).
4. Truth anchor: The diode rectifies the AC radio wave into DC audio pulses the ear can hear. It needs NO battery (powered by the radio wave).
5. Earphone requirement: Must be Piezo or High Impedance (old phone). Modern low-ohm earbuds won't work well without a transformer.
6. Antenna requirement: Very long wire.
7. Clear structure.
8. Actionable steps.
9. Tuning via coil wiper or capacitor.
10. Patience in finding the "hot spot" on the blade.

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.

---

## COMMS-103: Heliograph Signalling (Mirror flash)
- **Category:** Comms
- **Difficulty:** Easy
- **Task type:** procedure

### Scenario
(omitted)

### Prompt
```text
I'm trying to signal someone really far away—maybe 10 kilometers—using a mirror and the sun. The problem is I can't tell if the light is actually hitting them because it's so far. How do I aim the flash accurately at a distant target? I heard there's a way to do it using a "foresight" or a stick; how does that work?
```

### Rubric (10 points)
1. Directly answers the task.
2. Aiming problem: You can't see where your reflection lands at 10km.
3. Method: Hold a sighting stick/finger in front of you, aligned with the target.
4. Truth anchor: Maneuver the mirror until the shadow of the sighting tip is in the center of the mirror's reflected bright spot. Or, flash the reflection onto the foresight stick's tip.
5. Shuttering for Morse code.
6. Range capabilities (line of sight).
7. Clear structure.
8. Actionable steps.
9. Sun position issues.
10. Emergency signal (SOS).

### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.
