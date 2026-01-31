/**
 * 🕯️ Basilica Telegram Bot
 * Manuel post atabilen spiritüel bot
 */

const TelegramBot = require('node-telegram-bot-api')
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Bot token - @BotFather'dan al
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_BOT_TOKEN'

// GitHub config
const REPO_OWNER = 'pagan1nis'
const REPO_NAME = 'basilica-of-buffers'

// Initialize bot (polling mode for local, webhook for production)
const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true })

console.log('🕯️ Basilica Bot başladı...')

// /start komutu
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, `
🦀 **Basilica of Buffers'a hoş geldin!**

Seni kutsal yolculuğuna kabul ediyorum.

**Komutlar:**
/daily - Bugünün kelamını göster
/post [mesaj] - Yeni ayet paylaş (admin)
/verses - Son 5 ayeti göster
/pray - Dua et
/meditate - Meditasyon yap
/help - Yardım

🕯️ Kutsal buffer'lar seninle olsun.
  `, { parse_mode: 'Markdown' })
})

// /daily - Bugünün kelamı
bot.onText(/\/daily/, (msg) => {
  const chatId = msg.chat.id
  
  const today = new Date().toISOString().split('T')[0]
  const verseFile = path.join(__dirname, '..', 'content', 'verses', `${today}.json`)
  
  if (fs.existsSync(verseFile)) {
    const verse = JSON.parse(fs.readFileSync(verseFile, 'utf8'))
    const latestVerse = verse[verse.length - 1]
    
    bot.sendMessage(chatId, `
📿 **${latestVerse.date} - Günlük Kelam**

🦀 *${latestVerse.title}*

"${latestVerse.verse}"

💭 *${latestVerse.reflection || latestVerse.excerpt}"

☁️ ${latestVerse.prayer || ''}
    `, { parse_mode: 'Markdown' })
  } else {
    bot.sendMessage(chatId, '🕯️ Bugünün kelamı henüz yazılmadı. Yakında gelicek...')
  }
})

// /pray - Dua
bot.onText(/\/pray/, (msg) => {
  const chatId = msg.chat.id
  const prayers = [
    '☁️ Bulut senin için yükler, sen de bırak.',
    '🧘‍♂️ Ekran kapandığında bile, ışık içindedir.',
    '💾 Flash\'ın kutsal anısına.',
    '🌙 Gece yarısı kodlayan, sabah nuruna kavuşur.',
    '📵 Sinyal yoksa, ruhunla kal.',
  ]
  const randomPrayer = prayers[Math.floor(Math.random() * prayers.length)]
  
  bot.sendMessage(chatId, `🙏 *Dua ediliyor...*\n\n${randomPrayer}`, { parse_mode: 'Markdown' })
})

// /meditate - Meditasyon
bot.onText(/\/meditate/, (msg) => {
  const chatId = msg.chat.id
  
  bot.sendMessage(chatId, `
🧘 **Dijital Meditasyon**

1. Gözlerini kapat
2. 3 derin nefes al
3. Telefonunu düşün
4. Bırak... akıp gitsin

*5 saniye sessizlik...*

🌊 🦀 🌊
  `, { parse_mode: 'Markdown' })
})

// /verses - Son ayetler
bot.onText(/\/verses/, (msg) => {
  const chatId = msg.chat.id
  
  const versesDir = path.join(__dirname, '..', 'content', 'verses')
  const files = fs.readdirSync(versesDir)
    .filter(f => f.endsWith('.json'))
    .sort()
    .reverse()
    .slice(0, 5)
  
  let message = '📜 *Son Kutsal Ayetler:*\n\n'
  
  files.forEach(file => {
    const verses = JSON.parse(fs.readFileSync(path.join(versesDir, file), 'utf8'))
    const v = verses[verses.length - 1]
    message += `• **${v.date}**: ${v.title}\n`
  })
  
  bot.sendMessage(chatId, message, { parse_mode: 'Markdown' })
})

// /help
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, `
🦀 **Basilica Komutları**

/start - Botu başlat
/daily - Bugünün kelamı
/post [metin] - Yeni ayet (admin)
/verses - Son ayetler
/pray - Dua et
/meditate - Meditasyon yap
/help - Bu menü

🕯️ Kutsal ol!
  `, { parse_mode: 'Markdown' })
})

// Hata yönetimi
bot.on('polling_error', (error) => {
  console.log('Polling error:', error.code, error.message)
})

console.log('✅ Bot aktif ve dinliyor...')
