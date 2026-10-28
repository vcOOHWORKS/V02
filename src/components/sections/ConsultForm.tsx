"use client";

import Link from "next/link";
import { useRef, useState, useTransition, type FormEvent } from "react";
import { submitConsultation } from "@/lib/submissions";
import styles from "./Booking.module.css";

type Props = {
  concerns: string[];
  defaultConcern: string;
  times: string[];
  consent: string;
  confirmationTitle: string;
  confirmationBody: string;
  whatsapp: string | null;
};

// Validates in the browser, then hands off to submitConsultation (src/lib/submissions.ts),
// which is where the clinic's booking backend plugs in.
export function ConsultForm({ concerns, defaultConcern, times, consent, confirmationTitle, confirmationBody, whatsapp }: Props) {
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [sending, startSending] = useTransition();
  const confirmRef = useRef<HTMLDivElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    startSending(async () => {
      await submitConsultation({
        name,
        phone: String(data.get("phone") ?? ""),
        concern: String(data.get("concern") ?? ""),
        time: data.get("time") ? String(data.get("time")) : undefined,
      });
      setSentTo(name.split(/\s+/)[0] || "you");
      // Move focus to the confirmation so screen readers announce it.
      requestAnimationFrame(() => confirmRef.current?.focus());
    });
  };

  if (sentTo) {
    return (
      <div ref={confirmRef} className={styles.confirm} tabIndex={-1} role="status">
        <span className={styles.confirmMark} aria-hidden="true" />
        <h3>{confirmationTitle.replace("{name}", sentTo)}</h3>
        <p>{confirmationBody}</p>
        <div className={styles.confirmActions}>
          {whatsapp && (
            <a className="btn btn-solid" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer">
              WhatsApp us <span className="arrow">→</span>
            </a>
          )}
          <button type="button" className={styles.textButton} onClick={() => setSentTo(null)}>
            Change my details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.field}>
        <label htmlFor="consult-name">Your name</label>
        <input id="consult-name" name="name" placeholder="Priya Sharma" autoComplete="name" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="consult-phone">Mobile number</label>
        <input
          id="consult-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          placeholder="+91 98XXX XXXXX"
          autoComplete="tel"
          pattern="[+0-9 ()\-]{10,}"
          title="A 10-digit mobile number, with or without +91"
          required
        />
      </div>

      <fieldset className={styles.choices}>
        <legend>I&apos;d like help with</legend>
        <div className={styles.chips}>
          {concerns.map((c) => (
            <label key={c} className={styles.chip}>
              <input type="radio" name="concern" value={c} defaultChecked={c === defaultConcern} />
              <span>{c}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className={styles.choices}>
        <legend>
          Best time to call <span className={styles.optional}>Optional</span>
        </legend>
        <div className={styles.chips}>
          {times.map((t) => (
            <label key={t} className={styles.chip}>
              <input type="radio" name="time" value={t} />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <button className={`btn btn-solid ${styles.submit}`} type="submit" disabled={sending} aria-busy={sending}>
        {sending ? (
          <>
            <span className="spinner" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            Request a callback <span className="arrow">→</span>
          </>
        )}
      </button>
      <p className={styles.consent}>
        {consent} <Link href="/privacy">Privacy policy</Link>
      </p>
    </form>
  );
}
