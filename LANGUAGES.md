# LANGUAGES.md

> Agent 输出必须使用的共享词汇。与 `CONTEXT.md` 冲突时以 CONTEXT 为准并回写此处。

## 项目称呼

| 用 | 不用 |
|---|---|
| nbwfw / NB 微服务全栈跟练仓 | 「毕业设计」「公司正式产线」 |
| 跟练 / 课内链路 | 「一次性交付完整 SaaS」 |
| 小坏说 Java · NB 微服务全栈 | 含糊的「那个 Java 课」 |

## 用户称呼

- 对用户：小 A（见 `docs/agents/voice.md`）

## Issue / 任务流用词

| 词 | 含义 |
|---|---|
| theme | 一个业务/学习切片名（目录名用 kebab-case） |
| Issue | `.scratch/<feature>/issues/` 下的本地 markdown 工单 |
| PRD | `docs/outputs/prd/{theme}/prd.md` |
| handoff | `docs/outputs/handoff/{theme}/` 覆盖式交接快照 |
| awaiting-review | 实现完成、等待用户验收的状态 |
| commit-history | `docs/outputs/commit-history/{branch}/` 分支摘要 |

## Triage Status 行（本地 Issue）

写入 Issue 文件顶部：`Status: needs-triage | needs-info | ready-for-agent | ready-for-human | wontfix`

## 领域用词（跟课）

| 用 | 避免混用 |
|---|---|
| Nacos 注册/配置 | 「Eureka 配置中心」指本课默认栈时 |
| Spring Cloud Alibaba | 无必要改成纯 Netflix OSS |
| Gateway | Zuul（课内不作为默认） |
| Sentinel | 仅口头说「限流」而不指名组件（文档里要写清） |
| Knife4j | 只写 Swagger 而实际用 Knife4j UI 时 |
| 统一返回体 | 随意 `ResponseEntity` 当对外契约 |
| 父工程 / 多模块 | 「单个文件夹 Demo」 |

## 目录口语

| 说 | 指 |
|---|---|
| 根入口 | `AGENTS.md` / `CONTEXT.md` / `README.md` 等 |
| 流程件 | `docs/agents/` |
| 产物 | `docs/outputs/` |
| 媒体 | `assets/` |
