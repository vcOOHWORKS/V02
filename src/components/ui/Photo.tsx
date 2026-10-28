import Image from "next/image";
import { photos } from "@/content/images";

type Props = {
  // Key into the photo map: "hero", a treatment slug or a journal slug.
  name: string;
  sizes: string;
  eager?: boolean;
  className?: string;
};

// Fills its (positioned) parent with the slot's photo. Renders nothing when the
// slot has no photo yet, so the parent's warm tone shows instead.
export function Photo({ name, sizes, eager = false, className }: Props) {
  const photo = photos[name];
  if (!photo) return null;
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
      style={{ objectFit: "cover", objectPosition: photo.position ?? "center" }}
    />
  );
}

export const hasPhoto = (name: string) => Boolean(photos[name]);
