import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Pemilik Mobil',
      content: 'Layanan ElBengkel sangat memuaskan. Mekanik profesional dan harga terjangkau. Saya merekomendasikan ke semua teman!',
      rating: 5,
      emoji: '👨‍💼',
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Pemilik Motor',
      content: 'Perbaikan motor saya cepat dan rapi. Teknisi sangat ramah dan menjelaskan masalah dengan detail.',
      rating: 5,
      emoji: '👩‍💼',
    },
    {
      name: 'Ahmad Wijaya',
      role: 'Pengusaha Transportasi',
      content: 'Untuk kebutuhan servis armada kendaraan, ElBengkel adalah pilihan terbaik. Terpercaya dan profesional!',
      rating: 5,
      emoji: '👨‍🏫',
    },
    {
      name: 'Rina Kusuma',
      role: 'Pemilik Mobil',
      content: 'Fasilitas modern dan mekanik berpengalaman. Mobil saya terasa seperti baru setelah servis di sini.',
      rating: 5,
      emoji: '👩‍🎓',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
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
            Testimoni Pelanggan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.emoji}</div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
