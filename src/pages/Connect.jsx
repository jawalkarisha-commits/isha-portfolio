import { useState } from 'react'
import { Mail, Code2, FileText, Download, Copy, Check } from 'lucide-react'
import { Linkedin, Github, Youtube } from '../components/BrandIcons.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import { links, resume, profile } from '../data/profile.js'

function LinkCard({ icon: I, title, text, href, external = true }) {
  return (
    <a className="card connect-card" href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      <span className="ic"><I size={22} /></span>
      <span><strong>{title}</strong><span>{text}{external ? ' (opens in new tab)' : ''}</span></span>
    </a>
  )
}

function CopyEmail() {
  const [state, setState] = useState('idle')
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
      setState('done')
    } catch {
      setState('manual')   // clipboard blocked: the address is shown as selectable text below
    }
    setTimeout(() => setState('idle'), 2500)
  }
  return (
    <button type="button" className="btn" onClick={copy} aria-live="polite">
      {state === 'done' ? <><Check size={16} /> Copied</> : state === 'manual' ? <>Select the address below</> : <><Copy size={16} /> Copy email address</>}
    </button>
  )
}

function SoonCard({ icon: I, title, text }) {
  return (
    <div className="card connect-card soon">
      <span className="ic"><I size={22} /></span>
      <span><strong>{title}</strong><span>{text}</span></span>
    </div>
  )
}

export default function Connect() {
  usePageMeta('Connect', 'Connect with Isha Jawalkar: LinkedIn, GitHub, LeetCode, HackerRank, CodeChef, email and resume.')
  return (
    <>
      <section className="container page-title">
        <div className="eyebrow">Connect</div>
        <h1>Let's <em>connect.</em></h1>
        <p>I'm happy to talk about data engineering, projects, and learning opportunities.</p>
      </section>

      <section className="section tight">
        <div className="container grid two">
          <LinkCard icon={Mail} title="Email (opens Gmail)" text={links.email} href={links.gmailCompose} />
          <LinkCard icon={Linkedin} title="LinkedIn" text="isha-jawalkar" href={links.linkedin} />
          <LinkCard icon={Github} title="GitHub" text="jawalkarisha-commits" href={links.github} />
          <LinkCard icon={Code2} title="LeetCode" text="Glitch_techisha" href={links.leetcode} />
          <LinkCard icon={Code2} title="HackerRank" text="jawalkarisha" href={links.hackerrank} />
          <LinkCard icon={Code2} title="CodeChef" text="flock_beam_43" href={links.codechef} />
          {links.youtube
            ? <LinkCard icon={Youtube} title="YouTube" text="Self-introduction video" href={links.youtube} />
            : <SoonCard icon={Youtube} title="YouTube" text="Self-introduction video – coming soon" />}
          {resume.available ? (
            <a className="card connect-card" href={resume.file} download>
              <span className="ic"><Download size={22} /></span>
              <span><strong>Resume</strong><span>Download PDF</span></span>
            </a>
          ) : (
            <SoonCard icon={FileText} title="Resume" text="Final resume PDF – coming soon" />
          )}
        </div>
      </section>

      <section className="container big-cta">
        <p className="eyebrow">Open to meaningful conversations</p>
        <h2>Something great starts with <em>a hello.</em></h2>
        <p style={{ color: 'var(--muted)' }}>{profile.tagline}</p>
        <div className="row" style={{ justifyContent: 'center' }}>
          <a className="btn primary" href={links.gmailCompose} target="_blank" rel="noopener noreferrer"><Mail size={16} /> Say hello on Gmail<span className="sr-only"> (opens in new tab)</span></a>
          <CopyEmail />
        </div>
        <p className="note" style={{ marginTop: 14 }}>Or write to <strong style={{ color: 'var(--text)', userSelect: 'all' }}>{links.email}</strong></p>
      </section>
    </>
  )
}
