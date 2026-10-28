import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Booking } from "@/components/sections/Booking";
import { Motif } from "@/components/ui/Motif";
import { Reveal } from "@/components/ui/Reveal";
import { TreatmentCard } from "@/components/ui/TreatmentCard";
import { categories } from "@/content/treatments";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import styles from "@/components/treatment/treatment.module.css";

export const metadata: Metadata = pageMeta({
  title: "Treatments",
  description:
    "Skin, medi facials, laser, hair, non-surgical aesthetics, permanent makeup, body and advanced treatments at VO2, Bengaluru. Doctor-led, planned around Indian skin.",
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
            Eight areas of care, each led by a doctor and planned around Indian skin. If you are not sure where to start,
            begin with a consultation and we will guide you.
          </p>
          <div className={styles.kolam} aria-hidden="true" />
        </div>
      </section>

      <section className="band">
        <div className={`wrap ${styles.indexGridWrap}`}>
          <Reveal stagger className={`swipe-sm ${styles.indexGrid}`}>
            {categories.map((c) => (
              <TreatmentCard key={c.slug} category={c} />
            ))}
          </Reveal>
        </div>
      </section>

      <Booking />
    </SiteShell>
  );
}
