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
}

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="About" title="About" />

      <Story />
      <Values />
      <Team />

      <section className="border-t border-border bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <div className="h-10 w-full max-w-xl rounded-md bg-white/10" aria-hidden="true" />
          <div className="h-12 w-full max-w-md rounded-md bg-white/10" aria-hidden="true" />
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
