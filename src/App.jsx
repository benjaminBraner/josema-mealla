import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Method from './components/Method'
import Testimonials from './components/Testimonials'
import Schedule from './components/Schedule'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import MouseGlow from './components/MouseGlow'

function App() {
  return (
    <>
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Method />
        <Testimonials />
        <Schedule />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
