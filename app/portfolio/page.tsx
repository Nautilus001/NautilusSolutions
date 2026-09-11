import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { PortfolioGrid } from '@/components/portfolio/portfolio-grid'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'A selection of custom applications, migrations, automation, and web design projects Meridian Labs has delivered for clients.',
}

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Portfolio"
        title="Work we are proud to put our name on"
        description="A selection of recent projects across web design, custom applications, migrations, and automation. Filter by category to see what is most relevant to you."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <PortfolioGrid />
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="max-w-2xl text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Your project could be the next one here
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Tell us what you are building and we will show you how we would
            approach it, with a clear scope and estimate.
          </p>
          <Button
            size="lg"
            nativeButton={false}
            className="h-12 gap-2 px-6 text-base bg-primary text-primary-foreground hover:bg-primary/90"
            render={
              <Link href="/contact">
                Start a conversation
                <ArrowRight className="size-4" />
              </Link>
            }
          />
        </div>
      </section>
    </main>
  )
}
