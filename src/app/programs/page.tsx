'use client'

import Link from 'next/link'
import { PageShell } from '../../components/site/page-shell'
import { PageIntro } from '../../components/site/page-intro'
import { PhotoFigure } from '../../components/site/photo-figure'
import { Button } from '../../components/ui/button'
import { photos } from '../../lib/site'

const programs = [
  {
    n: '01',
    title: 'Health awareness programmes',
    description: 'Regular sessions so communities can recognise risk early and change what they can.',
    items: 'Diabetes and hypertension, anaemia and nutrition, women’s health, mental health, lifestyle disease, hygiene and infectious disease, school health education',
  },
  {
    n: '02',
    title: 'Community health screening',
    description: 'Free and affordable camps in villages, slums, schools, and workplaces.',
    items: 'Rural and remote locations, schools and colleges, senior groups, drivers and occupational workers, BP, blood sugar, ECG, anaemia, BMI, vision',
  },
  {
    n: '03',
    title: 'School health programmes',
    description: 'Early detection and prevention while children are still in the classroom.',
    items: 'Vision screening, growth assessment, nutrition and hygiene education, basic check-ups, mental health and stress awareness',
  },
  {
    n: '04',
    title: 'Women and adolescent health',
    description: 'Care that is often skipped because it is treated as private or secondary.',
    items: 'Anaemia screening, menstrual health, thyroid and vitamin deficiency, nutrition counselling, women’s health sessions',
  },
  {
    n: '05',
    title: 'Senior citizen health support',
    description: 'Monitoring for the conditions that accumulate with age.',
    items: 'ECG and cardiac risk, blood pressure and diabetes, mobility and bone health, chronic disease support, counselling',
  },
  {
    n: '06',
    title: 'Research and data',
    description: 'Community health notes that help us see patterns and plan the next camp more honestly.',
    items: 'Disease patterns, health planning, research support, programmes designed for a specific place rather than a generic template',
  },
]

export default function ProgramsPage() {
  return (
    <PageShell>
      <PageIntro kicker="Programs" title="The work, listed without the brochure language">
        Six lines of work, carried into schools, villages, and community halls across Dharwad.
      </PageIntro>

      <section className="pb-12 sm:pb-20">
        <PhotoFigure
          src={photos.programs}
          alt="Eye screening for an elderly community member"
          caption="Eye screening at a community camp"
          className="container-bleed"
          imgClassName="h-[58vw] max-h-[620px] min-h-[280px]"
          sizes="100vw"
          priority
        />
      </section>

      <section className="pb-8">
        <div className="container divide-y divide-zinc-200/90">
          {programs.map((program) => (
            <article key={program.n} className="grid md:grid-cols-12 gap-4 md:gap-10 py-10 md:py-14">
              <div className="md:col-span-1 font-display text-lg text-[#c5a046]">{program.n}</div>
              <div className="md:col-span-4">
                <h2 className="font-display text-2xl sm:text-3xl text-[#1b365d] leading-snug">{program.title}</h2>
              </div>
              <div className="md:col-span-7">
                <p className="text-zinc-700 leading-relaxed">{program.description}</p>
                <p className="mt-4 text-sm text-zinc-500 leading-relaxed">{program.items}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container">
          <h2 className="font-display text-3xl sm:text-4xl text-[#1b365d] max-w-2xl">
            Bring a programme to your school, workplace, or neighbourhood
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
            <Link href="/get-involved" className="text-sm text-[#1b365d] underline underline-offset-4 decoration-[#1b365d]/25 hover:text-[#c2185b]">
              Get involved
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
