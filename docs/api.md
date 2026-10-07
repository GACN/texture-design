# Core / React / Shader API drafts

> Verbatim from blueprint v0.1 ch.16-18.

# 16. Core API 草案

```ts
export type TextileMaterial =
  | "cotton"
  | "linen"
  | "silk"
  | "denim"
  | "velvet"
  | "jersey"
  | "organza"
  | "felt";

export interface TextilePhysics {
  mass: number;
  bending: number;
  stretch: number;
  shear: number;
  damping: number;
  recovery: number;
  friction: number;
}

export interface TextileOptics {
  roughness: number;
  sheen: number;
  anisotropy: number;
  fuzz: number;
  porosity: number;
}

export interface TextileStructure {
  weave: "plain" | "twill" | "satin" | "basket" | "mesh" | "knit";
  density: number;
  angle: number;
  yarnWidth: number;
}

export interface TextilePreset {
  physics: TextilePhysics;
  optics: TextileOptics;
  structure: TextileStructure;
}
```

---

# 17. React API 草案

```tsx
<TextileProvider
  quality="auto"
  reducedMotion="system"
  renderer="auto"
>
  <TextileCard
    material="denim"
    weave="twill"
    interactive
  >
    Content
  </TextileCard>
</TextileProvider>
```

进阶：

```tsx
<TextileSurface
  material="silk"
  physics={{
    tension: 0.62,
    bending: 0.21,
    damping: 0.18
  }}
  optics={{
    sheen: 0.72,
    anisotropy: 0.84
  }}
/>
```

---

# 18. Shader 层草案

不要一开始追求学术级真实。

v0.1 可以用：

```text
UV
 ↓
procedural yarn field
 ↓
warp/weft mask
 ↓
normal perturbation
 ↓
roughness modulation
 ↓
directional sheen
 ↓
lighting
```

核心函数概念：

```glsl
float warp = yarnField(uv.x, density);
float weft = yarnField(uv.y, density);

float weaveMask = weavePattern(warp, weft, pattern);
vec3 textileNormal = buildNormal(warp, weft, weaveMask);

float sheen = directionalSheen(
    viewDir,
    lightDir,
    yarnDirection,
    anisotropy
);
```

后期再研究 Irawan / physically based woven shading。

---
