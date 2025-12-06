"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from '../ui/button'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black shadow-lg">
      <nav className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo/logo.png" 
            alt="Chirayu Health Awareness & Research Centre" 
            width={120} 
            height={40} 
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-sm text-white hover:text-zinc-300 transition-colors font-medium">
              {l.label}
            </Link>
          ))}
          <Button size="sm" className="bg-white text-black hover:bg-zinc-200">Donate</Button>
        </div>
      </nav>
    </header>
  )
}


