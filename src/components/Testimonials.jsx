import './Testimonials.css'

const testimonials = [
  {
    quote:
      '"Empezamos prácticamente desde cero y tuvimos resultados en las primeras semanas. Hay cosas que nosotros como emprendedores o empresarios no sabemos pero profesionales como Jose Maria nos dan esa claridad."',
    name: 'Yosselin Rivero',
    initial: 'Y',
  },
  {
    quote:
      '"Estoy muy contenta porque lo que se planteó al comienzo se cumplió, como ser las metas de ventas y las metas de crecimiento con la estrategia de contenido."',
    name: 'Gisela Soliz',
    initial: 'G',
  },
  {
    quote:
      '"Algo que favorece al trabajar con Jose Maria es que se vuelve un amigo más que un socio en este proceso para crecer el negocio digital, así que estoy feliz por los resultados."',
    name: 'Randy Aguanta',
    initial: 'R',
  },
  {
    quote:
      '"Los recomendaría totalmente si lo que quieren es aumentar sus ventas y promocionar su marca de la mano de profesionales como Jose Maria."',
    name: 'Arnold Alexander',
    initial: 'A',
  },
  {
    quote:
      '"Muchas personas piensan que solo te van a sacar dinero pero les digo que confíen porque como fue mi caso después van a conseguir resultados, así que los recomiendo."',
    name: 'Hugo Colque',
    initial: 'H',
  },
  {
    quote:
      '"Logramos llegar a un público de clientes que no habíamos llegado antes y nos iba a costar mucho tiempo, pero gracias al contenido y los ads pudimos ver resultados en las primeras semanas."',
    name: 'Donny Vargas',
    initial: 'D',
  },
]

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonios">
      <div className="container">
        <div className="testimonials__header">
          <p className="eyebrow">Casos de éxito</p>
          <h2 className="section-title">
            Personas que han trabajado conmigo<br />
            <em>y cuentan su experiencia.</em>
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-card__video-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--accent)" stroke="none" opacity="0.3">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span>Video próximamente</span>
              </div>
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

