import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="container-centered h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded bg-white/10 border border-white/20" />
            <span className="text-sm font-semibold tracking-[0.2em] text-white/90 text-glow">TR DEFENSE ECOSYSTEM</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#overview" className="hover:text-white transition-colors">Rapor</a>
            <a href="#features" className="hover:text-white transition-colors">Yetenekler</a>
            <a href="#programs" className="hover:text-white transition-colors">Programlar</a>
            <a href="#tier1" className="hover:text-white transition-colors">Tier‑1</a>
            <a href="#tier2" className="hover:text-white transition-colors">Tier‑2</a>
            <a href="#companies" className="hover:text-white transition-colors">Şirketler</a>
            <a href="#contact" className="hover:text-white transition-colors">İletişim</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-black">
        <div className="beam beam--emerald size-[560px] -top-40 -left-20 rounded-full animate-pulse-soft" />
        <div className="beam beam--cyan size-[420px] top-20 -right-28 rounded-full animate-float" />
        {/* grid */}
        <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="container-centered py-24 md:py-28 relative">
          <div className="max-w-3xl mx-auto text-center perspective-1000">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/80 text-xs glass-card chip">
              <span className="text-glow">Türkiye Savunma Sanayii • Ekosistem ve Rapor</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight gradient-text tilt">
              Türkiye savunma sanayii için görev-kritik yazılım ve entegrasyon
            </h1>
            <p className="mt-5 text-white/70 text-lg">
              C2/C4ISR, sensör füzyonu, elektronik harp ve güvenli taktik ağ çözümleri. Kara, hava, deniz ve siber alanlarda müşterek harekât için tasarlandı.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <a className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-black font-medium hover:bg-white/90 transition-colors" href="#contact">İletişime Geç</a>
              <a className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-white/90 hover:bg-white/5 transition-colors" href="#overview">Raporu Oku</a>
            </div>
          </div>

          {/* marquee logos */}
          <div className="relative mt-16 overflow-hidden">
            <div className="flex gap-6 whitespace-nowrap animate-marquee">
              {Array(2)
                .fill([
                  "ASELSAN","TUSAŞ","ROKETSAN","HAVELSAN","STM","BAYKAR",
                  "BMC","FNSS","OTOKAR","MKE","TEI","KALE",
                ])
                .flat()
                .map((logo, i) => (
                  <div key={`${logo}-${i}`} className="h-10 min-w-40 rounded border border-white/10 glass-card chip shine flex items-center justify-center text-xs text-white/80">
                    {logo}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview & KPIs (from report) */}
      <section id="overview" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight gradient-text">Yönetici Özeti ve Genel Bakış</h2>
            <p className="mt-4 text-white/70">
              Türk savunma ve havacılık sanayii, dışa bağımlılıktan küresel rekabete evrilen stratejik bir dönüşüm hikâyesidir. 2002'de 1 milyar $ cirodan,
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

      {/* Tier 1 */}
      <section id="tier1" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight gradient-text">Tier‑1: Küresel Şampiyonlar (Defense News Top 100)</h2>
            <p className="mt-3 text-white/70">ASELSAN, TUSAŞ, ROKETSAN, MKE, ASFAT ve ihracat lideri Baykar'ın öne çıkan rolü.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              name: "ASELSAN (Sıra: 42)",
              bullets: [
                "Savunma elektroniği omurgası: C4I, radar, EH, EO, aviyonik",
                "2023 savunma cirosu: 2.986 milyar $ (+%29)",
                "KAAN için AESA radar MURAD‑600A ve BÜRFİS; ALTAY AKKOR; TCG ANADOLU Savaş Yönetim Sistemi",
                "ASELFLIR‑500: 16+ ülkeye ihracat",
              ]
            },{
              name: "TUSAŞ (Sıra: 50)",
              bullets: [
                "Hava platformlarında milli şampiyon: uçak, helikopter, İHA",
                "2023 savunma cirosu: 2.205 milyar $ (+%49)",
                "Projeler: KAAN, HÜRJET, ANKA/ANKA‑3, GÖKBEY, ATAK",
              ]
            },{
              name: "ROKETSAN (Sıra: 71)",
              bullets: [
                "Füze ve roket sistemleri, hava savunma (HİSAR), zırh çözümleri",
                "2023 savunma cirosu: 1.256 milyar $",
                "ATMACA, UMTAS/OMTAS, ÇAKIR yeni nesil seyir füzesi",
              ]
            },{
              name: "MKE (Sıra: 84)",
              bullets: [
                "Silah ve mühimmat ana üreticisi, 2021'den beri A.Ş.",
                "2023 savunma cirosu: 905.75 milyon $ (+%64)",
                "MPT‑76, BORAN, DENİZHAN; ALTAY 120 mm ana silah",
              ]
            },{
              name: "ASFAT (Sıra: 94)",
              bullets: [
                "Askeri fabrika/tersane tecrübesiyle ihracat odaklı yapı",
                "2023 savunma cirosu: 656.88 milyon $",
                "PN MİLGEM ana yüklenici; ADKG; MEMATT; A400M retrofit",
              ]
            },{
              name: "Baykar (Liste dışı, 1# ihracatçı)",
              bullets: [
                "2023 ihracat: 1.766 milyar $; 34+ ülkeye ürün",
                "Ürünler: TB2, AKINCI, TB3, KIZILELMA, KEMANKEŞ",
              ]
            }].map((item) => (
              <div key={item.name} className="rounded-2xl border border-white/10 glass-card shine p-6">
                <div className="text-sm text-white/60">Şirket</div>
                <h3 className="mt-1 text-lg font-semibold">{item.name}</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {item.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 2 */}
      <section id="tier2" className="border-t border-white/10 bg-black">
        <div className="container-centered py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight gradient-text">Tier‑2: Ana Yükleniciler ve Sistem Entegratörleri</h2>
            <p className="mt-3 text-white/70">Platformların beyni ve sinir sistemi: C4I, SYS, simülasyon, denizaltı ve kara sistemleri.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              name: "HAVELSAN",
              bullets: [
                "ADVENT Savaş Yönetim Sistemi (ağ destekli)",
                "HELSİM, tam kapsamlı simülatörler; siber güvenlik",
                "İhracat: Pakistan, Ukrayna, Endonezya, Şili",
              ]
            },{
              name: "STM",
              bullets: [
                "MİLGEM ve korvet projeleri; İ‑sınıfı ana yüklenici",
                "KARGU, TOGAN, BOYGA taktik mini İHA ailesi",
                "STM500 mini denizaltı: ilk mukavim tekne bloğu (2024)",
              ]
            },{
              name: "FNSS",
              bullets: [
                "PARS 4x4/6x6/8x8; KAPLAN; ZAHA amfibi araç",
                "TEBER, SANCAK kule sistemleri; GÖLGE SÜVARİ İKA",
              ]
            },{
              name: "Otokar",
              bullets: [
                "COBRA, ARMA taktik tekerlekli zırhlı aileleri",
                "ALTAY prototip tasarım/geliştirme ana yüklenici",
              ]
            },{
              name: "BMC",
              bullets: [
                "KİRPİ, VURAN MRAP; ALTAY seri üretim ana yüklenici",
              ]
            },{
              name: "Nurol Makina",
              bullets: [
                "EJDER YALÇIN 4x4, NMS (YÖRÜK) 4x4; modüler görev",
              ]
            },{
              name: "TEI",
              bullets: [
                "PD170 (İHA), TJ300 (füze), TF6000/TF10000 (turbofan)",
                "GE F110/LEAP için kritik parça üretimi",
              ]
            },{
              name: "Alp Havacılık",
              bullets: [
                "Rotor/dinamik parçalar, dişli kutuları, iniş takımı",
                "F‑135 için titanyum/nikel blisk üretimi",
              ]
            }].map((item) => (
              <div key={item.name} className="rounded-2xl border border-white/10 glass-card shine p-6">
                <div className="text-sm text-white/60">Şirket</div>
                <h3 className="mt-1 text-lg font-semibold">{item.name}</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {item.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
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
              name: "Savunma Sanayii Başkanlığı (SSB)",
              text: "850+ projeyi yöneten, teknolojik yol haritalarını belirleyen ve yerlileştirmeyi teşvik eden stratejik planlayıcı."
            },{
              name: "TSKGV",
              text: "ASELSAN, TUSAŞ, ROKETSAN, HAVELSAN, İŞBİR, ASPİLSAN'da çoğunluk hissedar; karı yeniden ekosisteme yönlendiren finansal omurga."
            },{
              name: "Sanayi Kümeleri (SAHA/OSSA)",
              text: "1000'e yakın üye firma ile Avrupa'nın en büyük kümelenmesi; EYDEP, sertifikasyon ve B2B etkinlikleriyle KOBİ'leri ana yüklenicilere bağlar."
            }].map((c) => (
              <div key={c.name} className="rounded-2xl border border-white/10 bg-white/[0.08] backdrop-blur-md p-6">
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
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight gradient-text">Türkiye Savunma Sanayii Şirketleri</h2>
            <p className="mt-3 text-white/70">Öne çıkan üreticiler, entegratörler ve çözüm sağlayıcılar.</p>
          </div>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 glass-card">
            <div className="flex gap-4 whitespace-nowrap animate-marquee p-4">
              {Array(2)
                .fill([
                  "ASELSAN","TUSAŞ","ROKETSAN","HAVELSAN","STM","BAYKAR",
                  "BMC","FNSS","OTOKAR","MKE","TEI","KALE",
                  "NUROL MAKİNA","KATMERCİLER","VESTEL SAVUNMA","METEKSAN",
                  "TUALCOM","SDT","MİLSOFT","ALP HAVACILIK",
                  "ARES TERSANESİ","DEARSAN","YONCA-ONUK","SEFİNE",
                  "KOÇ SAVUNMA","PROFEN SAVUNMA","ASELSAN KONYA","GÜRSAN",
                ])
                .flat()
                .map((c, i) => (
                  <div key={`${c}-${i}`} className="h-10 min-w-44 rounded-lg border border-white/10 bg-black/30 flex items-center justify-center text-xs text-white/80">
                    {c}
                  </div>
                ))}
            </div>
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
