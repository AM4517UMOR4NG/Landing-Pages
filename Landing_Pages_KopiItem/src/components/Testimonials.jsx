import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Rina', role: 'Pecinta Kopi', quote: 'Rasanya konsisten dan aromanya khas. KopiItem selalu jadi pilihan pertama!'},
  { name: 'Budi', role: 'Freelancer', quote: 'Tempat yang nyaman untuk kerja. Latte-nya creamy banget.'},
  { name: 'Sarah', role: 'Mahasiswa', quote: 'Menu variatif, harga ramah. Cold brew-nya segar!'},
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-brand-100 to-brand-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Apa Kata Mereka</h2>
          <p className="mt-3 text-brand-700">Cerita pelanggan setia KopiItem.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure key={t.name} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.1}} className="card p-6 bg-brand-50/90">
              <blockquote className="text-brand-800">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-brand-700">{t.name} • {t.role}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
