import { useSession } from '../hooks/useSession.js'

export default function Setup() {
  const { setup } = useSession()

  return (
    <section>
      <h1 className="text-3xl font-bold">Interview setup</h1>
      <p className="mt-2 text-sm text-slate-400">Setup form: coming soon. Current defaults from session state:</p>
      <pre className="mt-4 rounded-lg bg-white/5 p-4 text-sm text-slate-300">
        {JSON.stringify(setup, null, 2)}
      </pre>
    </section>
  )
}