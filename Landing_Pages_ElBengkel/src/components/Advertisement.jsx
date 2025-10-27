import { motion } from 'framer-motion'
import { Star, Zap, Shield, Clock } from 'lucide-react'

export default function Advertisement() {
  const ads = [
    {
      title: 'Promo Spesial',
      description: 'Diskon hingga 30% untuk servis rutin',
      emoji: '🎉',
      color: 'from-pink-500 to-rose-500',
      badge: 'TERBATAS',
    },
    {
      title: 'Member Loyalty',
      description: 'Dapatkan poin reward setiap transaksi',
      emoji: '⭐',
      color: 'from-yellow-500 to-amber-500',
      badge: 'EKSKLUSIF',
    },
    {
      title: 'Garansi Resmi',
      description: 'Semua pekerjaan dijamin 100%',
      emoji: '✅',
      color: 'from-green-500 to-emerald-500',
      badge: 'TERPERCAYA',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Penawaran Spesial
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manfaatkan berbagai promosi dan keuntungan eksklusif dari ElBengkel
          </p>
        </motion.div>

        {/* Advertisement Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {ads.map((ad, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${ad.color} rounded-2xl p-8 text-white shadow-xl overflow-hidden`}>
                {/* Animated Background */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Badge */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold"
                >
                  {ad.badge}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-6xl mb-4">{ad.emoji}</div>
                  <h3 className="text-2xl font-bold mb-2">{ad.title}</h3>
                  <p className="text-lg text-gray-100 mb-6">{ad.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-gray-900 px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-shadow"
                  >
                    Lihat Detail
                  </motion.button>
                </div>

                {/* Shine Effect */}
                <motion.div
                  animate={{
                    x: ['0%', '100%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 pointer-events-none"
                  style={{
                    transform: 'skewX(-20deg)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Campaign */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white overflow-hidden relative"
        >
          {/* Background Animation */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0 bg-white mix-blend-overlay"
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-4">Paket Tahunan</h3>
              <p className="text-xl text-gray-100 mb-8">
                Daftar sekarang dan dapatkan benefit eksklusif sepanjang tahun
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Zap className="text-yellow-300" size={24} />
                  <span>Diskon hingga 40% untuk semua layanan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="text-green-300" size={24} />
                  <span>Garansi extended untuk semua pekerjaan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-blue-300" size={24} />
                  <span>Priority service tanpa antri</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-3 rounded-lg font-bold text-lg hover:shadow-lg transition-shadow"
              >
                Daftar Sekarang
              </motion.button>
            </div>

            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-center"
            >
              <div className="text-9xl mb-4">🎁</div>
              <p className="text-2xl font-bold">Bonus Senilai 5 Juta</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
