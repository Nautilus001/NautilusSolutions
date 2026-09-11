import { team } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Team() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading eyebrow="Team" title="Team" />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <figure
            key={index}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
          >
            <div className="relative aspect-square w-full bg-muted" />
            <figcaption className="flex flex-1 flex-col p-6">
              <h3 className="text-base font-semibold text-muted-foreground">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-primary">{member.role}</p>
              <div className="mt-3 h-14 rounded-md bg-muted/60" aria-hidden="true" />
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
