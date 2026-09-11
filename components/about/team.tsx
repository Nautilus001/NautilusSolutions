import { about, team } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Team() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Team"
        title="Who you'll talk to"
        description={about.teamIntro}
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <figure
            key={member.name}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
          >
            <div className="relative aspect-[4/3] w-full bg-muted" />
            <figcaption className="flex flex-1 flex-col p-6">
              <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm font-medium text-primary">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
