import { values } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Values() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading eyebrow="Values" title="Values" />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {values.map((value, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-background p-7"
            >
              <h3 className="text-lg font-semibold text-muted-foreground">
                {value.title}
              </h3>
              <div className="mt-3 h-16 rounded-md bg-muted/60" aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-background p-7">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Credentials
          </h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {[1, 2, 3, 4].map((n) => (
              <li
                key={n}
                className="h-9 w-36 rounded-full border border-border bg-card"
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
