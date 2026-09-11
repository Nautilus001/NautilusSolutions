import { Square, type LucideIcon } from 'lucide-react'

export const firmName = 'Nautilus Solutions'
export const leadInbox = 'justinbushfield@gmail.com'
export const copyLater = 'Copy later'

export type Service = {
  slug: string
  icon: LucideIcon
  title: string
  tagline: string
  description: string
  features: string[]
  deliverables: string[]
  startingPrice: string
}

export const services: Service[] = [1, 2, 3, 4].map((n) => ({
  slug: `service-${n}`,
  icon: Square,
  title: copyLater,
  tagline: copyLater,
  description: copyLater,
  features: [copyLater, copyLater, copyLater, copyLater],
  deliverables: [copyLater, copyLater, copyLater, copyLater],
  startingPrice: copyLater,
}))

export type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [1, 2, 3].map(() => ({
  quote: copyLater,
  name: copyLater,
  role: copyLater,
  company: copyLater,
}))

export const stats = [
  { value: copyLater, label: copyLater },
  { value: copyLater, label: copyLater },
  { value: copyLater, label: copyLater },
  { value: copyLater, label: copyLater },
]

export type Project = {
  slug: string
  title: string
  client: string
  category: string
  summary: string
  image: string
  metrics: { label: string; value: string }[]
  tags: string[]
}

export const projects: Project[] = [1, 2, 3].map((n) => ({
  slug: `project-${n}`,
  title: copyLater,
  client: copyLater,
  category: copyLater,
  summary: copyLater,
  image: '',
  metrics: [
    { label: copyLater, value: copyLater },
    { label: copyLater, value: copyLater },
  ],
  tags: [copyLater, copyLater],
}))

export type TeamMember = {
  name: string
  role: string
  bio: string
  image: string
}

export const team: TeamMember[] = [1, 2, 3, 4].map(() => ({
  name: copyLater,
  role: copyLater,
  bio: copyLater,
  image: '',
}))

export const values = [1, 2, 3, 4].map(() => ({
  title: copyLater,
  description: copyLater,
}))

export const faqs = [1, 2, 3, 4, 5, 6].map(() => ({
  question: copyLater,
  answer: copyLater,
}))
