import { Reveal } from "@/components/ui/Reveal";
import { ritual } from "@/content/site";
import styles from "./Ritual.module.css";

export function Ritual() {
  return (
    <section className={styles.section} id="ritual">
      <div className={`wrap ${styles.inner}`}>
        <Reveal className={styles.head}>
          <div>
            <h2 className="display">
              {ritual.title[0]} <em>{ritual.title[1]}</em>
            </h2>
          </div>
          <p>{ritual.intro}</p>
        </Reveal>

        <Reveal className={styles.steps}>
          <span className={styles.progress} aria-hidden="true" />
          {ritual.steps.map((step, i) => (
            <div key={step.title} className={styles.step} style={{ "--i": i } as React.CSSProperties}>
              <div className={styles.n}>{i + 1}</div>
              <h3>
                {step.title}
              </h3>
              <p>{step.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
