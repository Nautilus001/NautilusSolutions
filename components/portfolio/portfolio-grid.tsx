import { projects } from '@/lib/site-data'

export function PortfolioGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.slug}
          className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
        >
          <div className="relative aspect-[4/3] w-full bg-muted" />

          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              {project.client}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-muted-foreground">
              {project.title}
            </h3>
            <div className="mt-3 h-14 rounded-md bg-muted/60" aria-hidden="true" />

            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4">
              {project.metrics.map((metric, index) => (
                <div key={index}>
                  <span className="block h-6 w-14 rounded-md bg-muted" />
                  <span className="mt-1 block h-3 w-16 rounded-md bg-muted/70" />
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
