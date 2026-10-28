import Link from "next/link";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Reveal } from "@/components/ui/Reveal";
import { result } from "@/content/site";
import styles from "./Results.module.css";

export function Results() {
  return (
    <section className="band" id="results">
      <div className={`wrap ${styles.inner}`}>
        <Reveal className={styles.story}>
          <blockquote>{result.quote}</blockquote>
          <p className={styles.who}>
            <b>{result.name}</b> · {result.detail}
          </p>
          <p className={styles.note}>{result.note}</p>
          <Link href="/results" className={styles.galleryLink}>
            See the results gallery
          </Link>
        </Reveal>
        <Reveal className={styles.compare}>
          <BeforeAfter afterLabel="After · 12 wks" footnote="Drag to compare · Placeholder frames" />
        </Reveal>
      </div>
    </section>
  );
}
