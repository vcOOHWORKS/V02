import { Reveal } from "@/components/ui/Reveal";
import { ScrollLitText } from "@/components/ui/ScrollLitText";
import { manifesto } from "@/content/site";
import styles from "./Manifesto.module.css";

export function Manifesto() {
  return (
    <section id="manifesto">
      <div className={`wrap ${styles.inner}`}>
        <ScrollLitText
          segments={manifesto.segments}
          className={styles.big}
          wordClassName={styles.word}
          litClassName={styles.lit}
          emClassName={styles.em}
        />
        <div className={styles.kolam} aria-hidden="true" />

        <Reveal stagger className={styles.promises}>
          {manifesto.promises.map((p) => (
            <div key={p.title} className={styles.cell}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
