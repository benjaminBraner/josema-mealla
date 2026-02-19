import './Schedule.css'

const Schedule = () => {
  const CALENDLY_URL = 'https://calendly.com/josemamealla'

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

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary schedule__btn"
            >
              Reservar mi lugar ahora
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </a>

            <p className="schedule__note">
              Cupos limitados por semana. Asegurá el tuyo.
            </p>
          </div>

          <div className="schedule__visual">
            <div className="schedule__card">
              <div className="schedule__card-header">
                <div className="schedule__card-dot schedule__card-dot--red" />
                <div className="schedule__card-dot schedule__card-dot--yellow" />
                <div className="schedule__card-dot schedule__card-dot--green" />
                <span>Llamada estratégica gratuita</span>
              </div>
              <div className="schedule__card-body">
                <div className="schedule__card-row">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Duración: 30 minutos</span>
                </div>
                <div className="schedule__card-row">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.91 9.11 19.79 19.79 0 0 1 1.87 6.47a2 2 0 0 1 2-2.18H7a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81A2 2 0 0 1 9.28 11l-1.45.72A16 16 0 0 0 13 17.17l.72-1.44a2 2 0 0 1 2.47-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 18h-.02z" />
                  </svg>
                  <span>Modalidad: videollamada</span>
                </div>
                <div className="schedule__card-row">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>Sin compromiso</span>
                </div>
                <div className="schedule__card-divider" />
                <div className="schedule__card-price">
                  <span className="schedule__card-price-label">Costo</span>
                  <span className="schedule__card-price-value">Gratuita</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
