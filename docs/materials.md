# Materials: ontology + textile-to-digital mapping

> Verbatim from blueprint v0.1 ch.5 + ch.6.

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
