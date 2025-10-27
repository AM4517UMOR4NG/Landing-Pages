import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -300])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="w-full h-full bg-gradient-to-b from-primary to-secondary opacity-20" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Pengalaman Servis
          <span className="block text-primary">Terbaik di Kelasnya</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Dengan teknologi terdepan dan tim profesional, kami siap memberikan layanan terbaik untuk kendaraan Anda
        </motion.p>

        {/* Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: '⚡', label: 'Cepat', value: '30 Menit' },
            { icon: '💰', label: 'Terjangkau', value: 'Harga Kompetitif' },
            { icon: '✅', label: 'Terpercaya', value: '9 Tahun' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-white border border-white border-opacity-20"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="text-sm text-gray-300 mb-2">{item.label}</p>
              <p className="text-2xl font-bold">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Animated Shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"
      />

      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"
      />
    </section>
  )
}
