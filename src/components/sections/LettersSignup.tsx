"use client";

import { useState, useTransition, type FormEvent } from "react";
import { subscribeToLetters } from "@/lib/submissions";
import styles from "./Footer.module.css";

type Props = {
  placeholder: string;
  confirmation: string;
};

export function LettersSignup({ placeholder, confirmation }: Props) {
  const [done, setDone] = useState(false);
  const [sending, startSending] = useTransition();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "");
    startSending(async () => {
      await subscribeToLetters(email);
      setDone(true);
    });
  };

  if (done) {
    return (
      <p className={styles.signupDone} role="status">
        {confirmation}
      </p>
    );
  }

  return (
    <form className={styles.signup} onSubmit={onSubmit}>
      <label htmlFor="letters-email" className="sr-only">
        Email address
      </label>
      <input id="letters-email" name="email" type="email" placeholder={placeholder} autoComplete="email" required />
      <button type="submit" disabled={sending} aria-busy={sending}>
        {sending ? (
          <>
            <span className="spinner" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            Subscribe <span aria-hidden="true">→</span>
          </>
        )}
      </button>
    </form>
  );
}
