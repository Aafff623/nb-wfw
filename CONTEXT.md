# CONTEXT.md

> 领域事实与硬约束的单一入口。临时笔记不要写这里。

## 项目定位

| 项 | 值 |
|---|---|
| 名称 | nbwfw（NB 微服务全栈跟练仓） |
| 类型 | 个人暑假深度学习 / 跟课实战仓 |
| 课程 | 小坏说 Java · NB 微服务全栈 |
| 课程页 | https://ai.e404e.cn/course |
| B 站合集 | https://space.bilibili.com/1914134970/channel/collectiondetail?sid=8087830 |
| 公开入口 | https://www.bilibili.com/video/BV1RVyYBZE4z/ |
| 受众 | 自己（小 A） |
| 当前阶段 | project-init 完成；远程 https://github.com/Aafff623/nb-wfw |

## 目标

把课内「听过的名词」变成能独立拉起多模块工程、联调网关/支付、能口述链路的能力。不是一次交付完整商业 SaaS。

## 技术栈（课内对齐）

| 层 | 选型 |
|---|---|
| 语言 / 构建 | Java 17+（本机 JDK 21）、Maven 多模块 |
| 后端 | Spring Boot 3.x、Spring Cloud Alibaba |
| 协作件 | Nacos、OpenFeign、Gateway、LoadBalancer |
| 稳定 / 事务 | Sentinel、Seata、Redis、RabbitMQ（按课扩展） |
| 数据 | MySQL、MyBatis-Plus |
| 文档 / 鉴权 | Knife4j / Swagger、JWT |
| 前端 | Vue3、Vite、Element Plus、Axios |
| 移动端 | Uniapp、uView |
| 可观测 | Actuator、ELK、SkyWalking、Prometheus / Grafana |
| 发布 | Docker、Harbor、Kubernetes、CI/CD |
| 业务加餐 | 微信/支付宝支付、OSS、短信、AI 服务模块 |

## 产品层根

- **现状**：仅 Agent / docs / assets 骨架，无业务源码。
- **约定**：业务代码按课内 Maven 多模块落在**仓库根**（父 POM + 子模块），不强制 `src/` 单树。首个 theme 开写时再建模块目录。

## 硬约束

1. 跟课顺序优先：入职 12 步 / 视频大纲 01→09，禁止无 PRD 的大规模跳步堆系统。
2. 选型冲突：课内可跑通链路 > 通用「最佳实践」空谈。
3. 统一返回体、构造器注入、jakarta.* 等见 `.cursor/rules/spring-boot-cloud.mdc`。
4. 无密钥入库；支付/微信配置用环境变量或本地未跟踪文件。

## 术语（摘要）

| 术语 | 含义 |
|---|---|
| 内部学员版 | 付费资料权益（飞书文档 / 完整视频），非本仓代码许可 |
| 父工程 | Maven parent POM + BOM，多模块依赖对齐 |
| 鉴权中心 | 课内认证服务骨架，发 JWT / 校验登录态 |
| 跟练 theme | 一次可交付的学习切片（对应某步或某视频阶段） |

更完整用词见 `LANGUAGES.md`。未裁定项标【待确认】后再写入本文件。

## 外部资产

| 来源 | 处理 |
|---|---|
| 课程页 / B 站公开内容 | 链接记入本文件与 README；不镜像整站 |
| `d:\cache\chrome-cache\下载.md` | 课程介绍摘录，已吸收进 README / 本 CONTEXT；**不**复制进 `assets/backup/`（可随时从缓存重读） |

## 非目标（当前）

- 不做独立 Preview Gallery 站（无组件资产库）
- 不在 init Gate 前写微服务业务代码
- 不把课程付费资料整包入库
