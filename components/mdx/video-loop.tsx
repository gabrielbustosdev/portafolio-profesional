import { cn } from "@/lib/utils";

interface VideoLoopProps {
  src: string;
  className?: string;
  caption?: string;
}

export function VideoLoop({ src, className, caption }: VideoLoopProps) {
  return (
    <figure className={cn("my-8 not-prose", className)}>
      <div className="overflow-hidden rounded-xl border border-border bg-muted/50 shadow-md">
        <video
          src={src}
          className="w-full h-auto"
          autoPlay
          loop
          muted
          playsInline
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
