# Forge Lab (`lab.b2bforge.ai`)

MarketUP 出海品牌 [B2B Forge](https://b2bforge.ai) 的公开实验室。  
用真实样本记录出海 B2B SaaS 市场从零到一。

样本 #1：[BagEvent](https://bagevent.io)

## 本地运行

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

## 内容

- 日志：`content/log/*.md`
- Playbooks：`content/playbooks/*.md`

Frontmatter 字段：`title` `date` `type` `sample` `summary` `englishSummary`

## DNS（上线时）

| 主机记录 | 类型 | 值 |
|---------|------|-----|
| `lab` | CNAME | 指向你的托管（Vercel/Cloudflare Pages 等） |

产品站 `b2bforge.ai` 与 Lab `lab.b2bforge.ai` **分域部署**。

## 品牌关系

```
marketup.cn     → 国内 MarketUP
b2bforge.ai     → 出海产品站
lab.b2bforge.ai → 本仓库（公开过程）
bagevent.io     → 样本 #1
```
