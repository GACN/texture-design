# AI position + future dataset + positioning + first dev route

> Verbatim from blueprint v0.1 ch.35-38.

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
