# Portfolio Website v1

Portfolio website modern yang dibangun dengan Next.js 15, TypeScript, dan Tailwind CSS.

## 🚀 Deployment

Project ini sudah siap untuk di-deploy ke Netlify dengan konfigurasi yang telah disediakan:

### Cara Deploy ke Netlify:

1. **Push ke GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Setup Netlify**
   - Hubungkan repository GitHub ini ke Netlify
   - Netlify akan otomatis mendeteksi konfigurasi dari `netlify.toml`
   - Build command: `npm run build`
   - Publish directory: `out`

3. **Environment Variables (jika diperlukan)**
   - Tidak ada environment variables khusus yang diperlukan untuk project ini

### Konfigurasi Deployment

Project ini sudah dilengkapi dengan:
- ✅ `netlify.toml` - Konfigurasi build Netlify
- ✅ `.github/workflows/deploy.yml` - GitHub Actions untuk auto-deploy
- ✅ Static export configuration di `next.config.js`
- ✅ Build yang berhasil dengan `npm run build`

### Fitur yang Sudah Siap

- ✅ Next.js 15 dengan static export
- ✅ TypeScript dengan type checking
- ✅ Tailwind CSS untuk styling
- ✅ ESLint untuk code quality
- ✅ Responsive design
- ✅ Optimized build (193 kB first load JS)
- ✅ Static generation untuk performa optimal

## 📁 Struktur Folder

```
src/
├── app/              # Halaman Next.js dengan App Router
├── components/       # Komponen UI
├── data/            # Data statis (projects, dll)
├── hooks/           # Custom React hooks
├── lib/             # Utilitas dan helper functions
└── styles/          # File CSS global
```

## 🛠️ Teknologi

- **Framework**: Next.js 15.5.5
- **Bahasa**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.6
- **Animation**: Framer Motion, GSAP
- **Linting**: ESLint 9
- **Build Tool**: Turbopack (dev), Next.js build (prod)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Jalankan linting
npm run lint
```

## 📝 Notes

- Project ini menggunakan static export, cocok untuk deployment di Netlify, Vercel, atau hosting static lainnya
- Semua assets sudah dioptimalkan untuk production
- Build berhasil menghasilkan static files di folder `out/`