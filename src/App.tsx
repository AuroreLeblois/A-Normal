import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

// Lazy loading des pages pour réduire le bundle initial
const HomePage = lazy(() => import('./pages/HomePage'))
const MJPage = lazy(() => import('./pages/MJPage'))
const PlayersPage = lazy(() => import('./pages/PlayersPage'))

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <Suspense fallback={<div className="loading">Chargement...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meneur" element={<MJPage />} />
          <Route path="/joueurs" element={<PlayersPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App
