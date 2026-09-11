import {
  Code2,
  Layout,
  ArrowLeftRight,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

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

export const services: Service[] = [
  {
    slug: 'web-design',
    icon: Layout,
    title: 'Web Design & Development',
    tagline: 'Marketing sites that convert',
    description:
      'Fast, accessible, and thoughtfully designed websites that reflect your brand and turn visitors into customers.',
    features: [
      'Custom responsive design',
      'Content management setup',
      'SEO & performance tuning',
      'Analytics & lead tracking',
    ],
    deliverables: [
      'Design system & component library',
      'Fully responsive marketing site',
      'CMS training for your team',
      '30 days of post-launch support',
    ],
    startingPrice: '$6,500',
  },
  {
    slug: 'custom-development',
    icon: Code2,
    title: 'Custom App Development',
    tagline: 'Software built around your business',
    description:
      'Bespoke web and internal applications engineered for your exact workflows, with clean, maintainable code you own.',
    features: [
      'Full-stack architecture',
      'Secure user auth & roles',
      'Third-party integrations',
      'Automated testing & CI/CD',
    ],
    deliverables: [
      'Technical discovery & spec',
      'Production application',
      'API & integration layer',
      'Documentation & handoff',
    ],
    startingPrice: '$18,000',
  },
  {
    slug: 'platform-migration',
    icon: ArrowLeftRight,
    title: 'Platform Migrations',
    tagline: 'Move without the downtime',
    description:
      'Modernize legacy systems and migrate data, infrastructure, and codebases with zero data loss and minimal disruption.',
    features: [
      'Legacy system audit',
      'Data migration & validation',
      'Phased cutover strategy',
      'Rollback safety plans',
    ],
    deliverables: [
      'Migration roadmap',
      'Data mapping & scripts',
      'Staged environment testing',
      'Go-live support window',
    ],
    startingPrice: '$12,000',
  },
  {
    slug: 'workflow-optimization',
    icon: Workflow,
    title: 'Workflow Optimization',
    tagline: 'Automate the busywork',
    description:
      'We map your operations, remove bottlenecks, and automate repetitive tasks so your team can focus on real work.',
    features: [
      'Process mapping & audit',
      'Automation & scripting',
      'Tool consolidation',
      'Team enablement',
    ],
    deliverables: [
      'Operations assessment',
      'Automation implementation',
      'Integration of existing tools',
      'Playbooks & training',
    ],
    startingPrice: '$4,500',
  },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Meridian rebuilt our customer portal in eight weeks. It is faster, our support tickets dropped by a third, and the code is finally something our team can maintain.',
    name: 'Dana Whitfield',
    role: 'VP of Operations',
    company: 'Cumberland Freight',
  },
  {
    quote:
      'They migrated fifteen years of records off our old system without a single day of downtime. The planning and communication were exceptional.',
    name: 'Marcus Reyes',
    role: 'Director of IT',
    company: 'Highland Medical Group',
  },
  {
    quote:
      'The automation work paid for itself in a quarter. What used to take our staff two days now happens overnight, on its own.',
    name: 'Priya Nair',
    role: 'Founder',
    company: 'Riverbend Logistics',
  },
]

export const stats = [
  { value: '120+', label: 'Projects delivered' },
  { value: '14', label: 'Years in business' },
  { value: '98%', label: 'Client retention' },
  { value: '30+', label: 'Local partners' },
]

