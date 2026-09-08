import Link from 'next/link'
import { Button } from '../components/ui/button'
import { PageShell } from '../components/site/page-shell'
import { PhotoFigure } from '../components/site/photo-figure'
import { SmartImage } from '../components/site/smart-image'
import { galleryPhotos, photos } from '../lib/site'

const featuredPrograms = [
  {
    n: '01',
    title: 'Community health screening',
    description: 'Free and affordable camps in villages, schools, and neighbourhoods, with checks that catch problems early.',
  },
  {
    n: '02',
    title: 'School health programmes',
    description: 'Vision screening, growth assessment, and nutrition education so children are seen before small issues become larger ones.',
  },
  {
    n: '03',
    title: 'Women and senior care',
    description: 'Anaemia, menstrual health, thyroid screening, and cardiac checks for the people who are often last in line.',
  },
]

const campPhotos = [galleryPhotos[4], galleryPhotos[2], galleryPhotos[6]]

export default function HomePage() {
  return (
    <PageShell>
      <section className="relative min-h-[64svh] sm:min-h-[72dvh] flex items-end">
        <PhotoFigure
          src={photos.hero}
          alt="Community programme with the Chirayu banner in Dharwad"
          className="absolute inset-0 h-full"
          imgClassName="h-full"
          imageClassName="object-[center_42%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        <div className="container relative pb-10 sm:pb-14 md:pb-16 pt-24 text-white">
          <p className="brand-kicker text-white/85 mb-4">Dharwad, Karnataka</p>
          <h1 className="font-display text-[2.35rem] sm:text-5xl md:text-7xl font-semibold max-w-4xl text-balance leading-[1.08]">
            Healthcare that arrives before illness does
          </h1>
          <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-white/90 leading-relaxed">
            Chirayu brings awareness, screening, and prevention into schools, villages, and neighbourhoods across Dharwad.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-5">
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
            <Link href="/gallery" className="text-sm text-white underline underline-offset-4 decoration-white/40 hover:decoration-white">
              See the camps
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-28 overflow-hidden">
        <div className="container grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-5 min-w-0">
            <p className="brand-kicker mb-4">Who we are</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-[#1b365d] leading-tight text-balance">
              A small centre, working where care is usually late
            </h2>
            <div className="gold-rule mt-6 mb-6" />
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                Chirayu Health Awareness and Research Centre is based in Dharwad. We focus on awareness, early detection, and community programmes, not waiting rooms that people never reach.
              </p>
              <p>
                We work with schools, rural communities, senior groups, occupational workers, NGOs, and local institutions so preventive care shows up in ordinary places.
              </p>
            </div>
            <Link href="/about" className="inline-block mt-8 text-sm text-[#c2185b] underline underline-offset-4 decoration-[#c2185b]/30 hover:decoration-[#c2185b]">
              Read about Chirayu
            </Link>
          </div>
          <PhotoFigure
            src={photos.whoWeAre}
            alt="Chirayu team on a rural health outreach visit"
            className="lg:col-span-7 lg:-mr-[max(1.25rem,calc((100vw-1180px)/2+2rem))]"
            imgClassName="h-64 sm:h-[420px] lg:h-[560px]"
            sizes="(max-width: 1024px) 100vw, 60vw"
            eager
          />
        </div>
      </section>

      <section className="pb-16 sm:pb-24 md:pb-28">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 sm:mb-16">
            <div>
              <p className="brand-kicker mb-3">What we do</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1b365d] text-balance">
                Programmes that travel
              </h2>
            </div>
            <Link href="/programs" className="text-sm text-[#c2185b] underline underline-offset-4 decoration-[#c2185b]/30 hover:decoration-[#c2185b]">
              All programmes
            </Link>
          </div>
          <div className="divide-y divide-zinc-200/90">
            {featuredPrograms.map((program) => (
              <article key={program.n} className="grid sm:grid-cols-12 gap-3 sm:gap-8 py-8 sm:py-10">
                <div className="sm:col-span-2 font-display text-xl text-[#c5a046]">{program.n}</div>
                <h3 className="sm:col-span-4 font-display text-2xl text-[#1b365d] leading-snug">{program.title}</h3>
                <p className="sm:col-span-6 text-zinc-600 leading-relaxed">{program.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container mb-6 sm:mb-8">
          <p className="brand-kicker mb-3">From the camps</p>
          <h2 className="font-display text-3xl sm:text-4xl text-[#1b365d]">The work, as it looks</h2>
        </div>
        <div className="container">
          <Link href="/gallery" className="grid md:grid-cols-12 gap-2 sm:gap-3 group">
            <div className="relative md:col-span-7 h-56 sm:h-80 md:h-[440px] overflow-hidden bg-zinc-200">
              <SmartImage
                src={campPhotos[0].src}
                alt={campPhotos[0].alt}
                fill
                eager
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="md:col-span-5 grid grid-rows-2 gap-2 sm:gap-3">
              {campPhotos.slice(1).map((item) => (
                <div key={item.src} className="relative h-44 sm:h-52 md:h-auto overflow-hidden bg-zinc-200">
                  <SmartImage
                    src={item.src}
                    alt={item.alt}
                    fill
                    eager
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </Link>
          <div className="mt-8">
            <Link href="/gallery">
              <Button size="lg">Full gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1b365d] text-balance max-w-3xl">
            Write to us in Dharwad
          </h2>
          <p className="mt-5 max-w-xl text-zinc-600 leading-relaxed">
            Bring a programme to a school or workplace, or ask how to help on a camp day.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
