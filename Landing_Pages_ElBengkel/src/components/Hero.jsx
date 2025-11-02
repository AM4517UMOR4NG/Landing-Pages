import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Zap } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  // Background images array - ganti dengan URL foto Anda
  // Gunakan foto lokal atau URL yang accessible
  const backgroundImages = [
    'https://cdn.antaranews.com/cache/1200x800/2019/09/03/WhatsApp-Image-2019-09-03-at-17.08.33.jpeg',
    'https://imx.co.id/wp-content/uploads/2024/06/Ide-Nama-Bengkel-Motor.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyYWFTu_ZYD8wHndQMBD03-EGwJJyUUtX2uw&s',
    'https://thumbs.dreamstime.com/b/balikpapan-indonesia-april-customers-line-motorcycle-service-center-bengkel-motor-rush-hours-activity-motorbike-377118601.jpg',
  ]
  const slidesCount = backgroundImages.length
  const [distancePx, setDistancePx] = useState(0)
  const trackRef = useRef(null)
  const offsetRef = useRef(0)
  const rafRef = useRef(0)
  const lastTsRef = useRef(0)
  const speed = 120 // px per second

  useEffect(() => {
    const calc = () => setDistancePx(window.innerWidth * slidesCount)
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [slidesCount])

  useEffect(() => {
    const step = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts
      const dt = (ts - lastTsRef.current) / 1000
      lastTsRef.current = ts
      // move by speed * dt
      offsetRef.current += speed * dt
      if (distancePx > 0) {
        offsetRef.current = offsetRef.current % distancePx
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(rafRef.current)
      lastTsRef.current = 0
    }
  }, [distancePx, speed])

  return (
    <section id="home" className="relative min-h-[calc(100dvh+4rem)] -mb-px flex items-center justify-center overflow-hidden bg-black">
      {/* Sliding Background Images */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <motion.div ref={trackRef} className="flex h-full will-change-transform">
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className="w-screen h-full bg-cover bg-center bg-no-repeat flex-shrink-0"
              style={{
                backgroundImage: `url('${img}')`,
              }}
            />
          ))}
          {/* Duplicate pertama untuk seamless loop */}
          {backgroundImages.map((img, index) => (
            <div
              key={`duplicate-${index}`}
              className="w-screen h-full bg-cover bg-center bg-no-repeat flex-shrink-0"
              style={{
                backgroundImage: `url('${img}')`,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Overlay untuk readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-secondary opacity-30"></div>

      {/* Animated Background Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      ></motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      ></motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Bengkel Motor & Mobil
          <span className="block text-primary">Profesional & Terpercaya</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto"
        >
          Layanan perbaikan dan perawatan kendaraan dengan teknologi terkini, mekanik berpengalaman, dan harga yang kompetitif
        </motion.p>

        
      </motion.div>
    </section>
  )
}
