import { Heart, ShieldCheck, KeyRound, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { whyUs, whyUsCards } from '@/lib/site-data'

const icons = [Heart, ShieldCheck, KeyRound, Sparkles]

export function ValueProps() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Why us"
          title={whyUs.title}
          description={whyUs.line}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUsCards.map((item, index) => {
            const Icon = icons[index]
            return (
              <div
                key={item.title}
                className="flex flex-col rounded-xl border border-border bg-background p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
