# ADR-0000 · 采用 Architecture Decision Records

- Status: accepted
- Date: 2026-07-28

## Context

跟练仓会持续引入中间件与模块边界；需要可追溯的决策记录，避免只靠聊天记忆。

## Decision

使用 `docs/adr/` 存放 ADR；文件名 `000N-kebab-title.md`。系统级决策放此处；若未来拆多端 CONTEXT，再按 `docs/agents/domain.md` 增加分端 ADR。

## Consequences

- 重大选型（如 Nacos vs 其它注册中心、模块拆分）先写或补 ADR。
- 与 `CONTEXT.md` 冲突时，以最新 accepted ADR 为准并回写 CONTEXT。
