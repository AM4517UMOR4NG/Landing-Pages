import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Star, Heart } from 'lucide-react'

const products = [
  { id: 1, name: 'Roti Tawar Premium', price: 'Rp25.000', rating: 4.9, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMHOYqlugiuitZ_W8AHYh92KFQYevIokrjmg&s', desc: 'Roti tawar lembut dengan tekstur sempurna' },
  { id: 2, name: 'Croissant Butter', price: 'Rp18.000', rating: 4.8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAAkGlCSctsIRpeV1XcF0Kq4iyZWirVp2JkQ&s', desc: 'Croissant berlapis dengan mentega premium' },
  { id: 3, name: 'Roti Gandum Sehat', price: 'Rp22.000', rating: 4.7, img: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1635785272/attached_image/alasan-mengonsumsi-roti-gandum-dan-tips-memilihnya.jpg', desc: 'Roti gandum utuh bergizi tinggi' },
  { id: 4, name: 'Donut Glazed', price: 'Rp15.000', rating: 4.9, img: 'https://relishcaterers.com/wp-content/uploads/2021/03/pioneer-womans-yeast-glazed-donuts2.jpg', desc: 'Donut empuk dengan glazing manis' },
  { id: 5, name: 'Roti Isi Coklat', price: 'Rp20.000', rating: 4.8, img: 'https://www.tokomesin.com/wp-content/uploads/2017/11/roti-manis-isi-coklat1.jpg', desc: 'Roti dengan isi coklat premium' },
  { id: 6, name: 'Baguette Prancis', price: 'Rp28.000', rating: 4.9, img: 'https://img.okezone.com/content/2015/09/14/298/1213707/yuk-lebih-mengenal-roti-baguette-khas-perancis-nDNtRTWqv2.jpg', desc: 'Baguette autentik gaya Prancis' },
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Products() {
  const [liked, setLiked] = React.useState({})
  const [hoveredId, setHoveredId] = React.useState(null)

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-roti-100 rounded-full blur-3xl opacity-30"
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
            <span className="gradient-text">Produk Pilihan</span> Kami
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Koleksi roti premium dengan kualitas terbaik, dibuat fresh setiap hari untuk kepuasan Anda.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative h-full"
            >
              {/* Glow Background */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-roti-400 via-cream-300 to-roti-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Main Card */}
              <motion.div
                animate={{
                  y: hoveredId === product.id ? -12 : 0,
                }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"
              >
                {/* Image Container with Premium Frame */}
                <motion.div 
                  className="relative aspect-square overflow-hidden bg-gradient-to-br from-roti-50 to-cream-50"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Image */}
                  <img 
                    src={product.img} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Premium Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="flex gap-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.85 }}
                        className="p-4 rounded-full bg-white/90 backdrop-blur-md text-roti-600 hover:bg-roti-600 hover:text-white transition-all shadow-lg border-2 border-white/50"
                      >
                        <ShoppingCart size={28} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        whileTap={{ scale: 0.85 }}
                        onClick={() => setLiked(prev => ({ ...prev, [product.id]: !prev[product.id] }))}
                        className="p-4 rounded-full bg-white/90 backdrop-blur-md text-gray-400 hover:bg-red-500 hover:text-white transition-all shadow-lg border-2 border-white/50"
                      >
                        <Heart size={28} fill={liked[product.id] ? 'currentColor' : 'none'} />
                      </motion.button>
                    </motion.div>
                    <motion.p 
                      className="text-white font-bold text-lg drop-shadow-lg"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15 }}
                    >
                      Lihat Detail
                    </motion.p>
                  </motion.div>

                  {/* Premium Badge */}
                  <motion.div 
                    className="absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r from-roti-600 to-roti-500 text-white text-sm font-bold shadow-lg border-2 border-white/30 backdrop-blur-sm"
                    animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    ⭐ {product.rating}
                  </motion.div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-roti-400/20 to-transparent rounded-br-3xl" />
                </motion.div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  {/* Title & Description */}
                  <div>
                    <motion.h3 
                      className="font-black text-xl mb-2 text-gray-900"
                      whileHover={{ color: '#FF9827' }}
                      transition={{ duration: 0.2 }}
                    >
                      {product.name}
                    </motion.h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.desc}</p>
                  </div>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <motion.div 
                      className="flex flex-col"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <span className="text-xs text-gray-500 font-semibold">Harga</span>
                      <span className="text-3xl font-black bg-gradient-to-r from-roti-600 to-roti-500 bg-clip-text text-transparent">
                        {product.price}
                      </span>
                    </motion.div>
                    <motion.button
                      className="btn btn-primary text-sm font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.92 }}
                    >
                      Beli Sekarang
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
