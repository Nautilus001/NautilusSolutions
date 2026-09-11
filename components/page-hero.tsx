export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
          <span className="h-px w-6 bg-primary" aria-hidden="true" />
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  )
}
