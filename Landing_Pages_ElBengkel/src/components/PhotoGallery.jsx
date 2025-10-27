import { motion } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const photos = [
    {
      id: 1,
      title: 'Ruang Servis Utama',
      category: 'Fasilitas',
      image: '🏭',
    },
    {
      id: 2,
      title: 'Diagnostic Center',
      category: 'Teknologi',
      image: '💻',
    },
    {
      id: 3,
      title: 'Painting Booth',
      category: 'Body Repair',
      image: '🎨',
    },
    {
      id: 4,
      title: 'Spare Parts Store',
      category: 'Inventory',
      image: '📦',
    },
    {
      id: 5,
      title: 'Waiting Room',
      category: 'Kenyamanan',
      image: '☕',
    },
    {
      id: 6,
      title: 'Mekanik Team',
      category: 'Tim',
      image: '👨‍🔧',
    },
    {
      id: 7,
      title: 'Alignment Machine',
      category: 'Peralatan',
      image: '⚙️',
    },
    {
      id: 8,
      title: 'Tire Service',
      category: 'Layanan',
      image: '🛞',
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
            Galeri Foto Lengkap
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lihat fasilitas dan layanan profesional kami
          </p>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(photo)}
              className="group relative overflow-hidden rounded-xl cursor-pointer h-64 bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Image */}
              <div className="w-full h-full flex items-center justify-center text-7xl group-hover:scale-125 transition-transform duration-300">
                {photo.image}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg">{photo.title}</h3>
                <p className="text-gray-300 text-sm">{photo.category}</p>
              </div>

              {/* Border */}
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
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full z-10 hover:bg-secondary transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-96 flex items-center justify-center text-9xl">
                  {selectedImage.image}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {selectedImage.category}
                  </p>
                  <p className="text-gray-600">
                    Ini adalah salah satu dari banyak fasilitas profesional yang kami tawarkan untuk kepuasan pelanggan kami.
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
