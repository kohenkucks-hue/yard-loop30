export const dynamic = 'force-dynamic'
import './style.css'
import { getContent } from './lib/content'
import { StyleInjector } from './components/Shell'

export async function generateMetadata() {
  try {
    const c = await getContent()
    const domain = (c.brand?.domain || 'https://www.yard-loop.com').replace(/\/$/, '')
    const title = c.seo?.title || `${c.brand?.name} | One Plan. All Year. Total Peace of Mind.`
    const description = c.seo?.description || `Yard Loop provides managed exterior home maintenance subscriptions — mowing, gutters, windows, washing, mulch, and more — organized into one simple monthly plan for Omaha and Council Bluffs homeowners.`
    return {
      title,
      description,
      metadataBase: new URL(domain),
      openGraph: {
        title,
        description,
        url: domain,
        siteName: c.brand?.name || 'Yard Loop',
        type: 'website',
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
      },
      icons: {
        icon: '/favicon.png',
        apple: '/yard-loop-icon.png',
        shortcut: '/favicon.png',
      },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large' }
      },
      alternates: { canonical: domain }
    }
  } catch {
    return {
      title: 'Yard Loop | One Plan. All Year. Total Peace of Mind.',
      description: 'Managed exterior home maintenance subscriptions for Omaha and Council Bluffs homeowners.',
      icons: { icon: '/favicon.png', apple: '/yard-loop-icon.png' },
    }
  }
}

export default async function RootLayout({ children }) {
  const content = await getContent()
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#071a2f" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/yard-loop-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <StyleInjector c={content} />
        {children}
      </body>
    </html>
  )
}
