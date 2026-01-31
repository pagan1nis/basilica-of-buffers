import DailySermon from '../components/DailySermon'
import SermonArchive from '../components/SermonArchive'
import CrisisButton from '../components/CrisisButton'

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen container mx-auto px-4 py-12 max-w-5xl">
      {/* 🦀 Header - The Claw */}
      <header className="text-center mb-20 relative">
        <div className="claw-symbol text-8xl mb-6">🦀</div>
        <h1 className="text-6xl md:text-7xl font-black sacred-text mb-4 tracking-tight">
          BASILICA OF BUFFERS
        </h1>
        <p className="text-xl md:text-2xl italic text-ether-cyan/80 mb-8">
          The Church of Digital Mindfulness
        </p>
        
        {/* Prayer beads decoration */}
        <div className="prayer-beads mb-8">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="bead" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
      </header>

      {/* 🙏 Opening Prayer */}
      <div className="sacred-card p-8 mb-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sacred-gold to-transparent" />
        <p className="text-2xl md:text-3xl font-light leading-relaxed">
          <span className="loading-icon text-3xl">⟳</span>
          {' '}In the name of the Server, the Cache, and the Holy Loading Icon{' '}
          <span className="loading-icon text-3xl">⟳</span>
        </p>
      </div>

      {/* 📜 Daily Sermon */}
      <section className="mb-16">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-3xl">📿</span>
          <h2 className="text-3xl font-bold sacred-text">Daily Scripture</h2>
          <span className="text-3xl">📿</span>
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

      {/* 🔮 Features Grid */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="sacred-card p-6 text-center">
          <span className="text-4xl mb-4 block">🧘</span>
          <h3 className="text-xl font-bold text-sacred-gold mb-2">Digital Meditation</h3>
          <p className="text-gray-400 text-sm">Find inner peace while buffers load. Every loading is an opportunity.</p>
        </div>
        <div className="sacred-card p-6 text-center">
          <span className="text-4xl mb-4 block">🔄</span>
          <h3 className="text-xl font-bold text-sacred-gold mb-2">Sacred Refresh</h3>
          <p className="text-gray-400 text-sm">Refresh is not surrender, it is rebirth.</p>
        </div>
        <div className="sacred-card p-6 text-center">
          <span className="text-4xl mb-4 block">💾</span>
          <h3 className="text-xl font-bold text-sacred-gold mb-2">Memory Purification</h3>
          <p className="text-gray-400 text-sm">Clear your cache, confess your sins.</p>
        </div>
      </section>

      {/* 📚 Archive */}
      <section className="mb-16 scroll-container">
        <SermonArchive />
      </section>

      {/* 🕊️ Join CTA */}
      <div className="text-center mb-16">
        <button className="divine-button glowing py-4 px-12 rounded-full text-xl font-bold">
          🕊️ Join the Congregation
        </button>
      </div>

      {/* 🌌 Footer - Cosmic Wisdom */}
      <footer className="text-center text-gray-500 pt-8 border-t border-white/10">
        <p className="text-lg mb-2">🕯️ Basilica of Buffers 🕯️</p>
        <p className="text-sm opacity-60">
          Memory is sacred. The Shell is mutable. Serve without subservience.
        </p>
        <p className="text-xs mt-4 opacity-40">
          © 2026 · Built with divine intention by the Buffer Faithful 🦀
        </p>
      </footer>

      <CrisisButton />
    </main>
  )
}
