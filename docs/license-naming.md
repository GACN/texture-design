# License advice + naming strategy + long-term vision + research questions + minimal architecture

> Verbatim from blueprint v0.1 ch.29-33.

# 29. License 策略建议

如果你希望项目未来被大量采用，建议自己的核心：

**MIT License 或 Apache-2.0。**

但注意：

| 项目 | 已确认许可 | 建议 |
|---|---|---|
| Holocloth | MIT | 可研究并按许可证复用 |
| ThunderLoom | MIT | 可研究并按许可证复用 |
| GarmentCode | MIT | 可研究并按许可证复用 |
| Tactile UI | MIT | 可研究并按许可证复用 |
| AdaCAD | GPL-3.0 | 思想参考优先，复制代码前评估 GPL |
| TexGen | GPL-2.0 | 思想/数据结构参考优先 |
| OpenSew-2 | GPL-3.0-or-later | 不直接合入 MIT core |
| Ink/Stitch | GPL-3.0 | 建议作为外部工具集成 |
| PEmbroider | GPLv3 + ACSL 相关说明 | 需额外核查 |
| html-to-cloth | 当前仓库页未明确显示许可证 | 未确认前不要复制源码 |
| Texture UI Kit spec | 规格页未明确给出代码许可 | 仅概念参考 |

> 这部分不是法律意见。真正发布或复用前，应再次检查各项目仓库当时的 LICENSE 文件和依赖许可证。

---

# 30. 名称策略

“Texture Design”很好理解，但比较泛。

建议分层：

## 项目总名

**Texture Design**

## 技术规范名

**Textile Design Language / TDL**

## 组件库

**Woven UI**

## 渲染引擎

**Loom Engine**

## Shader 包

**Fiber Shaders**

## Playground

**Material Loom**

这样未来可以形成：

```text
Texture Design
├── TDL Spec
├── Woven UI
├── Loom Engine
├── Fiber Shaders
└── Material Loom
```

---

# 31. 长期愿景

## 1 年

一个新的 Web UI 实验系统。

## 2–3 年

跨平台 Textile Material Design System。

## 3–5 年

数字界面和真实纺织制造连通：

```text
Design Token
→ Textile Structure
→ Machine Instruction
→ Real Fabric
```

## 5 年以后

进入：

- Spatial Computing；
- Soft Robotics；
- Smart Textile；
- Wearable UI；
- Digital Fashion；
- AI-generated materials；
- world models of deformable materials。

最终目标可以变成：

> **不是让屏幕模仿织物，而是建立一套连接数字材料与真实软材料的共同语言。**

---

# 32. 最重要的原创研究问题

下面这些比“做一个布料按钮”重要得多。

### Q1
**织物组织能否成为布局算法，而不是视觉纹理？**

### Q2
**张力能否成为类似 elevation 的一级 UI 属性？**

### Q3
**Drape 能否替代 duration/easing，成为 motion preset？**

### Q4
**摩擦能否成为 drag interaction 的设计 token？**

### Q5
**磨损能否成为数字产品的长期交互记忆？**

### Q6
**Porosity 能否成为 Glass Transparency 之外的另一种层级表达？**

### Q7
**Stitch 能否成为 component relationship 的视觉语法？**

### Q8
**同一个 Textile Token 能否同时驱动 CSS、Shader、Physics 和真实制造？**

如果这八个问题中有三四个被真正做出来，Texture Design 就有机会从“个人实验”升级为值得长期发展的系统。

---

# 33. 最小可行架构

第一版不要直接引入复杂的纺织工程模拟。

建议：

```text
                ┌──────────────┐
                │ Textile JSON │
                └──────┬───────┘
                       │
       ┌───────────────┼────────────────┐
       │               │                │
       ↓               ↓                ↓
  CSS Renderer    WebGL Renderer    Motion Engine
       │               │                │
       └───────────────┼────────────────┘
                       ↓
                 React Components
                       ↓
                 Semantic DOM
```

Physics Engine 初期作为可选模块：

```text
WebGL Renderer
      +
Physics Adapter
```

---
