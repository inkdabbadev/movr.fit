import { motion } from 'framer-motion'

const MMark = () => (
  <img src="/favicon.svg" alt="MOVRFIT" style={{ height: '42px', width: 'auto', display: 'block', objectFit: 'contain' }} />
)

// Separator dot
const Dot = () => (
  <span style={{
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'rgba(201, 58, 28, 0.33)',
    display: 'inline-block',
    flexShrink: 0,
  }} />
)

const BandItem = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    flexShrink: 0,
  }}>
    {Array.from({ length: 40 }).map((_, i) => (
      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '32px', flexShrink: 0 }}>
        <MMark />
        <Dot />
      </div>
    ))}
  </div>
)

export default function MarqueeBand() {
  return (
    <div
      style={{
        background: '#080808ff',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(0, 0, 0, 0)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '20px 0',
          overflow: 'hidden',
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
            willChange: 'transform',
          }}
        >
          <BandItem />
          <BandItem />
        </motion.div>
      </div>
    </div>
  )
}
