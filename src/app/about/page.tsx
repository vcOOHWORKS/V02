import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Booking } from "@/components/sections/Booking";
import { Experts } from "@/components/sections/Experts";
import { JsonLd } from "@/components/ui/JsonLd";
import { Motif } from "@/components/ui/Motif";
import { Reveal } from "@/components/ui/Reveal";
import { about, manifesto } from "@/content/site";
import { absoluteUrl, breadcrumbLd, pageMeta, siteUrl } from "@/lib/seo";
import styles from "@/components/company/company.module.css";

export const metadata: Metadata = pageMeta({
  title: "About us",
  description:
    "VO2 is a women-first, doctor-led aesthetic and wellness clinic in Bengaluru. Meet the team and the standards behind every treatment.",
  path: "/about",
});

export default function AboutPage() {
  const { hero, glance, standards } = about;
  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About us", path: "/about" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About VO2",
            url: absoluteUrl("/about"),
            about: { "@id": `${siteUrl}/#clinic` },
          },
        ]}
      />

      <section className={styles.hero}>
        <Motif name="lotus" stroke="rgba(151,48,46,.11)" className={styles.heroArt} />
        <div className={`wrap ${styles.heroInner}`}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">About us</span>
          </nav>
          <h1 className={styles.title}>
            {hero.heading[0]} <em>{hero.heading[1]}</em>
          </h1>
          <p className={styles.lead}>{hero.lead}</p>
        </div>
      </section>

      {/* At a glance */}
      <section className="band">
        <div className="wrap">
          <dl className={styles.glance}>
            {glance.map((g) => (
              <div key={g.label}>
                <dt>{g.label}</dt>
                <dd>{g.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Principles */}
      <section>
        <div className={`wrap ${styles.section}`}>
          <Reveal className="section-head">
            <div>
              <h2 className="display">
                Three things we <em>never compromise.</em>
              </h2>
            </div>
            <p>Everything at VO2 follows from these, from the first phone call to the last follow-up.</p>
          </Reveal>
          <Reveal stagger className={styles.principles}>
            {manifesto.promises.map((p) => (
              <div key={p.title} className={styles.principle}>
                <span className={styles.rosette} aria-hidden="true" />
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Standards */}
      <section className="band">
        <div className={`wrap ${styles.section}`}>
          <Reveal className="section-head">
            <div>
              <h2 className="display">
                {standards.title[0]} <em>{standards.title[1]}</em>
              </h2>
            </div>
            <p>{standards.intro}</p>
          </Reveal>
          <Reveal>
            <ul className={styles.standards}>
              {standards.items.map((s) => (
                <li key={s.title} className={styles.standard}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Experts />

      {/* Onward */}
      <section className="band">
        <div className={`wrap ${styles.section} ${styles.onward}`}>
          <Link href="/our-story" className={styles.onwardCard}>
            <Motif name="hoysala" stroke="rgba(151,48,46,.5)" className={styles.onwardArt} />
            <span className={styles.onwardLabel}>Our brand story</span>
            <span className={styles.onwardTitle}>
              Ancient roots, <em>modern care.</em>
            </span>
          </Link>
          <Link href="/founder" className={styles.onwardCard}>
            <Motif name="rosette" stroke="rgba(151,48,46,.5)" className={styles.onwardArt} />
            <span className={styles.onwardLabel}>Our founder</span>
            <span className={styles.onwardTitle}>
              Why VO2 <em>exists.</em>
            </span>
          </Link>
          <Link href="/branches" className={styles.onwardCard}>
            <Motif name="padma" stroke="rgba(151,48,46,.5)" className={styles.onwardArt} />
            <span className={styles.onwardLabel}>Branches</span>
            <span className={styles.onwardTitle}>
              Visit us in <em>Bengaluru.</em>
            </span>
          </Link>
        </div>
      </section>

      <Booking />
    </SiteShell>
  );
}
