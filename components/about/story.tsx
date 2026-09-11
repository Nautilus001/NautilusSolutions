import { about } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Story() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Our story" title={about.storyTitle} />
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            {about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-secondary p-8 text-secondary-foreground">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Mission
          </h3>
          <p className="mt-4 text-pretty text-xl font-medium leading-relaxed">
            {about.mission}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-heading text-3xl font-bold text-primary">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm text-secondary-foreground/75">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
