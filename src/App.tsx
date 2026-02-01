import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PlayersPage from './pages/PlayersPage'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/joueurs" element={<PlayersPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
