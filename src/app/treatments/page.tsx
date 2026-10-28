import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Booking } from "@/components/sections/Booking";
import { Motif } from "@/components/ui/Motif";
import { Reveal } from "@/components/ui/Reveal";
import { TreatmentCard } from "@/components/ui/TreatmentCard";
import { groupedCategories } from "@/content/treatments";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import styles from "@/components/treatment/treatment.module.css";

export const metadata: Metadata = pageMeta({
  title: "Treatments",
  description:
    "Skin & aesthetics, Ayurveda & recovery, movement (physiotherapy, Pilates, Zumba, Yoga Academy) and dental care at VO2, Bengaluru.",
  path: "/treatments",
});

export default function TreatmentsIndex() {
  return (
    <SiteShell current="treatments">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/treatments" },
        ])}
      />
      <section className={styles.indexHero}>
        <Motif name="lotus" stroke="rgba(151,48,46,.1)" className={styles.indexLotus} />
        <div className={`wrap ${styles.indexHeroInner}`}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Treatments</span>
          </nav>
          <h1 className={styles.indexTitle}>
            Every treatment, <em>one intention.</em>
          </h1>
          <p className={styles.indexLead}>
            Four ways of caring for yourself, under one roof: skin and aesthetics, Ayurveda and recovery, movement, and
            dental care. If you are not sure where to start, begin with a consultation and we will guide you.
          </p>
          {/* Jump links to each group */}
          <nav className={styles.groupJump} aria-label="Treatment groups">
            {groupedCategories.map((g) => (
              <a key={g.slug} href={`#${g.slug}`}>
                {g.title}
                <span>{g.items.length}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {groupedCategories.map((g, i) => (
        <section key={g.slug} id={g.slug} className={`${i % 2 ? "" : "band"} ${styles.groupSection}`}>
          <div className={`wrap ${styles.groupLayout}`}>
            <Reveal className={styles.groupIntro}>
              <span className={styles.groupNumber}>{String(i + 1).padStart(2, "0")}</span>
              <h2 className="display">
                {g.heading[0]} <em>{g.heading[1]}</em>
              </h2>
              <p>{g.blurb}</p>
              <a href="#book" className={styles.allLink}>
                {g.cta}
              </a>
            </Reveal>
            <Reveal stagger className={`swipe-sm ${styles.groupCards}`}>
              {g.items.map((c) => (
                <TreatmentCard key={c.slug} category={c} />
              ))}
            </Reveal>
          </div>
        </section>
      ))}

      <Booking />
    </SiteShell>
  );
}
