import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { SiteShell } from "@/components/layout/SiteShell";
import { getLegalDoc } from "@/content/legal";
import { pageMeta } from "@/lib/seo";

const doc = getLegalDoc("privacy");

export const metadata: Metadata = pageMeta({ title: doc.title, description: doc.summary, path: "/privacy" });

export default function PrivacyPage() {
  return (
    <SiteShell>
      <LegalPage doc={doc} />
    </SiteShell>
  );
}
