import { motion } from 'framer-motion'
import { Wrench, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Layanan',
      links: ['Perbaikan Mesin', 'Servis Rem', 'AC & Pendingin', 'Body Repair'],
    },
    {
      title: 'Perusahaan',
      links: ['Tentang Kami', 'Blog', 'Karir', 'Kebijakan Privasi'],
    },
    {
      title: 'Dukungan',
      links: ['Hubungi Kami', 'FAQ', 'Panduan', 'Feedback'],
    },
  ]

  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Linkedin, label: 'LinkedIn' },
  ]

  return (
    <footer className="gradient-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="gradient-primary p-2 rounded-lg">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">ElBengkel</span>
            </div>
            <p className="text-gray-400">
              Bengkel motor dan mobil profesional dengan teknologi terkini dan mekanik berpengalaman.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="bg-white bg-opacity-10 p-2 rounded-lg hover:bg-primary transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
            <p className="text-gray-400">
              © {currentYear} ElBengkel. Semua hak dilindungi.
            </p>
            <div className="flex gap-6 justify-center md:justify-end text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 gradient-primary p-3 rounded-full shadow-lg hover:shadow-2xl transition-shadow z-40"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  )
}
