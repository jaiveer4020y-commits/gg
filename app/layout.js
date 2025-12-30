// app/layout.js
export const metadata = {
  title: 'My Video Player',
  description: 'Stream movie and series',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
