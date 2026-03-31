import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.querySelectorAll('.reveal, .reveal--left, .reveal--right')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.08 }
    )
    targets.forEach(t => obs.observe(t))
    return () => obs.disconnect()
  }, [])
  return ref
}

const timelineItems = [
  {
    period: 'Yesterday',
    tag: 'Learn',
    text: 'We understand yesterday. Every session is data. Every plateau is information. We track what worked, learn from what didn\'t, and carry that forward.',
  },
  {
    period: 'Today',
    tag: 'Act',
    text: 'We move today. Consistent, deliberate action — executed with proper form and the right intensity. Not harder. Smarter. Today is the only day you can actually train.',
  },
  {
    period: 'Tomorrow',
    tag: 'Build',
    text: 'We move toward a better tomorrow. Every rep builds the person you\'re becoming — a stronger, more energetic version who shows up for work, family, and life.',
  },
]

export default function Philosophy() {
  const ref = useReveal()

  return (
    <section
      ref={ref}
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
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>

              <span className="t-small" style={{ color: 'var(--gray-1)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Our Philosophy
              </span>
            </div>

            {/* Giant "m" letter as drop cap element */}
            <div
              className="reveal delay-1"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(100px, 14vw, 180px)',
                fontWeight: 900,
                color: 'var(--red)',
                lineHeight: 0.85,
                letterSpacing: '-0.03em',
                marginBottom: '8px',
                textTransform: 'uppercase',
                userSelect: 'none',
              }}
            >
              3
            </div>

            <h2
              className="reveal delay-2 t-display-md"
              style={{ color: 'var(--white)', marginBottom: '24px', lineHeight: 1.0 }}
            >
              THE MOOVAR<br />PRINCIPLE
            </h2>

            <p
              className="reveal delay-3 t-body"
              style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '24px', lineHeight: 1.8 }}
            >
              In Tamil, <em style={{ fontStyle: 'normal', color: 'rgba(255,255,255,0.75)' }}>moovar</em> means three. Three people — you, the coach, and the shared effort. Three timelines — yesterday, today, and tomorrow. Three pillars — strength, consistency, energy.
            </p>
            <p
              className="reveal delay-3 t-body"
              style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '32px' }}
            >
              We move simply. We move consistently. We move strength into everyday life — because long-term health is the ultimate performance metric.
            </p>

            <div className="reveal delay-4">
              <div style={{
                padding: '20px 24px',
                background: 'var(--surface-2)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderLeft: '3px solid var(--red)',
                borderRadius: '2px',
              }}>
                <p style={{
                  fontSize: '18px',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.7,
                }}>
                  "Long-term health is the ultimate performance metric."
                </p>
                <p style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--red)',
                  marginTop: '16px',
                }}>
                  — Coach Vishy, movr.fit
                </p>
              </div>
            </div>
          </div>

          {/* Right — Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {timelineItems.map((item, i) => (
              <div
                key={item.period}
                className={`reveal delay-${i + 2}`}
                style={{
                  display: 'flex',
                  gap: '32px',
                  paddingBottom: i < timelineItems.length - 1 ? '64px' : 0,
                  position: 'relative',
                }}
              >
                {/* Timeline line */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flexShrink: 0,
                  paddingTop: '4px',
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: i === 1 ? 'var(--red)' : 'var(--surface-4)',
                    border: `2px solid ${i === 1 ? 'var(--red)' : 'rgba(255,255,255,0.12)'}`,
                    flexShrink: 0,
                    boxShadow: i === 1 ? '0 0 16px rgba(201,58,28,0.5)' : 'none',
                    transition: 'all 0.3s',
                  }} />
                  {i < timelineItems.length - 1 && (
                    <div style={{
                      width: '1px',
                      flex: 1,
                      minHeight: '48px',
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.03))',
                      marginTop: '8px',
                    }} />
                  )}
                </div>

                {/* Content */}
                <div style={{ flex: 1, paddingTop: 0 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(32px, 4vw, 52px)',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      letterSpacing: '-0.02em',
                      color: i === 1 ? 'var(--white)' : 'rgba(255,255,255,0.35)',
                      lineHeight: 1,
                    }}>
                      {item.period}
                    </span>
                    <span style={{
                      padding: '6px 14px',
                      background: i === 1 ? 'var(--red)' : 'var(--surface-3)',
                      fontSize: '13px',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.9)',
                      borderRadius: '2px',
                    }}>
                      {item.tag}
                    </span>
                  </div>
                  <p style={{
                    fontSize: 'clamp(15px, 1.5vw, 18px)',
                    lineHeight: 1.75,
                    color: i === 1 ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)',
                  }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom CTA area */}
            <div
              className="reveal delay-5"
              style={{
                marginTop: '48px',
                padding: '32px',
                background: 'var(--surface-2)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '24px',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '28px',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  color: 'var(--white)',
                  marginBottom: '8px',
                  letterSpacing: '-0.01em',
                }}>
                  Ready to align?
                </div>
                <div style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.6)',
                }}>
                  Start your movr.fit journey today
                </div>
              </div>
              <a href="#cta" className="btn btn--primary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .philosophy-grid {
            grid-template-columns: 1fr !important;
          }
          .philosophy-grid > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  )
}
