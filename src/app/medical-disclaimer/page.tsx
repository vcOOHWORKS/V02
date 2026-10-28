import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { SiteShell } from "@/components/layout/SiteShell";
import { getLegalDoc } from "@/content/legal";
import { pageMeta } from "@/lib/seo";

const doc = getLegalDoc("medical-disclaimer");

export const metadata: Metadata = pageMeta({ title: doc.title, description: doc.summary, path: "/medical-disclaimer" });

export default function MedicalDisclaimerPage() {
  return (
    <SiteShell>
      <LegalPage doc={doc} />
    </SiteShell>
  );
}
