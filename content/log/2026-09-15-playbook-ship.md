---
title: "9/15 · Operations Playbook 上站 + Lab 生产线复盘"
date: 2026-09-15
type: log
sample: BagEvent
summary: "bagevent.io/playbook 七路由上线；Lab 发第一篇 Playbook：白皮书生产线与抓错记录。"
englishSummary: "Shipped the open Operations playbook on bagevent.io. Published the first Lab playbook: constraint system, catch-and-fix cases, and open web plus direct PDF."
---

## 目标

把印刷版白皮书迁到 bagevent.io 可抓取网页；在 Lab 留下可复用的生产线复盘。

## 动作

- bagevent.io：`/playbook` + 六阶段页上线；顶栏 Playbook；PDF 无门槛直链到 `/downloads/…`（决策 A1 / B1）。
- Lab：新增 Playbook 文 [零客户，先写 49 页](/playbooks/english-playbook-pipeline)；首页增加 Playbooks 入口卡片。

## 结果

- 开放网页可被搜索引擎与 AI 引擎抓取；印刷版 PDF 可下载。
- Lab 的 `/playbooks` 不再是空壳。

## 失败 / 卡点

- nginx `/downloads/` 挂在独立目录，不在 website 根下；首次部署 PDF 曾 404，已拷到正确挂载点。Cloudflare 曾缓存 404，页内链带 `?v=1.2`。

## 下一步

- 观察带 UTM 的 Lab → playbook 流量与冷邮件差。
- 内容保真核对后按需修网页版细节。
