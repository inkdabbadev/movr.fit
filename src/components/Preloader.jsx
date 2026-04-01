import { motion } from 'framer-motion'

export default function Preloader() {
  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'var(--black)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <motion.img
        src="/favicon.svg"
        alt="MOVRFIT"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: [0, 1, 1, 1],
          scale: [0.6, 1, 1.08, 1],
        }}
        transition={{ duration: 1.2, times: [0, 0.4, 0.7, 1], ease: 'easeOut' }}
        style={{ width: '72px', height: 'auto' }}
      />
    </motion.div>
  )
}
