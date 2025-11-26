import type { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'danger'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-sky-600 text-white shadow hover:bg-sky-500 focus-visible:ring-sky-400 dark:bg-sky-500 dark:hover:bg-sky-400',
  secondary:
    'bg-white/80 text-slate-900 shadow-inner ring-1 ring-slate-200 hover:bg-white focus-visible:ring-sky-400 dark:bg-slate-800/70 dark:text-slate-100 dark:ring-slate-700',
  danger:
    'bg-rose-600 text-white shadow hover:bg-rose-500 focus-visible:ring-rose-400 dark:bg-rose-500 dark:hover:bg-rose-400',
}

const Button = ({ children, className, variant = 'primary', leftIcon, rightIcon, ...rest }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50',
        variantStyles[variant],
        className
      )}
      {...rest}
    >
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </button>
  )
}

export default Button

