import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { Booking } from "@/components/sections/Booking";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { Photo } from "@/components/ui/Photo";
import { Prose } from "@/components/ui/Prose";
import { articles, formatDate, getArticle, readingMinutes } from "@/content/journal";
import { getCategory, treatmentHref } from "@/content/treatments";
import { absoluteUrl, breadcrumbLd, pageMeta, siteName } from "@/lib/seo";
import styles from "@/components/journal/journal.module.css";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMeta({
    title: article.title,
    description: article.excerpt,
    path: `/journal/${article.slug}`,
    type: "article",
    publishedTime: article.published,
    rss: true,
    image: `/journal/${article.slug}/opengraph-image`,
  });
}

export default async function ArticlePage(props: PageProps<"/journal/[slug]">) {
  const { slug } = await props.params;
  const article = getArticle(slug);
  // Unknown slugs normally get a real 404 from the Proxy before reaching here.
  if (!article) notFound();

  const path = `/journal/${article.slug}`;
  const treatments = article.treatments.map(getCategory).filter((c) => c !== undefined);
  const more = articles.filter((a) => a.slug !== article.slug);

  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/journal" },
            { name: article.title, path },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.published,
            dateModified: article.published,
            articleSection: article.category,
            mainEntityOfPage: absoluteUrl(path),
            author: { "@type": "Person", name: article.author.name, jobTitle: article.author.role },
            publisher: {
              "@type": "Organization",
              name: siteName,
              logo: { "@type": "ImageObject", url: absoluteUrl("/brand/vo2-logo.png") },
            },
          },
        ]}
      />

      <article>
        <header className={styles.hero}>
          <div className={`wrap ${styles.heroInner}`}>
            <nav aria-label="Breadcrumb" className={styles.crumbs}>
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/journal">Journal</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{article.category}</span>
            </nav>
            <h1 className={`enter ${styles.title}`}>{article.title}</h1>
            <p className={`enter ${styles.lead}`} style={{ "--enter-step": 1 } as React.CSSProperties}>
              {article.excerpt}
            </p>
            <p className={`enter ${styles.byline}`} style={{ "--enter-step": 2 } as React.CSSProperties}>
              <span>{article.author.name}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={article.published}>{formatDate(article.published)}</time>
              <span aria-hidden="true">·</span>
              <span>{readingMinutes(article)} min read</span>
            </p>
          </div>
          <div className="wrap">
            <div className={`enter ${styles.cover}`} style={{ "--enter-step": 3 } as React.CSSProperties} aria-hidden="true">
              <i />
              <Photo name={article.slug} sizes="(max-width: 1320px) 100vw, 1288px" eager />
            </div>
          </div>
        </header>

        <div className={`wrap ${styles.body}`}>
          <aside className={styles.aside}>
            <div className={styles.asideBlock}>
              <p className={styles.asideLabel}>Written by</p>
              <p className={styles.asideName}>{article.author.name}</p>
              <p className={styles.asideRole}>{article.author.role}</p>
            </div>
            {treatments.length > 0 && (
              <div className={styles.asideBlock}>
                <p className={styles.asideLabel}>Related treatments</p>
                <ul className={styles.asideLinks}>
                  {treatments.map((t) => (
                    <li key={t.slug}>
                      <Link href={treatmentHref(t.slug)}>{t.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

          <div className={styles.content}>
            <Prose sections={article.sections} />
            <p className={styles.disclaimer}>
              This article is general education, not medical advice. Please read our{" "}
              <Link href="/medical-disclaimer">medical disclaimer</Link>, and speak to a doctor about your own
              situation.
            </p>
          </div>
        </div>
      </article>

      <section className="band">
        <div className={`wrap ${styles.more}`}>
          <div className="section-head">
            <div>
              <h2 className="display">
                More from <em>the journal.</em>
              </h2>
            </div>
            <Link href="/journal" className={styles.allLink}>
              All articles
            </Link>
          </div>
          <div className={`swipe-md ${styles.moreGrid}`}>
            {more.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <Booking />
    </SiteShell>
  );
}
