import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function CharReveal({ text, color, delay = 0, fromBelow = true, fontSize }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.028, delayChildren: delay } } }}
      style={{ display: 'flex', flexWrap: 'wrap', lineHeight: 0.92 }}
    >
      {text.split('').map((char, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', lineHeight: 'inherit' }}>
          <motion.span
            variants={{
              hidden: { y: fromBelow ? '110%' : '-110%', opacity: 0 },
              visible: { y: '0%', opacity: 1, transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } },
            }}
            style={{
              display: 'inline-block', color,
              fontFamily: 'var(--font-display)', fontSize, fontWeight: 900,
              textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 'inherit',
              ...(char === ' ' ? { width: '0.28em' } : {}),
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </motion.div>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const bgScale   = useTransform(scrollYProgress, [0, 1], [1.06, 1.16])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.35])
  const contentY  = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        overflow: 'hidden', background: 'var(--black)',
      }}
    >
      {/* Background */}
      <motion.div style={{ position: 'absolute', inset: 0, zIndex: 0, scale: bgScale, opacity: bgOpacity }}>
        <img
          src="/images/hero-bg.png"
          alt=""
          fetchpriority="high"
          style={{
            width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%',
            filter: 'grayscale(25%) brightness(0.52)',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(100deg, rgba(3,3,3,0.96) 0%, rgba(3,3,3,0.7) 45%, rgba(3,3,3,0.22) 100%)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
          background: 'linear-gradient(to bottom, transparent, var(--black))',
        }} />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', bottom: '-10%', left: '-5%',
            width: '55vw', height: '55vw', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,58,28,0.13) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="container"
        style={{
          position: 'relative', zIndex: 2,
          paddingTop: '120px', paddingBottom: 'clamp(60px, 8vh, 100px)',
          y: contentY,
        }}
      >
        {/* Headline */}
        <div style={{ marginBottom: '40px' }}>
          <CharReveal text="STRONGER SELF," color="var(--white)" delay={0.15} fromBelow fontSize="clamp(54px, 10.5vw, 148px)" />
          <CharReveal text="COACHED ONLINE." color="var(--red)" delay={0.45} fromBelow={false} fontSize="clamp(54px, 10.5vw, 148px)" />
        </div>

        {/* Body + CTA */}
        <div style={{ maxWidth: '480px' }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}
          >
            <strong style={{ color: 'var(--white)', fontWeight: 600 }}>Make feeling good your baseline.</strong>
            {' '}We build sustainable strength, unshakeable consistency, and lasting energy levels so you can perform better in life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.a
              href="#cta"
              className="btn btn--primary"
              whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(201,58,28,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                fontSize: '13px', padding: '13px 26px', letterSpacing: '0.08em',
              }}
            >
              Book a Free Consultation
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}
