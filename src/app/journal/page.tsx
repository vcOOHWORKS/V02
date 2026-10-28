import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { Motif } from "@/components/ui/Motif";
import { Reveal } from "@/components/ui/Reveal";
import { articles } from "@/content/journal";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import styles from "@/components/journal/journal.module.css";

export const metadata: Metadata = pageMeta({
  title: "Journal",
  description:
    "Doctor-written guides on skin, hair, hormones and weddings from VO2, Bengaluru. Read before you book.",
  path: "/journal",
  rss: true,
});

export default function JournalIndex() {
  return (
    <SiteShell>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal" },
        ])}
      />
      <section className={styles.indexHero}>
        <Motif name="lotus" stroke="rgba(151,48,46,.09)" className={styles.lotus} />
        <div className={`wrap ${styles.indexHeroInner}`}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Journal</span>
          </nav>
          <h1 className={`enter ${styles.indexTitle}`}>
            Read before <em>you book.</em>
          </h1>
          <p className={`enter ${styles.indexLead}`} style={{ "--enter-step": 1 } as React.CSSProperties}>
            Clear, doctor-written guides on skin, hair, hormones and the big days in between. No miracle claims, just
            what we would tell a friend.
          </p>
          <a href="/feed.xml" className={styles.rss}>
            Subscribe by RSS
          </a>
        </div>
      </section>

      <section className="band">
        <div className={`wrap ${styles.indexGridWrap}`}>
          <Reveal stagger className={`swipe-md ${styles.grid}`}>
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
