import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/cn'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-[#c2185b] text-white hover:bg-[#9c1249]',
        primary: 'bg-[#c2185b] text-white hover:bg-[#9c1249]',
        ghost: 'bg-transparent hover:bg-black/5 text-zinc-900',
        outline: 'border border-[#1b365d]/25 text-[#1b365d] hover:border-[#c2185b] hover:text-[#c2185b]'
      },
      size: {
        sm: 'h-9 px-3 sm:px-4',
        md: 'h-10 px-5 sm:h-11 sm:px-6',
        lg: 'h-11 px-5 text-sm sm:h-12 sm:px-8 sm:text-base'
      }
    },
    defaultVariants: { variant: 'default', size: 'md' }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
)
Button.displayName = 'Button'




