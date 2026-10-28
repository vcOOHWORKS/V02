"use client";

import { useEffect, useRef } from "react";

type Segment = { text: string; em?: boolean };

type Props = {
  segments: Segment[];
  className?: string;
  wordClassName: string;
  litClassName: string;
  emClassName: string;
};

// Words brighten one by one as they cross 72% of the viewport height.
export function ScrollLitText({ segments, className, wordClassName, litClassName, emClassName }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const words = Array.from(root.querySelectorAll<HTMLElement>("[data-word]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      words.forEach((w) => w.classList.add(litClassName));
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const box = root.getBoundingClientRect();
      if (box.bottom < 0 || box.top > window.innerHeight) return;
      const limit = window.innerHeight * 0.72;
      for (const w of words) w.classList.toggle(litClassName, w.getBoundingClientRect().top < limit);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [litClassName]);

  return (
    <p ref={ref} className={className}>
      {segments.map((seg, i) =>
        seg.text.split(" ").map((word, j) => (
          <span key={`${i}-${j}`}>
            <span data-word className={`${wordClassName} ${seg.em ? emClassName : ""}`}>
              {word}
            </span>{" "}
          </span>
        )),
      )}
    </p>
  );
}
