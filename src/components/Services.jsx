import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.querySelectorAll('.reveal, .reveal--left, .reveal--right')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1 }
    )
    targets.forEach(t => obs.observe(t))
    return () => obs.disconnect()
  }, [])
  return ref
}

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="16" cy="8" r="4" />
        <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" />
        <path d="M2 14h4M26 14h4M6 14l2 6M24 14l-2 6" />
      </svg>
    ),
    title: 'Personal\nTraining',
    tag: '1-on-1',
    description: 'One coach, one focus — you. Individual 1-1 programme designed and customised based on your goals.',
    features: ['Personalised programme design', 'Form & technique mastery', 'Weekly progress reviews', 'Nutrition guidance'],
    cta: 'Book a Session',
    ctaHref: '#cta',
    highlight: true,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="10" cy="9" r="3" />
        <circle cx="22" cy="9" r="3" />
        <path d="M3 26c0-4.418 3.134-8 7-8h2M19 18h2c3.866 0 7 3.582 7 8" />
        <path d="M16 14v12M13 20h6" />
      </svg>
    ),
    title: 'Group\nTraining',
    tag: 'Group',
    description: 'Train together, push harder, go further. Live group sessions with a coach, customised to your strength levels.',
    features: ['Live group sessions', 'Strength-level customisation', 'Community accountability', 'Coach-led workouts'],
    cta: 'Join a Group',
    ctaHref: '#cta',
    highlight: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="4" y="6" width="24" height="18" rx="2" />
        <path d="M16 24v4M10 28h12" />
        <path d="M10 14l3 3 6-6" />
      </svg>
    ),
    title: 'Custom\nProgramming',
    tag: 'Flexible',
    description: 'Designed for you. Run by you. Weekly check-ins to keep you on track, wherever you are in the world.',
    features: ['Bespoke programme design', 'Weekly check-in calls', 'App-based delivery', 'Timezone-friendly scheduling'],
    cta: 'View Pricing',
    ctaHref: 'https://mfirst.practicenow.us/students/subscriptions?handle=mfirst&theme_id=&uid=mfirst',
    highlight: false,
    external: true,
  },
]

// hover = desktop reveal, click = mobile toggle
const isHoverDevice = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches

export default function Services() {
  const ref = useReveal()
  const [openIndex, setOpenIndex] = useState(null)

  const handleMouseEnter = (i) => { if (isHoverDevice()) setOpenIndex(i) }
  const handleMouseLeave = ()  => { if (isHoverDevice()) setOpenIndex(null) }
  const handleClick      = (i, isOpen) => { if (!isHoverDevice()) setOpenIndex(isOpen ? null : i) }

  return (
    <section
      id="services"
      ref={ref}
      className="section"
      style={{
        background: 'var(--surface-1)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 'clamp(48px, 7vw, 80px)',
          flexWrap: 'wrap',
          gap: '32px',
        }}>
          <div>
            <h2
              className="reveal delay-1 t-display-lg"
              style={{ color: 'var(--white)', lineHeight: 0.92 }}
            >
              HOW WE
              <span style={{ color: 'var(--red)' }}> WORK</span>
            </h2>
          </div>

          {/* Two-line styled subheading */}
          <div className="reveal delay-2" style={{ textAlign: 'right' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 3vw, 36px)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              lineHeight: 1,
              color: 'var(--white)',
            }}>
              Three formats.
            </div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 3vw, 36px)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              lineHeight: 1,
              color: 'var(--red)',
              marginBottom: '12px',
            }}>
              One system.
            </div>
            <p style={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.4)',
              maxWidth: '260px',
              lineHeight: 1.6,
              marginLeft: 'auto',
            }}>
              Choose the structure that fits your life — not the other way around.
            </p>
          </div>
        </div>

        {/* Interactive Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(16px, 2vw, 24px)',
          alignItems: 'start', // allows expanding without stretching siblings
        }}
          className="services-grid"
        >
          {services.map((s, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                layout
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave()}
                onClick={() => handleClick(i, isOpen)}
                className={`reveal delay-${i + 2}`}
                whileHover={{ y: -4 }}
                style={{
                  background: 'var(--surface-2)',
                  border: isOpen ? '1px solid var(--red)' : '1px solid rgba(255,255,255,0.05)',
                  padding: 'clamp(28px, 3.5vw, 40px)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 'var(--radius)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'background 0.3s, border-color 0.3s',
                }}
              >
                {/* ALWAYS VISIBLE TOP HALF */}
                <motion.div layout style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={{
                    padding: '6px 16px',
                    background: isOpen ? 'rgba(201,58,28,0.15)' : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${isOpen ? 'rgba(201,58,28,0.3)' : 'rgba(255,255,255,0.1)'}`,
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: isOpen ? 'var(--red)' : 'rgba(255,255,255,0.6)',
                    borderRadius: 'var(--radius)',
                    transition: 'all 0.3s',
                  }}>
                    {s.tag}
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: '32px', height: '32px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: isOpen ? 'var(--red)' : 'var(--surface-3)',
                      borderRadius: '50%',
                      color: isOpen ? 'var(--white)' : 'rgba(255,255,255,0.5)'
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M7 1v12M1 7h12" />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Icon */}
                <motion.div layout style={{
                  marginBottom: '20px',
                  color: isOpen ? 'var(--red)' : 'var(--gray-1)',
                  transition: 'color 0.3s',
                }}>
                  {s.icon}
                </motion.div>

                {/* Title */}
                <motion.h3
                  layout
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(28px, 3vw, 40px)', // slightly smaller since it's simple
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.01em',
                    lineHeight: 0.95,
                    color: 'var(--white)',
                    whiteSpace: 'pre-line',
                    marginBottom: isOpen ? '24px' : '0',
                  }}
                >
                  {s.title}
                </motion.h3>

                {/* HIDDEN DETAILS EXPANSION */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      {/* Divider */}
                      <div style={{
                        width: '40px',
                        height: '2px',
                        background: 'rgba(201,58,28,0.5)',
                        marginBottom: '24px',
                        borderRadius: '1px',
                      }} />

                      {/* Description */}
                      <p style={{
                        fontSize: '15px',
                        lineHeight: 1.6,
                        color: 'rgba(255,255,255,0.7)',
                        marginBottom: '32px',
                      }}>
                        {s.description}
                      </p>

                      {/* Features */}
                      <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        marginBottom: '36px',
                        margin: 0, padding: 0,
                      }}>
                        {s.features.map(f => (
                          <li key={f} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            fontSize: '14px',
                            color: 'rgba(255,255,255,0.8)',
                            fontWeight: 500,
                          }}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                              <path d="M2 7l3.5 3.5L12 4" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {f}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <a
                        href={s.ctaHref || '#cta'}
                        target={s.external ? '_blank' : undefined}
                        rel={s.external ? 'noopener noreferrer' : undefined}
                        onClick={e => e.stopPropagation()} // prevent double toggling when clicking button
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '12px',
                          fontSize: '14px',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--red)',
                          textDecoration: 'none',
                          transition: 'gap 0.2s ease',
                          paddingTop: '20px',
                          borderTop: '1px solid rgba(255,255,255,0.05)',
                          width: '100%',
                        }}
                        onMouseEnter={e => e.currentTarget.style.gap = '16px'}
                        onMouseLeave={e => e.currentTarget.style.gap = '12px'}
                      >
                        {s.cta}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
