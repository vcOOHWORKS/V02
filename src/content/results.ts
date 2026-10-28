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

// Empty frames shown per treatment until real cases exist
// Three fills one row of the gallery exactly
export const placeholderFrames = 3;
