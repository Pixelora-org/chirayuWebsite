'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { PageShell } from '../../components/site/page-shell'
import { SmartImage } from '../../components/site/smart-image'
import { galleryPhotos } from '../../lib/site'

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null)
  const photo = active !== null ? galleryPhotos[active] : null

  return (
    <PageShell>
      <section className="py-10 sm:py-16 md:py-20 bg-[#faf7f4] border-b border-zinc-200">
        <div className="container">
          <p className="brand-kicker mb-3">Gallery</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#1b365d]">Our Work in Pictures</h1>
          <p className="text-base sm:text-xl text-zinc-600 max-w-3xl">
            Real photographs from Chirayu health camps, school screenings, and community programmes in Dharwad.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {galleryPhotos.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActive(i)}
                className="group text-left rounded-2xl overflow-hidden border border-zinc-200 bg-white soft-shadow min-w-0"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <SmartImage
                    src={item.src}
                    alt={item.alt}
                    fill
                    eager
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="font-semibold text-[#1b365d]">{item.caption}</div>
                  <div className="text-sm text-zinc-500 mt-0.5">{item.place}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {photo && (
        <div
          className="fixed inset-0 z-[80] bg-black/80 p-3 sm:p-6 md:p-10 flex items-center justify-center"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative w-full max-w-5xl h-[60vh] sm:h-[70vh]" onClick={(e) => e.stopPropagation()}>
            <SmartImage src={photo.src} alt={photo.alt} fill eager sizes="100vw" className="object-contain" />
            <div className="absolute bottom-0 inset-x-0 text-center text-white pb-2 px-3">
              <div className="font-medium">{photo.caption}</div>
              <div className="text-sm text-white/70">{photo.place}</div>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  )
}
