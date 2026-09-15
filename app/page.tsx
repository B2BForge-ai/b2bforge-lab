import Link from "next/link";
import { getLogPosts, getPlaybooks } from "@/lib/posts";
import { site } from "@/lib/site";

export default function HomePage() {
  const posts = getLogPosts().slice(0, 5);
  const playbooks = getPlaybooks().slice(0, 3);

  return (
    <>
      <p className="eyebrow">
        Forge Lab · Case Study #1: {site.sampleName}
      </p>
      <h1>{site.tagline}</h1>
      <p className="lead">
        这里按天记录我们用 BagEvent（bagevent.io）做出海市场的真实动作——目录站、GEO、部署、表单填写与翻车。不是教程演示页。
      </p>
      <div className="cta-row">
        <Link className="btn btn-primary" href="/log">
          按天看日志
        </Link>
        <Link className="btn" href="/playbooks">
          Playbooks
        </Link>
        <a className="btn" href={site.sampleUrl}>
          样本产品 BagEvent
        </a>
      </div>

      {playbooks.length > 0 ? (
        <>
          <h2>Playbooks</h2>
          <ul className="card-list">
            {playbooks.map((post) => (
              <li key={post.slug}>
                <Link className="card" href={`/playbooks/${post.slug}`}>
                  <h3>{post.title}</h3>
                  <p>
                    {post.date} · {post.summary}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <h2>日志（新 → 旧）</h2>
      {posts.length === 0 ? (
        <p className="lead">还没有日志。</p>
      ) : (
        <ul className="card-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link className="card" href={`/log/${post.slug}`}>
                <h3>{post.title}</h3>
                <p>
                  {post.date} · {post.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
