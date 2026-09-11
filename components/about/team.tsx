import Image from 'next/image'
import { team } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Team() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="The team"
        title="A small team of senior people"
        description="No layers, no handoffs. You work directly with the people building your software."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <figure
            key={member.name}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-muted">
              <Image
                src={member.image || '/placeholder.svg'}
                alt={`Portrait of ${member.name}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
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
