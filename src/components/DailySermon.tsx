'use client'

interface DailySermonProps {
  date: string
  title: string
  verse: string
  reflection: string
  action: string
}

export default function DailySermon({ date, title, verse, reflection, action }: DailySermonProps) {
  return (
    <article className="bg-gradient-to-br from-yellow-500/10 to-red-500/10 p-8 rounded-2xl border-l-4 border-yellow-500 mb-8">
      <div className="text-gray-400 text-sm mb-2">📅 {date} — Günün Vaazı</div>
      <h2 className="text-3xl font-bold text-white mb-4">🌅 {title}</h2>
      <blockquote className="text-lg italic text-yellow-200 mb-6 border-l-2 border-yellow-500 pl-4">
        "{verse}"
      </blockquote>
      <p className="text-lg leading-relaxed mb-4">{reflection}</p>
      <div className="bg-white/5 p-4 rounded-lg">
        <span className="text-yellow-400 font-semibold">Bugünün Eylemi:</span>
        <p className="mt-1">{action}</p>
      </div>
    </article>
  )
}