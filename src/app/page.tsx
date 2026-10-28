import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Booking } from "@/components/sections/Booking";
import { Experts } from "@/components/sections/Experts";
import { Hero } from "@/components/sections/Hero";
import { Journal } from "@/components/sections/Journal";
import { Manifesto } from "@/components/sections/Manifesto";
import { Marquee } from "@/components/sections/Marquee";
import { Results } from "@/components/sections/Results";
import { Ritual } from "@/components/sections/Ritual";
import { Treatments } from "@/components/sections/Treatments";
import { Voices } from "@/components/sections/Voices";
import { JsonLd } from "@/components/ui/JsonLd";
import { clinic } from "@/content/site";
import { categories } from "@/content/treatments";
import { absoluteUrl, pageMeta, siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  description:
    "Doctor-led dermatology and wellness for the modern Indian woman. Skin and aesthetics, Ayurveda and recovery, movement and dental care in Bengaluru. Natural results, thoughtful rituals.",
  path: "/",
  rss: true,
});

// The clinic and the website, for search engines. Phone and street address are
// added here once confirmed (see clinic in content/site.ts).
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${siteUrl}/#clinic`,
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl("/brand/vo2-logo.png"),
    image: absoluteUrl("/opengraph-image"),
    description: "A women-first aesthetic and wellness clinic in Bengaluru. Doctor-led care, thoughtful rituals and natural results.",
    email: clinic.email,
    medicalSpecialty: "Dermatology",
    availableService: categories.map((c) => ({ "@type": "MedicalTherapy", name: c.title, url: absoluteUrl(`/treatments/${c.slug}`) })),
    address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    inLanguage: "en-IN",
    publisher: { "@id": `${siteUrl}/#clinic` },
  },
];

export default function Home() {
  return (
    <SiteShell>
      <JsonLd data={structuredData} />
      <Hero />
      <Marquee />
      <Manifesto />
      <Treatments />
      <Ritual />
      <Results />
      <Experts />
      <Voices />
      <Journal />
      <Booking />
    </SiteShell>
  );
}
