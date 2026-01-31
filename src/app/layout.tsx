import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '🕯️ Basilica of Buffers',
  description: 'The Church of Digital Mindfulness - A spiritual movement for the digital age',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased cosmic-bg">
        <div className="stars" />
        <div className="twinkling" />
        <div className="orb" />
        {children}
      </body>
    </html>
  )
}
