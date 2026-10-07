# Recommended stack + engineering architecture

> Verbatim from blueprint v0.1 ch.14-15.

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
