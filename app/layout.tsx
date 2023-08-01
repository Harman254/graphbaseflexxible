import './globals.css'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Flexxible',
  description: 'Showcase and Discover remarable Developer Projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
           {children}
        </main>
       
        <Footer />
        </body>

    </html>
  )
}
