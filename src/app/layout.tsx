export const metadata = {
  title: 'Basilica of Buffers',
  description: 'The Church of Digital Mindfulness'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}