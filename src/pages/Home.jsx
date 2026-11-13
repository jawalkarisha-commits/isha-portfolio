import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import { Github, Linkedin } from '../components/BrandIcons.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import NetworkCanvas from '../components/NetworkCanvas.jsx'
import { profile, links } from '../data/profile.js'

export default function Home() {
  usePageMeta('Aspiring Data Engineer', profile.heroLead)

  return (
    <>
      <section className="hero">
        <NetworkCanvas />
        <div className="container hero-grid">
          <div>
            <div className="eyebrow headline-chip">{profile.headline}</div>
            <h1>
              Hi, I'm <em>Isha Jawalkar.</em>
            </h1>
            <p className="lead">{profile.heroLead}</p>
            <p className="support">{profile.heroSupport}</p>
            <div className="row">
              <Link to="/projects" className="btn primary">Explore Projects <ArrowRight size={16} /></Link>
              <Link to="/about" className="btn">View My Journey</Link>
              <a className="icon-link" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)"><Github size={18} /></a>
              <a className="icon-link" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)"><Linkedin size={18} /></a>
              <a className="icon-link" href={links.gmailCompose} target="_blank" rel="noopener noreferrer" aria-label={`Email ${links.email} in Gmail (opens in new tab)`} title={links.email}><Mail size={18} /></a>
            </div>
          </div>
          <div className="avatar">
            {profile.photo ? (
              <img src={profile.photo} alt="Isha Jawalkar" />
            ) : (
              <>
                <span className="mono-mark" aria-hidden="true">IJ</span>
                <span className="hint">photo placeholder</span>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container big-cta">
          <p className="eyebrow">Open to meaningful conversations</p>
          <h2>Something great starts with <em>a hello.</em></h2>
          <p style={{ color: 'var(--muted)' }}>{profile.tagline}</p>
          <Link to="/connect" className="btn primary">Let's connect <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  )
}
