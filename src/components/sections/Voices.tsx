import { Motif } from "@/components/ui/Motif";
import { Reveal } from "@/components/ui/Reveal";
import { voices } from "@/content/site";
import styles from "./Voices.module.css";

type Voice = (typeof voices.items)[number];

function Story({ voice, featured = false }: { voice: Voice; featured?: boolean }) {
  return (
    <figure className={`${styles.story} ${featured ? styles.featured : ""}`}>
      {featured && <Motif name="hoysala" stroke="rgba(151,48,46,.1)" className={styles.star} />}
      <span className={styles.rosette} aria-hidden="true" />
      <blockquote className={styles.quote}>{voice.quote}</blockquote>
      <figcaption className={styles.caption}>
        <span className={styles.name}>{voice.name}</span>
        <span className={styles.meta}>
          {voice.area} · {voice.treatment}
        </span>
      </figcaption>
    </figure>
  );
}

export function Voices() {
  const [first, ...rest] = voices.items;
  return (
    <section className="band" id="voices">
      <div className={`wrap ${styles.inner}`}>
        <Reveal className="section-head">
          <div>
            <h2 className="display">
              What changed, <em>in her words.</em>
            </h2>
          </div>
          <p>{voices.intro}</p>
        </Reveal>

        <Reveal stagger className={styles.grid}>
          <Story voice={first} featured />
          {rest.map((v) => (
            <Story key={v.name} voice={v} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
