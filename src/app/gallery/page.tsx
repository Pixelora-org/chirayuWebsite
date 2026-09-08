'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { PageShell } from '../../components/site/page-shell'
import { PageIntro } from '../../components/site/page-intro'
import { SmartImage } from '../../components/site/smart-image'
import { galleryPhotos } from '../../lib/site'
import { cn } from '../../lib/cn'

const spans = [
  'md:col-span-8 h-64 sm:h-80 md:h-[520px]',
  'md:col-span-4 h-64 sm:h-80 md:h-[520px]',
  'md:col-span-4 h-56 md:h-80',
  'md:col-span-4 h-56 md:h-80',
  'md:col-span-4 h-56 md:h-80',
  'md:col-span-6 h-56 md:h-[360px]',
  'md:col-span-6 h-56 md:h-[360px]',
  'md:col-span-4 h-56 md:h-72',
  'md:col-span-4 h-56 md:h-72',
  'md:col-span-4 h-56 md:h-72',
  'md:col-span-8 h-56 md:h-[380px]',
  'md:col-span-4 h-56 md:h-[380px]',
  'md:col-span-12 h-56 md:h-[400px]',
]

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null)
  const photo = active !== null ? galleryPhotos[active] : null

  return (
    <PageShell>
      <PageIntro kicker="Gallery" title="The camps, as they looked">
        Photographs from school screenings, village visits, and community programmes in Dharwad. Nothing here is stock.
      </PageIntro>

      <section className="pb-20 sm:pb-28">
        <div className="px-2 sm:px-3">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3">
            {galleryPhotos.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActive(i)}
                className={cn('group relative overflow-hidden text-left bg-zinc-200 min-w-0', spans[i] ?? 'md:col-span-4 h-56')}
              >
                <SmartImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  eager
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-x-0 bottom-0 p-3 sm:p-4 pt-10 bg-gradient-to-t from-black/65 to-transparent text-white">
                  <span className="block text-sm">{item.caption}</span>
                  <span className="block text-xs text-white/70 mt-0.5">{item.place}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {photo && (
        <div
          className="fixed inset-0 z-[80] bg-black/85 p-3 sm:p-8 flex items-center justify-center"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-3 right-3 sm:top-5 sm:right-5 h-10 w-10 text-white"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative w-full max-w-5xl h-[62vh] sm:h-[74vh]" onClick={(e) => e.stopPropagation()}>
            <SmartImage src={photo.src} alt={photo.alt} fill eager sizes="100vw" className="object-contain" />
            <div className="absolute bottom-0 inset-x-0 text-center text-white pb-2 px-3">
              <div className="font-display text-lg">{photo.caption}</div>
              <div className="text-sm text-white/70">{photo.place}</div>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  )
}
