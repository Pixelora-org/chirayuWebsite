import type { Metadata } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-serif-family',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chirayu Health Awareness & Research Centre | Dharwad, Karnataka',
  description: 'Community-focused health organization dedicated to improving public health through awareness, early detection, preventive care, and research-based interventions in Dharwad, Karnataka.',
  metadataBase: new URL('https://ngowebsite-zeta.vercel.app'),
  openGraph: {
    title: 'Chirayu Health Awareness & Research Centre',
    description: 'Building a healthier society through awareness, prevention, and community care.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sourceSerif.variable} min-h-dvh bg-[#f7f4ef] text-zinc-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}
