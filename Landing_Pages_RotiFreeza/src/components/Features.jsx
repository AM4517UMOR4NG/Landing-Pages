import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, Zap, Shield, Clock, Users, Award } from 'lucide-react'

const features = [
  { icon: Leaf, title: 'Bahan Alami', desc: 'Tanpa pengawet, hanya bahan-bahan pilihan terbaik' },
  { icon: Zap, title: 'Fresh Setiap Hari', desc: 'Diproduksi fresh setiap pagi untuk kesegaran maksimal' },
  { icon: Shield, title: 'Kualitas Terjamin', desc: 'Standar kebersihan dan kualitas internasional' },
  { icon: Clock, title: 'Pengiriman Cepat', desc: 'Sampai dalam 30 menit atau gratis ongkir' },
  { icon: Users, title: 'Pelayanan Terbaik', desc: 'Tim profesional siap melayani Anda 24/7' },
  { icon: Award, title: 'Award Winning', desc: 'Pemenang berbagai penghargaan kuliner' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-roti-50 relative overflow-hidden">
      {/* Background animation */}
      <motion.div 
        className="absolute -top-40 -left-40 w-80 h-80 bg-accent-200 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Mengapa Pilih <span className="gradient-text">RotiFreeza?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kami berkomitmen memberikan yang terbaik untuk setiap pelanggan setia kami.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                {/* Glow Background - Coklat Mengkilap */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Card Container */}
                <motion.div
                  className="relative card p-8 bg-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                  whileInView={{
                    rotateX: [0, 5, 0],
                    rotateY: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{ perspective: '1000px' }}
                >
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute -inset-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Icon Container - Coklat Gradient */}
                  <motion.div 
                    className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 360,
                    }}
                    whileInView={{
                      rotate: 360,
                    }}
                    transition={{ 
                      duration: 1.2,
                    }}
                  >
                    <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>

                  {/* Animated Coklat Border */}
                  <motion.div 
                    className="mt-5 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-full shadow-lg"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ originX: 0 }}
                  />

                  {/* Decorative Dots */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
