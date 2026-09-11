import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Testimonials() {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Testimonials"
          title="Testimonials"
          align="center"
          className="[&_h2]:text-secondary-foreground [&_p]:text-secondary-foreground/75"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <figure
              key={index}
              className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
            >
              <Quote className="size-7 text-primary" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-secondary-foreground/70">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/80 text-sm font-semibold text-primary-foreground" />
                <span className="flex flex-col gap-1">
                  <span className="block h-4 w-24 rounded-md bg-white/15" />
                  <span className="block h-3 w-32 rounded-md bg-white/10" />
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
