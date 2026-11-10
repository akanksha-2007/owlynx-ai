import { Gauge, Languages, Lightbulb, RotateCcw, ShieldCheck, Volume2 } from 'lucide-react'

const FEATURES = [
  {
    icon: Gauge,
    title: 'Structured scoring',
    text: 'Scores for relevance, accuracy, completeness, clarity, structure and examples.',
  },
  {
    icon: Lightbulb,
    title: 'Actionable feedback',
    text: 'Clear strengths, weak spots and an improved sample answer you can learn from.',
  },
  {
    icon: Volume2,
    title: 'Spoken feedback',
    text: 'Listen to your feedback read aloud, with playback controls.',
  },
  {
    icon: Languages,
    title: 'Your preferred language',
    text: 'Choose the language you want to practise in.',
  },
  {
    icon: RotateCcw,
    title: 'Retry and improve',
    text: 'Answer the same question again and see how your score changes.',
  },
  {
    icon: ShieldCheck,
    title: 'Private by design',
    text: 'AI keys stay on the server and are never exposed in your browser.',
  },
]

export default function Features() {
  return (
    <section aria-labelledby="features" className="mt-20">
      <h2 id="features" className="text-center text-3xl font-bold">
        Built to help you improve
      </h2>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-transparent p-6 transition hover:border-indigo-400/40"
          >
            <Icon size={22} className="text-violet-300" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-slate-400">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}