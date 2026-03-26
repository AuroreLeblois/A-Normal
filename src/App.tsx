import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

// Lazy loading des pages pour réduire le bundle initial
const HomePage    = lazy(() => import('./pages/HomePage'))
const MJPage      = lazy(() => import('./pages/MJPage'))
const PlayersPage = lazy(() => import('./pages/PlayersPage'))
const AboutPage   = lazy(() => import('./pages/AboutPage'))

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      {/* content-wrapper compense la hauteur de la navbar fixe */}
      <div className="content-wrapper">
        <Suspense fallback={<div className="loading">Chargement de l'Archive…</div>}>
          <Routes>
            <Route path="/"          element={<HomePage />} />
            <Route path="/meneur"    element={<MJPage />} />
            <Route path="/joueurs"   element={<PlayersPage />} />
            <Route path="/a-propos"  element={<AboutPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
