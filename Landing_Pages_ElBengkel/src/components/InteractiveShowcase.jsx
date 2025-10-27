import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function InteractiveShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  const showcaseItems = [
    {
      id: 1,
      title: 'Ruang Servis Modern',
      description: 'Fasilitas servis dengan teknologi terkini dan mekanik profesional',
      emoji: '🏭',
      color: 'from-blue-500 to-blue-600',
      details: ['Luas 500m²', 'Lift Hidrolik', 'Diagnostic Computer'],
    },
    {
      id: 2,
      title: 'Peralatan Canggih',
      description: 'Equipment terbaru untuk diagnosis dan perbaikan kendaraan',
      emoji: '🔧',
      color: 'from-yellow-500 to-yellow-600',
      details: ['Diagnostic Scanner', 'Alignment Machine', 'Tire Balance'],
    },
    {
      id: 3,
      title: 'Tim Profesional',
      description: 'Mekanik bersertifikat dengan pengalaman puluhan tahun',
      emoji: '👨‍🔧',
      color: 'from-green-500 to-green-600',
      details: ['Certified Mechanics', 'Expert Training', '24/7 Available'],
    },
    {
      id: 4,
      title: 'Layanan Lengkap',
      description: 'Dari servis rutin hingga perbaikan berat semua tersedia',
      emoji: '🛠️',
      color: 'from-red-500 to-red-600',
      details: ['Maintenance', 'Repair', 'Customization'],
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % showcaseItems.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length)
  }

  const currentItem = showcaseItems[activeIndex]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Showcase Interaktif
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Jelajahi fasilitas dan keunggulan ElBengkel secara interaktif
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - 3D Card */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.6 }}
            className="perspective"
          >
            <div
              className={`bg-gradient-to-br ${currentItem.color} rounded-2xl p-12 text-white shadow-2xl transform-gpu`}
              style={{
                transformStyle: 'preserve-3d',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-9xl mb-6"
              >
                {currentItem.emoji}
              </motion.div>
              <h3 className="text-4xl font-bold mb-4">{currentItem.title}</h3>
              <p className="text-lg text-gray-100 mb-8">{currentItem.description}</p>
              <div className="flex flex-wrap gap-3">
                {currentItem.details.map((detail, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md"
                  >
                    {detail}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Navigation */}
          <div className="space-y-8">
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 gap-4">
              {showcaseItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-6 rounded-xl transition-all duration-300 ${
                    idx === activeIndex
                      ? `bg-gradient-to-br ${item.color} text-white shadow-lg scale-105`
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <div className="text-4xl mb-2">{item.emoji}</div>
                  <p className="font-semibold text-sm">{item.title}</p>
                </motion.button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="bg-primary text-white p-4 rounded-full hover:shadow-lg transition-shadow"
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="bg-primary text-white p-4 rounded-full hover:shadow-lg transition-shadow"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>

            {/* Progress Indicator */}
            <div className="flex gap-2 justify-center lg:justify-start">
              {showcaseItems.map((_, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    width: idx === activeIndex ? 32 : 8,
                    backgroundColor: idx === activeIndex ? '#FF6B35' : '#666',
                  }}
                  className="h-2 rounded-full transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
