import { useEffect, useRef, useState } from 'react'

// Fades content in once as it scrolls into view. Content stays visible if
// IntersectionObserver is unavailable.
export default function Reveal({ children, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    if (seen || !ref.current) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.08 },
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [seen])

  return (
    <Tag ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
