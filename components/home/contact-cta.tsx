import { LeadForm } from '@/components/lead-form'

export function ContactCta() {
  return (
    <section id="contact" className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
            <span className="h-px w-6 bg-primary" aria-hidden="true" />
            Contact
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Contact
          </h2>
          <div className="mt-4 h-16 max-w-md rounded-md bg-muted/60" aria-hidden="true" />
          <ul className="mt-8 space-y-3">
            {[1, 2, 3].map((n) => (
              <li key={n} className="h-5 max-w-xs rounded-md bg-muted/50" />
            ))}
          </ul>
        </div>

        <LeadForm className="rounded-xl border border-border bg-background p-6 sm:p-8" />
      </div>
    </section>
  )
}
