# Texture Design
## 面向数字界面的纺织原生设计语言蓝本
### Textile-native Digital Design Language Blueprint

> **工作名**：Texture Design  
> **推荐技术名**：Textile Design Language（TDL）  
> **推荐对外代号**：Woven UI  
> **版本**：v0.1 Blueprint  
> **日期**：2026-10-07  
> **状态**：Research / Architecture Seed / Ready to Prototype  
> **目标**：作为 GitHub 工程、设计规范、前端原型、Shader 实验和后续论文/作品集的共同地基。

---

# 0. 一句话定义

**Texture Design 不是“给 UI 贴一层布料纹理”，而是把纤维、纱线、织物组织、张力、悬垂、摩擦、光泽、磨损和缝合等真实纺织材料行为，翻译成数字界面的结构、视觉、运动与交互规则。**

它希望回答一个问题：

> 如果 Material Design 把“材料”变成数字设计语言，Liquid Glass 把“玻璃”变成动态数字材料，那么纺织工程能不能把“织物”也变成一种真正可计算、可交互、可扩展的数字材料？

本项目的目标不是复古拟物，也不是“麻布背景网站”，而是建立一套新的数字材料体系：

**Fiber → Yarn → Weave → Surface → Force → Motion → Interaction → Memory**

---

# 1. 项目为什么值得做

今天主流界面材料大致有几种路线：

1. **抽象平面材料**：以 Material Design 为代表，强调设计 token、颜色、形状、层级、组件和系统化。
2. **透明光学材料**：以 Apple Liquid Glass 为代表，强调玻璃光学、透明、折射、流动与层级。
3. **软拟物与触感设计**：用阴影、颗粒、压痕、实体感创造触觉联想。
4. **3D / WebGL 材料**：使用实时渲染和物理模拟，让界面从静态平面走向动态空间。

但“纺织”拥有一整套非常特别、目前还没有被主流 UI 系统充分占用的表达能力：

- 有**方向性**：经纬、捻向、毛向、斜纹方向。
- 有**结构性**：平纹、斜纹、缎纹、针织、网眼不是“贴图”，而是组织关系。
- 有**柔性**：弯曲、起皱、悬垂、恢复。
- 有**张力**：织物不是刚体，局部受力会传播。
- 有**触感暗示**：粗糙、柔软、毛羽、压缩、回弹。
- 有**光学个性**：真丝、天鹅绒、牛仔、亚麻的高光行为完全不同。
- 有**时间性**：褪色、磨白、压痕、起毛、包浆。
- 有**连接语言**：针迹、锁边、缝线、补丁本身就是结构关系。
- 有**制造逻辑**：纤维组成纱线，纱线形成织物，织物通过裁剪缝合成为三维结构。
- 有**计算历史**：编织和计算机的关系本来就很深，Jacquard 织机常被视作程序化制造史的重要节点。

因此，纺织不是一个“视觉主题”，而是足以成为完整设计语言的材料世界。

---

# 2. 项目边界：这是什么，不是什么

## 2.1 是什么

Texture Design 是：

- 一套数字材料模型；
- 一套 Design Token 体系；
- 一套 UI 组件行为规范；
- 一套纺织物理到交互语言的映射；
- 一套 Web 端可运行的实验性组件库；
- 一套视觉 + 交互 + Shader + 物理统一规范；
- 一套可以逐渐扩展到 React、Web Components、SwiftUI、Flutter、Compose 的设计系统；
- 一套可以用于作品集、开源项目、研究、AI 生成界面和创意视频的“纺织数字语言”。

## 2.2 不是什么

它不是：

- 把一张麻布 JPG 当背景；
- 给按钮加“布边”；
- 模仿旧皮革、木头、金属的传统拟物 UI；
- 为了炫技让所有组件都乱飘；
- 每一个按钮都运行昂贵的布料有限元；
- 牺牲可读性和可访问性的视觉特效；
- 一套只能展示、不能生产使用的概念图。

核心原则：

> **先有信息与交互，再增加材料行为。材料应该增强层级、反馈、识别和情绪，而不是破坏任务完成。**

---

# 3. 主要灵感来源与出处

## 3.1 Google Material Design 3 / Material 3 Expressive

Google 对设计系统的定义强调：设计系统由可复用的设计决策、指南、组件和模式组成；底层可以拆成颜色、字体、形状等基础设计原语，再组合成复杂组件。

Material 3 的主题系统包含颜色、排版、形状；Material 3 Expressive 又进一步扩展了主题、组件、动画、排版等方向。

