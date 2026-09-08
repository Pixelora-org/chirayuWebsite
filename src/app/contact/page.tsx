'use client'

import { FormEvent, useState } from 'react'
import { PageShell } from '../../components/site/page-shell'
import { PageIntro } from '../../components/site/page-intro'
import { PhotoFigure } from '../../components/site/photo-figure'
import { mapsEmbedUrl, photos, site } from '../../lib/site'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
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
          name: String(data.get('name') || ''),
          email: String(data.get('email') || ''),
          phone: String(data.get('phone') || ''),
          message: String(data.get('message') || ''),
          company: String(data.get('company') || ''),
        }),
      })
      const json = await res.json()
      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Could not send the message.')
      }
      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Could not send the message.')
    }
  }

  return (
    <PageShell>
      <PageIntro kicker="Contact" title="Write, call, or come to Jayanagar">
        Partnerships, health camps, and general enquiries all come to the same desk.
      </PageIntro>

      <section className="pb-12 sm:pb-16">
        <PhotoFigure
          src={photos.contact}
          alt="Chirayu health camp in Dharwad"
          caption="Yoga Day health camp, Dharwad"
          className="container-bleed"
          imgClassName="h-[48vw] max-h-[480px] min-h-[240px]"
          sizes="100vw"
          priority
        />
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5 min-w-0">
            <h2 className="font-display text-3xl text-[#1b365d] mb-8">Get in touch</h2>
            <dl className="space-y-8 text-zinc-600">
              <div className="border-t border-zinc-200/90 pt-4">
                <dt className="text-xs tracking-[0.16em] uppercase text-zinc-400 mb-2">Address</dt>
                <dd className="leading-relaxed">
                  {site.name}
                  <br />
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </dd>
              </div>
              <div className="border-t border-zinc-200/90 pt-4">
                <dt className="text-xs tracking-[0.16em] uppercase text-zinc-400 mb-2">Phone</dt>
                <dd className="space-y-1">
                  {site.phones.map((p) => (
                    <div key={p.href}>
                      <a href={p.href} className="hover:text-[#c2185b]">
                        {p.display}
                      </a>
                      <span className="text-zinc-400 text-sm"> · {p.label}</span>
                    </div>
                  ))}
                </dd>
              </div>
              <div className="border-t border-zinc-200/90 pt-4">
                <dt className="text-xs tracking-[0.16em] uppercase text-zinc-400 mb-2">Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="hover:text-[#c2185b] break-all">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="border-t border-zinc-200/90 pt-4">
                <dt className="text-xs tracking-[0.16em] uppercase text-zinc-400 mb-2">Facebook</dt>
                <dd>
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#c2185b]">
                    Follow Chirayu on Facebook
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-10 overflow-hidden">
              <iframe
                title="Chirayu location in Dharwad"
                src={mapsEmbedUrl()}
                className="w-full h-56 sm:h-64 border-0 grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 min-w-0">
            <h2 className="font-display text-3xl text-[#1b365d] mb-8">Send a message</h2>
            <form className="space-y-5" onSubmit={onSubmit}>
              <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <input name="name" required placeholder="Full name" className="field" />
              <input name="email" type="email" required placeholder="Email address" className="field" />
              <input name="phone" type="tel" placeholder="Phone number" className="field" />
              <textarea name="message" required placeholder="Your message" rows={6} className="field" />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-4 h-12 px-8 rounded-full bg-[#c2185b] text-white font-medium hover:bg-[#9c1249] transition-colors disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>
              {status === 'sent' && (
                <p className="text-sm text-green-700">Thank you. Your message has been sent to Chirayu.</p>
              )}
              {status === 'error' && <p className="text-sm text-red-600">{error}</p>}
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
