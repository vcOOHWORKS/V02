import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Booking } from "@/components/sections/Booking";
import { JsonLd } from "@/components/ui/JsonLd";
import { Motif } from "@/components/ui/Motif";
import { Photo, hasPhoto } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollLitText } from "@/components/ui/ScrollLitText";
import { founder } from "@/content/founder";
import { absoluteUrl, breadcrumbLd, pageMeta, siteUrl } from "@/lib/seo";
import styles from "@/components/founder/founder.module.css";

export const metadata: Metadata = pageMeta({
  title: "Our founder",
  description:
    "Why VO2 exists, in the founder's own words: a women-first, doctor-led clinic in Bengaluru where expert care and gentle care finally sit in the same room.",
  path: "/founder",
});

const [firstParagraph, ...letter] = founder.letter;

export default function FounderPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About us", path: "/about" },
            { name: "Our founder", path: "/founder" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            url: absoluteUrl("/founder"),
            mainEntity: {
              "@type": "Person",
              name: founder.name,
              jobTitle: founder.role,
              worksFor: { "@id": `${siteUrl}/#clinic` },
            },
          },
        ]}
      />

      {/* Hero: the name beside a framed arch portrait */}
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav aria-label="Breadcrumb" className={styles.crumbs}>
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/about">About us</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Our founder</span>
            </nav>
            <h1 className={styles.name}>
              {founder.name.split(" ").map((part, i) => (
                <span key={part} className="enter" style={{ "--enter-step": i } as React.CSSProperties}>
                  {i ? <em>{part}</em> : part}
                </span>
              ))}
            </h1>
            <p className={styles.role}>
              {founder.role}
              {founder.placeholder && <span className={styles.flag}>Placeholder profile</span>}
            </p>
            <blockquote className={styles.heroQuote}>
              <p>&ldquo;{founder.hero.quote}&rdquo;</p>
            </blockquote>
            <a href="#letter" className={styles.down}>
              Read the letter
            </a>
          </div>

          <div className={styles.heroMedia}>
            <Motif name="lotus" stroke="rgba(151,48,46,.13)" className={styles.heroLotus} />
            <span className={styles.archEcho} aria-hidden="true" />
            <figure className={styles.portrait}>
              <Photo name={founder.photo} sizes="(max-width: 900px) 80vw, 460px" eager />
              {hasPhoto(founder.photo) && founder.placeholder && <span className={styles.demo}>Demo portrait</span>}
            </figure>
          </div>
        </div>
      </section>

      {/* Opening line, lit word by word */}
      <section className="band">
        <div className={`wrap ${styles.opening}`}>
          <ScrollLitText
            segments={founder.opening}
            className={styles.big}
            wordClassName={styles.word}
            litClassName={styles.lit}
            emClassName={styles.em}
          />
          <div className={styles.kolam} aria-hidden="true" />
        </div>
      </section>

      {/* The letter */}
      <section id="letter" className={styles.letterSection}>
        <div className={`wrap ${styles.letterGrid}`}>
          <aside className={styles.letterAside} aria-hidden="true">
            <Motif name="padma" stroke="rgba(151,48,46,.35)" className={styles.letterSeal} />
          </aside>
          <Reveal className={styles.letter}>
            <p className={styles.first}>{firstParagraph}</p>
            {letter.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <div className={styles.signature}>
              <span>{founder.signoff}</span>
              <span className={styles.signName}>{founder.name}</span>
              <span className={styles.signRole}>{founder.role}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Chapters: a thread of moments */}
      <section className="band">
        <div className={`wrap ${styles.section}`}>
          <Reveal className="section-head">
            <div>
              <h2 className="display">
                The moments that <em>made VO2.</em>
              </h2>
            </div>
            <p>Every clinic starts with a reason. These are ours, from the first frustration to the first calm room.</p>
          </Reveal>
          <Reveal stagger className={styles.thread}>
            {founder.chapters.map((c, i) => (
              <div key={c.title} className={styles.chapter}>
                <span className={styles.node} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Beliefs, on the deep kohl band */}
      <section className={`tone-deep grain ${styles.beliefs}`}>
        <Motif name="hoysala" stroke="rgba(242,149,110,.12)" className={styles.beliefsArt} />
        <div className={`wrap ${styles.section}`}>
          <Reveal className="section-head">
            <div>
              <h2 className="display">
                What I <em>believe.</em>
              </h2>
            </div>
          </Reveal>
          <Reveal stagger className={styles.beliefGrid}>
            {founder.beliefs.map((b, i) => (
              <div key={b.title} className={styles.belief}>
                <span className={styles.numeral} aria-hidden="true">
                  {["I", "II", "III"][i]}
                </span>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* In conversation */}
      <section>
        <div className={`wrap ${styles.section} ${styles.talkGrid}`}>
          <Reveal>
            <h2 className="display">
              In <em>conversation.</em>
            </h2>
          </Reveal>
          <Reveal stagger className={styles.talk}>
            {founder.conversation.map((c) => (
              <div key={c.q} className={styles.qa}>
                <h3>{c.q}</h3>
                <p>{c.a}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Closing line and onward links */}
      <section className={`band ${styles.closing}`}>
        <Motif name="lotus" stroke="rgba(151,48,46,.12)" className={styles.closingLotus} />
        <div className={`wrap ${styles.closingInner}`}>
          <Reveal>
            <p className={styles.closingLine}>
              {founder.closing[0]} <em>{founder.closing[1]}</em>
            </p>
          </Reveal>
          <Reveal stagger className={styles.onward}>
            <Link href="/our-story" className={styles.onwardLink}>
              <span>Our brand story</span>
              <b>Ancient roots, modern care</b>
            </Link>
            <Link href="/about#experts" className={styles.onwardLink}>
              <span>Our experts</span>
              <b>Meet the doctors</b>
            </Link>
          </Reveal>
        </div>
      </section>

      <Booking />
    </SiteShell>
  );
}
