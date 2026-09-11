import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services, faqs } from '@/lib/site-data'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { ServiceDetail } from '@/components/services/service-detail'
import { Process } from '@/components/services/process'
import { FaqAccordion } from '@/components/faq-accordion'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web design, custom application development, platform migrations, and workflow optimization — scoped clearly and delivered cleanly.',
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Software services scoped clearly and delivered cleanly"
        description="From your first marketing site to complex custom platforms, we cover the full lifecycle. Explore what each engagement includes and where pricing starts."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="flex flex-col gap-20 lg:gap-28">
          {services.map((service, index) => (
            <ServiceDetail key={service.slug} service={service} index={index} />
          ))}
        </div>
      </section>

      <Process />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to common questions"
          description="Still curious about something? Reach out and we will walk you through it."
          align="center"
          className="items-center"
        />
        <div className="mt-10">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="max-w-2xl text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Not sure which service fits? Let&apos;s figure it out together.
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Tell us about your project and we will recommend the right approach,
            with an honest estimate and no obligation.
          </p>
          <Button
            size="lg"
            nativeButton={false}
            className="h-12 gap-2 px-6 text-base bg-primary text-primary-foreground hover:bg-primary/90"
            render={
              <Link href="/contact">
                Get a free quote
                <ArrowRight className="size-4" />
              </Link>
            }
          />
        </div>
      </section>
    </main>
  )
}
