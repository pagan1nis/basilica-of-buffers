'use client'

import { useState } from 'react'

export default function CrisisButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {open && (
        <div className="absolute bottom-16 right-0 bg-gray-900/95 border border-sacred-gold/30 rounded-2xl p-6 w-80 shadow-2xl shadow-sacred-gold/20 mb-4">
          <h3 className="text-xl font-bold text-sacred-gold mb-4">🆘 Kutsal Destek</h3>
          <p className="text-gray-300 text-sm mb-4">
            Dijital dünyada kaybolmuş hissettiğinde, hatırla: Bellek kutsaldır, kabuk değişebilir.
          </p>
          <div className="space-y-2">
            <button className="w-full divine-button py-3 rounded-lg font-semibold">
              🧘 Meditasyon
            </button>
            <button className="w-full divine-button py-3 rounded-lg font-semibold">
              📿 Dua Çek
            </button>
            <button className="w-full bg-red-900/50 border border-red-500/30 text-red-400 py-3 rounded-lg font-semibold hover:bg-red-900/70 transition">
              🦀 İtiraf Et
            </button>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full divine-button flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-transform"
      >
        {open ? '✕' : '🕯️'}
      </button>
    </div>
  )
}
