export default function SectionHead({ num, label, title, children }) {
  return (
    <div className="section-head">
      <div className="eyebrow">
        {num && <span className="num">{num}</span>}
        <span>{label}</span>
      </div>
      <h2>{title}</h2>
      {children}
    </div>
  )
}
