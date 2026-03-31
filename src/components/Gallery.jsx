import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.querySelectorAll('.reveal, .reveal--scale')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.05 }
    )
    targets.forEach(t => obs.observe(t))
    return () => obs.disconnect()
  }, [])
  return ref
}

const images = [
  {
    src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    alt: 'Battle rope training',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
    alt: 'Deadlift form',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
    alt: 'Dumbbell workout',
    span: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
    alt: 'Strength training',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop',
    alt: 'Cardio training',
    span: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    alt: 'Flexibility training',
    span: 'tall',
  },
]

export default function Gallery() {
  const ref = useReveal()

  return (
    <section
      id="gallery"
      ref={ref}
      className="section"
      style={{
        background: 'var(--black)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 'clamp(40px, 6vw, 72px)' }}>
          <h2
            className="reveal delay-1 t-display-lg"
            style={{ color: 'var(--white)', lineHeight: 0.92 }}
          >
            WHERE WORK<br />
            <span style={{ color: 'var(--red)' }}>GETS DONE</span>
          </h2>
        </div>

        {/* Mosaic grid */}
        <div
          className="gallery-mosaic"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'auto',
            gap: '8px',
          }}
        >
          {/* Image 1 — tall left */}
          <div
            className="reveal--scale delay-1"
            style={{
              gridColumn: '1 / 5',
              gridRow: '1 / 3',
              borderRadius: '3px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <GalleryImg src={images[0].src} alt={images[0].alt} />
          </div>

          {/* Image 2 — top middle */}
          <div
            className="reveal--scale delay-2"
            style={{
              gridColumn: '5 / 9',
              gridRow: '1 / 2',
              borderRadius: '3px',
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '16/10',
            }}
          >
            <GalleryImg src={images[1].src} alt={images[1].alt} />
          </div>

          {/* Image 3 — top right tall */}
          <div
            className="reveal--scale delay-1"
            style={{
              gridColumn: '9 / 13',
              gridRow: '1 / 3',
              borderRadius: '3px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <GalleryImg src={images[2].src} alt={images[2].alt} pos="center" />
          </div>

          {/* Image 4 — middle center */}
          <div
            className="reveal--scale delay-3"
            style={{
              gridColumn: '5 / 9',
              gridRow: '2 / 3',
              borderRadius: '3px',
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '16/10',
            }}
          >
            <GalleryImg src={images[3].src} alt={images[3].alt} />
          </div>

          {/* Image 5 — bottom left wide */}
          <div
            className="reveal--scale delay-2"
            style={{
              gridColumn: '1 / 7',
              gridRow: '3 / 4',
              borderRadius: '3px',
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '16/7',
            }}
          >
            <GalleryImg src={images[4].src} alt={images[4].alt} />
          </div>

          {/* Image 6 — bottom right */}
          <div
            className="reveal--scale delay-3"
            style={{
              gridColumn: '7 / 13',
              gridRow: '3 / 4',
              borderRadius: '3px',
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '16/7',
            }}
          >
            <GalleryImg src={images[5].src} alt={images[5].alt} pos="top" />
          </div>
        </div>

        {/* Caption */}
        <p
          className="reveal delay-4"
          style={{
            textAlign: 'center',
            marginTop: '48px',
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          Real training. Real results. Real people.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-mosaic {
            grid-template-columns: 1fr 1fr !important;
          }
          .gallery-mosaic > div {
            grid-column: auto !important;
            grid-row: auto !important;
            aspect-ratio: 1 !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-mosaic {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function GalleryImg({ src, alt, pos = 'center' }) {
  return (
    <>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: pos,
          display: 'block',
          filter: 'grayscale(20%) contrast(1.05)',
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease',
          minHeight: '200px',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.04)'
          e.currentTarget.style.filter = 'grayscale(0%) contrast(1.1)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.filter = 'grayscale(20%) contrast(1.05)'
        }}
      />
      {/* Hover overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, transparent 60%, rgba(8,8,8,0.5))',
        pointerEvents: 'none',
      }} />
    </>
  )
}
