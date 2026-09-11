import { values } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Values() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Values"
          title="What you can count on"
          description="Same promises as on the home page. We mean them here too."
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

        {/* Credentials row — hidden until we have real chips to show.
        const futureCredentials = [
          'Plain English',
          'You own the work',
          'A real person on the other end',
          'No hostage software',
        ]
        <div className="mt-10 rounded-xl border border-border bg-background p-7">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Credentials
          </h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {futureCredentials.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        */}
      </div>
    </section>
  )
}
