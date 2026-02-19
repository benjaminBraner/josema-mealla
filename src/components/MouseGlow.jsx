import { useEffect, useRef } from 'react'
import './MouseGlow.css'

const MouseGlow = () => {
  const ref = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div ref={ref} className="mouse-glow" aria-hidden="true" />
}

export default MouseGlow
