import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'indigo'
}

export function Badge({ children, className = '', variant = 'default' }: BadgeProps) {
  const baseStyles = 'inline-block px-3 py-1 rounded-full text-xs font-medium'

  const variantStyles = {
    default: 'bg-white/10 text-neutral-300 border border-white/10',
    indigo: 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30',
  }

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}
