import { cn } from "@/lib/utils";
import { Hash, ChevronRight } from "lucide-react";
import Link from "next/link";

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export const Typography = {
  h1: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-12 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = typeof children === "string" ? slugify(children) : undefined;
    return (
      <h2
        id={id}
        className={cn(
          "group mt-12 scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary flex items-center gap-2",
          className
        )}
        {...props}
      >
        {children}
        {id && (
          <Link
            href={`#${id}`}
            className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-primary"
            aria-label="Link to section"
          >
            <Hash className="h-5 w-5" />
          </Link>
        )}
      </h2>
    );
  },
  h3: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  ),
  ul: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-none space-y-2", className)} {...props}>
      {children}
    </ul>
  ),
  ol: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        "my-6 ml-6 list-decimal marker:text-primary marker:font-bold space-y-2",
        className
      )}
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("relative pl-2", className)} {...props}>
      <span className="absolute -left-4 top-1.5 text-primary">
        <ChevronRight className="h-4 w-4" />
      </span>
      {children}
    </li>
  ),
};
