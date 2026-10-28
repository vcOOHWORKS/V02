import { articles, getArticle } from "@/content/journal";
import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "VO2 Journal";
export const size = ogSize;
export const contentType = ogContentType;

// Prerender one share image per article at build time
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

const journalTone = "linear-gradient(175deg,#ebdfd5 0%,#d3a28c 55%,#97302e 100%)";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return ogImage({ eyebrow: "Journal", title: "Read before", emphasis: "you book." });
  return ogImage({ eyebrow: `Journal · ${a.category}`, title: a.title, tone: journalTone });
}
