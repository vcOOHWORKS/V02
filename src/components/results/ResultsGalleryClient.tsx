"use client";

import { useEffect, useRef, useState } from "react";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Photo } from "@/components/ui/Photo";
import styles from "./results.module.css";

export type Slot = {
  id: string;
  slug: string;
  treatment: string;
  tone: string;
} & (
  | { real: true; demo: boolean; concern: string; sessions: string; timeline: string; doctor: string; before: string; after: string }
  | { real: false }
);

type Props = {
  slots: Slot[];
  chips: { slug: string; title: string }[] | null;
};

export function ResultsGalleryClient({ slots, chips }: Props) {
  const [filter, setFilter] = useState<string>("all");
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visible = filter === "all" ? slots : slots.filter((s) => s.slug === filter);
  const current = open === null ? null : visible[open];

  // Drive the native <dialog>: modal focus, Escape to close, page scroll locked
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open !== null && !dialog.open) dialog.showModal();
    if (open === null && dialog.open) dialog.close();
    if (open === null) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % visible.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + visible.length) % visible.length));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, visible.length]);

  return (
    <div className={styles.gallery}>
      {chips && (
        <div className={styles.filters} role="group" aria-label="Filter results by treatment">
          {[{ slug: "all", title: "All treatments" }, ...chips].map((c) => (
            <button
              key={c.slug}
              type="button"
              className={styles.filter}
              aria-pressed={filter === c.slug}
              onClick={() => {
                setFilter(c.slug);
                setOpen(null);
              }}
            >
              {c.title}
            </button>
          ))}
        </div>
      )}

      <ul className={styles.mosaic} aria-live="polite">
        {visible.map((s, i) => (
          // The key includes the filter so tiles replay their entrance when it changes
          <li key={`${filter}-${s.id}`} className={styles.tile} style={{ "--i": i } as React.CSSProperties}>
            <button
              type="button"
              className={styles.tileButton}
              onClick={() => setOpen(i)}
              aria-label={`${s.treatment}: ${s.real ? `${s.concern}, view before and after` : "real cases coming soon"}`}
            >
              {s.real ? (
                <span className={styles.diptych} aria-hidden="true">
                  <span className={`${styles.half} ${styles.halfBefore}`} style={{ background: s.tone }}>
                    <Photo name={s.before} sizes="(max-width: 640px) 46vw, 300px" />
                    <span className={styles.tag}>Before</span>
                  </span>
                  <span className={`${styles.half} ${styles.halfAfter}`} style={{ background: s.tone }}>
                    <Photo name={s.after} sizes="(max-width: 640px) 46vw, 300px" />
                    <span className={styles.tag}>After</span>
                  </span>
                  {s.demo && <span className={styles.demo}>Demo images</span>}
                </span>
              ) : (
                // No real cases yet: the treatment's own photo, never shown as a before or after
                <span className={styles.single} style={{ background: s.tone }} aria-hidden="true">
                  <Photo name={s.slug} sizes="(max-width: 640px) 92vw, (max-width: 1000px) 46vw, 400px" />
                  <span className={styles.soon}>Real cases coming soon</span>
                </span>
              )}
              <span className={styles.caption}>
                <span className={styles.captionTitle}>{s.treatment}</span>
                <span className={styles.captionMeta}>
                  {s.real ? `${s.concern} · ${s.sessions} · ${s.timeline}` : "Consented before and after photos to come"}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className={styles.viewer}
        aria-label={current ? `${current.treatment}, before and after` : "Before and after"}
        onClose={() => setOpen(null)}
        onClick={(e) => {
          // A click on the backdrop (the dialog itself) closes it
          if (e.target === e.currentTarget) setOpen(null);
        }}
      >
        {current && (
          <div className={styles.viewerInner}>
            <div className={styles.viewerMedia}>
              {current.real ? (
                <BeforeAfter
                  key={current.id}
                  fill
                  before={current.before}
                  after={current.after}
                  afterLabel={`After · ${current.timeline}`}
                  footnote={current.demo ? "Drag to compare · Demo images, not a patient result" : "Drag to compare"}
                />
              ) : (
                <div className={styles.viewerSingle} style={{ background: current.tone }}>
                  <Photo name={current.slug} sizes="(max-width: 860px) 100vw, 60vw" />
                  <span className={styles.soon}>Real cases coming soon</span>
                </div>
              )}
            </div>
            <div className={styles.viewerInfo}>
              <p className={styles.viewerCount}>
                {open! + 1} / {visible.length}
              </p>
              <h3 className={styles.viewerTitle}>{current.treatment}</h3>
              {current.real ? (
                <dl className={styles.viewerDetails}>
                  <div>
                    <dt>Concern</dt>
                    <dd>{current.concern}</dd>
                  </div>
                  <div>
                    <dt>Sessions</dt>
                    <dd>{current.sessions}</dd>
                  </div>
                  <div>
                    <dt>Timeline</dt>
                    <dd>{current.timeline}</dd>
                  </div>
                  <div>
                    <dt>Doctor</dt>
                    <dd>{current.doctor}</dd>
                  </div>
                </dl>
              ) : (
                <p className={styles.viewerNote}>
                  This frame will show a real VO2 case, shared with the client&apos;s written consent and photographed in the
                  same light and angle before and after.
                </p>
              )}
              <p className={styles.viewerConsent}>
                {current.real && current.demo
                  ? "Demo: stock photos showing the layout, not a VO2 patient result. Real cases will replace these."
                  : "Shared with written consent. No filters, no retouching. Results vary."}
              </p>
              <div className={styles.viewerNav}>
                <button type="button" onClick={() => setOpen((open! - 1 + visible.length) % visible.length)} aria-label="Previous case">
                  ←
                </button>
                <button type="button" onClick={() => setOpen((open! + 1) % visible.length)} aria-label="Next case">
                  →
                </button>
              </div>
            </div>
            <button type="button" className={styles.viewerClose} onClick={() => setOpen(null)} aria-label="Close" autoFocus>
              <span />
              <span />
            </button>
          </div>
        )}
      </dialog>
    </div>
  );
}
