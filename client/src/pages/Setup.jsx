import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useSession } from '../hooks/useSession.js'
import OptionGroup from '../components/interview/OptionGroup.jsx'
import { CATEGORIES, DIFFICULTIES, LANGUAGES } from '../utils/options.js'

export default function Setup() {
  const { setup, updateSetup } = useSession()
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    navigate('/practice')
  }

  return (
    <section className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold">Set up your interview</h1>
      <p className="mt-2 text-slate-400">Choose what you want to practise, then start your session.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-8">
        <OptionGroup
          legend="Interview category"
          name="category"
          options={CATEGORIES}
          value={setup.category}
          onChange={(category) => updateSetup({ category })}
        />

        <OptionGroup
          legend="Difficulty"
          name="difficulty"
          options={DIFFICULTIES}
          value={setup.difficulty}
          onChange={(difficulty) => updateSetup({ difficulty })}
        />

        <div>
          <label htmlFor="language" className="text-sm font-semibold text-slate-200">
            Language
          </label>
          <select
            id="language"
            value={setup.language}
            onChange={(event) => updateSetup({ language: event.target.value })}
            className="mt-3 block w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300 sm:w-72"
          >
            {LANGUAGES.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
        >
          Start session
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </form>
    </section>
  )
}