# docs/outputs/

任务产物目录。按规范：**有产物再建子目录**，不预铺空壳、不加 `.gitkeep`。

| 子目录 | 用途 | 何时出现 |
|---|---|---|
| `prd/{theme}/` | PRD、port-registry、readme-diagrams | init 已有 `prd/`；业务 theme 再建 `{theme}/` |
| `report/{theme}/` | 调研报告（可选，先于 PRD） | 首次调研时创建 |
| `handoff/{theme}/` | 交接快照（覆盖式） | 首个实施 handoff 时创建 |
| `commit-history/{branch}/` | 分支可读摘要 | 首次 Review 通过并 commit 后创建 |

流程见 `docs/agents/workflow.md` · 场景见 `docs/agents/handoff.md`。
