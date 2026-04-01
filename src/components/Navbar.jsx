import { useState, useEffect } from 'react'



export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'About US', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: 'https://mfirst.practicenow.us/students/subscriptions?handle=mfirst&theme_id=&uid=mfirst', external: true },
  ]

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '20px 0' : '36px 0',
          background: menuOpen ? 'transparent' : (scrolled ? 'rgba(3,3,3,0.96)' : 'transparent'),
          backdropFilter: menuOpen ? 'none' : (scrolled ? 'blur(20px)' : 'none'),
          WebkitBackdropFilter: menuOpen ? 'none' : (scrolled ? 'blur(20px)' : 'none'),
          borderBottom: menuOpen ? 'none' : (scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none'),
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a
            href="#hero"
            style={{
              display: 'block',
              height: '28px',
              color: 'var(--white)',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
              position: 'relative',
              zIndex: 101, /* Above mobile menu */
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            onClick={() => setMenuOpen(false)}
            aria-label="movr.fit home"
          >
            <img src="/logo.svg" alt="MOVRFIT" style={{ height: '100%', width: 'auto', display: 'block', fill: 'currentColor' }} />
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}
            className="nav-desktop">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="t-small"
                style={{
                  color: 'rgba(255,255,255,0.65)',
                  textDecoration: 'none',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                  fontSize: '15px',
                  fontWeight: 600,
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="btn btn--primary"
              style={{ padding: '12px 32px', fontSize: '14px', letterSpacing: '0.15em' }}
            >
              Book a Free Consultation
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'none',
              flexDirection: 'column',
              gap: menuOpen ? '0px' : '6px',
              padding: '4px',
              position: 'relative',
              zIndex: 101, /* Above mobile menu */
              width: '32px',
              height: '24px',
              justifyContent: 'center',
            }}
          >
            <span style={{
              display: 'block',
              width: '100%',
              height: '2px',
              background: 'var(--white)',
              borderRadius: '1px',
              transition: 'all 0.3s cubic-bezier(0.76, 0, 0.24, 1)',
              transformOrigin: 'center',
              transform: menuOpen ? 'translateY(2px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: '100%',
              height: '2px',
              background: 'var(--white)',
              borderRadius: '1px',
              transition: 'all 0.3s cubic-bezier(0.76, 0, 0.24, 1)',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block',
              width: '70%',
              alignSelf: 'flex-end',
              height: '2px',
              background: 'var(--white)',
              borderRadius: '1px',
              transition: 'all 0.3s cubic-bezier(0.76, 0, 0.24, 1)',
              transformOrigin: 'center',
              transform: menuOpen ? 'translateY(-2px) rotate(-45deg) scaleX(1.42)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* Premium Fullscreen Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(3,3,3,0.98)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          zIndex: 99, /* Underneath navbar elements */
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px',
          padding: 'var(--gutter)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'all 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            onClick={() => setMenuOpen(false)}
            style={{
              color: 'var(--white)',
              textDecoration: 'none',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 10vw, 64px)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.5s cubic-bezier(0.76, 0, 0.24, 1) ${0.1 + i * 0.05}s`,
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#cta"
          className="btn btn--primary"
          style={{
            marginTop: '24px',
            padding: '20px 48px',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: `all 0.5s cubic-bezier(0.76, 0, 0.24, 1) ${0.1 + navLinks.length * 0.05}s`,
          }}
          onClick={() => setMenuOpen(false)}
        >
          Start Moving
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  )
}
