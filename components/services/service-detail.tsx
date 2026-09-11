import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import type { Service } from '@/lib/site-data'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ServiceDetail({
  service,
  index,
}: {
  service: Service
  index: number
}) {
  const flip = index % 2 === 1
  return (
    <div
      id={service.slug}
      className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2"
    >
      <div className={cn('flex flex-col', flip && 'lg:order-2')}>
        <span className="flex size-12 items-center justify-center rounded-lg bg-primary/12 text-primary">
          <service.icon className="size-6" />
        </span>
        <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-primary">
          {service.tagline}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          {service.title}
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button
            nativeButton={false}
            className="gap-2 bg-secondary text-secondary-foreground [a]:hover:bg-secondary/90"
            render={
              <Link href="/contact">
                Let's talk
                <ArrowRight className="size-4" />
              </Link>
            }
          />
        </div>
      </div>

      <div className={cn('rounded-2xl border border-border bg-card p-8', flip && 'lg:order-1')}>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          What you get
        </h3>
        <ul className="mt-5 space-y-4">
          {service.deliverables.map((item, i) => (
            <li key={item} className="flex items-start gap-4">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/12 text-xs font-bold text-primary">
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
