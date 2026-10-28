import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Booking } from "@/components/sections/Booking";
import { LotusGrowth } from "@/components/story/LotusGrowth";
import { JsonLd } from "@/components/ui/JsonLd";
import { Motif } from "@/components/ui/Motif";
import { Reveal } from "@/components/ui/Reveal";
import { ritual } from "@/content/site";
import { story } from "@/content/story";
import type { MotifName } from "@/lib/motifs";
import { absoluteUrl, breadcrumbLd, pageMeta, siteUrl } from "@/lib/seo";
import mark from "../../../public/brand/vo2-mark.jpg";
import styles from "@/components/story/story.module.css";

export const metadata: Metadata = pageMeta({
  title: "Our brand story",
  description:
    "Ancient roots, modern care. How India's wisdom of rhythm, balance and rest shapes VO2, how modern science proves it, and how it blooms into everyday wellness.",
  path: "/our-story",
});

// Tiling motifs show as a pattern swatch; centred motifs as a single drawing.
const tiled: Partial<Record<MotifName, string>> = {
  padma: "var(--motif-padma-brick) center / 120px 120px repeat",
  kolam: "var(--motif-kolam-brick) center / 96px 48px repeat",
  ambi: "var(--motif-ambi-brick) center / 112px 44px repeat",
};

function MotifSwatch({ name }: { name: MotifName }) {
  const bg = tiled[name];
  return (
    <div className={styles.swatch} aria-hidden="true">
      {bg ? (
        <span className={styles.swatchTile} style={{ background: bg }} />
      ) : (
        <Motif name={name} stroke="rgba(151,48,46,.7)" className={styles.swatchMotif} />
      )}
    </div>
  );
}

function ChapterHead({ numeral, stage, title, intro }: { numeral: string; stage: string; title: string[]; intro: string }) {
  return (
    <Reveal className={styles.chapterHead}>
      <span className={styles.stageBadge}>
        {numeral} · {stage}
      </span>
      <h2 className={`display ${styles.chapterTitle}`}>
        {title[0]} <em>{title[1]}</em>
      </h2>
      <p className={styles.chapterIntro}>{intro}</p>
    </Reveal>
  );
}

