import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { copyLater } from '@/lib/site-data'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            {copyLater}
          </span>

          <div className="mt-6 h-16 w-full max-w-xl rounded-md bg-muted/70 sm:h-20" aria-hidden="true" />
          <div className="mt-6 h-20 w-full max-w-xl rounded-md bg-muted/50" aria-hidden="true" />

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
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
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-12 px-6 text-base"
              render={<Link href="/portfolio">Portfolio</Link>}
            />
          </div>

          <dl className="mt-10 grid w-full grid-cols-3 gap-4 border-t border-border pt-6 sm:gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n}>
                <dt className="sr-only">{copyLater}</dt>
                <dd>
                  <span className="block h-7 w-16 rounded-md bg-muted" />
                  <span className="mt-2 block h-4 w-20 rounded-md bg-muted/70" />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted/60 shadow-xl shadow-secondary/5" />
          <div className="absolute -bottom-5 -left-5 hidden w-40 rounded-xl border border-border bg-card p-4 shadow-lg sm:block">
            <div className="h-7 w-16 rounded-md bg-muted" />
            <div className="mt-2 h-3 w-28 rounded-md bg-muted/70" />
          </div>
        </div>
      </div>
    </section>
  )
}
