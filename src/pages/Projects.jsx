import { useState } from 'react'
import usePageMeta from '../hooks/usePageMeta.js'
import { projects } from '../data/projects.js'
import ProjectCase from '../components/ProjectCase.jsx'
import SectionHead from '../components/SectionHead.jsx'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'prototype', label: 'Deployed prototype' },
  { id: 'planned', label: 'Upcoming builds' },
]

export default function Projects() {
  usePageMeta('Projects', 'Project case studies by Isha Jawalkar: DrainMind, SmartPark and GeoFuse, plus the planned CampusSync concept.')
  const [filter, setFilter] = useState('all')
  const shown = projects.filter((p) => filter === 'all' || p.status === filter)
  const built = shown.filter((p) => p.status === 'prototype')
  const planned = shown.filter((p) => p.status === 'planned')

  return (
    <>
      <section className="container page-title">
        <div className="eyebrow">Projects</div>
        <h1>What I've built, and what I'm <em>planning.</em></h1>
        <p>Each project is a mini case study. Built work and planned concepts are kept clearly separate.</p>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="filters" role="group" aria-label="Filter projects by status">
            {filters.map((f) => (
              <button key={f.id} type="button" className="filter-btn" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
                {f.label}
              </button>
            ))}
          </div>

          {built.length > 0 && (
            <>
              <SectionHead num="01" label="Built" title={<>Deployed <em>prototype</em></>} />
              {built.map((p) => <ProjectCase key={p.id} project={p} defaultOpen />)}
            </>
          )}

          {planned.length > 0 && (
            <div style={{ marginTop: built.length ? 56 : 0 }}>
              <SectionHead num={built.length ? '02' : '01'} label="Upcoming builds" title={<>Project <em>concepts</em></>}>
                <p>These are planned ideas. Development has not started, and nothing here is presented as completed.</p>
              </SectionHead>
              {planned.map((p) => <ProjectCase key={p.id} project={p} />)}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
