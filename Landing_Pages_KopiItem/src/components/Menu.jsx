import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Heart } from 'lucide-react'

const menu = [
  { name: 'Espresso', price: 'Rp18.000', img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Americano', price: 'Rp20.000', img: 'https://www.nescafe.com/id/sites/default/files/2023-08/Kopi-Hitam-Americano-dan-Espresso%2C-Apa-Bedanya%2C-Ya_hero.jpg' },
  { name: 'Latte', price: 'Rp25.000', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Cappuccino', price: 'Rp24.000', img: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Mocha', price: 'Rp26.000', img: 'https://ichef.bbc.co.uk/ace/standard/1600/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg.webp' },
  { name: 'Cold Brew', price: 'Rp28.000', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop' }
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function Menu() {
  const [liked, setLiked] = React.useState({})

  return (
    <section id="menu" className="py-20 bg-brand-50 relative overflow-hidden">
      {/* Background animation */}
      <motion.div 
        className="absolute -bottom-20 -left-20 w-60 h-60 bg-brand-200 rounded-full blur-3xl opacity-15"
        animate={{ 
          x: [0, 20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-8 flex-wrap gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Menu Favorit</h2>
            <p className="mt-3 text-brand-700">Pilih minuman favoritmu, siap dinikmati kapan saja.</p>
          </div>
          <motion.a 
            href="#faq" 
            className="hidden md:inline-flex btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Lihat FAQ
          </motion.a>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {menu.map((m, i) => (
            <motion.div 
              key={m.name} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="card overflow-hidden group cursor-pointer"
            >
              {/* Image container */}
              <motion.div 
                className="aspect-video overflow-hidden relative bg-brand-100"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={m.img} 
                  alt={m.name} 
                  className="w-full h-full object-cover" 
                />
                
                {/* Overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-secondary flex items-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Pesan
                  </motion.button>
                </motion.div>

                {/* Like button */}
                <motion.button
                  onClick={() => setLiked(prev => ({ ...prev, [m.name]: !prev[m.name] }))}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart 
                    size={20} 
                    className={liked[m.name] ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                  />
                </motion.button>
              </motion.div>

              {/* Content */}
              <motion.div 
                className="p-5 flex items-center justify-between"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                <div>
                  <motion.div 
                    className="font-semibold"
                    whileHover={{ color: '#7A4F2B' }}
                  >
                    {m.name}
                  </motion.div>
                  <motion.div 
                    className="text-brand-700 text-sm font-medium"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {m.price}
                  </motion.div>
                </div>
                <motion.button 
                  className="btn btn-primary flex items-center gap-1"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <ShoppingCart size={16} />
                  <span className="hidden sm:inline">Tambah</span>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