**对 Texture Design 的启发不是“抄 Material 的外观”，而是学习它如何把抽象原则变成：**

- Primitive Tokens
- Semantic Tokens
- Component Tokens
- Theme
- Components
- States
- Motion
- Accessibility
- Code-backed implementation

来源：

- Android Developers — Design Systems in Compose  
  https://developer.android.com/develop/ui/compose/designsystems
- Android Developers — Material Design 3 in Compose  
  https://developer.android.com/develop/ui/compose/designsystems/material3
- Android Developers — Material Components / Design System  
  https://developer.android.com/design/ui/mobile/guides/components/material-overview

### 我们要借鉴的不是“圆角”
而是：

> **如何把一种设计哲学变成可复用、可编码、可测试、可迁移的系统。**

---

## 3.2 Apple Liquid Glass

Apple 将 Liquid Glass 描述为一种新的动态材料，它结合玻璃的光学属性与流动感，并用于建立层级、和谐和跨平台一致性。

官方来源：

- Apple Developer — Liquid Glass  
  https://developer.apple.com/documentation/TechnologyOverviews/liquid-glass

### 对 Texture Design 的关键启发

Liquid Glass 最值得学习的一点：

**它没有拿一张玻璃照片贴在组件上。**

而是将“玻璃”拆成可计算行为：

- 透明；
- 折射；
- 模糊；
- 边缘高光；
- 背景响应；
- 动态变形；
- 叠层关系。

Texture Design 也必须做到同样的层级：

**Silk 不能等于“丝绸贴图”。**

Silk 应该等于一组参数：

- directional sheen；
- anisotropy；
- low-to-medium roughness；
- soft drape；
- low bending stiffness；
- subtle fiber structure；
- view-dependent highlight；
- lightweight motion response。

---

## 3.3 Texture UI Kit

GitHub 上的 `calebwhitmore/texture` 提出了一个反“过度玻璃化”的拟物设计系统方向，强调：

- grain；
- weight；
- imperfection；
- tactile presence；
- physicality；
- token structure。

其 Product Specification 将材料感当成设计系统中的第一等公民。

来源：

https://github.com/calebwhitmore/texture/blob/main/TEXTURE_SPEC.md

### 对本项目的启发

主要学习：

- 如何写设计系统规格；
- 如何将“触感”拆成 token；
- 如何设计 Primitive → Semantic → Component 的层次；
- 如何把“物理材料感”写成产品级语言。

**注意**：该规格页面标注为 Draft，并且页面本身没有给出明确的可复用代码许可证。建议只做概念参考，不直接复制其实现。

---

## 3.4 Tactile UI

项目：

https://github.com/KzqKzq/tactile-ui

特点：

- React 19；
- Radix UI；
- TypeScript；
- 30+ 组件；
- 强调 shadows / textures / lighting；
- MIT License。

### 可以借鉴

- 组件库工程组织；
- 主题和暗色模式；
- 真实触感与标准 React 组件的结合方式；
- 如何让视觉材料不破坏组件 API。

### 不建议直接继承

它更接近“现代拟物组件库”，而我们的目标是**纺织原生交互体系**。  
可拿它作为组件工程参考，而不是设计哲学终点。

---

## 3.5 HTML-to-cloth

项目：

https://github.com/flyingrobots/html-to-cloth

它的核心思想非常接近本项目：

> 普通可访问 DOM 仍然是基础界面，但某个 DOM 元素可以被转换成 WebGL 中的布料网格，并响应指针、重力等物理行为。

公开 README 显示其架构包含：

- DOM/UI；
- Render；
- Camera；
- Simulation；
- Engine；
- Entity/ECS；
- fixed-step simulation；
- cloth physics；
- pointer interaction；
- WebGL rendering。

### 对 Texture Design 的价值

这是非常重要的一条工程路线：

> **语义 DOM 与纺织视觉层分离。**

即：

```text
Accessible HTML
      ↓
Geometry Capture
      ↓
Textile Material Layer
      ↓
Cloth / Shader / Interaction
```

这样即使视觉增强关闭，页面仍然可用。

### 重要许可提醒

当前公开仓库页面没有明确显示 LICENSE。  
**在确认许可证之前，不建议直接复制其源码进入 Texture Design。**

可以学习其架构思想，自行重新实现。

---

## 3.6 Holocloth

项目：

https://github.com/dmitrykurash/holocloth

MIT License。

技术：

- Three.js / WebGL 2
- React
- TypeScript
- Vite
- 自定义 GLSL
- Verlet integration
- structural / shear / bend constraints
- holographic shader
- bump map
- macro depth of field
- film grain
- ambient occlusion

