# CLAUDE.md

> **Output Style**: `humanizer-output-style` — see `C:\Users\Lenovo\.claude\skills\humanizer-output-style\SKILL.md`  
> **Windows Rules**: `.cursor/rules/windows-path-discipline.mdc` · `windows-shell-discipline.mdc`  
> **Answer Format**: `.cursor/rules/answer-format.mdc`  
> **Commit History**: `.cursor/rules/commit-history.mdc`  
> **项目语气覆盖**: `docs/agents/voice.md`

## 维护协议

1. 改领域事实 → 只改 `CONTEXT.md`（必要时 ADR）。
2. 改共享用词 → 只改 `LANGUAGES.md`。
3. 改任务流门禁 → 改 `AGENTS.md` + `docs/agents/workflow.md`。
4. 人读说明 / 徽章 / 配图 → `README.md` + `assets/images/readme/`。

## 三层加载

| 层 | 读什么 |
|---|---|
| L0 入口 | `AGENTS.md` · `CLAUDE.md` · `CONTEXT.md` · `LANGUAGES.md` · `README.md` |
| L1 流程 | `docs/agents/*` |
| L2 产物 | `docs/outputs/**` · `docs/adr/**` · `.scratch/**` |

## 偏好归档

- 跟课节奏：按 README「入职 12 步」推进，首个业务 theme 未定时只维护骨架。
- IDE：Cursor + JDK 21 + Maven（见 `.vscode/settings.json`）。
- README 本地预览壳端口：**8090**（见 `docs/outputs/prd/port-registry.md`）。

## Agent skills

### Issue tracker

本地 Markdown（`.scratch/<feature>/`）。见 `docs/agents/issue-tracker.md`。

### Triage labels

canonical 五标签。见 `docs/agents/triage-labels.md`。

### Domain docs

single-context。见 `docs/agents/domain.md`。
