import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, MapPin } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-roti-600 to-roti-500 relative overflow-hidden">
      {/* Background animation */}
      <motion.div 
        className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl opacity-10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full blur-3xl opacity-10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Siap Menikmati Kelezatan?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Jangan lewatkan kesempatan untuk merasakan roti premium RotiFreeza. Pesan sekarang dan dapatkan diskon spesial hingga 20% untuk pembelian pertama Anda!
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.button
              className="btn bg-white text-roti-600 hover:bg-gray-100 font-bold flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pesan Sekarang
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              className="btn border-2 border-white text-white hover:bg-white/10 font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hubungi Kami
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="grid sm:grid-cols-2 gap-6 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
            >
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <p className="font-semibold mb-2">Hubungi Kami</p>
              <p className="text-white/80">+62 812 3456 7890</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
            >
              <MapPin className="w-8 h-8 mx-auto mb-3" />
              <p className="font-semibold mb-2">Kunjungi Kami</p>
              <p className="text-white/80">Jl. Roti Lezat No. 123, Jakarta</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
