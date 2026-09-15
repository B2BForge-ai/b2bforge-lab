import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentRoot = path.join(process.cwd(), "content");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  type: "manifesto" | "sample" | "log" | "playbook";
  sample: string;
  summary: string;
  englishSummary: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

/** gray-matter parses bare YAML dates as Date — String(date) becomes a GMT dump. */
function formatDate(value: unknown): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  const raw = String(value ?? "").trim();
  if (!raw) return "";
  const parsed = new Date(raw);
  if (!Number.isNaN(parsed.getTime()) && /^\d{4}-\d{2}-\d{2}/.test(raw)) {
    return raw.slice(0, 10);
  }
  if (!Number.isNaN(parsed.getTime()) && /GMT|UTC|Coordinated/i.test(raw)) {
    return parsed.toISOString().slice(0, 10);
  }
  return raw;
}

/** Page templates already render frontmatter title as <h1>; drop a leading AT1 from the body. */
function stripLeadingH1(markdown: string): string {
  return markdown.replace(/^\s*#\s+[^\n]+\n+/, "");
}

function readDir(dir: string): PostMeta[] {
  const full = path.join(contentRoot, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(full, file), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: String(data.title ?? slug),
        date: formatDate(data.date),
        type: (data.type ?? "log") as PostMeta["type"],
        sample: String(data.sample ?? "BagEvent"),
        summary: String(data.summary ?? ""),
        englishSummary: String(data.englishSummary ?? ""),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPosts(): PostMeta[] {
  return [...readDir("log"), ...readDir("playbooks")].sort((a, b) =>
    a.date < b.date ? 1 : -1,
  );
}

export function getLogPosts(): PostMeta[] {
  return readDir("log");
}

export function getPlaybooks(): PostMeta[] {
  return readDir("playbooks");
}

export async function getPost(
  kind: "log" | "playbooks",
  slug: string,
): Promise<Post | null> {
  const file = path.join(contentRoot, kind, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(stripLeadingH1(content));
  return {
    slug,
    title: String(data.title ?? slug),
    date: formatDate(data.date),
    type: (data.type ?? "log") as PostMeta["type"],
    sample: String(data.sample ?? "BagEvent"),
    summary: String(data.summary ?? ""),
    englishSummary: String(data.englishSummary ?? ""),
    contentHtml: processed.toString(),
  };
}
