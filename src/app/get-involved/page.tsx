'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { PageShell } from '../../components/site/page-shell'
import { PageIntro } from '../../components/site/page-intro'
import { PhotoFigure } from '../../components/site/photo-figure'
import { photos } from '../../lib/site'

const paths = [
  {
    title: 'Volunteer',
    description: 'Give time and skills, whether you are a medical professional, student, or neighbour who can help a camp run.',
    points: ['Medical professionals', 'Camp organisation', 'Community outreach'],
  },
  {
    title: 'Partner',
    description: 'Invite Chirayu into a school, workplace, or organisation so screening and awareness reach more people in one day.',
    points: ['School programmes', 'Workplace screening', 'NGO collaborations'],
  },
]

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
      <PageIntro kicker="Get Involved" title="The work is larger than one team">
        Volunteer a day, or open a school or workplace so Chirayu can come in. Either way, write to us from this page.
      </PageIntro>

      <section className="pb-16 sm:pb-24">
        <PhotoFigure
          src={photos.getInvolved}
          alt="Schoolgirls gathered around a Chirayu health camp table"
          caption="School health camp, Dharwad"
          className="container-bleed"
          imgClassName="h-[58vw] max-h-[600px] min-h-[280px]"
          sizes="100vw"
          priority
        />
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container grid md:grid-cols-2 gap-12 md:gap-20">
          {paths.map((item) => (
            <article key={item.title}>
              <h2 className="font-display text-3xl text-[#1b365d]">{item.title}</h2>
              <div className="gold-rule my-5" />
              <p className="text-zinc-600 leading-relaxed">{item.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-600">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block mt-8 text-sm text-[#c2185b] underline underline-offset-4 decoration-[#c2185b]/30 hover:decoration-[#c2185b]">
                Talk to us
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl text-[#1b365d] mb-3">Become a volunteer</h2>
          <p className="text-zinc-600 mb-10 leading-relaxed">
            Send your name, phone, and how you would like to help. We will write back.
          </p>
          <form className="space-y-5" onSubmit={onVolunteerSubmit}>
            <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <input name="name" required placeholder="Full name" className="field" />
            <input name="email" type="email" required placeholder="Email address" className="field" />
            <input name="phone" type="tel" required placeholder="Phone number" className="field" />
            <select name="interest" required defaultValue="" className="field text-zinc-700">
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
              className="field"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-4 h-12 px-8 rounded-full bg-[#c2185b] text-white font-medium hover:bg-[#9c1249] transition-colors disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send enquiry'}
            </button>
            {status === 'sent' && (
              <p className="text-sm text-green-700">Thank you. Your volunteer enquiry has been sent to Chirayu.</p>
            )}
            {status === 'error' && <p className="text-sm text-red-600">{error}</p>}
          </form>
        </div>
      </section>
    </PageShell>
  )
}
