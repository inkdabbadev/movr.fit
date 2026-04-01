import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Vidhya Srinivasan', location: 'USA', quote: 'I used to fear lifting weights and struggled with consistency. After training with Vishy, my energy levels are up, my mind feels peaceful, and I actually feel happy after strength training. I can now lift my 5-year-old son, climb stairs with ease, carry heavy bags home, and squat comfortably. Strength training is essential for everyone — regardless of age or gender.', featured: true },
  { name: 'Kannan Gopal', location: 'GTA, Ontario, Canada', quote: 'Consistency was my biggest challenge, and I wasn\'t sure a local gym coach would understand my roots or where I was in my fitness journey. With Vishy, it became an easy and effective connection — training became part of my weekday schedule. What stands out is his commitment: he works around time zones, schedules sessions to my convenience, and keeps me accountable. On the lighter side, this training helped me clear Canadian snow with barely any strain on my lower back!', featured: false },
  { name: 'Jeyashri Suresh', location: 'Hong Kong', quote: 'I started with a fear of injury and felt intimidated by strength training. With Vishy\'s proper guidance, it\'s become genuinely enjoyable. My body is toned, I feel stronger, and I can lift things with ease. His instructions are clear, his encouragement is real, and his push is always at the right moment. I would highly recommend Vishy.', featured: true },
  { name: 'Pratheej Prabha', location: 'Chennai', quote: 'Before training with Vishy, I couldn\'t move to the next level on my own. He gave me the strength, confidence, and the realisation that I can do more. I feel stronger — and I keep that feeling every day.', featured: false },
  { name: 'Ravi G.T.', location: 'Hong Kong', quote: 'I didn\'t know where to start, especially at a gym in front of others. Vishy changed that. My body confidence is up, my energy is up, and I feel stronger and younger — I can literally see muscles developing. I just celebrated my 60th birthday, and I can say without hesitation: it is never too late to start strength training. Vishy makes you feel younger and stronger.', featured: false },
  { name: 'Priya Venkat', location: 'USA', quote: 'Accountability and consistency were my biggest hurdles. After training with Vishy, I\'m more motivated, more consistent, and my energy levels have gone up. He\'s willing to accommodate physical challenges, and he\'s gentle but firm — exactly what I needed.', featured: false },
  { name: 'Sujatha Sridhar', location: 'Hyderabad', quote: 'I\'d never really thought about fitness — life was just too busy. Training with Vishy made me feel more energetic and more confident. He truly understands your weaknesses and motivates you to push past them. You feel cared for, not pushed around.', featured: true },
  { name: 'Meera Radhakrishnan', location: 'Muscat', quote: 'I was a master procrastinator with zero motivation to start. Now I show up consistently, I\'ve learned a lot, and I genuinely feel better about myself — and more energetic every day. What makes Vishy different is that he listens to your concerns and tailors the workout to suit you individually.', featured: false },
  { name: 'Avni Laijawala-Patel', location: 'UK', quote: 'Training with Vishy keeps my energy levels high and I feel good overall. He\'s reliable, very flexible, and understands the Indian mindset extremely well — which makes a real difference.', featured: false },
  { name: 'Pratyum', location: 'Chennai', quote: 'Vishy is very approachable and realistic, with a solid framework for showing you results. He gave me the strength and the understanding of how to train properly. My energy levels are up, and I feel more confident in general.', featured: false },
  { name: 'Namrata Shah', location: 'Sydney, Australia', quote: 'Vishy broke multiple fitness myths for me. I believed weight training would make me bulky — he patiently got me comfortable with weights, and I started enjoying it. I got stronger, my posture improved, my stamina and energy went up, and I began to understand the importance of nutrition too. Unlike other trainers, Vishy is very invested in your personal journey — especially on the days you want to give up. I trained with him for over 3 years and saw a genuine mindset and lifestyle shift. Trust the process.', featured: true },
  { name: 'Ramesh Krishnan', location: 'Hong Kong', quote: 'I started with a fear of lifting heavy. Now I feel physically stronger and more confident. Even in group sessions, Vishy ensures personalised attention — suggesting specific modifications for those with injury concerns. He\'s also very punctual and professional throughout every session. Essential training, especially if you\'re above 45.', featured: false },
  { name: 'Vidhya', location: 'United Kingdom', quote: 'Consistency used to be my biggest challenge. Once I committed to two sessions a week, I could feel my strength gradually improving. Vishy really understands your level and knows exactly how to push you to do better — he gets me out of my comfort zone and encourages me to try heavier weights. My advice? Don\'t think. Just enrol.', featured: false },
]

function QuoteIcon({ color }) {
  return (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" style={{ flexShrink: 0 }}>
      <path d="M0 18V10.8C0 7.2 1.2 4.2 3.6 1.8L5.4 0l2.4 1.8C6.6 3 5.8 4.4 5.4 6H10V18H0ZM14 18V10.8C14 7.2 15.2 4.2 17.6 1.8L19.4 0l2.4 1.8C20.6 3 19.8 4.4 19.4 6H24V18H14Z" fill={color || 'rgba(201,58,28,0.2)'} />
    </svg>
  )
}

const ease = [0.16, 1, 0.3, 1]
const vp = { once: true, margin: '-60px' }

