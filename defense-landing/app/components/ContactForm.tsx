"use client";

import { useState } from "react";

type ApiResponse = { ok: boolean; id?: string; error?: string };

const isStaticExport = typeof process !== "undefined" && process.env.NEXT_RUNTIME !== "edge" && process.env.NEXT_PUBLIC_STATIC_MODE === "1";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = name.trim() && email.trim() && message.trim() && !loading;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      if (isStaticExport) {
        const form = new FormData();
        form.append("name", name);
        form.append("email", email);
        form.append("company", company);
        form.append("message", message);
        const res = await fetch("/contact.php", { method: "POST", body: form });
        const data = (await res.json()) as ApiResponse;
        if (!res.ok || !data.ok) throw new Error(data.error || "Gönderim başarısız");
      } else {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, company, message }),
        });
        const data = (await res.json()) as ApiResponse;
        if (!res.ok || !data.ok) throw new Error(data.error || "Gönderim başarısız");
      }
      setSuccess("Mesajınız alındı. En kısa sürede dönüş yapacağız.");
      setName(""); setEmail(""); setCompany(""); setMessage("");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Bir hata oluştu";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
      <input
        className="h-11 rounded-lg bg-black/30 border border-white/10 px-3 text-sm outline-none focus:border-white/30"
        placeholder="Ad Soyad"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        className="h-11 rounded-lg bg-black/30 border border-white/10 px-3 text-sm outline-none focus:border-white/30"
        placeholder="E-posta"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="md:col-span-2 h-11 rounded-lg bg-black/30 border border-white/10 px-3 text-sm outline-none focus:border-white/30"
        placeholder="Kurum (opsiyonel)"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <textarea
        className="md:col-span-2 min-h-28 rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm outline-none focus:border-white/30"
        placeholder="Mesaj"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <div className="md:col-span-2 flex items-center justify-between gap-3">
        <div className="text-sm">
          {success && <span className="text-emerald-300/90">{success}</span>}
          {error && <span className="text-rose-300/90">{error}</span>}
        </div>
        <button
          type="submit"
          disabled={!canSubmit}
          className={`inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors ${
            !canSubmit ? "bg-white/20 text-white/50 cursor-not-allowed" : "bg-white text-black hover:bg-white/90"
          }`}
        >
          {loading ? "Gönderiliyor..." : "Gönder"}
        </button>
      </div>
    </form>
  );
}