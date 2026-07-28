# deliver

交付物检查（业务 theme 结束时）：

1. PRD 状态为 approved，且实现范围未越权。
2. handoff 已更新到最终态。
3. 用户 Review 通过记录（口头或 Issue 评论即可）。
4. 需要入库时：原子 commit + `docs/outputs/commit-history/{branch}/YYYY-MM-DD.md`。
5. 密钥 / 本机路径未写入仓库。
