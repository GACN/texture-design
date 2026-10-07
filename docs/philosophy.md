# Philosophy

> Extracted verbatim from blueprint v0.1 ch.4. Do not reinterpret; evolve in new versions.

# 4. Texture Design 的基本哲学

## Principle 01 — Material is behavior, not wallpaper

材料首先是**行为**，其次才是纹理。

错误：

```text
silk = background-image: silk.jpg
```

正确：

```text
silk = optical + structural + mechanical + temporal behavior
```

---

## Principle 02 — Structure precedes decoration

平纹、斜纹、针织、网眼首先应该影响：

- 布局；
- 连续性；
- 层级；
- 连接；
- 动画传播。

之后才影响表面纹理。

---

## Principle 03 — Softness must have hierarchy

不是所有组件都应该软。

需要建立：

```text
Rigid
Semi-rigid
Flexible
Draped
Free cloth
```

五级柔性层次。

工具栏可能 Semi-rigid；  
内容卡片可能 Flexible；  
临时浮层可以 Draped；  
展示型 hero 可以 Free cloth。

---

## Principle 04 — Physics should clarify intent

物理效果必须帮助用户理解：

- 我按下了；
- 我拖动了；
- 它可以被移动；
- 这个元素与另一个元素相连；
- 这个层是覆盖在另一个层上；
- 操作产生了结果。

不能成为无意义动画。

---

## Principle 05 — Textile has direction

纺织结构天然 anisotropic。

因此界面也可以拥有：

- warp direction；
- weft direction；
- nap direction；
- grain direction。

方向可以参与：

- highlight；
- drag resistance；
- transition；
- layout flow。

---

## Principle 06 — Touch leaves memory

传统 UI 通常完全无历史。

织物则会：

- 磨亮；
- 压平；
- 褪色；
- 起毛；
- 留折痕。

Texture Design 可以探索：

**Digital Patina / Interaction Memory**

但默认必须非常克制，并允许关闭。

---

## Principle 07 — Accessibility is below the material layer

最底层永远是：

- semantic HTML；
- keyboard；
- focus；
- screen reader；
- contrast；
- reduced motion。

Textile Layer 是渐进增强。

---
