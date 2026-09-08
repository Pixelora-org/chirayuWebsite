'use client'

import { PageShell } from '../../components/site/page-shell'
import { SmartImage } from '../../components/site/smart-image'
import { MapPin, Users, Target, Heart, Shield, Lightbulb } from 'lucide-react'
import { photos } from '../../lib/site'

export default function AboutPage() {
  return (
    <PageShell>
      <section className="py-10 sm:py-16 md:py-20 bg-[#faf7f4] border-b border-zinc-200">
        <div className="container">
          <p className="brand-kicker mb-3">About</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#1b365d]">
            About Chirayu
          </h1>
          <p className="text-base sm:text-xl text-zinc-600 max-w-3xl leading-relaxed">
            A community-focused health organisation dedicated to improving public health through awareness, early detection, preventive care, and research-based interventions.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-14 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#1b365d]">Who We Are</h2>
              <div className="space-y-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
                <p>
                  <strong className="text-zinc-800">Chirayu Health Awareness and Research Centre</strong> works to bring quality healthcare closer to underserved communities and to empower people with the knowledge to lead healthier lives.
                </p>
                <p>
                  We collaborate with schools, colleges, rural communities, slum areas, senior citizen groups, occupational workers, NGOs, and government organisations.
                </p>
              </div>
            </div>
            <div className="relative w-full h-56 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden soft-shadow">
              <SmartImage
                src={photos.about}
                alt="Chirayu school health camp with students"
                fill
                eager
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[#faf7f4]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
            <div className="rounded-2xl bg-white border border-zinc-200 p-5 sm:p-8">
              <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-[#c2185b]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#1b365d]">Our Mission</h3>
              <p className="text-zinc-600 leading-relaxed">
                To promote health, prevent diseases, and empower communities through awareness, early screening, community outreach, and research-based programmes, ensuring accessible and equitable healthcare for all.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-zinc-200 p-5 sm:p-8">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-5">
                <Shield className="w-6 h-6 text-[#1b365d]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#1b365d]">Our Vision</h3>
              <p className="text-zinc-600 leading-relaxed">
                To build a healthier society where every individual, regardless of socio-economic background, has the knowledge, access, and opportunity to maintain good health and prevent avoidable diseases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container max-w-3xl">
          <div className="flex items-start sm:items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-[#c2185b]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b365d]">Where We Work</h2>
          </div>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-6">
            Chirayu is based at <strong className="text-zinc-800">Jayanagar 2nd Cross, Dharwad, 580 007</strong>, Karnataka. Programmes run in rural and urban areas in and around Dharwad and Hubli.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-zinc-700">
            {[
              'Rural villages and tribal areas',
              'Urban slum communities',
              'Schools and colleges',
              'Senior citizen groups',
              'Occupational workers and drivers',
              'Women and adolescent groups',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#c2185b] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[#faf7f4]">
        <div className="container">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#1b365d]">Our Approach</h2>
            <p className="text-base sm:text-lg text-zinc-600">Community-centric, preventive, and data-driven</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              { icon: Lightbulb, title: 'Early Detection', description: 'Early detection leads to early treatment and healthier communities.' },
              { icon: Users, title: 'Community Engagement', description: 'Awareness, screening, counselling, and referral support together.' },
              { icon: Heart, title: 'Collaboration', description: 'Working with local leaders, NGOs, institutions, and health professionals.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 text-center">
                <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#c2185b]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1b365d]">{item.title}</h3>
                <p className="text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center text-[#1b365d]">Why Choose Chirayu</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Community-focused approach',
              'Affordable and accessible services',
              'Experienced health team',
              'Trusted by local communities',
              'Research-based planning',
              'Transparent and ethical approach',
            ].map((item) => (
              <div key={item} className="rounded-xl border border-zinc-200 p-5 bg-zinc-50">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#c2185b] rounded-full shrink-0" />
                  <span className="font-medium text-zinc-900">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
