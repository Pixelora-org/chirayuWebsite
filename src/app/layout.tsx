import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chirayu Health Awareness & Research Centre | Dharwad, Karnataka',
  description: 'Community-focused health organization dedicated to improving public health through awareness, early detection, preventive care, and research-based interventions in Dharwad, Karnataka.',
  metadataBase: new URL('https://chirayu.org'),
  openGraph: { 
    title: 'Chirayu Health Awareness & Research Centre', 
    description: 'Building a healthier society through awareness, prevention, and community care.',
    type: 'website' 
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  )
}



