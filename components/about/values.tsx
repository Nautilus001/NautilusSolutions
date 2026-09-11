import { values } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

const credentials = [
  'AWS Certified Solutions Architects',
  'SOC 2-aware development practices',
  'HIPAA & PCI experienced',
  'Members, Nashville Tech Council',
]

export function Values() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="What we value"
          title="The principles behind every project"
          description="These are not posters on a wall. They shape how we scope, build, and hand off every engagement."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-border bg-background p-7"
            >
              <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-background p-7">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Credentials
          </h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {credentials.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
