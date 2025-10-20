import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Comfortaa, Nunito, Space_Grotesk, Varela_Round, Roboto_Flex } from 'next/font/google'
import { LenisProvider } from '@/components/providers/lenis-provider'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-comfortaa',
})

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

const varelaRound = Varela_Round({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-varela-round',
})

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
  style: 'normal',
})

export const metadata: Metadata = {
  title: 'Portfolio - [Your Name]',
  description: 'Full Stack Developer & Creative Problem Solver',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${comfortaa.variable} ${nunito.variable} ${spaceGrotesk.variable} ${varelaRound.variable} ${robotoFlex.variable} bg-white font-nunito`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
