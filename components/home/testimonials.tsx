import { Quote } from 'lucide-react'
import { audienceScenes } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Testimonials() {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="If this is you"
          title="You're in the right place"
          description="We don't need a stack of fake quotes. If one of these sounds like your week, we should talk."
          align="center"
          className="[&_h2]:text-secondary-foreground [&_p]:text-secondary-foreground/75"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {audienceScenes.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
            >
              <Quote className="size-7 text-primary" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-secondary-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <span className="block text-sm font-semibold">{t.name}</span>
                <span className="mt-1 block text-xs text-secondary-foreground/70">
                  {t.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
