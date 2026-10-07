# Research routes + 30/90/180 plan + first issues + labels + success metrics

> Verbatim from blueprint v0.1 ch.24-28.

# 24. 研究路线

## Phase A — Visual Material

问题：

> 数字纺织看起来能不能成立？

研究：

- weave shader；
- sheen；
- roughness；
- fuzz；
- porosity。

---

## Phase B — Physical Motion

问题：

> 纺织行为能不能变成 motion language？

研究：

- tension；
- bending；
- recovery；
- friction；
- damping。

---

## Phase C — Structural UI

问题：

> weave 能不能直接生成布局和组件关系？

这将是项目最重要的一步。

---

## Phase D — Interaction Memory

问题：

> UI 是否可以像衣服一样记录使用？

研究：

- wear；
- fade；
- compression；
- patina。

---

## Phase E — Digital to Physical

问题：

> 数字设计语言能否输出真实纺织品？

连接：

- AdaCAD；
- Knitout；
- Ink/Stitch；
- PEmbroider；
- CNC / loom / embroidery。

---

## Phase F — Textile World Model

更远期：

将材料状态表示为：

```text
State(t)
  ↓
Force / Touch / Environment
  ↓
Simulation
  ↓
State(t+1)
```

模型预测：

- deformation；
- wear；
- recovery；
- visual change；
- structure response。

这个阶段可以和世界模型、可微分物理、神经材质连接。

---

# 25. 30 / 90 / 180 天路线

## 前 30 天

目标：

**证明 Texture Design 不是贴图。**

完成：

- repo；
- token schema；
- 4 个材料 preset；
- 4 个 React 组件；
- 1 个 weave shader；
- Playground；
- docs v0.1；
- reduced-motion；
- mobile fallback。

---

## 90 天

目标：

**形成真正的 Design System。**

完成：

- 10–15 components；
- 8 materials；
- motion system；
- weave layout；
- Storybook / docs；
- benchmark；
- material editor；
- theme export；
- npm package。

---

## 180 天

目标：

**形成一个足以对外讲故事的开源项目。**

完成：

- React package；
- Web Component 或 Flutter/SwiftUI proof-of-concept；
- WIF importer experiment；
- physical export experiment；
- paper-style technical report；
- official website；
- case study；
- Figma Tokens；
- AI prompt / generative material interface。

---

# 26. GitHub Issues 第一批任务

建议创建：

```text
[core] Define textile token schema
[core] Define material preset interface
[shader] Procedural plain weave
[shader] Twill weave prototype
[shader] Directional silk sheen
[shader] Linen irregularity
[motion] Tension spring prototype
[motion] Drape presets
[component] TextileButton
[component] TextileCard
[component] TextileSheet
[component] TextileSlider
[a11y] Reduced-motion strategy
[a11y] DOM/WebGL semantic bridge
[perf] GPU capability detection
[playground] Material parameter panel
[docs] Material ontology
[docs] Reference attribution
[research] Weave-as-layout experiment
[research] Interaction wear / digital patina
```

---

# 27. 推荐标签

```text
area:core
area:shader
area:physics
area:component
area:docs
area:research
area:a11y
area:performance

type:experiment
type:feature
type:bug
type:design
type:research

material:silk
material:cotton
material:denim
material:linen
material:knit

status:prototype
status:validated
status:production
```

---

# 28. 成功指标

不要只看“好不好看”。

## Visual

- 用户能否区分不同材料？
- 是否不靠标签也能识别 Silk / Denim 的行为差异？

## Interaction

- Press / Drag / Layer 是否更容易理解？
- 物理反馈是否帮助操作？

## Performance

- 60fps 达成率；
- GPU 占用；
- 手机发热；
- fallback 可用性。

## Accessibility

- keyboard；
- screen reader；
- contrast；
- reduced motion。

## Design System

- 一个 token 改动能否影响多个组件？
- 材料 preset 能否跨组件一致？
- React / CSS / Shader 是否共享同一个材料定义？

---
