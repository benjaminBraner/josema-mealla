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
            Soy Jose Maria Mealla.<br />
            <em className="about__subtitle">Y sé exactamente lo que está pasando en tu negocio.</em>
          </h2>
          <div className="about__body">
            <p>
              Durante mucho tiempo vi a coaches e infoproductores crear más contenido,
              lanzar más ofertas y hasta mejorar sus mentorías… pero seguir con ventas
              inestables. No era falta de talento. No era falta de conocimiento.
              Era falta de sistema.
            </p>
            <p>
              El problema no está en tu curso. Está en que no tenés una estructura
              clara que atraiga volumen, lo filtre y lo convierta de forma predecible.
            </p>
            <p>
              Cuando entendí que el crecimiento no depende de "hacer más", sino de
              optimizar ángulos, construir embudos y automatizar procesos, todo cambió.
              Las ventas dejaron de ser suerte y empezaron a ser números.
            </p>
            <p>
              Hoy mi enfoque está 100% en ayudar a infoproductores y coaches que ya
              facturan, pero quieren escalar en serio. Creamos sistemas con contenido
              estratégico, ads, automatizaciones y estructuras de venta que convierten
              audiencia en clientes.
            </p>
            <p>
              Porque escalar no es trabajar más.
              <br /><strong>Es tener un sistema que venda por vos.</strong>
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
