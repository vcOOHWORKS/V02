import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VO2 · Aesthetic & Wellness Clinic",
    short_name: "VO2",
    description: "Doctor-led dermatology and wellness for women in Bengaluru.",
    start_url: "/",
    display: "standalone",
    background_color: "#fcfaf8",
    theme_color: "#fcfaf8",
    icons: [
      { src: "/icon.jpg", sizes: "192x192", type: "image/jpeg" },
      { src: "/apple-icon.jpg", sizes: "192x192", type: "image/jpeg", purpose: "any" },
    ],
  };
}
