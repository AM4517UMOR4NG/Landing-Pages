import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Car, Bike, Wrench, Droplets, Zap, Shield, Calculator, Sparkles } from 'lucide-react'

export default function PricingCalculator() {
  const [selectedVehicle, setSelectedVehicle] = useState('car')
  const [selectedServices, setSelectedServices] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [isCalculating, setIsCalculating] = useState(false)

  const vehicles = [
    { id: 'car', name: 'Mobil', icon: Car, color: 'from-blue-500 to-cyan-500' },
    { id: 'bike', name: 'Motor', icon: Bike, color: 'from-orange-500 to-red-500' },
  ]

  const services = {
    car: [
      { id: 'service', name: 'Servis Rutin', icon: Wrench, price: 150000, description: 'Ganti oli, filter, cek menyeluruh' },
      { id: 'wash', name: 'Cuci & Detailing', icon: Droplets, price: 100000, description: 'Cuci komplit, wax, poles interior' },
      { id: 'ac', name: 'Service AC', icon: Zap, price: 250000, description: 'Isi freon, bersih evaporator' },
      { id: 'body', name: 'Body Repair', icon: Shield, price: 500000, description: 'Perbaikan body & cat' },
    ],
    bike: [
      { id: 'service', name: 'Servis Rutin', icon: Wrench, price: 75000, description: 'Ganti oli, filter, tune up' },
      { id: 'wash', name: 'Cuci Premium', icon: Droplets, price: 35000, description: 'Cuci komplit dengan shampoo khusus' },
      { id: 'tune', name: 'Tune Up Mesin', icon: Zap, price: 150000, description: 'Optimasi performa mesin' },
      { id: 'body', name: 'Cat & Polish', icon: Shield, price: 300000, description: 'Pengecatan dan poles' },
    ],
  }

  const toggleService = (serviceId) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId)
      } else {
        return [...prev, serviceId]
      }
    })
  }

  useEffect(() => {
    setIsCalculating(true)
    const timer = setTimeout(() => {
      const currentServices = services[selectedVehicle]
      const total = selectedServices.reduce((sum, serviceId) => {
        const service = currentServices.find(s => s.id === serviceId)
        return sum + (service ? service.price : 0)
      }, 0)
      setTotalPrice(total)
      setIsCalculating(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [selectedServices, selectedVehicle])

  const handleVehicleChange = (vehicleId) => {
    setSelectedVehicle(vehicleId)
    setSelectedServices([])
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full border border-orange-500/30"
          >
            <Calculator className="text-orange-400" size={24} />
            <span className="text-orange-400 font-semibold">Kalkulator Harga</span>
            <Sparkles className="text-blue-400" size={24} />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Hitung Biaya Service
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pilih kendaraan dan layanan yang Anda butuhkan, kami akan menghitung estimasi biaya secara real-time
          </p>
        </motion.div>

        {/* Calculator Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Vehicle Selector */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Pilih Kendaraan</h3>
            <div className="grid grid-cols-2 gap-6">
              {vehicles.map((vehicle) => {
                const Icon = vehicle.icon
                return (
                  <motion.button
                    key={vehicle.id}
                    onClick={() => handleVehicleChange(vehicle.id)}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                      selectedVehicle === vehicle.id
                        ? 'border-orange-500 bg-gradient-to-br ' + vehicle.color + ' shadow-2xl'
                        : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div className={`p-6 rounded-full ${
                        selectedVehicle === vehicle.id
                          ? 'bg-white/20'
                          : 'bg-gray-700/50'
                      }`}>
                        <Icon size={48} className="text-white" />
                      </div>
                      <span className="text-2xl font-bold text-white">{vehicle.name}</span>
                    </div>
                    
                    {selectedVehicle === vehicle.id && (
                      <motion.div
                        layoutId="activeVehicle"
                        className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl"
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Services Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedVehicle}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Pilih Layanan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {services[selectedVehicle].map((service, index) => {
                  const Icon = service.icon
                  const isSelected = selectedServices.includes(service.id)
                  
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03, rotateY: 5 }}
                      style={{ transformStyle: 'preserve-3d' }}
                      onClick={() => toggleService(service.id)}
                      className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                        isSelected
                          ? 'bg-gradient-to-br from-orange-500 to-red-500 shadow-2xl shadow-orange-500/50'
                          : 'bg-gray-800/50 border-2 border-gray-700 hover:border-orange-500/50'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${
                          isSelected ? 'bg-white/20' : 'bg-gray-700/50'
                        }`}>
                          <Icon size={32} className="text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                          <p className="text-sm text-gray-300 mb-3">{service.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-white">
                              Rp {service.price.toLocaleString('id-ID')}
                            </span>
                            <div className={`w-6 h-6 rounded-full border-2 transition-all ${
                              isSelected
                                ? 'bg-white border-white'
                                : 'border-gray-500'
                            }`}>
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-full h-full flex items-center justify-center"
                                >
                                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {isSelected && (
                        <motion.div
                          layoutId="selectedService"
                          className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-xl pointer-events-none"
                        />
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Total Price Display */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-2xl p-8 border-2 border-orange-500/30 shadow-2xl">
              <div className="text-center">
                <p className="text-gray-400 text-lg mb-2">Total Estimasi Biaya</p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={totalPrice}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.5, opacity: 0 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-6"
                  >
                    {isCalculating ? (
                      <span className="inline-block animate-pulse">Menghitung...</span>
                    ) : (
                      <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
                    )}
                  </motion.div>
                </AnimatePresence>
                
                {selectedServices.length === 0 && (
                  <p className="text-gray-500 text-sm">Silakan pilih layanan untuk melihat estimasi harga</p>
                )}
                
                {selectedServices.length > 0 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(249, 115, 22, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-xl hover:from-orange-600 hover:to-red-600 transition-all shadow-lg"
                  >
                    Booking Sekarang
                  </motion.button>
                )}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-2xl opacity-50 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse animation-delay-1000" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}