export type Project = {
  slug: string
  title: string
  client: string
  category: 'Web Design' | 'Custom App' | 'Migration' | 'Automation'
  summary: string
  image: string
  metrics: { label: string; value: string }[]
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'cumberland-portal',
    title: 'Customer Self-Service Portal',
    client: 'Cumberland Freight',
    category: 'Custom App',
    summary:
      'A shipment tracking and billing portal that cut support volume and gave customers real-time visibility.',
    image: '/images/project-portal.png',
    metrics: [
      { label: 'Support tickets', value: '-34%' },
      { label: 'Load time', value: '0.8s' },
    ],
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
  },
  {
    slug: 'highland-migration',
    title: 'Legacy Records Migration',
    client: 'Highland Medical Group',
    category: 'Migration',
    summary:
      'Migrated 15 years of patient and billing records to a modern, HIPAA-aware platform with zero downtime.',
    image: '/images/project-migration.png',
    metrics: [
      { label: 'Records moved', value: '2.4M' },
      { label: 'Downtime', value: '0 hrs' },
    ],
    tags: ['Data migration', 'Compliance', 'Cloud'],
  },
  {
    slug: 'riverbend-automation',
    title: 'Dispatch Automation Engine',
    client: 'Riverbend Logistics',
    category: 'Automation',
    summary:
      'Automated overnight dispatch scheduling and reporting, eliminating two days of manual work each week.',
    image: '/images/project-automation.png',
    metrics: [
      { label: 'Time saved', value: '16 hrs/wk' },
      { label: 'Error rate', value: '-90%' },
    ],
    tags: ['Automation', 'Integrations', 'Reporting'],
  },
  {
    slug: 'foundry-brand',
    title: 'Brand & Marketing Site',
    client: 'Foundry Coffee Roasters',
    category: 'Web Design',
    summary:
      'A fast, story-driven marketing site with an integrated wholesale ordering flow for a local roaster.',
    image: '/images/project-web.png',
    metrics: [
      { label: 'Conversion', value: '+42%' },
      { label: 'Lighthouse', value: '100' },
    ],
    tags: ['Web design', 'CMS', 'E-commerce'],
  },
  {
    slug: 'summit-dashboard',
    title: 'Operations Dashboard',
    client: 'Summit Property Mgmt',
    category: 'Custom App',
    summary:
      'A unified dashboard consolidating five disconnected tools into one real-time operations view.',
    image: '/images/project-dashboard.png',
    metrics: [
      { label: 'Tools replaced', value: '5' },
      { label: 'Adoption', value: '96%' },
    ],
    tags: ['Dashboard', 'Analytics', 'React'],
  },
  {
    slug: 'harbor-migration',
    title: 'Monolith to Cloud Migration',
    client: 'Harbor Outfitters',
    category: 'Migration',
    summary:
      'Re-platformed an aging e-commerce monolith to a scalable cloud architecture ahead of peak season.',
    image: '/images/project-cloud.png',
    metrics: [
      { label: 'Peak uptime', value: '99.9%' },
      { label: 'Infra cost', value: '-28%' },
    ],
    tags: ['Cloud', 'Re-platform', 'Scale'],
  },
]

export const projectCategories = [
  'All',
  'Web Design',
  'Custom App',
  'Migration',
  'Automation',
] as const

export type TeamMember = {
  name: string
  role: string
  bio: string
  image: string
}

export const team: TeamMember[] = [
  {
    name: 'Elena Marsh',
    role: 'Founder & Principal Engineer',
    bio: 'Fifteen years building software for logistics and healthcare. Elena leads architecture and keeps every project grounded in real outcomes.',
    image: '/images/team-elena.png',
  },
  {
    name: 'Theo Aldridge',
    role: 'Lead Product Designer',
    bio: 'Theo translates messy requirements into clean, usable interfaces. He believes good design is mostly good listening.',
    image: '/images/team-theo.png',
  },
  {
    name: 'Sofia Range',
    role: 'Engineering Manager',
    bio: 'Sofia runs delivery and quality. She has shipped dozens of migrations without a single lost record.',
    image: '/images/team-sofia.png',
  },
  {
    name: 'Jordan Cole',
    role: 'Automation Specialist',
    bio: 'Jordan finds the repetitive work hiding in your operations and quietly makes it disappear.',
    image: '/images/team-jordan.png',
  },
]

export const values = [
  {
    title: 'Local & accountable',
    description:
      'We work with businesses in our community. You get a real team you can call, not a ticket queue overseas.',
  },
  {
    title: 'You own the code',
    description:
      'No lock-in, no black boxes. Every line we write is documented, tested, and handed to you.',
  },
  {
    title: 'Outcomes over output',
    description:
      'We measure success by what changes for your business, not by hours billed or features shipped.',
  },
  {
    title: 'Built to last',
    description:
      'We favor boring, proven technology and clean architecture so your software ages gracefully.',
  },
]

export const faqs = [
  {
    question: 'How do projects typically start?',
    answer:
      'Every engagement begins with a paid discovery phase where we map your goals, constraints, and technical landscape. You walk away with a clear scope, timeline, and fixed estimate before any build work begins.',
  },
  {
    question: 'Do you work with existing codebases?',
    answer:
      'Yes. A large share of our work is improving, migrating, or extending software that already exists. We start with an audit so we fully understand what you have before recommending changes.',
  },
  {
    question: 'Who owns the code and infrastructure?',
    answer:
      'You do, completely. We deliver source code, documentation, and full access to any accounts and infrastructure. There is no lock-in and no proprietary layer you have to keep paying us for.',
  },
  {
    question: 'Can you work with our in-house team?',
    answer:
      'Absolutely. We frequently embed alongside internal teams, pairing on architecture and reviews, and we hand off with documentation and training so your team can carry the work forward.',
  },
  {
    question: 'What does ongoing support look like?',
    answer:
      'Every build includes a post-launch support window. After that, clients can move to a flexible monthly retainer for maintenance, enhancements, and priority response.',
  },
  {
    question: 'How do you price projects?',
    answer:
      'Most projects are fixed-scope with a fixed price set after discovery. Ongoing or exploratory work can be handled on a monthly retainer. We share pricing openly and never bill surprises.',
  },
]
