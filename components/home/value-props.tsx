import { Square } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { copyLater } from '@/lib/site-data'

const items = [1, 2, 3, 4]

export function ValueProps() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading eyebrow="Why us" title={copyLater} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((n) => (
            <div
              key={n}
              className="flex flex-col rounded-xl border border-border bg-background p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <Square className="size-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-muted-foreground">
                {copyLater}
              </h3>
              <div className="mt-2 h-16 rounded-md bg-muted/60" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
