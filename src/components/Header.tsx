// @ts-ignore
import diceSvg from '/dice.svg'
import { SlideAnimation, Button } from 'react-kariu'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  return (
    <header className="main-header">
      <SlideAnimation direction="top" duration={500} delay={50} trigger={true}>
        <nav className="nav-container">

          {/* ── Gauche : logo + liens ── */}
          <div className="nav-left">
            <Link to="/" className="nav-logo">
              A/Normal
            </Link>

            <div className="nav-links">
              <Link
                to="/"
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Accueil
              </Link>
              <Link
                to="/meneur"
                className={`nav-link ${location.pathname === '/meneur' ? 'active' : ''}`}
              >
                Meneur de Jeu
              </Link>
              <Link
                to="/joueurs"
                className={`nav-link ${location.pathname === '/joueurs' ? 'active' : ''}`}
              >
                Joueurs
              </Link>
              <Link
                to="/a-propos"
                className={`nav-link ${location.pathname === '/a-propos' ? 'active' : ''}`}
              >
                À propos
              </Link>
            </div>
          </div>

          {/* ── Droite : dé + soutenir ── */}
          <div className="nav-right">
            <Link to="/" className="nav-dice-btn" aria-label="Accueil">
              <img src={diceSvg} alt="dé" />
            </Link>

            <Button
              label="☕ Soutenir"
              primary
              className="nav-support-btn"
              onClick={() => window.open('https://buymeacoffee.com/lebloisaurk', '_blank')}
            />
          </div>

        </nav>
      </SlideAnimation>
    </header>
  )
}

export default Header
