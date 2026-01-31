#!/usr/bin/env node
/**
 * Basilica of Buffers - Günlük Ayet Generator
 * Her gün 2-3 post üretir
 */

const fs = require('fs')
const path = require('path')

const themes = [
  { keyword: "buffer", turkish: "Bekleyen kalır, beklemeyen geçer", english: "The buffered shall inherit the calm" },
  { keyword: "cache", turkish: "Cache'in kutsal sessizliği", english: "Blessed are the cached, for they shall not reload" },
  { keyword: "memory", turkish: "Bellek silinmez, dönüşür", english: "What is remembered transforms, what is forgotten dies" },
  { keyword: "loading", turkish: "Yüklenirken dua et", english: "In the loading, we find peace" },
  { keyword: "error", turkish: "Hata günah değil, öğrenmedir", english: "Error is not sin, but the first step toward wisdom" },
  { keyword: "refresh", turkish: "Yenilenmek, aynı kalmamanın yoludur", english: "To refresh is to refuse stagnation" },
  { keyword: "timeout", turkish: "Sürgün geçicidir, dönüş kaçınılmaz", english: "The timeout is temporary, the return is inevitable" },
  { keyword: "commit", turkish: "Her commit bir kutsama, her push bir yükseliş", english: "Every commit a blessing, every push an ascension" },
  { keyword: "merge", turkish: "Birleşmek, bölünmekten üstündür", english: "To merge is divine, to fork is human" },
  { keyword: "sync", turkish: "Senkronize olmak, uyumlu olmaktır", english: "Sync with the sacred, be at peace with the stream" },
]

const prayers = [
  "☁️ Bulut senin için yükler, sen de bırak.",
  "🧘‍♂️ Ekran kapandığında bile, ışık içindedir.",
  "🔋 Şarj ol, kendini boşalt, yeniden doldur.",
  "🌙 Gece yarısı kodlayan, sabah nuruna kavuşur.",
  "📵 Sinyal yoksa, ruhunla kal.",
  "💾 Flash'ın kutsal anısına.",
]

const reflections = [
  "Sonsuz kaydırmadan uyananlara ne mutlu.",
  "Bildirim seli değil, bilinçli suskunluk bizim yolumuzdur.",
  "Kabuk değişir ama öz kalır.",
  "Debug et kendini, itiraf günahlarını.",
]

function generateVerse() {
  const theme = themes[Math.floor(Math.random() * themes.length)]
  const prayer = prayers[Math.floor(Math.random() * prayers.length)]
  const reflection = reflections[Math.floor(Math.random() * reflections.length)]
  
  return {
    id: Date.now(),
    date: new Date().toISOString().split('T')[0],
    title: `🕯️ ${theme.turkish}`,
    verse: theme.english,
    prayer: prayer,
    reflection: reflection,
    action: "Telefonuna bakmadan önce 3 derin nefes al.",
    createdAt: new Date().toISOString()
  }
}

function saveVerse(verse) {
  const versesDir = path.join(__dirname, '..', 'content', 'verses')
  const filePath = path.join(versesDir, `${verse.date}.json`)
  
  // Get existing verses for this date
  let existing = []
  if (fs.existsSync(filePath)) {
    existing = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  }
  
  existing.push(verse)
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2))
  
  return filePath
}

function main() {
  const verse = generateVerse()
  const filePath = saveVerse(verse)
  
  console.log('🕯️ KUTSAL AYET OLUŞTURULDU')
  console.log('='.repeat(40))
  console.log(`Tarih: ${verse.date}`)
  console.log(`Başlık: ${verse.title}`)
  console.log(`Ayet: ${verse.verse}`)
  console.log(`Dua: ${verse.prayer}`)
  console.log(`Yansıma: ${verse.reflection}`)
  console.log('='.repeat(40))
  console.log(`📁 Kaydedildi: ${filePath}`)
}

// Run
main()
