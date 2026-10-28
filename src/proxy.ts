import { NextResponse, type NextRequest } from "next/server";
import { articles } from "@/content/journal";
import { categories } from "@/content/treatments";

const known: Record<string, Set<string>> = {
  treatments: new Set(categories.map((c) => c.slug)),
  journal: new Set(articles.map((a) => a.slug)),
};

// Treatment and journal pages stream, so a notFound() inside the page can only
// send a soft 404 (status 200 + noindex). Checking the slug here, before
// rendering, lets an unknown page return a real 404 with the branded not-found page.
export function proxy(request: NextRequest) {
  const [, section, slug] = request.nextUrl.pathname.split("/");
  if (slug && known[section] && !known[section].has(slug)) {
    return NextResponse.rewrite(new URL("/404", request.url), { status: 404 });
  }
}

// One segment only, so generated share images (/treatments/<slug>/opengraph-image) pass through.
export const config = {
  matcher: ["/treatments/:slug", "/journal/:slug"],
};
