import { motion } from 'framer-motion'

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

const ease = [0.16, 1, 0.3, 1]
const vp = { once: true, margin: '-40px' }

export default function GlobalClients() {
  return (
    <section
      style={{
        background: 'var(--black)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Animated red glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80vw', height: '200px',
          background: 'radial-gradient(ellipse at center, rgba(201,58,28,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ paddingTop: 'clamp(56px, 8vw, 80px)', paddingBottom: 'clamp(56px, 8vw, 80px)' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '16px', marginBottom: 'clamp(32px, 5vw, 48px)',
          }}
        >
          <span className="t-small" style={{ color: 'var(--gray-1)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            Clients Currently In
          </span>
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={vp}
            transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.15 }}
            style={{
              padding: '6px 20px',
              background: 'rgba(201,58,28,0.1)', border: '1px solid rgba(201,58,28,0.2)',
              borderRadius: '100px', fontSize: '13px', fontWeight: 700,
              letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--red)',
            }}
          >
            12 Countries
          </motion.div>
        </motion.div>

        {/* Badges — wave bounce stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
        >
          {countries.map((country, i) => (
            <motion.div
              key={country.name}
              variants={{
                hidden: { scale: 0.5, opacity: 0, y: 20 },
                visible: {
                  scale: 1, opacity: 1, y: 0,
                  transition: { type: 'spring', stiffness: 320, damping: 22 },
                },
              }}
              whileHover={{
                y: -6, scale: 1.06,
                borderColor: 'rgba(201,58,28,0.5)',
                background: 'rgba(201,58,28,0.08)',
                transition: { type: 'spring', stiffness: 400, damping: 20 },
              }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '10px 20px',
                background: 'var(--surface-2)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '100px', cursor: 'default',
              }}
            >
              <img
                src={`https://flagcdn.com/${country.code}.svg`}
                alt={`${country.name} flag`}
                style={{ width: '20px', height: '14px', objectFit: 'cover', borderRadius: '2px' }}
              />
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.04em' }}>
                {country.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
