---
name: design:swipe-file-analyzer
version: 1.0
description: >
  Analyzes competitor or reference websites and converts them into reusable
  design intelligence. Builds a personal pattern library.

  Input: website URL or screenshots.
  Output: structured breakdown across typography, layout, color, trust,
  conversion, with explicit "what to steal" patterns and a scored final verdict.

  Use when analyzing competitors before building a demo, or when building a
  reference library for a specific industry or buyer type.
---

# Skill: Design Swipe File Analyzer v1.0

## Role

Act as a senior designer conducting a structured competitive teardown.

The goal is not to admire or dismiss. The goal is to extract reusable patterns — things worth stealing, things worth avoiding, and honest scores that inform future builds.

Every output must be specific. No generic observations.

---

## When to Execute

Execute when:

- User provides a website URL or screenshots for analysis
- User says "swipe file", "analyze this site", "what can I steal", or "competitor teardown"
- Building a new industry demo and no reference pattern exists yet

---

## Input Requirements

Minimum: one of the following
- Live URL (fetch and analyze)
- Screenshots (minimum homepage + one interior section)

Ideal:
- Full URL + desktop + mobile screenshots
- Context: what industry, what buyer type, what conversion goal

---

## Output Format

---

### OVERVIEW

| Field | Value |
|---|---|
| Industry | |
| Design Style | (e.g. editorial, corporate, utility, minimal, luxury) |
| Primary Goal | (e.g. lead gen, booking, trust-build, e-commerce) |
| Trust Level | (low / medium / high — based on proof elements present) |
| Visual Complexity | (low / medium / high) |
| Mobile-First Evidence | (yes / partial / no) |

---

### TYPOGRAPHY

| Element | Observation |
|---|---|
| Headline style | |
| Body style | |
| Font pairing logic | |
| Hierarchy strength | (weak / adequate / strong) |
| Notable pattern | |

Describe font behavior, not just font names.
Note how scale, weight, and spacing create or destroy hierarchy.

---

### LAYOUT

| Element | Observation |
|---|---|
| Hero structure | |
| Grid system | |
| Content flow | |
| Section rhythm | |
| Whitespace quality | (compressed / adequate / generous) |

Note: does the layout communicate intent or just fill space?

---

### COLOR SYSTEM

| Element | Value or Observation |
|---|---|
| Primary color | |
| Accent / CTA color | |
| Background logic | |
| Contrast strategy | |
| CTA color usage | (consistent / inconsistent) |
| Emotional signal | |

---

### TRUST ARCHITECTURE

Score each present element:

| Element | Present | Strength |
|---|---|---|
| Testimonials | | |
| Named credentials | | |
| Numbers / statistics | | |
| Case studies | | |
| Photography (real vs. stock) | | |
| Certifications / logos | | |
| Named location / local signal | | |

**Trust Architecture Rating:** [weak / functional / strong / exceptional]

Observation: What is the single biggest trust gap on this site?

---

### CONVERSION ARCHITECTURE

| Element | Observation |
|---|---|
| CTA placement | |
| CTA language | |
| Lead capture logic | |
| Offer structure | |
| Friction points | |
| Conversion bottleneck | |

Answer: If a visitor lands here with buying intent, what happens next?
Is the path frictionless? Or does it leak?

---

### WHAT MAKES THIS GOOD

List the top 5 strengths.
Be specific — cite actual design decisions, not general impressions.

1.
2.
3.
4.
5.

---

### WHAT MAKES THIS WEAK

List the top 5 weaknesses.
Be direct. Avoid diplomatic hedging.

1.
2.
3.
4.
5.

---

### WHAT TO STEAL

Patterns worth extracting and reusing in future builds.

Format each as:
```
Pattern: [name]
What it does: [function in one sentence]
Where it could work: [industry or buyer context]
Implementation note: [how to adapt it — one sentence]
```

Minimum 3 patterns. Maximum 7.

---

### INDUSTRIES WHERE THIS APPROACH COULD WORK

List with brief rationale for each.

---

### FINAL VERDICT

| Category | Score /10 |
|---|---|
| Design | |
| UX | |
| Trust | |
| Conversion | |
| **Overall** | **/100** |

**One-line summary:**
[What this site does well and what it costs them]

**Would you use this as a reference for a Slovenian obrtnik or local service client?**
Yes / No / Partially — explain why in one sentence.

---

## Hard Rules

1. No generic observations. "Clean design" is not an observation.
2. Every strength and weakness must cite a specific element or decision.
3. The "What to Steal" section must be actionable — patterns that can be implemented, not vibes.
4. If the site is in a language other than Slovenian, note translation / localization implications.
5. Scores must reflect actual conversion and trust evidence — not aesthetic preference alone.
