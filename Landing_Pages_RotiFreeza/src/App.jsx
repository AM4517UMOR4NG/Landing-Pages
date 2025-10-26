import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="text-gray-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
