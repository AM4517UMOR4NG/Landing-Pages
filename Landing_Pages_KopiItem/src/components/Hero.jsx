import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-brand-900 via-brand-800 to-brand-700 text-white">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(60rem_60rem_at_80%_-10%,#ffffff,transparent)]" />
      <div className="container py-20 md:py-28 flex flex-col md:flex-row items-center gap-10">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">KopiItem</h1>
          <p className="mt-4 text-lg text-white/80">Nikmati momen dengan secangkir kopi spesialti. Diracik dengan biji pilihan, disajikan hangat untuk menemani harimu.</p>
          <div className="mt-8 flex gap-3">
            <a href="#menu" className="btn btn-secondary">Lihat Menu</a>
            <a href="#features" className="btn btn-primary">Keunggulan</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold">5000+</div>
              <div className="text-sm text-white/80">Pelanggan puas</div>
            </div>
            <div>
              <div className="text-2xl font-bold">20+</div>
              <div className="text-sm text-white/80">Varian kopi</div>
            </div>
            <div>
              <div className="text-2xl font-bold">4.8/5</div>
              <div className="text-sm text-white/80">Rating rata-rata</div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}} className="flex-1 w-full">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-brand-100">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop" alt="KopiItem Hero" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
