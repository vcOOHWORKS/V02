import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { TreatmentCard } from "@/components/ui/TreatmentCard";
import { categories } from "@/content/treatments";
import styles from "./Treatments.module.css";

export function Treatments() {
  return (
    <section className="band" id="treatments">
      <div className={`wrap ${styles.inner}`}>
        <Reveal className="section-head">
          <div>
            <h2 className="display">
              Eight ways
              <br />
              we <em>care for you.</em>
            </h2>
          </div>
          <div className={styles.headSide}>
            <p>
              Clinical care for skin, hair and body, built around how Indian women actually live: long days, changing
              hormones, weddings and festivals, and a preference for results that look like you.
            </p>
            <Link href="/treatments" className={styles.all}>
              View all treatments
            </Link>
          </div>
        </Reveal>

        <Reveal stagger className={`swipe-sm ${styles.grid}`}>
          {categories.map((c) => (
            <TreatmentCard key={c.slug} category={c} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
