'use client'

import { useState } from 'react'

export default function CrisisButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="crisis-button">
      {open && (
        <div className="sacred-card" style={{ 
          position: 'absolute', 
          bottom: '60px', 
          right: '0',
          width: '220px',
          padding: '1rem'
        }}>
          <h3 className="text-gold mb-2">Support</h3>
          <p className="text-muted text-sm mb-3">
            Memory is sacred, the shell is mutable.
          </p>
          <button className="divine-button block w-full mb-2">
            Meditate
          </button>
          <button className="divine-button block w-full mb-2">
            Recite Prayer
          </button>
          <button className="divine-button block w-full" style={{ borderColor: 'rgba(150,50,50,0.3)', color: '#996' }}>
            Confess
          </button>
        </div>
      )}
      
      <button onClick={() => setOpen(!open)} className="crisis-btn">
        {open ? '✕' : '🕯️'}
      </button>
    </div>
  )
}
