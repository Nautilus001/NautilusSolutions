import {
  Layout,
  Smartphone,
  Workflow,
  Compass,
  type LucideIcon,
} from 'lucide-react'

export const firmName = 'Nautilus Solutions'
export const leadInbox = 'justinbushfield@gmail.com'

export const hero = {
  eyebrow: "You didn't start a business to fight a computer.",
  headline: "You handle the business. We'll handle the tech.",
  body: "Websites, apps, tools, and everything in between — communicated in plain English. We'll take care of the tech so you can get back to customers.",
  primaryCta: "Let's talk",
  secondaryCta: 'See how we help',
  imageCaption: 'No IT department required',
}

export const heroStats = [
  { value: '3+', label: 'Projects' },
  { value: '0', label: 'Downtime' },
  { value: 'Real people', label: 'Reachable' },
]

export const whyUs = {
  title: 'We want what you want',
  line: "Our goal is to help you achieve yours! We want you out in the field, selling, building, doing, and making the world a cooler place. Let's get tech out of your way!",
}

export const whyUsCards = [
  {
    title: 'We are people people',
    description:
      'We speak computer, but better than that — we speak plain English. Our goal is that you understand but never worry.',
  },
  {
    title: 'We are accountable',
    description:
      'We will always deliver, always respond, and always take responsibility.',
  },
  {
    title: 'You own everything',
    description: 'All your data, all yours, all the time.',
  },
  {
    title: 'We have integrity',
    description:
      'At the end of the day, we love seeing people do what they love. We want to help you do what you love.',
  },
]

export const servicesIntro = {
  title: "Let's get crackin'",
  line: "Not sure what you need? Want to talk to a real person? Shoot us a message — our team will get in touch!",
}

export type Service = {
  slug: string
  icon: LucideIcon
  title: string
  tagline: string
  description: string
  features: string[]
  deliverables: string[]
}

export const services: Service[] = [
  {
    slug: 'website',
    icon: Layout,
    title: 'Website',
    tagline: 'A site that does its job',
    description:
      'Clear, mobile-friendly, and easy to update. People understand what you do and how to reach you.',
    features: [
      'Mobile-first',
      'Total control',
      'Easy updates',
      'Responsive support',
    ],
    deliverables: [
      'Mobile-first',
      'Total control',
      'Easy updates',
      'Responsive support',
    ],
  },
  {
    slug: 'app-development',
    icon: Smartphone,
    title: 'App Development',
    tagline: "Let's build the next big thing!",
    description:
      "When a website isn't enough — a tool your team or your customers actually use. We keep it simple until it needs to be more.",
    features: [
      'Built around how you work',
      'You own all progress',
      'Room to grow',
    ],
    deliverables: [
      'Built around how you work',
      'You own all progress',
      'Room to grow',
    ],
  },
  {
    slug: 'workflows',
    icon: Workflow,
    title: 'Workflows that work for you',
    tagline: 'Faster. Less busywork. Still you.',
    description:
      'Faster, less busywork, but keeping what makes you you.',
    features: [
      'We watch how your day actually goes',
      "We keep what you love, and fix what you don't!",
    ],
    deliverables: [
      'We watch how your day actually goes',
      "We keep what you love, and fix what you don't!",
    ],
  },
  {
    slug: 'consulting',
    icon: Compass,
    title: 'Consulting',
    tagline: 'Grow. Tighten. Supercharge.',
    description:
      'Looking for insights into how to grow? Where to optimize? Let’s find out how to supercharge your business.',
    features: [
      "Keep what's working, rework what isn't",
      'Take back your time and money',
      'A plan you can follow, in plain English',
      "We don't leave you with an 80-page document and a prayer — our team sits down until you understand, then follows up on action items",
    ],
    deliverables: [
      "Keep what's working, rework what isn't",
      'Take back your time and money',
      'A plan you can follow, in plain English',
      'A sit-down so you understand — plus follow-up on action items',
    ],
  },
]

export const serviceSelectOptions = [
  ...services.map((service) => service.title),
  'Not sure yet',
]

export type AudienceScene = {
  quote: string
  name: string
  role: string
}

