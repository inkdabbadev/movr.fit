import { useEffect, useRef } from 'react'

const pillars = [
  {
    num: '01',
    title: 'Strength',
    sub: 'Baseline First',
    body: 'We move baseline strength. Every programme begins with proper form, intentional loading, and building from the ground up — so that strength becomes the foundation of everything else.',
    accent: 'Learn from yesterday',
  },
  {
    num: '02',
    title: 'Consistency',
    sub: 'Repeatable Systems',
    body: 'We move consistency and confidence. Transformation is not a sprint — it\'s a series of simple, repeatable actions stacked across time. The movr.fit system is built for the long game.',
    accent: 'Act today',
  },
  {
    num: '03',
    title: 'Energy',
    sub: 'Everyday Vitality',
    body: 'We move energy levels. Not the kind that burns out — the kind that compounds into your work, your relationships, and your life well beyond the gym.',
    accent: 'Build tomorrow',
  },
]

function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold }
    )
    targets.forEach(t => obs.observe(t))
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function ThreePillars() {
  const sectionRef = useReveal(0.1)

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="section grid-texture"
      style={{
        background: 'var(--surface-1)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="container">
        {/* Section header */}
        <div style={{ marginBottom: 'clamp(56px, 8vw, 100px)' }}>
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
            
            <span className="t-small" style={{ color: 'var(--gray-1)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              The Moovar System
            </span>
          </div>

          {/* Staggered Two-Line Animated Heading */}
          <div style={{ marginBottom: '32px' }}>
            <h2
              className="t-display-lg"
              style={{ color: 'var(--white)', lineHeight: 0.95, whiteSpace: 'nowrap' }}
            >
              <div style={{ overflow: 'hidden', paddingBottom: '12px', marginBottom: '-12px' }}>
                <span className="reveal delay-1" style={{ display: 'inline-block' }}>
                  THREE PILLARS.
                </span>
              </div>
              <div style={{ overflow: 'hidden', paddingBottom: '12px', marginBottom: '-12px' }}>
                <span className="reveal delay-2" style={{ color: 'var(--red)', display: 'inline-block' }}>
                  ONE DIRECTION.
                </span>
              </div>
            </h2>
          </div>

          <p
            className="reveal delay-3 t-body"
            style={{
              color: 'var(--gray-1)',
              maxWidth: '500px',
              marginTop: '16px',
            }}
          >
            In Tamil, <em style={{ fontStyle: 'normal', color: 'rgba(255,255,255,0.7)' }}>moovar</em> means three — and three keeps coming together in how we are built. Three people, three timelines, three pillars.
          </p>
        </div>

        {/* Pillars grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }}
          className="pillars-grid"
        >
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className={`reveal delay-${i + 2}`}
              style={{
                background: 'var(--surface-2)',
                padding: 'clamp(32px, 4vw, 56px) clamp(24px, 3vw, 44px)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >

              {/* Large number */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(64px, 8vw, 120px)',
                fontWeight: 900,
                color: 'rgba(224, 48, 30, 0.12)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                marginBottom: '32px',
                userSelect: 'none',
              }}>
                {p.num}
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--red)',
                }} />
                <span className="t-small" style={{
                  color: 'var(--red)',
                }}>
                  {p.sub}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 3.5vw, 56px)', // Scaled down to fit 'CONSISTENCY' perfectly
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  lineHeight: 0.95,
                  color: 'var(--white)',
                  marginBottom: '24px',
                  hyphens: 'auto',
                }}
              >
                {p.title}
              </h3>

              {/* Divider */}
              <div style={{
                width: '40px',
                height: '2px',
                background: 'rgba(255,255,255,0.12)',
                marginBottom: '20px',
                borderRadius: '1px',
              }} />

              {/* Body */}
              <p className="t-body" style={{
                color: 'rgba(255,255,255,0.65)',
                marginBottom: '40px',
              }}>
                {p.body}
              </p>

              {/* Accent footer */}
              <div className="t-small" style={{
                color: 'rgba(224, 48, 30, 0.8)',
              }}>
                {p.accent} →
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
