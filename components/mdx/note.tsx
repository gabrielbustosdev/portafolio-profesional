import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface NoteProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Note({ children, title = "Nota", className }: NoteProps) {
  return (
    <div
      className={cn(
        "my-6 flex gap-4 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground shadow-sm not-prose",
        className
      )}
    >
      <Info className="h-5 w-5 shrink-0 text-primary mt-0.5" />
      <div className="flex-1 space-y-1">
        <div className="font-medium text-primary leading-none mb-2">
          {title}
        </div>
        <div className="text-muted-foreground [&_p]:my-0">{children}</div>
      </div>
    </div>
  );
}
