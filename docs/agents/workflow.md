# 任务流 · workflow

```text
Issue(.scratch/<feature>/)
  → docs/outputs/report/{theme}/     # 可选调研
  → docs/outputs/prd/{theme}/prd.md  # draft → 用户 approved
  → 拆 To-Do
  → docs/outputs/handoff/{theme}/YYYY-MM-DD-{branch}-{task}.md  # 覆盖式
  → 实施
  → awaiting-review【停】
  → 用户通过 → commit + docs/outputs/commit-history/{branch}/YYYY-MM-DD.md
  → archive（按需）
```

## 门禁

| 门 | 规则 |
|---|---|
| PRD | 未标注 approved → 不写业务功能代码 |
| Review | 实现后必须停等用户，不得擅自 commit |
| handoff | 同 theme 只保留最新一份；写新删旧 |

## Handoff 场景

默认仅 **A**。说明见 `docs/agents/handoff.md`。

## 首个 theme

project-init Gate 通过前：**不开启**业务 theme。通过后由小 A 指定 theme 名再开 Issue/PRD。
