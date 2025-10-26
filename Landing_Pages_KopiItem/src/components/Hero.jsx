import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-brand-900 via-brand-800 to-brand-700 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(60rem_60rem_at_80%_-10%,#ffffff,transparent)]" />
      <motion.div 
        className="absolute -top-40 -right-40 w-80 h-80 bg-brand-600 rounded-full blur-3xl opacity-20"
        animate={{ 
          x: [0, 30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-700 rounded-full blur-3xl opacity-20"
        animate={{ 
          x: [0, -30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container py-20 md:py-28 flex flex-col md:flex-row items-center gap-10 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-brand-300" />
            <span className="text-sm font-semibold text-brand-300">Kopi Spesialti Terbaik</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold tracking-tight">
            KopiItem
          </motion.h1>
          
          <motion.p variants={itemVariants} className="mt-4 text-lg text-white/80">
            Nikmati momen dengan secangkir kopi spesialti. Diracik dengan biji pilihan, disajikan hangat untuk menemani harimu.
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-8 flex gap-3 flex-wrap">
            <motion.a 
              href="#menu" 
              className="btn btn-secondary flex items-center gap-2"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Menu
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a 
              href="#features" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Keunggulan
            </motion.a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-8 grid grid-cols-3 gap-6">
            {[
              { num: '5000+', label: 'Pelanggan puas' },
              { num: '20+', label: 'Varian kopi' },
              { num: '4.8/5', label: 'Rating rata-rata' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="cursor-default"
              >
                <motion.div 
                  className="text-2xl font-bold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {stat.num}
                </motion.div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 w-full"
        >
          <motion.div 
            variants={floatingVariants}
            animate="animate"
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-brand-100"
          >
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop" 
              alt="KopiItem Hero" 
              className="w-full h-full object-cover" 
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-transparent"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
