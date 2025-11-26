import type { ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  title?: string
  children: ReactNode
  className?: string
  footer?: ReactNode
}

const Card = ({ title, children, className, footer }: CardProps) => {
  return (
    <article
      className={clsx(
        'flex flex-col gap-4 rounded-2xl bg-white/90 p-6 shadow-card backdrop-blur dark:bg-slate-800/70',
        className
      )}
    >
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      <div className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{children}</div>
      {footer && <div className="pt-2">{footer}</div>}
    </article>
  )
}

export default Card