### 对本项目的价值

Holocloth 是非常好的：

**“布料视觉实验台 / Material Playground”参考实现。**

特别值得拆解：

- 布料网格如何实时互动；
- 如何将图片映射到变形织物；
- 如何将物理参数暴露给设计师；
- 如何把 Shader 参数做成可调控面板；
- 如何做“材料预设”。

我们后面可以设计：

```text
Material Lab
├── Fiber
├── Yarn
├── Weave
├── Surface
├── Lighting
├── Tension
├── Drape
├── Wear
└── Interaction
```

---

## 3.7 ThunderLoom

项目：

https://github.com/Thunderloom/ThunderLoom

MIT License。

ThunderLoom 是一个 physically based woven cloth shader，其核心实现与 Irawan woven-cloth shading model 有关，并支持使用 WIF weaving draft 描述织物组织。

### 为什么非常重要

这意味着：

**织物的视觉不一定来自贴图，而可以来自“组织结构”。**

这正是 Texture Design 从“拟物皮肤”升级到“纺织原生数字材料”的关键。

未来可以把：

```text
plain
twill
satin
basket
herringbone
custom WIF
```

变成真正的视觉生成规则，而不是静态纹理图。

---

## 3.8 GPU Cloth Sim

项目：

https://github.com/alien-life/gpu-cloth-sim

该项目展示了程序化 Fabric Shader，包括 Silk / Linen 等材料，其公开参数中包含：

- fabric_type；
- fabric_scale；
- normal intensity；
- base roughness；
- primary / secondary color；
- wear 等。

### 对本项目的价值

可以学习：

- 同一个 Material Token 如何同时驱动 Albedo / Normal / Roughness；
- Silk 与 Linen 如何以程序化方式形成不同视觉；
- “材质预设”如何变成参数集合。

---

## 3.9 AdaCAD

项目：

https://github.com/jlin98/AdaCAD  
文档：

https://docs.adacad.org/  
在线工具：

https://adacad.org/

AdaCAD 是一个开源参数化织造设计工具，用 dataflow 的方式组织 weave draft。其文档明确提到其参数化设计受到 Max/MSP 和 Grasshopper 这类节点式设计工具启发。

License 文件为 GPL v3。

### 对 Texture Design 的重要启发

**Weave 不应该只作为一个“材质选择器”。**

它还可以成为：

- Layout Grammar；
- Constraint Grammar；
- Dataflow Grammar；
- Component Relation Grammar。

例如：

```text
Plain Weave  → 强规则、交替、紧密关联
Twill        → 斜向推进、错位节奏
Satin        → 大面积连续表面、连接点稀疏
Knit         → 环结构、弹性、高局部适应性
Mesh         → 稀疏、通透、多孔
```

这是后面可能形成真正原创设计语言的核心研究方向。

---

## 3.10 TexGen

项目：

https://github.com/louisepb/TexGen

GPL-2.0。

TexGen 是几何纺织建模工具，用于建立 woven textiles / textile composites 的三维结构，并可服务于工程属性分析。

### 对本项目的价值

不是直接拿来做前端，而是作为“纺织结构真实性参考”。

Texture Design 后续如果要做高保真数字织物，可以参考：

- yarn path；
- yarn width；
- yarn height；
- weave pattern；
- textile geometry；
- 结构方向。

TexGen 帮助我们避免把纺织简化成“随机 noise”。

---

## 3.11 GarmentCode

项目：

https://github.com/maria-korosteleva/GarmentCode

MIT License。

GarmentCode 是参数化服装纸样和服装生成框架。

### 对本项目的价值

它提示我们：

> 纺织数字材料最终可以继续向“成衣 / 包覆 / 空间”扩展。

未来 Texture Design 不只服务平面 UI，还可能发展为：

- Spatial UI；
- XR textile panels；
- Digital fashion UI；
- Avatar UI；
- 3D soft interfaces。

---

## 3.12 OpenSew-2

项目：

https://github.com/MarcelloMorettoni/opensew-2

GPL-3.0-or-later。

它使用 Blender cloth solver 做服装纸样、缝合、悬垂，并提供：

- Crisp / Tailored；
- Soft / Jersey；
- Stiff / Denim；
- Light / Silk

等 fabric preset。

### 对本项目的价值

它提供一个非常直观的认识：

**“面料名”实际上是多个物理参数的组合。**

因此 Texture Design 里：

```text
fabric = "silk"
```

