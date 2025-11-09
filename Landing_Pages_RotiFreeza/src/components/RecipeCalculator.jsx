import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cake, Cookie, CakeSlice, Croissant, Plus, Minus, ShoppingCart, Sparkles } from 'lucide-react'

const breads = [
  { id: 'tawar', name: 'Roti Tawar', icon: Cake, price: 15000, description: 'Lembut & Empuk', color: 'from-roti-400 to-roti-600' },
  { id: 'manis', name: 'Roti Manis', icon: Cookie, price: 3000, description: 'Isi Cokelat, Keju', color: 'from-amber-400 to-amber-600' },
  { id: 'kue', name: 'Kue Kering', icon: CakeSlice, price: 50000, description: 'Toples 500gr', color: 'from-yellow-400 to-orange-500' },
  { id: 'croissant', name: 'Croissant', icon: Croissant, price: 12000, description: 'Original & Cokelat', color: 'from-orange-400 to-red-500' },
]

export default function RecipeCalculator() {
  const [quantities, setQuantities] = useState({ tawar: 0, manis: 0, kue: 0, croissant: 0 })
  const [total, setTotal] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const newTotal = breads.reduce((sum, bread) => {
      return sum + (quantities[bread.id] * bread.price)
    }, 0)
    
    const timer = setTimeout(() => {
      setTotal(newTotal)
      setIsAnimating(false)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [quantities])

  const updateQuantity = (id, delta) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, prev[id] + delta)
    }))
  }

  const totalItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0)

  return (
    <section className="py-20 bg-gradient-to-b from-white via-roti-50 to-cream-50 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-roti-300 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent-300 rounded-full blur-3xl opacity-15"
        animate={{ scale: [1, 1.1, 1], x: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-white rounded-full shadow-lg border-2 border-roti-200"
          >
            <ShoppingCart className="text-roti-600" size={20} />
            <span className="text-roti-600 font-bold text-sm">Kalkulator Pesanan</span>
            <Sparkles className="text-amber-500" size={20} />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Hitung <span className="gradient-text">Pesanan Anda</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pilih roti favorit Anda dan lihat total harga secara real-time
          </p>
        </motion.div>

        {/* Calculator Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {breads.map((bread, index) => {
              const Icon = bread.icon
              const quantity = quantities[bread.id]
              
              return (
                <motion.div
                  key={bread.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="card p-6 relative overflow-hidden group"
                >
                  {/* Background Gradient on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${bread.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${bread.color} flex items-center justify-center mb-4 mx-auto`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-white" size={32} />
                    </motion.div>

                    {/* Info */}
                    <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">
                      {bread.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 text-center">
                      {bread.description}
                    </p>
                    <p className="text-lg font-bold text-roti-600 mb-4 text-center">
                      Rp {bread.price.toLocaleString('id-ID')}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-center gap-4">
                      <motion.button
                        onClick={() => updateQuantity(bread.id, -1)}
                        disabled={quantity === 0}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          quantity === 0
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-roti-600 text-white hover:bg-roti-700 shadow-lg'
                        }`}
                      >
                        <Minus size={18} />
                      </motion.button>

                      <AnimatePresence mode="wait">
                        <motion.div
                          key={quantity}
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 1.5, opacity: 0 }}
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-roti-100 to-cream-100 flex items-center justify-center"
                        >
                          <span className="text-2xl font-bold text-roti-700">
                            {quantity}
                          </span>
                        </motion.div>
                      </AnimatePresence>

                      <motion.button
                        onClick={() => updateQuantity(bread.id, 1)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full bg-roti-600 text-white hover:bg-roti-700 flex items-center justify-center shadow-lg transition-all"
                      >
                        <Plus size={18} />
                      </motion.button>
                    </div>

                    {/* Subtotal */}
                    {quantity > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <p className="text-center text-sm text-gray-600">Subtotal</p>
                        <p className="text-center text-lg font-bold text-roti-600">
                          Rp {(quantity * bread.price).toLocaleString('id-ID')}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Total Price Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="card p-8 bg-gradient-to-br from-roti-600 to-roti-700 text-white relative overflow-hidden">
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10">
                <div className="text-center mb-4">
                  <p className="text-roti-100 text-lg mb-2">Total Pesanan</p>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={total}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.2, opacity: 0 }}
                      transition={{ type: 'spring', duration: 0.5 }}
                      className="text-5xl md:text-6xl font-black mb-2"
                    >
                      {isAnimating ? (
                        <span className="inline-block animate-pulse">...</span>
                      ) : (
                        <span>Rp {total.toLocaleString('id-ID')}</span>
                      )}
                    </motion.div>
                  </AnimatePresence>
                  
                  {totalItems > 0 && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-roti-100"
                    >
                      {totalItems} item dipilih
                    </motion.p>
                  )}
                </div>

                {totalItems === 0 ? (
                  <p className="text-center text-roti-100">
                    Silakan pilih produk untuk mulai berbelanja
                  </p>
                ) : (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 bg-white text-roti-600 font-bold text-lg rounded-xl hover:bg-cream-50 transition-all flex items-center justify-center gap-2 shadow-xl"
                  >
                    <ShoppingCart size={20} />
                    Checkout Sekarang
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
