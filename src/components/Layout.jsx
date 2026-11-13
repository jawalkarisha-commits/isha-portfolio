import { useEffect, useState } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons.jsx'
import { nav, profile, links } from '../data/profile.js'
import Effects from './Effects.jsx'

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [calm, setCalm] = useState(false)
  const { pathname } = useLocation()

  // Close mobile menu and jump to top on every page change.
  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  // "Motion off" toggle: turns animations off for people who prefer it.
  useEffect(() => {
    document.documentElement.classList.toggle('calm', calm)
  }, [calm])

  return (
    <>
      <Effects />
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="Isha Jawalkar, home">
            <span className="brand-mark">IJ</span>
            <span>Isha Jawalkar</span>
          </Link>

          <nav id="primary-nav" className={`nav ${open ? 'open' : ''}`} aria-label="Primary">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end} className={({ isActive }) => (isActive ? 'active' : '')}>
                {n.label}
              </NavLink>
            ))}
            <button
              type="button"
              className="btn sm motion-toggle"
              aria-pressed={calm}
              onClick={() => setCalm((c) => !c)}
            >
              Motion {calm ? 'off' : 'on'}
            </button>
          </nav>

          <button
            type="button"
            className="menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="main" key={pathname} className="page">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <strong>{profile.name}</strong>
              <div className="note">{profile.headline}</div>
            </div>
            <div className="footer-links">
              <a className="icon-link" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)"><Github size={18} /></a>
              <a className="icon-link" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)"><Linkedin size={18} /></a>
              <a className="icon-link" href={links.gmailCompose} target="_blank" rel="noopener noreferrer" aria-label="Email Isha in Gmail (opens in new tab)" title={links.email}><Mail size={18} /></a>
            </div>
          </div>
          <p className="legal">
            © {new Date().getFullYear()} {profile.name}. {profile.tagline}
          </p>
        </div>
      </footer>
    </>
  )
}
