import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { PortfolioGrid } from '@/components/portfolio/portfolio-grid'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Portfolio',
}

export default function PortfolioPage() {
  return (
    <main>
      <PageHero eyebrow="Portfolio" title="Portfolio" />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <PortfolioGrid />
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <div className="h-10 w-full max-w-xl rounded-md bg-muted" aria-hidden="true" />
          <div className="h-12 w-full max-w-md rounded-md bg-muted" aria-hidden="true" />
          <Button
            size="lg"
            nativeButton={false}
            className="h-12 gap-2 px-6 text-base bg-primary text-primary-foreground hover:bg-primary/90"
            render={
              <Link href="/contact">
                Contact
                <ArrowRight className="size-4" />
              </Link>
            }
          />
        </div>
      </section>
    </main>
  )
}
