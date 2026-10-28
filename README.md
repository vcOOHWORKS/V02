# VO2 Website

Marketing site for VO2, a women-first aesthetic and wellness clinic in Bengaluru.
Brand story: [`docs/brand-story.md`](docs/brand-story.md).

## Run

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build (the home page prerenders as static)
pnpm lint
```

Next.js 16 (App Router, Cache Components, Turbopack), React 19, Tailwind CSS v4, TypeScript.

## Where things live

| Path | What it is |
| --- | --- |
| `src/content/site.ts` | **Home-page copy.** Doctors, quotes, journal posts, clinic details, footer. Edit here, not in components. |
| `src/content/treatments.ts` | **The eight treatment categories**: every treatment, duration, sessions, downtime, FAQs, doctor's note and related categories. Drives the home grid, mega menu, `/treatments` and each `/treatments/[slug]` page. |
| `src/content/images.ts` | **Photo map.** One entry per slot (`hero`, a treatment slug, a journal slug, `salon*`, `branch-*`). Filled from `unsplash-photos.json`; a local photo (`kind: "local"`) can replace any slot. Empty slots fall back to a warm tone. |
| `scripts/unsplash/` | Scripts to search Unsplash and record picks (see its README). The API key lives only in `.env.local`. |
| `src/proxy.ts` | Returns a real 404 for unknown treatment slugs (pages stream, so `notFound()` alone can only send a soft 404). |
| `src/app/globals.css` | Brand tokens (`@theme`), shared classes (`.wrap`, `.eyebrow`, `.display`, `.btn-*`, `.grain`, `.tone-light`) and scroll-reveal rules. |
| `src/lib/motifs.ts` | The five traditional motifs, generated from geometry. Tiling versions are exposed as `--motif-*` CSS variables on `<html>`. |
| `src/components/sections/` | One component + CSS Module per home-page section, plus the nav (with the treatments mega menu) and footer. |
| `src/components/treatment/` | The treatment detail page sections and their shared stylesheet. |
| `src/components/layout/SiteShell.tsx` | Nav + footer around each page; pages pass `current` to mark the active section (no `usePathname`, so every route prerenders). |
| `src/components/ui/` | `Motif`, `Reveal`, `ScrollLitText`, `BeforeAfter`, `Logo`, `Photo`, `TreatmentCard`. |
| `public/brand/` | Logo (from vo2wellness.in). |

## Design system

- **Colour.** Brick `#97302E`, vermilion `#E73B40`, coral `#F2956E`, ivory `#F3EFE9`, linen `#E0DAD1` and charcoal `#524F4E` come from the current site and logo. Kohl `#1A0B0C` and kohl-2 `#261011` are derived from brick and used only for the deep closing bands. All are Tailwind colours (`bg-brick`, `text-coral`, …) and CSS variables (`var(--color-brick)`).
- **Type.** Lexend for everything Latin; headlines at weight 200, emphasis at 500 in colour (Lexend has no italic). Tiro Devanagari Hindi for Devanagari accents (`.deva`).
- **Motifs.** Padma jaali, rangoli/kolam, Hoysala star, padma mandala, ambi. Each has a documented meaning and placement in the design preview.
- **Theme.** Light: paper ground with ivory bands; brick is the accent. Only the booking band and footer are deep (`.tone-deep`). Motifs read as brick block-print on ivory.
- **Motion.** Calm. Motifs never move; motion is limited to one-time reveals, hover responses, a slow marquee and the voices rotation. Everything honours `prefers-reduced-motion`.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home |
| `/our-story` | Brand story: the name, the art, and how art, wellness and technology meet |
| `/about` | About us: principles, safety standards, the team (`#experts`) |
| `/branches` | Clinics (Bengaluru only for now) |
| `/treatments`, `/treatments/[slug]` | Treatment index and the eight category pages |
| `/journal`, `/journal/[slug]` | Journal index and articles |
| `/privacy`, `/terms`, `/medical-disclaimer` | Legal pages (**drafts: need legal review**) |

## SEO

- `app/sitemap.ts` → `/sitemap.xml` (every page, real last-modified dates) and `app/robots.ts` → `/robots.txt`
- `app/feed.xml/route.ts` → `/feed.xml`, an RSS 2.0 feed of journal articles, advertised on the home and journal pages
- `app/manifest.ts` → `/manifest.webmanifest`
- Share images drawn in the brand system by `src/lib/og.tsx`: a site default plus one per treatment and per article, all prerendered
- `pageMeta()` in `src/lib/seo.ts` gives each page its canonical URL and complete Open Graph/Twitter tags
- Structured data: `MedicalClinic` and `WebSite` (home), `BreadcrumbList` (inner pages), `FAQPage` (treatments), `BlogPosting` (articles), `AboutPage`
- Unknown treatment or article URLs return a real 404 via `src/proxy.ts`
- Content dates live in the content files (`siteUpdated` in `seo.ts`, `published`/`updated` on articles and legal docs). Update them when content changes.

## Before launch

Placeholders are flagged with `placeholder: true` in `src/content/site.ts` and labelled on the page:

- **Photography.** Slots use Unsplash photos, hotlinked from Unsplash's CDN as their API guidelines require, with every photographer credited on `/credits`. Replace them with the clinic's own shoot when it exists.
- **Demo results (must go before launch).** The results gallery shows stock photos as before/after pairs, labelled "Demo images" on every frame. Set `demoMode = false` in `src/content/results.ts`, delete `src/content/demo-results-photos.json`, and add real, consented cases. Publishing stock photos as clinic results breaks ASCI and NMC advertising rules.
- **Doctors.** Names, credentials and quotes are invented, and the portraits are demo stock photos (`doctor-*` slots in `unsplash-photos.json`, labelled "Demo portrait"). Replace with the real team's own photos, including registration numbers.
- **Founder.** `/founder` is a placeholder profile (name, letter, chapters in `src/content/founder.ts`, demo portrait in the `founder` photo slot). Replace with the founder's own words and photo.
- **Testimonials.** Samples only. Use real ones only with written consent.
- **Clinic details.** Address, phone and WhatsApp number (`clinic.whatsapp`; set it and the floating WhatsApp button and Help panel link to `wa.me`, and a real `clinic.phone` adds a "Call us" link).
- **Legal pages.** Privacy, terms and medical disclaimer are drafts written for an Indian clinic (DPDP Act 2023, Bengaluru jurisdiction). Have a lawyer review them.
- **Clinical copy.** Treatment details and journal articles need review by the medical team.
- **Brand story.** The reading of the name (VO2 as oxygen, breath and vitality) is a proposed interpretation; confirm it with the founders.
- **Branch details.** Street address and phone for Bengaluru (`branches` in `site.ts`). Once set, a "Get directions" button appears automatically.
- **Booking.** `ConsultForm` confirms in the browser only. Connect it to a Server Action once the booking backend (CRM, email or WhatsApp Business) is chosen.

## Notes

- If a CSS change doesn't appear after `pnpm build`, clear Turbopack's cache (`rm -rf .next/cache`). It has served stale output from the Tailwind loader in this project.
- `next.config.ts` limits the Tailwind Turbopack loader to non-module CSS. Without that condition, `.module.css` files lose their scoping and every module class renders as `undefined`.
- Next.js 16 deprecates `next/image`'s `priority` prop; use `loading="eager"` (see `Logo`).
