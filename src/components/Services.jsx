import { useEffect, useRef } from 'react'

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

export default function Services() {
  const ref = useReveal()

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
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
            </div>
            <h2
              className="reveal delay-1 t-display-lg"
              style={{ color: 'var(--white)', lineHeight: 0.92 }}
            >
              HOW WE<br />
              <span style={{ color: 'var(--red)' }}>WORK</span>
            </h2>
          </div>
          <p
            className="reveal delay-2 t-body"
            style={{
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '320px',
              textAlign: 'right',
            }}
          >
            Three formats. One system. Choose the structure that fits your life — not the other way around.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }}
          className="services-grid"
        >
          {services.map((s, i) => (
            <div
              key={i}
              className={`reveal delay-${i + 2}`}
              style={{
                background: s.highlight ? 'var(--red)' : 'var(--surface-2)',
                padding: 'clamp(28px, 3.5vw, 48px)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Tag */}
              <div style={{ marginBottom: '32px' }}>
                <span style={{
                  padding: '6px 16px',
                  background: s.highlight ? 'rgba(255,255,255,0.15)' : 'rgba(224, 48, 30, 0.12)',
                  border: `1px solid ${s.highlight ? 'rgba(255,255,255,0.2)' : 'rgba(224, 48, 30, 0.2)'}`,
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: s.highlight ? 'rgba(255,255,255,0.9)' : 'var(--red)',
                  borderRadius: '2px',
                }}>
                  {s.tag}
                </span>
              </div>

              {/* Icon */}
              <div style={{
                marginBottom: '24px',
                color: s.highlight ? 'rgba(255,255,255,0.8)' : 'var(--gray-1)',
              }}>
                {s.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(36px, 4vw, 56px)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  lineHeight: 0.95,
                  color: 'var(--white)',
                  marginBottom: '20px',
                  whiteSpace: 'pre-line',
                }}
              >
                {s.title}
              </h3>

              {/* Divider */}
              <div style={{
                width: '32px',
                height: '2px',
                background: s.highlight ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                marginBottom: '20px',
                borderRadius: '1px',
              }} />

              {/* Description */}
              <p style={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: s.highlight ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)',
                marginBottom: '32px',
                flex: 1,
              }}>
                {s.description}
              </p>

              {/* Features */}
              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '36px',
              }}>
                {s.features.map(f => (
                  <li key={f} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '15px',
                    color: s.highlight ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.6)',
                    fontWeight: 500,
                  }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l3.5 3.5L12 4" stroke={s.highlight ? 'rgba(255,255,255,0.8)' : 'var(--red)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '15px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: s.highlight ? 'var(--white)' : 'var(--red)',
                  textDecoration: 'none',
                  transition: 'gap 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.gap = '18px'}
                onMouseLeave={e => e.currentTarget.style.gap = '10px'}
              >
                {s.cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
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
