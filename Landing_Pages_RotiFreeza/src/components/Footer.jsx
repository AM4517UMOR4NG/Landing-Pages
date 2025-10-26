import React from 'react'
import { motion } from 'framer-motion'
import { Croissant, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = [
  { title: 'Produk', links: ['Roti Tawar', 'Croissant', 'Donut', 'Pastry'] },
  { title: 'Perusahaan', links: ['Tentang Kami', 'Karir', 'Blog', 'Press'] },
  { title: 'Dukungan', links: ['FAQ', 'Hubungi Kami', 'Kebijakan', 'Syarat & Ketentuan'] },
]

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Twitter, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background animation */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-roti-600 rounded-full blur-3xl opacity-10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-roti-600 to-roti-500 flex items-center justify-center">
                <Croissant className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black">RotiFreeza</span>
            </div>
            <p className="text-gray-400 mb-6">
              Roti premium berkualitas tinggi yang dibuat fresh setiap hari untuk kepuasan Anda.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-roti-600 flex items-center justify-center hover:bg-roti-500 transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <motion.li
                    key={linkIdx}
                    whileHover={{ x: 5 }}
                  >
                    <a href="#" className="text-gray-400 hover:text-roti-400 transition-colors">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div 
          className="py-12 border-t border-gray-800 grid sm:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-roti-600/20 flex items-center justify-center">
              <Phone className="w-6 h-6 text-roti-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Telepon</p>
              <p className="font-semibold">+62 812 3456 7890</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-roti-600/20 flex items-center justify-center">
              <Mail className="w-6 h-6 text-roti-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="font-semibold">info@rotifreeza.com</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-roti-600/20 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-roti-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Alamat</p>
              <p className="font-semibold">Jl. Roti Lezat No. 123</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div 
          className="py-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm">
            © 2024 RotiFreeza. Semua hak dilindungi.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-roti-400 transition-colors text-sm">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-gray-400 hover:text-roti-400 transition-colors text-sm">
              Syarat Layanan
            </a>
            <a href="#" className="text-gray-400 hover:text-roti-400 transition-colors text-sm">
              Cookie
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