export default function OurStoryPage() {
  const { hero, prologue, roots, rise, bloom, epilogue, promises, closing } = story;

  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Our brand story", path: "/our-story" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Our brand story",
            url: absoluteUrl("/our-story"),
            about: { "@id": `${siteUrl}/#clinic` },
          },
        ]}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <Motif name="lotus" stroke="rgba(151,48,46,.13)" className={styles.heroLotus} />
        <div className={`wrap ${styles.heroInner}`}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Our brand story</span>
          </nav>
          <h1 className={styles.heroTitle}>
            {hero.heading[0]} <em>{hero.heading[1]}</em>
          </h1>
          <p className={styles.heroLead}>{hero.lead}</p>
          <ol className={styles.arcList}>
            {hero.stages.map((s) => (
              <li key={s.stage}>
                <a href={`#${s.stage}`}>
                  <span className={styles.arcNumeral}>{s.numeral}</span>
                  <span className={styles.arcName}>{s.name}</span>
                  <span className={styles.arcThread}>{s.thread}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Prologue: the name and the mark */}
      <section className="band">
        <div className={`wrap ${styles.nameGrid}`}>
          <Reveal className={styles.nameArt}>
            <p className={styles.bigName} aria-hidden="true">
              VO<sub>2</sub>
            </p>
            <p className={styles.bigNameCaption}>Oxygen · breath · vitality</p>
          </Reveal>
          <Reveal className={styles.nameCopy}>
            <h2 className={`display ${styles.chapterTitle}`}>
              {prologue.title[0]} <em>{prologue.title[1]}</em>
            </h2>
            {prologue.paragraphs.map((p) => (
              <p key={p} className={styles.body}>
                {p}
              </p>
            ))}
            <div className={styles.markCard}>
              <Image src={mark} alt="The VO2 mark: a lotus opening around a woman in profile" className={styles.markImg} sizes="88px" />
              <div>
                <h3>{prologue.mark.title}</h3>
                <p>{prologue.mark.body}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The arc: three chapters beside a lotus that grows with them */}
      <div className={`wrap ${styles.arc}`}>
        <LotusGrowth stages={hero.stages} />

        <div className={styles.chapters}>
          {/* I · Roots */}
          <section id="roots" data-stage="roots" className={styles.chapter}>
            <ChapterHead numeral={roots.numeral} stage={roots.stageName} title={roots.title} intro={roots.intro} />

            <Reveal>
              <ul className={styles.principles}>
                {roots.principles.map((p) => (
                  <li key={p.term} className={styles.principle}>
                    <p className={styles.term} lang="sa-Latn">
                      {p.term}
                    </p>
                    <p className={styles.termMeaning}>{p.meaning}</p>
                    <dl className={styles.thenNow}>
                      <div>
                        <dt>Then</dt>
                        <dd>{p.then}</dd>
                      </div>
                      <div>
                        <dt>Now</dt>
                        <dd>{p.now}</dd>
                      </div>
                    </dl>
                    <p className={styles.atVo2}>
                      <span>At VO2</span>
                      {p.atVo2}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className={styles.patternsHead}>
              <h3 className={styles.patternsTitle}>
                {roots.patterns.title[0]} <em>{roots.patterns.title[1]}</em>
              </h3>
              <p>{roots.patterns.intro}</p>
            </div>
            <Reveal>
              <ul className={styles.motifs}>
                {roots.patterns.items.map((m) => (
                  <li key={m.name} className={styles.motifRow}>
                    <MotifSwatch name={m.motif} />
                    <div className={styles.motifText}>
                      <h4>{m.name}</h4>
                      <p className={styles.motifOrigin}>{m.origin}</p>
                      <p className={styles.motifHistory}>{m.history}</p>
                      <p className={styles.motifMeaning}>{m.meaning}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          {/* II · Rise */}
          <section id="rise" data-stage="rise" className={styles.chapter}>
            <ChapterHead numeral={rise.numeral} stage={rise.stageName} title={rise.title} intro={rise.intro} />
            <Reveal>
              <ul className={styles.pillars}>
                {rise.pillars.map((p) => (
                  <li key={p.title} className={styles.pillar}>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <p className={styles.bridge}>
              {rise.bridge[0]} <em>{rise.bridge[1]}</em>
            </p>
          </section>

          {/* III · Bloom */}
          <section id="bloom" data-stage="bloom" className={styles.chapter}>
            <ChapterHead numeral={bloom.numeral} stage={bloom.stageName} title={bloom.title} intro={bloom.intro} />
            <Reveal>
              <div className={styles.bloomGrid}>
                <div>
                  <h3 className={styles.blockTitle}>{bloom.whole.title}</h3>
                  <ul className={styles.wholeList}>
                    {bloom.whole.items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className={styles.blockTitle}>{bloom.realities.title}</h3>
                  <p className={styles.realitiesIntro}>{bloom.realities.intro}</p>
                  <ul className={styles.realities}>
                    {bloom.realities.items.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
            <p className={styles.bloomClose}>{bloom.close}</p>
          </section>
        </div>
      </div>

      {/* Epilogue: the experience */}
      <section className={`band ${styles.experience}`}>
        <div className={`wrap ${styles.section}`}>
          <Reveal className="section-head">
            <div>
              <h2 className="display">
                {epilogue.title[0]} <em>{epilogue.title[1]}</em>
              </h2>
            </div>
            <p>{epilogue.intro}</p>
          </Reveal>
          <Reveal>
            <ol className={styles.steps}>
              {ritual.steps.map((s, i) => (
                <li key={s.title} className={styles.step}>
                  <span className={styles.stepN} aria-hidden="true">
                    {i + 1}
                  </span>
                  <p className={styles.stepStage}>{epilogue.stageOf[i]}</p>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Promise */}
      <section>
        <div className={`wrap ${styles.section}`}>
          <Reveal>
            <div className={styles.promises}>
              <div>
                <h2 className={styles.promiseTitle}>
                  We will <em>always</em>
                </h2>
                <ul className={styles.always}>
                  {promises.always.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className={styles.promiseTitle}>
                  We will <em>never</em>
                </h2>
                <ul className={styles.never}>
                  {promises.never.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className={`band ${styles.closing}`}>
        <Motif name="hoysala" stroke="rgba(151,48,46,.1)" className={styles.closingStar} />
        <div className={`wrap ${styles.closingInner}`}>
          <span className={styles.closingRosette} aria-hidden="true" />
          <blockquote className={styles.closingQuote}>{closing.quote}</blockquote>
          <div className={styles.closingActions}>
            <a className="btn btn-solid" href="#book">
              Book a consultation <span className="arrow">→</span>
            </a>
            <Link className="btn btn-ghost" href="/treatments">
              Explore treatments
            </Link>
          </div>
        </div>
      </section>

      <Booking />
    </SiteShell>
  );
}
