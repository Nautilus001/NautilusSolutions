import { stats } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Story() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Our story" title="Built by engineers who got tired of software that fights its users" />
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Meridian Labs started in 2011 in a shared office above a print shop
              in downtown Nashville. Our founder, Elena, had spent a decade
              building systems for large logistics and healthcare companies and
              kept seeing the same thing: capable teams held back by software
              that was rigid, opaque, and expensive to change.
            </p>
            <p>
              We set out to be the opposite kind of shop. Local and reachable.
              Honest about scope and cost. Focused on software our clients
              actually own and understand. Fourteen years later, that has not
              changed, even as the team and the projects have grown.
            </p>
            <p>
              Today we help businesses across the region and beyond design,
              build, migrate, and streamline the software their operations
              depend on, one carefully scoped project at a time.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-secondary p-8 text-secondary-foreground">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our mission
          </h3>
          <p className="mt-4 text-pretty text-xl font-medium leading-relaxed">
            To build practical, durable software that gives growing businesses
            the same technical advantage as the enterprise, without the lock-in
            or the overhead.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
            {stats.map((stat) => (
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
