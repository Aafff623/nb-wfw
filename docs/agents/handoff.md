# Handoff 场景（A–E）

本仓默认只启用 **A**。需要时再在 PRD/主题里打开其它场景。

| 场景 | 何时用 | 产物落点 |
|:---:|---|---|
| **A** | 常规 theme：Issue → PRD → 实施 → Review | `docs/outputs/handoff/{theme}/YYYY-MM-DD-{branch}-{task}.md` |
| B | 跨 Agent / 跨会话长任务，需要更完整的上下文打包 | 同 A，正文加「已读 CONTEXT / ADR / 相关代码」清单 |
| C | 仅调研不写代码 | `docs/outputs/report/{theme}/` 为主；handoff 可省略 |
| D | 热修 / Bug（见 project-init §5.0） | Issue 走 `.scratch/`；修复后补 commit-history |
| E | 文档-only（README / ADR / 规范） | handoff 可极简；仍须 Review 后再 commit |

## 场景 A 模板字段

```markdown
# handoff · {theme} · {task}

- Date:
- Branch:
- Status: in-progress | awaiting-review | done
- PRD: docs/outputs/prd/{theme}/prd.md
- Issue: .scratch/{feature}/…

## 目标
## 范围 / 非范围
## 已完成
## 未完成 / 风险
## 验收方式
## 关联路径
```

## 规则

- **覆盖式更新**：同 theme 写新 handoff 时删除旧文件。
- PRD 未 approved → 不进入实施 handoff。
