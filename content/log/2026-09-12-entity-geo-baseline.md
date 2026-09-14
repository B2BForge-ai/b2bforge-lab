---
title: "9/12 · 站外实体起步 + GEO 基线"
date: 2026-09-12
type: log
sample: BagEvent
summary: "Bing 验证、G2 Claim、LinkedIn 国际页、sameAs；GEO 20 题几乎 0 提及。"
englishSummary: "Day log for BagEvent GTM. Verified Bing webmaster file on GCE. Claimed G2 product page. Confirmed international LinkedIn company page. Updated Organization sameAs. Ran GEO baseline of 20 questions across engines with almost zero BagEvent mentions."
---

## 目标

让国际主体在网上「可被找到、可被引用」；同时拿到 GEO 诚实基线，而不是先堆内容。

## 动作

- 上传并上线 `BingSiteAuth.xml` 到 GCE 站点根目录；Bing 站长验证通过。
- G2 产品页 Claimed：`https://www.g2.com/products/bagevent`。
- 确认 LinkedIn 国际页：`https://www.linkedin.com/company/bageventio`（不用南京「百格活动」页）。
- 官网 Organization `sameAs` 写入 G2 + LinkedIn（随后随站点部署生效）。
- 按固定 20 题 × 多引擎做 GEO 基线（ChatGPT / Perplexity / AI Overview / Claude），原题不改。

## 结果

- `https://bagevent.io/BingSiteAuth.xml` 可访问。
- G2、LinkedIn 国际实体就位。
- GEO：**几乎无人提及 BagEvent**——符合冷启动预期，基线可用于月末对照。

## 失败 / 卡点

- Capterra / Crunchbase 当时仍未完成公开页。
- AI 引用滞后，基线不能当「内容失败」结论，只能当起点。

## 可复用规则

1. 先实体（目录站 + LinkedIn + sameAs），再谈 GEO 内容加倍。
2. GEO 指标看「被提到次数」，不看 AI 点击。
3. 基线题库一旦固定，复测禁止改题。
