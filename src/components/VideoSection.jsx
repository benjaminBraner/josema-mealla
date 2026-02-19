import './VideoSection.css'

// 🎯 Reemplazá este ID con el video de YouTube de Josema
const YOUTUBE_VIDEO_ID = '_67MWD7XW9Q'
const YOUTUBE_PARAMS = 'si=IuTN9r5BuC2vLZxR&controls=0'

const VideoSection = () => {
  return (
    <section className="video-section section" id="video">
      <div className="container">
        <div className="video-section__header">
          <div className="video-section__stars-pill">
            <div className="video-section__stars">
              {Array(5).fill(null).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <div className="video-section__stars-text">
              <span className="video-section__stars-number">+50 marcas</span>
              <span className="video-section__stars-label">potenciadas con resultados reales</span>
            </div>
          </div>
          <p className="eyebrow">Conocé el método</p>
          <h2 className="section-title">
            En 2 minutos entendés<br />
            <span className="text-accent">exactamente cómo trabajo.</span>
          </h2>
          <p className="section-subtitle">
            Un video rápido para que veas el enfoque, los resultados y decidas con claridad si esto es para vos.
          </p>
        </div>

        <div className="video-section__player-wrap">
          <div className="video-section__player">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?${YOUTUBE_PARAMS}`}
              title="Josema Mealla — Cómo funciona el método"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="video-section__glow" />
        </div>

        <div className="video-section__cta">
          <p className="video-section__cta-text">¿Tiene sentido para tu negocio?</p>
          <a href="#agendar" className="btn-primary">
            Agendar llamada gratuita
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
