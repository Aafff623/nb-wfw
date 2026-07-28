# AGENTS.md

> **Output Style**: `humanizer-output-style` skill — 统一语气风格与去 AI 味配置。加载路径：`C:\Users\Lenovo\.claude\skills\humanizer-output-style\SKILL.md`  
> **Windows Rules**: `.cursor/rules/windows-path-discipline.mdc` · `windows-shell-discipline.mdc`  
> **Answer Format**: `.cursor/rules/answer-format.mdc`（先简述再详细；表格/Mermaid 优先）  
> **Commit History**: `.cursor/rules/commit-history.mdc`

## 硬约束

1. **PRD 未批准 → 不写业务功能代码**（骨架 / docs / rules 除外）。
2. handoff 覆盖式更新：同 theme 旧 handoff 文件直接删除。
3. Review 先于 commit；未经用户明确要求不 `git commit` / `git push`。
4. 单一事实源：领域 → `CONTEXT.md`；用词 → `LANGUAGES.md`；人读入口 → `README.md`。
5. 禁止新建 `docs/agents/language.md` / `docs/agents/context.md`。
6. 禁止新建 `docs/images/`；媒体进 `assets/`。
7. 课内技术选型优先 **Spring Cloud Alibaba** 链路；与通用 Spring Cloud 规范冲突时以课内可跑通为准。
8. 密钥不入库；本机绝对路径不作唯一说明。

## 路径表

| 事实 / 产物 | 路径 |
|---|---|
| 领域与硬约束 | `CONTEXT.md` |
| 共享用词 | `LANGUAGES.md` |
| Agent 任务流 | `docs/agents/workflow.md` |
| Issue tracker | `docs/agents/issue-tracker.md` · 实体 `.scratch/<feature>/` |
| Triage | `docs/agents/triage-labels.md` |
| Domain 消费规则 | `docs/agents/domain.md` |
| ADR | `docs/adr/` |
| PRD / handoff / report / commit-history | `docs/outputs/`（索引见该目录 README；子目录按需建） |
| Handoff 场景 A–E | `docs/agents/handoff.md`（默认仅 A） |
| 媒体 | `assets/`（配图占位见 `assets/images/readme/PLACEHOLDER.md`） |
| 多端索引 | `CONTEXT-MAP.md`（当前单 CONTEXT，仅占位） |
| 项目 Cursor Rules | `.cursor/rules/` |

## 任务流摘要

```text
Issue(.scratch) → report?(可选) → PRD(draft→approved) → handoff → 实施 → Review【停】→ commit-history → archive
```

细则见 `docs/agents/workflow.md`。

## Review 门禁

- 实现完成后标记 awaiting-review，**停等用户**。
- 用户通过后再 commit，并写 `docs/outputs/commit-history/{branch}/YYYY-MM-DD.md`。

## Agent skills

### Issue tracker

本地 Markdown：Issues / PRD 草稿落在 `.scratch/<feature>/`。见 `docs/agents/issue-tracker.md`。

### Triage labels

五类 canonical 标签原样使用。见 `docs/agents/triage-labels.md`。

### Domain docs

单 CONTEXT：`CONTEXT.md` + `docs/adr/`。见 `docs/agents/domain.md`。
