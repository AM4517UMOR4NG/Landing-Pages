import { motion } from 'framer-motion'
import { Users, Zap, Award, Clock } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Pelanggan Puas',
    },
    {
      icon: Zap,
      number: '10000+',
      label: 'Kendaraan Terawat',
    },
    {
      icon: Award,
      number: '9 Tahun',
      label: 'Pengalaman',
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Siap Melayani',
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
    <section className="py-20 gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  className="flex justify-center mb-4"
                >
                  <div className="bg-white bg-opacity-20 p-4 rounded-full">
                    <Icon size={32} className="text-primary" />
                  </div>
                </motion.div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-200 text-lg">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
