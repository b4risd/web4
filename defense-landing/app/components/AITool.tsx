"use client";

import { useMemo, useState } from "react";

export default function AITool() {
  const [value, setValue] = useState("");

  const chatUrl = useMemo(() => {
    const base = "https://chatgpt.com/?q="; // placeholder; will be replaced with custom GPT later
    return base + encodeURIComponent(value.trim());
  }, [value]);

  const disabled = value.trim().length === 0;

  return (
    <div className="mt-10">
      <div className="mb-3 text-center">
        <h3 className="text-xl md:text-2xl font-semibold">Savunma Sanayi Yapay Zeka Aracı</h3>
        <p className="mt-2 text-sm text-white/70">
          Sorunuzu yazın, ChatGPT üzerinde açın. Yakında özel GPT&rsquo;ye bağlanacak.
        </p>
      </div>

      <div className="relative rounded-2xl border-gradient-cyan glass-card-strong glass-noise p-4 md:p-6">
        <div className="beam beam--cyan size-[280px] -top-20 -left-16 rounded-full"></div>
        <div className="beam beam--emerald size-[240px] -bottom-24 -right-10 rounded-full"></div>

        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={3}
          placeholder="Örn: KAAN programı için yerli aviyonik geliştirme yol haritası çıkar"
          className="w-full rounded-xl bg-black/30 border border-white/15 px-4 py-3 text-sm outline-none focus:border-white/30 resize-y"
        />
        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="text-xs text-white/60">Dilediğiniz promptu yazın ve ChatGPT&rsquo;de açın.</span>
          <a
            href={disabled ? undefined : chatUrl}
            target="_blank"
            rel="nofollow noreferrer"
            aria-disabled={disabled}
            className={`inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition-colors ${
              disabled ? "bg-white/20 text-white/50 cursor-not-allowed" : "bg-white text-black hover:bg-white/90"
            }`}
          >
            ChatGPT&rsquo;de Aç ↗
          </a>
        </div>
      </div>
    </div>
  );
}
