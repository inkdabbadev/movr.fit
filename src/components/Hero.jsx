import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Character-by-character clip reveal — each char slides up/down from overflow:hidden wrapper
function CharReveal({ text, color, delay = 0, fromBelow = true, fontSize, fontWeight = 900, letterSpacing = '-0.02em', lineHeight = 0.9 }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.028, delayChildren: delay } } }}
      style={{ display: 'flex', flexWrap: 'wrap', lineHeight }}
    >
      {text.split('').map((char, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', lineHeight: 'inherit' }}>
          <motion.span
            variants={{
              hidden: { y: fromBelow ? '110%' : '-110%', opacity: 0 },
              visible: { y: '0%', opacity: 1, transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } },
            }}
            style={{
              display: 'inline-block',
              color,
              fontFamily: 'var(--font-display)',
              fontSize,
              fontWeight,
              textTransform: 'uppercase',
              letterSpacing,
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

// Word-by-word fade stagger for body text
function WordReveal({ text, delay = 0, style = {} }) {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: delay } } }}
      style={style}
    >
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
          }}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)

  // Parallax: bg image scales slightly as you scroll
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const bgScale  = useTransform(scrollYProgress, [0, 1], [1.08, 1.18])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      id="hero"
      ref={sectionRef}
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
      {/* Background Image with parallax */}
      <motion.div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          scale: bgScale,
          opacity: bgOpacity,
        }}
      >
        <img
          src="./public/Background/Hero-bg.png"
          alt="Athlete in gym"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 1%',
            filter: 'grayscale(50%) brightness(0.85)',
          }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(105deg,rgba(8,8,8,0.97) 0%,rgba(8,8,8,0.8) 45%,rgba(8,8,8,0.3) 75%,rgba(8,8,8,0.15) 100%)`,
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
          background: 'linear-gradient(to bottom, transparent, var(--black))',
        }} />
        {/* Animated red glow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', bottom: '-10%', left: '-5%',
            width: '55vw', height: '55vw', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,58,28,0.14) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingBottom: 'clamp(60px, 10vh, 120px)',
          paddingTop: '140px',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          y: contentY,
        }}
      >
        {/* Headline — char-split, line 1 from below, line 2 from above */}
        <div>
          <CharReveal
            text="STRONGER SELF,"
            color="var(--white)"
            delay={0.1}
            fromBelow={true}
            fontSize="clamp(56px, 11vw, 150px)"
          />
          <CharReveal
            text="COACHED ONLINE."
            color="var(--red)"
            delay={0.45}
            fromBelow={false}
            fontSize="clamp(56px, 11vw, 150px)"
          />
        </div>

        {/* Accent bar + Body row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(32px, 5vw, 80px)', flexWrap: 'wrap' }}>

          {/* Accent line — draws down from top */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingTop: '8px', transformOrigin: 'top' }}
          >
            <div style={{ width: '4px', height: '80px', background: 'var(--red)', borderRadius: '2px' }} />
          </motion.div>

          {/* Body copy + CTA */}
          <div style={{ flex: 1, minWidth: '260px', maxWidth: '520px' }}>
            <p className="t-body" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '32px', lineHeight: 1.6, fontSize: 'clamp(16px, 2vw, 20px)' }}>
              <motion.em
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                style={{ color: 'var(--white)', fontStyle: 'normal', fontWeight: 600 }}
              >
                Make feeling good your baseline.
              </motion.em>{' '}
              <WordReveal
                text="We build sustainable strength, unshakeable consistency, and lasting energy levels so you can perform better in life."
                delay={1.35}
                style={{ color: 'rgba(255,255,255,0.7)' }}
              />
            </p>

            {/* CTA — pops up with spring + shimmer on hover */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <motion.a
                href="#cta"
                className="btn btn--primary"
                whileHover={{ scale: 1.04, boxShadow: '0 16px 48px rgba(201,58,28,0.45)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ gap: '12px', display: 'inline-flex', alignItems: 'center', overflow: 'hidden', position: 'relative' }}
              >
                {/* Shimmer sweep on hover */}
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  whileHover={{ x: '200%', opacity: 0.25 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
                    pointerEvents: 'none',
                  }}
                />
                Book a Free Consultation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
