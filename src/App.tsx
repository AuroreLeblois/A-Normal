import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

// Lazy loading des pages pour réduire le bundle initial
const HomePage = lazy(() => import('./pages/HomePage'))
const MJPage = lazy(() => import('./pages/MJPage'))
const PlayersPage = lazy(() => import('./pages/PlayersPage'))

function App() {
  return (
    <HashRouter>
      <Header />
      <Suspense fallback={<div className="loading">Chargement...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meneur" element={<MJPage />} />
          <Route path="/joueurs" element={<PlayersPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </HashRouter>
  )
}

export default App
