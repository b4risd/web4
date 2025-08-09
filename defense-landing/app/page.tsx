import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="container-centered h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded bg-emerald-400/20 border border-emerald-400/40" />
            <span className="text-sm font-semibold tracking-[0.2em] text-white/90">AEGIS DEFENSE</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition-colors">Çözümler</a>
            <a href="#products" className="hover:text-white transition-colors">Ürünler</a>
            <a href="#cases" className="hover:text-white transition-colors">Projeler</a>
            <a href="#pricing" className="hover:text-white transition-colors">Fiyatlandırma</a>
            <a href="#faq" className="hover:text-white transition-colors">SSS</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex h-9 rounded-full border border-white/15 px-4 text-sm text-white/80 hover:bg-white/5 transition-colors">Giriş</button>
            <button className="inline-flex h-9 rounded-full bg-white px-4 text-sm font-medium text-black hover:bg-white/90 transition-colors">Demo</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.18),transparent_60%)]" />
        <div className="container-centered py-24 md:py-28 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs">
              <span>Komuta-Kontrol • ISR • Siber Güvenlik</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight">
              Savunma teknolojilerinde anlık karar üstünlüğü
            </h1>
            <p className="mt-5 text-white/70 text-lg">
              Çok alanlı harekât için durumsal farkındalık, taktik veri füzyonu ve güvenli iletişim sağlayan modüler görev sistemi.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <a className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-black font-medium hover:bg-white/90 transition-colors" href="#cta">Teklif Al</a>
              <a className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-white/90 hover:bg-white/5 transition-colors" href="#features">Daha Fazla Bilgi</a>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-70">
            {["ASELSAN","TAI","ROKETSAN","HAVELSAN","STM","BAYKAR"].map((logo) => (
              <div key={logo} className="h-10 rounded border border-white/10 flex items-center justify-center text-xs text-white/60">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Görev-Kritik Kabiliyetler</h2>
            <p className="mt-3 text-white/70">Operasyonel üstünlük için uçtan uca, güvenli ve modüler mimari.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Ortak Operasyon Resmi",
                desc: "Çoklu sensör entegrasyonu ve veri füzyonu ile birleştirilmiş harekât resmi.",
              },
              {
                title: "Taktik İletişim Güvenliği",
                desc: "Uçtan uca şifreleme ve dayanıklı mesh ağ ile emniyetli veri aktarımı.",
              },
              {
                title: "Otonom Görev Yönetimi",
                desc: "İHA/İKA sürü koordinasyonu ve kısıt tabanlı görev planlama.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="size-9 rounded bg-white/10 border border-white/20" />
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product section */}
      <section id="products" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] aspect-video flex items-center justify-center text-white/60">
            Ürün Ekran Görüntüsü
          </div>
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Aegis Mission OS</h2>
            <p className="mt-4 text-white/70">
              Görev bilgisayarları için optimize edilmiş, düşük gecikmeli, modüler görev işletim sistemi. NATO STANAG uyumlu arayüzler ve SDK ile genişletilebilir.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li>• STANAG 4586, Link-16, VMF entegrasyonları</li>
              <li>• Taktik harita, hedef tespiti, rota/koridor planlama</li>
              <li>• Ayrıcalıklı erişim, loglama ve denetim izleri</li>
            </ul>
            <div className="mt-6">
              <a className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-black font-medium hover:bg-white/90 transition-colors" href="#cta">Teklif Al</a>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-t border-white/10 bg-black">
        <div className="container-centered py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["+120","Ağ Düğümü"],
              ["<50ms","Gecikme"],
              ["99.99%","Uptime"],
              ["MIL-STD","Dayanım"],
            ].map(([kpi, label]) => (
              <div key={label}>
                <div className="text-3xl font-semibold">{kpi}</div>
                <div className="mt-1 text-xs text-white/60">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Esnek Lisanslama</h2>
            <p className="mt-3 text-white/70">İhtiyaca göre modüler paketler.</p>
          </div>
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
                <button className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors">Satın Al</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Sıkça Sorulan Sorular</h2>
          </div>
          <div className="mt-8 max-w-3xl mx-auto divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
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
      <section id="cta" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Saha demonstrasyonu için randevu alın</h3>
          <p className="mt-3 max-w-2xl mx-auto text-white/70">
            Gelişmiş görev yazılımlarımızı gerçek kullanım senaryoları üzerinde deneyimleyin.
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <a className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-black font-medium hover:bg-white/90 transition-colors" href="mailto:sales@aegisdefense.example">Bize Ulaşın</a>
            <a className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-6 text-white/90 hover:bg-white/5 transition-colors" href="#pricing">Planları Gör</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="container-centered py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
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
