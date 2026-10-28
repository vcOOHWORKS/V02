import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";
import { Motif } from "@/components/ui/Motif";
import { Prose } from "@/components/ui/Prose";
import { formatDate } from "@/content/journal";
import { legalDocs, type LegalDoc } from "@/content/legal";
import { breadcrumbLd } from "@/lib/seo";
import styles from "./legal.module.css";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  const others = legalDocs.filter((d) => d.slug !== doc.slug);
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: doc.title, path: `/${doc.slug}` },
        ])}
      />

      <section className={styles.hero}>
        <Motif name="lotus" stroke="rgba(151,48,46,.09)" className={styles.lotus} />
        <div className={`wrap ${styles.heroInner}`}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{doc.title}</span>
          </nav>
          <h1 className={`enter ${styles.title}`}>
            {doc.heading[0]} <em>{doc.heading[1]}</em>
          </h1>
          <p className={`enter ${styles.summary}`} style={{ "--enter-step": 1 } as React.CSSProperties}>
            {doc.summary}
          </p>
          <p className={`enter ${styles.updated}`} style={{ "--enter-step": 2 } as React.CSSProperties}>
            Last updated <time dateTime={doc.updated}>{formatDate(doc.updated)}</time>
          </p>
        </div>
      </section>

      <section className="band">
        <div className={`wrap ${styles.body}`}>
          <aside className={styles.toc} aria-label="On this page">
            <p className={styles.tocLabel}>On this page</p>
            <ol>
              {doc.sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className={styles.content}>
            <Prose sections={doc.sections} numbered />

            <nav className={styles.others} aria-label="Other policies">
              {others.map((d) => (
                <Link key={d.slug} href={`/${d.slug}`} className={styles.other}>
                  <span className={styles.otherLabel}>Also read</span>
                  <span className={styles.otherTitle}>{d.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