不应该只是样式类名，而应该展开成：

```text
bending
shear
stretch
compression
mass
damping
surface
sheen
```

等一组参数。

---

## 3.13 PEmbroider

项目：

https://github.com/CreativeInquiry/PEmbroider

PEmbroider 是 Processing 生态中的计算刺绣工具，可输出 DST、EXP、JEF、PEC、PES、VP3 等机绣文件。

它的重要意义不是“做刺绣软件”，而是：

> **数字图形 → 真实针迹 → 可触摸物理输出**

这提供了 Texture Design 一个很有价值的未来方向：

**Digital-to-Physical Design System**

UI 中的 stitch pattern 可以不仅是装饰，还能导出到真实绣花机。

### License 注意

PEmbroider 的公开说明涉及 GPLv3 和 Anti-Capitalist Software License。  
许可证结构相对特殊，进入生产项目之前应单独核查，不建议默认当作 MIT 代码复用。

---

## 3.14 Ink/Stitch

项目：

https://github.com/inkstitch/inkstitch

GPL-3.0。

基于 Inkscape 的开源机器刺绣设计平台。

### 可借鉴

- SVG → stitch；
- path → physical fabrication；
- 数字路径如何成为真实纺织工艺。

---

## 3.15 Knitout

项目：

https://github.com/textiles-lab/knitout

Knitout 是机器无关的低层针织指令格式。

示例：

https://github.com/textiles-lab/knitout-examples

### 重要启发

未来可以形成：

```text
UI Material Token
        ↓
Weave/Knit Generator
        ↓
Machine Instruction
        ↓
Physical Textile
```

这将使 Texture Design 不只是“长得像纺织”，而是可以回到真实制造。

---

## 3.16 HCI 研究：Weaving Textile-form Interfaces

论文：

**Weaving Textile-form Interfaces: A Material-Driven Design Journey**  
DIS 2023  
Alice Buso, Holly McQuillan, Milou Voorwinden, Elvin Karana

DOI：

https://doi.org/10.1145/3563657.3596086

### 核心启发

不要只研究：

> “屏幕里的东西怎么长得像布？”

还要研究：

> “纺织结构本身如何决定交互？”

这会把项目从视觉设计推进到 HCI：

- deformable interface；
- textile sensor；
- soft input；
- textile-form structure；
- embodied interaction。

---

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

# 5. 材料本体：Texture Material Ontology

建议定义 12 个一级材料原语。

---

## 5.1 Fiber — 纤维

控制微观表面。

参数：

```text
fiber.length
fiber.diameter
fiber.fuzz
fiber.hairiness
fiber.uniformity
fiber.softness
fiber.reflectance
fiber.opacity
```

UI 映射：

- 微颗粒；
- 边缘毛羽；
- 光晕；
- 低频 surface noise；
- hover 时的微弱方向变化。

---

## 5.2 Yarn — 纱线

控制线性结构。

参数：

```text
yarn.count
yarn.twist
yarn.twistDirection
yarn.thickness
yarn.tension
yarn.elasticity
yarn.hairiness
```

UI 映射：

- progress；
- divider；
- slider track；
- connecting line；
- loading；
- selection path。

---

## 5.3 Weave — 织物组织

参数：

```text
weave.type
weave.density
weave.repeat
weave.warpRatio
weave.weftRatio
weave.angle
weave.floatLength
```

初始类型：

```text
plain
twill
satin
basket
rib
mesh
knit
custom
```

UI 映射：

- layout pattern；
- card relationship；
- navigation rhythm；
- surface anisotropy；
- pattern generation。

---

## 5.4 Tension — 张力

参数：

```text
tension.x
tension.y
tension.local
tension.edge
tension.anchor
```

UI 映射：

- hover；
- press；
- drag；
- sheet open；
- card detach；
- panel pinning。

---

## 5.5 Drape — 悬垂

参数：

```text
drape.mass
drape.gravity
drape.bending
drape.shear
drape.stretch
drape.damping
drape.recovery
```

UI 映射：

组件的动态性格。

可以定义：

```text
drape.silk
drape.jersey
drape.denim
drape.canvas
drape.organza
```

---

## 5.6 Surface — 表面

参数：

```text
surface.roughness
surface.normalStrength
surface.microScale
surface.porosity
surface.loft
surface.compression
```

控制：

- 颗粒；
- 凹凸；
- 表面层次；
- 高光碎裂程度；
- 压下时的视觉反馈。

---

## 5.7 Sheen — 光泽

参数：

