import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/cn'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm',
        primary: 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm',
        ghost: 'bg-transparent hover:bg-zinc-100 text-zinc-900',
        outline: 'border border-zinc-300 text-zinc-900 hover:bg-white/60 backdrop-blur'
      },
      size: {
        sm: 'h-9 px-4',
        md: 'h-11 px-6',
        lg: 'h-12 px-8 text-base'
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




