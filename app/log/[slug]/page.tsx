import Link from "next/link";
import { notFound } from "next/navigation";
import { getLogPosts, getPost } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getLogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPost("log", slug);
  return { title: post?.title ?? "日志" };
}

export default async function LogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost("log", slug);
  if (!post) notFound();

  return (
    <article>
      <p className="eyebrow">
        {post.type} · Sample: {post.sample}
      </p>
      <h1>{post.title}</h1>
      <p className="meta">{post.date}</p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      {post.englishSummary ? (
        <div className="en-box">
          <strong>English Summary</strong>
          <p>{post.englishSummary}</p>
        </div>
      ) : null}
      <p style={{ marginTop: "2rem" }}>
        <Link href="/log">← 返回日志</Link>
      </p>
    </article>
  );
}
