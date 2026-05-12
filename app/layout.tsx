import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { SmoothScrollProvider } from '@/providers/smooth-scroll-provider'
import { CustomCursor } from '@/components/custom-cursor'
import { Navbar } from '@/components/navbar'
import { PageTransition } from '@/components/page-transition'
import { ScrollProgress } from '@/components/scroll-progress'
import { LanguageProvider } from '@/providers/language-provider'
import { ScrollToTop } from '@/components/scroll-to-top'

export const metadata: Metadata = {
  title: 'Seydina Mouhammad Diop — UI/UX Designer & FullStack Developer',
  description: 'Building modern digital experiences for startups, SaaS platforms and ambitious brands. Product Designer, DesignOps specialist, and Creative Technologist based in Dakar.',
  keywords: ['UI/UX Designer', 'FullStack Developer', 'Product Designer', 'Design Systems', 'SaaS', 'Next.js', 'React', 'Senegal', 'Dakar'],
  authors: [{ name: 'Seydina Mouhammad Diop' }],
  creator: 'Seydina Mouhammad Diop',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Seydina Mouhammad Diop — UI/UX Designer & FullStack Developer',
    description: 'Building modern digital experiences for startups, SaaS platforms and ambitious brands.',
    siteName: 'Seydina Diop',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seydina Mouhammad Diop — UI/UX Designer & FullStack Developer',
    description: 'Building modern digital experiences for startups, SaaS platforms and ambitious brands.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden bg-background text-foreground">
        <LanguageProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <ScrollProgress />
            <Navbar />
            <ScrollToTop />
            <PageTransition>
              {children}
            </PageTransition>
          </SmoothScrollProvider>
        </LanguageProvider>

      </body>
    </html>
  )
}
