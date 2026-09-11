'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { serviceSelectOptions } from '@/lib/site-data'
import { cn } from '@/lib/utils'

type LeadState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const initialState: LeadState = { status: 'idle', message: '' }

const fieldClass =
  'w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40'

function validateLead(formData: FormData): LeadState {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return {
      status: 'error',
      message: 'Please fill in your name, email, and a short message.',
    }
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailOk) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  return {
    status: 'success',
    message: 'Thanks. We received your message.',
  }
}

export function LeadForm({ className }: { className?: string }) {
  const [state, setState] = useState<LeadState>(initialState)
  const [pending, setPending] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    const next = validateLead(new FormData(event.currentTarget))
    setState(next)
    setPending(false)
  }

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
    <form onSubmit={onSubmit} className={cn('flex flex-col gap-4', className)}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input id="name" name="name" required className={fieldClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Company <span className="text-muted-foreground">(optional)</span>
          </label>
          <input id="company" name="company" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-sm font-medium text-foreground">
            What can we help with?
          </label>
          <select id="service" name="service" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select one
            </option>
            {serviceSelectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
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
        className="mt-1 min-h-12 self-start bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {pending && <Loader2 className="size-4 animate-spin" />}
        {pending ? 'Sending…' : 'Send a note'}
      </Button>
    </form>
  )
}
