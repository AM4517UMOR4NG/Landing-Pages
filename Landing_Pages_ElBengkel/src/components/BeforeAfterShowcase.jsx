import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowLeftRight, Award, CheckCircle } from 'lucide-react'

export default function BeforeAfterShowcase() {
  const [sliderPositions, setSliderPositions] = useState([50, 50, 50, 50])

  const showcases = [
    {
      id: 1,
      title: 'Body Repair & Cat Ulang',
      before: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200',
      after: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200',
      description: 'Perbaikan body dan pengecatan profesional',
      duration: '3 Hari',
    },
    {
      id: 2,
      title: 'Detailing Interior & Eksterior',
      before: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200',
      after: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200',
      description: 'Pembersihan menyeluruh dan detailing premium',
      duration: '1 Hari',
    },
    {
      id: 3,
      title: 'Modifikasi & Custom',
      before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200',
      after: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200',
      description: 'Modifikasi custom sesuai keinginan',
      duration: '5 Hari',
    },
    {
      id: 4,
      title: 'Restorasi Motor Klasik',
      before: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=1200',
      after: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=1200',
      description: 'Restorasi motor klasik seperti baru',
      duration: '14 Hari',
    },
  ]

  const handleSliderChange = (index, value) => {
    const newPositions = [...sliderPositions]
    newPositions[index] = value
    setSliderPositions(newPositions)
  }

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-lg mb-2">
            Geser untuk melihat transformasi menakjubkan dari Before ke After
          </p>
        </motion.div>

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showcases.map((showcase, index) => (
            <motion.div
              key={showcase.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-black rounded-lg overflow-hidden border-2 border-orange-500 hover:border-orange-400 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                {/* After Image (Background) */}
                <div className="absolute inset-0">
                  <img
                    src={showcase.after}
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded text-xs font-bold flex items-center gap-1.5">
                    <CheckCircle size={14} />
                    AFTER
                  </div>
                </div>

                {/* Before Image (Overlay with clip) */}
                <div
                  className="absolute inset-0 transition-all duration-200"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPositions[index]}% 0 0)`,
                  }}
                >
                  <img
                    src={showcase.before}
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 text-gray-900 px-3 py-1 rounded text-xs font-bold">
                    BEFORE
                  </div>
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute inset-y-0 w-0.5 bg-white cursor-ew-resize z-10"
                  style={{ left: `${sliderPositions[index]}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform">
                    <ArrowLeftRight className="text-gray-900" size={20} />
                  </div>
                </div>

                {/* Slider Input */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPositions[index]}
                  onChange={(e) => handleSliderChange(index, e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                />
              </div>

              {/* Info Section */}
              <div className="p-5 bg-black">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-orange-500">
                    {showcase.title}
                  </h3>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded text-xs font-bold border border-orange-500/50">
                    {showcase.duration}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{showcase.description}</p>
                
                {/* Stats */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <Award className="text-orange-500" size={16} />
                    <span className="text-xs text-gray-400">Hasil Premium</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="text-blue-500" size={16} />
                    <span className="text-xs text-gray-400">100% Puas</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
