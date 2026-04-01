import { motion } from 'framer-motion'

const BandItem = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '64px', flexShrink: 0 }}>
    {Array.from({ length: 40 }).map((_, i) => (
      <img key={i} src="/favicon.svg" alt="MOVRFIT" style={{ height: '52px', width: 'auto', display: 'block', flexShrink: 0 }} />
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
