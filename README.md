# 🚀 Landing Pages Collection

Koleksi landing pages modern dan responsif yang dibangun dengan React, Vite, dan TailwindCSS. Repository ini berisi berbagai template landing page untuk berbagai jenis bisnis dengan desain yang menarik dan interaktif.

## 📋 Daftar Project

### 1. 🔧 ElBengkel - Bengkel Motor & Mobil
Landing page untuk layanan bengkel kendaraan dengan fitur lengkap dan efek 3D yang menarik.

**Lokasi:** `Landing_Pages_ElBengkel/`

**Fitur Utama:**
- ✨ Header & Navigation responsif dengan mobile menu
- 🎯 Hero Section dengan animated elements dan CTA buttons
- 🛠️ Services Section - 6 layanan utama dengan card 3D hover effects
- 💎 Features 3D Section - 4 keunggulan dengan efek 3D dan shine effects
- 🖼️ Gallery dengan modal popup (8 items)
- 📊 Statistics dengan animated counters
- ⭐ Testimonials dengan star rating
- 📞 Contact Section dengan form kontak lengkap
- 🔝 Footer dengan social media links dan scroll to top

**Color Scheme:**
- Primary: `#FF6B35` (Orange)
- Secondary: `#004E89` (Dark Blue)
- Dark: `#1a1a1a`
- Light: `#f5f5f5`

**Efek 3D:**
- Perspective transforms
- Hover scale & rotate effects
- Floating animations
- Shine effects
- Animated background shapes
- Staggered animations

---

### 2. ☕ KopiItem - Coffee Shop
Landing page modern untuk kedai kopi dengan desain yang elegan dan user-friendly.

**Lokasi:** `Landing_Pages_KopiItem/`

**Fitur Utama:**
- 🎨 Hero Section dengan visual menarik
- ☕ Menu Section untuk menampilkan produk kopi
- ✨ Features Section untuk keunggulan bisnis
- 💬 Testimonials dari pelanggan
- ❓ FAQ Section untuk pertanyaan umum
- 📱 Fully responsive design
- 🎭 Smooth animations dengan Framer Motion

---

### 3. 🍞 RotiFreeza - Bakery & Pastry
Landing page untuk toko roti dan kue dengan tampilan yang fresh dan appetizing.

**Lokasi:** `Landing_Pages_RotiFreeza/`

**Fitur Utama:**
- 🎯 Hero Section dengan CTA yang jelas
- 🍰 Products Section untuk showcase produk
- 🖼️ Gallery untuk menampilkan foto produk
- ⭐ Features Section untuk highlight keunggulan
- 💬 Testimonials dari pelanggan puas
- 📞 CTA Section untuk konversi
- 📱 Mobile-first responsive design

---

## 🛠️ Tech Stack

Semua project menggunakan teknologi modern yang sama:

- **React** `18.2.0` - Library JavaScript untuk UI
- **Vite** `7.1.12` - Build tool yang cepat dan modern
- **TailwindCSS** `3.4.14` - Utility-first CSS framework
- **Framer Motion** `11.2.6` - Library untuk animasi yang smooth
- **Lucide React** `0.441.0` - Icon library yang modern dan customizable

### Dev Dependencies:
- `@vitejs/plugin-react` - Plugin React untuk Vite
- `autoprefixer` - PostCSS plugin untuk vendor prefixes
- `postcss` - Tool untuk transformasi CSS
- `stylelint` - Linter untuk CSS

---

## 🚀 Quick Start

### Prerequisites
Pastikan Anda sudah menginstall:
- Node.js (v16 atau lebih tinggi)
- npm atau yarn

### Installation

1. **Clone repository:**
```bash
git clone <repository-url>
cd Landing_Pages
```

2. **Pilih project yang ingin dijalankan:**

#### Untuk ElBengkel:
```bash
cd Landing_Pages_ElBengkel
npm install
npm run dev
```

#### Untuk KopiItem:
```bash
cd Landing_Pages_KopiItem
npm install
npm run dev
```

#### Untuk RotiFreeza:
```bash
cd Landing_Pages_RotiFreeza
npm install
npm run dev
```

3. **Buka browser:**
```
http://localhost:5173
```

---

## 📦 Available Scripts

Setiap project memiliki script yang sama:

```bash
# Development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

---

## 📱 Responsive Design

Semua landing page dioptimalkan untuk berbagai ukuran layar:

- 📱 **Mobile:** 320px - 767px
- 📱 **Tablet:** 768px - 1023px
- 💻 **Desktop:** 1024px ke atas

---

## 🎨 Customization

### Mengubah Warna
Setiap project menggunakan TailwindCSS, Anda dapat mengubah color scheme di file `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#YOUR_COLOR',
        secondary: '#YOUR_COLOR',
        // ... tambahkan warna lainnya
      }
    }
  }
}
```

### Mengubah Konten
Semua konten dapat diubah langsung di file component yang ada di folder `src/components/`.

---

## 📂 Project Structure

```
Landing_Pages/
├── Landing_Pages_ElBengkel/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── Landing_Pages_KopiItem/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── Landing_Pages_RotiFreeza/
    ├── src/
    │   ├── components/
    │   ├── App.jsx
    │   └── main.jsx
    ├── public/
    ├── package.json
    └── vite.config.js
```

---

## ✨ Features Highlights

### Animasi & Interaktivitas
- ✅ Smooth scroll animations
- ✅ Hover effects yang menarik
- ✅ Page transitions
- ✅ Loading animations
- ✅ Interactive components

### Performance
- ✅ Fast loading dengan Vite
- ✅ Optimized images
- ✅ Code splitting
- ✅ Lazy loading components

### SEO Ready
- ✅ Semantic HTML
- ✅ Meta tags ready
- ✅ Accessible components
- ✅ Clean URL structure

---

## 🤝 Contributing

Contributions, issues, dan feature requests sangat diterima!

1. Fork repository ini
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📝 License

Project ini bersifat open source dan tersedia untuk digunakan secara bebas.

---

## 👨‍💻 Author

Dibuat dengan ❤️ untuk membantu developer membuat landing page yang menarik dan modern.

---

## 📞 Support

Jika Anda memiliki pertanyaan atau butuh bantuan, silakan buat issue di repository ini.

---

## 🎯 Roadmap

- [ ] Menambahkan lebih banyak template landing page
- [ ] Integrasi dengan CMS
- [ ] Dark mode support
- [ ] Multi-language support
- [ ] A/B testing features
- [ ] Analytics integration

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

**⭐ Jika project ini membantu Anda, jangan lupa berikan star!**
