import React from 'react'
import Logo from './Logo'

const links = [
  { href: '#home', label: 'Beranda' },
  { href: '#menu', label: 'Menu' },
  { href: '#features', label: 'Keunggulan' },
  { href: '#testimonials', label: 'Testimoni' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="sticky top-0 z-50 w-full bg-brand-800 text-white">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center" aria-label="KopiItem Home">
          <Logo size={120} className="h-10 w-auto md:h-12" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition-colors">{l.label}</a>
          ))}
          <a href="#menu" className="btn btn-secondary">Pesan Sekarang</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(v=>!v)} aria-label="Toggle menu">
          <div className="w-6 h-[2px] bg-white mb-1"></div>
          <div className="w-6 h-[2px] bg-white mb-1"></div>
          <div className="w-6 h-[2px] bg-white"></div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-brand-700 bg-brand-800 text-white">
          <div className="container py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="py-2 text-white/90" onClick={()=>setOpen(false)}>{l.label}</a>
            ))}
            <a href="#menu" className="btn btn-secondary">Pesan Sekarang</a>
          </div>
        </div>
      )}
    </header>
  )
}

