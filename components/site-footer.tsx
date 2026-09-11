import Link from 'next/link'
import { Logo } from '@/components/logo'
import { firmName, services } from '@/lib/site-data'

const company = [
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            You handle the business. We&apos;ll handle the tech.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Company</h3>
          <ul className="mt-4 space-y-2.5">
            {company.map((item) => (
              <li key={item.href}>
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

        <div>
          <h3 className="text-sm font-semibold text-foreground">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center px-4 py-5 sm:px-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {firmName}
          </p>
        </div>
      </div>
    </footer>
  )
}
