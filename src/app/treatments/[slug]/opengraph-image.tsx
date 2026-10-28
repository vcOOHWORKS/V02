import { categories, getCategory } from "@/content/treatments";
import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "VO2 treatments, Bengaluru";
export const size = ogSize;
export const contentType = ogContentType;

// Prerender one share image per treatment at build time
export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCategory(slug);
  if (!c) return ogImage({ eyebrow: "Treatments", title: "VO2", emphasis: "Bengaluru" });
  return ogImage({
    eyebrow: "Treatments · VO2 Bengaluru",
    title: c.heading[0],
    emphasis: c.heading[1],
    subtitle: c.tagline,
    tone: c.tone,
  });
}
