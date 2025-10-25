import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-brand-800 bg-brand-900 text-white">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-semibold text-lg">KopiItem</div>
          <p className="mt-2 text-white/80">Cita rasa kopi terbaik untuk menemani hari Anda.</p>
        </div>
        <div>
          <div className="font-semibold">Kontak</div>
          <p className="mt-2 text-white/80">Jl. Kenangan No. 12, Jakarta</p>
          <p className="text-white/80">Telp: 021-123456</p>
        </div>
        <div>
          <div className="font-semibold">Aksi</div>
          <a href="#menu" className="mt-3 inline-flex btn btn-secondary">Pesan Sekarang</a>
        </div>
      </div>
      <div className="text-center text-sm text-white/70 py-4 border-t border-brand-800">© {new Date().getFullYear()} KopiItem. All rights reserved.</div>
    </footer>
  )
}
