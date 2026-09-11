import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { LeadForm } from '@/components/lead-form'
import { leadInbox } from '@/lib/site-data'

const copyLater = 'Copy later'

export const metadata: Metadata = {
  title: 'Contact',
}

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: leadInbox,
    href: `mailto:${leadInbox}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: copyLater,
  },
  {
    icon: MapPin,
    label: 'Office',
    value: copyLater,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: copyLater,
  },
]

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contact" title="Contact" />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-foreground">Get in touch</h2>
            <div className="mt-3 h-12 max-w-md rounded-md bg-muted/60" aria-hidden="true" />

            <ul className="mt-8 space-y-5">
              {details.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-base font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-medium text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-foreground">Send a message</h2>
              <LeadForm className="mt-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="h-[380px] overflow-hidden rounded-xl border border-border bg-muted/60" />
        </div>
      </section>
    </main>
  )
}
