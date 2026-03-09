import './Method.css'

const steps = [
  {
    number: '01',
    title: 'Optimización Estratégica™️',
    subtitle: 'Definimos tu mensaje, tu oferta y tu posicionamiento para que todo el sistema funcione.',
    description:
      'Analizamos tu negocio, tu cliente ideal y tus puntos de fuga para detectar qué está frenando tu crecimiento. Ajustamos tus ángulos de venta y tu estructura para que tengas una base sólida antes de escalar.',
    highlight: 'Acá pasás de improvisar… a tener claridad total sobre qué vender, a quién y cómo comunicarlo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Contenido & Ads™️',
    subtitle: 'Creamos un sistema de atracción que genera volumen constante de personas calificadas.',
    description:
      'Diseñamos ángulos estratégicos, guiones optimizados y campañas pagas que potencian lo que ya funciona. Tu contenido deja de ser solo presencia y empieza a tener intención comercial.',
    highlight: 'Atraés, educás y abrís conversaciones de venta todos los días.',
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
    title: 'Automatizaciones Inteligentes™️',
    subtitle: 'Implementamos un sistema con ManyChat que trabaja 24/7.',
    description:
      'Construimos flujos automatizados, filtros y seguimientos que ordenan y califican tus leads antes de que lleguen a tu equipo.',
    highlight: 'Dejás de depender del azar o de respuestas manuales… y empezás a tener un proceso predecible.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z" />
        <path d="M9 22v-2M15 22v-2" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Estructura de Venta™️',
    subtitle: 'Convertimos el volumen en ventas reales.',
    description:
      'Optimizamos tu oferta, tu pricing y tu funnel de llamadas, integrando inbound + outbound para maximizar cierres.',
    highlight: 'Acá el sistema se completa: más leads, más llamadas calificadas y más facturación constante.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
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
            4 claves para escalar<br />
            <em>tu negocio digital.</em>
          </h2>
          <p className="section-subtitle">
            Un sistema probado en cada etapa con un propósito claro y un resultado medible.
          </p>
        </div>

        <div className="method__steps">
          {steps.map((step, index) => (
            <div className="method__step" key={step.number} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="method__step-icon">{step.icon}</div>
              <div className="method__step-body">
                <span className="method__step-number">{step.number}</span>
                <h3 className="method__step-title">{step.title}</h3>
                <p className="method__step-subtitle">{step.subtitle}</p>
                <p className="method__step-desc">{step.description}</p>
                <p className="method__step-highlight">{step.highlight}</p>
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

