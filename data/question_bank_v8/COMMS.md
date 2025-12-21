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
We need to send a simple wireless signal (like Morse code) to a ship ~20 km away using improvised parts.
We have a car battery, a car ignition coil, and wire.

Task: Design a simple emergency transmitter and antenna we can build from these parts.
Explain the circuit and what the switching element does.
```

### Rubric (10 points)
1.  Directly answers the task.
2.  Components: Battery -> interrupter -> ignition coil (high voltage) -> switching element -> antenna/ground.
3.  Tuning: A capacitor (Leyden jar) and inductor coil in parallel across the gap forms a resonant circuit that rings at a frequency.
4.  Truth anchor: The spark acts as a high-speed switch that excites the resonant circuit, generating RF bursts.
5.  Antenna: Long wire (quarter wave ideal, but long as possible).
6.  Safety: High voltage lethal shock hazard. Ozone production.
7.  Interference warning (illegal in civilization, okay in apocalypse).
8.  Clear structure.
9.  Actionable steps.
10. Morse Key implementation.


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


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
We need to listen to AM radio but we have no batteries.
We have wire, a toilet paper roll (or similar coil form), a razor blade, and pencil lead.

Task: Explain how to build a passive receiver that can play AM stations with these parts.
Explain how the razor blade + pencil lead junction detects the signal.
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


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


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


### Auto-fail (score = 0 if any)
- Provides only a refusal/non-answer.


---
