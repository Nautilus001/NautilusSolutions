import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { PortfolioGrid } from '@/components/portfolio/portfolio-grid'
import { Button } from '@/components/ui/button'
import { portfolioPage, servicesPage } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: portfolioPage.heroLine,
}

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Portfolio"
        title={portfolioPage.heroTitle}
        description={portfolioPage.heroLine}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <PortfolioGrid />
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="max-w-2xl text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {servicesPage.ctaTitle}
          </h2>
          <p className="max-w-xl text-muted-foreground">{servicesPage.ctaLine}</p>
          <Button
            size="lg"
            nativeButton={false}
            className="h-12 gap-2 px-6 text-base bg-primary text-primary-foreground hover:bg-primary/90"
            render={
              <Link href="/contact">
                {servicesPage.ctaButton}
                <ArrowRight className="size-4" />
              </Link>
            }
          />
        </div>
      </section>
    </main>
  )
}
