import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'



const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
}

const wordVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
  }
}

const fadeVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
  }
}

export default function Hero() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const animate = () => {
      el.style.opacity = 1 - window.scrollY / 400
    }
    window.addEventListener('scroll', animate, { passive: true })
    return () => window.removeEventListener('scroll', animate)
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        background: 'var(--black)',
      }}
    >
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}>
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
          alt="Athlete in gym"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            filter: 'grayscale(40%) brightness(0.35)',
          }}
        />
        {/* Gradient overlay — left pull for text */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(
            105deg,
            rgba(8,8,8,0.97) 0%,
            rgba(8,8,8,0.8) 45%,
            rgba(8,8,8,0.3) 75%,
            rgba(8,8,8,0.15) 100%
          )`,
        }} />
        {/* Bottom fade */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background: 'linear-gradient(to bottom, transparent, var(--black))',
        }} />
        {/* Red glow — bottom left */}
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,58,28,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingBottom: 'clamp(60px, 10vh, 120px)',
          paddingTop: '140px',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
        }}
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05 }}
          style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
        >
        </motion.div>

        {/* Main Headline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ overflow: 'hidden' }}
        >
          {[
            { text: 'STRONGER', color: 'var(--white)' },
            { text: 'SELF,', color: 'var(--red)' },
            { text: 'COACHED ONLINE', color: 'rgba(255,255,255,0.22)' },
          ].map((item, i) => (
            <div
              key={item.text}
              style={{
                overflow: 'hidden',
                lineHeight: 0.92,
                marginBottom: i < 2 ? '4px' : 0,
              }}
            >
              <motion.span
                variants={wordVariants}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: i === 2 ? 'clamp(40px, 7.5vw, 110px)' : 'clamp(80px, 15vw, 220px)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  lineHeight: 0.88,
                  color: item.color,
                }}
              >
                {item.text}
              </motion.span>
            </div>
          ))}
        </motion.div>

        {/* Red accent + Body copy row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'clamp(32px, 5vw, 80px)',
            flexWrap: 'wrap',
          }}
        >
          {/* Accent line */}
          <motion.div variants={fadeVariants} style={{ paddingTop: '8px' }}>
            <div style={{
              width: '4px',
              height: '80px',
              background: 'var(--red)',
              borderRadius: '2px',
            }} />
          </motion.div>

          {/* Copy + CTA */}
          <motion.div variants={fadeVariants} style={{ flex: 1, minWidth: '260px', maxWidth: '520px' }}>
            <p
              className="t-body"
              style={{
                color: 'rgba(255,255,255,0.65)',
                marginBottom: '32px',
                lineHeight: 1.7,
              }}
            >
              <em style={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'normal', fontWeight: 700 }}>Make Feeling Good Your Baseline.</em>{' '}MOVR exists to move what matters — baseline strength, consistency and confidence, and energy levels. In Tamil, <em style={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'normal', fontWeight: 600 }}>moovar</em> means three.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#cta" className="btn btn--primary" style={{ gap: '12px' }}>
                Book a Free Consultation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.76, 0, 0.24, 1] }}
          style={{
            display: 'flex',
            gap: 'clamp(24px, 5vw, 64px)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '32px',
            flexWrap: 'wrap',
          }}
        >
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        style={{
          position: 'absolute',
          bottom: '40px',
          right: 'var(--gutter)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <span className="t-small" style={{
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
          writingMode: 'vertical-rl',
        }}>
          Scroll
        </span>
        <div style={{
          width: '2px',
          height: '80px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), var(--red))',
          animation: 'fadeIn 2s ease infinite alternate',
        }} />
      </div>
    </section>
  )
}
