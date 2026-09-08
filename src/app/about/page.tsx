'use client'

import { PageShell } from '../../components/site/page-shell'
import { PageIntro } from '../../components/site/page-intro'
import { PhotoFigure } from '../../components/site/photo-figure'
import { photos } from '../../lib/site'

const places = [
  'Rural villages and tribal areas',
  'Urban slum communities',
  'Schools and colleges',
  'Senior citizen groups',
  'Occupational workers and drivers',
  'Women and adolescent groups',
]

const principles = [
  { title: 'Find it early', text: 'Screening and awareness before illness has a long head start.' },
  { title: 'Stay with the community', text: 'Awareness, screening, counselling, and referral, not a one-day visit that disappears.' },
  { title: 'Work with others', text: 'Local leaders, NGOs, schools, and health professionals, because one centre cannot cover a district alone.' },
]

export default function AboutPage() {
  return (
    <PageShell>
      <PageIntro kicker="About" title="A health centre that goes out, instead of waiting in">
        Chirayu works from Jayanagar, Dharwad, to put awareness, early detection, and prevention within reach of people who are usually last to be seen.
      </PageIntro>

      <section className="pb-16 sm:pb-24">
        <PhotoFigure
          src={photos.about}
          alt="Chirayu health worker screening a school student"
          caption="School health screening, Dharwad"
          className="container-bleed"
          imgClassName="h-[58vw] max-h-[640px] min-h-[280px]"
          imageClassName="object-[center_70%]"
          sizes="100vw"
          priority
        />
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container grid lg:grid-cols-12 gap-10 lg:gap-16">
          <h2 className="lg:col-span-4 font-display text-3xl sm:text-4xl text-[#1b365d] leading-tight">
            Who we are
          </h2>
          <div className="lg:col-span-8 space-y-5 text-zinc-600 leading-relaxed text-base sm:text-lg max-w-2xl">
            <p>
              Chirayu Health Awareness and Research Centre is a community health organisation. The work is practical: camps, classrooms, village visits, and the slow job of helping people notice a problem while it is still small.
            </p>
            <p>
              We collaborate with schools, colleges, rural communities, slum areas, senior groups, occupational workers, NGOs, and government organisations around Dharwad and Hubli.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-y border-zinc-200/80 bg-white/40">
        <div className="container grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="brand-kicker mb-4">Mission</p>
            <p className="font-display text-2xl sm:text-3xl text-[#1b365d] leading-snug">
              Promote health, prevent disease, and keep care accessible through awareness, screening, outreach, and research.
            </p>
          </div>
          <div>
            <p className="brand-kicker mb-4">Vision</p>
            <p className="font-display text-2xl sm:text-3xl text-[#1b365d] leading-snug">
              A society where background does not decide whether someone gets the knowledge and chance to stay well.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="brand-kicker mb-4">Where we work</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1b365d] leading-tight">
              From Jayanagar into the district
            </h2>
            <p className="mt-5 text-zinc-600 leading-relaxed">
              The office is at Jayanagar 2nd Cross, Dharwad, 580 007. Programmes run in rural and urban pockets of Dharwad and Hubli.
            </p>
          </div>
          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-3 text-zinc-700 content-start">
            {places.map((item) => (
              <li key={item} className="border-t border-zinc-200/90 pt-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container">
          <p className="brand-kicker mb-4">How we work</p>
          <h2 className="font-display text-3xl sm:text-4xl text-[#1b365d] mb-12 max-w-xl">Three habits we try to keep</h2>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {principles.map((item, i) => (
              <div key={item.title}>
                <div className="font-display text-[#c5a046] text-xl mb-3">0{i + 1}</div>
                <h3 className="font-display text-2xl text-[#1b365d] mb-3">{item.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
