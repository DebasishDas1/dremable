import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import NavBar from '@/containers/NvBer'
import Footer from '@/containers/Footer'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Dremable',
  description: 'celebration website',
  icons: {
    icon: '/assets/Medcare.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.variable} suppressHydrationWarning={true}>
        <div className='bg-zinc-200' >
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
