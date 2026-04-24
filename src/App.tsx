import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { getTranslations } from './i18n'
import { useLocale } from './hooks/useLocale'

const HomePage = lazy(() => import('./pages/HomePage'))
const MJPage = lazy(() => import('./pages/MJPage'))
const PlayersPage = lazy(() => import('./pages/PlayersPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const LegalPage = lazy(() => import('./pages/LegalPage'))

function App() {
  const [locale] = useLocale()
  const t = getTranslations(locale)

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <div className="content-wrapper">
        <Suspense fallback={<div className="loading">{t.app.loading}</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/meneur" element={<MJPage />} />
            <Route path="/joueurs" element={<PlayersPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/mentions-legales" element={<LegalPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
