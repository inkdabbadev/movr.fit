import { motion } from 'framer-motion'

const items = Array.from({ length: 24 })

function LogoRow() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '64px',
        flexShrink: 0,
        paddingRight: '64px',
      }}
    >
      {items.map((_, i) => (
        <img
          key={i}
          src="/favicon.svg"
          alt="MOVRFIT"
          style={{
            height: '52px',
            width: 'auto',
            display: 'block',
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  )
}

export default function MarqueeBand() {
  return (
    <section
      style={{
        width: '100%',
        overflow: 'hidden',
        background: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        style={{
          overflow: 'hidden',
          width: '100%',
          padding: '20px 0',
        }}
      >
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-50%' }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
            willChange: 'transform',
          }}
        >
          <LogoRow />
          <LogoRow />
        </motion.div>
      </div>
    </section>
  )
}