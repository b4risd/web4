"use client";

import { useEffect, useState } from "react";
import { Russo_One } from "next/font/google";

const russo = Russo_One({ weight: "400", subsets: ["latin"] });

export default function Brand() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${russo.className} absolute left-4 top-1/2 -translate-y-1/2 select-none transition-all duration-300 ${scrolled ? "opacity-55 scale-[0.92]" : "opacity-100 scale-100"}`}>
      <span className="block leading-none text-[20px] md:text-[22px] lg:text-[26px] tracking-[0.32em] gradient-text brand-outline">
        S A V S A
      </span>
    </div>
  );
}