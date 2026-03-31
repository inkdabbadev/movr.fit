import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

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

export default function CTASection() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', goal: '', format: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="cta"
      ref={ref}
      style={{
        background: 'var(--black)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background image with strong overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}>
        <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1920&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'grayscale(60%) brightness(0.2)',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.88) 50%, rgba(201,58,28,0.08) 100%)',
        }} />
      </div>

      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        paddingTop: 'clamp(40px, 6vw, 80px)',
        paddingBottom: 'clamp(40px, 6vw, 80px)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(48px, 8vw, 100px)',
          alignItems: 'center',
        }}
          className="cta-grid"
        >
          {/* Left — Big statement */}
          <div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(130px, 7vw, 90px)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                color: 'var(--white)',
                lineHeight: 0.9,
                marginBottom: '32px',
              }}
            >
              FEEL <motion.span
                animate={{ color: ['var(--red)', '#ff6045', 'var(--red)'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ display: 'inline-block' }}
              >GOOD.</motion.span><br />
              <span style={{ color: 'rgba(255,255,255,0.18)' }}>MOVE WELL.</span>
            </motion.h2>

            {/* Guarantees */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
                hidden: {}
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              {[
                'Free first consultation call',
                'Custom program from day one',
                'No lock-in contracts',
              ].map((item, i) => (
                <motion.div
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                >
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(201,58,28,0.15)',
                    border: '1px solid rgba(201,58,28,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: '16px', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Form */}
          <div className="reveal--right delay-2">
            {submitted ? (
              <div style={{
                background: 'var(--surface-2)',
                border: '1px solid rgba(201,58,28,0.3)',
                borderRadius: 'var(--radius)',
                padding: 'clamp(32px, 5vw, 56px)',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(201,58,28,0.15)',
                  border: '2px solid var(--red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  animation: 'pulse-ring 2s infinite',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4 10-10" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '28px',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  color: 'var(--white)',
                  marginBottom: '12px',
                }}>
                  You're In Motion
                </h3>
                <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                  Coach Vishy will be in touch within 24 hours to schedule your consultation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--surface-2)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 'var(--radius)',
                  padding: 'clamp(28px, 4vw, 48px)',
                }}
              >
                <div style={{ marginBottom: '28px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '24px',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: 'var(--white)',
                    letterSpacing: '-0.01em',
                    marginBottom: '6px',
                  }}>
                    Book a Free Consultation
                  </h3>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)' }}>
                    Takes 2 minutes. No commitment required.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    <FormField
                      label="Full Name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="t-small" style={{
                      display: 'block',
                      color: 'rgba(255,255,255,0.6)',
                      marginBottom: '12px',
                    }}>
                      Training Format
                    </label>
                    <select
                      name="format"
                      value={form.format}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'var(--surface-3)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '8px',
                        color: form.format ? 'var(--white)' : 'rgba(255,255,255,0.4)',
                        fontSize: '15px',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        cursor: 'pointer',
                        appearance: 'none',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23666' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                        paddingRight: '40px',
                      }}
                    >
                      <option value="" disabled>Select a format</option>
                      <option value="in-person">In-Person Training</option>
                      <option value="online">Online Coaching</option>
                      <option value="hybrid">Hybrid Program</option>
                    </select>
                  </div>

                  <div>
                    <label className="t-small" style={{
                      display: 'block',
                      color: 'rgba(255,255,255,0.6)',
                      marginBottom: '12px',
                    }}>
                      Your Primary Goal
                    </label>
                    <textarea
                      name="goal"
                      value={form.goal}
                      onChange={handleChange}
                      placeholder="e.g. Build baseline strength, lose fat, improve energy..."
                      rows={2}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'var(--surface-3)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '8px',
                        color: 'var(--white)',
                        fontSize: '15px',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        resize: 'none',
                        lineHeight: 1.5,
                        minHeight: '60px',
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn--primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '24px', padding: '16px', fontSize: '15px' }}
                >
                  Book a Free Consultation
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <p style={{
                  textAlign: 'center',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: '16px',
                }}>
                  No spam. Response within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function FormField({ label, name, type, placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="t-small" style={{
        display: 'block',
        color: 'rgba(255,255,255,0.6)',
        marginBottom: '12px',
      }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%',
          padding: '12px 16px',
          background: 'var(--surface-3)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '8px',
          color: 'var(--white)',
          fontSize: '15px',
          fontFamily: 'var(--font-body)',
          outline: 'none',
          transition: 'border-color 0.2s',
        }}
        onFocus={e => e.currentTarget.style.borderColor = 'rgba(201,58,28,0.5)'}
        onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
      />
    </div>
  )
}
