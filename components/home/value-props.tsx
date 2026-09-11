import { ShieldCheck, Gauge, Users, Boxes } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const items = [
  {
    icon: Users,
    title: 'A local team you can reach',
    description:
      'Work directly with the engineers building your software. No account managers, no offshore handoffs, no phone tree.',
  },
  {
    icon: ShieldCheck,
    title: 'Code and infrastructure you own',
    description:
      'Everything we deliver is documented and handed over in full. No lock-in and no proprietary layer you have to keep renting.',
  },
  {
    icon: Gauge,
    title: 'Built for performance',
    description:
      'Fast, accessible, and reliable by default. We sweat load times, uptime, and the details users actually feel.',
  },
  {
    icon: Boxes,
    title: 'Practical, proven technology',
    description:
      'We choose boring, battle-tested tools over hype so your software stays maintainable long after launch.',
  },
]

export function ValueProps() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Why Meridian"
          title="The reliability of an in-house team, without the overhead"
          description="We plug into your business like a partner, not a vendor, and we optimize for outcomes you can measure."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/50"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <item.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
