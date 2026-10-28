"use client";

import { useState } from "react";
import { Photo } from "./Photo";
import styles from "./BeforeAfter.module.css";

type Props = {
  afterLabel: string;
  footnote: string;
  // Photo map keys; when absent, warm placeholder frames show instead
  before?: string;
  after?: string;
  // For the viewer: fills its container instead of keeping a 4:5 frame
  fill?: boolean;
};

// Drag (or use arrow keys) to compare before and after.
export function BeforeAfter({ afterLabel, footnote, before, after, fill = false }: Props) {
  const [split, setSplit] = useState(50);

  return (
    <div className={`${styles.frame} ${fill ? styles.fill : ""}`}>
      <div className={`${styles.img} ${styles.before}`}>{before && <Photo name={before} sizes="(max-width: 900px) 100vw, 60vw" />}</div>
      <div className={`${styles.img} ${styles.after}`} style={{ clipPath: `inset(0 0 0 ${split}%)` }}>
        {after && <Photo name={after} sizes="(max-width: 900px) 100vw, 60vw" />}
      </div>
      <span className={`${styles.label} ${styles.left}`}>Before</span>
      <span className={`${styles.label} ${styles.right}`}>{afterLabel}</span>
      <div className={styles.handle} style={{ left: `${split}%` }} aria-hidden="true" />
      <input
        type="range"
        min={0}
        max={100}
        value={split}
        onChange={(e) => setSplit(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className={styles.range}
      />
      <div className={styles.foot}>{footnote}</div>
    </div>
  );
}
