import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'

export default function NotFound() {
  usePageMeta('Page not found')
  return (
    <section className="container big-cta">
      <p className="eyebrow">404</p>
      <h2>This page <em>doesn't exist.</em></h2>
      <Link to="/" className="btn primary">Back to home</Link>
    </section>
  )
}
