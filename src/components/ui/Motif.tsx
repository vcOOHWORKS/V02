import { motifs, type MotifName } from "@/lib/motifs";

type Props = {
  name: MotifName;
  stroke: string;
  className?: string;
};

// Renders a motif as inline SVG on the server. Purely decorative and always still.
export function Motif({ name, stroke, className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`motif ${className}`}
      dangerouslySetInnerHTML={{ __html: motifs[name](stroke) }}
    />
  );
}
