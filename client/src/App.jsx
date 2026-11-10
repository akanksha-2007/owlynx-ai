import { Route, Routes } from 'react-router-dom'
import SessionProvider from './context/SessionProvider.jsx'
import Layout from './components/common/Layout.jsx'
import Landing from './pages/Landing.jsx'
import Setup from './pages/Setup.jsx'
import Practice from './pages/Practice.jsx'
import Results from './pages/Results.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <SessionProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="setup" element={<Setup />} />
          <Route path="practice" element={<Practice />} />
          <Route path="results" element={<Results />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </SessionProvider>
  )
}