---
title: "9/14 · 官网部署 + 目录站实操 + 计划表"
date: 2026-09-14
type: log
sample: BagEvent
summary: "bagevent.io 提交 GCE；目录站清单；AlternativeTo 提交；营销计划试用版。"
englishSummary: "Redeployed bagevent.io static site to GCE. Drafted directory checklist beyond G2. Submitted AlternativeTo listing. Created a 30/60/90 marketing plan trial doc with weekly rhythm."
---

## 目标

把已改的官网发上网；目录站从「知道要做」变成「有清单可勾」；开始填站外表单。

## 动作

- `bagevent-website` 构建并同步到 GCE `bagevent-benny` 站点目录；线上校验首页 200、Bing 文件 200、sameAs 含 G2/LinkedIn。
- 新增目录站清单 `docs/directory-list.md`（P0/P1/P2：Crunchbase、TrustRadius、SourceForge、AlternativeTo、SaaSHub 等）。
- 提交 **AlternativeTo**（简介、描述、Features 仅勾 Ad-free）。
- 写营销计划试用版 `docs/marketing-plan-trial.md`（周主题、Doing≤3、目录站权重最高）。
- 讨论若重心全放 GEO：实体 40% + 答案页 40% + 可达性 15% + 复测 15%。

## 结果

- 官网部署成功，G2/LinkedIn 在线上 HTML 可见。
- AlternativeTo 表单已提交（公开 URL 待审核后回填）。
- 有可执行的周计划模板，不再靠聊天记录记进度。

## 失败 / 卡点

- Capterra / Clutch / Crunchbase 仍未收尾。
- Lab 站仍未上线；过程还写在内部 docs。

## 可复用规则

1. 目录站按 P0→P1 推进，拒绝百站提交包。
2. sameAs 只收已上线、国际主体一致的 URL。
3. 官网改完必须有一次可验证的生产部署，否则 GEO/实体都是「本地正确」。
