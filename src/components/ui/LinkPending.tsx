"use client";

import { useLinkStatus } from "next/link";

// A hairline that sweeps under a link while its page is loading. Must be
// rendered inside a next/link <Link>; the link needs position: relative.
export function LinkPending() {
  const { pending } = useLinkStatus();
  return <span aria-hidden="true" className={`link-pending${pending ? " is-pending" : ""}`} />;
}
