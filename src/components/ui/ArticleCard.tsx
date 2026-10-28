import Link from "next/link";
import { articleHref, formatDate, readingMinutes, type Article } from "@/content/journal";
import { LinkPending } from "./LinkPending";
import { Photo } from "./Photo";
import styles from "./ArticleCard.module.css";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={articleHref(article.slug)} className={styles.card}>
      <span className={styles.cover} aria-hidden="true">
        <i />
        <Photo name={article.slug} sizes="(max-width: 900px) 80vw, 400px" className={styles.photo} />
      </span>
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
    </Link>
  );
}
