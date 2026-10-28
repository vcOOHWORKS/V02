// Before/after cases for the results gallery.
//
// RULE: only real VO2 clients, with written consent, photographed in the same
// light, lens and angle before and after, with no filters or retouching.
// Never add stock or AI images here, and never invent session counts or
// timelines. Until a treatment has real cases, the gallery shows designed,
// clearly labelled empty frames for it.
//
// To add a case: put both photos in the photo map (src/content/images.ts) under
// the keys given in `before` and `after`, then add an entry below.

export type ResultCase = {
  id: string;
  treatment: string; // a treatment slug
  concern: string; // e.g. "Post-acne marks"
  sessions: string; // e.g. "4 sessions"
  timeline: string; // e.g. "12 weeks"
  doctor: string;
  before: string; // photo map key
  after: string; // photo map key
  consentOnFile: true;
};

export const cases: ResultCase[] = [];

// DEMO ONLY. Stock photos standing in for cases so the gallery can be shown
// before real ones exist. Every demo frame is labelled "Demo images" on the
// site. Set demoMode to false (and delete demo-results-photos.json) before launch.
export const demoMode = true;

type DemoCase = Omit<ResultCase, "consentOnFile" | "before" | "after"> & { n: 1 | 2 };

const demo: DemoCase[] = [
  { id: "demo-skin-1", n: 1, treatment: "skin", concern: "Post-acne marks", sessions: "4 sessions", timeline: "12 weeks", doctor: "Dr. Meera Nair" },
  { id: "demo-skin-2", n: 2, treatment: "skin", concern: "Uneven tone", sessions: "3 sessions", timeline: "10 weeks", doctor: "Dr. Meera Nair" },
  { id: "demo-medi-facials-1", n: 1, treatment: "medi-facials", concern: "Dull, tired skin", sessions: "3 sessions", timeline: "6 weeks", doctor: "Dr. Ananya Rao" },
  { id: "demo-medi-facials-2", n: 2, treatment: "medi-facials", concern: "Congested pores", sessions: "4 sessions", timeline: "8 weeks", doctor: "Dr. Ananya Rao" },
  { id: "demo-laser-1", n: 1, treatment: "laser", concern: "Sun spots", sessions: "3 sessions", timeline: "12 weeks", doctor: "Dr. Meera Nair" },
  { id: "demo-laser-2", n: 2, treatment: "laser", concern: "Unwanted hair", sessions: "6 sessions", timeline: "6 months", doctor: "Dr. Meera Nair" },
  { id: "demo-hair-1", n: 1, treatment: "hair", concern: "Thinning hair", sessions: "6 sessions", timeline: "5 months", doctor: "Dr. Kavya Hegde" },
  { id: "demo-hair-2", n: 2, treatment: "hair", concern: "Postpartum hair fall", sessions: "4 sessions", timeline: "4 months", doctor: "Dr. Kavya Hegde" },
  { id: "demo-nsa-1", n: 1, treatment: "non-surgical-aesthetics", concern: "Soft jawline", sessions: "1 session", timeline: "4 weeks", doctor: "Dr. Ananya Rao" },
  { id: "demo-nsa-2", n: 2, treatment: "non-surgical-aesthetics", concern: "Fine lines", sessions: "1 session", timeline: "2 weeks", doctor: "Dr. Ananya Rao" },
  { id: "demo-pmu-1", n: 1, treatment: "permanent-makeup", concern: "Sparse brows", sessions: "2 sessions", timeline: "6 weeks", doctor: "Dr. Kavya Hegde" },
  { id: "demo-pmu-2", n: 2, treatment: "permanent-makeup", concern: "Uneven brows", sessions: "2 sessions", timeline: "6 weeks", doctor: "Dr. Kavya Hegde" },
  { id: "demo-body-1", n: 1, treatment: "body", concern: "Back acne marks", sessions: "4 sessions", timeline: "10 weeks", doctor: "Dr. Meera Nair" },
  { id: "demo-body-2", n: 2, treatment: "body", concern: "Rough, uneven skin", sessions: "3 sessions", timeline: "8 weeks", doctor: "Dr. Meera Nair" },
  { id: "demo-advanced-1", n: 1, treatment: "advanced", concern: "Freckles and pigmentation", sessions: "3 sessions", timeline: "12 weeks", doctor: "Dr. Ananya Rao" },
  { id: "demo-advanced-2", n: 2, treatment: "advanced", concern: "Loss of firmness", sessions: "2 sessions", timeline: "3 months", doctor: "Dr. Ananya Rao" },
];

export const demoCases = demo.map(({ n, ...c }) => ({
  ...c,
  before: `demo-${c.treatment}-${n}-before`,
  after: `demo-${c.treatment}-${n}-after`,
}));

// Frames shown per treatment until real cases exist. Each shows the treatment's
// own photo, labelled "Real cases coming soon": never as a before or after.
export const placeholderFrames = 1;
