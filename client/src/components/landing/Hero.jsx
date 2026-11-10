import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const BARS = Array.from({ length: 28 }, (_, i) => i)

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-indigo-950 via-slate-950 to-slate-950 px-6 py-16 text-center sm:px-12 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl"
      />

      <div className="relative">
        <p className="inline-block rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1 text-xs font-medium tracking-wide text-indigo-300">
          AI interview coaching, by voice
        </p>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
          Speak with{' '}
          <span className="bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            confidence
          </span>{' '}
          in your next interview
        </h1>

        <p className="mt-4 text-lg font-medium text-indigo-300">
          Your Voice. Your Intelligence. Your Confidence.
        </p>

        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Answer real interview questions out loud, then get scored feedback and an improved sample
          answer.
        </p>

        <div
          aria-hidden="true"
          className="mx-auto mt-10 flex h-16 max-w-xs items-center justify-center gap-1"
        >
          {BARS.map((i) => (
            <span
              key={i}
              className="voice-bar h-full w-1 rounded-full bg-linear-to-t from-indigo-500 to-violet-400"
              style={{
                animationDelay: `${-((i * 137) % 1000)}ms`,
                animationDuration: `${900 + ((i * 53) % 600)}ms`,
              }}
            />
          ))}
        </div>

        <Link
          to="/setup"
          className="mt-10 inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
        >
          Start practice
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}