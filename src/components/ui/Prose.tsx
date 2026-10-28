import type { Block, Section } from "@/content/types";
import styles from "./Prose.module.css";

function BlockView({ block }: { block: Block }) {
  if ("p" in block) return <p>{block.p}</p>;
  if ("h3" in block) return <h3>{block.h3}</h3>;
  if ("ul" in block)
    return (
      <ul>
        {block.ul.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  return (
    <aside className={styles.note}>
      <span className={styles.noteMark} aria-hidden="true" />
      <p>{block.note}</p>
    </aside>
  );
}

type Props = {
  sections: Section[];
  // Prefix headings with their number, for documents people cite ("see section 4")
  numbered?: boolean;
};

// Long-form text: legal documents and journal articles.
export function Prose({ sections, numbered = false }: Props) {
  return (
    <div className={styles.prose}>
      {sections.map((s, i) => (
        <section key={s.id} id={s.id} className={styles.section}>
          <h2>
            {numbered && <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>}
            {s.title}
          </h2>
          {s.blocks.map((b, j) => (
            <BlockView key={j} block={b} />
          ))}
        </section>
      ))}
    </div>
  );
}
