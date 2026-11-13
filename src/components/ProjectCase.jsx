import { useState } from 'react'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { Github } from './BrandIcons.jsx'
import { statusInfo } from '../data/projects.js'

function Block({ title, children }) {
  return (
    <div className="case-block">
      <h4>{title}</h4>
      {children}
    </div>
  )
}

const List = ({ items, no }) => (
  <ul className={`bullets ${no ? 'no' : ''}`}>
    {items.map((i) => <li key={i}>{i}</li>)}
  </ul>
)

export default function ProjectCase({ project: p, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const info = statusInfo[p.status]
  const bodyId = `case-${p.id}`

  return (
    <article className="card case" aria-labelledby={`title-${p.id}`}>
      <div className="case-top">
        <div className="tags">
          <span className={`tag ${p.status === 'prototype' ? 'ok' : 'warn'}`}>{info.label}</span>
          <span className="tag">{p.category}</span>
        </div>
        <h3 id={`title-${p.id}`}>{p.title} <span style={{ fontWeight: 400, color: 'var(--muted)' }}>– {p.subtitle}</span></h3>
        <p className="sub">{p.summary}</p>
        <p className="note" style={{ margin: 0 }}>{p.statusNote}</p>
        <div className="row">
          {p.links.demo && (
            <a className="btn primary sm" href={p.links.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={15} /> Live demo<span className="sr-only"> (opens in new tab)</span>
            </a>
          )}
          {p.links.github && (
            <a className="btn sm" href={p.links.github} target="_blank" rel="noopener noreferrer">
              <Github size={15} /> GitHub repository<span className="sr-only"> (opens in new tab)</span>
            </a>
          )}
          {!p.links.github && <span className="note">No repository yet. Development has not started.</span>}
        </div>
      </div>

      <button
        type="button"
        className="case-toggle"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{open ? 'Hide case study' : 'Read the case study'}</span>
        <ChevronDown size={18} />
      </button>

      {open && (
        <div className="case-body" id={bodyId}>
          {p.problem && <Block title="Problem statement"><p>{p.problem}</p></Block>}
          {p.why && <Block title="Why it matters"><p>{p.why}</p></Block>}
          <Block title="Proposed solution"><p>{p.solution}</p></Block>
          <Block title={p.status === 'planned' ? 'Implementation status' : 'My implementation'}>
            <List items={p.implementation} />
          </Block>
          <Block title={p.status === 'planned' ? 'Proposed features' : 'Features'}>
            <List items={p.features} />
          </Block>
          {p.notImplemented.length > 0 && (
            <div className="callout">
              <h4>Not implemented yet</h4>
              <List items={p.notImplemented} no />
            </div>
          )}
          {p.stack.length > 0 && (
            <Block title={p.status === 'planned' ? 'Proposed technologies' : 'Technologies used'}>
              <div className="tags">{p.stack.map((s) => <span key={s} className="tag">{s}</span>)}</div>
            </Block>
          )}
          <Block title="Screenshots / demo">
            {p.screenshots.length > 0 ? (
              <div className="shots">
                {p.screenshots.map((s) => (
                  <figure key={s.src} className="shot">
                    <img src={s.src} alt={s.alt} loading="lazy" />
                    {s.caption && <figcaption>{s.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            ) : (
              <div className="placeholder-box">
                {p.links.demo
                  ? 'Screenshots to be added.'
                  : 'No screenshots. This project has not been built yet.'}
              </div>
            )}
          </Block>
          {p.learned.length > 0 && <Block title={p.learnedLabel}><List items={p.learned} /></Block>}
        </div>
      )}
    </article>
  )
}
