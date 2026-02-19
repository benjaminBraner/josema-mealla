import './Method.css'

const steps = [
  {
    number: '01',
    title: 'Claridad de Marca',
    description:
      'Definimos tu mensaje central, tu cliente ideal y el diferencial que te hace único. Sin claridad, no hay estrategia posible.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Estrategia de Contenido',
    description:
      'Diseñamos un plan de contenido que educa, conecta y convierte. Tu presencia digital empieza a trabajar para vos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Autoridad Visual',
    description:
      'Tu imagen importa. Construimos una presencia visual consistente y profesional que genera confianza desde el primer contacto.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Sistema de Conversión',
    description:
      'Transformamos seguidores en clientes con un sistema validado de atracción y cierre. Más llamadas, más ventas, menos esfuerzo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Escalabilidad Real',
    description:
      'Medimos, ajustamos y optimizamos continuamente para que el crecimiento sea sostenido y predecible mes a mes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
]

const Method = () => {
  return (
    <section className="method section" id="metodo">
      <div className="container">
        <div className="method__header">
          <p className="eyebrow">El Método</p>
          <h2 className="section-title">
            Un sistema probado para<br />
            <em>escalar tu marca.</em>
          </h2>
          <p className="section-subtitle">
            No improvisamos. Cada etapa tiene un propósito claro y un resultado medible.
          </p>
        </div>

        <div className="method__steps">
          {steps.map((step, index) => (
            <div className="method__step" key={step.number} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="method__step-icon">{step.icon}</div>
              <div className="method__step-body">
                <span className="method__step-number">{step.number}</span>
                <h3 className="method__step-title">{step.title}</h3>
                <p className="method__step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="method__cta">
          <a href="#agendar" className="btn-primary">
            Quiero aplicar este método
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Method
