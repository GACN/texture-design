# Texture Design 规范 v0.1

> 体例对标：Google Material Design 3（Foundations → Styles → Components）+
> Apple Human Interface Guidelines / Liquid Glass（材料、深度、光线语言）。
> 本文档只写 v0.1 已落地的东西：`packages/tokens/tokens.css`、
> `presets/*.json`、`examples/demo-*.html`。将来 v0.2 另起文档，本文件冻结。

---

## 0. 如何读这份文档

| M3 / HIG 概念 | Texture Design 对应 | 落点 |
|---|---|---|
| Foundations（颜色/字型/形状） | §2 物理 Token | `packages/tokens/tokens.css` |
| Styles / Materials | §3 五种数字面料 | `presets/*.json` |
| Components | §4 Button / Card / Overlay | `examples/demo-*.html` |
| Motion | §5 张力模型 | demos + `packages/physics/` |
| Accessibility | §7 | 全组件强制条款 |

一句话定义（蓝本 ch.0）：**不是给 UI 贴布料纹理，而是把纤维、纱线、织物组织、
张力、悬垂、摩擦、光泽、磨损、缝合翻译成界面的结构、视觉、运动与交互规则。**

原则（蓝本 ch.2）：先有信息与交互，再加材料行为。材料增强层级、反馈、
识别和情绪，不破坏任务完成。

---

## 1. 设计原则

1. **结构先于纹理** —— 平纹/斜纹/缎纹是组织关系，不是贴图。看不出经纬方向的材料不许上线。
2. **张力代替缩放** —— 按压是局部压缩 + 张力向边缘传播，不是整体果冻缩放。
3. **针迹代替光晕** —— 焦点、选中用缝线语言（dashed stitch），不用 glow 堆存在感。
4. **光线诚实** —— 每种面料的光学行为（粗糙度/各向异性/光泽）必须可测、可调，随光源变化。
5. **材料有记忆** —— 牛仔磨损、毛毡压缩是合法的设计语言，不是脏lld。
6. **渐进增强** —— CSS → Canvas → WebGL 三档，`prefers-reduced-motion` 下冻结为静态，信息一字不少。

---

## 2. Foundations：物理 Token

四层（蓝本 ch.7）。v0.1 全部静态 CSS 变量，见 `packages/tokens/tokens.css`。

### 2.1 Primitive（只描述物理，不描述用途）

| Token | 默认值 | 含义 |
|---|---|---|
| `--tx-fiber-fuzz` | 0.08 | 纤维毛羽，噪点强度 |
| `--tx-yarn-width` / `--tx-yarn-twist` | 0.72px / 0.36 | 纱线粗细 / 捻度 |
| `--tx-weave-density` / `--tx-weave-angle` | 42 / 45deg | 织物密度 / 斜纹角 |
| `--tx-surface-roughness` | 0.72 | 表面粗糙度 |
| `--tx-tension-x` / `--tx-tension-y` | 0.70 / 0.62 | 经纬张力 |
| `--tx-drape-bending/mass/damping` | 0.32 / 0.40 / 0.20 | 悬垂三参数 |
| `--tx-sheen` / `--tx-anisotropy` | 0.28 / 0.70 | 光泽 / 各向异性 |
| `--tx-friction` / `--tx-wear` | 0.55 / 0.00 | 摩擦 / 磨损（时间维度） |

### 2.2 Semantic（只描述用途，不描述材料）

`--tx-surface-primary/secondary/floating/interactive/disabled`；
`--tx-motion-soft 320ms / firm 180ms / heavy 480ms`；
`--tx-tension-idle 0.30 / hover 0.55 / pressed 0.85 / dragging 1.00`。

### 2.3 Material（预设面料引用）

`silk { roughness .28, anisotropy .82, sheen .74, bending .20, mass .24 }`；
`denim { roughness .68, anisotropy .42, sheen .12, bending .72, mass .70 }`。
完整 JSON 见 `presets/`，schema 见蓝本 ch.34。

### 2.4 Component（组件级）

