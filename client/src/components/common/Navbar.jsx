import { Link, NavLink } from 'react-router-dom'
import { Mic } from 'lucide-react'

const linkClass = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? 'bg-indigo-500/20 text-indigo-300' : 'text-slate-300 hover:text-white'
  }`

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500">
            <Mic size={18} aria-hidden="true" />
          </span>
          OWLYNX <span className="text-indigo-400">AI</span>
        </Link>
        <div className="flex items-center gap-1">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/setup" className={linkClass}>
            Practice
          </NavLink>
        </div>
      </nav>
    </header>
  )
}