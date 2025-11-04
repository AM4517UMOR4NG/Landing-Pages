# Landing Pages Collection - Premium React Templates

[![Status](https://img.shields.io/badge/status-ready-green)](#) [![License](https://img.shields.io/badge/license-MIT-blue)](#) [![React](https://img.shields.io/badge/react-18-blue)](#) [![TailwindCSS](https://img.shields.io/badge/tailwind-3.x-38bdf8)](#)

> Koleksi 3 landing page profesional dengan desain modern, efek 3D, dan animasi halus untuk berbagai kebutuhan bisnis.

## 📦 Isi Package

Package ini berisi 3 landing page siap pakai:

1. **ElBengkel** - Landing Page Bengkel Motor & Mobil
2. **KopiItem** - Landing Page Toko Kopi Premium  
3. **RotiFreeza** - Landing Page Toko Roti Premium

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/username/Landing_Pages_Collection.git

# Pilih project yang ingin dijalankan
cd Landing_Pages_Collection/ElBengkel
# atau
cd Landing_Pages_Collection/KopiItem
# atau
cd Landing_Pages_Collection/RotiFreeza

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

---

## 📸 Preview & Demo

| Project | Demo | Screenshot |
|---------|------|------------|
| **ElBengkel** | [Live Demo](#) | [View](#) |
| **KopiItem** | [Live Demo](#) | [View](#) |
| **RotiFreeza** | [Live Demo](#) | [View](#) |

---

## 1️⃣ ElBengkel - Landing Page Bengkel Motor & Mobil

### ✨ Fitur Utama
- **Responsive Navigation** - Header dengan CTA button dan mobile menu
- **Hero Section** - Background gradient dengan animasi Framer Motion
- **Services Showcase** - 6 layanan dengan 3D hover effects
- **3D Features** - 4 keunggulan dengan perspective transform & shine effect
- **Gallery** - Grid 8 item dengan modal detail dan lightbox
- **Statistics Counter** - Animated counters untuk menampilkan pencapaian
- **Testimonials** - Carousel/grid review pelanggan
- **Contact Form** - Form dengan validasi dan info kontak lengkap
- **Scroll to Top** - Button untuk kembali ke atas
- **Footer** - Informasi lengkap dengan social links

### 📁 Struktur Folder
```
ElBengkel/
├── public/
│   └── images/          # Gambar dan assets
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Features3D.jsx
│   │   ├── Gallery.jsx
│   │   ├── Statistics.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── globals.css
├── index.html
├── tailwind.config.js
└── package.json
```

### 🎨 Kustomisasi ElBengkel

**Mengubah Warna Tema:**
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',    // Biru
        secondary: '#DC2626',  // Merah
      }
    }
  }
}
```

**Mengubah Layanan:**
```jsx
// src/components/Services.jsx
const services = [
  {
    title: 'Service Motor',
    description: 'Perawatan rutin motor Anda',
    icon: 'Wrench'
  },
  // tambah layanan lainnya...
]
```

### 🎯 Use Case
Cocok untuk: bengkel motor, bengkel mobil, service center, auto repair shop, garage, workshop otomotif.

---

## 2️⃣ KopiItem - Landing Page Toko Kopi Premium

### ✨ Fitur Utama
- **Sticky Navbar** - Navigation dengan animated logo
- **Hero Section** - CTA prominent dengan stats & 3D product showcase
- **Product Grid** - Card 3D dengan product variants (250g, 500g, 1kg)
- **Features** - Keunggulan produk dengan icon yang menarik
- **Masonry Gallery** - Layout dinamis dengan lightbox
- **Testimonials** - Carousel review pelanggan
- **CTA Section** - Call-to-action untuk konversi
- **Footer** - Informasi lengkap dengan social media

### 📁 Struktur Folder
```
KopiItem/
├── public/
│   └── images/          # Product images dan assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Products.jsx
│   │   ├── Features.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── globals.css
├── index.html
├── tailwind.config.js
└── package.json
```

### 🎨 Kustomisasi KopiItem

**Mengubah Warna Tema:**
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        coffee: {
          DEFAULT: '#8B4513',  // Coklat kopi
          light: '#A0522D',
          dark: '#654321'
        },
        cream: '#F5E6D3'
      }
    }
  }
}
```

**Menambah Produk:**
```jsx
// src/components/Products.jsx
const products = [
  {
    id: 1,
    name: 'Arabica Premium',
    description: 'Kopi arabica pilihan dari pegunungan',
    price: 'Rp 85.000',
    image: '/images/products/arabica.jpg',
    variants: ['250g', '500g', '1kg']
  },
  // tambah produk lainnya...
]
```

### 🎯 Use Case
Cocok untuk: coffee shop, kedai kopi, toko kopi online, roastery, coffee brand, subscription coffee.

---

## 3️⃣ RotiFreeza - Landing Page Toko Roti Premium

### ✨ Fitur Utama
- **Sticky Navbar** - Navigation yang tetap terlihat saat scroll
- **Hero Section** - CTA dengan visual menarik
- **Product Showcase** - Grid 6 varian roti dengan 3D flip cards
- **Features Grid** - 6 keunggulan produk dengan icons
- **Gallery** - Hover zoom effect dengan lightbox
- **Testimonials** - Review pelanggan yang dapat dipercaya
- **CTA Section** - Call-to-action untuk order
- **Footer** - Social links dan informasi kontak

### 📁 Struktur Folder
```
RotiFreeza/
├── public/
│   └── images/          # Product images dan assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Products.jsx
│   │   ├── Features.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── globals.css
├── index.html
├── tailwind.config.js
└── package.json
```

### 🎨 Kustomisasi RotiFreeza

**Mengubah Warna Tema:**
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        bread: {
          DEFAULT: '#FF9827',  // Orange hangat
          light: '#FFB347',
          dark: '#E67E22'
        },
        cream: '#FFF5E1'
      }
    }
  }
}
```

**Menambah Produk Roti:**
```jsx
// src/components/Products.jsx
const products = [
  {
    id: 1,
    name: 'Roti Sourdough',
    description: 'Roti dengan fermentasi alami',
    price: 'Rp 45.000',
    image: '/images/products/sourdough.jpg',
    category: 'premium'
  },
  // tambah produk lainnya...
]
```

### 🎯 Use Case
Cocok untuk: bakery, toko roti, cake shop, pastry shop, home bakery, artisan bread.

---

## 🛠️ Teknologi Stack

Semua landing page menggunakan teknologi yang sama:

- **React 18** - Library UI modern
- **Vite** - Build tool yang cepat (HMR instant)
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library untuk transisi smooth
- **Lucide React** - Icon library yang modern dan lengkap
- **PostCSS** - CSS processing

---

## 📦 Instalasi & Setup

### Requirement
- Node.js >= 16.x
- npm atau yarn

### Langkah Instalasi

```bash
# 1. Clone repository
git clone https://github.com/username/Landing_Pages_Collection.git

