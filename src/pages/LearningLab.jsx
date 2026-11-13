import { useState } from 'react'
import usePageMeta from '../hooks/usePageMeta.js'
import { skillGroups, currentLearning, futureInterests } from '../data/learning.js'
import Icon from '../components/Icon.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Reveal from '../components/Reveal.jsx'

export default function LearningLab() {
  usePageMeta('Learning Lab', 'Technical toolkit, current learning and future interests of Isha Jawalkar.')
  const [note, setNote] = useState({})        // per-group selected skill
  const [openFuture, setOpenFuture] = useState(null)

  return (
    <>
      <section className="container page-title">
        <div className="eyebrow">Learning lab</div>
        <h1>My toolkit, and where I'm <em>heading.</em></h1>
        <p>Skills are listed honestly, with no scores or percentages. Future interests are not skills I claim to have.</p>
      </section>

      <section className="section tight">
        <div className="container">
          <Reveal>
            <SectionHead num="01" label="Toolkit" title={<>Technical <em>skills</em></>}>
              <p>Select a skill to read a short note about it.</p>
            </SectionHead>
            <div className="grid two">
              {skillGroups.map((g) => {
                const sel = g.skills.find((s) => s.name === note[g.id])
                return (
                  <div className="card skill-group" key={g.id}>
                    <h3><Icon name={g.icon} /> {g.title}</h3>
                    <div className="skill-chips">
                      {g.skills.map((s) => (
                        <button
                          type="button"
                          key={s.name}
                          className="chip"
                          aria-expanded={note[g.id] === s.name}
                          onClick={() => setNote((n) => ({ ...n, [g.id]: n[g.id] === s.name ? null : s.name }))}
                        >
                          {s.name}
                          {s.learning && <span className="learn">learning</span>}
                        </button>
                      ))}
                    </div>
                    <p className="chip-note" aria-live="polite">{sel ? sel.note : ''}</p>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <Reveal>
            <SectionHead num="02" label="Currently learning & exploring" title={<>The <em>roadmap</em></>}>
              <p>The left column is what I am working on now. The right column is what I want to explore next.</p>
            </SectionHead>
            <div className="roadmap">
              <div className="road-col now">
                <h3><span className="dot" aria-hidden="true" /> Learning now</h3>
                <ul className="road-list">
                  {currentLearning.map((c) => (
                    <li className="road-item" key={c.name}><strong>{c.name}</strong><span>{c.note}</span></li>
                  ))}
                </ul>
              </div>
              <div className="road-col next">
                <h3><span className="dot" aria-hidden="true" /> Future interests</h3>
                <p className="note" style={{ margin: 0 }}>Exploring next. Not yet skills.</p>
                <ul className="road-list">
                  {futureInterests.map((f) => (
                    <li key={f.name} style={{ listStyle: 'none' }}>
                      <button
                        type="button"
                        className="road-item"
                        aria-expanded={openFuture === f.name}
                        onClick={() => setOpenFuture(openFuture === f.name ? null : f.name)}
                      >
                        <strong>{f.name}</strong>
                        <span>{openFuture === f.name ? 'Tap to close' : 'Tap to read more'}</span>
                        {openFuture === f.name && <span className="more">{f.text}</span>}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
