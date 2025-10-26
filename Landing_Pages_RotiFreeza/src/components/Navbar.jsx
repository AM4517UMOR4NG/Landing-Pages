import React from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Croissant, ShoppingCart } from 'lucide-react'

const links = [
  { href: '#home', label: 'Beranda' },
  { href: '#products', label: 'Produk' },
  { href: '#features', label: 'Keunggulan' },
  { href: '#gallery', label: 'Galeri' },
  { href: '#testimonials', label: 'Testimoni' },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-roti-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#home" 
          className="flex items-center gap-2 font-bold text-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-8 h-8 rounded-full bg-gradient-to-r from-roti-600 to-roti-500 flex items-center justify-center"
          >
            <Croissant className="w-5 h-5 text-white" />
          </motion.div>
          <span className="gradient-text">RotiFreeza</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <motion.a 
              key={l.href}
              href={l.href} 
              className="text-gray-700 hover:text-roti-600 transition-colors font-medium"
              whileHover={{ y: -2 }}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <motion.button
            className="hidden sm:flex items-center gap-2 btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart size={18} />
            <span>Pesan</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden border-t border-roti-100 bg-white"
      >
        <div className="container py-4 flex flex-col gap-3">
          {links.map((l) => (
            <motion.a 
              key={l.href}
              href={l.href}
              className="py-2 text-gray-700 hover:text-roti-600 font-medium"
              onClick={() => setOpen(false)}
              whileHover={{ x: 5 }}
            >
              {l.label}
            </motion.a>
          ))}
          <motion.button
            className="btn btn-primary w-full mt-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Pesan Sekarang
          </motion.button>
        </div>
      </motion.div>
    </motion.header>
  )
}
