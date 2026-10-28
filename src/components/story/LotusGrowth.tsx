"use client";

import { useEffect, useState } from "react";
import type { Stage } from "@/content/story";
import styles from "./story.module.css";

// A fine-line lotus that grows with the story: roots draw through chapter I,
// the stem and water rise through chapter II, the flower opens in chapter III.
// Each chapter marks itself with data-stage="roots|rise|bloom".

type Point = [number, number];
const f = (n: number) => n.toFixed(1);

function petal(base: Point, length: number, angleDeg: number, width: number) {
  const a = (angleDeg * Math.PI) / 180;
  const tip: Point = [base[0] + length * Math.cos(a), base[1] + length * Math.sin(a)];
  const mid: Point = [base[0] + (length / 2) * Math.cos(a), base[1] + (length / 2) * Math.sin(a)];
  const nx = -Math.sin(a) * width;
  const ny = Math.cos(a) * width;
  return `M${f(base[0])} ${f(base[1])}Q${f(mid[0] + nx)} ${f(mid[1] + ny)} ${f(tip[0])} ${f(tip[1])}Q${f(mid[0] - nx)} ${f(mid[1] - ny)} ${f(base[0])} ${f(base[1])}Z`;
}

const BASE: Point = [100, 176];
const PETALS = [
  [-90, 104, 24],
  [-62, 92, 22],
  [-118, 92, 22],
  [-36, 70, 18],
  [-144, 70, 18],
  [-12, 48, 13],
  [-168, 48, 13],
].map(([angle, length, width]) => petal(BASE, length, angle, width));

const ROOTS = [
  "M100 400C98 450 92 500 96 580",
  "M100 410C84 450 64 480 44 530",
  "M74 462C62 471 52 471 40 467",
  "M100 410C116 448 136 476 154 520",
  "M130 470C141 482 149 496 152 510",
  "M96 520C88 540 80 548 70 552",
  "M97 498C106 518 114 530 124 536",
];
const STEM = [
  "M100 400C94 330 108 260 100 180",
  "M100 330C118 312 150 314 168 330C148 344 120 344 100 330Z",
];
const WATER = ["M24 400Q44 393 64 400T104 400T144 400T184 400", "M48 414Q63 408 78 414T108 414T138 414T168 414"];

type Progress = Record<Stage, number>;
const FULL: Progress = { roots: 1, rise: 1, bloom: 1 };

type Props = {
  stages: { stage: Stage; numeral: string; name: string; thread: string }[];
};

export function LotusGrowth({ stages }: Props) {
  // Fully drawn until measured, so the lotus is complete without JavaScript.
  const [progress, setProgress] = useState<Progress>(FULL);
  const [active, setActive] = useState<Stage | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-stage]"));
    let frame = 0;
    const measure = () => {
      frame = 0;
      const vh = window.innerHeight;
      const next = { ...FULL };
      let current: Stage | null = null;
      for (const el of els) {
        const stage = el.dataset.stage as Stage;
        const r = el.getBoundingClientRect();
        next[stage] = Math.min(1, Math.max(0, (vh * 0.7 - r.top) / (r.height * 0.75)));
        if (r.top < vh * 0.5 && r.bottom > vh * 0.5) current = stage;
      }
      setProgress(next);
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const draw = (p: number) => ({ strokeDasharray: 1, strokeDashoffset: 1 - p });

  return (
    <div className={styles.lotusRail} aria-hidden="true">
      <svg viewBox="0 0 200 600" className={styles.lotusSvg} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <g stroke="rgba(151,48,46,.55)" strokeWidth="1.1">
          {ROOTS.map((d) => (
            <path key={d} d={d} pathLength={1} style={draw(progress.roots)} />
          ))}
        </g>
        <g stroke="rgba(151,48,46,.35)" strokeWidth="1">
          {WATER.map((d) => (
            <path key={d} d={d} pathLength={1} style={draw(progress.rise)} />
          ))}
        </g>
        <g stroke="rgba(151,48,46,.7)" strokeWidth="1.2">
          {STEM.map((d) => (
            <path key={d} d={d} pathLength={1} style={draw(progress.rise)} />
          ))}
        </g>
        <g stroke="#97302e" strokeWidth="1.2">
          {PETALS.map((d) => (
            <path key={d} d={d} pathLength={1} style={draw(progress.bloom)} />
          ))}
          <circle cx="100" cy="150" r="3" fill="#97302e" stroke="none" style={{ opacity: progress.bloom > 0.95 ? 1 : 0 }} />
        </g>
      </svg>
      <ol className={styles.lotusStages}>
        {stages.map((s) => (
          <li key={s.stage} className={active === s.stage ? styles.lotusStageOn : undefined}>
            <span>{s.numeral}</span>
            <strong>{s.name}</strong>
            <em>{s.thread}</em>
          </li>
        ))}
      </ol>
    </div>
  );
}
