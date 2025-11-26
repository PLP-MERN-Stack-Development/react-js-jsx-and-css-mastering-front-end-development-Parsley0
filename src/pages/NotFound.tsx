import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="mx-auto max-w-xl space-y-6 text-center">
      <p className="text-sm uppercase tracking-widest text-slate-400">404</p>
      <h1 className="text-4xl font-black">Page not found</h1>
      <p className="text-slate-500 dark:text-slate-300">The route you requested does not exist.</p>
      <Button onClick={() => navigate('/')}>Back to home</Button>
    </div>
  )
}

export default NotFound

