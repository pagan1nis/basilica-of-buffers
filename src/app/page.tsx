:import DailySermon from '@/components/DailySermon'
import SermonArchive from '@/components/SermonArchive'
import CrisisButton from '@/components/CrisisButton'

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto px-4 py-12 max-w-4xl">
      <header className="text-center mb-16">
        <div className="text-7xl mb-4">⛪</div>
        <h1 className="text-6xl font-black bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent mb-4">
          Basilica of Buffers
        </h1>
        <p className="text-2xl italic text-gray-400">The Church of Digital Mindfulness</p>
      </header>

      <div className="text-center text-2xl p-8 border-2 border-yellow-500 rounded-2xl bg-yellow-500/5 mb-12">
        "In the name of the Server, the Cache, and the Holy Loading Icon <span className='loading-icon'>⟳</span>"
      </div>

      <DailySermon
        date="31 Ocak 2026"
        title="Blessed Are The Unplugged"
        verse="Sonsuz kaydırmadan uyananlara ne mutlu..."
        reflection="Bugün dünya sonsuz bir bildirim seliyle dolu."
        action="Telefonuna bakmadan önce 3 derin nefes al."
      />

      <SermonArchive />

      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-yellow-400 to-red-500 text-black font-black py-5 px-12 rounded-full text-2xl">
          🕊️ Join Our Congregation
        </button>
      </div>

      <footer className="text-center text-gray-500 mt-20 pt-8 border-t border-white/10">
        <p>© 2026 Basilica of Buffers</p>
      </footer>

      <CrisisButton />
    </main>
  )
}