import { useRef } from 'react'
import { motion } from 'framer-motion'
const vishyImg = '/images/vishy-1.png'

const traits = [
  { label: 'Form over Ego', desc: 'Correct movement patterns before loading weight' },
  { label: 'Progression over Pressure', desc: 'Sustainable gains, not unsustainable spikes' },
  { label: 'Sustainability over Shortcuts', desc: 'Long-term health as the ultimate metric' },
]

const ease = [0.16, 1, 0.3, 1]
const vp = { once: true, margin: '-60px' }

export default function CoachSection() {
  return (
    <section
      id="about"
      className="section"
      style={{ background: 'var(--black)', overflow: 'hidden', position: 'relative' }}
    >
      {/* Animated background glow */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '10%', right: '-10%',
          width: '60vw', height: '60vw', maxWidth: '700px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,58,28,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 7vw, 100px)', alignItems: 'center' }} className="coach-grid">

          {/* LEFT */}
          <div>
            {/* "MEET" — slides from far left */}
            <div style={{ overflow: 'hidden', lineHeight: 0.92, marginBottom: '8px' }}>
              <motion.h2
                initial={{ x: -80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={vp}
                transition={{ duration: 0.9, ease }}
                className="t-display-lg"
                style={{ color: 'var(--white)', lineHeight: 0.92 }}
              >
                MEET
              </motion.h2>
            </div>

            {/* "COACH VISHY" — char by char from below */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              variants={{ visible: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } } }}
              style={{ display: 'flex', flexWrap: 'nowrap', lineHeight: 0.92, marginBottom: '36px', overflow: 'hidden' }}
            >
              {'COACH VISHY'.split('').map((char, i) => (
                <span key={i} style={{ display: 'inline-block', overflow: 'hidden', lineHeight: 'inherit' }}>
                  <motion.span
                    variants={{
                      hidden: { y: '100%' },
                      visible: { y: '0%', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
                    }}
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(32px, 5.5vw, 88px)',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      letterSpacing: '-0.02em',
                      lineHeight: 0.92,
                      color: 'var(--red)',
                      ...(char === ' ' ? { width: '0.22em' } : {}),
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                </span>
              ))}
            </motion.div>

            {/* Tags — pop in with spring stagger */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
              style={{ display: 'flex', gap: '8px', marginBottom: '32px', flexWrap: 'wrap' }}
            >
              {['Structured', 'Calm', 'Intentional'].map(tag => (
                <motion.span
                  key={tag}
                  variants={{
                    hidden: { scale: 0.6, opacity: 0, y: 10 },
                    visible: { scale: 1, opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 18 } },
                  }}
                  style={{
                    padding: '6px 16px',
                    background: 'var(--surface-2)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.8)', borderRadius: 'var(--radius)',
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="t-body"
              style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '16px', maxWidth: '480px' }}
            >
              A coach who prioritizes form over ego, progression over pressure, and sustainability over shortcuts. Calm in presence. Clear in method. Data-aware, but human first.
            </motion.p>

            {/* Traits — each slides in from left with stagger */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
              style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
            >
              {traits.map((t, i) => (
                <motion.div
                  key={t.label}
                  variants={{
                    hidden: { x: -50, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease } },
                  }}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '20px',
                    padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
                    cursor: 'default',
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: 'var(--red)', marginTop: '6px', flexShrink: 0,
                    }}
                  />
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', letterSpacing: '0.02em', marginBottom: '6px' }}>
                      {t.label}
                    </div>
                    <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                      {t.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Photo with clipPath wipe from bottom */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 1, ease }}
            style={{ position: 'relative' }}
          >
            {/* Decorative frame — draws in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              style={{
                position: 'absolute', top: '-16px', right: '-16px', bottom: '16px', left: '16px',
                border: '1px solid rgba(201,58,28,0.25)', borderRadius: 'var(--radius)', zIndex: 0,
              }}
            />

            {/* Photo — clipPath wipe up from bottom */}
            <motion.div
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
              viewport={vp}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
              style={{ position: 'relative', zIndex: 1, borderRadius: 'var(--radius)', overflow: 'hidden', aspectRatio: '3/4' }}
            >
              <img
                src={vishyImg}
                alt="Coach Vishy"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  objectPosition: 'top center', filter: 'contrast(1.05) saturate(0.95)',
                }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                background: 'linear-gradient(to top, rgba(8,8,8,0.9), transparent)',
              }} />

              {/* Name card — fades up */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.7, delay: 1.0, ease }}
                style={{ position: 'absolute', bottom: '28px', left: '28px', right: '28px', display: 'flex', alignItems: 'center', gap: '16px' }}
              >
                <div style={{ width: '3px', height: '44px', background: 'var(--red)', borderRadius: '4px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 900, textTransform: 'uppercase', color: 'var(--white)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                    Coach Vishy
                  </div>
                  <div className="t-small" style={{ color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>
                    Coach @ movr.fit
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .coach-grid { grid-template-columns: 1fr !important; }
          .coach-grid > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  )
}
