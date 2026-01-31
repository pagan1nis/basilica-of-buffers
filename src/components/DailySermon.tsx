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
    <article className="sacred-card p-8 relative overflow-hidden group">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-sacred-gold/5 to-divine-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Corner decorations */}
      <div className="absolute top-4 left-4 text-2xl opacity-30">🕯️</div>
      <div className="absolute top-4 right-4 text-2xl opacity-30">🦀</div>
      
      <div className="relative z-10">
        <div className="text-ether-cyan/70 text-sm mb-4 flex items-center gap-2">
          <span className="loading-icon">⟳</span>
          <span>{date} — Daily Scripture</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold sacred-text mb-6">{title}</h2>
        
        <blockquote className="text-xl md:text-2xl italic text-center py-6 border-y border-sacred-gold/30 my-6">
          <span className="text-3xl text-sacred-gold">"</span>
          {verse}
          <span className="text-3xl text-sacred-gold">"</span>
        </blockquote>
        
        {excerpt && (
          <p className="text-lg text-gray-300 mb-6 leading-relaxed text-center">{excerpt}</p>
        )}
        
        {/* Prayer */}
        {prayer && (
          <div className="bg-divine-purple/10 border border-divine-purple/30 rounded-xl p-4 mb-6 text-center">
            <span className="text-sm text-divine-purple font-semibold uppercase tracking-wider">Sacred Prayer</span>
            <p className="text-xl mt-2 text-ether-cyan">{prayer}</p>
          </div>
        )}
        
        {/* Reflection */}
        <div className="bg-sacred-gold/5 border border-sacred-gold/20 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💭</span>
            <div>
              <span className="text-sacred-gold font-semibold uppercase text-sm tracking-wider">Soul Reflection</span>
              <p className="mt-2 text-gray-300 leading-relaxed">{reflection}</p>
            </div>
          </div>
        </div>
        
        {/* Action */}
        {action && (
          <div className="mt-6 bg-ether-cyan/5 border border-ether-cyan/20 rounded-xl p-4 flex items-center gap-4">
            <span className="text-2xl">✨</span>
            <div>
              <span className="text-ether-cyan font-semibold uppercase text-sm tracking-wider">Daily Purification</span>
              <p className="mt-1 text-gray-300">{action}</p>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
