import { useEffect, useRef } from 'react'

const countries = [
  { code: 'in', name: 'India' },
  { code: 'ca', name: 'Canada' },
  { code: 'gb', name: 'UK' },
  { code: 'hk', name: 'Hong Kong' },
  { code: 'au', name: 'Australia' },
  { code: 'us', name: 'USA' },
  { code: 'om', name: 'Muscat' },
  { code: 'nz', name: 'New Zealand' },
  { code: 'es', name: 'Spain' },
  { code: 'fr', name: 'France' },
  { code: 'be', name: 'Belgium' },
  { code: 'sg', name: 'Singapore' },
]

export default function GlobalClients() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.querySelectorAll('.reveal, .reveal--scale')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1 }
    )
    targets.forEach(t => obs.observe(t))
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--black)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Subtle red glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw',
        height: '200px',
        background: 'radial-gradient(ellipse at center, rgba(201,58,28,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ paddingTop: 'clamp(56px, 8vw, 80px)', paddingBottom: 'clamp(56px, 8vw, 80px)' }}>
        {/* Header */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: 'clamp(32px, 5vw, 48px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span className="t-small" style={{ color: 'var(--gray-1)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              Clients Currently In
            </span>
          </div>
          <div style={{
            padding: '6px 20px',
            background: 'rgba(201,58,28,0.1)',
            border: '1px solid rgba(201,58,28,0.2)',
            borderRadius: '2px',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--red)',
          }}>
            12 Countries
          </div>
        </div>

        {/* Country badges grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          {countries.map((country, i) => (
            <div
              key={country.name}
              className={`reveal--scale delay-${Math.min(i + 1, 6)}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 20px',
                background: 'var(--surface-2)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '100px',
                cursor: 'default',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(201,58,28,0.35)'
                e.currentTarget.style.background = 'rgba(201,58,28,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.background = 'var(--surface-2)'
              }}
            >
              <img 
                src={`https://flagcdn.com/${country.code}.svg`} 
                alt={`${country.name} flag`} 
                style={{ width: '20px', height: '14px', objectFit: 'cover', borderRadius: '2px' }} 
              />
              <span style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.75)',
                letterSpacing: '0.04em',
              }}>
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
