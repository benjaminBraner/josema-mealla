import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">Josema Mealla</span>
          <p className="footer__tagline">Construyendo marcas que venden.</p>
        </div>

        <nav className="footer__nav">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#metodo">Método</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#faq">FAQ</a>
          <a href="#agendar">Agendar llamada</a>
        </nav>

        <div className="footer__bottom">
          <p>© {year} Josema Mealla. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
