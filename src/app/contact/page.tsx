'use client'

import { FormEvent, useState } from 'react'
import { PageShell } from '../../components/site/page-shell'
import { SmartImage } from '../../components/site/smart-image'
import { MapPin, Phone, Mail, Facebook } from 'lucide-react'
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
      <section className="py-10 sm:py-16 md:py-20 bg-[#faf7f4] border-b border-zinc-200">
        <div className="container">
          <p className="brand-kicker mb-3">Contact</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#1b365d]">Contact Us</h1>
          <p className="text-base sm:text-xl text-zinc-600 max-w-3xl">
            Reach out for partnerships, health camps, or general enquiries.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-5 sm:p-8 bg-white min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#1b365d]">Send us a message</h2>
              <form className="space-y-4" onSubmit={onSubmit}>
                <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <input name="name" required placeholder="Full name" className="h-12 w-full rounded-lg border border-zinc-300 px-4 focus:outline-none focus:ring-2 focus:ring-[#c2185b]/40" />
                <input name="email" type="email" required placeholder="Email address" className="h-12 w-full rounded-lg border border-zinc-300 px-4 focus:outline-none focus:ring-2 focus:ring-[#c2185b]/40" />
                <input name="phone" type="tel" placeholder="Phone number" className="h-12 w-full rounded-lg border border-zinc-300 px-4 focus:outline-none focus:ring-2 focus:ring-[#c2185b]/40" />
                <textarea name="message" required placeholder="Your message" rows={6} className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c2185b]/40 resize-none" />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full h-12 rounded-full bg-[#c2185b] text-white font-semibold hover:bg-[#9c1249] transition-colors disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </button>
                {status === 'sent' && (
                  <p className="text-sm text-green-700 text-center">Thank you. Your message has been sent to Chirayu.</p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-600 text-center">{error}</p>
                )}
              </form>
            </div>

            <div className="space-y-6 min-w-0">
              <div className="rounded-2xl border border-zinc-200 p-5 sm:p-8 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#1b365d]">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#c2185b]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-zinc-900 mb-1">Address</h3>
                      <p className="text-zinc-600 leading-relaxed">
                        {site.name}<br />
                        {site.address.line1}<br />
                        {site.address.line2}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#1b365d]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-zinc-900 mb-1">Phone</h3>
                      <ul className="text-zinc-600 space-y-1">
                        {site.phones.map((p) => (
                          <li key={p.href} className="flex flex-wrap gap-x-1">
                            <a href={p.href} className="hover:text-[#c2185b]">
                              {p.display}
                            </a>
                            <span className="text-zinc-400 text-sm"> · {p.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-700" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-zinc-900 mb-1">Email</h3>
                      <a href={`mailto:${site.email}`} className="text-zinc-600 hover:text-[#c2185b] break-all">
                        {site.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Facebook className="w-6 h-6 text-[#1877F2]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-zinc-900 mb-1">Facebook</h3>
                      <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-[#c2185b] break-words">
                        Follow Chirayu on Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 overflow-hidden">
                <iframe
                  title="Chirayu location in Dharwad"
                  src={mapsEmbedUrl()}
                  className="w-full h-56 sm:h-64 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="relative w-full h-44 sm:h-[280px] mt-8 sm:mt-10 rounded-2xl overflow-hidden">
            <SmartImage
              src={photos.contact}
              alt="Chirayu health camp in Dharwad"
              fill
              eager
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </PageShell>
  )
}
