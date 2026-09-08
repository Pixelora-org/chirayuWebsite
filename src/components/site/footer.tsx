import Link from 'next/link'
import { Facebook } from 'lucide-react'
import { navLinks, site } from '../../lib/site'
import { SmartImage } from './smart-image'

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-12 sm:mt-20 bg-zinc-50">
      <div className="container py-10 sm:py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm text-zinc-600">
        <div className="sm:col-span-2 min-w-0">
          <SmartImage
            src="/images/logo/logo.png"
            alt={site.name}
            width={200}
            height={70}
            sizes="200px"
            className="block h-12 sm:h-14 w-auto max-w-full object-contain mb-4"
          />
          <p className="mt-2 max-w-sm leading-relaxed">{site.description}</p>
          <p className="mt-3 text-zinc-800 font-medium">{site.address.line1}</p>
          <p>{site.address.line2}</p>
        </div>
        <div>
          <div className="font-semibold text-[#1b365d]">Navigate</div>
          <ul className="mt-3 space-y-2">
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
          <div className="font-semibold text-[#1b365d]">Contact</div>
          <ul className="mt-3 space-y-2">
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
            <li className="pt-2">
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
      <div className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-500 px-4">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
