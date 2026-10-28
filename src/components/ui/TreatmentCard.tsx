import Link from "next/link";
import { treatmentHref, type Category } from "@/content/treatments";
import { LinkPending } from "./LinkPending";
import { Motif } from "./Motif";
import { Photo, hasPhoto } from "./Photo";
import styles from "./TreatmentCard.module.css";

type Props = {
  category: Category;
  // "lg" for the home and index grids, "sm" for the related row on detail pages.
  size?: "lg" | "sm";
};

// Arched treatment card: the whole card is one link to the category page.
export function TreatmentCard({ category, size = "lg" }: Props) {
  return (
    <Link href={treatmentHref(category.slug)} className={`${styles.card} ${size === "sm" ? styles.sm : ""}`}>
      <span className={styles.media} aria-hidden="true">
        <span className={styles.photo} style={{ background: category.tone }}>
          <Photo
            name={category.slug}
            sizes={size === "sm" ? "(max-width: 900px) 80vw, 400px" : "(max-width: 640px) 82vw, (max-width: 1100px) 45vw, 300px"}
          />
        </span>
        {!hasPhoto(category.slug) && <Motif name="lotus" stroke="rgba(252,250,248,.55)" className={styles.placeholderArt} />}
        <span className={styles.jaali} />
      </span>
      <span className={styles.body}>
        <span className={styles.title}>{category.title}</span>
        <span className={styles.summary}>{category.summary}</span>
        <span className={styles.explore}>
          Explore
          <LinkPending />
        </span>
      </span>
    </Link>
  );
}