# 2. Masuk ke direktori project yang dipilih
cd Landing_Pages_Collection/ElBengkel

# 3. Install dependencies
npm install

# 4. Jalankan development server
npm run dev
# Server akan berjalan di http://localhost:5173

# 5. Build untuk production
npm run build

# 6. Preview production build
npm run preview
```

### Setup Gambar

**1. Buat struktur folder:**
```
public/
└── images/
    ├── hero/
    ├── services/ atau products/
    ├── gallery/
    ├── testimonials/
    └── logo.png
```

**2. Taruh gambar Anda di folder yang sesuai**

**3. Gunakan di component:**
```jsx
<img src="/images/hero/hero-bg.jpg" alt="Hero" />
```

💡 **Tips:** Compress gambar Anda menggunakan TinyPNG.com sebelum diupload (target < 500KB per gambar).

---

## 🎨 Panduan Kustomisasi

### 1. Mengubah Konten Teks

Edit file component yang sesuai di folder `src/components/`:

```jsx
// Contoh: src/components/Hero.jsx
<h1>Judul Baru Anda</h1>
<p>Deskripsi baru Anda</p>
```

### 2. Mengubah Warna Brand

Edit `tailwind.config.js` di root project:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#YOUR_COLOR',
        secondary: '#YOUR_COLOR',
      }
    }
  }
}
```