```text
sheen.intensity
sheen.anisotropy
sheen.direction
sheen.width
sheen.tint
sheen.viewResponse
```

适合：

- silk；
- satin；
- velvet；
- technical nylon。

---

## 5.8 Friction — 摩擦

这是非常适合交互的纺织特征。

参数：

```text
friction.static
friction.dynamic
friction.directional
```

可以影响：

- 拖动阻尼；
- 滑动手感；
- inertia；
- snap。

例如：

```text
silk → low friction
felt → high friction
denim → medium/high
nylon → low/medium
```

---

## 5.9 Stitch — 缝合

参数：

```text
stitch.type
stitch.length
stitch.spacing
stitch.thickness
stitch.tension
stitch.color
```

类型：

```text
running
chain
zigzag
overlock
bar-tack
sashiko
```

UI 映射：

- selected state；
- border；
- tabs；
- relation；
- group；
- repair；
- notification。

---

## 5.10 Edge — 布边

参数：

```text
edge.type
edge.fray
edge.fold
edge.binding
edge.seamAllowance
```

类型：

```text
clean
raw
selvedge
folded
bound
overlocked
```

可用于：

- Card boundary；
- section；
- content clipping；
- expanded state。

---

## 5.11 Wear — 使用痕迹

参数：

```text
wear.amount
wear.polish
wear.fade
wear.fray
wear.compression
wear.history
```

用途：

- 高频入口轻微磨亮；
- 收藏内容形成轻微“压痕”；
- 旧内容与新内容形成材质差异。

注意必须允许：

```text
wear.enabled = false
```

---

## 5.12 Permeability / Porosity — 孔隙与通透

这是纺织相较玻璃非常独特的一点。

参数：

```text
porosity.openArea
porosity.scale
porosity.direction
porosity.layerVisibility
```

UI 映射：

- mesh；
- organza；
- gauze；
- lace；
- semi-transparent overlay。

它不是“blur glass”。

是：

**通过结构孔隙看到后面的层。**

---

# 6. 纺织层级映射为数字系统

真实纺织：

```text
Fiber
  ↓
Yarn
  ↓
Weave / Knit
  ↓
Fabric
  ↓
Cut
  ↓
Seam
  ↓
Garment
  ↓
Wear
```

数字界面：

```text
Primitive
  ↓
Line / Thread
  ↓
Layout Relationship
  ↓
Surface
  ↓
Component Boundary
  ↓
Component Connection
  ↓
Interface
  ↓
Interaction History
```

对应关系：

| 纺织 | 数字界面 |
|---|---|
| Fiber | 微观视觉原语 |
| Yarn | 线、路径、进度、连接 |
| Weave | Layout / relationship |
| Fabric | Surface / container |
| Cut | clipping / shape |
| Seam | component connection |
| Garment | complete interface |
| Wear | persistent interaction history |

---

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

# 8. 第一批数字面料预设

## Cotton

感觉：

- 中性；
- 柔和；
- 不强反光；
- 适合高频 UI。

建议：

```text
roughness     0.70
sheen         0.10
anisotropy    0.20
bending       0.45
friction      0.55
fuzz          0.20
```

用途：

- 常规 Card；
- 表单；
- 设置页；
- 阅读界面。

---

## Linen

特点：

- 不均匀；
- 粗纱；
- 干爽；
- 结构明显。

用途：

- 编辑器；
- 创作应用；
- 文档；
- “纸张替代型”数字材料。

---

## Silk

特点：

- 强方向高光；
- 轻；
- 流动；
- 低摩擦。

用途：

- Hero；
- Music UI；
- Premium mode；
- Motion-rich surface。

---

## Satin

与 Silk 区分：

**Silk 是纤维/材料语义；Satin 是组织语义。**

Satin 的重点：

- 长浮线；
- 连续高光；
- 平整；
- 低结构断裂感。

---

## Denim

特点：

- 斜纹；
- 中高刚度；
- 明显 wear；
- 边缘可磨损。

用途：

- 工具；
- 文件管理；
- 长期使用型界面；
- 工业风产品。

---

## Velvet

特点：

- 毛向；
- grazing angle；
- 光向变化时明暗翻转。

用途：

- Media；
- Album；
- Gallery；
- 深色 premium UI。

---

## Jersey / Knit

特点：

- 弹；
- 环结构；
- 局部形变明显；
- 恢复强。

用途：

- Slider；
- Toggle；
- Pull-to-refresh；
- Drag UI。

---

## Organza

特点：

- 半透明；
- 轻；
- 有结构；
- 不等于 glass。

用途：

