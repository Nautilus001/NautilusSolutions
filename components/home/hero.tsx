import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <MapPin className="size-3.5 text-primary" />
            Nashville-based · Serving clients nationwide
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Software that fits the way your business actually works
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We are a local software consultancy. From web design to custom
            applications, migrations, and workflow automation, we build practical
            software you own and can rely on.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              className="h-12 gap-2 px-6 text-base bg-primary text-primary-foreground hover:bg-primary/90"
              render={
                <Link href="/contact">
                  Start a project
                  <ArrowRight className="size-4" />
                </Link>
              }
            />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-12 px-6 text-base"
              render={<Link href="/portfolio">See our work</Link>}
            />
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6">
            {[
              { value: '120+', label: 'Projects shipped' },
              { value: '14 yrs', label: 'In business' },
              { value: '98%', label: 'Client retention' },
            ].map((item) => (
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
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl shadow-secondary/5">
            <Image
              src="/images/hero-workspace.png"
              alt="A software developer's workspace with code, a dashboard, and wireframe sketches"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card p-4 shadow-lg sm:block">
            <p className="font-heading text-2xl font-bold text-secondary">0 hrs</p>
            <p className="text-xs text-muted-foreground">Downtime on our last migration</p>
          </div>
        </div>
      </div>
    </section>
  )
}
