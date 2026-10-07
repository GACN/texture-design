# Texture Design

An experimental digital design language derived from textile structure,
material behavior, and fabrication logic.

> **Working name**: Texture Design · **Technical name**: Textile Design Language (TDL) · **Public alias**: Woven UI
> **Status**: v0.1.4 ClothLab — 4 vision-verified interactive demos, real cloth algorithms ported (Holocloth/html-to-cloth lineage), 5.7→21.1fps perf pass (2026-10-07). Start at `examples/index.html`.

Texture Design is NOT "a burlap JPG as background". It translates real textile
behavior — fiber, yarn, weave, tension, drape, friction, sheen, wear, stitching —
into computable rules for interface structure, visuals, motion, and interaction:

**Fiber → Yarn → Weave → Surface → Force → Motion → Interaction → Memory**

If Material Design turned "material" into a digital design language and Liquid
Glass turned "glass" into a dynamic digital material, this project asks whether
"textile" can become a truly computable, interactive, extensible digital material.

## North Star

A UI material system where every surface has **direction** (warp/weft/twill),
**structure** (plain/twill/satin/knit/mesh as relationships, not textures),
**flex** (bend/wrinkle/drape/recover), **tension** (local force propagates),
**optics** (silk/velvet/denim/linen each shade differently), and **memory**
(fade/abrasion/patina over time) — while information and interaction come first.

## Repo map

- `docs/blueprint-v0.1.md` — the full 3,000-line founding blueprint, frozen. Never overwrite; add v0.2+ alongside.
- `docs/` — philosophy / materials / tokens / presets / components / motion / stack / api / budget-a11y / playground / research / references, all extracted verbatim from the blueprint.
- `packages/tokens/` — CSS primitive + semantic + component tokens (v0.1 static).
- `packages/material-core/` — TypeScript types + preset loader + semantic resolver (no deps).
- `packages/react/` — `<TextileProvider>` / `<TextileCard>` / `<TextileSurface>` stubs.
- `packages/shaders/` — procedural weave GLSL sketches (yarn field → weave mask → normal → sheen).
- `packages/physics/` — mass/bending/damping/recovery → spring presets for motion.
- `presets/` — cotton / linen / silk / denim / organza JSON in the ch.34 schema.
- `examples/playground.html` — offline single-file weave preview (no CDN), open in a browser.

## Quick start

```bash
# tokens: link or @import packages/tokens/tokens.css
# presets: fetch presets/denim.json — schema documented in docs/api.md
# preview: open examples/playground.html (file:// works, zero dependencies)
```

## Roadmap (from blueprint ch.25)

- **30 days**: token system + 5 presets + playground + 3 demos + first issues.
- **90 days**: material-core + React alpha + shader v1 + wear/memory prototype.
- **180 days**: cross-platform notes (SwiftUI/Flutter/Compose), material dataset seed, paper/portfolio draft.

See `ROADMAP.md` for detail, `CHANGELOG.md` for history.

## References & lineage

Jacquard loom ↔ computing history · Material Design 3 / M3 Expressive token
layering · Apple Liquid Glass optics · cloth-simulation literature (Irawan woven
shading as later work, not v0.1). Full index in `docs/references.md`.

## License

MIT — see `LICENSE`. Dataset/paper outputs later may carry separate terms.
