import Link from "next/link";
import { notFound } from "next/navigation";
import { getPlaybooks, getPost } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPlaybooks().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPost("playbooks", slug);
  return { title: post?.title ?? "Playbook" };
}

export default async function PlaybookPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost("playbooks", slug);
  if (!post) notFound();

  return (
    <article>
      <p className="eyebrow">playbook · Sample: {post.sample}</p>
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
        <Link href="/playbooks">← 返回 Playbooks</Link>
      </p>
    </article>
  );
}
