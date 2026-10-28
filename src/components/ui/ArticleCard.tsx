import Link from "next/link";
import { articleHref, formatDate, readingMinutes, type Article } from "@/content/journal";
import { LinkPending } from "./LinkPending";
import { Photo } from "./Photo";
import styles from "./ArticleCard.module.css";

// `feature` lays the card out wide (cover beside text) for the lead article.
export function ArticleCard({ article, feature = false }: { article: Article; feature?: boolean }) {
  return (
    <Link href={articleHref(article.slug)} className={`${styles.card} ${feature ? styles.feature : ""}`}>
      <span className={styles.cover} aria-hidden="true">
        <i />
        <Photo name={article.slug} sizes="(max-width: 900px) 80vw, 400px" className={styles.photo} />
      </span>
      <span className={styles.text}>
        <span className={styles.category}>{article.category}</span>
        <span className={styles.title}>
          {article.title}
          <LinkPending />
        </span>
        <span className={styles.excerpt}>{article.excerpt}</span>
        <span className={styles.meta}>
          <time dateTime={article.published}>{formatDate(article.published)}</time>
          <span aria-hidden="true">·</span>
          {readingMinutes(article)} min read
        </span>
      </span>
    </Link>
  );
}
