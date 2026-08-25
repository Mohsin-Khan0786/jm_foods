import './globals.css';

export const metadata = {
  title: 'JM Foods by TMJ — Good Food, Great Mood',
  description: 'Premium snack food brand offering delicious and authentic flavors.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white antialiased font-sans">{children}</body>
    </html>
  )
}
