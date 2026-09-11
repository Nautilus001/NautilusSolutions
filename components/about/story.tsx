import { stats } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Story() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Our story" title="Our story" />
          <div className="mt-6 space-y-4">
            <div className="h-20 rounded-md bg-muted/60" aria-hidden="true" />
            <div className="h-20 rounded-md bg-muted/50" aria-hidden="true" />
            <div className="h-16 rounded-md bg-muted/40" aria-hidden="true" />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-secondary p-8 text-secondary-foreground">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Mission
          </h3>
          <div className="mt-4 h-24 rounded-md bg-white/10" aria-hidden="true" />

          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block h-8 w-20 rounded-md bg-white/15" />
                  <span className="mt-2 block h-4 w-24 rounded-md bg-white/10" />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
