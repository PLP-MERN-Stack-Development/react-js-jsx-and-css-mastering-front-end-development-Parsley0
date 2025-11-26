import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'

const features = [
  {
    title: 'Daily hygiene',
    description: 'Track brushing, flossing, and tongue-cleaning habits so every patient visit starts with a healthy smile.',
  },
  {
    title: 'Preventive care',
    description: 'Schedule fluoride treatments, sealants, and routine checkups with reminders that stay after a refresh.',
  },
  {
    title: 'Dental knowledge',
    description: 'Browse curated oral-health articles, tips, and myth busters pulled from the Resource Library.',
  },
]

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="space-y-12">
      <section className="grid gap-8 rounded-3xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 p-8 text-white shadow-card lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-white/80">SmileCare Hub · Dental Wellness Portal</p>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl">
            Build brighter smiles with guided dental habits and trusted resources.
          </h1>
          <p className="text-lg text-white/80">
            Use the SmileCare checklist to plan at-home hygiene, then dive into our resource library for the latest oral
            health advice from licensed professionals and public data sources.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => navigate('/tasks')}>Open Care Checklist</Button>
            <Button variant="secondary" onClick={() => navigate('/explore')}>
              Browse Resources
            </Button>
          </div>
        </div>
        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
          <ul className="space-y-4 text-sm leading-relaxed text-white/80">
            <li>✅ Personalized action plan for oral hygiene</li>
            <li>✅ Light + dark mode for comfortable reading</li>
            <li>✅ Care history saved securely in your browser</li>
            <li>✅ Evidence-based articles with search & filters</li>
          </ul>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} title={feature.title}>
            <p>{feature.description}</p>
          </Card>
        ))}
      </section>
    </div>
  )
}

export default Home

