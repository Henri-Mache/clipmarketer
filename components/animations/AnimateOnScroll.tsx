'use client'

import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  delay?: string
}

export function AnimateOnScroll({ children, className = '', delay = '' }: AnimateOnScrollProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px',
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${className} ${delay} ${inView ? 'animate' : ''}`}
    >
      {children}
    </div>
  )
}
