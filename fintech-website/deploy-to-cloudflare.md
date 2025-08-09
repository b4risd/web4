# Cloudflare Pages'e Deployment Rehberi

## 🚀 Hızlı Deployment (Önerilen)

### Yöntem 1: GitHub üzerinden Otomatik Deployment

1. **GitHub Repository Oluşturun:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FinTech website"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADINIZ/fintech-website.git
   git push -u origin main
   ```

2. **Cloudflare Pages'e Bağlayın:**
   - [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
   - "Create a project" → "Connect to Git"
   - GitHub repository'nizi seçin
   - Build ayarları:
     - **Framework preset**: Next.js (Static HTML Export)
     - **Build command**: `npm run build`
     - **Build output directory**: `out`

### Yöntem 2: Manuel Upload (Daha Hızlı)

1. **Cloudflare Dashboard'a gidin:**
   - [https://dash.cloudflare.com](https://dash.cloudflare.com)
   - Pages → "Upload assets"

2. **out klasörünü yükleyin:**
   - `out` klasörü içindeki tüm dosyaları seçin
   - Drag & drop ile yükleyin

## 📁 Upload Edilecek Dosyalar

`/workspace/fintech-website/out/` klasöründeki tüm dosyalar:
- `index.html` (Ana sayfa)
- `_next/` klasörü (CSS, JS dosyaları)
- `404.html` (Hata sayfası)
- `_headers` (Güvenlik ayarları)

## 🌐 Domain Örnekleri

Deployment sonrası siteniz şu tür bir URL'de erişilebilir olacak:
- `https://fintech-website-xxx.pages.dev`
- `https://your-project-name.pages.dev`

## ⚙️ Build Ayarları

- **Framework**: Next.js (Static HTML Export)
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Node.js version**: 18+

## 🔧 Sorun Giderme

Eğer deployment'ta sorun yaşarsanız:

1. **Build loglarını kontrol edin**
2. **Node.js versiyonunu 18+ olarak ayarlayın**
3. **Environment variables'ı kontrol edin**

## 📞 Deployment Sonrası

Deployment başarılı olduktan sonra:
- ✅ HTTPS otomatik olarak aktif
- ✅ CDN global olarak dağıtılır
- ✅ Otomatik SSL sertifikası
- ✅ Hızlı yükleme süreleri

---

**Not**: Bu rehberi takip ettikten sonra siteniz 2-5 dakika içinde canlı olacaktır!