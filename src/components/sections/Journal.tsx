import Link from "next/link";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Reveal } from "@/components/ui/Reveal";
import { articlesByDate } from "@/content/journal";
import { journal } from "@/content/site";
import styles from "./Journal.module.css";

export function Journal() {
  return (
    <section id="journal">
      <div className={`wrap ${styles.inner}`}>
        <Reveal className="section-head">
          <div>
            <h2 className="display">
              Read before <em>you book.</em>
            </h2>
          </div>
          <div className={styles.headSide}>
            <p>{journal.intro}</p>
            <Link href="/journal" className={styles.all}>
              All articles
            </Link>
          </div>
        </Reveal>

        <Reveal stagger className={`swipe-md ${styles.posts}`}>
          {articlesByDate.slice(0, 3).map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
