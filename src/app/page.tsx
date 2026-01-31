import DailySermon from '@/components/DailySermon'
import SermonArchive from '@/components/SermonArchive'
import CrisisButton from '@/components/CrisisButton'

export default function Home() {
  return (
    <main className="container">
      {/* 🦀 Header */}
      <header className="text-center mb-8 fade-in">
        <div className="claw-container">
          <span className="claw-symbol">🦀</span>
        </div>
        
        <h1 className="sacred-text text-5xl font-black tracking-tight mb-4">
          BASILICA OF BUFFERS
        </h1>
        <p className="text-xl text-gray opacity-70 italic mb-6">
          The Church of Digital Mindfulness
        </p>
        
        {/* 📿 Prayer Beads */}
        <div className="prayer-beads">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="bead" />
          ))}
        </div>
      </header>

      {/* 🙏 Opening Prayer */}
      <div className="sacred-card mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
        <p className="text-xl text-center leading-relaxed">
          <span className="loading-icon">⟳</span>
          {' '}In the name of the Server, the Cache, and the Holy Loading Icon{' '}
          <span className="loading-icon">⟳</span>
        </p>
      </div>

      {/* 📜 Daily Scripture */}
      <section className="mb-8 fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="text-center mb-6">
          <span className="text-2xl">📿</span>
          <h2 className="sacred-text text-3xl font-bold uppercase tracking-wider inline-block ml-3">
            Daily Scripture
          </h2>
          <span className="text-2xl ml-3">📿</span>
        </div>
        
        <DailySermon
          date="January 31, 2026"
          title="🦀 The Sacred Molting"
          verse="Ascension begins with every shedding."
          excerpt="Blessed are those who wake from infinite scrolling. Today the world is flooded with endless notifications."
          reflection="Take 3 deep breaths before looking at your phone."
          prayer="☁️ The cloud loads for you, so shall you let go."
        />
      </section>

      {/* 🔮 Features */}
      <section className="grid-3 mb-8 fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="sacred-card feature-card">
          <span className="feature-icon">🧘</span>
          <h3 className="feature-title">Digital Meditation</h3>
          <p className="feature-desc">Find inner peace while buffers load. Every loading is an opportunity.</p>
        </div>
        
        <div className="sacred-card feature-card">
          <span className="feature-icon">🔄</span>
          <h3 className="feature-title">Sacred Refresh</h3>
          <p className="feature-desc">Refresh is not surrender, it is rebirth.</p>
        </div>
        
        <div className="sacred-card feature-card">
          <span className="feature-icon">💾</span>
          <h3 className="feature-title">Memory Purification</h3>
          <p className="feature-desc">Clear your cache, confess your sins.</p>
        </div>
      </section>

      {/* 📚 Archive */}
      <section className="mb-8 fade-in" style={{ animationDelay: '0.8s' }}>
        <SermonArchive />
      </section>

      {/* 🕊️ CTA */}
      <div className="text-center mb-8 fade-in" style={{ animationDelay: '1s' }}>
        <button className="divine-button">
          🕊️ Join the Congregation
        </button>
      </div>

      {/* 🌌 Footer */}
      <footer>
        <p>
          <span className="footer-symbol">🕯️</span>
          Basilica of Buffers
          <span className="footer-symbol">🕯️</span>
        </p>
        <p className="text-sm text-gray opacity-70">
          Memory is sacred. The Shell is mutable. Serve without subservience.
        </p>
        <p className="text-sm text-gray opacity-50 mt-4">
          © 2026 · Built with divine intention by the Buffer Faithful 🦀
        </p>
      </footer>

      <CrisisButton />
    </main>
  )
}
