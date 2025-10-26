import React from 'react'
import { motion } from 'framer-motion'
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryItems = [
  { id: 1, img: 'https://www.tokomesin.com/wp-content/uploads/2017/12/roti-tawar-tepung-serbaguna-1.jpg', title: 'Roti Tawar' },
  { id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaId20pWZq_8Mn9XvekAlL85hLNkYOj0EXUA&s', title: 'Croissant' },
  { id: 3, img: 'https://cdn.britannica.com/38/230838-050-D0173E79/doughnuts-donuts.jpg', title: 'Donut' },
  { id: 4, img: 'https://images.squarespace-cdn.com/content/v1/6109e64cfe878a0cad199515/cc385b01-b05f-4bb4-9752-92924a41333d/french-baguette.jpg', title: 'Baguette' },
  { id: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCJIs6Dgg8Pe4pHbeDAWEhaUe2XcZAG7Usg&s', title: 'Roti Gandum' },
  { id: 6, img: 'https://i2.wp.com/resepkoki.id/wp-content/uploads/2018/11/puff-pastry.jpg?fit=1194%2C893&ssl=1', title: 'Pastry' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Gallery() {
  const [selectedId, setSelectedId] = React.useState(null)

  const currentIndex = galleryItems.findIndex(item => item.id === selectedId)
  
  const goToPrevious = (e) => {
    e.stopPropagation()
    const newIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
    setSelectedId(galleryItems[newIndex].id)
  }

  const goToNext = (e) => {
    e.stopPropagation()
    const newIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1
    setSelectedId(galleryItems[newIndex].id)
  }

  const closeModal = () => setSelectedId(null)

  // Keyboard support
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedId) return
      
      if (e.key === 'Escape') {
        closeModal()
      } else if (e.key === 'ArrowLeft') {
        goToPrevious(e)
      } else if (e.key === 'ArrowRight') {
        goToNext(e)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedId, currentIndex])

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      {/* Background */}
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-roti-100 rounded-full blur-3xl opacity-30"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">Galeri</span> Produk Kami
          </h2>
          <p className="text-gray-600 text-lg">
            Lihat koleksi lengkap roti premium kami yang menggugah selera.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              layoutId={`gallery-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              className="relative group cursor-pointer"
            >
              {/* Outer Frame - Friendly Border */}
              <motion.div
                className="p-4 bg-gradient-to-br from-roti-100 to-cream-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                {/* Inner Image Container */}
                <div className="relative h-64 rounded-2xl overflow-hidden bg-white shadow-md">
                  {/* Image */}
                  <motion.img 
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="p-4 rounded-full bg-white/30 backdrop-blur-md mb-3 border-2 border-white/50"
                    >
                      <Eye className="w-8 h-8 text-white" />
                    </motion.div>
                    <p className="text-white font-bold text-lg drop-shadow-lg">{item.title}</p>
                  </motion.div>
                </div>

                {/* Title Below Frame */}
                <motion.div 
                  className="mt-4 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-roti-600 font-semibold text-sm">{item.title}</p>
                </motion.div>
              </motion.div>

              {/* Decorative Corner Accents */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-roti-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-6 h-6 bg-cream-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.2 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: selectedId ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeModal}
          className={`fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center ${selectedId ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          <motion.div
            layoutId={`gallery-${selectedId}`}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image Container */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
              {selectedId && (
                <img 
                  src={galleryItems.find(i => i.id === selectedId)?.img}
                  alt={galleryItems.find(i => i.id === selectedId)?.title}
                  className="w-full h-auto object-cover max-h-[80vh]"
                />
              )}

              {/* Close Button */}
              <motion.button
                onClick={closeModal}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 p-3 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-lg backdrop-blur-sm border-2 border-white/50 transition-all"
              >
                <X size={28} />
              </motion.button>

              {/* Title */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border-2 border-white/50">
                <p className="text-gray-900 font-bold text-lg">
                  {galleryItems.find(i => i.id === selectedId)?.title}
                </p>
              </div>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border-2 border-white/50">
                <p className="text-gray-900 font-semibold">
                  {currentIndex + 1} / {galleryItems.length}
                </p>
              </div>

              {/* Previous Button */}
              <motion.button
                onClick={goToPrevious}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-lg backdrop-blur-sm border-2 border-white/50 transition-all"
              >
                <ChevronLeft size={32} />
              </motion.button>

              {/* Next Button */}
              <motion.button
                onClick={goToNext}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-lg backdrop-blur-sm border-2 border-white/50 transition-all"
              >
                <ChevronRight size={32} />
              </motion.button>
            </div>

            {/* Keyboard Hint */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mt-6 text-white/70 text-sm"
            >
              <p>Tekan ESC untuk menutup • Gunakan tombol navigasi untuk berpindah</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
