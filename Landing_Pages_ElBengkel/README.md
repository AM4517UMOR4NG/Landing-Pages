# ElBengkel - Landing Page Bengkel Motor & Mobil

Landing page profesional untuk bengkel motor dan mobil dengan desain modern, fitur lengkap, dan efek 3D yang menarik.

## 🎯 Fitur Utama

### 1. **Header & Navigation**
- Navigation bar responsif dengan mobile menu
- Logo brand yang eye-catching
- CTA button untuk hubungi kami

### 2. **Hero Section**
- Background gradient yang menarik
- Animated elements dengan Framer Motion
- Animated background shapes
- Call-to-action buttons
- Scroll indicator

### 3. **Services Section**
- 6 layanan utama bengkel
- Card dengan hover effects 3D
- Gradient backgrounds untuk setiap layanan
- Icon dari Lucide React

### 4. **Features 3D Section**
- 4 keunggulan utama dengan efek 3D
- Animated icons
- Shine effect on hover
- Perspective transform

### 5. **Gallery**
- Grid galeri dengan 8 item
- Modal popup untuk detail
- Hover animations
- Emoji placeholders untuk visual

### 6. **Statistics Section**
- 4 statistik penting
- Animated counter display
- Floating animation effects

### 7. **Testimonials**
- 4 testimonial dari pelanggan
- Star rating display
- Hover animations
- Responsive grid

### 8. **Contact Section**
- Contact information cards
- Contact form dengan validasi
- Map placeholder
- Multiple contact methods

### 9. **CTA Section**
- Call-to-action section
- Animated background elements
- Multiple action buttons

### 10. **Footer**
- Brand information
- Social media links
- Footer links
- Scroll to top button
- Copyright information

## 🚀 Teknologi yang Digunakan

- **React 18.2.0** - UI Framework
- **Vite 7.1.12** - Build tool
- **TailwindCSS 3.4.14** - CSS Framework
- **Framer Motion 11.2.6** - Animation library
- **Lucide React 0.441.0** - Icon library
- **PostCSS 8.4.47** - CSS processing

## 📦 Instalasi

1. Masuk ke folder project:
```bash
cd Landing_Pages_ElBengkel
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Build untuk production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 📁 Struktur Folder

```
Landing_Pages_ElBengkel/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Services.jsx        # Services showcase
│   │   ├── Features3D.jsx      # 3D features section
│   │   ├── Gallery.jsx         # Image gallery
│   │   ├── Stats.jsx           # Statistics section
│   │   ├── Testimonials.jsx    # Customer testimonials
│   │   ├── CTA.jsx             # Call-to-action section
│   │   ├── Contact.jsx         # Contact form & info
│   │   └── Footer.jsx          # Footer section
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── globals.css             # Global styles
├── index.html                  # HTML entry point
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # TailwindCSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

## 🎨 Desain & Warna

### Color Palette
- **Primary**: #FF6B35 (Orange)
- **Secondary**: #004E89 (Dark Blue)
- **Dark**: #1a1a1a (Dark Gray)
- **Light**: #f5f5f5 (Light Gray)

### Efek 3D
- Perspective transforms
- Hover scale effects
- Rotate animations
- Floating animations
- Shine effects

## 🔧 Customization

### Mengubah Warna
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#FF6B35',      // Ubah warna primary
  secondary: '#004E89',    // Ubah warna secondary
}
```

### Mengubah Konten
Semua konten dapat diubah di file komponen masing-masing:
- Services: `src/components/Services.jsx`
- Gallery: `src/components/Gallery.jsx`
- Testimonials: `src/components/Testimonials.jsx`
- Contact Info: `src/components/Contact.jsx`

### Menambah Animasi
Gunakan Framer Motion untuk menambah animasi:
```javascript
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 3, repeat: Infinity }}
>
  Content
</motion.div>
```

## 📱 Responsive Design

Website ini fully responsive untuk:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## ⚡ Performance

- Optimized images dengan emoji placeholders
- Lazy loading dengan Intersection Observer
- CSS animations untuk smooth performance
- Minimal JavaScript

## 🔐 Best Practices

- Semantic HTML
- Accessible components
- Mobile-first approach
- Clean code structure
- Reusable components

## 📝 Lisensi

Proyek ini dibuat untuk ElBengkel. Semua hak dilindungi.

## 👨‍💻 Support

Untuk pertanyaan atau bantuan, hubungi tim development.

---

**Dibuat dengan untuk ElBengkel**
