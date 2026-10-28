import Link from "next/link";
import { Motif } from "@/components/ui/Motif";

export default function NotFound() {
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden bg-paper px-4 text-center">
      <Motif
        name="lotus"
        stroke="rgba(151,48,46,.12)"
        className="pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[min(120vw,900px)] -translate-x-1/2 -translate-y-1/2"
      />
      <div className="relative grid justify-items-center gap-6">
        <h1 className="display">
          This path has <em>no light</em> yet.
        </h1>
        <p className="max-w-md text-[15px] text-charcoal">The page you were looking for has moved or does not exist.</p>
        <Link href="/" className="btn btn-solid mt-4">
          Return home <span className="arrow">→</span>
        </Link>
      </div>
    </main>
  );
}
