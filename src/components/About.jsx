import './About.css'
import profilePhoto from '../assets/Old Money Style Iman Gadzhi.jfif'

const About = () => {
  return (
    <section className="about section" id="sobre-mi">
      <div className="container about__grid">

        <div className="about__image-wrap">
          <div className="about__image-frame">
            <img
              src={profilePhoto}
              alt="Josema Mealla"
              className="about__photo"
            />
          </div>
          <div className="about__image-accent" />
        </div>

        <div className="about__text">
          <p className="eyebrow">Sobre mí</p>
          <h2 className="section-title">
            Sé exactamente por<br />
            <em>donde estás pasando.</em>
          </h2>
          <div className="about__body">
            <p>
              Durante años trabajé sin una estrategia clara: publicaba contenido,
              asistía a eventos, hablaba con personas… pero los resultados no llegaban.
              Hasta que entendí que el problema no era mi trabajo, sino mi posicionamiento.
            </p>
            <p>
              Cuando ordené mi mensaje, definí mi cliente ideal y construí un sistema de
              atracción, todo cambió. Las oportunidades empezaron a llegar, y los clientes
              correctos empezaron a encontrarme.
            </p>
            <p>
              Hoy acompaño a profesionales y empresarios a hacer lo mismo: construir una
              presencia digital que genere confianza, visibilidad y ventas reales.
            </p>
          </div>
          <a href="#agendar" className="btn-outline about__cta">
            Hablemos de tu proyecto
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}

export default About
