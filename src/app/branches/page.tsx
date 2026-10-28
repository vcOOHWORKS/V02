import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Booking } from "@/components/sections/Booking";
import { JsonLd } from "@/components/ui/JsonLd";
import { Motif } from "@/components/ui/Motif";
import { Photo, hasPhoto } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { branches, clinic, visitPlan } from "@/content/site";
import { categories, treatmentHref } from "@/content/treatments";
import { absoluteUrl, breadcrumbLd, pageMeta, siteName, siteUrl } from "@/lib/seo";
import styles from "@/components/company/company.module.css";

export const metadata: Metadata = pageMeta({
  title: "Branches",
  description: "Visit VO2 in Bengaluru. Clinic hours, contact details and how to plan your first consultation.",
  path: "/branches",
});

const directionsUrl = (address: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export default function BranchesPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Branches", path: "/branches" },
          ]),
          ...branches.map((b) => ({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: b.name,
            url: absoluteUrl("/branches"),
            email: b.email,
            ...(b.phone ? { telephone: b.phone } : {}),
            parentOrganization: { "@id": `${siteUrl}/#clinic`, name: siteName },
            address: {
              "@type": "PostalAddress",
              ...(b.address ? { streetAddress: b.address } : {}),
              addressLocality: b.city,
              addressRegion: b.region,
              addressCountry: "IN",
            },
          })),
        ]}
      />

      <section className={styles.hero}>
        <Motif name="hoysala" stroke="rgba(151,48,46,.1)" className={styles.heroArt} />
        <div className={`wrap ${styles.heroInner}`}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Branches</span>
          </nav>
          <h1 className={styles.title}>
            Find us in <em>Bengaluru.</em>
          </h1>
          <p className={styles.lead}>
            Our flagship clinic is in Bengaluru. We are growing carefully, one city at a time, so every VO2 feels the way
            this one does.
          </p>
        </div>
      </section>

      <section className="band">
        <div className={`wrap ${styles.section}`}>
          {branches.map((b) => (
            <Reveal key={b.slug}>
              <article className={styles.branch}>
                <div className={styles.branchMedia}>
                  <figure className={styles.branchArch} style={{ background: b.tone }}>
                    <Photo name={`branch-${b.slug}`} sizes="(max-width: 900px) 90vw, 460px" />
                    {!hasPhoto(`branch-${b.slug}`) && (
                      <Motif name="lotus" stroke="rgba(252,250,248,.4)" className={styles.branchArt} />
                    )}
                  </figure>
                </div>

                <div className={styles.branchBody}>
                  <p className={styles.branchLabel}>{b.label}</p>
                  <h2 className={styles.branchName}>{b.name}</h2>
                  <dl className={styles.branchDetails}>
                    <div>
                      <dt>Address</dt>
                      <dd>{b.address ?? `${b.city}, ${b.region} · street address to be confirmed`}</dd>
                    </div>
                    <div>
                      <dt>Hours</dt>
                      <dd>{b.hours}</dd>
                    </div>
                    <div>
                      <dt>Phone</dt>
                      <dd>{b.phone ?? "To be added"}</dd>
                    </div>
                    <div>
                      <dt>Email</dt>
                      <dd>
                        <a href={`mailto:${b.email}`}>{b.email}</a>
                      </dd>
                    </div>
                    <div>
                      <dt>WhatsApp</dt>
                      <dd>
                        {clinic.whatsapp ? (
                          <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noopener noreferrer">
                            Message us
                          </a>
                        ) : (
                          "To be added"
                        )}
                      </dd>
                    </div>
                  </dl>

                  <div className={styles.branchActions}>
                    <a className="btn btn-solid" href="#book">
                      Book a consultation <span className="arrow">→</span>
                    </a>
                    {b.address && (
                      <a className="btn btn-ghost" href={directionsUrl(`${b.name}, ${b.address}`)} target="_blank" rel="noopener noreferrer">
                        Get directions
                      </a>
                    )}
                  </div>

                  <p className={styles.branchServicesLabel}>Treatments at this clinic</p>
                  <ul className={styles.branchServices}>
                    {categories.map((c) => (
                      <li key={c.slug}>
                        <Link href={treatmentHref(c.slug)}>{c.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <div className={`wrap ${styles.section}`}>
          <Reveal className="section-head">
            <div>
              <h2 className="display">
                Your first visit, <em>made easy.</em>
              </h2>
            </div>
            <p>A first consultation takes about forty minutes. Nothing is sold on the day.</p>
          </Reveal>
          <Reveal>
            <ol className={styles.visit}>
              {visitPlan.map((v) => (
                <li key={v.title} className={styles.visitStep}>
                  <span className={styles.rosette} aria-hidden="true" />
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className={`wrap ${styles.section} ${styles.cities}`}>
          <span className={styles.citiesKolam} aria-hidden="true" />
          <h2 className={styles.citiesTitle}>
            Want VO2 in <em>your city?</em>
          </h2>
          <p className={styles.citiesText}>
            Tell us where you are. We read every note, and it helps us decide where to open next. Write to{" "}
            <a href={`mailto:${clinic.email}`}>{clinic.email}</a>.
          </p>
        </div>
      </section>

      <Booking />
    </SiteShell>
  );
}