### 3. Menambah/Mengurangi Section

Edit `src/App.jsx`:

```jsx
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      {/* <Gallery /> */}  {/* Comment untuk hide */}
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
```

### 4. Mengubah Font

Edit `src/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
```

### 5. Menambah Animasi

Gunakan Framer Motion:

```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* konten Anda */}
</motion.div>
```

---

## 🎯 Best Practices

### Performance
- ✅ Compress gambar sebelum upload (< 500KB)
- ✅ Gunakan lazy loading: `<img loading="lazy" />`
- ✅ Minify CSS dan JS di production
- ✅ Enable caching di hosting

### SEO
- ✅ Gunakan semantic HTML
- ✅ Tambahkan meta tags di `index.html`
- ✅ Alt text pada semua gambar
- ✅ Heading hierarchy (h1, h2, h3)

### Accessibility
- ✅ ARIA labels untuk button/link
- ✅ Keyboard navigation support
- ✅ Color contrast ratio minimal 4.5:1
- ✅ Focus indicators yang jelas

### Mobile-First
- ✅ Test di berbagai device
- ✅ Touch-friendly button size (min 44x44px)
- ✅ Readable font size (min 16px)
- ✅ Responsive images

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (not supported)

---

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Deploy ke Netlify

```bash
# Build project
npm run build

# Drag & drop folder 'dist' ke netlify.com
```

### Deploy ke GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Tambah script di package.json
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 🔧 Troubleshooting

### Gambar tidak muncul?
- ✅ Pastikan path benar: `/images/foto.jpg` (dengan slash di awal)
- ✅ File ada di folder `public/images/`
- ✅ Nama file exact match (case-sensitive)
- ✅ Extension benar (.jpg, bukan .JPG)

### Build error?
```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Style tidak apply?
- ✅ Restart dev server (Ctrl+C, lalu `npm run dev`)
- ✅ Check `tailwind.config.js` syntax
- ✅ Pastikan className menggunakan Tailwind classes

---

## 📚 Resources & Learning

### Dokumentasi
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)

### Design Inspiration
- [Dribbble](https://dribbble.com)
- [Behance](https://behance.net)
- [Awwwards](https://awwwards.com)

### Free Assets
**Stock Photos:**
- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)

**Icons:**
- [Lucide Icons](https://lucide.dev) (already included)
- [Heroicons](https://heroicons.com)

**Illustrations:**
- [Undraw](https://undraw.co)
- [Storyset](https://storyset.com)

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Berikut cara berkontribusi:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

---

## 📝 Changelog

### Version 1.0.0 (2024)
- ✨ Initial release
- ✨ 3 landing page templates
- ✨ Full responsive design
- ✨ 3D animations & effects
- ✨ Production-ready code

---

## 📄 Lisensi

MIT License - bebas digunakan untuk project komersial dan personal.

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.

---

## 📧 Support & Contact

### Untuk ElBengkel
- Email: dev@elbengkel.com
- Issues: [GitHub Issues](https://github.com/username/Landing_Pages_Collection/issues)

### Untuk KopiItem
- Email: dev@kopiitem.com
- Issues: [GitHub Issues](https://github.com/username/Landing_Pages_Collection/issues)

### Untuk RotiFreeza
- Email: aekmohop@gmail.com
- Issues: [GitHub Issues](https://github.com/username/Landing_Pages_Collection/issues)

---

## ⭐ Show Your Support

Jika project ini membantu Anda, berikan ⭐ di GitHub!

---

## 🎉 Credits

Dibuat dengan ❤️ menggunakan:
- React & TailwindCSS
- Framer Motion untuk animasi
- Lucide React untuk icons

**Happy Coding! 🚀**
