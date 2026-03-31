import { useEffect, useRef } from 'react'
import vishyImg from '../../public/images/vishy-1.png'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.querySelectorAll('.reveal, .reveal--left, .reveal--right, .reveal--scale')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1 }
    )
    targets.forEach(t => obs.observe(t))
    return () => obs.disconnect()
  }, [])
  return ref
}

const traits = [
  { label: 'Form over Ego', desc: 'Correct movement patterns before loading weight' },
  { label: 'Progression over Pressure', desc: 'Sustainable gains, not unsustainable spikes' },
  { label: 'Sustainability over Shortcuts', desc: 'Long-term health as the ultimate metric' },
]

export default function CoachSection() {
  const ref = useReveal()

  return (
    <section
      id="about"
      ref={ref}
      className="section"
      style={{
        background: 'var(--black)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-10%',
        width: '60vw',
        height: '60vw',
        maxWidth: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,58,28,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(40px, 7vw, 100px)',
            alignItems: 'center',
          }}
          className="coach-grid"
        >
          {/* LEFT — Text content */}
          <div>
            <div className="reveal delay-1" style={{ overflow: 'hidden' }}>
              <h2
                className="t-display-lg"
                style={{
                  color: 'var(--white)',
                  lineHeight: 0.92,
                  marginBottom: '12px',
                }}
              >
                MEET
              </h2>
              <h2
                className="t-display-lg"
                style={{
                  color: 'var(--red)',
                  lineHeight: 0.92,
                  marginBottom: '36px',
                }}
              >
                MR. VISHY
              </h2>
            </div>

            {/* Tag line */}
            <div
              className="reveal delay-2"
              style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '32px',
                flexWrap: 'wrap',
              }}
            >
              {['Structured', 'Calm', 'Intentional'].map(tag => (
                <span
                  key={tag}
                  style={{
                    padding: '6px 16px',
                    background: 'var(--surface-2)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.8)',
                    borderRadius: '2px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p
              className="reveal delay-2 t-body"
              style={{
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '16px',
                maxWidth: '480px',
              }}
            >
              A coach who prioritizes form over ego, progression over pressure, and sustainability over shortcuts. Calm in presence. Clear in method. Data-aware, but human first.
            </p>
            {/* Traits */}
            <div className="reveal delay-3" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {traits.map((t, i) => (
                <div
                  key={t.label}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    padding: '20px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--red)',
                    marginTop: '6px',
                    flexShrink: 0,
                  }} />
                  <div>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--white)',
                      letterSpacing: '0.02em',
                      marginBottom: '6px',
                    }}>
                      {t.label}
                    </div>
                    <div style={{
                      fontSize: '15px',
                      color: 'rgba(255,255,255,0.5)',
                      lineHeight: 1.6,
                    }}>
                      {t.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Photo */}
          <div
            className="reveal--right delay-1"
            style={{ position: 'relative' }}
          >
            {/* Decorative frame */}
            <div style={{
              position: 'absolute',
              top: '-16px',
              right: '-16px',
              bottom: '16px',
              left: '16px',
              border: '1px solid rgba(201,58,28,0.25)',
              borderRadius: '4px',
              zIndex: 0,
            }} />

            {/* Photo container */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: '4px',
              overflow: 'hidden',
              aspectRatio: '3/4',
            }}>
              <img
                src={vishyImg}
                alt="Coach Mr. Vishy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  filter: 'contrast(1.05) saturate(0.95)',
                }}
              />
              {/* Image gradient overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(to top, rgba(8,8,8,0.9), transparent)',
              }} />

              {/* Name card overlay */}
              <div style={{
                position: 'absolute',
                bottom: '28px',
                left: '28px',
                right: '28px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}>
                <div style={{
                  width: '3px',
                  height: '44px',
                  background: 'var(--red)',
                  borderRadius: '2px',
                  flexShrink: 0,
                }} />
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '24px',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: 'var(--white)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.1,
                  }}>
                    Mr. Vishy
                  </div>
                  <div className="t-small" style={{
                    color: 'rgba(255,255,255,0.6)',
                    marginTop: '4px',
                  }}>
                    Coach @ movr.fit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .coach-grid {
            grid-template-columns: 1fr !important;
          }
          .coach-grid > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  )
}