`--tx-button-press-depth: 2px`（只压 Y 轴）；
`--tx-button-edge-stitch: 1px dashed`（焦点针迹）；
`--tx-card-drape / --tx-card-sheen / --tx-card-edge: bound`；
`--tx-sheet-anchor-count: 2`。

### 颜色 / 字型 / 形状（v0.1 约定）

- 颜色：暖纸墨体系。底 `#161310`，面板 `#211d17`，墨 `#f2ece1`，金强调 `#c79943`，针迹线 `#8a6d2f`。面料自带色，文字只用墨/金两档。
- 字型：标题 Georgia/宋体衬线（成衣感），正文系统无衬线，参数等宽。v0.1 不引入外部字体。
- 形状：按钮 12px，卡片 18px，浮层 20px。圆角不表达材料，针迹和纹理才表达。

---

## 3. Styles：五种数字面料

| 面料 | 组织 | roughness / sheen / aniso | 手感一句话 | 用在哪 |
|---|---|---|---|---|
| Cotton 棉 | 平纹 40 | .70 / .10 / .20 | 中性柔和，不抢戏 | 常规卡片、表单、设置、阅读 |
| Linen 亚麻 | 平纹 34 | .78 / .08 / .30 | 粗纱不均匀，干爽 | 编辑器、文档、纸张替代 |
| Silk 丝 | 缎纹 48 | .28 / .74 / .82 | 强方向高光，流动 | Hero、音乐、会员、高级感表面 |
| Denim 牛仔 | 斜纹 44 ∠45° | .72 / .12 / .42 | 硬挺，自带磨损记忆 | 工具、文件管理、长期主义界面 |
| Organza 欧根纱 | 平纹 30 + opacity .45 | .35 / .45 / .55 | 半透明但有结构 | 浮层、弹窗、层叠导航 |

区分铁律：**Silk 是纤维语义，Satin 是组织语义**，不要混用（蓝本 ch.8）。
纱 ≠ 玻璃：玻璃追求消失，纱承认遮挡（见 §4.3 对照表）。

---

## 4. Components

### 4.1 TextileButton（Demo 01：`examples/demo-button-tension.html`）

Anatomy：织物底层（Canvas 程序化经纬）+ 张力环（radial stitch ring）+ 文字层。

| 状态 | 视觉 | Token |
|---|---|---|
| idle | 静止织物 | tension 0.30 |
| hover | 上浮 1px + 增亮 9%，纱线视觉聚拢（张力环淡入） | tension 0.55 |
| pressed | 只压 Y 轴 3.5% + 压暗，对比 +5%，张力环扩到边缘 | tension 0.85, press-depth 2px |
| focus | **金色虚线针迹框**，无 glow | edge-stitch |
| loading | 纱线加捻圈（dashed spinner，1.1s/圈） | — |
| disabled | 降饱和 + 62% 不透明 | — |

Don'ts：× 整体果冻缩放；× 超过 200ms 的大弹簧（高频按钮拖沓）；
× 用 glow 代替针迹。

### 4.2 TextileCard（Demo 02：`examples/demo-card-drape.html`）

**卡片是一块被钉住的织物**：四角 18px 十字针迹是钉子，替代普通描边。
光源跟随指针实时变化 —— 丝的高光流动（aniso .82），麻几乎不动（sheen .08），
牛仔只泛斜纹暗光。倾斜幅度按面料 `tilt` 系数缩放（丝 2.2° / 麻 1.2° / 牛仔 0.8°）。
底部文字一律有暗色渐变托底（180deg，上 .38 → 下 .66）保证可读。
`prefers-reduced-motion`：冻结默认光照角度，禁用倾斜。

### 4.3 TextileOverlay（Demo 03：`examples/demo-overlay-organza.html`）

|  | 欧根纱 Organza | 液态玻璃 Liquid Glass |
|---|---|---|
| 存在感 | 有结构，承认遮挡 | 追求消失，无缝融入 |
| 光学 | 漫射 + 经纬纹理（sheen .45） | 折射 + 镜面高光 |
| 情绪 | 暖、人情味、社区感 | 冷、精密、系统感 |
| 适用 | 社区、内容、生活浮层 | 系统控件、工具栏、Dock |

