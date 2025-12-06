import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-20">
      <div className="container py-10 grid gap-8 md:grid-cols-3 text-sm text-zinc-600">
        <div>
          <Image 
            src="/images/logo/logo.png" 
            alt="Chirayu Health Awareness & Research Centre" 
            width={150} 
            height={50} 
            className="h-12 w-auto object-contain mb-4"
          />
          <p className="mt-2">Building a healthier society through awareness, prevention, and community care.</p>
          <p className="mt-2 text-sm">Dharwad, Karnataka, India</p>
        </div>
        <div>
          <div className="font-medium text-zinc-900">Navigate</div>
          <ul className="mt-2 space-y-1">
            <li><Link href="/about" className="hover:text-zinc-900">About</Link></li>
            <li><Link href="/programs" className="hover:text-zinc-900">Programs</Link></li>
            <li><Link href="/get-involved" className="hover:text-zinc-900">Get Involved</Link></li>
            <li><Link href="/contact" className="hover:text-zinc-900">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-zinc-900">Follow</div>
          <p className="mt-2">Twitter · Instagram · LinkedIn</p>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-500">© 2024 Chirayu Health Awareness & Research Centre. All rights reserved.</div>
    </footer>
  )
}



