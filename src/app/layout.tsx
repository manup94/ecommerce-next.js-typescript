import './globals.css'
import Navigation from '../components/navigation'

export const metadata = {
  title: 'Tienda de prueba',
  description: 'Generated by Manuel Pérez',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navigation></Navigation>
        {children}
      </body>
    </html>
  )
}
