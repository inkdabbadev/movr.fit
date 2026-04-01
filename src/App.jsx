import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import MoovarPhilosophy from './sections/MoovarPhilosophy'
import CoachSection from './sections/CoachSection'
import MarqueeBand from './sections/MarqueeBand'
import GlobalClients from './sections/GlobalClients'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import CTASection from './sections/CTASection'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(t)
  }, [])

  // Global IntersectionObserver for all .reveal elements not handled by individual components
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const rafId = requestAnimationFrame(raf)

    const allRevealEls = document.querySelectorAll('.reveal, .reveal--left, .reveal--right, .reveal--scale')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.08 }
    )
    allRevealEls.forEach(el => obs.observe(el))
    return () => {
      obs.disconnect()
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <MoovarPhilosophy />
        <MarqueeBand />
        <CoachSection />
        <GlobalClients />
        <Services />
        <Gallery />
        <Testimonials />
        <MarqueeBand />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
