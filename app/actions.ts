'use server'

export type LeadState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const services = [
  'Web Design & Development',
  'Custom App Development',
  'Platform Migration',
  'Workflow Optimization',
  'Not sure yet',
]

export async function submitLead(
  _prev: LeadState,
  formData: FormData,
): Promise<LeadState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const service = String(formData.get('service') ?? '').trim()

  if (!name || !email || !message) {
    return {
      status: 'error',
      message: 'Please fill in your name, email, and a short message.',
    }
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailOk) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  if (service && !services.includes(service)) {
    return { status: 'error', message: 'Please choose a valid service.' }
  }

  // In production this would forward to a CRM, email, or database.
  await new Promise((resolve) => setTimeout(resolve, 600))

  return {
    status: 'success',
    message: `Thanks, ${name.split(' ')[0]}. We received your message and will reply within one business day.`,
  }
}
