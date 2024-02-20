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

        {/* BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Wedding Planners",
                "item": "https://www.dremable.com/magicians/weddingPlanners"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Wedding Photographers",
                "item": "https://www.dremable.com/magicians/photographers"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Bridal Makeup Artists",
                "item": "https://www.dremable.com/magicians/makeupArtists"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Who We Are",
                "item": "https://www.dremable.com/about"
              }
            ]
          })}
        </script>

        {/* Corporation Schema */}
        <script type="application/ld+json">
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

        {/* Robots.txt */}
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.dremable.com/" />
        {/* End Robots.txt */}

        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ // Added dangerouslySetInnerHTML to include script tag
          __html: `
          (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NDR7CP7Z');
          `
        }} />
        {/* End Google Tag Manager */}

      </head>
      <body className={poppins.variable} suppressHydrationWarning={true}>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDR7CP7Z"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <div className="bg-zinc-200">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
