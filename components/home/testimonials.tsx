import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
}

export function Testimonials() {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Client stories"
          title="Trusted by teams across the region"
          description="We measure our work by the results our clients see. Here is what a few of them have to say."
          align="center"
          className="[&_h2]:text-secondary-foreground [&_p]:text-secondary-foreground/75"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
            >
              <Quote className="size-7 text-primary" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-secondary-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-xs text-secondary-foreground/70">
                    {t.role}, {t.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
