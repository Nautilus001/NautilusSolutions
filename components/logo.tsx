import Image from 'next/image'
import { firmName } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <Image
        src="/shell-transparent.svg"
        alt=""
        width={36}
        height={26}
        className="h-7 w-auto shrink-0"
      />
      <span className="font-heading text-lg font-bold tracking-tight text-foreground">
        Nautilus<span className="text-primary"> Solutions</span>
        <span className="sr-only">{firmName}</span>
      </span>
    </span>
  )
}
