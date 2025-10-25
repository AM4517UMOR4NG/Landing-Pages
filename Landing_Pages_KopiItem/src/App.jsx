import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Menu from './components/Menu'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Menu />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
