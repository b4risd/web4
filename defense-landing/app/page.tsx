import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded bg-emerald-400/20 border border-emerald-400/40" />
            <span className="text-sm font-medium tracking-widest text-white/80">AEGIS DEFENSE</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#features" className="hover:text-white">Çözümler</a>
            <a href="#products" className="hover:text-white">Ürünler</a>
            <a href="#cases" className="hover:text-white">Projeler</a>
            <a href="#pricing" className="hover:text-white">Fiyatlandırma</a>
            <a href="#faq" className="hover:text-white">SSS</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex h-9 rounded-full border border-white/15 px-4 text-sm text-white/80 hover:bg-white/5">Giriş</button>
            <button className="inline-flex h-9 rounded-full bg-emerald-500 px-4 text-sm font-medium text-black hover:bg-emerald-400">Demo İste</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs">
              <span>Komuta-Kontrol • ISR • Siber Güvenlik</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Savunma teknolojilerinde anlık karar üstünlüğü.
            </h1>
            <p className="mt-4 text-white/70 text-base sm:text-lg">
              Aegis Defense; çok alanlı harekât için durumsal farkındalık, taktik veri füzyonu ve güvenli iletişim sağlayan modüler bir görev sistemidir.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-500 px-6 text-black font-medium hover:bg-emerald-400" href="#cta">Teklif Al</a>
              <a className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-6 text-white/80 hover:bg-white/5" href="#features">Daha Fazla Bilgi</a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-70">
            {["ASELSAN","TAI","ROKETSAN","HAVELSAN","STM","BAYKAR"].map((logo) => (
              <div key={logo} className="h-10 rounded border border-white/10 flex items-center justify-center text-xs text-white/60">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Gerçek Zamanlı Ortak Resim",
              desc: "Çoklu sensör entegrasyonu ve veri füzyonu ile birleştirilmiş harekât resmi.",
            },
            {
              title: "TakTik İletişim Güvenliği",
              desc: "Uçtan uca şifreleme ve dayanıklı mesh ağ ile emniyetli veri aktarımı.",
            },
            {
              title: "Otonom Görev Yönetimi",
              desc: "İHA/İKA sürü koordinasyonu ve kısıt tabanlı görev planlama.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="size-8 rounded bg-emerald-400/20 border border-emerald-400/40" />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product section */}
      <section id="products" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] aspect-video flex items-center justify-center text-white/60">
            Ürün Ekran Görüntüsü
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Aegis Mission OS</h2>
            <p className="mt-4 text-white/70">
              Görev bilgisayarları için optimize edilmiş, düşük gecikmeli, modüler görev işletim sistemi. NATO STANAG uyumlu arayüzler ve SDK ile genişletilebilir.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li>• STANAG 4586, Link-16, VMF entegrasyonları</li>
              <li>• Taktik harita, hedef tespiti, rota/koridor planlama</li>
              <li>• Ayrıcalıklı erişim, loglama ve denetim izleri</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["+120","Ağ Düğümü"],
            ["<50ms","Gecikme"],
            ["99.99%","Uptime"],
            ["MIL-STD","Dayanım"],
          ].map(([kpi, label]) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-semibold">{kpi}</div>
              <div className="mt-1 text-xs text-white/60">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">Esnek Lisanslama</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { name: "Çekirdek", price: "$499/ay", features: ["Temel modüller", "Standart destek", "Yıllık güncelleme"] },
              { name: "Taktik", price: "$1,499/ay", features: ["Gelişmiş entegrasyon", "Öncelikli destek", "Ek güvenlik"] },
              { name: "Kurumsal", price: "Teklif", features: ["Saha kurulumu", "Eğitim", "Bakım/yerinde destek"] },
            ].map((p) => (
              <div key={p.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="text-sm text-white/60">{p.name}</div>
                <div className="mt-2 text-3xl font-semibold">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {p.features.map((ft) => (
                    <li key={ft}>• {ft}</li>
                  ))}
                </ul>
                <button className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-full bg-emerald-500 text-black font-medium hover:bg-emerald-400">Satın Al</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">Sıkça Sorulan Sorular</h2>
          <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
            {[
              ["Askerî standart uyumluluk", "MIL-STD-810G ve MIL-STD-461F gereksinimlerini karşılayan saha konfigürasyonları sunuyoruz."],
              ["Veri güvenliği", "Veri şifreleme, imzalama ve anahtar yönetimi için HSM ve PKI entegrasyonlarımız mevcuttur."],
              ["Entegrasyon", "Mevcut C2/C4ISR sistemleriyle ara yüz sağlayan API ve mesajlaşma katmanı içerir."],
            ].map(([q, a]) => (
              <details key={q} className="group open:bg-white/[0.03]">
                <summary className="cursor-pointer list-none p-4 text-sm text-white/80 group-open:text-white">
                  {q}
                </summary>
                <div className="px-4 pb-4 text-sm text-white/70">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Saha demonstrasyonu için randevu alın</h3>
          <p className="mt-3 max-w-2xl text-white/70">
            Gelişmiş görev yazılımlarımızı gerçek kullanım senaryoları üzerinde deneyimleyin.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-500 px-6 text-black font-medium hover:bg-emerald-400" href="mailto:sales@aegisdefense.example">Bize Ulaşın</a>
            <a className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-6 text-white/80 hover:bg-white/5" href="#pricing">Planları Gör</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <div>© {new Date().getFullYear()} Aegis Defense</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Gizlilik</a>
            <a href="#" className="hover:text-white">Şartlar</a>
            <a href="#" className="hover:text-white">İletişim</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
