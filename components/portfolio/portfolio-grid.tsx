import { projects } from '@/lib/site-data'

export function PortfolioGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.slug}
          className="flex flex-col rounded-xl border border-border bg-card p-6 sm:p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            {project.client}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        </article>
      ))}
    </div>
  )
}
