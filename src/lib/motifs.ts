// Traditional Indian motifs, generated from geometry so they stay sharp at any size.
//   padma   – Mughal/Rajput jaali: 8-point stars holding lotus rosettes, laced on the diagonal
//   kolam   – South Indian sikku (knot) kolam: two lines weaving around a row of dots
//   pulli   – the dot grid a kolam is drawn on
//   rosette – a single 8-petal lotus, used as a step marker
//   hoysala – the stellate plan of the Belur/Halebidu temples: squares turned on one centre
//   lotus   – the VO2 logo opened out: 8, 16 and 24 petals from a single bindu
//   ambi    – mango-seed paisley, mirrored in pairs like a sari border

type Pt = [number, number];

const PI = Math.PI;
const STAR8_INNER = Math.cos(PI / 4) / Math.cos(PI / 8);

const f = (n: number) => n.toFixed(2);
const at = (cx: number, cy: number, r: number, a: number): Pt => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
const pp = (p: Pt) => `${f(p[0])} ${f(p[1])}`;

function polygon(cx: number, cy: number, r: number, n: number, rot: number) {
  let d = "";
  for (let k = 0; k < n; k++) d += (k ? "L" : "M") + pp(at(cx, cy, r, rot + (k * 2 * PI) / n));
  return d + "Z";
}

function star(cx: number, cy: number, r: number, n: number, ratio: number, rot: number) {
  let d = "";
  for (let k = 0; k < 2 * n; k++) d += (k ? "L" : "M") + pp(at(cx, cy, k % 2 ? r * ratio : r, rot + (k * PI) / n));
  return d + "Z";
}

function petal(cx: number, cy: number, r0: number, r1: number, a: number, w: number) {
  const p0 = at(cx, cy, r0, a);
  const p1 = at(cx, cy, r1, a);
  const mid = (r0 + r1) / 2;
  return `M${pp(p0)}Q${pp(at(cx, cy, mid, a - w))} ${pp(p1)}Q${pp(at(cx, cy, mid, a + w))} ${pp(p0)}Z`;
}

function petalRing(cx: number, cy: number, r0: number, r1: number, n: number, rot: number) {
  let s = "";
  for (let k = 0; k < n; k++) s += `<path d="${petal(cx, cy, r0, r1, rot + (k * 2 * PI) / n, (PI / n) * 0.78)}"/>`;
  return s;
}

const circle = (cx: number, cy: number, r: number, fill?: string) =>
  `<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(r)}"${fill ? ` fill="${fill}"` : ""}/>`;

const line = (a: Pt, b: Pt) => `<path d="M${pp(a)}L${pp(b)}"/>`;

const svg = (w: number, h: number, inner: string, stroke: string, width = 1) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"><g fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linejoin="round" stroke-linecap="round">${inner}</g></svg>`;

function padma(stroke: string) {
  const S = 120, o = 60, R = 30;
  let s = "";
  for (const [cx, cy] of [[o, o], [0, 0], [S, 0], [0, S], [S, S]] as Pt[]) {
    s += `<path d="${star(cx, cy, R, 8, STAR8_INNER, -PI / 2)}"/>`;
    s += circle(cx, cy, R * 0.36) + circle(cx, cy, 2) + petalRing(cx, cy, R * 0.12, R * 0.62, 8, -PI / 2);
  }
  for (let k = 0; k < 4; k++) {
    const diag = -PI / 4 + (k * PI) / 2;
    s += line(at(o, o, R, diag), at(o, o, o * Math.SQRT2 - R, diag));
    const m = at(o, o, (o * Math.SQRT2) / 2, diag);
    s += `<path d="${polygon(m[0], m[1], 4.5, 4, diag)}"/>`;
    const axis = (k * PI) / 2;
    s += line(at(o, o, R, axis), at(o, o, o, axis));
  }
  s += `<path d="M${R} 0H${S - R}M${R} ${S}H${S - R}M0 ${R}V${S - R}M${S} ${R}V${S - R}"/>`;
  return svg(120, 120, s, stroke);
}

function kolam(stroke: string) {
  const s =
    `<path d="M0 12C6 3 18 3 24 12S42 21 48 12"/><path d="M0 12C6 21 18 21 24 12S42 3 48 12"/>` +
    circle(12, 12, 1.8, stroke) +
    circle(36, 12, 1.8, stroke);
  return svg(48, 24, s, stroke);
}

function pulli(stroke: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">${circle(14, 14, 1.1, stroke)}</svg>`;
}

function rosette(stroke: string) {
  return svg(24, 24, petalRing(12, 12, 2.5, 10, 8, -PI / 2) + circle(12, 12, 2, stroke), stroke);
}

function hoysala(stroke: string) {
  const c = 200;
  let s = "";
  for (let k = 0; k < 6; k++) s += `<path d="${polygon(c, c, 184, 4, (k * PI) / 12)}"/>`;
  for (let k = 0; k < 4; k++) s += `<path d="${polygon(c, c, 122, 4, PI / 4 + (k * PI) / 8)}"/>`;
  s += circle(c, c, 197) + circle(c, c, 130) + circle(c, c, 66) + circle(c, c, 52) + circle(c, c, 5, stroke);
  s += petalRing(c, c, 14, 60, 8, -PI / 2);
  for (let k = 0; k < 24; k++) s += line(at(c, c, 189, (k * PI) / 12), at(c, c, 197, (k * PI) / 12));
  return svg(400, 400, s, stroke, 0.9);
}

function lotus(stroke: string) {
  const c = 200;
  const s =
    petalRing(c, c, 16, 92, 8, -PI / 2) +
    petalRing(c, c, 70, 150, 16, -PI / 2 + PI / 16) +
    petalRing(c, c, 130, 196, 24, -PI / 2) +
    circle(c, c, 16) + circle(c, c, 94) + circle(c, c, 152) + circle(c, c, 198) + circle(c, c, 4, stroke);
  return svg(400, 400, s, stroke, 0.9);
}

function ambi(stroke: string) {
  const one =
    `<path d="M28 40C10 34 8 16 20 8C25 4 32 4 35 8C38 12 33 15 29 13C38 19 40 34 28 40Z"/>` +
    `<path d="M28 33C19 29 18 18 25 13C27 11 30 12 31 14C29 16 32 20 31 23C32 28 31 31 28 33Z"/>` +
    circle(22, 22, 0.9, stroke) + circle(26, 27, 0.9, stroke) + circle(22, 15, 0.9, stroke);
  return svg(112, 44, `${one}<g transform="translate(112 0) scale(-1 1)">${one}</g>`, stroke);
}

export const motifs = { padma, kolam, pulli, rosette, hoysala, lotus, ambi };
export type MotifName = keyof typeof motifs;

const toUrl = (markup: string) => `url("data:image/svg+xml,${encodeURIComponent(markup)}")`;

// Tiling backgrounds exposed as CSS custom properties on <html>.
export function motifCssVars(): Record<string, string> {
  return {
    "--motif-padma": toUrl(padma("rgba(243,239,233,.62)")),
    "--motif-padma-brick": toUrl(padma("rgba(151,48,46,.55)")),
    "--motif-kolam": toUrl(kolam("rgba(242,149,110,.75)")),
    "--motif-kolam-brick": toUrl(kolam("rgba(151,48,46,.85)")),
    "--motif-pulli": toUrl(pulli("rgba(151,48,46,.18)")),
    "--motif-rosette": toUrl(rosette("#97302E")),
    "--motif-ambi": toUrl(ambi("rgba(243,239,233,.75)")),
    "--motif-ambi-brick": toUrl(ambi("rgba(151,48,46,.7)")),
  };
}
