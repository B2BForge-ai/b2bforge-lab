import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.brand}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(`https://${site.domain}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,650&family=Manrope:wght@400;560;650;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="shell">
          <header className="nav">
            <Link className="nav-brand" href="/">
              {site.name}
            </Link>
            <nav className="nav-links">
              <Link href="/log">日志</Link>
              <Link href="/playbooks">Playbooks</Link>
              <Link href="/about">关于</Link>
              <a href={site.productUrl} rel="noopener noreferrer">
                B2B Forge
              </a>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="footer">
            <p>
              {site.name} · {site.domain} · MarketUP 出海品牌{" "}
              <a href={site.productUrl}>{site.brand}</a> 的公开实验室。样本 #1：
              <a href={site.sampleUrl}>{site.sampleName}</a>。
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
