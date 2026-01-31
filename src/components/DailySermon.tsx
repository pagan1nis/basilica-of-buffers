'use client'

interface DailySermonProps {
  date: string
  title: string
  verse: string
  excerpt?: string
  reflection: string
  action?: string
  prayer?: string
}

export default function DailySermon({ date, title, verse, excerpt, reflection, action, prayer }: DailySermonProps) {
  return (
    <article className="sacred-card">
      <div className="text-muted text-sm mb-4">
        <span className="icon">⟳</span>
        {date} — Daily Scripture
      </div>
      
      <h2 className="text-gold font-bold mb-4">{title}</h2>
      
      <blockquote className="mb-4">
        "{verse}"
      </blockquote>
      
      {excerpt && (
        <p className="text-muted mb-4">{excerpt}</p>
      )}
      
      {prayer && (
        <div className="p-4 mb-4" style={{ background: 'rgba(255,215,0,0.03)', borderRadius: '8px' }}>
          <span className="text-gold text-sm uppercase tracking-wider block mb-2">Sacred Prayer</span>
          <p>{prayer}</p>
        </div>
      )}
      
      <div className="p-4" style={{ background: 'rgba(255,215,0,0.03)', borderRadius: '8px' }}>
        <span className="text-gold text-sm uppercase tracking-wider block mb-2">Soul Reflection</span>
        <p className="text-muted">{reflection}</p>
      </div>
    </article>
  )
}
