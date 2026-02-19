import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: '¿A quién está dirigido este servicio?',
    a: 'A profesionales, consultores, coaches y empresarios que quieren construir o escalar su marca personal con una estrategia clara. Si ya tenés experiencia y resultados, pero tu presencia digital no lo refleja, esto es para vos.',
  },
  {
    q: '¿Cuánto tiempo lleva ver resultados?',
    a: 'La mayoría de mis clientes notan cambios concretos en las primeras 4–8 semanas: más consultas, mayor visibilidad y mensajes de personas calificadas. Los resultados sostenidos se consolidan en 3 meses.',
  },
  {
    q: '¿Necesito tener muchos seguidores para empezar?',
    a: 'Para nada. No trabajo con métricas de vanidad. Lo que importa es el mensaje, el posicionamiento y el sistema. Con una audiencia pequeña pero bien segmentada se pueden generar ventas reales.',
  },
  {
    q: '¿Cómo es el proceso de trabajo?',
    a: 'Arrancamos con una llamada de diagnóstico gratuita. Si hay match, diseñamos una estrategia personalizada y trabajamos de forma cercana con revisiones, ajustes y soporte continuo.',
  },
  {
    q: '¿La llamada inicial tiene algún costo?',
    a: 'No. La llamada es 100% gratuita y sin compromiso. Su único objetivo es entender tu situación y ver si puedo ayudarte.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="faq section" id="faq">
      <div className="container faq__layout">
        <div className="faq__header">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="section-title">
            Respondemos tus<br />
            <em>dudas más comunes.</em>
          </h2>
        </div>

        <div className="faq__list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
            >
              <button className="faq__question" onClick={() => toggle(i)}>
                <span>{faq.q}</span>
                <svg
                  className="faq__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="faq__answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
