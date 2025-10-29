import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Nunito, Space_Grotesk } from 'next/font/google'
import { LenisProvider } from '@/components/providers/lenis-provider'
import Navbar from '@/components/ui/navbar'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Portfolio - Rayin993',
  description: 'Full Stack Developer & Creative Problem Solver',
  icons: {
    icon: '/image-trails/Suichan image 4.webp',
    shortcut: '/image-trails/Suichan image 4.webp',
    apple: '/image-trails/Suichan image 4.webp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} ${spaceGrotesk.variable} bg-white font-nunito`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LenisProvider>
            <Navbar />
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
