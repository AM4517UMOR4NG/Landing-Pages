import { motion } from 'framer-motion'
import { Zap, Shield, Headphones, Leaf } from 'lucide-react'

export default function Features3D() {
  const features = [
    {
      icon: Zap,
      title: 'Teknologi Terkini',
      description: 'Menggunakan peralatan diagnostic dan repair terbaru',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: Shield,
      title: 'Garansi Terjamin',
      description: 'Semua pekerjaan dilengkapi dengan garansi resmi',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Headphones,
      title: 'Customer Service 24/7',
      description: 'Tim support siap membantu kapan saja Anda butuh',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Leaf,
      title: 'Ramah Lingkungan',
      description: 'Menggunakan material dan proses yang eco-friendly',
      color: 'from-emerald-400 to-emerald-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            Keunggulan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kami berkomitmen memberikan layanan terbaik dengan standar internasional
          </p>
        </motion.div>

        {/* Features Grid with 3D Effect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -15,
                  rotateX: 10,
                  rotateY: -10,
                  scale: 1.05,
                }}
                className="group perspective"
              >
                <div className="relative h-full bg-white rounded-xl shadow-lg p-8 overflow-hidden transform-gpu transition-all duration-300 hover:shadow-2xl"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Icon Container */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="relative z-10 mb-6"
                  >
                    <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} className="text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
