import { motion } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    {
      id: 1,
      title: 'Ruang Servis Modern',
      category: 'Fasilitas',
      emoji: '🏭',
    },
    {
      id: 2,
      title: 'Mekanik Profesional',
      category: 'Tim',
      emoji: '👨‍🔧',
    },
    {
      id: 3,
      title: 'Peralatan Canggih',
      category: 'Teknologi',
      emoji: '🔧',
    },
    {
      id: 4,
      title: 'Perbaikan Mesin',
      category: 'Servis',
      emoji: '⚙️',
    },
    {
      id: 5,
      title: 'Pengecatan Profesional',
      category: 'Body Repair',
      emoji: '🎨',
    },
    {
      id: 6,
      title: 'Servis AC',
      category: 'Perawatan',
      emoji: '❄️',
    },
    {
      id: 7,
      title: 'Ganti Oli',
      category: 'Maintenance',
      emoji: '🛢️',
    },
    {
      id: 8,
      title: 'Servis Rem',
      category: 'Keselamatan',
      emoji: '🛑',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="gallery" className="py-20 bg-white">
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
            Galeri Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lihat fasilitas dan hasil kerja profesional kami
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-xl cursor-pointer h-64 bg-gradient-to-br from-gray-100 to-gray-200"
            >
              {/* Image Placeholder with Emoji */}
              <div className="w-full h-full flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.category}</p>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-2xl w-full overflow-hidden"
            >
              {/* Modal Content */}
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full z-10 hover:bg-secondary transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Image */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-96 flex items-center justify-center text-9xl">
                  {selectedImage.emoji}
                </div>

                {/* Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {selectedImage.category}
                  </p>
                  <p className="text-gray-600">
                    Ini adalah salah satu dari banyak layanan dan fasilitas profesional yang kami tawarkan untuk kepuasan pelanggan kami.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
