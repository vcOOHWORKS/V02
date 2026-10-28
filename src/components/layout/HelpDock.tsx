"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { clinic } from "@/content/site";
import styles from "./HelpDock.module.css";

const whatsappHref = clinic.whatsapp
  ? `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent("Hi VO2, I'd like to know more about a treatment.")}`
  : null;
// Only dial a real number, not the "to be added" placeholder
const phoneDigits = clinic.phone.replace(/[^\d+]/g, "");
const phoneHref = phoneDigits.length >= 10 ? `tel:${phoneDigits}` : null;

// Floating WhatsApp and Help buttons, bottom right on every page. Help opens a
// small panel of ways to reach the clinic. Until a WhatsApp number is set in
// site.ts, the WhatsApp button opens the Help panel instead.
export function HelpDock() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    rootRef.current?.querySelector<HTMLElement>(`[data-first]`)?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  // Scroll to this page's booking section when it has one, else go to the home page's
  const toBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const book = document.getElementById("book");
    setOpen(false);
    if (book) {
      e.preventDefault();
      book.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div ref={rootRef} className={styles.dock}>
      <div id={panelId} className={styles.panel} data-open={open} role="dialog" aria-label="Help" hidden={!open}>
        <p className={styles.title}>
          How can we <em>help?</em>
        </p>
        <p className={styles.sub}>Our team is here {clinic.hours}.</p>
        <ul className={styles.list}>
          <li>
            <Link href="/#book" onClick={toBooking} className={styles.item} data-first>
              <Icon name="calendar" />
              <span>
                <b>Book a consultation</b>
                <small>We call you within one working day</small>
              </span>
            </Link>
          </li>
          <li>
            {whatsappHref ? (
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.item}>
                <Icon name="whatsapp" />
                <span>
                  <b>Chat on WhatsApp</b>
                  <small>Questions, prices, rescheduling</small>
                </span>
              </a>
            ) : (
              <span className={`${styles.item} ${styles.muted}`}>
                <Icon name="whatsapp" />
                <span>
                  <b>WhatsApp</b>
                  <small>Number coming soon</small>
                </span>
              </span>
            )}
          </li>
          <li>
            {phoneHref ? (
              <a href={phoneHref} className={styles.item}>
                <Icon name="phone" />
                <span>
                  <b>Call us</b>
                  <small>{clinic.phone}</small>
                </span>
              </a>
            ) : (
              <span className={`${styles.item} ${styles.muted}`}>
                <Icon name="phone" />
                <span>
                  <b>Call us</b>
                  <small>Number coming soon</small>
                </span>
              </span>
            )}
          </li>
          <li>
            <a href={`mailto:${clinic.email}`} className={styles.item}>
              <Icon name="mail" />
              <span>
                <b>Email</b>
                <small>{clinic.email}</small>
              </span>
            </a>
          </li>
        </ul>
        <div className={styles.links}>
          <Link href="/treatments" onClick={() => setOpen(false)}>
            Find a treatment
          </Link>
          <Link href="/branches" onClick={() => setOpen(false)}>
            Visit us
          </Link>
        </div>
      </div>

      <div className={styles.buttons}>
        {whatsappHref ? (
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={`${styles.fab} ${styles.whatsapp}`} aria-label="Chat with VO2 on WhatsApp">
            <Icon name="whatsapp" />
          </a>
        ) : (
          <button type="button" className={`${styles.fab} ${styles.whatsapp}`} aria-label="WhatsApp (number coming soon)" onClick={() => setOpen(true)}>
            <Icon name="whatsapp" />
          </button>
        )}
        <button
          ref={toggleRef}
          type="button"
          className={`${styles.fab} ${styles.help}`}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={styles.helpIcon} data-open={open} aria-hidden="true">
            <Icon name="help" />
            <Icon name="close" />
          </span>
          <span className={styles.helpLabel}>{open ? "Close" : "Help"}</span>
        </button>
      </div>
    </div>
  );
}

function Icon({ name }: { name: "whatsapp" | "help" | "close" | "calendar" | "phone" | "mail" }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", "aria-hidden": true, focusable: false } as const;
  if (name === "whatsapp")
    return (
      <svg {...common} fill="currentColor">
        <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.1-1.34A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.03.8.81-2.95-.2-.3a8.2 8.2 0 1 1 6.9 3.78Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.17.25-.64.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25 0-.38.11-.5l.37-.43c.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.07-.13-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.66.31 2.77 2.77 0 0 0-.86 2.06 4.8 4.8 0 0 0 1 2.55c.13.16 1.75 2.67 4.24 3.75.6.25 1.06.4 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.29Z" />
      </svg>
    );
  const stroke = { ...common, fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  if (name === "help")
    return (
      <svg {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.6 9.4a2.5 2.5 0 0 1 4.85.85c0 1.65-2.45 2.2-2.45 3.6" />
        <circle cx="12" cy="17" r=".6" fill="currentColor" />
      </svg>
    );
  if (name === "close")
    return (
      <svg {...stroke}>
        <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
      </svg>
    );
  if (name === "calendar")
    return (
      <svg {...stroke}>
        <rect x="3.5" y="5" width="17" height="15" rx="2" />
        <path d="M3.5 10h17M8 3v4M16 3v4" />
      </svg>
    );
  if (name === "phone")
    return (
      <svg {...stroke}>
        <path d="M5 4h3.2l1.6 4-2 1.3a10 10 0 0 0 4.9 4.9l1.3-2 4 1.6V17a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
      </svg>
    );
  return (
    <svg {...stroke}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}
