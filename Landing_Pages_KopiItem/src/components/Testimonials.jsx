import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  { name: 'Rina', role: 'Pecinta Kopi', quote: 'Rasanya konsisten dan aromanya khas. KopiItem selalu jadi pilihan pertama!', rating: 5 },
  { name: 'Budi', role: 'Freelancer', quote: 'Tempat yang nyaman untuk kerja. Latte-nya creamy banget.', rating: 5 },
  { name: 'Sarah', role: 'Mahasiswa', quote: 'Menu variatif, harga ramah. Cold brew-nya segar!', rating: 4 },
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
  hidden: { opacity: 0, y: 30, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-brand-100 to-brand-50 relative overflow-hidden">
      {/* Background animation */}
      <motion.div 
        className="absolute top-0 right-0 w-72 h-72 bg-brand-300 rounded-full blur-3xl opacity-10"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Apa Kata Mereka</h2>
          <p className="mt-3 text-brand-700">Cerita pelanggan setia KopiItem.</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((t, i) => (
            <motion.figure 
              key={t.name} 
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: '0 20px 50px rgba(122, 79, 43, 0.12)',
              }}
              className="card p-6 bg-white/80 backdrop-blur-sm cursor-pointer transition-all duration-300"
            >
              {/* Quote icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              >
                <Quote className="w-8 h-8 text-brand-600 opacity-30 mb-3" />
              </motion.div>

              {/* Stars */}
              <motion.div 
                className="flex gap-1 mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                {[...Array(5)].map((_, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5 + idx * 0.05 + i * 0.1 }}
                  >
                    <Star 
                      size={16} 
                      className={idx < t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote text */}
              <motion.blockquote 
                className="text-brand-800 font-medium italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                "{t.quote}"
              </motion.blockquote>

              {/* Author */}
              <motion.figcaption 
                className="mt-4 text-sm text-brand-700 font-semibold"
                whileHover={{ color: '#7A4F2B' }}
              >
                <span className="block">{t.name}</span>
                <span className="text-xs text-brand-600 font-normal">{t.role}</span>
              </motion.figcaption>

              {/* Animated bottom border */}
              <motion.div 
                className="mt-4 h-1 bg-gradient-to-r from-brand-600 to-brand-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
