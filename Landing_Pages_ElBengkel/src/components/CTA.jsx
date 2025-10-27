import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"
      ></motion.div>

      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"
      ></motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Siap Melayani Kendaraan Anda?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk mendapatkan layanan terbaik dan harga yang kompetitif
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:shadow-2xl transition-all"
            >
              <Phone size={20} />
              Hubungi Kami
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-white hover:bg-opacity-10 transition-all"
            >
              <MapPin size={20} />
              Kunjungi Kami
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
