import { cases, placeholderFrames } from "@/content/results";
import { categories } from "@/content/treatments";
import { ResultsGalleryClient, type Slot } from "./ResultsGalleryClient";

type Props = {
  // Show only one treatment's cases (treatment pages)
  treatment?: string;
  // Filter chips for every treatment (the /results page)
  filters?: boolean;
  limit?: number;
};

// Builds the gallery from real, consented cases. A treatment with no cases yet
// gets clearly labelled empty frames; nothing about a case is ever invented.
export function ResultsGallery({ treatment, filters = false, limit }: Props) {
  const scope = treatment ? categories.filter((c) => c.slug === treatment) : categories;
  const slots: Slot[] = scope.flatMap((c): Slot[] => {
    const real = cases.filter((x) => x.treatment === c.slug);
    if (real.length) {
      return real.map((x) => ({
        id: x.id,
        slug: c.slug,
        treatment: c.title,
        tone: c.tone,
        real: true as const,
        concern: x.concern,
        sessions: x.sessions,
        timeline: x.timeline,
        doctor: x.doctor,
        before: x.before,
        after: x.after,
      }));
    }
    return Array.from({ length: placeholderFrames }, (_, i) => ({
      id: `${c.slug}-frame-${i + 1}`,
      slug: c.slug,
      treatment: c.title,
      tone: c.tone,
      real: false as const,
    }));
  });

  // With several treatments, interleave them so the mosaic mixes categories
  const ordered = treatment ? slots : interleave(slots);
  const shown = limit ? ordered.slice(0, limit) : ordered;
  const chips = filters ? scope.map((c) => ({ slug: c.slug, title: c.title })) : null;

  return <ResultsGalleryClient slots={shown} chips={chips} />;
}

function interleave(slots: Slot[]) {
  const bySlug = new Map<string, Slot[]>();
  for (const s of slots) bySlug.set(s.slug, [...(bySlug.get(s.slug) ?? []), s]);
  const queues = [...bySlug.values()];
  const out: Slot[] = [];
  while (queues.some((q) => q.length)) for (const q of queues) if (q.length) out.push(q.shift()!);
  return out;
}