选型问题只问一句：**你想让用户感觉到材料，还是感觉不到？**

### 4.4 ClothLab（Demo 04：`examples/demo-cloth-press-drag.html`）

本规范唯一的真交互组件。面板就是一块布：按住 0.6s 压出全深凹陷，
按住拖动拽布，松手后凹陷转为回弹速度 —— 丝涟漪走全场，牛仔沉一下就停。
张力环按压时是正圆，拖拽时沿速度方向拉成椭圆。
光源锁定左上（跟随指的光源会杀死坑壁明暗，实测结论）。
架构：语义 DOM（文字层）与纺织层（Canvas）分离，关 Canvas 可读性无损；
`prefers-reduced-motion` 下静态。

算法来源（v0.1.3 起，不再是自写波方程，全部实测落地）：
- Holocloth（MIT）：Verlet 式约束思想 + 带 smoothstep 权重的多点抓取（手指抓的是一片布，不是单点）+
  腔体 AO（褶皱按"挤压程度"变暗，不按深度一刀切）+ 各向异性波速（斜纹沿 45° 传波快，缎纹沿经向快）。
- html-to-cloth（无 LICENSE，只学思想）：语义 DOM 与纺织视觉层分离；fixed-step 子步思想。
- 去"均匀感"三件套：每次按压随机椭圆方向/扁率/边缘呼吸（3+5 谐波），压缩驱动的屈曲褶皱法线
  （脊线横跨局部坡度，纱线在坑壁收拢），坑深棉 40 / 牛仔 24 / 丝 52。
  同一块布按两次，两个坑不一样 —— 这是验收标准之一。

---

## 5. Motion：张力模型

不用万能 easing（蓝本 ch.10）。时长由面料质量推导：

```
duration ≈ 160 + 320 × mass × (0.5 + bending)   // ms
```

重而挺（牛仔 .70/.74）≈ 480ms 沉；轻而软（丝 .24/.20）≈ 200ms 快。
扩散速度由 `damping` 决定。所有动效在 reduced-motion 下归零，
用静态明暗（hover +9% / pressed −7%）表达状态。

---

## 6. 与 M3 / Liquid Glass 的关系

- 学 M3 的：**分层**（primitive → semantic → component）和**可验证的渐进增强**，
  不学它的外观。
- 学 Liquid Glass 的：**光线与深度语言**（高光、模糊、层级），
  但纱和玻璃是反义词 —— 第 4.3 节对照表是本规范的原创主张。
- 学术级真实感（Irawan woven shading 等）是 v0.3 之后的事，v0.1
  用高度场 + Lambert + 方向性 sheen 近似（`packages/shaders/`）。

---

## 7. Accessibility（强制）

1. 纺织纹理永远是装饰层：关闭它、冻住它，信息与操作完整。
2. 焦点必须可见：金色针迹框对比度 ≥ 3:1（相对按钮底）。
3. 文字对比度：织物上的正文 ≥ 4.5:1，不够就加暗色托底（卡片 §4.2 已做）。
4. 动态全部响应 `prefers-reduced-motion`。
5. 纹理密度不许干扰阅读：正文区只用棉/麻两档（sheen ≤ .10）。

---

## 8. 实现分层

| 档 | 技术 | 覆盖 |
|---|---|---|
| L1 | 纯 CSS（渐变 + repeating-linear-gradient + 阴影） | 按钮常态、高频组件 |
| L2 | Canvas 2D 高度场（demos 现状，离线可跑） | 卡片、Hero、Playground |
| L3 | WebGL / WGSL（`packages/shaders/*.glsl` 草稿） | v0.2 高级表面 |

性能预算（蓝本 ch.19）：首屏 L1/L2，L3 按设备分级开启；
按钮上不许跑逐帧重绘（hover/pressed 用 CSS filter + 静态张力环）。

---

## 9. 版本与下一步

- 本规范 v0.1 对应蓝本 `docs/blueprint-v0.1.md` ch.4–ch.23 的落地子集。
- v0.2 计划：material-core 发包、React 三件套接张力状态、Shader v1、
  磨损/记忆原型（牛仔褪色）、Playground v2（预设混合器）。