- Overlay；
- Popover；
- floating panel；
- layered navigation。

---

## Felt

特点：

- 高摩擦；
- 毛绒；
- 几乎无高光；
- 压缩明显。

用途：

- Touchable control；
- children / creative tool；
- pinboard / spatial workspace。

---

# 9. 组件语法

第一版只做 10 个组件，不贪多。

---

## 9.1 TextileButton

状态：

```text
idle
hover
pressed
focus
disabled
loading
```

行为：

- Hover：局部纱线方向略微聚拢；
- Pressed：不是单纯 scale，而是局部压缩 + 张力向边缘传播；
- Focus：使用 stitch/fiber edge，而不是只靠 glow；
- Loading：内部 yarn twist / stitch progress。

不要做：

- 整个按钮像果冻；
- 过大的弹簧；
- 影响文字可读性。

---

## 9.2 TextileCard

核心：

**Card 是一块被固定在界面中的织物。**

属性：

```tsx
<TextileCard
  material="linen"
  weave="plain"
  tension="medium"
  drape="soft"
  edge="bound"
/>
```

可选行为：

- pointer 经过产生极轻的压力波；
- 拖拽时四角 tension 改变；
- detach 后从 semi-rigid 变成 cloth。

---

## 9.3 TextileSheet

Bottom Sheet 非常适合体现纺织逻辑。

传统：

```text
translateY()
```

Texture：

```text
bottom edge = fixed
finger point = moving anchor
surface = deformable
```

视觉上仍需保持内容区可读。

---

## 9.4 TextileSlider

Track = Yarn。

Thumb 拉动时：

- yarn tension 增加；
- 局部拉直；
- 松开产生非常小的 recovery。

---

## 9.5 TextileToggle

可以基于 knit loop 的展开 / 锁定关系。

但要保留清晰的 ON/OFF。

---

## 9.6 TextileTabs

选中态可用：

- stitched underline；
- woven connection；
- yarn path。

---

## 9.7 TextileProgress

非常适合做成：

- yarn winding；
- weaving；
- stitch line；
- dye penetration。

第一版建议只用 yarn winding，避免过度表现。

---

## 9.8 TextileNav

导航层级可以使用：

```text
warp = persistent routes
weft = temporary content
```

这是一个非常值得继续研究的隐喻。

---

## 9.9 TextileModal

Modal 不需要像一块飞布。

建议：

- 背景仍为稳定 DOM；
- modal 用 lightly tensioned organza surface；
- 通过孔隙/透明表现层级；
- reduced motion 下完全静态。

---

## 9.10 TextileInput

文本输入必须克制。

可以用：

- stitched focus edge；
- woven baseline；
- soft compression on focus。

不要让输入文字发生形变。

---

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

# 14. 推荐前端技术栈

第一版：

```text
React
TypeScript
Vite
CSS Custom Properties
Three.js
WebGL 2
GLSL
Storybook 或自建 Playground
Vitest
Playwright
```

可选：

```text
WebGPU / WGSL
Radix UI
React Aria
```

### 为什么 Web 先做

- 分享成本最低；
- Shader 快速试验；
- Pointer interaction 方便；
- GitHub Pages / Vercel 可部署；
- 最适合作为设计语言展示入口。

---

# 15. 推荐工程架构

```text
texture-design/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── ROADMAP.md
├── CHANGELOG.md
│
├── docs/
│   ├── philosophy.md
│   ├── materials.md
│   ├── tokens.md
│   ├── motion.md
│   ├── weave-layout.md
│   ├── accessibility.md
│   ├── performance.md
│   ├── research/
│   └── references.md
│
├── packages/
│   ├── tokens/
│   ├── material-core/
│   ├── react/
│   ├── renderer-css/
│   ├── renderer-webgl/
│   ├── physics/
│   └── shaders/
│
├── apps/
│   ├── playground/
│   ├── docs/
│   └── benchmark/
│
├── shaders/
│   ├── weave.glsl
│   ├── silk.glsl
│   ├── linen.glsl
│   ├── velvet.glsl
│   └── wear.glsl
│
├── presets/
│   ├── cotton.json
│   ├── linen.json
│   ├── silk.json
│   ├── denim.json
│   ├── velvet.json
│   └── organza.json
│
├── examples/
│   ├── music-player/
│   ├── dashboard/
│   ├── gallery/
│   └── mobile-shell/
│
└── tests/
```

---

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

# 19. 性能预算

Texture Design 如果想走出 Demo，必须一开始限制性能。

建议目标：

## Mobile

