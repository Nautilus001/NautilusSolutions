'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

type Faq = { question: string; answer: string }

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-card">
      {items.map((item, index) => {
        const isOpen = open === index
        return (
          <div key={index}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-semibold text-foreground">
                  {item.question}
                </span>
                <span
                  className={cn(
                    'flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-colors',
                    isOpen && 'bg-primary text-primary-foreground',
                  )}
                >
                  {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                </span>
              </button>
            </h3>
            <div
              className={cn(
                'grid transition-all duration-200 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
