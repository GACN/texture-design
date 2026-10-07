# Design Token architecture

> Verbatim from blueprint v0.1 ch.7.

# 7. Design Token 架构

建议四层。

## 7.1 Primitive Tokens

纯物理参数。

```css
--tx-fiber-fuzz: 0.08;
--tx-yarn-width: 0.72px;
--tx-yarn-twist: 0.36;

--tx-weave-density: 42;
--tx-weave-angle: 45deg;

--tx-surface-roughness: 0.72;
--tx-surface-normal: 0.25;

--tx-tension-x: 0.70;
--tx-tension-y: 0.62;

--tx-drape-bending: 0.32;
--tx-drape-mass: 0.40;
--tx-drape-damping: 0.20;

--tx-sheen: 0.28;
--tx-anisotropy: 0.70;

--tx-friction: 0.55;
--tx-wear: 0.00;
```

---

## 7.2 Semantic Tokens

不描述材料，只描述用途。

```css
--tx-surface-primary
--tx-surface-secondary
--tx-surface-floating
--tx-surface-interactive
--tx-surface-disabled

--tx-motion-soft
--tx-motion-firm
--tx-motion-heavy

--tx-edge-selected
--tx-edge-focus
--tx-edge-warning

--tx-tension-idle
--tx-tension-hover
--tx-tension-pressed
--tx-tension-dragging
```

---

## 7.3 Material Tokens

预设面料。

```json
{
  "silk": {
    "roughness": 0.28,
    "anisotropy": 0.82,
    "sheen": 0.74,
    "bending": 0.20,
    "mass": 0.24,
    "friction": 0.25,
    "recovery": 0.72
  },
  "denim": {
    "roughness": 0.68,
    "anisotropy": 0.42,
    "sheen": 0.12,
    "bending": 0.72,
    "mass": 0.70,
    "friction": 0.68,
    "recovery": 0.45
  }
}
```

---

## 7.4 Component Tokens

```css
--tx-button-material
--tx-button-press-depth
--tx-button-edge-stitch
--tx-button-tension

--tx-card-drape
--tx-card-edge
--tx-card-sheen

--tx-sheet-anchor-count
--tx-sheet-bending
--tx-sheet-gravity
```

---
