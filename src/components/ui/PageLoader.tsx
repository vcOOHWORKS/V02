import styles from "./PageLoader.module.css";

// Branded loader: an eight-petal lotus that draws itself, petal by petal.
// Size, stroke and fill are set as SVG attributes as well as in CSS, so the
// graphic stays small and line-drawn even before any stylesheet has loaded.

const f = (n: number) => n.toFixed(1);

function petal(angleDeg: number) {
  const a = (angleDeg * Math.PI) / 180;
  const [cx, cy, r0, r1, w] = [50, 50, 7, 40, 11];
  const p0 = [cx + r0 * Math.cos(a), cy + r0 * Math.sin(a)];
  const p1 = [cx + r1 * Math.cos(a), cy + r1 * Math.sin(a)];
  const m = (r0 + r1) / 2;
  const nx = -Math.sin(a) * w;
  const ny = Math.cos(a) * w;
  const mx = cx + m * Math.cos(a);
  const my = cy + m * Math.sin(a);
  return `M${f(p0[0])} ${f(p0[1])}Q${f(mx + nx)} ${f(my + ny)} ${f(p1[0])} ${f(p1[1])}Q${f(mx - nx)} ${f(my - ny)} ${f(p0[0])} ${f(p0[1])}Z`;
}

const PETALS = Array.from({ length: 8 }, (_, i) => petal(-90 + i * 45));

export function PageLoader({ label = "Loading" }: { label?: string }) {
  return (
    <div className={styles.loader} role="status" aria-live="polite">
      <svg
        viewBox="0 0 100 100"
        width="72"
        height="72"
        fill="none"
        stroke="#97302e"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={styles.svg}
      >
        <circle cx="50" cy="50" r="46" stroke="rgba(151,48,46,.16)" />
        {PETALS.map((d, i) => (
          <path key={d} d={d} pathLength={1} className={styles.petal} style={{ animationDelay: `${i * 0.12}s` }} />
        ))}
        <circle cx="50" cy="50" r="2.4" fill="#97302e" stroke="none" className={styles.bindu} />
      </svg>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
