"use client";

import { useEffect, useMemo, useState } from "react";

type Dot = { id: number; size: number; top: number; left: number; dx: number; dy: number };

export default function Ambient(): JSX.Element {
  const [dots, setDots] = useState<Dot[]>([]);
  const count = 14;

  useEffect(() => {
    // Initialize random dots
    const init: Dot[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: 2 + Math.random() * 3,
      top: Math.random() * 100,
      left: Math.random() * 100,
      dx: (Math.random() - 0.5) * 0.06,
      dy: (Math.random() - 0.5) * 0.06,
    }));
    setDots(init);

    let raf = 0;
    const step = () => {
      setDots((prev) =>
        prev.map((d) => {
          let top = d.top + d.dy;
          let left = d.left + d.dx;
          if (top < 0 || top > 100) d.dy *= -1;
          if (left < 0 || left > 100) d.dx *= -1;
          top = Math.max(0, Math.min(100, top));
          left = Math.max(0, Math.min(100, left));
          return { ...d, top, left };
        })
      );
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="ambient-layer">
      {dots.map((d) => (
        <div
          key={d.id}
          className="ambient-dot"
          style={{ top: `${d.top}%`, left: `${d.left}%`, width: d.size, height: d.size }}
        />)
      )}
    </div>
  );
}