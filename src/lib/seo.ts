import type { Metadata } from "next";

export const siteUrl = "https://vo2wellness.in";
export const siteName = "VO2 Wellness";
// Last content change for pages without their own date (sitemap lastModified).
export const siteUpdated = "2026-10-28";

export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

type PageMetaInput = {
  title?: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  // Advertise the journal feed on this page
  rss?: boolean;
  // URL of this route's own generated share image, if it has one
  image?: string;
};

// The site-wide share image (app/opengraph-image.tsx). A page that sets its own
// `openGraph` inherits no image at all, and an explicit image here also hides a
// route's own opengraph-image file, so routes with their own pass `image`.
const defaultImage = { url: "/opengraph-image", width: 1200, height: 630, alt: "VO2 · Aesthetic & Wellness Clinic in Bengaluru" };

// Per-page metadata with a canonical URL and complete Open Graph/Twitter tags.
// Child metadata replaces the parent's `openGraph`/`alternates` objects rather
// than merging them, so every page sets them in full through this helper.
export function pageMeta({ title, description, path, type = "website", publishedTime, rss, image }: PageMetaInput): Metadata {
  const shareImage = image ? { ...defaultImage, url: image, alt: title ?? defaultImage.alt } : defaultImage;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: path,
      ...(rss ? { types: { "application/rss+xml": [{ url: "/feed.xml", title: "VO2 Journal" }] } } : {}),
    },
    openGraph: {
      type,
      url: path,
      siteName,
      locale: "en_IN",
      description,
      images: [shareImage],
      ...(title ? { title: `${title} · VO2 Bengaluru` } : {}),
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      description,
      images: [shareImage.url],
      ...(title ? { title: `${title} · VO2 Bengaluru` } : {}),
    },
  };
}

type Crumb = { name: string; path: string };

export const breadcrumbLd = (crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.path),
  })),
});
