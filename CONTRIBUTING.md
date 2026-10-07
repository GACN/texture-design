# Contributing

## Ground rules
- Information and interaction first; material behavior must reinforce hierarchy,
  feedback, recognition, emotion — never break task completion (blueprint ch.2).
- No full-cloth FEM per button. Progressive enhancement only: CSS → Canvas →
  WebGL, with `prefers-reduced-motion` respected (docs/budget-a11y.md).
- Presets change via JSON + measured language (gsm, weave, bending), not vibes.

## How to add a preset
1. Copy `presets/cotton.json`, follow the ch.34 schema (name/family/fiber/yarn/
   weave/surface/optics/physics/wear).
2. Document the real-world reference (e.g. "12oz indigo denim, washed 20x").
3. Add a row in `docs/presets.md` evolution notes, open a PR with a playground screenshot.

## How to add tokens
- Primitive (physical) → `packages/tokens/tokens.css`. Semantic (usage) first
  needs a usage rationale in the PR. Component tokens need a component story.
