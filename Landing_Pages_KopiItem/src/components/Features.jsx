import React from 'react'
import { Coffee, Bean, BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { icon: Coffee, title: 'Racikan Barista', desc: 'Setiap cangkir dibuat oleh barista berpengalaman.' },
  { icon: Bean, title: 'Biji Pilihan', desc: 'Biji kopi lokal & impor berkualitas tinggi.' },
  { icon: BadgeCheck, title: 'Kualitas Terjamin', desc: 'Standar rasa yang konsisten setiap saat.' },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-brand-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Kenapa Memilih KopiItem?</h2>
          <p className="mt-3 text-brand-700">Kami menghadirkan pengalaman ngopi terbaik untuk Anda.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div key={it.title} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4, delay:idx*0.1}} className="card p-6">
              <div className="w-12 h-12 rounded-lg bg-brand-100 text-brand-800 flex items-center justify-center">
                <it.icon />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-brand-700">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
