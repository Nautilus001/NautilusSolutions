import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { hero, heroStats } from '@/lib/site-data'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {hero.body}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              className="h-12 gap-2 px-6 text-base bg-primary text-primary-foreground hover:bg-primary/90"
              render={
                <Link href="/contact">
                  {hero.primaryCta}
                  <ArrowRight className="size-4" />
                </Link>
              }
            />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-12 px-6 text-base"
              render={<Link href="/services">{hero.secondaryCta}</Link>}
            />
          </div>

          <dl className="mt-10 grid w-full grid-cols-3 gap-4 border-t border-border pt-6 sm:gap-6">
            {heroStats.map((item) => (
              <div key={item.label}>
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <span className="block font-heading text-2xl font-bold text-foreground">
                    {item.value}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {item.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-secondary/5">
            <Image
              src="/shell-transparent.svg"
              alt=""
              width={280}
              height={204}
              priority
              className="h-2/5 w-auto"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden max-w-[11rem] rounded-xl border border-border bg-card p-4 shadow-lg sm:block">
            <p className="text-sm font-semibold leading-snug text-foreground">
              {hero.imageCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
