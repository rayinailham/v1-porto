import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Poppins, Dancing_Script, Roboto_Flex } from 'next/font/google'
import { LenisProvider } from '@/components/providers/lenis-provider'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-dancing-script',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
  style: 'normal',
  axes: ['GRAD', 'opsz', 'slnt', 'wdth', 'XTRA', 'YOPQ', 'YTAS', 'YTDE', 'YTFI', 'YTLC', 'YTUC'],
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
      <body className={`${dancingScript.variable} ${poppins.variable} ${robotoFlex.variable} bg-black font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
