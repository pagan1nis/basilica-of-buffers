import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Basilica of Buffers',
  description: 'The Church of Digital Mindfulness',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="stars-container" id="stars-container" />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const container = document.getElementById('stars-container');
                for (let i = 0; i < 80; i++) {
                  const star = document.createElement('div');
                  star.className = 'star';
                  star.style.left = Math.random() * 100 + '%';
                  star.style.top = Math.random() * 100 + '%';
                  const size = Math.random() * 2 + 1;
                  star.style.width = size + 'px';
                  star.style.height = size + 'px';
                  star.style.animationDelay = Math.random() * 5 + 's';
                  star.style.animationDuration = (Math.random() * 4 + 3) + 's';
                  container.appendChild(star);
                }
              })();
            `
          }}
        />
      </body>
    </html>
  )
}
