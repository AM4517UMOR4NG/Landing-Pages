import React from 'react'
import { Coffee, Bean, BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { icon: Coffee, title: 'Racikan Barista', desc: 'Setiap cangkir dibuat oleh barista berpengalaman.' },
  { icon: Bean, title: 'Biji Pilihan', desc: 'Biji kopi lokal & impor berkualitas tinggi.' },
  { icon: BadgeCheck, title: 'Kualitas Terjamin', desc: 'Standar rasa yang konsisten setiap saat.' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
    <section id="features" className="py-20 bg-brand-50 relative overflow-hidden">
      {/* Background animation */}
      <motion.div 
        className="absolute -top-20 -right-20 w-40 h-40 bg-brand-200 rounded-full blur-3xl opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Kenapa Memilih KopiItem?</h2>
          <motion.p 
            className="mt-3 text-brand-700"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Kami menghadirkan pengalaman ngopi terbaik untuk Anda.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((it, idx) => (
            <motion.div 
              key={it.title} 
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: '0 20px 40px rgba(122, 79, 43, 0.15)',
              }}
              className="card p-6 cursor-pointer transition-all duration-300"
            >
              <motion.div 
                className="w-12 h-12 rounded-lg bg-brand-100 text-brand-800 flex items-center justify-center"
                whileHover={{ 
                  scale: 1.15,
                  rotate: 10,
                  backgroundColor: '#7A4F2B',
                  color: '#FEF3E2',
                }}
                transition={{ duration: 0.3 }}
              >
                <it.icon size={24} />
              </motion.div>
              
              <motion.h3 
                className="mt-4 text-xl font-semibold"
                whileHover={{ color: '#7A4F2B' }}
              >
                {it.title}
              </motion.h3>
              
              <motion.p 
                className="mt-2 text-brand-700"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {it.desc}
              </motion.p>

              {/* Animated border on hover */}
              <motion.div 
                className="mt-4 h-1 bg-gradient-to-r from-brand-700 to-brand-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
