import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Booking } from "@/components/sections/Booking";
import { JsonLd } from "@/components/ui/JsonLd";
import { Motif } from "@/components/ui/Motif";
import { Photo, PhotoCredit, hasPhoto } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { TreatmentCard } from "@/components/ui/TreatmentCard";
import { salon } from "@/content/salon";
import { getCategory, type Category } from "@/content/treatments";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import t from "@/components/treatment/treatment.module.css";
import styles from "@/components/salon/salon.module.css";

export const metadata: Metadata = pageMeta({
  title: "Salon & nails",
  description:
    "Hair styling, colour, hair spa, bridal grooming, manicures, pedicures, nail extensions and nail art at VO2, Bengaluru. Premium products, strict hygiene, calm rooms.",
  path: "/salon-nails",
});

const pairings = ["medi-facials", "hair", "permanent-makeup"].map(getCategory).filter((c): c is Category => Boolean(c));
const serviceCount = salon.groups.reduce((n, g) => n + g.services.length, 0);

export default function SalonPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Salon & nails", path: "/salon-nails" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: salon.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ]}
      />

      {/* Hero */}
      <section className={t.hero}>
        <div className={`wrap ${t.heroGrid}`}>
          <div className={t.heroCopy}>
            <nav aria-label="Breadcrumb" className={t.crumbs}>
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{salon.title}</span>
            </nav>
            <h1 className={t.title}>
              {salon.heading[0]} <em>{salon.heading[1]}</em>
            </h1>
            <p className={t.tagline}>{salon.audience}</p>
            <p className={t.intro}>{salon.lead}</p>
            <div className={t.actions}>
              <a className="btn btn-solid" href="#book">
                Book an appointment <span className="arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="#hair">
                See services
              </a>
            </div>
            <dl className={t.facts}>
              <div>
                <dt>Services</dt>
                <dd>{serviceCount} to choose from</dd>
              </div>
              <div>
                <dt>For</dt>
                <dd>Women and men</dd>
              </div>
              <div>
                <dt>Booking</dt>
                <dd>Recommended</dd>
              </div>
            </dl>
          </div>
          <div className={t.heroMedia}>
            <Motif name="lotus" stroke="rgba(151,48,46,.14)" className={t.heroLotus} />
            <figure className={t.arch} style={{ background: salon.groups[0].tone }}>
              <Photo name="salon" sizes="(max-width: 900px) 400px, 470px" eager />
              <span className={t.archJaali} aria-hidden="true" />
              <PhotoCredit name="salon" />
              {!hasPhoto("salon") && (
                <figcaption className="brief">
                  <b>Shoot brief</b>
                  {salon.groups[0].brief}
                </figcaption>
              )}
            </figure>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="band">
        <div className="wrap">
          <Reveal stagger className={styles.promises}>
            {salon.promises.map((p) => (
              <div key={p.title} className={styles.promise}>
                <span className={styles.rosette} aria-hidden="true" />
                <h2>{p.title}</h2>
                <p>{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Hair, then nails, image side alternating */}
      {salon.groups.map((g, i) => (
        <section key={g.slug} id={g.slug} className={`${i % 2 ? "band" : ""} ${styles.group}`}>
          <div className={`wrap ${styles.groupGrid} ${i % 2 ? styles.flip : ""}`}>
            <Reveal className={styles.groupMedia}>
              <figure className={styles.groupArch} style={{ background: g.tone }}>
                <Photo name={`salon-${g.slug}`} sizes="(max-width: 900px) 90vw, 440px" />
                <PhotoCredit name={`salon-${g.slug}`} />
                {!hasPhoto(`salon-${g.slug}`) && (
                  <>
                    <Motif name="lotus" stroke="rgba(252,250,248,.5)" className={styles.groupArt} />
                    <figcaption className="brief">
                      <b>Shoot brief</b>
                      {g.brief}
                    </figcaption>
                  </>
                )}
              </figure>
            </Reveal>
            <div className={styles.groupBody}>
              <Reveal>
                <p className={styles.groupLabel}>{g.title}</p>
                <h2 className="display">
                  {g.heading[0]} <em>{g.heading[1]}</em>
                </h2>
                <p className={styles.groupIntro}>{g.intro}</p>
              </Reveal>
              <Reveal>
                <ul className={styles.services}>
                  {g.services.map((s) => (
                    <li key={s.name} className={styles.service}>
                      <h3>{s.name}</h3>
                      <p>{s.description}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* FAQs */}
      <section className={t.faqs}>
        <div className={`wrap ${t.faqGrid}`}>
          <div>
            <h2 className={`display ${t.faqTitle}`}>
              Questions, <em>answered.</em>
            </h2>
            <p className={t.faqAside}>
              Anything else? Ask when you book, or <a href="#book">request a callback</a>.
            </p>
          </div>
          <Reveal>
            <div className={t.faqList}>
              {salon.faqs.map((f) => (
                <details key={f.q} className={t.faq}>
                  <summary>
                    <span>{f.q}</span>
                    <span className={t.faqIcon} aria-hidden="true" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cross-links to treatments */}
      <section className={`band ${t.related}`}>
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <h2 className="display">
                Pair it with <em>a treatment.</em>
              </h2>
            </div>
            <Link href="/treatments" className={t.allLink}>
              All treatments
            </Link>
          </Reveal>
          <Reveal stagger className={`swipe-md ${t.relatedGrid}`}>
            {pairings.map((c) => (
              <TreatmentCard key={c.slug} category={c} size="sm" />
            ))}
          </Reveal>
        </div>
      </section>

      <Booking defaultConcern="Salon & nails" />
    </SiteShell>
  );
}
