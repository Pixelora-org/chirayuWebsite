'use client'

import Link from 'next/link'
import { Button } from '../components/ui/button'
import { PageShell } from '../components/site/page-shell'
import { SmartImage } from '../components/site/smart-image'
import { Heart, Users, Stethoscope, GraduationCap, Activity, Shield } from 'lucide-react'
import { photos } from '../lib/site'

const programs = [
  {
    icon: Stethoscope,
    title: 'Health Awareness Programs',
    description: 'Regular sessions on diabetes, hypertension, anaemia, women’s health, mental health, and lifestyle diseases.',
  },
  {
    icon: Activity,
    title: 'Community Health Screening',
    description: 'Free and affordable camps in villages, schools, and communities with comprehensive health checks.',
  },
  {
    icon: GraduationCap,
    title: 'School Health Programs',
    description: 'Vision screening, growth assessment, and nutrition education for students.',
  },
  {
    icon: Users,
    title: 'Women & Adolescent Health',
    description: 'Anaemia screening, menstrual health, thyroid screening, and nutrition counselling.',
  },
  {
    icon: Heart,
    title: 'Senior Citizen Health Support',
    description: 'ECG and cardiac risk screening, blood pressure monitoring, and check-ups for the elderly.',
  },
  {
    icon: Shield,
    title: 'Research & Data-Based Intervention',
    description: 'Community health data to identify disease patterns and design targeted programmes.',
  },
]

export default function HomePage() {
  return (
    <PageShell>
      <section className="relative min-h-[70svh] sm:min-h-[78dvh] flex items-end sm:items-center">
        <SmartImage
          src={photos.hero}
          alt="Chirayu health worker screening a school student"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b365d]/90 via-[#1b365d]/65 to-black/20" />
        <div className="container relative py-12 sm:py-20 md:py-24 text-white">
          <p className="brand-kicker text-white/80 mb-3 sm:mb-4">Dharwad, Karnataka</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold max-w-3xl text-balance leading-tight">
            Building a Healthier Society Through Awareness and Prevention
          </h1>
          <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
            Chirayu Health Awareness and Research Centre brings preventive healthcare closer to underserved communities in schools, villages, and neighbourhoods across Dharwad.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
            <Link href="/get-involved">
              <Button size="lg">Get Involved</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-14 items-center">
            <div className="min-w-0">
              <p className="brand-kicker mb-4">Who We Are</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#1b365d]">
                Chirayu Health Awareness and Research Centre
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
                <p>
                  A community-focused health organisation dedicated to improving public health through awareness, early detection, preventive care, and research-based interventions.
                </p>
                <p>
                  Based in <strong className="text-zinc-800">Dharwad, Karnataka</strong>, we work with schools, rural communities, senior citizen groups, occupational workers, NGOs, and government organisations so preventive healthcare reaches those who need it most.
                </p>
              </div>
              <Link href="/about">
                <Button className="mt-6 sm:mt-8" variant="outline">View More</Button>
              </Link>
            </div>
            <div className="relative w-full h-56 sm:h-80 md:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden soft-shadow">
              <SmartImage
                src={photos.whoWeAre}
                alt="Chirayu team on a rural health outreach visit"
                fill
                eager
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[#faf7f4]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
            {[
              {
                icon: Heart,
                title: 'Our Mission',
                text: 'To promote health, prevent diseases, and empower communities through awareness, early screening, community outreach, and research-based programmes, so healthcare stays accessible for all.',
              },
              {
                icon: Shield,
                title: 'Our Vision',
                text: 'A healthier society where every individual, regardless of socio-economic background, has the knowledge, access, and opportunity to maintain good health and prevent avoidable diseases.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border border-zinc-200 p-5 sm:p-8 soft-shadow">
                <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#c2185b]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#1b365d]">{item.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-10 sm:mb-14">
            <p className="brand-kicker mb-3">What We Do</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b365d] mb-3">Programmes that reach communities</h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
              Preventive care across Dharwad and surrounding areas, shown through real camp photographs rather than repeated stock images.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {programs.map((program) => (
              <article
                key={program.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-7 hover:border-[#c2185b]/30 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-full bg-[#1b365d]/10 flex items-center justify-center mb-4 text-[#1b365d]">
                  <program.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#1b365d]">{program.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{program.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 sm:mt-12 text-center">
            <Link href="/programs">
              <Button size="lg" variant="outline">View All Programs</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[#1b365d] text-white">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Our Impact</h2>
            <p className="text-white/75">Reaching communities across Dharwad, Karnataka</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              { number: '1000+', label: 'Health Camps Organized' },
              { number: '50+', label: 'Rural Communities Reached' },
              { number: '25+', label: 'Schools and Colleges' },
              { number: '5000+', label: 'Individuals Screened' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-8 text-center">
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#e8c56b] mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-white/80 font-medium text-xs sm:text-base leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl sm:rounded-3xl border border-zinc-200 p-6 sm:p-10 md:p-12 bg-[#faf7f4] text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#1b365d]">Join us in building a healthier community</h3>
            <p className="text-base sm:text-lg text-zinc-600 mb-8">
              Partner with Chirayu to bring preventive healthcare to underserved communities. Call, write, or visit us in Dharwad.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link href="/gallery">
                <Button variant="outline" size="lg">See Our Work</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
