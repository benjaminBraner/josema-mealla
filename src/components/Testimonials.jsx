import { useState, useRef } from 'react'
import './Testimonials.css'

const arnoldVideo = new URL('../assets/Arnold .mp4', import.meta.url).href
const donyVideo = new URL('../assets/Dony testimonio .mp4', import.meta.url).href
const giselaVideo = new URL('../assets/Gisela Soliz .MP4', import.meta.url).href
const hugoVideo = new URL('../assets/Hugo testimonio .mp4', import.meta.url).href
const randyVideo = new URL('../assets/Randy aguanta .MP4', import.meta.url).href
const yoselinVideo = new URL('../assets/Yoselin Rivero .MP4', import.meta.url).href

const testimonials = [
  {
    quote:
      '"Empezamos prácticamente desde cero y tuvimos resultados en las primeras semanas. Hay cosas que nosotros como emprendedores o empresarios no sabemos pero profesionales como Jose Maria nos dan esa claridad."',
    name: 'Yosselin Rivero',
    initial: 'Y',
    video: yoselinVideo,
  },
  {
    quote:
      '"Estoy muy contenta porque lo que se planteó al comienzo se cumplió, como ser las metas de ventas y las metas de crecimiento con la estrategia de contenido."',
    name: 'Gisela Soliz',
    initial: 'G',
    video: giselaVideo,
  },
  {
    quote:
      '"Algo que favorece al trabajar con Jose Maria es que se vuelve un amigo más que un socio en este proceso para crecer el negocio digital, así que estoy feliz por los resultados."',
    name: 'Randy Aguanta',
    initial: 'R',
    video: randyVideo,
  },
  {
    quote:
      '"Los recomendaría totalmente si lo que quieren es aumentar sus ventas y promocionar su marca de la mano de profesionales como Jose Maria."',
    name: 'Arnold Alexander',
    initial: 'A',
    video: arnoldVideo,
  },
  {
    quote:
      '"Muchas personas piensan que solo te van a sacar dinero pero les digo que confíen porque como fue mi caso después van a conseguir resultados, así que los recomiendo."',
    name: 'Hugo Colque',
    initial: 'H',
    video: hugoVideo,
  },
  {
    quote:
      '"Logramos llegar a un público de clientes que no habíamos llegado antes y nos iba a costar mucho tiempo, pero gracias al contenido y los ads pudimos ver resultados en las primeras semanas."',
    name: 'Donny Vargas',
    initial: 'D',
    video: donyVideo,
  },
]

const PlayIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="24" fill="rgba(91, 159, 239, 0.9)" />
    <polygon points="19,15 35,24 19,33" fill="#fff" />
  </svg>
)

const PauseIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="24" fill="rgba(91, 159, 239, 0.9)" />
    <rect x="17" y="15" width="5" height="18" rx="1" fill="#fff" />
    <rect x="26" y="15" width="5" height="18" rx="1" fill="#fff" />
  </svg>
)

const QuoteIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
)

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent)" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const TestimonialCard = ({ testimonial, index }) => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
  }

  return (
    <div
      className="testimonial-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Video */}
      <div className="testimonial-card__video" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={testimonial.video}
          preload="metadata"
          playsInline
          onEnded={handleVideoEnd}
          className="testimonial-card__video-el"
        />
        <div className={`testimonial-card__play-overlay ${isPlaying ? 'testimonial-card__play-overlay--hidden' : ''}`}>
          <PlayIcon />
        </div>
        {isPlaying && (
          <div className="testimonial-card__pause-overlay">
            <PauseIcon />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="testimonial-card__body">
        <div className="testimonial-card__stars">
          {Array(5).fill(null).map((_, s) => (
            <StarIcon key={s} />
          ))}
        </div>

        <div className="testimonial-card__quote-wrap">
          <QuoteIcon />
          <p className="testimonial-card__quote">{testimonial.quote}</p>
        </div>

        <div className="testimonial-card__author">
          <div className="testimonial-card__avatar">{testimonial.initial}</div>
          <div>
            <p className="testimonial-card__name">{testimonial.name}</p>
            <p className="testimonial-card__role">Cliente</p>
          </div>
        </div>
      </div>
    </div>
  )
}

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
          <p className="section-subtitle">
            Escucha directamente de quienes confiaron en el proceso y obtuvieron resultados reales.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
