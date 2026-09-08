"use client"
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../lib/site'
import { cn } from '../../lib/cn'
import { SmartImage } from './smart-image'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="h-px bg-gradient-to-r from-[#c5a046] via-[#c2185b] to-[#1b365d]" />
      <nav className="container flex items-center justify-between gap-4 h-16 sm:h-[4.5rem] lg:h-20">
        <Link
          href="/"
          className="flex items-center h-full min-w-0 shrink-0 py-2 sm:py-2.5 lg:py-3"
          onClick={() => setOpen(false)}
        >
          <SmartImage
            src="/images/logo/logo.png"
            alt="Chirayu Health Awareness & Research Centre"
            width={280}
            height={99}
            priority
            sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 240px"
            className="block h-full w-auto max-h-full object-contain object-left"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'text-[13px] tracking-[0.04em] transition-colors whitespace-nowrap',
                pathname === l.href ? 'text-[#c2185b]' : 'text-[#1b365d]/80 hover:text-[#c2185b]'
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 shrink-0 items-center justify-center text-[#1b365d]"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <div className="h-px bg-zinc-200/80" />

      {open && (
        <div className="lg:hidden border-b border-zinc-200 bg-white max-h-[calc(100dvh-4.5rem)] overflow-y-auto">
          <div className="container py-4 flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'py-3 text-sm border-b border-zinc-100 last:border-0',
                  pathname === l.href ? 'text-[#c2185b]' : 'text-[#1b365d]'
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
