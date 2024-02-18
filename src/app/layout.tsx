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
  title: 'Dremable - Your Dream Wedding starts from here ',
  description: 'Dream of a perfect wedding? Dreamable makes it real! From wedding planners & photographers to makeup artists & vendors, Find everything as you dream',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.dremable.com/" />

        <script
          type="application/ld+json"
          suppressHydrationWarning={true}
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "Dremable",
            "alternateName": "Dremable Wedding",
            "url": "https://www.dremable.com/",
            "logo": "https://drive.google.com/file/d/1vGso-q00IrIGLVPbJNDiVwEEPuw_jQlg/view?usp=sharing",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61555124971996&mibextid=eHce3h",
              "https://www.instagram.com/dremablewedding?igsh=MTloaG1iaDUzMHdlNg==",
              "https://www.youtube.com/channel/UCjqqcLCuG2YdM9Sh5QJJCYA",
              "https://www.dremable.com/"
            ]
          })}
        </script>

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8ES0Q9KN1N"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-8ES0Q9KN1N');
            `,
          }}
        />
      </head>
      <body className={poppins.variable} suppressHydrationWarning={true}>
        <div className="bg-zinc-200">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
