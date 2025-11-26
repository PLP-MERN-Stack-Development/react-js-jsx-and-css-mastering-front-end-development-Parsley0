import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'Overview', to: '/' },
  { label: 'Care Checklist', to: '/tasks' },
  { label: 'Resource Library', to: '/explore' },
]

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/60 bg-white/90 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="text-lg font-bold text-slate-900 dark:text-white">
          SmileCare Hub
        </NavLink>
        <nav className="flex items-center gap-4 text-sm font-medium">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  'rounded-lg px-3 py-2 transition-colors',
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Navbar

