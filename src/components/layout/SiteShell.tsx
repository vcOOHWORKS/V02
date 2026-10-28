import { ViewTransition, type ReactNode } from "react";
import { Footer } from "@/components/sections/Footer";
import { Nav } from "@/components/sections/Nav";
import { Motif } from "@/components/ui/Motif";

type Props = {
  children: ReactNode;
  current?: "treatments";
  // Off for the route loader, so a slow navigation doesn't animate twice
  transition?: boolean;
};

// Nav and footer around a page. Each page renders this itself (rather than the
// root layout) so it can mark the active section without reading the URL, and
// so the page content can animate in and out on navigation: <ViewTransition>
// only fires enter/exit for components that mount and unmount, which a layout
// never does. Browsers without the View Transitions API navigate normally.
export function SiteShell({ children, current, transition = true }: Props) {
  const main = <main>{children}</main>;
  return (
    <>
      <Nav art={<Motif name="lotus" stroke="rgba(151,48,46,.1)" />} current={current} />
      {transition ? (
        <ViewTransition enter="page-enter" exit="page-exit" default="none">
          {main}
        </ViewTransition>
      ) : (
        main
      )}
      <Footer />
    </>
  );
}
