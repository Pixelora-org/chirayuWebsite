import type { ReactNode } from 'react'

export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker: string
  title: string
  children?: ReactNode
}) {
  return (
    <section className="pt-12 sm:pt-16 md:pt-24 pb-6 sm:pb-10">
      <div className="container">
        <p className="brand-kicker mb-4">{kicker}</p>
        <h1 className="font-display text-[2.15rem] sm:text-5xl md:text-[3.5rem] font-semibold tracking-tight text-[#1b365d] text-balance max-w-4xl leading-[1.12]">
          {title}
        </h1>
        {children ? (
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-zinc-600 leading-relaxed">{children}</p>
        ) : null}
        <div className="gold-rule mt-8" />
      </div>
    </section>
  )
}
