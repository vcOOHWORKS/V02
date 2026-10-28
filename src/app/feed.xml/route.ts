import { articles } from "@/content/journal";
import { absoluteUrl, siteName } from "@/lib/seo";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

// RFC 822 dates, as RSS requires. Built from the article dates (never the
// current time) so the feed stays deterministic and is prerendered at build.
const rfc822 = (iso: string) => new Date(`${iso}T09:00:00+05:30`).toUTCString();

// RSS 2.0 feed of journal articles, newest first.
export function GET() {
  const sorted = [...articles].sort((a, b) => b.published.localeCompare(a.published));
  const items = sorted
    .map((a) => {
      const url = absoluteUrl(`/journal/${a.slug}`);
      return `    <item>
      <title>${escape(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(a.published)}</pubDate>
      <dc:creator>${escape(a.author.name)}</dc:creator>
      <category>${escape(a.category)}</category>
      <description>${escape(a.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escape(`${siteName} Journal`)}</title>
    <link>${absoluteUrl("/journal")}</link>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />
    <description>Doctor-written guides on skin, hair, hormones and weddings from VO2, Bengaluru.</description>
    <language>en-in</language>
    <lastBuildDate>${rfc822(sorted[0].published)}</lastBuildDate>
    <image>
      <url>${absoluteUrl("/icon.jpg")}</url>
      <title>${escape(`${siteName} Journal`)}</title>
      <link>${absoluteUrl("/journal")}</link>
    </image>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
