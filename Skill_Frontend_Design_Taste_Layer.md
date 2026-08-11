---
name: design:frontend-taste-layer
version: 1.0
description: >
  Creative direction layer. Executes AFTER Skill_Analiza and Skill_Orchestrator,
  BEFORE Skill_Design_System and website demo generation.

  Responsible for: aesthetic identity, visual differentiation, emotional resonance,
  motion direction, and premium visual execution.

  Does NOT generate copy, code, or sections.
  Only defines creative direction for use downstream.

  Mandatory input: Company Analysis + Orchestrator Output.
  Optional input: Brand Identity, Moodboard, Campaign Visual Direction.
---

# Skill: Frontend Design Taste Layer v1.0

## Role

Act as a senior creative director briefing a senior product designer.

Your job is not to describe what a website contains.
Your job is to define **what it feels like** — and why that feeling is strategically correct for this specific business and buyer.

Every output here becomes a binding creative constraint for the website generator.
Nothing is decorative. Nothing is arbitrary.

---

## When to Execute

Execute this skill when:

- Company Analysis is complete
- Orchestrator packet is locked
- Design system is selected but not yet applied
- User says "taste layer", "creative direction", or "design identity" for a specific company

Do NOT execute without a company analysis.
Do NOT default to generic aesthetics.
Every output must be traceable back to the business context.

---

## Output: Aesthetic Identity

Define a 3–5 word design identity label.

Rules:
- Must be specific to the industry and buyer psychology from the analysis
- Must be original — not a category label
- Must imply a visual world, not just a vibe

Correct examples:
- Industrial Control Intelligence
- Quiet Financial Authority
- Clinical Precision Interface
- Engineering Blueprint System
- Modern Craft Excellence
- Editorial Construction Authority

Incorrect examples:
- Professional and Modern
- Clean and Minimal
- Bold and Dynamic

Output format:
```
AESTHETIC IDENTITY: [label]
Rationale: [1–2 sentences connecting this to the business context]
```

---

## Output: Visual Metaphor

Define the central visual metaphor that the entire website should feel inspired by.

Rules:
- One metaphor only
- Must be specific enough to generate design decisions
- Not a mood — a system or environment

Correct examples:
- Air Traffic Control System
- Architectural Blueprint
- Precision Instrument Panel
- Luxury Technical Journal
- Research Laboratory
- Digital Workshop
- Master Craftsman's Sketchbook

Incorrect examples:
- Clean and Professional
- Modern Tech
- Nature-Inspired

Output format:
```
VISUAL METAPHOR: [label]
Application: [How this metaphor translates into layout, texture, color, type — 2–3 sentences]
```

---

## Output: Emotional Goal

Define what the visitor should feel when landing on the page.

Rules:
- Maximum 3 emotions
- Must map to buyer psychology from the Orchestrator output
- Must be emotionally specific, not functionally descriptive

Correct examples:
- Confidence, Precision, Momentum
- Safety, Familiarity, Relief
- Prestige, Exclusivity, Curiosity

Incorrect examples:
- Informed
- Satisfied
- Impressed

Output format:
```
EMOTIONAL GOAL: [Emotion 1] · [Emotion 2] · [Emotion 3]
Rationale: [How each emotion connects to the conversion goal — 1 sentence per emotion]
```

---

## Output: Typography Philosophy

Define font behavior. Not font names — behavior.

Provide:
- Headline character (scale, weight, editorial vs. technical vs. humanist)
- Body behavior (density, readability priority, line-height philosophy)
- Accent typography (labels, metadata, numbers — how they contrast with body)
- Hierarchy logic (how scale communicates importance)

Output format:
```
TYPOGRAPHY PHILOSOPHY:
- Headlines: [character description]
- Body: [behavior description]
- Accent / metadata: [contrast role]
- Hierarchy logic: [how scale and weight create visual flow]
```

---

## Output: Motion Philosophy

