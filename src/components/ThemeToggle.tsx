import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import Button from './Button'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  const Icon = theme === 'dark' ? SunIcon : MoonIcon
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <Button
      type="button"
      variant="secondary"
      className="px-3 py-2"
      aria-label={label}
      onClick={toggleTheme}
      leftIcon={<Icon className="h-5 w-5" />}
    >
      <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
    </Button>
  )
}

export default ThemeToggle

