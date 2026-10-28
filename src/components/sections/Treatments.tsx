import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { groupHref, groupedCategories, treatmentHref } from "@/content/treatments";
import styles from "./Treatments.module.css";

// The home page's way in: four groups of care, each an arch with its treatments
export function Treatments() {
  return (
    <section className="band" id="treatments">
      <div className={`wrap ${styles.inner}`}>
        <Reveal className="section-head">
          <div>
            <h2 className="display">
              Care for every
              <br />
              <em>part of you.</em>
            </h2>
          </div>
          <div className={styles.headSide}>
            <p>
              Skin and aesthetics, Ayurveda and recovery, movement and dental care, under one roof and planned around how
              Indian women actually live.
            </p>
            <Link href="/treatments" className={styles.all}>
              View all treatments
            </Link>
          </div>
        </Reveal>

        <Reveal stagger className={`swipe-md ${styles.grid}`}>
          {groupedCategories.map((g, i) => (
            <article key={g.slug} className={styles.group}>
              <Link href={groupHref(g.slug)} className={styles.groupMedia} style={{ background: g.items[0]?.tone }} tabIndex={-1} aria-hidden="true">
                <Photo name={g.photo} sizes="(max-width: 900px) 70vw, 300px" className={styles.groupPhoto} />
                <span className={styles.groupJaali} />
                <span className={styles.groupCount}>{String(i + 1).padStart(2, "0")}</span>
              </Link>
              <h3 className={styles.groupTitle}>
                <Link href={groupHref(g.slug)}>
                  {g.heading[0]} <em>{g.heading[1]}</em>
                </Link>
              </h3>
              <p className={styles.groupBlurb}>{g.blurb}</p>
              <ul className={styles.groupItems}>
                {g.items.map((c) => (
                  <li key={c.slug}>
                    <Link href={treatmentHref(c.slug)}>{c.title}</Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
