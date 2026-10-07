import type { TextilePreset } from "./types";

export function validatePreset(p: TextilePreset): string[] {
  const errs: string[] = [];
  const n = (v: number) => typeof v === "number" && v >= 0 && v <= 1;
  if (!p.name) errs.push("name required");
  for (const k of ["mass","bending","stretch","shear","damping","recovery","friction"] as const)
    if (!n(p.physics[k])) errs.push(`physics.${k} must be 0..1`);
  if (!n(p.optics.sheen)) errs.push("optics.sheen must be 0..1");
  if (!n(p.optics.anisotropy)) errs.push("optics.anisotropy must be 0..1");
  return errs;
}

export async function loadPreset(url: string): Promise<TextilePreset> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`preset fetch failed: ${res.status}`);
  const p = (await res.json()) as TextilePreset;
  const errs = validatePreset(p);
  if (errs.length) throw new Error("invalid preset: " + errs.join("; "));
  return p;
}
