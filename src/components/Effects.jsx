import { useEffect, useRef } from 'react'

// Decorative effects layer. It adds no content:
//  - animated aurora + dot-grid background
//  - scroll progress bar and a header that firms up after scrolling
//  - a soft glow that follows the mouse (desktop only)
//  - a spotlight on cards that follows the pointer
// All of it switches off with the "Motion off" button or prefers-reduced-motion (see effects.css).
export default function Effects() {
  const bar = useRef(null)
  const glow = useRef(null)

  useEffect(() => {
    const root = document.documentElement
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const max = root.scrollHeight - window.innerHeight
        const p = max > 0 ? Math.min(1, window.scrollY / max) : 0
        if (bar.current) bar.current.style.transform = `scaleX(${p})`
        document.querySelector('.site-header')?.classList.toggle('scrolled', window.scrollY > 12)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    let raf = 0
    let x = 0
    let y = 0
    const onMove = (e) => {
      const card = e.target.closest?.('.card')
      if (card) {
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${e.clientX - r.left}px`)
        card.style.setProperty('--my', `${e.clientY - r.top}px`)
      }
      if (glow.current) {
        x = e.clientX
        y = e.clientY
        if (!raf) {
          raf = requestAnimationFrame(() => {
            glow.current.style.transform = `translate(${x - 250}px, ${y - 250}px)`
            raf = 0
          })
        }
      }
    }
    if (finePointer) window.addEventListener('pointermove', onMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><span ref={bar} /></div>
      <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
      <div className="cursor-glow" ref={glow} aria-hidden="true" />
    </>
  )
}
