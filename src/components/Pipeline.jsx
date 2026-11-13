import { useEffect, useState } from 'react'
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'
import Icon from './Icon.jsx'
import { pipelineStages, pipelineIntro } from '../data/learning.js'

export default function Pipeline() {
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(false)

  // Optional auto-play, started only when the visitor presses Play.
  useEffect(() => {
    if (!auto) return
    const t = setInterval(() => setActive((a) => (a + 1) % pipelineStages.length), 3200)
    return () => clearInterval(t)
  }, [auto])

  const stage = pipelineStages[active]
  const go = (d) => setActive((a) => (a + d + pipelineStages.length) % pipelineStages.length)

  return (
    <div className="card pipeline">
      <div className="pipe-track" role="tablist" aria-label="Data pipeline stages">
        {pipelineStages.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            id={`tab-${s.id}`}
            aria-selected={i === active}
            aria-controls="pipe-panel"
            className={`pipe-stage ${i < active ? 'done' : ''}`}
            onClick={() => { setAuto(false); setActive(i) }}
          >
            <span className="pipe-node"><Icon name={s.icon} size={24} /></span>
            <span className="pipe-text">
              <span className="pipe-label">{s.label}</span>
              <span className="pipe-short">{s.short}</span>
            </span>
            <span className="pipe-link" aria-hidden="true" />
          </button>
        ))}
      </div>

      <div className="pipe-detail" id="pipe-panel" role="tabpanel" aria-labelledby={`tab-${stage.id}`}>
        <div className="eyebrow"><span className="num">0{active + 1}</span><span>Stage</span></div>
        <h3>{stage.label}</h3>
        <p>{stage.text}</p>
        <p className="eg">{stage.example}</p>
        <div className="pipe-controls">
          <button type="button" className="btn sm" onClick={() => { setAuto(false); go(-1) }} aria-label="Previous stage"><ChevronLeft size={16} /> Prev</button>
          <button type="button" className="btn sm" onClick={() => { setAuto(false); go(1) }} aria-label="Next stage">Next <ChevronRight size={16} /></button>
          <button type="button" className="btn sm" onClick={() => setAuto((a) => !a)} aria-pressed={auto}>
            {auto ? <><Pause size={14} /> Pause</> : <><Play size={14} /> Auto-play</>}
          </button>
        </div>
      </div>
      <p className="note" style={{ margin: '14px 0 0' }}>{pipelineIntro}</p>
    </div>
  )
}
