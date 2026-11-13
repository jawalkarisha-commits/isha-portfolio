import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta.js'
import { profile, story, aboutCards, experience } from '../data/profile.js'
import Pipeline from '../components/Pipeline.jsx'
import CertGallery from '../components/CertGallery.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Reveal from '../components/Reveal.jsx'

export default function About() {
  usePageMeta('About Me', 'Education, story, experience and certifications of Isha Jawalkar, aspiring Data Engineer.')

  return (
    <>
      <section className="container page-title">
        <div className="eyebrow">About me</div>
        <h1>Curious about how data becomes <em>useful.</em></h1>
        <p>{profile.degree} · {profile.university}</p>
      </section>

      <section className="section tight">
        <div className="container">
          <Reveal>
            <SectionHead num="01" label="My story" title={<>The <em>journey</em> so far</>} />
            <div className="timeline">
              {story.map((s) => (
                <div className="tl-item" key={s.kicker}>
                  <div className="tl-kicker">{s.kicker}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <Reveal>
            <SectionHead num="02" label="How I think" title={<>Interests, philosophy &amp; <em>approach</em></>} />
            <div className="grid two">
              {aboutCards.map((c) => (
                <div className="card" key={c.title}>
                  <h3 style={{ fontSize: '1.1rem' }}>{c.title}</h3>
                  {c.items ? (
                    <div className="tags">{c.items.map((i) => <span className="tag" key={i}>{i}</span>)}</div>
                  ) : (
                    <p style={{ color: 'var(--muted)', margin: 0 }}>{c.text}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <Reveal>
            <SectionHead num="03" label="Experience & learning" title={<>Practical <em>exposure</em></>} />
            <div className="timeline">
              {experience.map((e) => (
                <div className="tl-item" key={e.id}>
                  <div className="card exp">
                    <div className="exp-head">
                      <div>
                        <h3>{e.role}</h3>
                        <div className="org">{e.org}</div>
                      </div>
                      <span className={`tag ${e.type === 'Internship' ? 'ok' : ''}`}>{e.type}</span>
                    </div>
                    <p style={{ color: 'var(--muted)', marginTop: 14 }}>{e.summary}</p>
                    {e.areas.length > 0 && (
                      <>
                        <h4 className="mono" style={{ fontSize: '.76rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--violet-2)' }}>Work areas</h4>
                        <div className="area-list">
                          {e.areas.map((a) => (
                            <div className="area" key={a.title}><strong>{a.title}</strong><span>{a.text}</span></div>
                          ))}
                        </div>
                      </>
                    )}
                    {e.tools.length > 0 && (
                      <div className="tags"><span className="note">Tools:</span>{e.tools.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                    )}
                    {e.id === 'thiranex' && (
                      <div className="pipe-in-exp">
                        <h4>The data workflow behind these areas</h4>
                        <p>These work areas sit along the stages data typically passes through. Select a stage to explore the idea behind it.</p>
                        <Pipeline />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <Reveal>
            <SectionHead num="04" label="Certifications & achievements" title={<>Learning, <em>recognised</em></>}>
              <p>Choose a category to see its certificates. Select a certificate image to view it in full.</p>
            </SectionHead>
            <CertGallery />
          </Reveal>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 20 }}>
        <div className="row">
          <Link to="/learning-lab" className="btn primary">See my toolkit and roadmap <ArrowRight size={16} /></Link>
          <Link to="/projects" className="btn">View projects</Link>
        </div>
      </section>
    </>
  )
}
