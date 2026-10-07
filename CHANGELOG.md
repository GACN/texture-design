# Changelog

## v0.1.3 — 2026-10-07 — ClothLab realism pass (real algorithms)
- Read Holocloth `cloth.ts` (Verlet + structural/shear/bend constraints,
  smoothstep multi-point grab, cavity AO, 120Hz substeps) and html-to-cloth
  `clothPhysics.ts` (Verlet + obstacles + sleep/wake) from source; ported the
  portable ideas into Canvas2D (no code copied; html-to-cloth has no LICENSE).
- Kills the "too uniform gaussian dent": per-press random ellipse rotation /
  aspect / rim breathing, compression-driven buckle wrinkle normals, cavity AO
  by fold compression instead of raw depth, anisotropic wave spread per weave.
- Acceptance: two presses on the same cloth make visibly different dents.

## v0.1.2 — 2026-10-07 — ClothLab interactive demo
- New `examples/demo-cloth-press-drag.html`: live cloth you can press and drag
  (pointer + touch). Analytic press dent (gaussian pit + displaced-volume rim)
  over a free wave layer; weave sampled at deformation-warped UVs; fixed
  top-left light so dents read; tension ring stretches into ellipse on drag;
  release converts dent to rebound velocity (silk ripples, denim thuds).
  Scripted pointer QA in headless Chromium (press/drag/rebound + silk),
  vision-verified, no JS errors. Lineage: blueprint §3.5 html-to-cloth
  (semantic DOM + textile layer) + §3.6 Holocloth (live solve), reimplemented
  (both lack reusable licenses).

## v0.1.1 — 2026-10-07 — demos + design spec
- 3 offline single-file demos, all vision-verified in headless Chromium:
  button-tension (tension ring, stitch focus, 6 states), card-drape
  (pointer-tracked lighting, stitch anchors), overlay-organza
  (organza vs Liquid Glass A/B + comparison table).
- Weave renderer iterated: fine thread counts, satin smoothing, true
  diagonal twill ribs (color follows rib phase, no more checkerboard).
- New `docs/design-spec.md`: M3/HIG-format spec (foundations, 5 materials,
  3 components, tension motion model, a11y gates, L1-L3 render tiers).
- `examples/index.html` demo hub.

## v0.1.0 — 2026-10-07 — foundation
- Repo created as `GACN/texture-design`, public, MIT.
- Frozen blueprint (`docs/blueprint-v0.1.md`, ~3,000 lines) + verbatim section docs.
- Token CSS, material-core TS, React stubs, GLSL sketches, physics springs.
- 5 presets in ch.34 schema: cotton / linen / silk / denim / organza.
- Offline single-file playground example.
