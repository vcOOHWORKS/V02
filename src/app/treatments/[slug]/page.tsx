import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { TreatmentDetail } from "@/components/treatment/TreatmentDetail";
import { categories, getCategory } from "@/content/treatments";
import { pageMeta } from "@/lib/seo";

// Every category is prerendered at build time.
export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps<"/treatments/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const category = getCategory(slug);
  if (!category) return {};
  return pageMeta({
    title: category.title,
    description: `${category.summary} Doctor-led care at VO2, Bengaluru.`,
    path: `/treatments/${category.slug}`,
    image: `/treatments/${category.slug}/opengraph-image`,
  });
}

export default async function TreatmentPage(props: PageProps<"/treatments/[slug]">) {
  const { slug } = await props.params;
  const category = getCategory(slug);
  // `dynamicParams` is unavailable with Cache Components, so unknown slugs 404 here.
  if (!category) notFound();

  return (
    <SiteShell current="treatments">
      <TreatmentDetail category={category} />
    </SiteShell>
  );
}
