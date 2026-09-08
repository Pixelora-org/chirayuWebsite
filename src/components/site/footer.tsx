import Link from 'next/link'
import { Facebook } from 'lucide-react'
import { navLinks, site } from '../../lib/site'
import { SmartImage } from './smart-image'

export function Footer() {
  return (
    <footer className="mt-8 sm:mt-16 border-t border-zinc-200/80 bg-white">
      <div className="container py-12 sm:py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-sm text-zinc-600">
        <div className="sm:col-span-2 min-w-0">
          <SmartImage
            src="/images/logo/logo.png"
            alt={site.name}
            width={200}
            height={70}
            sizes="200px"
            className="block h-12 sm:h-14 w-auto max-w-full object-contain mb-5"
          />
          <p className="max-w-sm leading-relaxed">{site.description}</p>
          <p className="mt-4 text-zinc-800">{site.address.line1}</p>
          <p>{site.address.line2}</p>
        </div>
        <div>
          <div className="font-display text-[#1b365d] text-lg">Navigate</div>
          <ul className="mt-4 space-y-2">
            {navLinks.filter((l) => l.href !== '/').map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[#c2185b]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <div className="font-display text-[#1b365d] text-lg">Contact</div>
          <ul className="mt-4 space-y-2">
            {site.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="hover:text-[#c2185b]">
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-[#c2185b] break-all">
                {site.email}
              </a>
            </li>
            <li className="pt-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#c2185b]"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container py-5 border-t border-zinc-200/80 text-xs text-zinc-500">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  )
}
