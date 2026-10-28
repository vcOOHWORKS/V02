import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { ResultsGallery } from "@/components/results/ResultsGallery";
import { Booking } from "@/components/sections/Booking";
import { JsonLd } from "@/components/ui/JsonLd";
import { Motif } from "@/components/ui/Motif";
import { Reveal } from "@/components/ui/Reveal";
import { demoMode } from "@/content/results";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import styles from "@/components/company/company.module.css";

export const metadata: Metadata = pageMeta({
  title: "Results gallery",
  description:
    "Before and after results from real VO2 clients in Bengaluru, shared with written consent. Same light, same angle, no filters.",
  path: "/results",
});

const commitments = [
  { title: "Written consent", body: "Every case is shared only with the client's written permission, and she can withdraw it at any time." },
  { title: "Same light, same angle", body: "Before and after are taken in the same room, light, lens and pose, so the comparison is honest." },
  { title: "No filters", body: "No retouching, smoothing or filters. What you see is what changed, and results vary from person to person." },
];

export default function ResultsPage() {
  return (
    <SiteShell>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Results gallery", path: "/results" },
        ])}
      />

      <section className={styles.hero}>
        <Motif name="lotus" stroke="rgba(151,48,46,.11)" className={styles.heroArt} />
        <div className={`wrap ${styles.heroInner}`}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Results gallery</span>
          </nav>
          <h1 className={styles.title}>
            Real results, <em>real women.</em>
          </h1>
          <p className={styles.lead}>
            Results that still look like you, from real VO2 clients who chose to share them. Browse by treatment, and
            open any case to compare before and after.
          </p>
        </div>
      </section>

      <section className="band">
        <div className={`wrap ${styles.section}`} id="gallery">
          {demoMode && (
            <p className={styles.demoNote}>
              Demo preview: the photos below are stock images showing how the gallery will look. They are not VO2 patient
              results and will be replaced by real, consented cases.
            </p>
          )}
          <ResultsGallery filters />
        </div>
      </section>

      <section>
        <div className={`wrap ${styles.section}`}>
          <Reveal className="section-head">
            <div>
              <h2 className="display">
                How we share <em>results.</em>
              </h2>
            </div>
            <p>A before and after is only useful if it is honest. These are the rules every image in this gallery follows.</p>
          </Reveal>
          <Reveal stagger className={styles.principles}>
            {commitments.map((c) => (
              <div key={c.title} className={styles.principle}>
                <span className={styles.rosette} aria-hidden="true" />
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Booking />
    </SiteShell>
  );
}
