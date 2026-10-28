/* eslint-disable @next/next/no-img-element -- Unsplash photos must be hotlinked from their CDN, which serves its own responsive sizes */
import Image from "next/image";
import { photos, unsplashSrc, withReferral } from "@/content/images";

type Props = {
  // Key into the photo map: "hero", a treatment slug, a journal slug, …
  name: string;
  sizes: string;
  eager?: boolean;
  className?: string;
};

const WIDTHS = [320, 480, 640, 800, 1080, 1366, 1600, 2000];

// Fills its (positioned) parent with the slot's photo. Renders nothing when the
// slot has no photo, so the parent's warm tone shows instead.
export function Photo({ name, sizes, eager = false, className }: Props) {
  const photo = photos[name];
  if (!photo) return null;

  const fill = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: photo.position ?? "center",
  } as const;

  if (photo.kind === "local") {
    return (
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        placeholder="blur"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        className={className}
        style={{ objectFit: "cover", objectPosition: fill.objectPosition }}
      />
    );
  }

  const widths = WIDTHS.filter((w) => w <= photo.width);
  return (
    <img
      src={unsplashSrc(photo.raw, 1080)}
      srcSet={widths.map((w) => `${unsplashSrc(photo.raw, w)} ${w}w`).join(", ")}
      sizes={sizes}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      className={className}
      // The photo's dominant colour shows while it loads
      style={{ ...fill, backgroundColor: photo.color }}
    />
  );
}

export const hasPhoto = (name: string) => Boolean(photos[name]);

// A small credit line for large feature images (Unsplash asks for attribution
// near the photo where practical; every photo is also listed on /credits).
export function PhotoCredit({ name }: { name: string }) {
  const photo = photos[name];
  if (!photo || photo.kind !== "unsplash") return null;
  return (
    <span className="photo-credit">
      Photo:{" "}
      <a href={withReferral(photo.credit.profile)} target="_blank" rel="noopener noreferrer">
        {photo.credit.name}
      </a>{" "}
      /{" "}
      <a href={withReferral("https://unsplash.com/")} target="_blank" rel="noopener noreferrer">
        Unsplash
      </a>
    </span>
  );
}
