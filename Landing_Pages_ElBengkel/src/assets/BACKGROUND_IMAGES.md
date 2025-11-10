# Background Sliding Images

## Cara Menambahkan Foto Anda Sendiri

### Opsi 1: Menggunakan URL Foto Online
Edit file `src/components/Hero.jsx` dan ganti array `backgroundImages` dengan URL foto Anda:

```javascript
const backgroundImages = [
  'https://example.com/foto1.jpg',
  'https://example.com/foto2.jpg',
  'https://example.com/foto3.jpg',
]
```

### Opsi 2: Menggunakan Foto Lokal
1. Simpan foto Anda di folder `src/assets/images/`
2. Import foto di Hero.jsx:

```javascript
import bg1 from '../assets/images/bengkel1.jpg'
import bg2 from '../assets/images/bengkel2.jpg'
import bg3 from '../assets/images/bengkel3.jpg'

const backgroundImages = [
  bg1,
  bg2,
  bg3,
]
```

### Opsi 3: Menggunakan Foto dari Public Folder
1. Simpan foto di folder `public/images/`
2. Gunakan path relatif:

```javascript
const backgroundImages = [
  '/images/bengkel1.jpg',
  '/images/bengkel2.jpg',
  '/images/bengkel3.jpg',
]
```

## Rekomendasi Ukuran Foto
- **Resolusi**: Minimal 1200x600px
- **Format**: JPG atau PNG
- **Ukuran File**: Kurang dari 500KB per foto
- **Aspect Ratio**: 2:1 (landscape)

## Mengatur Kecepatan Slide
Di Hero.jsx, ubah `duration` (dalam detik):

```javascript
transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
// Ubah 15 menjadi angka yang Anda inginkan
// Semakin kecil = semakin cepat
// Semakin besar = semakin lambat
```

## Mengatur Overlay Gelap
Ubah `bg-opacity-40` untuk mengatur tingkat gelap overlay:

```javascript
<div className="absolute inset-0 bg-black bg-opacity-40"></div>
// Ubah 40 menjadi:
// 20 = lebih terang
// 50 = lebih gelap
// 70 = sangat gelap
```
