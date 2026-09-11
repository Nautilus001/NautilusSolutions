import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from '@/components/logo'

const nav = [
  {
    heading: 'Company',
    items: [
      { href: '/about', label: 'About' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/services', label: 'Services' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    heading: 'Services',
    items: [
      { href: '/services', label: 'Web Design' },
      { href: '/services', label: 'Custom Development' },
      { href: '/services', label: 'Platform Migration' },
      { href: '/services', label: 'Workflow Optimization' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A local software consultancy building thoughtful web experiences,
            custom applications, and smoother operations for growing teams.
          </p>
        </div>

        {nav.map((col) => (
          <div key={col.heading}>
            <h3 className="text-sm font-semibold text-foreground">{col.heading}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 text-primary" />
              <a href="mailto:hello@meridianlabs.dev" className="hover:text-primary">
                hello@meridianlabs.dev
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 text-primary" />
              <a href="tel:+16155550142" className="hover:text-primary">
                (615) 555-0142
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                214 Foundry Street, Suite 3<br />
                Nashville, TN 37203
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Meridian Labs. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Proudly serving Middle Tennessee & remote clients nationwide.
          </p>
        </div>
      </div>
    </footer>
  )
}
