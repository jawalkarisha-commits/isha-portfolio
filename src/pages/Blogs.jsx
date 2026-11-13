import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta.js'
import { blogs } from '../data/blogs.js'

export function formatDate(iso) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function Cover({ post }) {
  return (
    <div className="cover">
      {post.cover ? (
        <img src={post.cover} alt={post.coverAlt} loading="lazy" style={{ objectPosition: post.coverPosition || 'center' }} />
      ) : (
        <span>cover image placeholder</span>
      )}
    </div>
  )
}

export default function Blogs() {
  usePageMeta('Field Notes', 'Field Notes: learning, building and exploring. Blog posts by Isha Jawalkar.')
  return (
    <>
      <section className="container page-title">
        <div className="eyebrow">Blogs</div>
        <h1>Field Notes – <em>Learning, Building &amp; Exploring</em></h1>
        <p>Short write-ups on my internship, my project, and my learning path.</p>
      </section>
      <section className="section tight">
        <div className="container grid three">
          {blogs.map((b) => (
            <Link key={b.slug} to={`/blogs/${b.slug}`} className="card post-card" aria-label={b.title}>
              <Cover post={b} />
              <div className="body">
                <div className="meta"><span>{formatDate(b.date)}</span><span>{b.readingTime}</span></div>
                <h3>{b.title}</h3>
                <p>{b.excerpt}</p>
                <span className="read-more">Read note <ArrowRight size={15} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
