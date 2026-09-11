import { SectionHeading } from '@/components/section-heading'
import { processIntro, processSteps } from '@/lib/site-data'

export function Process() {
  return (
    <section className="border-y border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Process"
          title={processIntro.title}
          className="[&_h2]:text-secondary-foreground [&_p]:text-secondary-foreground/75"
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <span className="font-heading text-3xl font-bold text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/80">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
