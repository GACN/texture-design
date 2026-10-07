import type { InteractionState, TextilePreset } from "./types";

const TENSION: Record<InteractionState, number> = {
  idle: 0.30, hover: 0.55, pressed: 0.85, dragging: 1.0, disabled: 0.0,
};

/** Merge preset + interaction state into render params. v0.1: pure math, no DOM. */
export function resolveSurface(preset: TextilePreset, state: InteractionState, opts?: { reducedMotion?: boolean }) {
  const tension = TENSION[state];
  const still = opts?.reducedMotion === true;
  return {
    tension,
    pressDepth: state === "pressed" ? 2 : 0,
    sheen: preset.optics.sheen,
    roughness: preset.surface.roughness,
    // motion duration derived from mass+bending (heavier/stiffer = slower), frozen under reduced motion
    durationMs: still ? 0 : Math.round(160 + 320 * preset.physics.mass * (0.5 + preset.physics.bending)),
    damping: preset.physics.damping,
  };
}
