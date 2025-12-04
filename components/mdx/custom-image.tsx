import Image from "next/image";
import { cn } from "@/lib/utils";

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  caption?: string;
}

export function CustomImage({
  src,
  alt,
  width = 800,
  height = 450,
  className,
  caption,
}: CustomImageProps) {
  return (
    <figure className={cn("my-8 not-prose", className)}>
      <div className="overflow-hidden rounded-xl border border-border bg-muted/50 shadow-md">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-cover transition-transform hover:scale-[1.02] duration-500"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
