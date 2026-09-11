import { SectionHeading } from '@/components/section-heading'
import { copyLater } from '@/lib/site-data'

const steps = [1, 2, 3, 4]

export function Process() {
  return (
    <section className="border-y border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Process"
          title="Process"
          className="[&_h2]:text-secondary-foreground [&_p]:text-secondary-foreground/75"
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <span className="font-heading text-3xl font-bold text-primary">
                {String(step).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-secondary-foreground/80">
                {copyLater}
              </h3>
              <div className="mt-3 h-16 rounded-md bg-white/10" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
