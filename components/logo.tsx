import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="7" fill="var(--secondary)" />
        <path
          d="M8 22V10l8 7 8-7v12"
          stroke="var(--primary)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-heading text-lg font-bold tracking-tight text-foreground">
        Meridian<span className="text-primary">Labs</span>
      </span>
    </span>
  )
}
