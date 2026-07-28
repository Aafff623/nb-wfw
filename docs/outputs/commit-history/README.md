# commit-history/

按分支组织的可读 commit 摘要（不是 git log 复制）。规范见 `.cursor/rules/commit-history.mdc`。

## 结构

```text
commit-history/
├── main/
│   └── YYYY-MM-DD.md
├── feat-xxx/
│   └── YYYY-MM-DD.md
└── archive/              # 已合并分支归档
    └── README.md
```

## 占位

`main/` 将在首次入库 commit 后写入当日摘要。`archive/` 见子目录说明。
