"use client";
import { useEffect, useState } from "react";
/**
 * Fondo animado de hexágonos 3D - Versión Profesional
 * Colores: #656565 (Base), #C0FF6B (Glow), #000000 (Shadows)
 */
export default function HexagonBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Grid configuration
  const rows = 8;
  const cols = 12;

  // Generate structured grid
  const hexagons = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      hexagons.push({
        id: `${r}-${c}`,
        row: r,
        col: c,
        // Create a wave effect based on position
        delay: (r + c) * 0.2,
      });
    }
  }

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden bg-[#1a1a1a]"
      aria-hidden="true"
    >
      {/* Base Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #2a2a2a 0%, #0a0a0a 100%)",
        }}
      />

      {/* Hexagon Grid Container */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: "perspective(1000px) rotateX(20deg) scale(1.1)",
        }}
      >
        <div className="relative w-full h-full max-w-[1920px] flex flex-wrap justify-center content-center gap-0">
          {hexagons.map((hex) => (
            <div
              key={hex.id}
              className="relative w-24 h-28 -ml-4 -mt-8 first:ml-0 md:w-32 md:h-36"
              style={{
                marginLeft: hex.col % 2 === 1 ? "" : "", // Adjust for honeycomb layout if needed, but CSS grid/flex with negative margins is tricky.
                // Better approach for strict honeycomb:
                transform: `translateY(${hex.col % 2 === 1 ? "50%" : "0"})`,
                margin: "-10px", // Overlap slightly
              }}
            >
              <div
                className="w-full h-full animate-pulse-glow"
                style={{
                  animationDelay: `${hex.delay}s`,
                }}
              >
                <svg
                  viewBox="0 0 100 115"
                  className="w-full h-full drop-shadow-2xl"
                >
                  {/* Defs for gradients */}
                  <defs>
                    <linearGradient
                      id={`grad-${hex.id}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#656565" />
                      <stop offset="100%" stopColor="#3a3a3a" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Hexagon Shape */}
                  <path
                    d="M50 0 L93.3 25 V75 L50 100 L6.7 75 V25 Z"
                    fill={`url(#grad-${hex.id})`}
                    stroke="#4a4a4a"
                    strokeWidth="1"
                    className="transition-all duration-1000 ease-in-out"
                  />

                  {/* Inner Detail / Highlight */}
                  <path
                    d="M50 10 L85 30 V70 L50 90 L15 70 V30 Z"
                    fill="none"
                    stroke="#C0FF6B"
                    strokeWidth="2"
                    strokeOpacity="0.1"
                    className="group-hover:stroke-opacity-100 transition-all duration-500"
                  />

                  {/* Active State (simulated via animation) */}
                  <path
                    d="M50 0 L93.3 25 V75 L50 100 L6.7 75 V25 Z"
                    fill="#C0FF6B"
                    opacity="0"
                    className="animate-flash"
                    style={{
                      animationDelay: `${hex.delay}s`,
                    }}
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vignette for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,#000000_100%)] opacity-80 pointer-events-none" />
    </div>
  );
}
