"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { LinkPending } from "@/components/ui/LinkPending";
import { Logo } from "@/components/ui/Logo";
import { Photo } from "@/components/ui/Photo";
import { clinic, nav } from "@/content/site";
import { categories, treatmentHref } from "@/content/treatments";
import styles from "./Nav.module.css";

type Props = {
  // Server-rendered motif for the mobile menu, passed in so the pattern
  // generator stays out of the client bundle.
  art?: ReactNode;
  // Highlights the matching item. Passed by the page rather than read from the
  // URL, which keeps every route fully prerendered.
  current?: "treatments";
};

export function Nav({ art, current }: Props) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu
  const [menu, setMenu] = useState(false); // desktop treatments menu
  const [mobileTreatments, setMobileTreatments] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const lastPointer = useRef<string>("");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: lock page scroll and listen for Escape while open.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Desktop menu: close on Escape or a click outside it.
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    const onDown = (e: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [menu]);

  // Close menus when the viewport crosses the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1025px)");
    const onChange = () => {
      setOpen(false);
      setMenu(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  // Hover opens the desktop menu on pointer devices; a short delay on leave
  // stops it flickering shut while the cursor crosses the gap.
  const hoverOpen = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    window.clearTimeout(closeTimer.current);
    setMenu(true);
  };
  const hoverClose = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    closeTimer.current = window.setTimeout(() => setMenu(false), 180);
  };

  const closeAll = () => {
    setOpen(false);
    setMenu(false);
  };

  // The mobile panel is a sibling of the header, not a child: the header's
  // backdrop-filter would otherwise become the containing block and trap it.
  return (
    <>
      <header className={`${styles.nav} ${solid || open || menu ? styles.solid : ""}`}>
        <div className={`wrap ${styles.inner}`}>
          <Link href="/" aria-label="VO2 home" className={styles.logo} onClick={closeAll}>
            <Logo eager />
          </Link>

          <nav className={styles.menu} aria-label="Main">
            <div ref={menuRef} className={styles.menuItem} onPointerEnter={hoverOpen} onPointerLeave={hoverClose}>
              <button
                type="button"
                className={`${styles.trigger} ${current === "treatments" ? styles.current : ""}`}
                aria-expanded={menu}
                aria-controls="treatments-menu"
                onPointerDown={(e) => (lastPointer.current = e.pointerType)}
                onClick={() => {
                  // With a mouse, hover already opened the menu: a click keeps it open
                  // instead of toggling it shut. Touch and keyboard toggle as usual.
                  if (lastPointer.current === "mouse") setMenu(true);
                  else setMenu((m) => !m);
                  lastPointer.current = "";
                }}
              >
                Treatments
                <span className={`${styles.chevron} ${menu ? styles.chevronOpen : ""}`} aria-hidden="true" />
              </button>

              {/* Mega menu: an introduction beside all nine categories as image tiles */}
              <div id="treatments-menu" className={`${styles.mega} ${menu ? styles.megaOpen : ""}`} inert={!menu}>
                <div className={`wrap ${styles.megaInner}`}>
                  <div className={styles.megaIntro}>
                    <p className={styles.megaHeading}>
                      Nine ways we <em>care for you.</em>
                    </p>
                    <p className={styles.megaText}>Not sure where to begin? A consultation is the best first step.</p>
                    <div className={styles.megaLinks}>
                      <Link href="/treatments" className={styles.megaLink} onClick={closeAll}>
                        All treatments
                      </Link>
                      <a href="#book" className={styles.megaLink} onClick={closeAll}>
                        Book a consultation
                      </a>
                    </div>
                  </div>
                  <ul className={styles.megaGrid}>
                    {categories.map((c) => (
                      <li key={c.slug}>
                        <Link href={treatmentHref(c.slug)} className={styles.tile} onClick={closeAll}>
                          <span className={styles.tileImage} style={{ background: c.tone }} aria-hidden="true">
                            <Photo name={c.slug} sizes="220px" className={styles.tilePhoto} />
                          </span>
                          <span className={styles.tileTitle}>
                            {c.title}
                            <LinkPending />
                          </span>
                          <span className={styles.tileKeywords}>{c.keywords}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={styles.link}>
                {item.label}
                <LinkPending />
              </Link>
            ))}
          </nav>

          <div className={styles.right}>
            <span className={styles.city}>{clinic.city}</span>
            <a className={`btn btn-solid ${styles.cta}`} href="#book" onClick={closeAll}>
              Book <span className="arrow">→</span>
            </a>
            <button
              type="button"
              className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`${styles.panel} ${open ? styles.panelOpen : ""}`} inert={!open}>
        <div className={styles.panelArt} aria-hidden="true">
          {art}
        </div>
        <div className={`wrap ${styles.panelInner}`}>
          <nav aria-label="Mobile">
            <ul className={styles.panelLinks}>
              <li>
                <button
                  type="button"
                  className={styles.panelToggle}
                  aria-expanded={mobileTreatments}
                  aria-controls="mobile-treatments"
                  onClick={() => setMobileTreatments((v) => !v)}
                >
                  Treatments
                  <span className={`${styles.plus} ${mobileTreatments ? styles.plusOpen : ""}`} aria-hidden="true" />
                </button>
                {/* Grid rows animate 0fr → 1fr; the inner list clips its content while collapsed */}
                <div
                  id="mobile-treatments"
                  className={`${styles.panelSub} ${mobileTreatments ? styles.panelSubOpen : ""}`}
                  inert={!mobileTreatments}
                >
                  <ul className={styles.panelSubInner}>
                    {categories.map((c) => (
                      <li key={c.slug}>
                        <Link href={treatmentHref(c.slug)} onClick={closeAll} className={styles.subLink}>
                          <span className={styles.subThumb} style={{ background: c.tone }} aria-hidden="true">
                            <Photo name={c.slug} sizes="44px" />
                          </span>
                          {c.title}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href="/treatments" onClick={closeAll} className={styles.panelSubAll}>
                        All treatments
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={closeAll}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a className="btn btn-solid" href="#book" onClick={closeAll}>
            Book a consultation <span className="arrow">→</span>
          </a>
          <p className={styles.panelMeta}>
            {clinic.city} · {clinic.hours}
          </p>
        </div>
      </div>
    </>
  );
}
