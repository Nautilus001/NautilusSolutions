import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { LeadForm } from '@/components/lead-form'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Meridian Labs. Send us a message, call, or email — we reply within one business day.',
}

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@meridianlabs.dev',
    href: 'mailto:hello@meridianlabs.dev',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(615) 555-0142',
    href: 'tel:+16155550142',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: '214 Foundry Street, Suite 3, Nashville, TN 37203',
    href: 'https://www.openstreetmap.org/?mlat=36.1580&mlon=-86.7844#map=15/36.1580/-86.7844',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Fri, 9:00 AM – 5:00 PM CT',
  },
]

const serviceAreas = [
  'Nashville',
  'Franklin',
  'Brentwood',
  'Murfreesboro',
  'Hendersonville',
  'Clarksville',
  'Columbia',
  'Remote, nationwide',
]

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Tell us what you are working on and we will get back to you within one business day. No obligation, no sales runaround."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-foreground">Reach us directly</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Prefer to skip the form? Use whichever channel is easiest. A real
              person on our team will respond.
            </p>

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

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                Service areas
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-foreground">Send a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fields marked required help us route your message to the right person.
              </p>
              <LeadForm className="mt-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              title="Map showing Meridian Labs office in Nashville, Tennessee"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-86.8244%2C36.1380%2C-86.7444%2C36.1780&layer=mapnik&marker=36.1580%2C-86.7844"
              className="h-[380px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
