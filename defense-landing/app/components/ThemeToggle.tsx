"use client";

import { useEffect, useState } from "react";

type ThemeMode = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("theme")) as ThemeMode | null;
    const initial: ThemeMode = saved ?? "dark";
    setTheme(initial);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", initial);
    }
  }, []);

  const toggle = (): void => {
    const next: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", next);
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", next);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Açık tema" : "Karanlık tema"}
      className="h-9 px-3 rounded-full border border-white/15 text-white/80 hover:bg-white/5 transition-colors flex items-center gap-2"
    >
      {theme === "dark" ? (
        // Sun icon
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/80"><path d="M12 4V2M12 22v-2M4.93 4.93L3.52 3.52M20.48 20.48l-1.41-1.41M4 12H2M22 12h-2M4.93 19.07l-1.41 1.41M20.48 3.52l-1.41 1.41" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/></svg>
      ) : (
        // Moon icon
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/80"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="currentColor" strokeWidth="1.5"/></svg>
      )}
      <span className="text-xs">{theme === "dark" ? "Açık" : "Koyu"}</span>
    </button>
  );
}