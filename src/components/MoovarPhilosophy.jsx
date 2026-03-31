import { useEffect, useRef } from 'react'

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
    sub: 'Baseline First',
    text: 'We move baseline strength. Every session is data. Every plateau is information. Every programme begins with intentional loading and building from the ground up — so that strength becomes the foundation. We track what worked, learn from what didn\'t, and carry that forward.',
  },
  {
    num: '02',
    period: 'Today',
    tag: 'Act',
    pillar: 'Consistency',
    sub: 'Repeatable Systems',
    text: 'We move consistency and confidence. Transformation is a series of simple, repeatable actions stacked across time. Consistent, deliberate action — executed with proper form and the right intensity. Today is the only day you can actually train.',
  },
  {
    num: '03',
    period: 'Tomorrow',
    tag: 'Build',
    pillar: 'Energy',
    sub: 'Everyday Vitality',
    text: 'We move energy levels. Not the kind that burns out — the kind that compounds into your work, your relationships, and your life well beyond the gym. Every rep builds the person you\'re becoming.',
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
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
              <span className="t-small" style={{ color: 'var(--gray-1)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                The Moovar System
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
                marginBottom: '16px',
                textTransform: 'uppercase',
                userSelect: 'none',
              }}
            >
              3
            </div>

            <h2
              className="reveal delay-2 t-display-md"
              style={{ color: 'var(--white)', marginBottom: '8px', lineHeight: 0.95 }}
            >
              THE MOOVAR<br />PRINCIPLE
            </h2>
            <h3 className="reveal delay-2" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: 'var(--red)',
              lineHeight: 1.1,
              marginBottom: '32px'
            }}>
              PILLARS. TIMELINES. PEOPLE.
            </h3>

            <p
              className="reveal delay-3 t-body"
              style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '24px', lineHeight: 1.7 }}
            >
              In Tamil, <em style={{ fontStyle: 'normal', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>moovar</em> means three. Three people — you, the coach, and the shared effort. Three timelines — yesterday, today, tomorrow. Three pillars — strength, consistency, energy.
            </p>
            <p
              className="reveal delay-3 t-body"
              style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '32px' }}
            >
              We move simply. We move consistently. We move strength into everyday life — because long-term health is the ultimate performance metric.
            </p>

            <div className="reveal delay-4">
              <div style={{
                padding: '24px 32px',
                background: 'var(--surface-2)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderLeft: '4px solid var(--red)',
                borderRadius: '2px',
              }}>
                <p style={{
                  fontSize: '20px',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: 1.6,
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
                  — Coach Vishy
                </p>
              </div>
            </div>
          </div>

          {/* Right — Combined Timeline & Pillars Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginTop: '24px' }}>
            {combinedPillars.map((item, i) => (
              <div
                key={item.num}
                className={`reveal delay-${i + 2}`}
                style={{
                  display: 'flex',
                  gap: 'clamp(24px, 4vw, 48px)',
                  paddingBottom: i < combinedPillars.length - 1 ? '60px' : 0,
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
                      minHeight: '64px',
                      background: 'linear-gradient(to bottom, rgba(201,58,28,0.5), rgba(201,58,28,0.0))',
                      marginTop: '12px',
                    }} />
                  )}
                </div>

                {/* Content Box */}
                <div style={{
                  flex: 1,
                  background: 'var(--surface-2)',
                  padding: 'clamp(32px, 4vw, 48px) clamp(24px, 3vw, 40px)',
                  borderRadius: '2px',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.03)',
                  top: '-12px', /* align box perfectly with timeline dot */
                }}>
                  
                  {/* Faint Number Watermark */}
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-10px',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(100px, 12vw, 160px)',
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
                    gap: '16px',
                    marginBottom: '24px',
                    flexWrap: 'wrap',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(28px, 3vw, 42px)',
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
                      borderRadius: '2px',
                    }}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Pillar Subtitle: Strength - Baseline First */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(24px, 2.5vw, 32px)',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.85)',
                      lineHeight: 1,
                    }}>
                      {item.pillar}
                    </h3>
                    <div style={{ width: '4px', height: '4px', background: 'var(--red)', borderRadius: '50%' }} />
                    <span className="t-small" style={{ color: 'var(--red)' }}>
                      {item.sub}
                    </span>
                  </div>

                  <div style={{
                    width: '40px',
                    height: '2px',
                    background: 'rgba(255,255,255,0.1)',
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 1,
                  }} />

                  {/* Body Text */}
                  <p className="t-body" style={{
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.65,
                    fontSize: 'clamp(16px, 1.8vw, 19px)',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {item.text}
                  </p>
                </div>
              </div>
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
