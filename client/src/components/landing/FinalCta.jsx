import { Link } from 'react-router-dom'

export default function FinalCta() {
  return (
    <section className="mt-20 rounded-3xl border border-indigo-400/20 bg-linear-to-r from-indigo-600/20 to-violet-600/20 px-6 py-12 text-center">
      <h2 className="text-3xl font-bold">Ready to practise?</h2>
      <p className="mx-auto mt-2 max-w-md text-slate-300">
        Pick a category, answer one question out loud and see how you do.
      </p>
      <Link
        to="/setup"
        className="mt-6 inline-block rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
      >
        Start practice
      </Link>
    </section>
  )
}