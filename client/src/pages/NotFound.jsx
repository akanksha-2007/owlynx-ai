import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <Link to="/" className="mt-4 inline-block text-indigo-300 hover:text-indigo-200">
        Go back home
      </Link>
    </section>
  )
}