export default function Testimonials() {
  const trackRef = useRef(null)
  const pausedRef = useRef(false)

  // Auto-scroll: continuously scroll right, loop seamlessly using doubled list
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const SPEED = 0.55 // px per frame (~33px/sec)
    let raf

    const tick = () => {
      if (!pausedRef.current && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += SPEED
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0
        }
      }
      raf = requestAnimationFrame(tick)
    }

    // Document-level touch listeners so touchend always fires even off the track
    const onTouchStart = () => { pausedRef.current = true }
    const onTouchEnd = () => { pausedRef.current = false }
    document.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('touchend', onTouchEnd, { passive: true })
    document.addEventListener('touchcancel', onTouchEnd, { passive: true })

    const timeout = setTimeout(() => {
      raf = requestAnimationFrame(tick)
    }, 150)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(raf)
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('touchend', onTouchEnd)
      document.removeEventListener('touchcancel', onTouchEnd)
    }
  }, [])

  // Wheel: allow manual horizontal scroll
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const handleWheel = (e) => {
      if (e.deltaY === 0) return
      e.preventDefault()
      el.scrollLeft += e.deltaY * 1.5
    }
    el.addEventListener('wheel', handleWheel, { passive: false })
    return () => el.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <section
      id="testimonials"
      style={{
        background: 'var(--surface-1)', position: 'relative',
        paddingTop: 'var(--section-pad)', paddingBottom: 'clamp(60px, 8vw, 120px)',
        overflowX: 'hidden',
      }}
    >
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Watermark */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: '50%', right: '-5%', transform: 'translateY(-50%)',
          fontFamily: 'var(--font-display)', fontSize: 'clamp(160px, 22vw, 320px)',
          fontWeight: 900, textTransform: 'uppercase', color: 'rgba(255,255,255,0.012)',
          letterSpacing: '-0.05em', whiteSpace: 'nowrap', userSelect: 'none',
          pointerEvents: 'none', lineHeight: 1, zIndex: 0,
        }}>REAL</div>

        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ marginBottom: 'clamp(48px, 7vw, 80px)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
              {/* Heading — line by line clip reveal */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              >
                {['REAL PEOPLE.', 'REAL RESULTS.'].map((line, li) => (
                  <div key={li} style={{ overflow: 'hidden', lineHeight: 0.92 }}>
                    <motion.h2
                      variants={{
                        hidden: { y: '100%', opacity: 0 },
                        visible: { y: '0%', opacity: 1, transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } },
                      }}
                      className="t-display-lg"
                      style={{ color: li === 0 ? 'var(--white)' : 'var(--red)', lineHeight: 0.92 }}
                    >
                      {line}
                    </motion.h2>
                  </div>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ duration: 0.8, delay: 0.3, ease }}
                className="t-body"
                style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '300px', textAlign: 'right' }}
              >
                Only clients who gave permission are included.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Scroll track */}
        <div style={{ position: 'relative', width: '100%', zIndex: 2 }}>
          {/* Edge fade masks */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '10vw', background: 'linear-gradient(to right, var(--surface-1), transparent)', zIndex: 10, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '10vw', background: 'linear-gradient(to left, var(--surface-1), transparent)', zIndex: 10, pointerEvents: 'none' }} />

          <div
            ref={trackRef}
            className="no-scrollbar"
            onMouseEnter={() => { pausedRef.current = true }}
            onMouseLeave={() => { pausedRef.current = false }}
            style={{
              display: 'flex', gap: '24px',
              paddingLeft: '10vw', paddingRight: '10vw', paddingTop: '16px', paddingBottom: '24px',
              overflowX: 'auto', WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none', msOverflowStyle: 'none',
              cursor: 'grab',
            }}
          >
            {/* Render testimonials twice for seamless infinite loop */}
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                aria-hidden={idx >= testimonials.length ? 'true' : undefined}
                style={{ flexShrink: 0, width: 'clamp(280px, calc(100vw - 80px), 420px)' }}
              >
                <TestimonialCard t={t} index={idx % testimonials.length} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </section>
  )
}

function TestimonialCard({ t, index }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    el.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px) scale(1.02)`
    el.style.transition = 'transform 0.08s ease'
  }

  const handleMouseLeave = () => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = ''
    el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)'
  }

  return (
    <div>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          background: t.featured ? 'var(--surface-3)' : 'var(--surface-2)',
          border: `1px solid ${t.featured ? 'rgba(201,58,28,0.2)' : 'rgba(255,255,255,0.05)'}`,
          borderRadius: 'var(--radius)',
          padding: 'clamp(20px, 3vw, 28px)',
          display: 'flex', flexDirection: 'column', gap: '16px',
          position: 'relative', overflow: 'hidden',
          cursor: 'default',
          willChange: 'transform',
        }}
      >
        {/* Glow spot */}
        {t.featured && (
          <div style={{
            position: 'absolute', top: '-30%', right: '-20%', width: '60%', height: '60%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,58,28,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
        )}

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
          <QuoteIcon color={t.featured ? 'rgba(201,58,28,0.3)' : 'rgba(255,255,255,0.07)'} />
          <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', whiteSpace: 'nowrap' }}>
            {t.location}
          </span>
        </div>

        <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', lineHeight: 1.7, color: t.featured ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.6)', fontStyle: 'italic', flex: 1, userSelect: 'none' }}>
          "{t.quote}"
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '12px', borderTop: `1px solid ${t.featured ? 'rgba(201,58,28,0.15)' : 'rgba(255,255,255,0.05)'}` }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '50%',
            background: t.featured ? 'rgba(201,58,28,0.2)' : 'var(--surface-4)',
            border: `1px solid ${t.featured ? 'rgba(201,58,28,0.3)' : 'rgba(255,255,255,0.08)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 900,
            color: t.featured ? 'var(--red)' : 'rgba(255,255,255,0.5)', flexShrink: 0,
          }}>
            {t.name.charAt(0)}
          </div>
          <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--white)', letterSpacing: '0.02em' }}>
            {t.name}
          </div>
        </div>
      </div>
    </div>
  )
}
