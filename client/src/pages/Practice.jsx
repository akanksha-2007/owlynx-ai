import { Link } from 'react-router-dom'
import { useSession } from '../hooks/useSession.js'
import Recorder from '../components/voice/Recorder.jsx'
import { CATEGORIES, DIFFICULTIES, LANGUAGES } from '../utils/options.js'

const labelOf = (list, value) => list.find((item) => item.value === value)?.label ?? value

export default function Practice() {
  const { setup } = useSession()

  return (
    <section className="mx-auto max-w-3xl">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Interview practice</h1>
        <Link to="/setup" className="text-sm text-indigo-300 hover:text-indigo-200">
          Change setup
        </Link>
      </div>

      <p className="mt-2 text-sm text-slate-400">
        {labelOf(CATEGORIES, setup.category)} · {labelOf(DIFFICULTIES, setup.difficulty)} ·{' '}
        {labelOf(LANGUAGES, setup.language)}
      </p>

      <div className="mt-6 rounded-2xl border border-dashed border-white/20 p-5 text-sm text-slate-400">
        Interview questions are not connected yet. We add them in the next step. For now, use the
        recorder below to test your microphone.
      </div>

      <div className="mt-6">
        <Recorder />
      </div>
    </section>
  )
}