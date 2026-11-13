import { useEffect, useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { certCategories } from '../data/profile.js'

function Card({ item, onOpen }) {
  const inner = (
    <>
      <div className="cert-img">
        {item.image ? (
          <img src={item.image} alt={item.alt || item.title} loading="lazy" />
        ) : (
          <span>Certificate image placeholder</span>
        )}
        {item.image && <span className="zoom-hint" aria-hidden="true"><ZoomIn size={14} /> View</span>}
      </div>
      <div className="cert-body">
        <h3>{item.title}</h3>
        {item.issuer && <p>{item.issuer}</p>}
        {item.note && <p>{item.note}</p>}
      </div>
    </>
  )
  return item.image ? (
    <button type="button" className="card cert cert-btn" onClick={() => onOpen(item)} aria-label={`View ${item.title}`}>
      {inner}
    </button>
  ) : (
    <div className="card cert">{inner}</div>
  )
}

export default function CertGallery() {
  const [active, setActive] = useState(certCategories[0].id)
  const [zoom, setZoom] = useState(null)
  const cat = certCategories.find((c) => c.id === active)

  useEffect(() => {
    if (!zoom) return
    const onKey = (e) => e.key === 'Escape' && setZoom(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [zoom])

  return (
    <div>
      <div className="filters" role="group" aria-label="Certificate categories">
        {certCategories.map((c) => (
          <button
            key={c.id}
            type="button"
            className="filter-btn"
            aria-pressed={active === c.id}
            onClick={() => setActive(c.id)}
          >
            {c.label}
            {c.items.length > 0 && <span className="count">{c.items.length}</span>}
          </button>
        ))}
      </div>

      <p className="note" style={{ marginTop: 0 }}>{cat.blurb}</p>

      {cat.items.length > 0 ? (
        <div className="grid two" aria-live="polite">
          {cat.items.map((it) => <Card key={it.id} item={it} onOpen={setZoom} />)}
        </div>
      ) : (
        <div className="placeholder-box" aria-live="polite">
          Nothing here yet. {cat.label} will be added soon.
        </div>
      )}

      {zoom && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={zoom.title} onClick={() => setZoom(null)}>
          <button type="button" className="lightbox-close" onClick={() => setZoom(null)} aria-label="Close" autoFocus>
            <X size={20} />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={zoom.image} alt={zoom.alt || zoom.title} />
            <figcaption>{zoom.title}</figcaption>
          </figure>
        </div>
      )}
    </div>
  )
}
