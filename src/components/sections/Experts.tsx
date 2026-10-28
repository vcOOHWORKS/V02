import { Photo, hasPhoto } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { experts } from "@/content/site";
import styles from "./Experts.module.css";

export function Experts() {
  return (
    <section id="experts">
      <div className={`wrap ${styles.inner}`}>
        <Reveal className="section-head">
          <div>
            <h2 className="display">
              Faces you&apos;ll <em>actually</em> see.
            </h2>
          </div>
          <p>{experts.intro}</p>
        </Reveal>

        <Reveal stagger className={`swipe-md ${styles.grid}`}>
          {experts.people.map((doc) => (
            <article key={doc.name} className={styles.doc}>
              <div className={`${styles.photo} ${hasPhoto(doc.photo) ? styles.hasPhoto : ""}`}>
                {hasPhoto(doc.photo) ? (
                  <>
                    <Photo name={doc.photo} sizes="(max-width: 900px) 78vw, 400px" />
                    {doc.placeholder && <span className={styles.demo}>Demo portrait</span>}
                  </>
                ) : (
                  doc.placeholder && <span className={styles.placeholder}>Placeholder portrait · replace with your team</span>
                )}
                <span className={styles.quote}>&ldquo;{doc.quote}&rdquo;</span>
              </div>
              <h3>{doc.name}</h3>
              <p className={styles.role}>{doc.role}</p>
              <p>{doc.bio}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
