# Quick Start Guide - ElBengkel Landing Page

## ⚡ 5 Menit Setup

### 1. Install Dependencies
```bash
cd Landing_Pages_ElBengkel
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
```
http://localhost:5173
```

Done! 🎉

---

## 📝 Customization Cepat

### Ubah Nama Bengkel
Edit `src/components/Header.jsx` line 20:
```javascript
<span className="text-2xl font-bold text-gray-900">ElBengkel</span>
```

### Ubah Warna Brand
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#FF6B35',      // Ubah ke warna Anda
  secondary: '#004E89',    // Ubah ke warna Anda
}
```

### Ubah Kontak
Edit `src/components/Contact.jsx` line 13-26:
```javascript
const contactInfo = [
  {
    icon: Phone,
    title: 'Telepon',
    content: '(021) 1234-5678',  // Ubah nomor
    color: 'from-blue-500 to-blue-600',
  },
  // ... edit yang lain
]
```

### Ubah Layanan
Edit `src/components/Services.jsx` line 7-38:
```javascript
const services = [
  {
    icon: Wrench,
    title: 'Perbaikan Mesin',      // Ubah title
    description: 'Deskripsi baru',  // Ubah deskripsi
    color: 'from-blue-500 to-blue-600',
  },
  // ... tambah atau edit layanan
]
```

### Ubah Testimoni
Edit `src/components/Testimonials.jsx` line 7-32:
```javascript
const testimonials = [
  {
    name: 'Nama Pelanggan',
    role: 'Pemilik Mobil',
    content: 'Testimoni pelanggan...',
    rating: 5,
    emoji: '👨‍💼',
  },
  // ... edit atau tambah testimoni
]
```

---

## 🎨 Customization Warna

### Primary Color (Orange)
Cari `primary` di file:
- `tailwind.config.js` - Ubah hex color
- `src/globals.css` - Ubah di gradient-primary

### Secondary Color (Blue)
Cari `secondary` di file:
- `tailwind.config.js` - Ubah hex color
- `src/globals.css` - Ubah di gradient-secondary

### Contoh Warna Alternatif:
```javascript
// Merah
primary: '#E63946'
secondary: '#A4161A'

// Hijau
primary: '#06A77D'
secondary: '#004D40'

// Ungu
primary: '#7209B7'
secondary: '#3A0CA3'
```

---

## 📱 Testing Responsive

### Desktop
- Buka di browser normal
- Ukuran window: 1024px+

### Tablet
- DevTools → Toggle device toolbar
- Pilih iPad atau tablet lain
- Ukuran: 768px - 1023px

### Mobile
- DevTools → Toggle device toolbar
- Pilih iPhone atau Android
- Ukuran: 320px - 767px

---

## 🚀 Build & Deploy

### Build untuk Production
```bash
npm run build
```

Output akan di folder `dist/`

### Preview Production Build
```bash
npm run preview
```

### Deploy ke Netlify (Mudah!)
1. Push code ke GitHub
2. Buka https://netlify.com
3. Click "New site from Git"
4. Select repository
5. Done! 🎉

---

## 🔧 Common Tasks

### Menambah Section Baru
1. Buat file di `src/components/NamaSection.jsx`
2. Import di `src/App.jsx`
3. Add ke JSX di App.jsx

### Mengubah Font
Edit `src/globals.css`:
```css
body {
  font-family: 'Nama Font', sans-serif;
}
```

### Menambah Icon
1. Cari icon di https://lucide.dev
2. Import: `import { IconName } from 'lucide-react'`
3. Gunakan: `<IconName size={24} />`

### Mengubah Animation Speed
Edit Framer Motion `transition`:
```javascript
transition={{ duration: 0.6 }}  // Ubah 0.6 ke nilai lain
```

---

## 📚 Dokumentasi Lengkap

- **README.md** - Overview project
- **FEATURES.md** - Detail semua fitur
- **DEPLOYMENT.md** - Panduan deploy
- **QUICKSTART.md** - File ini

---

## 🆘 Troubleshooting

### Port 5173 sudah terpakai
```bash
npm run dev -- --port 3000
```

### Module not found error
```bash
npm install
```

### Styling tidak muncul
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server

### Animasi tidak smooth
- Check GPU acceleration di browser
- Reduce animation complexity

---

## 💡 Tips & Tricks

### Live Reload
Dev server otomatis reload saat save file

### Inspect Element
- Right-click → Inspect
- Check styles di DevTools

### Console Errors
- Open DevTools (F12)
- Check Console tab
- Fix errors yang muncul

### Performance Check
- DevTools → Lighthouse
- Run audit
- Follow recommendations

---

## 📞 Need Help?

- Check FEATURES.md untuk detail fitur
- Check DEPLOYMENT.md untuk deploy
- Check README.md untuk overview
- Google error message Anda

---

**Happy Coding! 🚀**

Last Updated: October 27, 2025
