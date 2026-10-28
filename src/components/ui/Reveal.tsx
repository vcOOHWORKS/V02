"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  // Reveal direct children one after another instead of the element as a whole.
  stagger?: boolean;
};

// Lifts content into view as it scrolls in. Anything already on screen at load stays
// visible, so the first frame is always complete; reduced-motion users see no animation.
export function Reveal({ stagger, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || el.getBoundingClientRect().top < window.innerHeight) {
      el.dataset.reveal = "in";
      return;
    }
    el.dataset.reveal = "pre";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.reveal = "in";
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref} data-stagger={stagger ? "" : undefined} {...rest} />;
}
