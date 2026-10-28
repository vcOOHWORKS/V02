import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Motif } from "@/components/ui/Motif";
import { clinic, footer } from "@/content/site";
import { groupHref, groupedCategories, treatmentHref } from "@/content/treatments";
import { LettersSignup } from "./LettersSignup";
import styles from "./Footer.module.css";

export function Footer() {
  const social = footer.social.filter((s) => s.url);

  return (
    <footer className={`tone-deep ${styles.footer}`}>
      <Motif name="lotus" stroke="rgba(242,149,110,.09)" className={styles.lotus} />

      <div className={`wrap ${styles.inner}`}>
        {/* Closing statement and the seasonal letter */}
        <div className={styles.top}>
          <p className={styles.statement}>
            {footer.statement[0]} <em>{footer.statement[1]}</em>
          </p>
          <div className={styles.letters}>
            <p className={styles.lettersTitle}>{footer.letters.title}</p>
            <p className={styles.lettersBody}>{footer.letters.body}</p>
            <LettersSignup placeholder={footer.letters.placeholder} confirmation={footer.letters.confirmation} />
          </div>
        </div>

        <div className={styles.kolam} aria-hidden="true" />

        {/* Directory of care: the four groups, as in the menu */}
        <nav className={styles.care} aria-label="Treatments">
          {groupedCategories.map((g) => (
            <div key={g.slug} className={styles.careGroup}>
              <h4>
                <Link href={groupHref(g.slug)}>{g.title}</Link>
              </h4>
              <ul>
                {g.items.map((c) => (
                  <li key={c.slug}>
                    <Link href={treatmentHref(c.slug)}>{c.title}</Link>
                  </li>
                ))}
              </ul>
              {g.slug === "dental" && (
                <>
                  <h4 className={styles.careExtra}>Salon</h4>
                  <ul>
                    <li>
                      <Link href="/salon-nails">Salon &amp; nails</Link>
                    </li>
                  </ul>
                </>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.columns}>
          <div className={styles.brand}>
            <Logo chip />
            <p>{footer.blurb}</p>
            <a href="#book" className={styles.bookLink}>
              Book a consultation
            </a>
          </div>

          <nav aria-label="About VO2">
            <h4>About</h4>
            <ul>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/founder">Our founder</Link>
              </li>
              <li>
                <Link href="/our-story">Our brand story</Link>
              </li>
              <li>
                <Link href="/about#experts">Our experts</Link>
              </li>
              <li>
                <Link href="/branches">Branches</Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Explore">
            <h4>Explore</h4>
            <ul>
              <li>
                <Link href="/treatments">All treatments</Link>
              </li>
              <li>
                <Link href="/results">Results gallery</Link>
              </li>
              <li>
                <Link href="/#ritual">The VO2 Way</Link>
              </li>
              <li>
                <Link href="/journal">Journal</Link>
              </li>
              {social.map((s) => (
                <li key={s.label}>
                  <a href={s.url!} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4>Visit</h4>
            <address className={styles.address}>
              <span>{clinic.address}</span>
              <span>{clinic.hours}</span>
              <span>{clinic.phone}</span>
              <span>{clinic.email}</span>
            </address>
          </div>
        </div>

        <p className={styles.medical}>{footer.medicalNote}</p>
      </div>

      <div className={styles.ambi} aria-hidden="true" />

      <div className={`wrap ${styles.fine}`}>
        <span>
          © {clinic.copyrightYear} {clinic.legalName} · {clinic.city}
        </span>
        <nav className={styles.legal} aria-label="Legal">
          {footer.legal.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <Link href="/credits">Photo credits</Link>
          <a href="/feed.xml">RSS</a>
          <a href="/sitemap.xml">Sitemap</a>
        </nav>
        <a href="#" className={styles.toTop}>
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
