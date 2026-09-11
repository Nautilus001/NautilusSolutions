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
      'Looks right on a phone',
      'Plain-English pages',
      'Easy to update later',
      'A clear way to contact you',
    ],
    deliverables: [
      'A site that explains what you do',
      'A simple way to change the words later',
      'Help getting it live',
      'Someone to call if it acts up',
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
      'Built around how you already work',
      'Explained without jargon',
      'Yours when we hand it over',
      'Room to grow later',
    ],
    deliverables: [
      'A clear picture of what we are building',
      'A working app you can try early',
      'Training in plain English',
      'The keys when we are done',
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
      'We watch how the week actually goes',
      'Cut the copy-paste and double-entry',
      'Keep the parts customers love',
      'No “new system” surprise',
    ],
    deliverables: [
      'A map of what is slowing you down',
      'A simpler path for the same work',
      'The busywork handled or gone',
      'A team that already knows the new rhythm',
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
      'Honest look at what is working',
      'Where time and money leak',
      'A plan you can actually follow',
      'No 80-page report you will never read',
    ],
    deliverables: [
      'A conversation, not a lecture',
      'A short list of what to do next',
      'What to skip (and why)',
      'Help doing the first steps if you want it',
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
