Bagus — saya buatkan **3 README singkat, rapi, dan siap di-paste ke GitHub** untuk masing-masing project: **ElBengkel**, **KopiItem**, dan **RotiFreeza**.
Semua README ditulis dalam Bahasa Indonesia, memakai gaya GitHub profesional dan ringkas: badge placeholders, fitur, instalasi singkat, struktur folder, customisasi, lisensi & kontak.

Salin salah satu / semua blok di bawah dan tempel ke `README.md` masing-masing repo kamu.

---

````markdown
# ElBengkel — Landing Page Bengkel Motor & Mobil

[![Status](https://img.shields.io/badge/status-ready-green)](#) [![License](https://img.shields.io/badge/license-MIT-blue)](#)  
_Demo: (masukkan link demo)_ · _Screenshot: (masukkan gambar)_

## Deskripsi
Landing page profesional untuk bengkel motor & mobil dengan desain modern, efek 3D, dan animasi halus. Cocok untuk showcase layanan bengkel, galeri, testimonial, dan form kontak.

## Fitur Utama
- Header & responsive navigation dengan CTA  
- Hero section dengan background gradient & animasi Framer Motion  
- Services: 6 layanan dengan card 3D hover effects  
- Features 3D: 4 keunggulan dengan perspective transform & shine effect  
- Gallery: grid 8 item + modal detail  
- Statistics: animated counters  
- Testimonials: carousel / grid testimonial  
- Contact: form validasi + info kontak  
- Footer lengkap + scroll-to-top

## Teknologi
- React 18, Vite, TailwindCSS, Framer Motion, Lucide React, PostCSS

## Instalasi (singkat)
```bash
git clone <repo-url>
cd Landing_Pages_ElBengkel
npm install
npm run dev
````

## Struktur Folder (ringkas)

```
src/
├─ components/   # Header, Hero, Services, Features3D, Gallery, Stats, Testimonials, CTA, Contact, Footer
├─ App.jsx
├─ main.jsx
└─ globals.css
index.html
tailwind.config.js
vite.config.js
```

## Kustomisasi Cepat

* Ubah warna di `tailwind.config.js` (primary, secondary)
* Edit konten layanan di `src/components/Services.jsx`
* Tambah/mutakhirkan gambar gallery di `src/components/Gallery.jsx`

## Best Practices

* Semantic HTML, accessibility, mobile-first, lazy-loading images, minimal JS

## Lisensi

MIT — lihat `LICENSE` untuk detail.

## Support

Untuk pertanyaan, kontak: `dev@domain.com` atau buka issue di repo.

````

---

```markdown
# KopiItem — Landing Page Toko Kopi Premium

[![Status](https://img.shields.io/badge/status-ready-green)](#) [![License](https://img.shields.io/badge/license-MIT-blue)](#)  
_Demo: (masukkan link demo)_ · _Screenshot: (masukkan gambar)_

## Deskripsi
Landing page modern untuk brand kopi premium. Fokus pada produk, galeri, dan konversi (CTA). Desain hangat dengan palet coklat-cream dan animasi produk 3D.

## Fitur Utama
- Navbar sticky + animated logo  
- Hero dengan CTA, stats & 3D product showcase  
- Products: grid produk dengan card 3D & variants  
- Features: keunggulan produk dengan icon  
- Gallery: masonry + lightbox  
- Testimonials: carousel pelanggan  
- CTA & Footer lengkap

## Teknologi
React 18, Vite, TailwindCSS, Framer Motion, Lucide React, PostCSS

## Instalasi
```bash
git clone <repo-url>
cd Landing_Pages_KopiItem
npm install
npm run dev
````

## Struktur Folder

```
src/
├─ components/   # Navbar, Hero, Products, Features, Gallery, Testimonials, CTA, Footer
├─ App.jsx
└─ globals.css
```

## Kustomisasi

* Ganti warna utama di `tailwind.config.js` (`#8B4513` default)
* Tambah produk di `src/components/Products.jsx` (array products)
* Sesuaikan teks & gambar di setiap komponen

## Lisensi

MIT

## Support

Email: `dev@domain.com` · Issues welcome di repo.

````

---

```markdown
# RotiFreeza — Landing Page Toko Roti Premium

[![Status](https://img.shields.io/badge/status-ready-green)](#) [![License](https://img.shields.io/badge/license-MIT-blue)](#)  
_Demo: (masukkan link demo)_ · _Screenshot: (masukkan gambar)_

## Deskripsi
Landing page interaktif untuk toko roti premium dengan efek 3D pada produk dan galeri. Desain hangat (orange-cream), cocok untuk showcase produk & promo.

## Fitur Utama
- Sticky navbar + hero CTA  
- Products: grid roti (6 varian) dengan 3D flip cards  
- Features: 6 keunggulan + icons  
- Gallery: hover zoom + lightbox  
- Testimonials & CTA section  
- Footer dengan social links

## Teknologi
React 18, Vite, TailwindCSS, Framer Motion, Lucide React, PostCSS

## Instalasi
```bash
git clone <repo-url>
cd Landing_Pages_RotiFreeza
npm install
npm run dev
````

## Struktur Folder

```
src/
├─ components/   # Navbar, Hero, Products, Features, Gallery, Testimonials, CTA, Footer
├─ App.jsx
└─ globals.css
```

## Kustomisasi

* Warna utama di `tailwind.config.js` (`#FF9827` default)
* Update produk di `src/components/Products.jsx`
* Aktifkan/ubah animasi di komponen Framer Motion

## Lisensi

MIT

## Support

Hubungi `aekmohop@gmail.com` atau buat issue di repo untuk bantuan.
