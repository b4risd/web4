import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="container-centered h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded bg-white/10 border border-white/20" />
            <span className="text-sm font-semibold tracking-[0.2em] text-white/90">AEGIS DEFENSE</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition-colors">Yetenekler</a>
            <a href="#programs" className="hover:text-white transition-colors">Programlar</a>
            <a href="#cases" className="hover:text-white transition-colors">Vaka</a>
            <a href="#news" className="hover:text-white transition-colors">Haberler</a>
            <a href="#companies" className="hover:text-white transition-colors">Şirketler</a>
            <a href="#contact" className="hover:text-white transition-colors">İletişim</a>
          </nav>
          {/* buttons removed for landing */}
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-black">
        {/* grid and glow */}
        <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[720px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14),transparent_60%)]" />
        <div className="container-centered py-24 md:py-28 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-3 py-1 text-white/80 text-xs">
              <span>Komuta-Kontrol • C4ISR • Siber Güvenlik • EH</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight">
              Türkiye savunma sanayii için görev-kritik yazılım ve entegrasyon
            </h1>
            <p className="mt-5 text-white/70 text-lg">
              C2/C4ISR, sensör füzyonu, elektronik harp ve güvenli taktik ağ çözümleri. Kara, hava, deniz ve siber alanlarda müşterek harekât için tasarlandı.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <a className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-black font-medium hover:bg-white/90 transition-colors" href="#contact">İletişime Geç</a>
              <a className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-white/90 hover:bg-white/5 transition-colors" href="#features">Yetenekleri İncele</a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-80">
            {["ASELSAN","TUSAŞ","ROKETSAN","HAVELSAN","STM","BAYKAR"].map((logo) => (
              <div key={logo} className="h-10 rounded border border-white/10 flex items-center justify-center text-xs text-white/60">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="features" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Yetenek Alanları</h2>
            <p className="mt-3 text-white/70">Operasyonel üstünlük için uçtan uca, modüler ve güvenli mimari.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "C4ISR ve Ortak Resim",
                desc: "Çoklu sensör (EO/IR, SAR, RF) entegrasyonu, taktik veri füzyonu ve durum farkındalığı.",
              },
              {
                title: "Taktik Veri Bağlantıları",
                desc: "NATO STANAG, Link-16, VMF, JREAP, SATCOM üzerinden düşük gecikmeli veri aktarımı.",
              },
              {
                title: "Elektronik Harp",
                desc: "Sinyal tespit/sınıflandırma, tehdit kütüphanesi, spektrum hâkimiyeti.",
              },
              {
                title: "Otonom Sistemler",
                desc: "İHA/İKA sürü koordinasyonu, rota optimizasyonu ve görev planlama.",
              },
              {
                title: "Siber Güvenlik",
                desc: "Uçtan uca şifreleme, donanım güvenlik modülü (HSM) ve PKI tabanlı kimlik.",
              },
              {
                title: "Komuta-Kontrol",
                desc: "Görev bilgisayarları, taktik harita, hedef tespiti ve angajman yönetimi.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md">
                <div className="size-9 rounded bg-white/10 border border-white/20" />
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Programlar ve Platformlar</h2>
            <p className="mt-3 text-white/70">Türkiye'nin öncü savunma projeleriyle uyumlu, saha kanıtlı çözümler.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "MMU KAAN",
                points: ["Sensör füzyonu ve görev verisi entegrasyonu", "Düşük gecikmeli görev ekranları", "Güvenli veri dağıtımı"],
              },
              {
                name: "MİLGEM / İSTİF",
                points: ["Savaş yönetim sistemi arayüzleri", "EH ve sonar veri bütünlemesi", "Link-16/JREAP entegrasyonu"],
              },
              {
                name: "TCG ANADOLU",
                points: ["Hava/suüstü durum resmi", "Helikopter/İHA koordinasyonu", "Taktik mesajlaşma"],
              },
              {
                name: "AKINCI / TB2",
                points: ["STANAG 4586 yer kontrol arayüzü", "RT video/telemetri akışı", "Sürü görev planlama"],
              },
              {
                name: "HİSAR / SİPER",
                points: ["Angajman planlama ve izleme", "Radar/EO parazit yönetimi", "Güvenli ağ mimarisi"],
              },
              {
                name: "GÖKTUĞ / ATMACA",
                points: ["Silah arayüzleri ve telemetri", "Hedef tespit/teşhis paylaşımı", "Kayıt ve sonrası analiz"],
              },
            ].map((p) => (
              <div key={p.name} className="rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md">
                <div className="text-sm text-white/60">Program</div>
                <div className="mt-1 text-xl font-semibold">{p.name}</div>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {p.points.map((pt) => (
                    <li key={pt}>• {pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product section */}
      <section id="products" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] aspect-video flex items-center justify-center text-white/70 backdrop-blur-md">
              Görev Sistemi Ekranı
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-28 rounded-xl border border-white/10 bg-white/[0.08] backdrop-blur-md hidden md:flex items-center justify-center text-xs text-white/70">
              Taktik Harita Modülü
            </div>
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
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="cases" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Vaka Çalışmaları</h2>
            <p className="mt-3 text-white/70">Saha ortamında ölçülebilir kazanımlar.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md">
              <div className="text-sm text-white/60">Harekât</div>
              <div className="mt-1 text-xl font-semibold">Müşterek İHA-SİHA Görevleri</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>• 6 platform eş zamanlı koordinasyon</li>
                <li>• &lt;50ms veri gecikmesi ile hedef paylaşımı</li>
                <li>• Taktik harita üzerinde görev yeniden planlama</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md">
              <div className="text-sm text-white/60">Deniz</div>
              <div className="mt-1 text-xl font-semibold">MİLGEM Entegrasyonu</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>• Link-16 / JREAP veri alışverişi</li>
                <li>• EH ve sonar verilerinin ortak resme aktarımı</li>
                <li>• Operasyon merkezine güvenli dağıtım</li>
              </ul>
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
              ["<50ms","Veri Gecikmesi"],
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

      {/* News */}
      <section id="news" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Haberler ve Duyurular</h2>
            <p className="mt-3 text-white/70">Güncel gelişmeler ve sürüm notları.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "STANAG 4586 v3.3 desteği yayınlandı", date: "2025-07-01" },
              { title: "MİLGEM arayüz güncellemesi", date: "2025-06-12" },
              { title: "SİPER entegrasyon testi tamamlandı", date: "2025-05-20" },
            ].map((n) => (
              <article key={n.title} className="rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md">
                <div className="text-xs text-white/60">{n.date}</div>
                <h3 className="mt-2 text-lg font-semibold">{n.title}</h3>
                <p className="mt-2 text-sm text-white/70">Detaylar için bizimle iletişime geçin.</p>
                <a className="mt-4 inline-flex text-sm text-white/90 hover:text-white" href="#contact">İletişim →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-t border-white/10 bg-black">
        <div className="container-centered py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Standartlar ve Uyum</h2>
            <p className="mt-3 text-white/70">NATO STANAG, MIL-STD-810/461 ve siber güvenlik çerçeveleri.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-80">
            {["STANAG 4586","Link-16","VMF","MIL-STD-810","MIL-STD-461","DO-178C","FIPS 140-3","ISO 27001"].map((item) => (
              <div key={item} className="h-12 rounded border border-white/10 bg-white/[0.06] backdrop-blur-md flex items-center justify-center text-xs text-white/70">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section id="companies" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Türkiye Savunma Sanayii Şirketleri</h2>
            <p className="mt-3 text-white/70">Öne çıkan üreticiler, entegratörler ve çözüm sağlayıcılar.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "ASELSAN","TUSAŞ","ROKETSAN","HAVELSAN","STM","BAYKAR",
              "BMC","FNSS","OTOKAR","MKE","TEI","KALE",
              "NUROL MAKİNA","KATMERCİLER","VESTEL SAVUNMA","METEKSAN",
              "TUALCOM","SDT","MİLSOFT","ALP HAVACILIK",
              "ARES TERSANESİ","DEARSAN","YONCA-ONUK","SEFİNE",
              "KOÇ SAVUNMA","PROFEN SAVUNMA","ASELSAN KONYA","GÜRSAN",
            ].map((c) => (
              <div key={c} className="h-12 rounded-xl border border-white/10 bg-white/[0.08] backdrop-blur-md flex items-center justify-center text-xs text-white/80">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing (hidden for landing) */}
      <section id="pricing" className="hidden border-t border-white/10 bg-black">
        <div className="container-centered py-20"></div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Sıkça Sorulan Sorular</h2>
          </div>
          <div className="mt-8 max-w-3xl mx-auto divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.08] backdrop-blur-md">
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

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">İletişim</h2>
            <p className="mt-3 text-white/70">Proje, entegrasyon ve saha demonstrasyonu talepleriniz için bize ulaşın.</p>
          </div>
          <div className="mt-8 max-w-2xl mx-auto rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md">
            <form action="mailto:sales@aegisdefense.example" method="post" className="grid md:grid-cols-2 gap-4">
              <input className="h-11 rounded-lg bg-black/30 border border-white/10 px-3 text-sm outline-none focus:border-white/30" placeholder="Ad Soyad" required />
              <input type="email" className="h-11 rounded-lg bg-black/30 border border-white/10 px-3 text-sm outline-none focus:border-white/30" placeholder="E-posta" required />
              <input className="md:col-span-2 h-11 rounded-lg bg-black/30 border border-white/10 px-3 text-sm outline-none focus:border-white/30" placeholder="Kurum" />
              <textarea className="md:col-span-2 min-h-28 rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm outline-none focus:border-white/30" placeholder="Mesaj" />
              <div className="md:col-span-2 flex justify-end">
                <button type="submit" className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-black font-medium hover:bg-white/90 transition-colors">Gönder</button>
              </div>
            </form>
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
            <a href="#contact" className="hover:text-white">İletişim</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
