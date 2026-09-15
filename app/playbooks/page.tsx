import Link from "next/link";
import { getPlaybooks } from "@/lib/posts";

export const metadata = {
  title: "Playbooks",
};

export default function PlaybooksPage() {
  const posts = getPlaybooks();

  return (
    <>
      <p className="eyebrow">Playbooks</p>
      <h1>可复用规则</h1>
      <p className="lead">
        从真实动作里抽出的方法与复盘，供 MarketUP / 下一篇样本复用。
      </p>
      {posts.length === 0 ? (
        <p className="lead">首批 playbook 将随日志沉淀后发布。</p>
      ) : (
        <ul className="card-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link className="card" href={`/playbooks/${post.slug}`}>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
