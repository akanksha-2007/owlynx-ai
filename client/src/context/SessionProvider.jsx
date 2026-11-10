import { useMemo, useState } from 'react'
import { SessionContext } from './sessionContext.js'

const DEFAULT_SETUP = {
  category: 'technical', // technical | hr | behavioral
  language: 'en',
  difficulty: 'medium', // easy | medium | hard
}

export default function SessionProvider({ children }) {
  const [setup, setSetup] = useState(DEFAULT_SETUP)

  const value = useMemo(
    () => ({
      setup,
      updateSetup: (changes) => setSetup((prev) => ({ ...prev, ...changes })),
      resetSetup: () => setSetup(DEFAULT_SETUP),
    }),
    [setup],
  )

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}