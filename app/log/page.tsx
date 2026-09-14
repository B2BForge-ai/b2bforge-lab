import Link from "next/link";
import { getLogPosts } from "@/lib/posts";

export const metadata = {
  title: "日志",
};

export default function LogIndexPage() {
  const posts = getLogPosts();

  return (
    <>
      <p className="eyebrow">Log</p>
      <h1>公开日志</h1>
      <p className="lead">按时间记录目标、动作、结果、失败与可复用规则。</p>
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
    </>
  );
}
