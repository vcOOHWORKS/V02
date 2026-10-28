import { SiteShell } from "@/components/layout/SiteShell";
import { PageLoader } from "@/components/ui/PageLoader";

// Shown while a page that wasn't prefetched streams in. The nav and footer stay
// in place so only the page area changes. Most VO2 pages are prerendered and
// prefetched, so in production this appears rarely and briefly.
export default function Loading() {
  return (
    <SiteShell transition={false}>
      <PageLoader label="Preparing your page" />
    </SiteShell>
  );
}
