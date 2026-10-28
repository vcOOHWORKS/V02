import type { StaticImageData } from "next/image";

// Photography for each image slot. Kept apart from the content files so the
// Proxy (which imports treatments.ts) never bundles images.
// Every photo is openly licensed; credits are listed in CREDITS.md.

export type Photo = {
  src: StaticImageData;
  alt: string;
  // CSS object-position, to keep the subject in frame when cropped
  position?: string;
};

// Keys: "hero", a treatment slug, or a journal post slug.
export const photos: Partial<Record<string, Photo>> = {};
