import { FileText, MessageSquare, Mic, SlidersHorizontal, Sparkles, Volume2 } from 'lucide-react'

const STEPS = [
  {
    icon: SlidersHorizontal,
    title: 'Choose your session',
    text: 'Pick a category (Technical, HR or Behavioral), your language and the difficulty.',
  },
  {
    icon: MessageSquare,
    title: 'Get a question',
    text: 'Receive an interview question matched to your choices.',
  },
  {
    icon: Mic,
    title: 'Record your answer',
    text: 'Speak your answer, listen back, and submit when you are happy with it.',
  },
  {
    icon: FileText,
    title: 'See your transcript',
    text: 'Your speech is converted to text so you can review exactly what you said.',
  },
  {
    icon: Sparkles,
    title: 'Get AI feedback',
    text: 'Receive scores, strengths, improvements and a stronger sample answer.',
  },
  {
    icon: Volume2,
    title: 'Listen and retry',
    text: 'Hear the feedback spoken aloud, then try again and improve.',
  },
]

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works" className="mt-20">
      <h2 id="how-it-works" className="text-center text-3xl font-bold">
        How it works
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-slate-400">
        Six steps from question to improvement.
      </p>

      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map(({ icon: Icon, title, text }, index) => (
          <li key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-indigo-300">Step {index + 1}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-slate-400">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}