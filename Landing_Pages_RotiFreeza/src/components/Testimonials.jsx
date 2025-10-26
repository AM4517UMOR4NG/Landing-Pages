import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  { name: 'Siti Nurhaliza', role: 'Ibu Rumah Tangga', quote: 'Roti RotiFreeza sangat lezat dan selalu fresh! Keluarga saya jadi suka sarapan sekarang.', rating: 5, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop' },
  { name: 'Budi Santoso', role: 'Pengusaha', quote: 'Kualitas terjamin dan pelayanan luar biasa. Saya rekomendasikan ke semua teman bisnis saya.', rating: 5, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
  { name: 'Rina Wijaya', role: 'Karyawan', quote: 'Harga terjangkau dengan kualitas premium. Ini adalah pilihan terbaik untuk sarapan sehat.', rating: 4, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
  { name: 'Ahmad Hidayat', role: 'Mahasiswa', quote: 'Roti tawarnya empuk dan enak! Jadi favorit saya untuk bekal kuliah setiap hari.', rating: 5, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
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
  hidden: { opacity: 0, y: 30, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Testimonials() {
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-roti-50 to-white relative overflow-hidden">
      {/* Background */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-accent-200 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.1, 1] }}
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
            Apa Kata <span className="gradient-text">Pelanggan Kami</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Ribuan pelanggan puas telah merasakan kelezatan roti premium kami.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                animate={{
                  opacity: current === idx || current === idx + 2 ? 1 : 0.5,
                  scale: current === idx || current === idx + 2 ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
                className="card p-8 relative"
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-roti-600/30 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: idx * 0.1 + i * 0.05 }}
                    >
                      <Star 
                        size={16}
                        className={i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 font-medium mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.img 
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                {/* Animated border */}
                <motion.div 
                  className="absolute inset-0 border-2 border-roti-600 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: current === idx || current === idx + 2 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === idx ? 'bg-roti-600 w-8' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
