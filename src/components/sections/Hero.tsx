import { Motif } from "@/components/ui/Motif";
import { Photo, hasPhoto } from "@/components/ui/Photo";
import { hero } from "@/content/site";
import styles from "./Hero.module.css";

// "own |light.|" → ["own ", <em>light.</em>]
function Line({ text }: { text: string }) {
  return text.split("|").map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part));
}

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            {hero.lines.map((line) => (
              <span key={line} className={styles.line}>
                <span>
                  <Line text={line} />
                </span>
              </span>
            ))}
          </h1>
          <p className={styles.lead}>{hero.lead}</p>
          <div className={styles.actions}>
            <a className="btn btn-solid" href="#book">
              Book a consultation <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="#treatments">
              Treatments
            </a>
          </div>
        </div>

        <div className={styles.portraitWrap}>
          <Motif name="lotus" stroke="rgba(151,48,46,.16)" className={styles.lotus} />
          <figure className={styles.portrait}>
            <Photo name="hero" sizes="(max-width: 900px) 380px, 460px" eager />
            {!hasPhoto("hero") && (
              <figcaption className="brief">
                <b>Shoot brief · Hero</b>
                {hero.brief}
              </figcaption>
            )}
          </figure>
        </div>
      </div>
    </section>
  );
}
