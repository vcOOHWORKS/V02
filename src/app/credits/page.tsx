import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { photos, unsplashSrc, withReferral } from "@/content/images";
import { articles } from "@/content/journal";
import { branches } from "@/content/site";
import { categories } from "@/content/treatments";
import { pageMeta } from "@/lib/seo";
import styles from "@/components/company/company.module.css";
import c from "./credits.module.css";

export const metadata: Metadata = pageMeta({
  title: "Photo credits",
  description: "The photographers whose work appears on the VO2 website.",
  path: "/credits",
});

// Where each photo slot appears on the site
function usedOn(slot: string) {
  if (slot === "hero") return { label: "Home page", href: "/" };
  if (slot === "salon") return { label: "Salon & nails", href: "/salon-nails" };
  if (slot.startsWith("salon-")) return { label: `Salon & nails · ${slot === "salon-hair" ? "Hair" : "Nails"}`, href: "/salon-nails" };
  if (slot.startsWith("branch-")) {
    const b = branches.find((x) => `branch-${x.slug}` === slot);
    return { label: b ? b.name : "Branches", href: "/branches" };
  }
  const t = categories.find((x) => x.slug === slot);
  if (t) return { label: t.title, href: `/treatments/${t.slug}` };
  const a = articles.find((x) => x.slug === slot);
  if (a) return { label: `Journal · ${a.title}`, href: `/journal/${a.slug}` };
  return { label: slot, href: "/" };
}

export default function CreditsPage() {
  const entries = Object.entries(photos).flatMap(([slot, p]) => (p && p.kind === "unsplash" ? [{ slot, p, where: usedOn(slot) }] : []));
  return (
    <SiteShell>
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroInner}`}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Photo credits</span>
          </nav>
          <h1 className={styles.title}>
            Photo <em>credits.</em>
          </h1>
          <p className={styles.lead}>
            Thank you to the photographers whose work appears on this website, shared through{" "}
            <a href={withReferral("https://unsplash.com/")} target="_blank" rel="noopener noreferrer" className="prose-link">
              Unsplash
            </a>
            . The people pictured are not VO2 clients, and no photo shows the result of a treatment.
          </p>
        </div>
      </section>

      <section className="band">
        <div className={`wrap ${styles.section}`}>
          <ul className={c.list}>
            {entries.map(({ slot, p, where }) => (
              <li key={slot} className={c.item}>
                {/* eslint-disable-next-line @next/next/no-img-element -- hotlinked from Unsplash, as their guidelines require */}
                <img src={unsplashSrc(p.raw, 240)} alt="" width={120} height={120} loading="lazy" className={c.thumb} style={{ backgroundColor: p.color }} />
                <div className={c.text}>
                  <Link href={where.href} className={c.where}>
                    {where.label}
                  </Link>
                  <p className={c.by}>
                    Photo by{" "}
                    <a href={withReferral(p.credit.profile)} target="_blank" rel="noopener noreferrer">
                      {p.credit.name}
                    </a>{" "}
                    on{" "}
                    <a href={withReferral(p.credit.page)} target="_blank" rel="noopener noreferrer">
                      Unsplash
                    </a>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
