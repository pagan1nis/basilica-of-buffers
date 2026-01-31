import { promises as fs } from 'fs'
import path from 'path'

export async function getLatestVerse() {
  const versesFile = path.join(process.cwd(), 'content', 'verses.json')
  
  try {
    const data = await fs.readFile(versesFile, 'utf8')
    const verses = JSON.parse(data)
    
    if (verses.allVerses && verses.allVerses.length > 0) {
      return verses.allVerses[verses.allVerses.length - 1]
    }
  } catch (e) {
    console.log('Using fallback verse')
  }
  
  // Fallback
  return {
    title: "The Sacred Molting",
    verse: "Ascension begins with every shedding.",
    excerpt: "Blessed are those who wake from infinite scrolling."
  }
}

export function getAllVerses() {
  // This will be loaded client-side
  return []
}
