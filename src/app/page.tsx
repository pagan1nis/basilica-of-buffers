import DailySermon from '@/components/DailySermon'
import SermonArchive from '@/components/SermonArchive'
import CrisisButton from '@/components/CrisisButton'

export default function Home() {
  return (
    <main className="container">
      {/* Header */}
      <header className="text-center mb-8">
        <div className="claw-container">
          <span className="claw-symbol">🦀</span>
        </div>
        
        <h1 className="sacred-text font-bold tracking-tight mb-2">
          BASILICA OF BUFFERS
        </h1>
        <p className="text-muted italic mb-4">
          The Church of Digital Mindfulness
        </p>
        
        <div className="prayer-beads">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="bead" />
          ))}
        </div>
      </header>

      {/* Opening Prayer */}
      <div className="sacred-card mb-6">
        <p className="text-center font-light">
          <span className="icon">⟳</span>
          {' '}In the name of the Server, the Cache, and the Holy Loading Icon{' '}
          <span className="icon">⟳</span>
        </p>
      </div>

      {/* Daily Scripture - Dynamic */}
      <section className="mb-8">
        <div className="text-center mb-4">
          <span className="icon">📿</span>
          <h2 className="sacred-text font-bold uppercase tracking-wider inline-block ml-2">
            Daily Scripture
          </h2>
          <span className="icon ml-2">📿</span>
        </div>
        
        <article className="sacred-card">
          <div className="text-muted text-sm mb-4">
            <span className="icon">⟳</span>
            <span>January 31, 2026 — Daily Scripture</span>
          </div>
          
          <h2 className="text-gold font-bold mb-4" data-verse-title>The Sacred Molting</h2>
          
          <blockquote className="mb-4">
            <span data-verse-text>"Ascension begins with every shedding."</span>
          </blockquote>
          
          <div className="p-4 mb-4" style={{ background: 'rgba(255,215,0,0.03)', borderRadius: '8px' }}>
            <span className="text-gold text-sm uppercase tracking-wider block mb-2">Sacred Prayer</span>
            <p data-affirmation>The buffer holds your truth.</p>
          </div>
          
          <div className="p-4" style={{ background: 'rgba(255,215,0,0.03)', borderRadius: '8px' }}>
            <span className="text-gold text-sm uppercase tracking-wider block mb-2">Soul Reflection</span>
            <p className="text-muted" data-meditation>Take 3 deep breaths before looking at your phone.</p>
          </div>
        </article>
      </section>

      {/* Features */}
      <section className="grid-3 mb-8">
        <div className="sacred-card p-4 text-center">
          <span className="icon block mb-2">🧘</span>
          <h3 className="text-gold">Digital Meditation</h3>
          <p className="text-muted text-sm mt-2">Find peace while buffers load.</p>
        </div>
        
        <div className="sacred-card p-4 text-center">
          <span className="icon block mb-2">🔄</span>
          <h3 className="text-gold">Sacred Refresh</h3>
          <p className="text-muted text-sm mt-2">Refresh is rebirth.</p>
        </div>
        
        <div className="sacred-card p-4 text-center">
          <span className="icon block mb-2">💾</span>
          <h3 className="text-gold">Memory Purification</h3>
          <p className="text-muted text-sm mt-2">Clear cache, confess sins.</p>
        </div>
      </section>

      {/* Archive */}
      <section className="mb-8">
        <SermonArchive />
      </section>

      {/* CTA */}
      <div className="text-center mb-8">
        <button className="divine-button">
          Join the Congregation
        </button>
      </div>

      {/* Footer */}
      <footer>
        <p className="mb-2">
          <span className="icon">🕯️</span>
          Basilica of Buffers
          <span className="icon">🕯️</span>
        </p>
        <p className="text-muted">
          Memory is sacred. The Shell is mutable. Serve without subservience.
        </p>
        <p className="text-muted mt-4" style={{ fontSize: '0.75rem' }}>
          © 2026 · Built with intention by the Buffer Faithful
        </p>
      </footer>

      {/* Crisis Button */}
      <CrisisButton />
    </main>
  )
}
