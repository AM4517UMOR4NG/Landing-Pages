import React from 'react'
import { motion } from 'framer-motion'

const menu = [
  { name: 'Espresso', price: 'Rp18.000', img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Americano', price: 'Rp20.000', img: 'https://www.nescafe.com/id/sites/default/files/2023-08/Kopi-Hitam-Americano-dan-Espresso%2C-Apa-Bedanya%2C-Ya_hero.jpg' },
  { name: 'Latte', price: 'Rp25.000', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Cappuccino', price: 'Rp24.000', img: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Mocha', price: 'Rp26.000', img: 'https://ichef.bbc.co.uk/ace/standard/1600/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg.webp' },
  { name: 'Cold Brew', price: 'Rp28.000', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop' }
]

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-brand-50">
      <div className="container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Menu Favorit</h2>
            <p className="mt-3 text-brand-700">Pilih minuman favoritmu, siap dinikmati kapan saja.</p>
          </div>
          <a href="#faq" className="hidden md:inline-flex btn btn-secondary">Lihat FAQ</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map((m, i) => (
            <motion.div key={m.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4, delay: (i%3)*0.1}} className="card overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-brand-700 text-sm">{m.price}</div>
                </div>
                <button className="btn btn-primary">Tambah</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
