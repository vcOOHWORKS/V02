import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "VO2 · Aesthetic & Wellness Clinic in Bengaluru";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Aesthetic & Wellness · Bengaluru",
    title: "Rise in your",
    emphasis: "own light.",
    subtitle: "Doctor-led care for the modern Indian woman.",
  });
}
