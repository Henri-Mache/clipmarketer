import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'electric' | 'glass'
}

export function Card({ children, className = '', variant = 'default' }: CardProps) {
  const baseStyles = 'rounded-3xl p-6 transition-all duration-300'

  const variantStyles = {
    default: 'bg-white/5 border border-white/10',
    electric: 'bg-white/5 border border-white/10 electric-card',
    glass: 'bg-white/5 backdrop-blur-lg border border-white/10',
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  )
}
