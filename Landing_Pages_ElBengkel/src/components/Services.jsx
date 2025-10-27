import { motion } from 'framer-motion'
import { Wrench, Zap, Droplet, Gauge, Shield, Hammer } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Perbaikan Mesin',
      description: 'Perbaikan mesin lengkap dengan diagnosis komputer modern',
      color: 'from-blue-500 to-blue-600',
      image: '🔧',
    },
    {
      icon: Zap,
      title: 'Sistem Listrik',
      description: 'Perbaikan dan perawatan sistem kelistrikan kendaraan',
      color: 'from-yellow-500 to-yellow-600',
      image: '⚡',
    },
    {
      icon: Droplet,
      title: 'Ganti Oli & Filter',
      description: 'Perawatan rutin dengan oli berkualitas premium',
      color: 'from-green-500 to-green-600',
      image: '🛢️',
    },
    {
      icon: Gauge,
      title: 'Servis Rem',
      description: 'Perbaikan dan perawatan sistem pengereman',
      color: 'from-red-500 to-red-600',
      image: '🛑',
    },
    {
      icon: Shield,
      title: 'AC & Pendingin',
      description: 'Servis AC mobil dan sistem pendingin mesin',
      color: 'from-cyan-500 to-cyan-600',
      image: '❄️',
    },
    {
      icon: Hammer,
      title: 'Body Repair',
      description: 'Perbaikan body dan cat kendaraan profesional',
      color: 'from-purple-500 to-purple-600',
      image: '🎨',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="services" className="py-20 bg-gray-50">
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
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan perbaikan dan perawatan kendaraan dengan standar internasional
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Card Header with Gradient */}
                <div className={`bg-gradient-to-r ${service.color} h-32 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-7xl">{service.image}</div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-primary font-semibold hover:text-secondary transition-colors"
                  >
                    Pelajari Lebih Lanjut →
                  </motion.button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="gradient-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:scale-105">
            Lihat Semua Layanan
          </button>
        </motion.div>
      </div>
    </section>
  )
}
