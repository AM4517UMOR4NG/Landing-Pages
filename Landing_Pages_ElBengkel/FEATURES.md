# Fitur-Fitur ElBengkel Landing Page

## 📋 Daftar Lengkap Fitur

### 1. Header & Navigation
**File:** `src/components/Header.jsx`

**Fitur:**
- Logo dengan icon Wrench
- Navigation menu responsif
- Mobile hamburger menu
- CTA button "Hubungi Kami"
- Smooth scroll navigation
- Animated entrance

**Customization:**
- Edit `navItems` array untuk mengubah menu items
- Ubah logo text di bagian "ElBengkel"
- Ganti warna gradient di button

---

### 2. Hero Section
**File:** `src/components/Hero.jsx`

**Fitur:**
- Full-screen hero dengan gradient background
- Animated background shapes (floating blobs)
- Badge dengan icon
- Main heading dengan multi-line text
- Subheading deskriptif
- Dual CTA buttons
- Scroll indicator dengan animasi
- 3D car emoji animation

**Efek 3D:**
- Floating background shapes dengan rotate animation
- Animated scroll indicator
- Staggered text animations

**Customization:**
- Ubah heading text di `<h1>`
- Edit button text dan actions
- Ganti emoji kendaraan di bagian bawah

---

### 3. Services Section
**File:** `src/components/Services.jsx`

**Fitur:**
- 6 layanan utama dalam grid
- Card dengan gradient header
- Icon dari Lucide React
- Hover effects 3D (scale, rotate)
- Smooth animations
- Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)

**Layanan yang Tersedia:**
1. Perbaikan Mesin
2. Sistem Listrik
3. Ganti Oli & Filter
4. Servis Rem
5. AC & Pendingin
6. Body Repair

**Customization:**
- Edit `services` array untuk menambah/mengurangi layanan
- Ubah icon dengan icon dari Lucide React
- Ganti warna gradient untuk setiap layanan

---

### 4. Features 3D Section
**File:** `src/components/Features3D.jsx`

**Fitur:**
- 4 keunggulan utama
- 3D perspective transform pada hover
- Animated icons dengan floating effect
- Shine effect animation
- Gradient backgrounds
- Scale dan rotate effects

**Efek 3D:**
- `rotateX` dan `rotateY` transforms
- `perspective` CSS property
- Shine effect dengan gradient overlay
- Smooth transitions

**Customization:**
- Edit `features` array untuk mengubah keunggulan
- Ubah warna gradient
- Sesuaikan animation timing

---

### 5. Gallery Section
**File:** `src/components/Gallery.jsx`

**Fitur:**
- 8 item galeri dalam grid
- Emoji placeholders untuk visual
- Modal popup untuk detail view
- Hover animations
- Smooth scale transitions
- Responsive grid

**Interaksi:**
- Click item untuk membuka modal
- Click X atau outside modal untuk menutup
- Smooth animations saat open/close

**Customization:**
- Edit `galleryItems` array untuk mengubah item
- Ganti emoji dengan emoji lain
- Ubah title dan category

---

### 6. Statistics Section
**File:** `src/components/Stats.jsx`

**Fitur:**
- 4 statistik penting
- Animated counter display
- Floating icon animations
- Gradient background
- Icon dari Lucide React

**Statistik:**
- 5000+ Pelanggan Puas
- 10000+ Kendaraan Terawat
- 9 Tahun Pengalaman
- 24/7 Siap Melayani

**Customization:**
- Edit `stats` array untuk mengubah statistik
- Ubah icon dan label
- Sesuaikan animation delay

---

### 7. Testimonials Section
**File:** `src/components/Testimonials.jsx`

**Fitur:**
- 4 testimoni pelanggan
- Star rating display
- Emoji avatar
- Hover animations
- Responsive grid
- Italic quote text

**Customization:**
- Edit `testimonials` array untuk menambah testimoni
- Ubah rating (1-5 stars)
- Ganti emoji avatar
- Edit nama dan role

