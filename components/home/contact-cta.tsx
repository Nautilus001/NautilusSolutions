import { CheckCircle2 } from 'lucide-react'
import { LeadForm } from '@/components/lead-form'
import { homeContact } from '@/lib/site-data'

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
            {homeContact.title}
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {homeContact.line}
          </p>

          <ul className="mt-8 space-y-3">
            {homeContact.points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-foreground">
                <CheckCircle2 className="size-5 shrink-0 text-primary" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <LeadForm className="rounded-xl border border-border bg-background p-6 sm:p-8" />
      </div>
    </section>
  )
}
