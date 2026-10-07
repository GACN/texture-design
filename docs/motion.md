# Motion / Layout / Optics / Progressive rendering

> Verbatim from blueprint v0.1 ch.10-13.

# 10. Motion System：用纺织物理代替万能 easing

传统：

```css
transition: 300ms ease-out;
```

Texture Design：

```text
material profile
+ mass
+ tension
+ bending
+ damping
+ recovery
```

最终仍然可以编译成普通动画。

例如：

```text
motion.silk
mass: low
bending: low
damping: low-medium
recovery: fast

motion.denim
mass: high
bending: high
damping: medium
recovery: slow
```

### 核心思想

API 可以写：

```tsx
motion="silk"
```

底层根据环境决定：

- CSS spring；
- WAAPI；
- WebGL cloth；
- no-motion fallback。

---

# 11. Layout System：把织物组织变成布局语法

这是最可能成为 Texture Design 真正原创核心的部分。

## Plain Layout

结构：

```text
A B A B
B A B A
A B A B
```

特点：

- 强规则；
- 高稳定；
- 高频重复。

适合：

- Dashboard；
- Settings；
- Dense data。

---

## Twill Layout

规律：

```text
row n → offset +1
```

特点：

- 斜向视觉流；
- 连续推进；
- 节奏强。

适合：

- Feed；
- Timeline；
- Media cards。

---

## Satin Layout

特点：

- anchor 较少；
- 大面积连续 surface；
- 内容流动性强。

适合：

- Gallery；
- Portfolio；
- Hero content。

---

## Knit Layout

节点不是严格交叉，而是 loop connection。

特点：

- flexible；
- local deformation；
- adaptive。

适合：

- Responsive dashboard；
- spatial workspace；
- node UI。

---

## Mesh Layout

高 open-area。

适合：

- Layered control；
- tool overlay；
- data visualization。

---

# 12. 光学系统

Texture Design 不是“布纹贴图系统”。

建议至少支持：

```text
Base Color
Roughness
Normal
Sheen
Anisotropy
Fuzz
Porosity
Directional Response
Wear Mask
```

## 优先级

v0.1：

- procedural weave；
- roughness；
- directional sheen；
- normal；
- subtle fuzz。

v0.2：

- porosity；
- nap；
- wear；
- fiber scatter。

v1.0：

- multi-scale yarn structure；
- physically informed shading。

---

# 13. 渲染层级：必须渐进增强

建议 4 层。

## Tier 0 — Semantic

纯 HTML / CSS。

任何设备都可用。

---

## Tier 1 — CSS Textile

使用：

- gradients；
- mask；
- background pattern；
- CSS variables；
- normal-like lighting tricks。

适合普通手机。

---

## Tier 2 — Canvas / WebGL Material

局部使用：

- shader；
- pointer lighting；
- anisotropic surface；
- procedural weave。

---

## Tier 3 — Cloth Physics

只用于：

- Hero；
- Drag；
- Showcase；
- special component。

不能所有卡片都实时 cloth simulation。

---
