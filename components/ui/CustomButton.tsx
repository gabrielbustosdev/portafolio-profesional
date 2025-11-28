import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
  target,
  rel,
  size = "md",
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-mono font-bold tracking-wider uppercase transition-all duration-300 group focus:outline-none";

  const variants = {
    primary:
      "bg-green-500/10 text-green-400 border border-green-500/40 hover:bg-green-500/20 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]",
    outline:
      "bg-transparent text-green-400 border border-green-500/40 hover:bg-green-500/10 hover:border-green-400",
    ghost:
      "bg-transparent text-green-400/70 hover:text-green-400 hover:bg-green-500/5",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  };

  // Clip path for the cyberpunk shape:
  // - Top-left corner
  // - Top-right corner
  // - Bottom-right cut (chamfer)
  // - Bottom-left corner
  // - Left notch
  const clipPathStyle = {
    clipPath:
      "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 calc(50% + 5px), 5px 50%, 0 calc(50% - 5px))",
  };

  // Combined classes
  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {/* Background/Border shape wrapper */}
      <span className="absolute inset-0 w-full h-full" style={clipPathStyle}>
        {/* This is handled by the parent's background/border, but clip-path cuts it. 
             However, borders on clipped elements are tricky. 
             We simulate the border by using a background on the parent and a slightly smaller inner background.
             But for simplicity with Tailwind borders, we might accept that the border gets cut off.
             
             Better approach for "border" with clip-path:
             Use a parent with the background color (border color) and the clip path.
             Use a child with the content background color and a slightly smaller clip path (inset).
             
             For now, let's stick to the simple clip-path on the main element and see if the user likes the "cut" border look.
             Actually, standard borders get clipped. To have a visible border along the cut, we need SVG or complex CSS.
             
             Let's try a simpler approach first: Just applying the clip-path to the button.
             The "border" class will be clipped, which looks fine for cyberpunk style.
         */}
      </span>

      {/* Left accent line (decorative) */}
      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-green-500/50 -ml-[1px]"></span>

      {/* Content */}
      <span className="relative flex items-center gap-2 z-10">{children}</span>

      {/* Corner accent (bottom right) */}
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-1 translate-y-1"></span>
    </>
  );

  // Since clip-path cuts off standard borders, we'll use a wrapper strategy if we want a perfect border.
  // But for the "cyberpunk" look, a clipped border is often acceptable.
  // Let's refine the style to ensure the shape is visible.

  // We will apply the clip-path directly to the container.
  // To make the border visible *around* the clip-path, we can use a drop-shadow filter instead of a border property,
  // or use an SVG background.
  //
  // Let's try a specific implementation:
  // Use a background color for the "border" and an inner div for the "fill".

  const Container = href ? Link : "button";
  const props = href ? { href, target, rel } : { type, onClick };

  return (
    // @ts-ignore
    <Container
      {...props}
      className={`${baseStyles} ${sizes[size]} ${className} p-[1px] overflow-hidden`} // p-[1px] acts as border width
      style={clipPathStyle}
    >
      {/* Border Layer (Background of parent) */}
      <div
        className={`absolute inset-0 ${
          variant === "primary" ? "bg-green-500/40" : "bg-green-500/20"
        } transition-colors duration-300 group-hover:bg-green-400`}
      ></div>

      {/* Inner Background Layer */}
      <div
        className={`absolute inset-[1px] ${
          variant === "primary" ? "bg-black/90" : "bg-black"
        } transition-colors duration-300`}
        style={clipPathStyle}
      >
        {/* Hover fill effect */}
        <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <span className="relative flex items-center gap-2 z-10 text-green-400 group-hover:text-green-300">
        {children}
      </span>

      {/* Decorative elements */}
      {/* Left notch accent */}
      <div className="absolute left-[1px] top-1/2 -translate-y-1/2 w-[3px] h-[6px] bg-green-500/50"></div>
    </Container>
  );
}
