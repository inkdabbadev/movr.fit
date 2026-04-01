import { useRef } from 'react'
import { motion } from 'framer-motion'

// ─── ADD YOUR IMAGES HERE ───────────────────────────────────────────
// Replace src with your local file paths, e.g. '/images/photo1.jpg'
// Just add or remove objects from this array — the grid auto-adjusts.
const images = [
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop', alt: 'Training session' },
  { src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop', alt: 'Kettlebell form' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop', alt: 'Focused workout' },
  { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop', alt: 'Strength equipment' },
  { src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop', alt: 'Functional training' },
  { src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop', alt: 'Gym performance' },
]
// ────────────────────────────────────────────────────────────────────

const ease = [0.76, 0, 0.24, 1]
const vp = { once: true, margin: '-40px' }

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section"
      style={{ background: 'var(--black)', overflow: 'hidden' }}
    >
      <div className="container">
        {/* Header — word clip reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          style={{ marginBottom: 'clamp(40px, 6vw, 72px)' }}
        >
          {['WHERE WORK', 'GETS DONE'].map((line, li) => (
            <div key={li} style={{ overflow: 'hidden', lineHeight: 0.92 }}>
              <motion.h2
                variants={{
                  hidden: { y: '100%', opacity: 0 },
                  visible: { y: '0%', opacity: 1, transition: { duration: 0.85, ease } },
                }}
                className="t-display-lg"
                style={{ color: li === 0 ? 'var(--white)' : 'var(--red)', lineHeight: 0.92 }}
              >
                {line}
              </motion.h2>
            </div>
          ))}
        </motion.div>

        {/* Grid — clipPath wipe each image from left */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}
          className="gallery-grid"
        >
          {images.map((img, i) => (
            <GalleryImg key={i} img={img} index={i} />
          ))}
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            textAlign: 'center', marginTop: '48px', fontSize: '15px', fontWeight: 600,
            letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
          }}
        >
          Real training. Real results. Real people.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function GalleryImg({ img, index }) {
  const tiltRef = useRef(null)

  const handleMouseMove = (e) => {
    const el = tiltRef.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    el.style.transform = `perspective(700px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.03)`
    el.style.transition = 'transform 0.1s ease'
  }

  const handleMouseLeave = () => {
    const el = tiltRef.current
    if (!el) return
    el.style.transform = ''
    el.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1)'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ borderRadius: 'var(--radius)', overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}
    >
      <div
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius)' }}
      >
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            filter: 'grayscale(20%) contrast(1.05)',
            transition: 'transform 0.6s var(--ease-out), filter 0.4s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.06)'
            e.currentTarget.style.filter = 'grayscale(0%) contrast(1.1)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.filter = 'grayscale(20%) contrast(1.05)'
          }}
        />
        {/* Red glow overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(201,58,28,0.15) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 60%, rgba(8,8,8,0.5))',
          pointerEvents: 'none',
        }} />
      </div>
    </motion.div>
  )
}
