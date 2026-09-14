# Forge Lab Deploy

## Vercel（Hobby 免费档）

1. 打开 https://vercel.com → 用 GitHub 登录（需能访问 `B2BForge-ai/b2bforge-lab`）
2. **Add New Project** → Import `b2bforge-lab`
3. Framework Preset: Next.js（默认即可）→ **Deploy**
4. 部署成功后：**Settings → Domains** → 添加 `lab.b2bforge.ai`
5. 在 `b2bforge.ai` 的 DNS 增加 CNAME（按 Vercel 提示，一般为）：
   - Name: `lab`
   - Target: `cname.vercel-dns.com`

本地：

```bash
npm install
npm run dev
```
