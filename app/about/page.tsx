import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Story } from '@/components/about/story'
import { Values } from '@/components/about/values'
import { Team } from '@/components/about/team'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meridian Labs is a Nashville-based software consultancy founded in 2011, building practical, durable software that businesses own and understand.',
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="A local software team, built to be a real partner"
        description="We are a small, senior group of engineers and designers who believe good software should fit your business, not the other way around."
      />

      <Story />
      <Values />
      <Team />

      <section className="border-t border-border bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
            Want to work with a team that actually picks up the phone?
          </h2>
          <p className="max-w-xl text-secondary-foreground/80">
            We would love to hear what you are working on. Reach out and we will
            get back to you within one business day.
          </p>
          <Button
            size="lg"
            nativeButton={false}
            className="h-12 gap-2 px-6 text-base bg-primary text-primary-foreground hover:bg-primary/90"
            render={
              <Link href="/contact">
                Get in touch
                <ArrowRight className="size-4" />
              </Link>
            }
          />
        </div>
      </section>
    </main>
  )
}
