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
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(900px, 85vw)',
          height: '260px',
          background:
            'radial-gradient(ellipse at center, rgba(201,58,28,0.08) 0%, rgba(201,58,28,0.03) 35%, transparent 72%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          paddingTop: 'clamp(64px, 8vw, 92px)',
          paddingBottom: 'clamp(64px, 8vw, 92px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.75, ease }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '18px',
            textAlign: 'center',
            marginBottom: 'clamp(32px, 5vw, 48px)',
          }}
        >
          <span
            className="t-small"
            style={{
              color: 'var(--gray-1)',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              opacity: 0.9,
            }}
          >
            Clients Currently In
          </span>

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={vp}
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 18,
              delay: 0.12,
            }}
            style={{
              padding: '8px 22px',
              background: 'rgba(201,58,28,0.10)',
              border: '1px solid rgba(201,58,28,0.22)',
              borderRadius: '999px',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--red)',
              boxShadow: '0 0 30px rgba(201,58,28,0.08)',
            }}
          >
            12 Countries
          </motion.div>
        </motion.div>

        {/* badges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.06,
                delayChildren: 0.08,
              },
            },
          }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '14px',
            maxWidth: '980px',
            margin: '0 auto',
          }}
        >
          {countries.map((country) => (
            <motion.div
              key={country.name}
              variants={{
                hidden: { scale: 0.75, opacity: 0, y: 18 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 22,
                  },
                },
              }}
              whileHover={{
                y: -5,
                scale: 1.04,
                borderColor: 'rgba(201,58,28,0.45)',
                background: 'rgba(201,58,28,0.09)',
                boxShadow: '0 10px 30px rgba(201,58,28,0.12)',
                transition: { type: 'spring', stiffness: 380, damping: 18 },
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '12px 20px',
                minHeight: '48px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '999px',
                cursor: 'default',
                backdropFilter: 'blur(8px)',
              }}
            >
              <img
                src={`https://flagcdn.com/w40/${country.code}.png`}
                alt={`${country.name} flag`}
                style={{
                  width: '20px',
                  height: '14px',
                  objectFit: 'cover',
                  borderRadius: '2px',
                  display: 'block',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.82)',
                  letterSpacing: '0.03em',
                  whiteSpace: 'nowrap',
                }}
              >
                {country.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}