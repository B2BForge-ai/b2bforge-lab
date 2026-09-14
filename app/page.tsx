import Link from "next/link";
import { getLogPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export default function HomePage() {
  const posts = getLogPosts().slice(0, 3);

  return (
    <>
      <p className="eyebrow">
        Forge Lab · Case Study #1: {site.sampleName}
      </p>
      <h1>{site.tagline}</h1>
      <p className="lead">{site.description}</p>
      <div className="cta-row">
        <Link className="btn btn-primary" href="/log">
          看日志
        </Link>
        <Link className="btn" href="/playbooks">
          Playbooks
        </Link>
        <a className="btn" href={site.productUrl}>
          了解产品站
        </a>
      </div>

      <h2>最新日志</h2>
      {posts.length === 0 ? (
        <p className="lead">内容准备中。</p>
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
