import { NextResponse } from 'next/server'
import { site } from '../../../lib/site'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const phone = String(body.phone || '').trim()
    const interest = String(body.interest || '').trim()
    const message = String(body.message || '').trim()
    const type = String(body.type || 'enquiry')

    if (body.company) {
      return NextResponse.json({ ok: true })
    }

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Please fill in name, email, and message.' }, { status: 400 })
    }

    const isVolunteer = type === 'volunteer'
    const subject = isVolunteer
      ? `Chirayu volunteer enquiry from ${name}`
      : `Chirayu website enquiry from ${name}`

    const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || 'Not provided',
        ...(interest ? { interest } : {}),
        message,
        _subject: subject,
        _template: 'table',
        _replyto: email,
      }),
    })

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: 'Could not send the message. Please try again.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'Could not send the message. Please try again.' }, { status: 500 })
  }
}
