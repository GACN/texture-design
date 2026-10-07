# Component grammar (first 10)

> Verbatim from blueprint v0.1 ch.9.

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
