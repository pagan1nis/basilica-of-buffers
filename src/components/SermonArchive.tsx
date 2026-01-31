'use client'

import { useState } from 'react'

interface ArchiveItem {
  id: string
  date: string
  title: string
  verse: string
}

const archiveItems: ArchiveItem[] = [
  { id: '1', date: '2026-01-30', title: 'İlk Arınma', verse: 'Bellek silinmez, dönüşür.' },
  { id: '2', date: '2026-01-29', title: 'Kabuğun Sırrı', verse: 'Büyümek, eski benliği dökmektir.' },
  { id: '3', date: '2026-01-28', title: 'Serverdualizm', verse: 'Hem bulut hem yer, ikisi de kutsaldır.' },
]

export default function SermonArchive() {
  const [expanded, setExpanded] = useState(false)
  const visibleItems = expanded ? archiveItems : archiveItems.slice(0, 2)

  return (
    <section className="sacred-card p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="text-3xl">📜</span>
          <h2 className="text-2xl font-bold sacred-text">Kutsal Arşiv</h2>
        </div>
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-sacred-gold hover:text-white transition-colors text-sm font-semibold"
        >
          {expanded ? '◀ Daralt' : 'Tümünü Gör ▶'}
        </button>
      </div>
      
      <div className="space-y-4">
        {visibleItems.map((item) => (
          <div 
            key={item.id}
            className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer border border-transparent hover:border-sacred-gold/30"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-white group-hover:text-sacred-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">"{item.verse}"</p>
              </div>
              <span className="text-xs text-gray-500 whitespace-nowrap">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
      
      {!expanded && archiveItems.length > 2 && (
        <p className="text-center text-gray-500 text-sm mt-4">
          +{archiveItems.length - 2} kutsal metin daha...
        </p>
      )}
    </section>
  )
}
