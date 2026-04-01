import { motion } from 'framer-motion'

const navCols = [
  {
    heading: 'Navigate',
    links: [
      { label: 'About US', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Book a Free Consultation', href: '#cta' },
    ],
  },
  {
    heading: 'Programs',
    links: [
      { label: 'Personal Training', href: '#services' },
      { label: 'Group Training', href: '#services' },
      { label: 'Custom Programming', href: '#services' },
      { label: 'View Pricing', href: 'https://mfirst.practicenow.us/students/subscriptions?handle=mfirst&theme_id=&uid=mfirst', external: true },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Instagram', href: '#' },
      { label: 'WhatsApp', href: 'https://wa.me/919791063135', external: true },
      { label: 'Call Us', href: 'tel:+919791063135' },
      { label: 'Email Us', href: 'mailto:coach@movr.fit' },
    ],
  },
]

const ease = [0.16, 1, 0.3, 1]
const vp = { once: true, margin: '-40px' }

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface-1)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container" style={{ paddingTop: '72px', paddingBottom: '48px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 'clamp(32px, 5vw, 64px)' }}
          className="footer-grid"
        >
          {/* Brand column — slides from left */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
            }}
          >
            <a href="#hero" style={{ display: 'inline-block', marginBottom: '24px', textDecoration: 'none' }}>
              <img src="/logo.svg" alt="movr.fit" height="22" />
            </a>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: '320px', marginBottom: '8px' }}>
              Online fitness coaching built on three pillars: strength, consistency, and energy. Make feeling good your baseline.
            </p>
            <br />
            {/* Social icons — pop in with stagger */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
              style={{ display: 'flex', gap: '12px' }}
            >
              {[
                { label: 'Instagram', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg> },
                { label: 'YouTube', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.5a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="currentColor" stroke="none" /></svg> },
                { label: 'WhatsApp', href: 'https://wa.me/919791063135', external: true, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg> },
              ].map(s => (
                <motion.a
                  key={s.label}
                  href={s.href || '#'}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  variants={{
                    hidden: { scale: 0.5, opacity: 0 },
                    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 18 } },
                  }}
                  whileHover={{ scale: 1.15, backgroundColor: 'var(--red)', borderColor: 'var(--red)', color: 'var(--white)' }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'var(--surface-3)', border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 'var(--radius)', color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Nav columns — stagger from below */}
          {navCols.map((col, ci) => (
            <motion.div
              key={col.heading}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
            >
              <div className="t-small" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '24px' }}>
                {col.heading}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {col.links.map((link, li) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={vp}
                    transition={{ duration: 0.4, delay: 0.1 + li * 0.06, ease }}
                    whileHover={{ x: 6, color: 'var(--white)' }}
                    style={{
                      fontSize: '16px', fontWeight: 500, color: 'rgba(255,255,255,0.55)',
                      textDecoration: 'none', display: 'inline-block',
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={vp}
        transition={{ duration: 0.8, ease }}
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="container" style={{
          paddingTop: '20px', paddingBottom: '20px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '12px',
        }}>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} movr.fit — All rights reserved
          </span>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