---

### 8. CTA Section
**File:** `src/components/CTA.jsx`

**Fitur:**
- Full-width call-to-action section
- Gradient background
- Animated background shapes
- Dual action buttons
- Responsive button layout

**Buttons:**
- "Hubungi Kami" (primary)
- "Kunjungi Kami" (secondary)

**Customization:**
- Ubah heading dan description
- Edit button text dan actions
- Ganti warna gradient

---

### 9. Contact Section
**File:** `src/components/Contact.jsx`

**Fitur:**
- 4 contact info cards
- Contact form dengan validasi
- Form fields: Name, Email, Phone, Message
- Map placeholder
- Responsive layout (form + map)
- Gradient icons

**Contact Info:**
- Telepon: (021) 1234-5678
- Email: info@elbengkel.com
- Alamat: Jl. Merdeka No. 123, Jakarta
- Jam Operasional: Senin - Minggu: 08:00 - 18:00

**Customization:**
- Edit contact information
- Ubah form fields
- Ganti map placeholder dengan Google Maps embed
- Sesuaikan form submission handler

---

### 10. Footer Section
**File:** `src/components/Footer.jsx`

**Fitur:**
- Brand information
- 3 footer link sections
- Social media links
- Copyright information
- Scroll to top button
- Gradient background

**Footer Links:**
- Layanan (4 links)
- Perusahaan (4 links)
- Dukungan (4 links)

**Social Media:**
- Facebook
- Twitter
- Instagram
- LinkedIn

**Customization:**
- Edit footer links
- Ubah social media links
- Ganti copyright year (auto-update)
- Edit brand description

---

## 🎨 Efek 3D yang Digunakan

### 1. Perspective Transform
```css
perspective: 1000px;
transform: rotateX(5deg) rotateY(-5deg);
```

### 2. Floating Animation
```javascript
animate={{
  y: [0, -20, 0],
}}
transition={{ duration: 3, repeat: Infinity }}
```

### 3. Hover Scale Effect
```javascript
whileHover={{ scale: 1.05, y: -10 }}
```

### 4. Shine Effect
```css
background: linear-gradient(to right, transparent, white, transparent);
transform: skewX(-12deg);
```

### 5. Staggered Animation
```javascript
transition={{
  staggerChildren: 0.1,
  delayChildren: 0.2,
}}
```

---

## 🎯 Customization Guide

### Mengubah Warna
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#FF6B35',      // Orange
  secondary: '#004E89',    // Dark Blue
  dark: '#1a1a1a',         // Dark
  light: '#f5f5f5',        // Light
}
```

### Menambah Layanan
Edit `src/components/Services.jsx`:
```javascript
const services = [
  {
    icon: IconName,
    title: 'Nama Layanan',
    description: 'Deskripsi layanan',
    color: 'from-color-500 to-color-600',
  },
  // ... tambah lebih banyak
]
```

### Mengubah Animasi
Gunakan Framer Motion properties:
- `animate` - target animation state
- `transition` - animation timing
- `whileHover` - hover state
- `whileInView` - scroll trigger

---

## 📱 Responsive Breakpoints

- **Mobile:** 320px - 639px
- **Tablet:** 640px - 1023px
- **Desktop:** 1024px+

Semua komponen menggunakan TailwindCSS responsive classes:
- `md:` untuk tablet
- `lg:` untuk desktop

---

## ⚡ Performance Tips

1. **Lazy Loading:** Gunakan `whileInView` untuk trigger animations saat scroll
2. **Optimize Images:** Gunakan emoji atau SVG daripada image files
3. **CSS Animations:** Lebih efisien daripada JavaScript animations
4. **Debounce:** Gunakan untuk scroll/resize events

---

## 🔗 Useful Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [TailwindCSS Docs](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)
- [React Docs](https://react.dev/)

---

**Last Updated:** October 27, 2025
