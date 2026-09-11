import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from '@/components/logo'
import { copyLater, firmName, leadInbox } from '@/lib/site-data'

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
      { href: '/services#service-1', label: copyLater },
      { href: '/services#service-2', label: copyLater },
      { href: '/services#service-3', label: copyLater },
      { href: '/services#service-4', label: copyLater },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="max-w-xs">
          <Logo />
          <div className="mt-4 h-16 rounded-md bg-muted/60" aria-hidden="true" />
        </div>

        {nav.map((col) => (
          <div key={col.heading}>
            <h3 className="text-sm font-semibold text-foreground">{col.heading}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.items.map((item, index) => (
                <li key={`${col.heading}-${index}`}>
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
              <a href={`mailto:${leadInbox}`} className="hover:text-primary">
                {leadInbox}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 text-primary" />
              <span>{copyLater}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{copyLater}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {firmName}
          </p>
        </div>
      </div>
    </footer>
  )
}
