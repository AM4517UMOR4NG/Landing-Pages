# KopiItem - Landing Page Premium

Landing page modern dan interaktif untuk toko kopi premium "KopiItem" dengan efek 3D dan animasi yang memukau.

## 🎨 Fitur Utama

### Desain & UX
- **Warna Friendly**: Palet warna coklat-cream yang hangat dan menarik
- **Responsive Design**: Sempurna di semua ukuran layar (mobile, tablet, desktop)
- **Modern UI**: Menggunakan Tailwind CSS untuk styling yang clean dan konsisten
- **Smooth Animations**: Animasi halus menggunakan Framer Motion

### Efek 3D & Interaktif
- **3D Hero Section**: Gambar dengan efek rotasi 3D dan floating animation
- **3D Product Cards**: Card produk dengan efek hover 3D flip
- **Parallax Background**: Background elements yang bergerak dengan smooth
- **Interactive Gallery**: Galeri dengan lightbox dan hover effects
- **Carousel Testimonials**: Testimonial carousel otomatis dengan kontrol manual
- **Animated Icons**: Icon yang beranimasi saat hover

### Komponen Lengkap
1. **Navbar** - Navigasi sticky dengan logo animated
2. **Hero Section** - Banner utama dengan CTA dan stats
3. **Products** - Grid produk dengan berbagai varian kopi
4. **Features** - Keunggulan utama dengan icon
5. **Gallery** - Galeri masonry dengan lightbox
6. **Testimonials** - Carousel testimonial pelanggan
7. **CTA Section** - Call-to-action dengan contact info
8. **Footer** - Footer lengkap dengan links dan social media

## 🚀 Teknologi

- **React 18** - UI library
- **Vite** - Build tool modern
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **PostCSS** - CSS processing

## 📦 Instalasi

```bash
# Clone atau masuk ke folder project
cd Landing_Pages_KopiItem

# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

## 🎯 Struktur Folder

```
Landing_Pages_KopiItem/
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
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .stylelintrc.json
├── package.json
└── README.md
```

## 🎨 Palet Warna

- **Kopi Colors**: 
  - Primary: `#8B4513` (Coklat Kopi)
  - Light: `#A0522D` (Coklat Sienna)
  - Dark: `#654321` (Coklat Gelap)
  
- **Cream Colors**: Warna cream untuk background
- **Accent Colors**: Warna aksen untuk highlight

## ✨ Fitur Interaktif

### Hover Effects
- Product cards dengan 3D rotation
- Feature cards dengan lift-up animation
- Gallery items dengan zoom effect
- Buttons dengan scale animation

### Scroll Animations
- Staggered entrance animations
- Fade-in effects saat scroll
- Parallax background movements
- 3D rotation effects pada features

### Auto Animations
- Floating elements
- Rotating icons
- Pulsing badges
- Carousel auto-play

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Mengubah Warna
Edit `tailwind.config.js` di bagian `theme.extend.colors`

### Mengubah Konten
Edit file komponen di `src/components/`

### Menambah Produk
Edit array `products` di `src/components/Products.jsx`

## 📝 Lisensi

© 2024 KopiItem. All rights reserved.

## 👨‍💻 Dibuat dengan ❤️

Landing page ini dibuat dengan passion untuk memberikan pengalaman terbaik kepada pelanggan KopiItem.
