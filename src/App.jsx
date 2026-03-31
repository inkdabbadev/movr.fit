import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ThreePillars from './components/ThreePillars'
import CoachSection from './components/CoachSection'
import Services from './components/Services'
import MarqueeBand from './components/MarqueeBand'
import GlobalClients from './components/GlobalClients'
import Gallery from './components/Gallery'
import Philosophy from './components/Philosophy'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
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
      <Navbar />
      <main>
        <Hero />
        <ThreePillars />
        <CoachSection />
        <MarqueeBand />
        <GlobalClients />
        <Services />
        <Gallery />
        <Philosophy />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
