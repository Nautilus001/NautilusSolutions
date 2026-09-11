'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { projects, projectCategories } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function PortfolioGrid() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>('All')

  const filtered = useMemo(
    () =>
      active === 'All'
        ? projects
        : projects.filter((project) => project.category === active),
    [active],
  )

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
        {projectCategories.map((category) => {
          const selected = active === category
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(category)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                selected
                  ? 'border-secondary bg-secondary text-secondary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground',
              )}
            >
              {category}
            </button>
          )
        })}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <article
            key={project.slug}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
              <Image
                src={project.image || '/placeholder.svg'}
                alt={`${project.title} for ${project.client}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-secondary backdrop-blur-sm">
                {project.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                {project.client}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="block font-heading text-xl font-bold text-secondary">
                      {metric.value}
                    </span>
                    <span className="text-xs text-muted-foreground">{metric.label}</span>
                  </div>
                ))}
              </div>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
