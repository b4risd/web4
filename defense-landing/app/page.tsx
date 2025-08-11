/* eslint-disable react/no-unescaped-entities */
import AITool from "./components/AITool";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <h1 className="sr-only">Savunma Sanayi Şirketleri - Türkiye & Global | SAVSA.TR</h1>
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-transparent border-0 relative">
        <div className="absolute inset-0 moving-grid pointer-events-none" aria-hidden="true" />
        <div className="container-centered h-16 flex items-center justify-center relative z-10">
          {/* No logo */}
          <div className="rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-3 py-2">
            <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] sm:text-sm text-white/70 px-2">
              <a href="#overview" className="hover:text-white transition-colors">Rapor</a>
              <a href="#features" className="hover:text-white transition-colors">Yetenekler</a>
              <a href="#programs" className="hover:text-white transition-colors">Programlar</a>
              <a href="#top20" className="hover:text-white transition-colors">Top 20</a>
              <a href="#architects" className="hover:text-white transition-colors">Mimarlar</a>
              <a href="#contact" className="hover:text-white transition-colors">İletişim</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-black">
        <div className="beam beam--emerald size-[560px] -top-40 -left-20 rounded-full animate-pulse-soft" />
        <div className="beam beam--cyan size-[420px] top-20 -right-28 rounded-full animate-float" />
        {/* grid */}
        <div className="absolute inset-0 moving-grid" />
        <div className="container-centered py-20 md:py-24 relative">
          <div className="max-w-3xl mx-auto text-center perspective-1000">
            {/* centered, larger flag above the chip */}
            <img src="/flags/tr.svg" alt="Türkiye Bayrağı" className="h-7 md:h-8 w-auto mx-auto mb-2"/>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/80 text-xs glass-card chip chip-ambient">
              <span className="text-glow">Türkiye Savunma Sanayi</span>
            </div>
            <h2 className="hero-heading mt-8 md:text-6xl font-semibold tracking-tight leading-[1.2] pb-1 gradient-text tilt">
              Türkiye'nin Savunma Sanayi Ekosistemi
            </h2>
            <p className="mt-5 text-white/70 text-lg">
              Türkiye'nin önde gelen savunma sanayi şirketlerini keşfedin. Teknoloji, inovasyon ve milli güvenlik alanında faaliyet gösteren kuruluşları inceleyin.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <a className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-black font-medium hover:bg-white/90 transition-colors" href="#contact">İletişime Geç</a>
              <a className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-white/90 hover:bg-white/5 transition-colors" href="#overview">Raporu Oku</a>
            </div>
            {/* AI tool with tighter spacing */}
            <div className="mt-6">
              <AITool />
            </div>
          </div>
        </div>
      </section>

      {/* Overview & KPIs (from report) */}
      <section id="overview" className="border-t border-white/10 bg-black section-tint-emerald">
        <div className="container-centered pt-14 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight gradient-text">Yönetici Özeti ve Genel Bakış</h2>
            <p className="mt-4 text-white/70">
              Türk savunma ve havacılık sanayi, dışa bağımlılıktan küresel rekabete evrilen stratejik bir dönüşüm hikâyesidir. 2002'de 1 milyar $ cirodan,
              2024'te 15 milyar $ üzeri seviyeye; ihracatta ise 248 milyon $'dan 2024'te 7.1 milyar $'a ulaşarak sürdürülebilir bir büyüme yakalamıştır.
              2028 hedefleri 26 milyar $ ciro ve 11 milyar $ ihracattır.
            </p>
          </div>

          {/* KPI Table */}
          <div className="mt-10 rounded-2xl border border-white/10 glass-card p-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-white/80">
                <tr className="border-b border-white/10">
                  <th className="py-3 px-3">Metrik</th>
                  <th className="py-3 px-3">2022</th>
                  <th className="py-3 px-3">2023</th>
                  <th className="py-3 px-3">2024 (son)</th>
                  <th className="py-3 px-3">2028 hedefi</th>
                </tr>
              </thead>
              <tbody className="text-white/70">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-3">Toplam Ciro</td>
                  <td className="py-3 px-3">12.2 milyar $</td>
                  <td className="py-3 px-3">15.07 milyar $</td>
                  <td className="py-3 px-3">15+ milyar $</td>
                  <td className="py-3 px-3">26 milyar $</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-3">Toplam İhracat</td>
                  <td className="py-3 px-3">4.4 milyar $</td>
                  <td className="py-3 px-3">5.5 milyar $</td>
                  <td className="py-3 px-3">7.1 milyar $</td>
                  <td className="py-3 px-3">11 milyar $</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-3">Ar‑Ge Harcamaları</td>
                  <td className="py-3 px-3">1.6 milyar $</td>
                  <td className="py-3 px-3">2.62 milyar $</td>
                  <td className="py-3 px-3">Veri yok</td>
                  <td className="py-3 px-3">—</td>
                </tr>
                <tr>
                  <td className="py-3 px-3">İstihdam</td>
                  <td className="py-3 px-3">81,132</td>
                  <td className="py-3 px-3">90,969</td>
                  <td className="py-3 px-3">Veri yok</td>
                  <td className="py-3 px-3">150,000+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-white/70 max-w-4xl mx-auto">
            <p>
              Yerlilik oranı %20'lerden %80+'a çıkarılırken, sektör sürdürülebilir ihracata bağımlılık geliştirerek küresel pazarlarda kalıcı bir yer edinmiştir. 2023'te Ar‑Ge harcaması 2.6 milyar $'ı aşmıştır.
            </p>
          </div>
        </div>
      </section>

      {/* Top 20 Şirket */}
      <section id="top20" className="border-t border-white/10 bg-black section-tint-cyan">
        <div className="container-centered py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight gradient-text">Türkiye Savunma Sanayi: Top 20 Şirket</h2>
            <p className="mt-3 text-white/70">Lider firmalar tek sütunda, kısa özetle.</p>
          </div>
          <div className="mt-10 max-w-3xl mx-auto space-y-3">
            {[
              { name: "ASELSAN A.Ş.", category: "Savunma elektroniği", url: "https://www.aselsan.com" },
              { name: "Türk Havacılık ve Uzay Sanayi (TUSAŞ)", category: "Havacılık ve uzay platformları", url: "https://www.tusas.com" },
              { name: "ROKETSAN A.Ş.", category: "Roket ve füze sistemleri", url: "https://www.roketsan.com.tr" },
              { name: "Makine ve Kimya Endüstrisi (MKE) A.Ş.", category: "Silah ve mühimmat", url: "https://www.mke.gov.tr" },
              { name: "Askeri Fabrika ve Tersane İşletme (ASFAT) A.Ş.", category: "Askeri fabrika/tersane projeleri", url: "https://www.asfat.com.tr" },
              { name: "Baykar Teknoloji", category: "İnsansız hava araçları (İHA/TİHA)", url: "https://www.baykartech.com" },
              { name: "HAVELSAN A.Ş.", category: "C4I, SYS, simülasyon ve siber güvenlik", url: "https://www.havelsan.com.tr" },
              { name: "STM", category: "Askeri deniz platformları, İHA ve siber güvenlik", url: "https://www.stm.com.tr" },
              { name: "FNSS Savunma Sistemleri A.Ş.", category: "Zırhlı kara araçları", url: "https://www.fnss.com.tr" },
              { name: "Otokar Otomotiv ve Savunma Sanayi A.Ş.", category: "Taktik tekerlekli zırhlı araçlar", url: "https://www.otokar.com.tr" },
              { name: "BMC Otomotiv Sanayi ve Ticaret A.Ş.", category: "MRAP ve ALTAY seri üretim", url: "https://www.bmc.com.tr" },
              { name: "Nurol Makina ve Sanayi A.Ş.", category: "4x4 zırhlı kara araçları", url: "https://www.nurolmakina.com.tr" },
              { name: "TEI (TUSAŞ Motor Sanayi A.Ş.)", category: "Havacılık motorları", url: "https://www.tei.com.tr" },
              { name: "Alp Havacılık Sanayi ve Ticaret A.Ş.", category: "Uçuş kritik parçalar ve tahrik sistemleri", url: "https://www.alp.com.tr" },
              { name: "Sedef Gemi İnşaatı A.Ş.", category: "Askeri gemi inşası", url: "https://www.sedefshipyard.com" },
              { name: "Anadolu Tersanesi (ADİK)", category: "Askeri gemi inşası (LST/LCT)", url: "https://www.anadolushipyard.com" },
              { name: "Dearsan Gemi İnşaat Sanayi A.Ş.", category: "Karakol botu/korvet inşası", url: "https://www.dearsan.com" },
              { name: "Yonca-Onuk Ortaklığı A.O.", category: "Yüksek süratli devriye botları (MRTP)", url: "https://www.yonca-onuk.com" },
              { name: "Meteksan Savunma Sanayi A.Ş.", category: "Radar, sonar, veri bağı; SİDA", url: "https://www.meteksan.com" },
              { name: "Sarsılmaz Silah Sanayi A.Ş.", category: "Hafif silahlar ve makineli tüfekler", url: "https://www.sarsilmaz.com" },
            ].map((c, idx) => (
              <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/12 bg-white/[0.05] p-4 flex items-center justify-between hover:bg-white/[0.08] transition-colors">
                <div>
                  <h3 className="text-white/90 text-sm font-medium">{idx + 1}. {c.name}</h3>
                  <p className="text-xs text-white/70 mt-0.5">{c.category}</p>
                </div>
                <span className="text-white/40 text-xs">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Architects */}
      <section id="architects" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ekosistemin Mimarları</h2>
            <p className="mt-3 text-white/70">SSB, TSKGV ve sanayi kümeleri (SAHA İstanbul, OSSA) ekosistemin omurgasıdır.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[{
              name: "Savunma Sanayi Başkanlığı (SSB)",
              text: "850+ projeyi yöneten, teknolojik yol haritalarını belirleyen ve yerlileştirmeyi teşvik eden stratejik planlayıcı.",
              variant: 'emerald'
            },{
              name: "TSKGV",
              text: "ASELSAN, TUSAŞ, ROKETSAN, HAVELSAN, İŞBİR, ASPİLSAN'da çoğunluk hissedar; karı yeniden ekosisteme yönlendiren finansal omurga.",
              variant: 'rose'
            },{
              name: "Sanayi Kümeleri (SAHA/OSSA)",
              text: "1000'e yakın üye firma ile Avrupa'nın en büyük kümelenmesi; EYDEP, sertifikasyon ve B2B etkinlikleriyle KOBİ'leri ana yüklenicilere bağlar.",
              variant: 'cyan'
            }].map((c) => (
              <div key={c.name} className="rounded-2xl glass-noise p-6 glass-tint-cyan border-gradient-cyan">
                <div className="text-sm text-white/60">Kurum</div>
                <h3 className="mt-1 text-lg font-semibold">{c.name}</h3>
                <p className="mt-3 text-sm text-white/70">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Sonuç ve Yol Haritası</h2>
            <p className="mt-3 text-white/70">
              Türkiye, platform ve entegrasyonda güçlü; sürdürülebilir büyüme için yeni pazarlara açılım ve çekirdek teknolojilerde (motor, transmisyon, gelişmiş sensörler) atılım kritik önemdedir. Hedef: küresel tedarikçi liginde kalıcı yer.
            </p>
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
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="currentColor" strokeOpacity=".8"/><circle cx="12" cy="12" r="7" stroke="currentColor" strokeOpacity=".8"/></svg>
                ),
              },
              {
                title: "Taktik Veri Bağlantıları",
                desc: "NATO STANAG, Link-16, VMF, JREAP, SATCOM üzerinden düşük gecikmeli veri aktarımı.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 8l8 8 4-4 4 4" stroke="currentColor" strokeOpacity=".8"/><circle cx="6" cy="6" r="2" fill="currentColor"/></svg>
                ),
              },
              {
                title: "Elektronik Harp",
                desc: "Sinyal tespit/sınıflandırma, tehdit kütüphanesi, spektrum hâkimiyeti.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h4l2 4 4-8 2 4h8" stroke="currentColor" strokeOpacity=".8"/></svg>
                ),
              },
              {
                title: "Otonom Sistemler",
                desc: "İHA/İKA sürü koordinasyonu, rota optimizasyonu ve görev planlama.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="2" fill="currentColor"/><circle cx="16" cy="16" r="2" fill="currentColor"/><path d="M8 8l6 6" stroke="currentColor" strokeOpacity=".8"/></svg>
                ),
              },
              {
                title: "Siber Güvenlik",
                desc: "Uçtan uca şifreleme, donanım güvenlik modülü (HSM) ve PKI tabanlı kimlik.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeOpacity=".8"/><path d="M8 10V8a4 4 0 118 0v2" stroke="currentColor" strokeOpacity=".8"/></svg>
                ),
              },
              {
                title: "Komuta-Kontrol",
                desc: "Görev bilgisayarları, taktik harita, hedef tespiti ve angajman yönetimi.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeOpacity=".8"/><path d="M3 18h18" stroke="currentColor" strokeOpacity=".8"/></svg>
                ),
              },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/15 bg-white/[0.10] p-6 backdrop-blur-md accent-corner">
                <div className="size-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white/80">
                  {f.icon}
                </div>
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
              <div key={p.name} className="rounded-2xl border border-white/15 bg-white/[0.10] backdrop-blur-md p-6 accent-corner">
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
        <div className="container-centered py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Savunma Sanayinde Güncel Çalışmalar</h2>
            <p className="mt-3 text-white/70">Güncel bilgiler, Ar‑Ge çalışmaları ve sektör gelişmeleri.</p>
          </div>
          <div className="mt-8 mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "https://www.youtube.com/embed/nbDsUKlRvP0",
              "https://www.youtube.com/embed/SA0ObMNguio",
              "https://www.youtube.com/embed/qqBOAC4tTh8",
              "https://www.youtube.com/embed/P90RCdAJ5ng",
            ].map((src) => (
              <div key={src} className="rounded-xl border border-white/10 bg-white/[0.06] aspect-video overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`${src}`}
                  title="Savunma Sanayi Videosu"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ))}
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
              ["5","Tier‑1 Şirket"],
              ["7.1B$","2024 İhracat"],
              ["2.6B$","2023 Ar‑Ge"],
              ["1000+","Küme Üyesi"],
            ].map(([kpi, label]) => (
              <div key={label} className="glass-card py-6 rounded-xl">
                <div className="text-3xl font-semibold">{kpi}</div>
                <div className="mt-1 text-xs text-white/70">{label}</div>
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
              <article key={n.title} className="rounded-2xl border border-white/15 bg-white/[0.10] backdrop-blur-md p-0 overflow-hidden">
                <div className="bg-white/[0.06] px-6 py-3 text-xs text-white/80 border-b border-white/10">Haber & Duyuru · {n.date}</div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{n.title}</h3>
                  <p className="mt-2 text-sm text-white/70">Detaylar için bizimle iletişime geçin.</p>
                  <a className="mt-4 inline-flex text-sm text-white/90 hover:text-white" href="#contact">İletişim →</a>
                </div>
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
              [
                "Türkiye'nin savunma sanayii ihracatındaki ana itici güç nedir?",
                "İnsansız sistemler (özellikle S/İHA'lar), roket‑füze ve deniz platformları başlıca lokomotiflerdir. 2024'te 7.1B$ ile ihracat rekoru kırıldı; Baykar, TUSAŞ ve deniz projeleri (MİLGEM) öne çıkıyor."
              ],
              [
                "KAAN, HÜRJET, GÖKBEY gibi projeler ekosisteme nasıl etki ediyor?",
                "Bu platformlar; aviyonik, radar (AESA), güç aktarma ve yazılım ekosisteminde yüzlerce KOBİ'yi besleyerek teknoloji tabanını genişletiyor; Ar‑Ge ve nitelikli istihdamı artırıyor."
              ],
              [
                "Hangi standart ve sertifikasyonlar kritik?",
                "Askerî dayanım için MIL‑STD‑810/461, yazılım/havacılık için DO‑178C, üretim kalitesi için AS9100, kripto için FIPS 140‑3 ve güvenli geliştirme süreçleri."
              ],
              [
                "Tedarik zincirinde yerlileşme oranı hangi seviyede?",
                "%20'lerden %80+'a yükseldi. Ancak motor, transmisyon ve ileri sensörlerde atılım ihtiyacı devam ediyor; TF6000/TF10000, KTJ‑3200/1750 gibi projeler bu açığı hedefliyor."
              ],
              [
                "Şirket seçerken nelere bakılmalı?",
                "Program referansları (MİLGEM, KAAN vb.), uluslararası sertifikalar (AS9100, NADCAP), tedarik sürekliliği, siber‑fiziksel güvenlik olgunluğu ve ihracat uyum (ITAR/ML) kriterleri."
              ],
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
            <p className="mt-3 text-white/70">Her türlü soru, görüş ve öneri için bize ulaşmaktan çekinmeyin.</p>
            <p className="mt-2 text-white/80">E-posta: <a href="mailto:info@savsa.tr" className="font-bold text-base md:text-lg gradient-text text-glow">info@savsa.tr</a></p>
          </div>
          <div className="mt-8 max-w-2xl mx-auto rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="container-centered py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <div>© {new Date().getFullYear()} SAVSA.TR</div>
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
