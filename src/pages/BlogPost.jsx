import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta.js'
import { blogs } from '../data/blogs.js'
import { Cover, formatDate } from './Blogs.jsx'
import NotFound from './NotFound.jsx'

export default function BlogPost() {
  const { slug } = useParams()
  const i = blogs.findIndex((b) => b.slug === slug)
  const post = blogs[i]
  usePageMeta(post ? post.title : 'Not found', post?.excerpt)
  if (!post) return <NotFound />
  const next = blogs[(i + 1) % blogs.length]

  return (
    <article className="container section tight article">
      <Link to="/blogs" className="read-more"><ArrowLeft size={15} /> All field notes</Link>
      <div className="meta" style={{ marginTop: 24 }}>
        <span className="tag">{post.tag}</span><span>{formatDate(post.date)}</span><span>{post.readingTime}</span>
      </div>
      <h1 style={{ marginTop: 14 }}>{post.title}</h1>
      <Cover post={post} />
      <p className="draft-note">Draft based on the information I have shared so far. I will update it with more detail over time.</p>

      {post.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
          {s.list && <ul className="bullets" style={{ marginBottom: 16 }}>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
        </section>
      ))}

      <div className="takeaways">
        <h2>Key takeaways</h2>
        <ul className="bullets">{post.takeaways.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>

      <div className="post-nav">
        <Link to="/blogs" className="btn sm"><ArrowLeft size={15} /> Back to Field Notes</Link>
        {next.slug !== post.slug && <Link to={`/blogs/${next.slug}`} className="btn sm">Next: {next.title.length > 34 ? next.title.slice(0, 34) + '…' : next.title} <ArrowRight size={15} /></Link>}
      </div>
    </article>
  )
}