- 普通页面：60 fps；
- Shader surface：≤ 4 个同时活跃；
- Full cloth：1 个主要对象；
- reduced mode：无 cloth；
- 电量低/后台：自动降级。

## Desktop

- active textile surfaces：8–12；
- Full physics：1–3；
- 其他静态材质缓存。

### 必须实现

```text
quality = auto | high | medium | low | off
```

---

# 20. Accessibility

必须从 v0.1 就进入规范。

## 20.1 Reduced Motion

```css
@media (prefers-reduced-motion: reduce)
```

关闭：

- cloth wave；
- pointer ripple；
- spring；
- inertia。

保留：

- 状态颜色；
- focus；
- 结构差异。

## 20.2 Contrast

纺织纹理不能影响文字。

规则：

> 文字层与 Material Surface 分离。

## 20.3 Screen Reader

WebGL 永远不能成为唯一交互层。

底部始终存在真实：

```html
<button>
<input>
<nav>
<section>
```

## 20.4 Keyboard

所有材料交互都必须有 keyboard 等价状态。

---

# 21. “不要做”的视觉坑

1. **不要满屏麻布纹理。**
2. 不要把每一个组件都做成布。
3. 不要为了真实而让文字一起折叠。
4. 不要把 Texture Design 做成怀旧手工艺 UI。
5. 不要只用 beige / brown。
6. 不要限制到“自然面料”。
7. 不要把纺织等同“温柔”。
8. 不要过度 particle。
9. 不要让 Shader 吞掉性能。
10. 不要先写 100 个组件再证明设计语言成立。

纺织也可以：

- 黑；
- 银；
- 荧光；
- 技术面料；
- 碳纤；
- 高密尼龙；
- 防水涂层；
- spacer fabric；
- smart textile。

---

# 22. 第一版 Playground 应该长什么样

首页不要先做完整 App。

做一个：

# Textile Material Playground

左侧：

```text
Material
Fiber
Yarn
Weave
Surface
Tension
Drape
Sheen
Friction
Wear
```

中间：

- 一个 Button；
- 一个 Card；
- 一个 Sheet；
- 一个 Slider；
- 一块 Free Cloth。

右侧：

实时参数。

底部：

```text
Export JSON
Copy CSS Tokens
Copy React Props
```

这会比先做“漂亮主页”更有工程价值。

---

# 23. v0.1 必做 Demo

只做 6 个。

### Demo 1 — Cotton Button
证明微观 surface + press compression。

### Demo 2 — Silk Card
证明 directional sheen + motion。

### Demo 3 — Denim Sheet
证明 twill + high bending + heavy motion。

### Demo 4 — Knit Slider
证明 elasticity + recovery。

### Demo 5 — Organza Overlay
证明 porosity / transparency 不等于 glass blur。

### Demo 6 — Weave Layout
证明 plain / twill / satin 可以影响布局，而不只是表面。

如果这 6 个成立，Texture Design 就已经不再是“一个视觉想法”。

---

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

# 34. 一个材料 JSON 示例

```json
{
  "name": "denim-indigo-01",
  "family": "denim",
  "fiber": {
    "fuzz": 0.12,
    "uniformity": 0.72
  },
  "yarn": {
    "thickness": 0.68,
    "twist": 0.54
  },
  "weave": {
    "type": "twill",
    "density": 44,
    "angle": 45
  },
  "surface": {
    "roughness": 0.72,
    "normalStrength": 0.38
  },
  "optics": {
    "sheen": 0.12,
    "anisotropy": 0.42
  },
  "physics": {
    "mass": 0.70,
    "bending": 0.74,
    "stretch": 0.18,
    "shear": 0.52,
    "damping": 0.44,
    "recovery": 0.46,
    "friction": 0.68
  },
  "wear": {
    "enabled": true,
    "rate": 0.04
  }
}
```

---

# 35. AI 在这个项目中的位置

不要让 AI 决定所有东西。

适合 AI 的地方：

## Material Synthesis

输入：

```text
“像洗过 20 次的 12oz indigo denim”
```

输出：

```text
TextilePreset JSON
```

## Material Recognition

上传实拍面料：

AI 估计：

- weave；
- roughness；
- fuzz；
- direction；
- sheen；
- pattern。

## Motion Generation

输入：

```text
“轻薄但有一点挺度的醋酸面料”
```

生成 motion token。

## Shader Coding

根据材料参数生成 WGSL / GLSL variation。

## Physical Bridge

识别面料后映射到：

- visual preset；
- physics preset；
- manufacturing metadata。