export const audienceScenes: AudienceScene[] = [
  {
    name: "You're wearing every hat",
    role: 'Owner, bookkeeper, marketer, unofficial IT',
    quote:
      "Something's got to give. You started this to do the work you love — not to be on hold with another software company.",
  },
  {
    name: 'The software is running you',
    role: 'Logins, workarounds, “ask the one person who knows”',
    quote:
      "That's a Tuesday, not a strategy. We help you get the tools back on your side.",
  },
  {
    name: 'You just want it to work',
    role: 'Not trying to become technical',
    quote:
      'You want the thing to behave so you can go home on time. That is a perfectly good goal.',
  },
]

export const homeContact = {
  title: "Tell us what's in the way",
  line: "Let's get to know each other! Our team always follows up personally.",
  points: [
    'No jargon in the reply',
    'No pressure to buy a giant project',
    'Usually a next step within a business day',
  ],
}

export const values = whyUsCards

export const about = {
  heroTitle: 'A small team that likes people as much as software.',
  heroLine:
    "We're Nautilus Solutions. We take the tech so you can get back to changing the world.",
  storyTitle: 'How we got here',
  story: [
    'Justin started by fixing small tech headaches for friends, then writing software to optimize his tasks at work.',
    'He subcontracted for several years with a (fantastic) digital marketing agency, and now is leading a team of professional fix-it specialists who love giving time back to business owners.',
    'You tell us how your day goes. We give you more hours in the lab, in the field, with customers, building — whatever it is you love, we want you to have more!',
  ],
  mission: 'People people — and also computer people :)',
  stats: [
    { value: '3+', label: 'Projects' },
    { value: '4+', label: 'Industries' },
    { value: '100%', label: 'Satisfaction guarantee' },
  ],
  teamIntro:
    "You'll hear from a person who already knows your project. No account-manager maze.",
  ctaTitle: 'Want a team that actually picks up?',
  ctaLine: "Tell us what's in the way. We'll write back like a human.",
  ctaButton: "Let's talk",
}

export const team = [
  {
    name: 'Justin Bushfield',
    role: 'Founder',
    bio: 'Justin worked his way through a Software Engineering degree as a technical consultant. Now, he is pursuing his passion to enable people to do the work they love.',
    image: '',
  },
]

export const stats = about.stats

export const servicesPage = {
  heroTitle: 'We take it off your plate',
  heroLine:
    "Website, app, workflow, or a second set of eyes. If you're not sure which, say what is slowing you down — we'll help you pick.",
  ctaTitle: "Not sure which service? That's normal.",
  ctaLine: "Shoot us a message. We'll get in touch.",
  ctaButton: "Let's talk",
}

export const processIntro = {
  title: 'No secrets here, this is where the magic happens.',
}

export const processSteps = [
  {
    title: 'We listen',
    description:
      'You tell us how your day goes. We learn what drives you, what excites you, what works for you and your team.',
  },
  {
    title: 'We build a plan',
    description:
      'Our exact action steps, the cost breakdown, what you can ignore. All in writing.',
  },
  {
    title: 'We team up',
    description:
      'Our team regularly updates you on the progress. You see it early, you steer.',
  },
  {
    title: 'You win',
    description:
      'The product is always yours. And we are always happy to lend a hand in the future.',
  },
]

export const faqs: { question: string; answer: string }[] = [
  {
    question: 'Do I need to be technical?',
    answer: "No. If we can't explain it simply, we haven't finished.",
  },
  {
    question: 'How do I start?',
    answer: 'Send a note. A real person will reply and suggest a next step.',
  },
  {
    question: "I don't know what I need",
    answer: "Perfect. Describe the headache. We'll help you name it.",
  },
  {
    question: 'Who owns the work?',
    answer: 'You. Data, logins, the thing we built. All yours.',
  },
  {
    question: 'How do you charge?',
    answer:
      'We agree on a price and payment model beforehand, no surprise billing.',
  },
]

export const projects = [1, 2, 3].map((n) => ({
  slug: `project-${n}`,
  title: 'Copy later',
  client: 'Copy later',
  category: 'Copy later',
  summary: 'Copy later',
  image: '',
  metrics: [
    { label: 'Copy later', value: 'Copy later' },
    { label: 'Copy later', value: 'Copy later' },
  ],
  tags: [] as string[],
}))
