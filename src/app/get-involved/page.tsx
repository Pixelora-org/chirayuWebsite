'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { PageShell } from '../../components/site/page-shell'
import { Button } from '../../components/ui/button'
import { SmartImage } from '../../components/site/smart-image'
import { Users, Handshake } from 'lucide-react'
import { photos } from '../../lib/site'

const fieldClass =
  'h-12 w-full rounded-lg border border-zinc-300 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#c2185b]/40'

export default function GetInvolvedPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onVolunteerSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'volunteer',
          name: String(data.get('name') || ''),
          email: String(data.get('email') || ''),
          phone: String(data.get('phone') || ''),
          interest: String(data.get('interest') || ''),
          message: String(data.get('message') || ''),
          company: String(data.get('company') || ''),
        }),
      })
      const json = await res.json()
      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Could not send the enquiry.')
      }
      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Could not send the enquiry.')
    }
  }
  return (
    <PageShell>
      <section className="py-10 sm:py-16 md:py-20 bg-[#faf7f4] border-b border-zinc-200">
        <div className="container">
          <p className="brand-kicker mb-3">Get Involved</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#1b365d]">Join the work</h1>
          <p className="text-base sm:text-xl text-zinc-600 max-w-3xl">
            Volunteer or partner with Chirayu to bring preventive healthcare to more communities in Dharwad.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="container">
          <div className="relative w-full h-56 sm:h-80 md:h-[440px] rounded-2xl overflow-hidden soft-shadow mb-8 sm:mb-14">
            <SmartImage
              src={photos.getInvolved}
              alt="Community programme with Chirayu Health Awareness and Research Centre"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 items-stretch max-w-4xl mx-auto">
            {[
              {
                icon: Users,
                title: 'Volunteer',
                description: 'Give time and skills, whether you are a medical professional, student, or community member.',
                points: ['Medical professionals welcome', 'Camp organisation', 'Community outreach'],
              },
              {
                icon: Handshake,
                title: 'Partner',
                description: 'Bring Chirayu programmes to your school, workplace, or organisation and help us reach more people.',
                points: ['School health programmes', 'Workplace screening', 'NGO collaborations'],
              },
            ].map((item) => (
              <article key={item.title} className="h-full flex flex-col rounded-2xl border border-zinc-200 p-5 sm:p-7 bg-white">
                <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center mb-4 text-[#c2185b]">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#1b365d]">{item.title}</h3>
                <p className="text-zinc-600 leading-relaxed min-h-[4.75rem]">{item.description}</p>
                <ul className="space-y-2 mt-5 mb-6 flex-1">
                  {item.points.map((p) => (
                    <li key={p} className="text-sm text-zinc-600 flex gap-2">
                      <span className="text-[#c2185b]">•</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-auto block">
                  <Button className="w-full" variant="outline">Talk to us</Button>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[#faf7f4]">
        <div className="container max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#1b365d]">Become a volunteer</h2>
          <p className="text-zinc-600 mb-8 leading-relaxed">
            Send us your name, phone, and how you would like to help. We will get back to you.
          </p>
          <form className="space-y-4" onSubmit={onVolunteerSubmit}>
            <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <input name="name" required placeholder="Full name" className={fieldClass} />
            <input name="email" type="email" required placeholder="Email address" className={fieldClass} />
            <input name="phone" type="tel" required placeholder="Phone number" className={fieldClass} />
            <select name="interest" required defaultValue="" className={`${fieldClass} text-zinc-700`}>
              <option value="" disabled>
                Area of interest
              </option>
              <option value="Medical">Medical</option>
              <option value="Outreach">Outreach</option>
              <option value="Data">Data</option>
              <option value="Events">Events</option>
            </select>
            <textarea
              name="message"
              required
              placeholder="A short note about yourself and how you would like to help"
              rows={5}
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#c2185b]/40 resize-none"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full h-12 rounded-full bg-[#c2185b] text-white font-semibold hover:bg-[#9c1249] transition-colors disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send enquiry'}
            </button>
            {status === 'sent' && (
              <p className="text-sm text-green-700 text-center">Thank you. Your volunteer enquiry has been sent to Chirayu.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}
          </form>
        </div>
      </section>
    </PageShell>
  )
}
