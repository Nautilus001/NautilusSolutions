import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { LeadForm } from '@/components/lead-form'
import { contactPage, leadInbox } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact',
  description: contactPage.heroLine,
}

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title={contactPage.heroTitle}
        description={contactPage.heroLine}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-foreground">
              {contactPage.asideTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {contactPage.asideLine}
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${leadInbox}`}
                    className="text-base font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {leadInbox}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-foreground">
                {contactPage.formTitle}
              </h2>
              <LeadForm className="mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Map — hidden until there is a real place to pin.
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="h-[380px] overflow-hidden rounded-xl border border-border bg-muted/60" />
        </div>
      </section>
      */}
    </main>
  )
}
