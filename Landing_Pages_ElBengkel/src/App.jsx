import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Features3D from './components/Features3D'
import InteractiveShowcase from './components/InteractiveShowcase'
import Advertisement from './components/Advertisement'
import ParallaxSection from './components/ParallaxSection'
import PhotoGallery from './components/PhotoGallery'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <Features3D />
      <InteractiveShowcase />
      <Advertisement />
      <ParallaxSection />
      <PhotoGallery />
      <Stats />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}
