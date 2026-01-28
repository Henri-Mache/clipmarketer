import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Demo | ClipMarketer',
  description: 'Schedule a demo call with ClipMarketer to learn how we can help you turn long-form content into consistent short-form growth.',
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
