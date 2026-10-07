// Blueprint ch.16 Core API draft (v0.1)
export type TextileMaterial =
  | "cotton" | "linen" | "silk" | "denim"
  | "velvet" | "jersey" | "organza" | "felt";

export type WeaveType = "plain" | "twill" | "satin" | "basket" | "mesh" | "knit";

export interface TextilePhysics {
  mass: number; bending: number; stretch: number; shear: number;
  damping: number; recovery: number; friction: number;
}
export interface TextileOptics {
  roughness: number; sheen: number; anisotropy: number;
  fuzz: number; porosity: number;
}
export interface TextileStructure {
  weave: WeaveType; density: number; angle: number; yarnWidth: number;
}
export interface TextilePreset {
  name: string; family: TextileMaterial;
  fiber: { fuzz: number; uniformity: number };
  yarn: { thickness: number; twist: number };
  weave: { type: WeaveType; density: number; angle: number };
  surface: { roughness: number; normalStrength: number };
  optics: { sheen: number; anisotropy: number };
  physics: TextilePhysics;
  wear: { enabled: boolean; rate: number };
  opacity?: number;
}
export type InteractionState = "idle" | "hover" | "pressed" | "dragging" | "disabled";
