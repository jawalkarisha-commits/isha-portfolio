import { useEffect, useRef } from 'react'

// A small, quiet "data network" drawn behind the hero: nodes drifting slowly,
// linked when they come close. Pauses when off-screen, when the tab is hidden,
// with "Motion off", or with prefers-reduced-motion (then a still frame is drawn).
export default function NetworkCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const cv = ref.current
    const ctx = cv.getContext('2d')
    const root = document.documentElement
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    let w = 0
    let h = 0
    let nodes = []
    let raf = 0
    let running = false
    let visible = true
    let maxD = 150

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d = Math.hypot(dx, dy)
          if (d < maxD) {
            ctx.strokeStyle = `rgba(167,139,250,${(1 - d / maxD) * 0.32})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }
      ctx.fillStyle = 'rgba(196,181,253,0.75)'
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const resize = () => {
      const r = cv.parentElement.getBoundingClientRect()
      w = r.width
      h = r.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      cv.width = w * dpr
      cv.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      maxD = w < 700 ? 105 : 150
      const count = w < 700 ? 20 : 40
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: 1 + Math.random() * 1.6,
      }))
      draw()
    }

    const step = () => {
      if (!running) return
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0) n.x = w
        else if (n.x > w) n.x = 0
        if (n.y < 0) n.y = h
        else if (n.y > h) n.y = 0
      }
      draw()
      raf = requestAnimationFrame(step)
    }

    const sync = () => {
      const should = visible && !document.hidden && !reduce.matches && !root.classList.contains('calm')
      if (should && !running) {
        running = true
        raf = requestAnimationFrame(step)
      } else if (!should && running) {
        running = false
        cancelAnimationFrame(raf)
        draw()
      }
    }

    resize()
    sync()

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; sync() })
    io.observe(cv)
    const mo = new MutationObserver(sync)
    mo.observe(root, { attributes: true, attributeFilter: ['class'] })
    document.addEventListener('visibilitychange', sync)
    reduce.addEventListener('change', sync)
    window.addEventListener('resize', resize)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      io.disconnect()
      mo.disconnect()
      document.removeEventListener('visibilitychange', sync)
      reduce.removeEventListener('change', sync)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="hero-network" aria-hidden="true" />
}
