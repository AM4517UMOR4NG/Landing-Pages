  # ElBengkel — Landing Page Bengkel Motor & Mobil

[![Status](https://img.shields.io/badge/status-ready-green)](#) [![License](https://img.shields.io/badge/license-MIT-blue)](#)

> Landing page profesional untuk bengkel motor & mobil dengan desain modern, efek 3D, dan animasi halus.

## 📸 Preview

_Demo: [Link Demo](#)_  
_Screenshot: Coming soon_

## ✨ Fitur Utama

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

## 🚀 Teknologi

- **React 18** - Library UI modern
- **Vite** - Build tool yang cepat
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **PostCSS** - CSS processing

## 📦 Instalasi

```bash
# Clone repository
git clone https://github.com/username/Landing_Pages_ElBengkel.git

# Masuk ke direktori project
cd Landing_Pages_ElBengkel

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview build production
npm run preview
```

## 📁 Struktur Folder

```
Landing_Pages_ElBengkel/
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
├── vite.config.js
├── package.json
└── README.md
```

## 🎨 Kustomisasi

### Mengubah Warna Tema

Edit `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      }
    }
  }
}
```

### Mengubah Layanan

Edit `src/components/Services.jsx`:

```jsx
const services = [
  {
    title: 'Nama Layanan',
    description: 'Deskripsi layanan',
    icon: 'icon-name'
  },
  // tambah layanan lainnya...
]
```

### Mengubah Gambar Gallery

Edit `src/components/Gallery.jsx` dan tambahkan gambar ke folder `public/images/`.

## 🎯 Best Practices

- ✅ Semantic HTML untuk SEO
- ✅ Accessibility (ARIA labels, keyboard navigation)
- ✅ Mobile-first responsive design
- ✅ Lazy-loading untuk images
- ✅ Minimal JavaScript bundle size
- ✅ Performance optimization

## 📄 Lisensi

MIT License - lihat file [LICENSE](LICENSE) untuk detail lengkap.

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buat pull request atau buka issue untuk saran dan perbaikan.

## 📧 Support

Untuk pertanyaan atau bantuan:
- Email: dev@elbengkel.com
- Issues: [GitHub Issues](https://github.com/username/Landing_Pages_ElBengkel/issues)

---

# KopiItem — Landing Page Toko Kopi Premium

[![Status](https://img.shields.io/badge/status-ready-green)](#) [![License](https://img.shields.io/badge/license-MIT-blue)](#)

> Landing page modern untuk brand kopi premium dengan fokus pada produk showcase dan konversi.

## 📸 Preview

_Demo: [Link Demo](#)_  
_Screenshot: Coming soon_

## ✨ Fitur Utama

- **Sticky Navbar** - Navigation dengan animated logo
- **Hero Section** - CTA prominent dengan stats & 3D product showcase
- **Product Grid** - Card 3D dengan product variants
- **Features** - Keunggulan produk dengan icon yang menarik
- **Masonry Gallery** - Layout dinamis dengan lightbox
- **Testimonials** - Carousel review pelanggan
- **CTA Section** - Call-to-action untuk konversi
- **Footer** - Informasi lengkap dengan social media

## 🚀 Teknologi

- **React 18** - Library UI modern
- **Vite** - Build tool yang cepat
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **PostCSS** - CSS processing

## 📦 Instalasi

```bash
# Clone repository
git clone https://github.com/username/Landing_Pages_KopiItem.git

# Masuk ke direktori project
cd Landing_Pages_KopiItem

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview build production
npm run preview
```

## 📁 Struktur Folder

```
Landing_Pages_KopiItem/
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
├── vite.config.js
├── package.json
└── README.md
```

## 🎨 Kustomisasi

### Mengubah Warna Tema

Edit `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        coffee: {
          DEFAULT: '#8B4513',
          light: '#A0522D',
          dark: '#654321'
        }
      }
    }
  }
}
```

### Menambah Produk

Edit `src/components/Products.jsx`:

```jsx
const products = [
  {
    id: 1,
    name: 'Nama Kopi',
    description: 'Deskripsi produk',
    price: 'Rp 50.000',
    image: '/images/product-1.jpg',
    variants: ['250g', '500g', '1kg']
  },
  // tambah produk lainnya...
]
```

### Mengubah Konten

Setiap komponen dapat disesuaikan dengan mengubah data di array atau object yang tersedia di masing-masing file komponen.

## 🎯 Best Practices

- ✅ Optimized images dengan WebP format
- ✅ Product schema markup untuk SEO
- ✅ Smooth scroll behavior
- ✅ Loading states untuk interaksi
- ✅ Error handling pada form
- ✅ Performance monitoring

## 📄 Lisensi

MIT License - lihat file [LICENSE](LICENSE) untuk detail lengkap.

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buat pull request atau buka issue untuk saran dan perbaikan.

## 📧 Support

Untuk pertanyaan atau bantuan:
- Email: dev@kopiitem.com
- Issues: [GitHub Issues](https://github.com/username/Landing_Pages_KopiItem/issues)

---

# RotiFreeza — Landing Page Toko Roti Premium

[![Status](https://img.shields.io/badge/status-ready-green)](#) [![License](https://img.shields.io/badge/license-MIT-blue)](#)

> Landing page interaktif untuk toko roti premium dengan efek 3D dan desain hangat yang menarik.

## 📸 Preview

_Demo: [Link Demo](#)_  
_Screenshot: Coming soon_

## ✨ Fitur Utama

- **Sticky Navbar** - Navigation yang tetap terlihat saat scroll
- **Hero Section** - CTA dengan visual menarik
- **Product Showcase** - Grid 6 varian roti dengan 3D flip cards
- **Features Grid** - 6 keunggulan produk dengan icons
- **Gallery** - Hover zoom effect dengan lightbox
- **Testimonials** - Review pelanggan yang dapat dipercaya
- **CTA Section** - Call-to-action untuk order
- **Footer** - Social links dan informasi kontak

## 🚀 Teknologi

- **React 18** - Library UI modern
- **Vite** - Build tool yang cepat
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **PostCSS** - CSS processing

## 📦 Instalasi

```bash
# Clone repository
git clone https://github.com/username/Landing_Pages_RotiFreeza.git

# Masuk ke direktori project
cd Landing_Pages_RotiFreeza

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview build production
npm run preview
```

## 📁 Struktur Folder

```
Landing_Pages_RotiFreeza/
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
├── vite.config.js
├── package.json
└── README.md
```

## 🎨 Kustomisasi

### Mengubah Warna Tema

Edit `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        bread: {
          DEFAULT: '#FF9827',
          light: '#FFB347',
          dark: '#E67E22'
        }
      }
    }
  }
}
```

### Menambah Produk Roti

Edit `src/components/Products.jsx`:

```jsx
const products = [
  {
    id: 1,
    name: 'Nama Roti',
    description: 'Deskripsi produk',
    price: 'Rp 25.000',
    image: '/images/roti-1.jpg',
    category: 'premium'
  },
  // tambah produk lainnya...
]
```

### Mengubah Animasi

Sesuaikan animasi Framer Motion di setiap komponen:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* konten */}
</motion.div>
```

## 🎯 Best Practices

- ✅ Fresh content dengan update regular
- ✅ High-quality product images
- ✅ Fast page load time
- ✅ Mobile-optimized checkout flow
- ✅ Clear pricing information
- ✅ Trust signals (reviews, certifications)

## 📄 Lisensi

MIT License - lihat file [LICENSE](LICENSE) untuk detail lengkap.

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buat pull request atau buka issue untuk saran dan perbaikan.

## 📧 Support

Untuk pertanyaan atau bantuan:
- Email: aekmohop@gmail.com
- Issues: [GitHub Issues](https://github.com/username/Landing_Pages_RotiFreeza/issues)

---

## 🌟 Tips Penggunaan

### Development

```bash
# Install semua dependencies
npm install

# Jalankan dev server dengan hot reload
npm run dev

# Lint dan format code
npm run lint
```

### Production

```bash
# Build optimized production files
npm run build

# Preview production build locally
npm run preview

# Deploy (contoh dengan Vercel)
vercel --prod
```

### Environment Variables

Buat file `.env` di root project:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_CONTACT_EMAIL=contact@yourdomain.com
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎓 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)

---

**Dibuat dengan ❤️ menggunakan React & TailwindCSS**
