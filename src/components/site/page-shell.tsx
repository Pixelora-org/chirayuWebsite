'use client'

import { Navbar } from './navbar'
import { Footer } from './footer'

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[66px] sm:pt-[74px] lg:pt-[82px] min-w-0">{children}</main>
      <Footer />
    </div>
  )
}
