import { useEffect } from 'react'
import './Schedule.css'

const Schedule = () => {
  const CALENDLY_URL = 'https://calendly.com/josemaria-amealla/llamada-de-asesoria'

  useEffect(() => {
    // Load Calendly widget script
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section className="schedule section" id="agendar">
      <div className="container">
        <div className="schedule__inner">
          <div className="schedule__bg-glow" />

          <div className="schedule__content">
            <p className="eyebrow">Agendá tu llamada</p>
            <h2 className="schedule__title">
              30 minutos que pueden<br />
              <em>cambiar tu negocio.</em>
            </h2>
            <p className="schedule__desc">
              En esta llamada gratuita analizamos tu situación actual, identificamos
              los puntos de palanca clave y te cuento cómo puedo ayudarte a lograr
              tus objetivos. Sin compromiso, sin presión.
            </p>

            <ul className="schedule__benefits">
              <li>
                <span className="schedule__check">✓</span>
                Análisis personalizado de tu marca actual
              </li>
              <li>
                <span className="schedule__check">✓</span>
                Identificación de oportunidades concretas
              </li>
              <li>
                <span className="schedule__check">✓</span>
                Hoja de ruta clara para los próximos 90 días
              </li>
              <li>
                <span className="schedule__check">✓</span>
                100% gratuita, sin compromisos
              </li>
            </ul>

            <p className="schedule__note">
              Cupos limitados por semana. Asegurá el tuyo.
            </p>
          </div>

          <div className="schedule__widget">
            <div
              className="calendly-inline-widget"
              data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=0a0a0f&text_color=e8e6e3&primary_color=c9a96e`}
              style={{ minWidth: '320px', height: '700px', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule

