# Performance budget + Accessibility + visual pitfalls

> Verbatim from blueprint v0.1 ch.19-21.

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
