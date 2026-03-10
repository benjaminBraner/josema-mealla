import './Hero.css'

const YOUTUBE_VIDEO_ID = '_67MWD7XW9Q'
const YOUTUBE_PARAMS = 'si=IuTN9r5BuC2vLZxR&controls=0'

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg-grid" />
      <div className="hero__bg-glow" />

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Disponible para nuevos proyectos
        </div>

        <h1 className="hero__headline">
          Escala tu negocio y vende
          <br />
          <em>todos los días o no pagas</em>
        </h1>

        <p className="hero__subheadline">
          Si vendes tu mentoría o curso te ayudo a aumentar tus ventas
          atrayendo y cerrando clientes calificados con 4 claves.
        </p>

        {/* <div className="hero__video-wrap">
          <div className="hero__video-player">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?${YOUTUBE_PARAMS}`}
              title="Josema Mealla — Cómo funciona el método"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="hero__video-glow" />
        </div> */}

        <div className="hero__actions">
          <a href="#agendar" className="btn-primary">
            Agendar llamada gratuita
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">+10</span>
            <span className="hero__stat-label">clientes transformados</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">3x</span>
            <span className="hero__stat-label">crecimiento promedio</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">3 años</span>
            <span className="hero__stat-label">de experiencia</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span />
      </div>
    </section>
  )
}

export default Hero

