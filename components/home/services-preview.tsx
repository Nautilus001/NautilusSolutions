import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'

export function ServicesPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="What we do"
          title="Four ways we help you ship"
          description="Whether you need a new site, a custom platform, a careful migration, or leaner operations, we scope it clearly and deliver it cleanly."
        />
        <Button
          variant="outline"
          size="lg"
          nativeButton={false}
          className="shrink-0"
          render={<Link href="/services">Explore all services</Link>}
        />
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.slug}
            href="/services"
            className="group flex flex-col rounded-xl border border-border bg-card p-7 transition-all hover:border-primary/60 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <span className="flex size-12 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <service.icon className="size-6" />
              </span>
              <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-primary">{service.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <p className="mt-5 text-sm text-muted-foreground">
              Starting at{' '}
              <span className="font-semibold text-foreground">
                {service.startingPrice}
              </span>
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
