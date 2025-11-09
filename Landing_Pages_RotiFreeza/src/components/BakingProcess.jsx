import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChefHat, Wheat, Timer, Flame, CheckCircle, Sparkles } from 'lucide-react'

const processes = [
  {
    id: 1,
    title: 'Persiapan Bahan',
    icon: Wheat,
    time: '15 menit',
    description: 'Memilih bahan-bahan berkualitas premium: tepung terigu pilihan, ragi segar, gula, garam, dan mentega',
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-50',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800',
  },
  {
    id: 2,
    title: 'Mixing & Kneading',
    icon: ChefHat,
    time: '20 menit',
    description: 'Mencampur dan menguleni adonan hingga elastis dan lembut dengan teknik profesional',
    color: 'from-orange-400 to-red-500',
    bgColor: 'bg-orange-50',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800',
  },
  {
    id: 3,
    title: 'Fermentasi',
    icon: Timer,
    time: '60 menit',
    description: 'Proses fermentasi alami untuk mengembangkan rasa dan tekstur roti yang sempurna',
    color: 'from-red-400 to-pink-500',
    bgColor: 'bg-red-50',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=800',
  },
  {
    id: 4,
    title: 'Pemanggangan',
    icon: Flame,
    time: '30 menit',
    description: 'Dipanggang dengan suhu ideal untuk menghasilkan roti yang empuk di dalam dan renyah di luar',
    color: 'from-pink-400 to-rose-500',
    bgColor: 'bg-pink-50',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800',
  },
  {
    id: 5,
    title: 'Siap Disajikan',
    icon: CheckCircle,
    time: '10 menit',
    description: 'Roti segar siap dikemas dan diantarkan dalam kondisi hangat ke pelanggan tercinta',
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-50',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800',
  },
]

export default function BakingProcess() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-roti-200 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent-200 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-white rounded-full shadow-lg border-2 border-roti-200"
          >
            <Sparkles className="text-roti-600" size={20} />
            <span className="text-roti-600 font-bold text-sm">Proses Pembuatan</span>
            <ChefHat className="text-amber-500" size={20} />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Dari Dapur <span className="gradient-text">Hingga Meja Anda</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Setiap roti dibuat dengan cinta dan dedikasi melalui proses yang teliti
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop View - Horizontal Timeline */}
          <div className="hidden md:block mb-12">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200">
                <motion.div
                  className="h-full bg-gradient-to-r from-roti-400 to-roti-600"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(activeStep / (processes.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Steps */}
              {processes.map((process, index) => {
                const Icon = process.icon
                const isActive = index === activeStep
                const isCompleted = index < activeStep

                return (
                  <motion.button
                    key={process.id}
                    onClick={() => setActiveStep(index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 flex flex-col items-center gap-3 group"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.2 : 1,
                        boxShadow: isActive ? '0 10px 30px rgba(0,0,0,0.2)' : '0 5px 15px rgba(0,0,0,0.1)',
                      }}
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                        isActive || isCompleted
                          ? `bg-gradient-to-br ${process.color} text-white`
                          : 'bg-white text-gray-400 border-2 border-gray-200'
                      }`}
                    >
                      <Icon size={24} />
                    </motion.div>
                    
                    <span className={`text-sm font-semibold transition-colors hidden lg:block ${
                      isActive ? 'text-roti-600' : 'text-gray-500 group-hover:text-roti-600'
                    }`}>
                      {process.title}
                    </span>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Mobile View - Vertical Timeline */}
          <div className="md:hidden mb-12 space-y-4">
            {processes.map((process, index) => {
              const Icon = process.icon
              const isActive = index === activeStep

              return (
                <motion.button
                  key={process.id}
                  onClick={() => setActiveStep(index)}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-4 rounded-xl flex items-center gap-4 transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-roti-50 to-cream-50 border-2 border-roti-400'
                      : 'bg-white border-2 border-gray-200'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isActive
                      ? `bg-gradient-to-br ${process.color} text-white`
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div className="text-left">
                    <p className={`font-bold ${isActive ? 'text-roti-600' : 'text-gray-700'}`}>
                      {process.title}
                    </p>
                    <p className="text-sm text-gray-500">{process.time}</p>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Content Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="card overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image */}
                <motion.div 
                  className="relative h-64 md:h-full rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={processes[activeStep].image}
                    alt={processes[activeStep].title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${processes[activeStep].color} opacity-20`} />
                  
                  {/* Time Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <Timer size={16} className="text-roti-600" />
                      <span className="font-bold text-roti-600 text-sm">
                        {processes[activeStep].time}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${processes[activeStep].bgColor}`}>
                      <span className="text-sm font-bold text-gray-700">
                        Langkah {activeStep + 1} dari {processes.length}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
                      {processes[activeStep].title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {processes[activeStep].description}
                    </p>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                      {activeStep > 0 && (
                        <motion.button
                          onClick={() => setActiveStep(prev => prev - 1)}
                          whileHover={{ scale: 1.05, x: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-all"
                        >
                          ← Sebelumnya
                        </motion.button>
                      )}
                      
                      {activeStep < processes.length - 1 && (
                        <motion.button
                          onClick={() => setActiveStep(prev => prev + 1)}
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-6 py-3 bg-gradient-to-r ${processes[activeStep].color} text-white font-bold rounded-xl hover:shadow-xl transition-all`}
                        >
                          Selanjutnya →
                        </motion.button>
                      )}

                      {activeStep === processes.length - 1 && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:shadow-xl transition-all flex items-center gap-2"
                        >
                          <CheckCircle size={20} />
                          Pesan Sekarang
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
