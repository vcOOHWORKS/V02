import Link from "next/link";
import { ResultsGallery } from "@/components/results/ResultsGallery";
import { Booking } from "@/components/sections/Booking";
import { Motif } from "@/components/ui/Motif";
import { Photo, PhotoCredit, hasPhoto } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { TreatmentCard } from "@/components/ui/TreatmentCard";
import { defaultSteps, getCategory, type Category } from "@/content/treatments";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/seo";
import styles from "./treatment.module.css";

function Hero({ c }: { c: Category }) {
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/treatments">Treatments</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{c.title}</span>
          </nav>
          <h1 className={styles.title}>
            {c.heading[0]} <em>{c.heading[1]}</em>
          </h1>
          <p className={styles.tagline}>{c.tagline}</p>
          <p className={styles.intro}>{c.intro}</p>
          <div className={styles.actions}>
            <a className="btn btn-solid" href="#book">
              Book a consultation <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="#offer">
              See treatments
            </a>
          </div>
          <dl className={styles.facts}>
            <div>
              <dt>Treatments</dt>
              <dd>{c.items.length} options</dd>
            </div>
            <div>
              <dt>Led by</dt>
              <dd>{c.note.name}</dd>
            </div>
            <div>
              <dt>First visit</dt>
              <dd>40-min consultation</dd>
            </div>
          </dl>
        </div>

        <div className={styles.heroMedia}>
          <Motif name="lotus" stroke="rgba(151,48,46,.14)" className={styles.heroLotus} />
          <figure className={styles.arch} style={{ background: c.tone }}>
            <Photo name={c.slug} sizes="(max-width: 900px) 400px, 470px" eager />
            <span className={styles.archJaali} aria-hidden="true" />
            <PhotoCredit name={c.slug} />
            {!hasPhoto(c.slug) && (
              <figcaption className="brief">
                <b>Shoot brief</b>
                {c.brief}
              </figcaption>
            )}
          </figure>
        </div>
      </div>
    </section>
  );
}

function Concerns({ c }: { c: Category }) {
  return (
    <section className={`band ${styles.concerns}`} aria-labelledby="concerns-label">
      <div className={`wrap ${styles.concernsInner}`}>
        <h2 id="concerns-label" className={styles.concernsLabel}>
          Helps with
        </h2>
        <ul className={styles.concernList}>
          {c.concerns.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Offer({ c }: { c: Category }) {
  return (
    <section id="offer" className={styles.offer}>
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <h2 className="display">
              {c.items.length} treatments, <em>one plan.</em>
            </h2>
          </div>
          <p>
            Your doctor will recommend the right combination at your consultation. Durations and sessions are a guide;
            your plan will be your own.
          </p>
        </Reveal>

        <Reveal>
          <ul className={styles.items}>
            {c.items.map((item) => (
              <li key={item.name} className={styles.item}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <div className={styles.itemBody}>
                  <p>{item.description}</p>
                  <dl className={styles.meta}>
                    <div>
                      <dt>Duration</dt>
                      <dd>{item.duration}</dd>
                    </div>
                    <div>
                      <dt>Sessions</dt>
                      <dd>{item.sessions}</dd>
                    </div>
                    <div>
                      <dt>Downtime</dt>
                      <dd>{item.downtime}</dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Results({ c }: { c: Category }) {
  return (
    <section className={`band ${styles.results}`}>
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <h2 className="display">
              Results, <em>in real light.</em>
            </h2>
          </div>
          <div className={styles.resultsSide}>
            <p>Every case is a real VO2 client, shared with written consent, photographed in the same light and angle before and after. No filters.</p>
            <Link href="/results" className={styles.allLink}>
              All results
            </Link>
          </div>
        </Reveal>
        <ResultsGallery treatment={c.slug} />
      </div>
    </section>
  );
}

function Process({ c }: { c: Category }) {
  const steps = c.steps ?? defaultSteps;
  return (
    <section className={styles.process}>
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <h2 className="display">
              Four steps, <em>at your pace.</em>
            </h2>
          </div>
          <p>Nothing is rushed and nothing is sold on the first visit. You decide when, and whether, to begin.</p>
        </Reveal>
        <Reveal>
          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li key={s.title} className={styles.step}>
                <span className={styles.stepN} aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

function DoctorNote({ c }: { c: Category }) {
  return (
    <section className={`band ${styles.noteSection}`}>
      <div className="wrap">
        <Reveal>
          <figure className={styles.note}>
            <Motif name="hoysala" stroke="rgba(151,48,46,.1)" className={styles.noteStar} />
            <span className={styles.noteRosette} aria-hidden="true" />
            <blockquote className={styles.noteQuote}>{c.note.quote}</blockquote>
            <figcaption className={styles.noteCaption}>
              <span className={styles.noteName}>{c.note.name}</span>
              <span className={styles.noteRole}>{c.note.role}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function Faqs({ c }: { c: Category }) {
  return (
    <section className={styles.faqs}>
      <div className={`wrap ${styles.faqGrid}`}>
        <div>
          <h2 className={`display ${styles.faqTitle}`}>
            Questions, <em>answered.</em>
          </h2>
          <p className={styles.faqAside}>
            Anything else? Ask at your consultation, or <a href="#book">request a callback</a>.
          </p>
        </div>
        <Reveal>
          <div className={styles.faqList}>
            {c.faqs.map((f) => (
              <details key={f.q} className={styles.faq}>
                <summary>
                  <span>{f.q}</span>
                  <span className={styles.faqIcon} aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Related({ c }: { c: Category }) {
  const related = c.related.map(getCategory).filter((x): x is Category => Boolean(x));
  return (
    <section className={`band ${styles.related}`}>
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <h2 className="display">
              You may also <em>consider.</em>
            </h2>
          </div>
          <Link href="/treatments" className={styles.allLink}>
            All treatments
          </Link>
        </Reveal>
        <Reveal stagger className={`swipe-md ${styles.relatedGrid}`}>
          {related.map((r) => (
            <TreatmentCard key={r.slug} category={r} size="sm" />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

// FAQ structured data for search results
function FaqJsonLd({ c }: { c: Category }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function TreatmentDetail({ category }: { category: Category }) {
  return (
    <>
      <FaqJsonLd c={category} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/treatments" },
          { name: category.title, path: `/treatments/${category.slug}` },
        ])}
      />
      <Hero c={category} />
      <Concerns c={category} />
      <Offer c={category} />
      <Results c={category} />
      <Process c={category} />
      <DoctorNote c={category} />
      <Faqs c={category} />
      <Related c={category} />
      <Booking defaultConcern={category.title} />
    </>
  );
}