---

# 36. 后续可能形成的数据集

未来可以自己做：

## Textile Material Dataset

每块真实面料记录：

```text
Name
Fiber content
Yarn
Weave
Weight gsm
Thickness
Bending
Stretch
Shear
Friction
Drape
Gloss
Photo
Macro photo
Video
Motion capture
Shader preset
UI preset
```

这会非常有价值。

因为你的优势不只是前端。

你是从**纺织工程**向数字材料做映射。

---

# 37. 最终定位

Texture Design 最终不应该被介绍成：

> “一个很酷的布料 UI 库。”

而应该是：

> **An experimental digital design language derived from textile structure, material behavior, and fabrication logic.**

中文：

> **一套从纺织结构、材料行为和制造逻辑中生长出来的实验性数字设计语言。**

它的竞争对象并不是某个 React UI Kit。

真正参照物是：

- Material Design；
- Liquid Glass；
- Skeuomorphic systems；
- Spatial materials；
- HCI soft interfaces。

但第一步一定非常小：

> **先证明一块数字布，比一张布料贴图更有意义。**

---

# 38. 推荐的第一条开发路线

如果现在马上开工：

```text
Day 1
创建 repo
建立 tokens + docs

Day 2
实现 Cotton / Silk / Denim / Organza 四个 JSON preset

Day 3
做 procedural weave shader

Day 4
做 TextileCard

Day 5
做 TextileButton

Day 6
做 drape / tension motion

Day 7
做 Playground
```

第一周唯一验收：

**同一个 Card 切换 Cotton / Silk / Denim 时，不只是纹理不同，而是“光学 + 结构 + 运动”都明显不同。**

如果这个成功，项目成立。

---

# 39. Reference Index

## 官方设计系统

1. Apple — Liquid Glass  
   https://developer.apple.com/documentation/TechnologyOverviews/liquid-glass

2. Android Developers — Design systems in Compose  
   https://developer.android.com/develop/ui/compose/designsystems

3. Android Developers — Material Design 3 in Compose  
   https://developer.android.com/develop/ui/compose/designsystems/material3

4. Android Developers — Material Components  
   https://developer.android.com/design/ui/mobile/guides/components/material-overview

## UI / Web / Shader

5. HTML-to-cloth  
   https://github.com/flyingrobots/html-to-cloth

6. Holocloth  
   https://github.com/dmitrykurash/holocloth

7. Texture UI Kit Specification  
   https://github.com/calebwhitmore/texture/blob/main/TEXTURE_SPEC.md

8. Tactile UI  
   https://github.com/KzqKzq/tactile-ui

9. ThunderLoom  
   https://github.com/Thunderloom/ThunderLoom

10. GPU Cloth Sim  
    https://github.com/alien-life/gpu-cloth-sim

## Textile / Weaving / Garment

11. AdaCAD  
    https://github.com/jlin98/AdaCAD

12. AdaCAD Docs  
    https://docs.adacad.org/

13. TexGen  
    https://github.com/louisepb/TexGen

14. GarmentCode  
    https://github.com/maria-korosteleva/GarmentCode

15. OpenSew-2  
    https://github.com/MarcelloMorettoni/opensew-2

16. PEmbroider  
    https://github.com/CreativeInquiry/PEmbroider

17. Ink/Stitch  
    https://github.com/inkstitch/inkstitch

18. Knitout  
    https://github.com/textiles-lab/knitout

19. Knitout Examples  
    https://github.com/textiles-lab/knitout-examples

## HCI / Research

20. Buso, A.; McQuillan, H.; Voorwinden, M.; Karana, E.  
    *Weaving Textile-form Interfaces: A Material-Driven Design Journey*  
    DIS 2023  
    https://doi.org/10.1145/3563657.3596086

---

# 40. 最后的工程原则

项目以后每加入一个新功能，都问五个问题：

1. **它来自真实纺织材料的什么性质？**
2. **它解决什么界面问题？**
3. **它只是装饰，还是能影响结构/交互？**
4. **关掉 Shader 和动画后，这个界面仍然能不能用？**
5. **这个属性能不能成为可复用 Token，而不是一次性特效？**

如果五个问题答不出来，就暂时不要加。

---

## Project North Star

> **Interface is woven, not assembled.**  
> 界面不是被堆起来的，而是被编织出来的。

以及更工程化的一句：

> **Textile is not a skin. Textile is a system of structure, force, surface, motion and memory.**

**纺织不是皮肤，而是一套由结构、力、表面、运动与记忆共同组成的系统。**
