import type { Metadata, Viewport } from "next";
import { Lexend } from "next/font/google";
import { motifCssVars } from "@/lib/motifs";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vo2wellness.in"),
  title: {
    default: "VO2 · Aesthetic & Wellness Clinic in Bengaluru",
    template: "%s · VO2 Bengaluru",
  },
  description:
    "Doctor-led dermatology and wellness for the modern Indian woman. Skin, hair, hormonal health and bridal programmes in Bengaluru. Natural results, thoughtful rituals.",
  applicationName: "VO2 Wellness",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "VO2 Wellness",
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#fcfaf8",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={lexend.variable}
      style={motifCssVars() as React.CSSProperties}
    >
      <body>{children}</body>
    </html>
  );
}
