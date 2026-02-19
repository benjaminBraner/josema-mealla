import './Testimonials.css'

const testimonials = [
  {
    quote:
      '"Antes de trabajar con Josema, publicaba contenido sin dirección. En 60 días tenía un sistema claro, clientes nuevos y por primera vez sentí que mi negocio tenía estructura real."',
    name: 'Valentina Ríos',
    role: 'Coach de vida',
    initial: 'V',
  },
  {
    quote:
      '"Lo que más me sorprendió fue la velocidad. En pocas semanas pasé de no saber qué publicar a tener una agenda llena de consultas. El cambio fue inmediato y sostenido."',
    name: 'Martín Castellano',
    role: 'Consultor financiero',
    initial: 'M',
  },
  {
    quote:
      '"Josema no te da fórmulas genéricas. Construye una estrategia pensada para vos, para tu negocio. Eso marca toda la diferencia. Los resultados hablan solos."',
    name: 'Carolina Ibáñez',
    role: 'Mentora de emprendedores',
    initial: 'C',
  },
]

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonios">
      <div className="container">
        <div className="testimonials__header">
          <p className="eyebrow">Testimonios</p>
          <h2 className="section-title">
            Ellos ya tomaron<br />
            <em>la decisión.</em>
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-card__stars">
                {Array(5).fill(null).map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="var(--accent)" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-card__quote">{t.quote}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.initial}</div>
                <div>
                  <p className="testimonial-card__name">{t.name}</p>
                  <p className="testimonial-card__role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
