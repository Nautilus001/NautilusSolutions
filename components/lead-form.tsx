'use client'

import { useActionState } from 'react'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { submitLead, type LeadState } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const initialState: LeadState = { status: 'idle', message: '' }

const serviceOptions = [
  'Web Design & Development',
  'Custom App Development',
  'Platform Migration',
  'Workflow Optimization',
  'Not sure yet',
]

const fieldClass =
  'w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40'

export function LeadForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(submitLead, initialState)

  if (state.status === 'success') {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center rounded-xl border border-border bg-card p-8 text-center',
          className,
        )}
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckCircle2 className="size-6" />
        </span>
        <h3 className="mt-4 text-lg font-semibold text-foreground">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className={cn('flex flex-col gap-4', className)}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input id="name" name="name" required placeholder="Jane Cooper" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Company <span className="text-muted-foreground">(optional)</span>
          </label>
          <input id="company" name="company" placeholder="Acme Co." className={fieldClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-sm font-medium text-foreground">
            What can we help with?
          </label>
          <select id="service" name="service" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us a little about your project, goals, and timeline."
          className={cn(fieldClass, 'resize-y')}
        />
      </div>

      {state.status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-destructive" role="alert">
          <AlertCircle className="size-4" />
          {state.message}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={pending}
        className="mt-1 self-start bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {pending && <Loader2 className="size-4 animate-spin" />}
        {pending ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  )
}
