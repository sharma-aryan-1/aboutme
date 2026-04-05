"use client";

import { useEffect, useState } from "react";

const orbConfigs = [
  // Hero cluster
  { x: 15, y: 8, size: 650, color: "var(--gradient-1)", delay: 0, duration: 40 },
  { x: 72, y: 10, size: 550, color: "var(--gradient-2)", delay: 6, duration: 48 },
  { x: 42, y: 3, size: 480, color: "var(--gradient-3)", delay: 12, duration: 36 },

  // Mid-page
  { x: 88, y: 30, size: 520, color: "var(--gradient-1)", delay: 4, duration: 44 },
  { x: 5, y: 40, size: 480, color: "var(--gradient-3)", delay: 10, duration: 50 },
  { x: 58, y: 48, size: 420, color: "var(--gradient-2)", delay: 16, duration: 38 },

  // Lower page
  { x: 22, y: 62, size: 500, color: "var(--gradient-2)", delay: 8, duration: 46 },
  { x: 80, y: 72, size: 460, color: "var(--gradient-1)", delay: 14, duration: 42 },
  { x: 38, y: 82, size: 540, color: "var(--gradient-3)", delay: 2, duration: 52 },

  // Bottom
  { x: 12, y: 90, size: 440, color: "var(--gradient-1)", delay: 18, duration: 44 },
  { x: 68, y: 94, size: 480, color: "var(--gradient-2)", delay: 7, duration: 48 },
];

export default function AmbientBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {orbConfigs.map((orb, i) => (
        <div
          key={i}
          className="ambient-orb absolute rounded-full blur-[100px]"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle at center, ${orb.color}, transparent 70%)`,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Lighter frosted layer -- lets more light through */}
      <div className="absolute inset-0 backdrop-blur-[60px]" />
    </div>
  );
}
