import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section>
      <h1 className="text-4xl font-bold">OWLYNX AI</h1>
      <p className="mt-2 text-indigo-300">Your Voice. Your Intelligence. Your Confidence.</p>
      <p className="mt-6 text-sm text-slate-400">Landing page: full design coming in the next step.</p>
      <Link
        to="/setup"
        className="mt-6 inline-block rounded-lg bg-indigo-500 px-5 py-2.5 font-medium hover:bg-indigo-400"
      >
        Start practice
      </Link>
    </section>
  )
}