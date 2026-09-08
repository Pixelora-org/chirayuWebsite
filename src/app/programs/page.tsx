'use client'

import Link from 'next/link'
import { PageShell } from '../../components/site/page-shell'
import { Button } from '../../components/ui/button'
import { SmartImage } from '../../components/site/smart-image'
import { Stethoscope, Activity, GraduationCap, Users, Heart, Shield } from 'lucide-react'
import { photos } from '../../lib/site'

const programs = [
  {
    icon: Stethoscope,
    title: 'Health Awareness Programs',
    description: 'Regular awareness sessions to educate communities and prevent disease.',
    items: [
      'Diabetes & Hypertension',
      'Anaemia & Nutrition',
      'Women’s Health',
      'Mental Health',
      'Lifestyle Diseases',
      'Hygiene, Sanitation & Infectious Diseases',
      'School Health Education',
    ],
    heading: 'Awareness topics',
  },
  {
    icon: Activity,
    title: 'Community Health Screening',
    description: 'Free and affordable screening camps in villages, slums, schools, and workplaces.',
    items: [
      'Rural villages & remote locations',
      'Schools & colleges',
      'Senior citizen groups',
      'Driver & occupational worker groups',
      'BP, blood sugar, ECG',
      'Anaemia, BMI, vision check',
    ],
    heading: 'Where and what we screen',
  },
  {
    icon: GraduationCap,
    title: 'School Health Programs',
    description: 'Early detection and preventive care for students.',
    items: [
      'Vision screening',
      'Growth assessment',
      'Nutrition & hygiene education',
      'Basic health check-ups',
      'Mental health and stress awareness',
    ],
    heading: 'Services',
  },
  {
    icon: Users,
    title: 'Women & Adolescent Health',
    description: 'Programmes focused on women’s health, adolescent care, and preventive screening.',
    items: [
      'Anaemia screening',
      'Menstrual health and hygiene',
      'Thyroid & vitamin deficiency screening',
      'Nutrition counselling',
      'Women’s health awareness sessions',
    ],
    heading: 'Services',
  },
  {
    icon: Heart,
    title: 'Senior Citizen Health Support',
    description: 'Support for elderly community members, including chronic disease monitoring.',
    items: [
      'ECG & cardiac risk screening',
      'Blood pressure & diabetes monitoring',
      'Mobility, bone health & general check-ups',
      'Chronic disease management',
      'Health counselling for seniors',
    ],
    heading: 'Services',
  },
  {
    icon: Shield,
    title: 'Research & Data-Based Intervention',
    description: 'Community health data to identify patterns and design better programmes.',
    items: [
      'Identify disease patterns',
      'Improve health planning',
      'Support research and publications',
      'Help organisations design targeted programmes',
    ],
    heading: 'Activities',
  },
]

export default function ProgramsPage() {
  return (
    <PageShell>
      <section className="py-10 sm:py-16 md:py-20 bg-[#faf7f4] border-b border-zinc-200">
        <div className="container">
          <p className="brand-kicker mb-3">Programs</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#1b365d]">Our Programs and Projects</h1>
          <p className="text-base sm:text-xl text-zinc-600 max-w-3xl">
            Comprehensive health programmes reaching communities across Dharwad, Karnataka.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="container">
          <div className="relative w-full h-56 sm:h-80 md:h-[460px] rounded-2xl overflow-hidden soft-shadow mb-10 sm:mb-16">
            <SmartImage
              src={photos.programs}
              alt="Eye screening for an elderly community member"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
              <p className="text-xs sm:text-sm uppercase tracking-wide text-white/80">From our camps</p>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">Vision and general screening for seniors and communities</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {programs.map((program) => (
              <article
                key={program.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-8"
              >
                <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center mb-4 text-[#c2185b]">
                  <program.icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2 text-[#1b365d]">{program.title}</h2>
                <p className="text-zinc-600 mb-5 leading-relaxed">{program.description}</p>
                <h3 className="font-semibold text-zinc-900 mb-2 text-sm uppercase tracking-wide">{program.heading}</h3>
                <ul className="space-y-1.5">
                  {program.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-zinc-600 text-sm">
                      <span className="text-[#c2185b] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[#faf7f4]">
        <div className="container text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#1b365d]">Partner With Us</h2>
          <p className="text-base sm:text-lg text-zinc-600 mb-8">
            Interested in bringing our health programmes to your school, workplace, or community? Get in touch.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
            <Link href="/get-involved">
              <Button variant="outline" size="lg">Get Involved</Button>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
