import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Story } from '@/components/about/story'
import { Values } from '@/components/about/values'
import { Team } from '@/components/about/team'
import { Button } from '@/components/ui/button'
import { about } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About',
  description: about.heroLine,
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title={about.heroTitle}
        description={about.heroLine}
      />

      <Story />
      <Values />
      <Team />

      <section className="border-t border-border bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
            {about.ctaTitle}
          </h2>
          <p className="max-w-xl text-secondary-foreground/80">{about.ctaLine}</p>
          <Button
            size="lg"
            nativeButton={false}
            className="h-12 gap-2 px-6 text-base bg-primary text-primary-foreground hover:bg-primary/90"
            render={
              <Link href="/contact">
                {about.ctaButton}
                <ArrowRight className="size-4" />
              </Link>
            }
          />
        </div>
      </section>
    </main>
  )
}
