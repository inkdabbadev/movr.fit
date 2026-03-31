import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.querySelectorAll('.reveal, .reveal--left, .reveal--right, .reveal--scale')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.08 }
    )
    targets.forEach(t => obs.observe(t))
    return () => obs.disconnect()
  }, [])
  return ref
}

const combinedPillars = [
  {
    num: '01',
    period: 'Yesterday',
    tag: 'Learn',
    pillar: 'Strength',
    text: 'Every session is data. We build baseline strength from the ground up through intentional loading. We track what worked, learn from what didn\'t, and use that as the foundation for everything else.',
  },
  {
    num: '02',
    period: 'Today',
    tag: 'Act',
    pillar: 'Consistency',
    text: 'Transformation is a series of simple, repeatable actions stacked across time. Consistent, deliberate execution matters more than raw intensity. Today is the only day you can actually put in the work.',
  },
  {
    num: '03',
    period: 'Tomorrow',
    tag: 'Build',
    pillar: 'Energy',
    text: 'We train for energy that doesn\'t burn out. It compounds into your work, relationships, and life outside the gym. Every rep builds the person you will become tomorrow.',
  },
]

export default function MoovarPhilosophy() {
  const ref = useReveal()

  return (
    <section
      id="philosophy"
      ref={ref}
      className="section grid-texture"
      style={{
        background: 'var(--surface-1)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      {/* Large background text */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(120px, 20vw, 280px)',
          fontWeight: 900,
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.015)',
          letterSpacing: '-0.05em',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 1,
        }}
      >
        MOOVAR
      </div>

      <div className="container" style={{ paddingTop: 'var(--section-pad)', paddingBottom: 'var(--section-pad)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '5fr 7fr',
          gap: 'clamp(48px, 8vw, 120px)',
          alignItems: 'start',
        }}
          className="philosophy-grid"
        >
          {/* Left — Sticky editorial column */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <div className="reveal" style={{ marginBottom: '24px' }}>
              <span className="t-small" style={{ color: 'var(--gray-1)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                The Moovar System
              </span>
            </div>

            {/* 3 + PILLARS / TIMELINES / PEOPLE side by side */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(100px, 14vw, 160px)',
                  fontWeight: 900,
                  color: 'var(--red)',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  userSelect: 'none',
                  flexShrink: 0,
                }}
              >
                3
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }, hidden: {} }}
                style={{ display: 'flex', flexDirection: 'column', gap: '4px', overflow: 'hidden' }}
              >
                {['PILLARS', 'TIMELINES', 'PEOPLE'].map((word) => (
                  <div key={word} style={{ overflow: 'hidden' }}>
                    <motion.span
                      variants={{
                        hidden: { y: '100%', opacity: 0 },
                        visible: { y: '0%', opacity: 1, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
                      }}
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(18px, 2.2vw, 28px)',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        color: 'rgba(255,255,255,0.5)',
                        lineHeight: 1.2,
                      }}
                    >
                      {word}
                    </motion.span>
                  </div>
                ))}
              </motion.div>
            </div>

            <h2
              className="reveal delay-2 t-display-md"
              style={{ color: 'var(--white)', marginBottom: '16px', lineHeight: 0.95 }}
            >
              THE MOOVAR<br />PRINCIPLE
            </h2>

            <p
              className="reveal delay-3"
              style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '32px', lineHeight: 1.7, fontSize: 'clamp(15px, 1.5vw, 17px)' }}
            >
              In Tamil, <em style={{ fontStyle: 'normal', color: 'var(--white)', fontWeight: 600 }}>moovar</em> means three — three people, three timelines, three pillars. One clear path.
            </p>

            <div className="reveal delay-4">
              <div style={{
                padding: '20px 24px',
                background: 'var(--surface-2)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderLeft: '4px solid var(--red)',
                borderRadius: 'var(--radius)',
              }}>
                <p style={{
                  fontSize: '17px',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.6,
                }}>
                  "Long-term health is the ultimate performance metric."
                </p>
                <p style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--red)',
                  marginTop: '12px',
                }}>
                  — Coach Vishy
                </p>
              </div>
            </div>
          </div>

          {/* Right — Combined Timeline & Pillars Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginTop: '24px' }}>
            {combinedPillars.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  gap: 'clamp(20px, 3vw, 32px)',
                  paddingBottom: i < combinedPillars.length - 1 ? '24px' : 0,
                  position: 'relative',
                }}
              >
                {/* Visual Connector */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flexShrink: 0,
                  paddingTop: '8px',
                }}>
                  <div style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: 'var(--red)',
                    boxShadow: '0 0 20px rgba(201,58,28,0.4)',
                    flexShrink: 0,
                  }} />
                  {i < combinedPillars.length - 1 && (
                    <div style={{
                      width: '2px',
                      flex: 1,
                      minHeight: '24px',
                      background: 'linear-gradient(to bottom, rgba(201,58,28,0.5), rgba(201,58,28,0.0))',
                      marginTop: '8px',
                    }} />
                  )}
                </div>

                {/* Content Box */}
                <motion.div
                  whileHover={{ y: -4, borderColor: 'rgba(201,58,28,0.25)' }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    flex: 1,
                    background: 'var(--surface-2)',
                    padding: 'clamp(20px, 2.5vw, 24px) clamp(20px, 2.5vw, 24px)',
                    borderRadius: 'var(--radius)',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.03)',
                    top: '-12px',
                  }}>
                  
                  {/* Faint Number Watermark */}
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '0px',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(70px, 8vw, 100px)',
                    fontWeight: 900,
                    color: 'rgba(255,255,255,0.02)',
                    lineHeight: 1,
                    letterSpacing: '-0.05em',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    zIndex: 0,
                  }}>
                    {item.num}
                  </div>

                  {/* Timeline Title: "Yesterday" + "Learn" */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '12px',
                    flexWrap: 'wrap',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(24px, 2.5vw, 32px)',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      letterSpacing: '-0.02em',
                      color: 'var(--white)',
                      lineHeight: 1,
                    }}>
                      {item.period}
                    </span>
                    <span style={{
                      padding: '4px 12px',
                      background: 'var(--red)',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--white)',
                      borderRadius: 'var(--radius)',
                    }}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Pillar Subtitle: Strength - Baseline First */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '8px',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(20px, 2vw, 26px)',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.85)',
                      lineHeight: 1,
                    }}>
                      {item.pillar}
                    </h3>
                  </div>

                  <div style={{
                    width: '32px',
                    height: '2px',
                    background: 'rgba(255,255,255,0.1)',
                    marginBottom: '12px',
                    position: 'relative',
                    zIndex: 1,
                  }} />

                  {/* Body Text */}
                  <p className="t-body" style={{
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.5,
                    fontSize: 'clamp(15px, 1.5vw, 17px)',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {item.text}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .philosophy-grid {
            grid-template-columns: 1fr !important;
            gap: 64px !important;
          }
          .philosophy-grid > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  )
}
