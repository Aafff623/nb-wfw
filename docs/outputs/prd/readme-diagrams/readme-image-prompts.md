# README Image Prompts · nbwfw

> 投喂 GPT image-to-image / 文生图。先读本节全局规范，再逐张复制英文 Prompt。

## §0 全局规范

| 项 | 值 |
|---|---|
| 项目 | nbwfw · 小坏说 Java NB 微服务全栈跟练仓 |
| 视觉总调 | 白底 / 浅灰；主色 `#1e3a5f`；强调 `#0d9488`；辅助灰 `#64748b`；成功绿 `#159957` |
| 材质 | 扁平卡片 + 细线边框，统一 8–12px 圆角 |
| 禁止 | 彩虹、炫光、蜘蛛网连线、假文字、3D 贴纸混搭 |
| 落盘 | `assets/images/readme/{契约名}.png` |

### 系统指令模板（可贴到对话开头）

```text
You are generating professional README diagrams for a Chinese Java microservice learning repo (nbwfw).
Use 4–6 colors only: navy #1e3a5f, teal #0d9488, slate #64748b, light gray background, white cards, optional green #159957.
Flat vector, consistent stroke, orthogonal connectors, readable Chinese or English labels, no fake lorem text, no neon glow, no clutter.
```

---

## 1. banner.png

| 字段 | 内容 |
|---|---|
| 一句话 | 页首横幅：NB 微服务全栈跟练 |
| 详细 | 3:1；左侧标题「NB 微服务全栈」+ 副标题「暑假跟练 · 小坏说 Java」；右侧简化分层剪影（Gateway / Services / Midware） |
| 英文 Prompt | `Wide 3:1 README banner, clean white background, navy and teal flat vector, left bold title "NB Microservices", subtitle "Summer deep-learn track", right side minimal layered silhouette of API gateway, services, Nacos Redis, no clutter, professional tech blog hero, high whitespace` |
| Avoid | characters, 3D robots, rainbow gradients |

## 2. features.png

| 字段 | 内容 |
|---|---|
| 一句话 | 五层能力：前端、接入、业务、中间件、可观测发布 |
| 英文 Prompt | `Infographic five equal modules in a row: Frontend Vue3/Uniapp, Gateway Auth Rate-limit, Business microservices Feign Pay, Middleware Nacos Redis Seata MQ, Observability ELK SkyWalking K8s; navy teal slate palette; icon+title+one-line caption each; flat cards; white background` |

## 3. architecture.png

| 字段 | 内容 |
|---|---|
| 风格 | microservices layered |
| 英文 Prompt | `Layered microservice architecture diagram: top clients Vue3 admin and Uniapp; then Spring Cloud Gateway; then auth center and business services connected by OpenFeign; side Nacos config/registry; bottom Redis MySQL RabbitMQ; observability ELK SkyWalking; deployment Docker K8s; orthogonal arrows; navy teal slate; white background; clear Chinese or English labels` |

## 4. tech-stack.png

| 字段 | 内容 |
|---|---|
| 一句话 | 技术名分层条，勿重复 architecture 拓扑 |
| 英文 Prompt | `Tech stack layered bars, not topology: Java21 Maven, Spring Boot Spring Cloud Alibaba, Nacos Gateway OpenFeign Sentinel Seata, MySQL MyBatis-Plus Redis, Vue3 Element Plus Uniapp, Docker Harbor Kubernetes; logo-like simple icons optional; navy teal slate; white background` |

## 5. workflow.png

| 字段 | 内容 |
|---|---|
| 一句话 | 入职 12 步主路径 |
| 英文 Prompt | `Horizontal stage workflow 12 steps for learning path: foundation, CRUD JWT, microservice collab, middleware, observability, WeChat login, payment, Seata Job, Vue Uniapp, business projects, K8s deploy, AI addon; single main path; navy teal; decision diamonds max 2; white background; readable short labels` |

## 6. structure.png（可选）

优先用 README Markdown 树；若出图：

`Clean folder tree diagram: root AGENTS CONTEXT README, .cursor/rules, docs/agents docs/adr docs/outputs, assets/images/readme, future Maven modules placeholder; color by depth; white background`

## 7. Preview / Showcase

| 项 | 说明 |
|---|---|
| Preview 站 | **本仓省略**（非资产 Gallery） |
| Showcase | `method: screenshot`；业务 UI 跑通后再用 Playwright 补 `showcase-*.png` |
| README 壳 | 用 `preview-readme.html` 本地预览 README 排版，不是产品 Showcase |
