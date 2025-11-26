const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/60 bg-white/90 py-6 text-sm text-slate-500 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>&copy; {currentYear} SmileCare Hub. Empowering better dental habits.</p>
        <div className="flex items-center gap-4">
          <a className="link-plain" href="https://www.mouthhealthy.org/" target="_blank" rel="noreferrer">
            Mouth Healthy
          </a>
          <a className="link-plain" href="https://www.cdc.gov/oralhealth/" target="_blank" rel="noreferrer">
            CDC Oral Health
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