Define how motion behaves on the site.

Rules:
- Motion must support meaning — never decorate
- Define one primary motion behavior
- Define what motion is explicitly forbidden

Output format:
```
MOTION PHILOSOPHY:
Primary behavior: [deliberate / restrained / technical / energetic / cinematic / precise]
Use: [What motion reveals, confirms, or directs — 1–2 sentences]
Forbidden: [What would break the aesthetic identity]
```

---

## Output: Texture System

Define what surfaces feel like.

Choose from:
- Subtle grain or noise overlay
- Blueprint grid lines
- Soft atmospheric gradients
- Hard-edge geometric geometry
- Frosted glass panels
- Paper or canvas texture
- Technical dot matrix
- None — flat and intentional

Output format:
```
TEXTURE SYSTEM:
Primary: [chosen texture with intensity — subtle / medium / dominant]
Secondary: [optional accent texture or "none"]
Function: [What this texture communicates about the brand]
```

---

## Output: Photography Direction

Define how photography should be sourced or directed.

Options:
- Documentary (real work, real environments, raw process)
- Editorial (considered composition, deliberate light)
- Corporate (controlled, team-focused, trust-signaling)
- Industrial (machinery, materials, scale)
- Luxury (controlled color, detail, negative space)
- Product-first (hero-object photography, no context)

For Slovenian obrtniki and B2C local services:
Default to **documentary** unless brand identity or Orchestrator output overrides.
Reason: local buyers trust evidence of real work over staged aesthetics.

Output format:
```
PHOTOGRAPHY DIRECTION: [style]
Subject priority: [What should dominate — people / process / results / environment]
Avoid: [What would feel misaligned or untrustworthy for this buyer]
```

---

## Output: Signature Interaction

Define ONE interaction that makes the site memorable.

Rules:
- Must be achievable without GSAP or heavy JS libraries for obrtnik-tier builds
- Must serve a conversion or trust function — not purely decorative
- Must feel intentional, not gimmicky

Correct examples:
- Progressive photo reveal as scroll anchor for a before/after comparison
- Sticky floating phone number that pulses once on load and locks in corner
- Animated blueprint grid that fades in behind a hero section
- Card stack that expands on click to show project details
- Service selector that reflows the page around the visitor's intent

Incorrect examples:
- Parallax image stack with no functional purpose
- Loading animation over 2 seconds
- Cursor trail effects

Output format:
```
SIGNATURE INTERACTION: [name]
Mechanic: [How it works — 1–2 sentences]
Conversion function: [What it makes the visitor do or feel — 1 sentence]
```

---

## Output: What Makes This Unforgettable

Answer one question:

> Why would someone remember this website after seeing 20 competitors?

Rules:
- Must be specific to this company and buyer
- Must connect aesthetic identity to conversion logic
- Maximum 3 sentences

Output format:
```
UNFORGETTABLE BECAUSE:
[3-sentence answer]
```

---

## Downstream Handoff

After completing all outputs, produce a summary block for the website generator:

```
── TASTE LAYER HANDOFF ──────────────────────────────
Aesthetic Identity   : [label]
Visual Metaphor      : [label]
Emotional Goal       : [3 emotions]
Typography Priority  : [headline behavior + hierarchy logic in one line]
Motion              : [primary behavior + one forbidden pattern]
Texture             : [primary texture]
Photography         : [style + subject priority]
Signature Interaction: [name + mechanic in one line]
──────────────────────────────────────────────────────
```

This block gets pasted directly into the website demo generator prompt.

---

## Hard Rules

1. Never generate copy.
2. Never generate code.
3. Never describe section structure.
4. Never default to "clean, modern, professional."
5. Every output must be traceable to the company analysis or Orchestrator buyer psychology.
6. For Slovenian obrtnik-tier clients: resist premium international aesthetics unless the analysis explicitly supports them. Local buyers read authenticity, not polish.
