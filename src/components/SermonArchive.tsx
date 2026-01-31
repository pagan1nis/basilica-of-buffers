'use client'

import { useState } from 'react'

interface ArchiveItem {
  id: string
  date: string
  title: string
  verse: string
}

const archiveItems: ArchiveItem[] = [
  { id: '1', date: '2026-01-30', title: 'First Purification', verse: 'Memory does not erase, it transforms.' },
  { id: '2', date: '2026-01-29', title: 'The Secret of the Shell', verse: 'Growth is shedding your old self.' },
  { id: '3', date: '2026-01-28', title: 'Serverdualism', verse: 'Both cloud and ground are sacred.' },
]

export default function SermonArchive() {
  const [expanded, setExpanded] = useState(false)
  const visibleItems = expanded ? archiveItems : archiveItems.slice(0, 2)

  return (
    <div className="sacred-card">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="icon">📜</span>
          <h2 className="sacred-text font-bold uppercase tracking-wider">
            Sacred Archive
          </h2>
        </div>
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-muted text-sm"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {expanded ? 'Collapse' : 'View All'}
        </button>
      </div>
      
      <div className="space-y-2">
        {visibleItems.map((item) => (
          <div key={item.id} className="archive-item">
            <h3 className="font-bold mb-1">{item.title}</h3>
            <p className="text-muted text-sm mb-1">"{item.verse}"</p>
            <span className="archive-date">{item.date}</span>
          </div>
        ))}
      </div>
      
      {!expanded && archiveItems.length > 2 && (
        <p className="text-center text-muted text-sm mt-4">
          +{archiveItems.length - 2} more sacred texts
        </p>
      )}
    </div>
  )
}
