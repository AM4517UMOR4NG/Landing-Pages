import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-roti-50 via-cream-50 to-white py-20 md:py-32">
      {/* Animated background elements */}
      <motion.div 
        className="absolute -top-40 -right-40 w-80 h-80 bg-roti-300 rounded-full blur-3xl opacity-20"
        animate={{ 
          x: [0, 40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-300 rounded-full blur-3xl opacity-15"
        animate={{ 
          x: [0, -40, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container relative z-10 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-roti-600" />
              <span className="text-sm font-semibold text-roti-600">Roti Segar Setiap Hari</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-black leading-tight"
            >
              Roti Lezat,{' '}
              <span className="gradient-text">Hidup Lebih Nikmat</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Nikmati kelezatan roti premium yang dibuat fresh setiap hari dengan bahan-bahan pilihan terbaik. RotiFreeza menghadirkan pengalaman kuliner yang tak terlupakan.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex gap-4 flex-wrap"
            >
              <motion.button
                className="btn btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Pesan Sekarang
                <ArrowRight size={18} />
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lihat Menu
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              {[
                { num: '10K+', label: 'Pelanggan Puas' },
                { num: '50+', label: 'Varian Roti' },
                { num: '4.9/5', label: 'Rating' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-roti-100"
                >
                  <div className="font-bold text-roti-600">{stat.num}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - 3D Image */}
          <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-96 md:h-full perspective"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              animate={{ 
                rotateX: [0, 10, 0],
                rotateY: [0, -10, 0],
                rotateZ: [0, 5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full h-full"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://media.istockphoto.com/id/507021914/id/foto/berbagai-macam-croissand-dan-roti.jpg?s=612x612&w=0&k=20&c=YDwmaGKCuToPH3wBNL_TAw2vPt0hZTRY1vMkXOhu5no=" 
                  alt="Roti Premium" 
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-roti-600/20 to-transparent"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
