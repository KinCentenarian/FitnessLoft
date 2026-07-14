import Image from "next/image";
import { getAssetMeta, getAssetPath } from "@/lib/images";
import { cn } from "@/lib/utils";

export function OptimizedImage({
  id,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  id: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const meta = getAssetMeta(id);
  const src = getAssetPath(id);

  if (!meta?.width || !meta?.height) {
    return (
      <img src={src} alt={alt} className={cn("h-full w-full object-cover", className)} />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={meta.width}
      height={meta.height}
      sizes={sizes}
      priority={priority}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
