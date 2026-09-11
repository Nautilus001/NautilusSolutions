import { Hero } from '@/components/home/hero'
import { ValueProps } from '@/components/home/value-props'
import { ServicesPreview } from '@/components/home/services-preview'
import { Testimonials } from '@/components/home/testimonials'
import { ContactCta } from '@/components/home/contact-cta'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <ServicesPreview />
      <Testimonials />
      <ContactCta />
    </main>
  )
}
