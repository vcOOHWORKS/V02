import { marquee } from "@/content/site";
import styles from "./Marquee.module.css";

export function Marquee() {
  // Two identical halves (each wider than a large screen) make the -50% loop seamless.
  const half = [...marquee, ...marquee];
  const words = [...half, ...half];
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {words.map((w, i) => (
          <span key={i} className={styles.word}>
            {w.em ? <em>{w.en}</em> : w.en}
          </span>
        ))}
      </div>
    </div>
  );
}
