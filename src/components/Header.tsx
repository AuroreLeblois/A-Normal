// @ts-ignore
import diceSvg from '/dice.svg'
import { SlideAnimation, Title } from 'react-kariu'
import { Link, useLocation } from 'react-router-dom'
// HashRouter: les chemins sont sous forme /#/path

function Header() {
  const location = useLocation()

  return (
    <header>
      <SlideAnimation direction="top" duration={500} delay={100} trigger={true}>
        <Link to="/">
          <img src={diceSvg} alt="Icône A/Normal" />
        </Link>
      </SlideAnimation>
      <SlideAnimation direction="top" duration={500} delay={300} trigger={true}>
        <Title priority={1} text="A/NORMAL" />
      </SlideAnimation>
      <SlideAnimation direction="top" duration={500} delay={600} trigger={true}>
        <Title priority={2} text="Ressources officielles du jeu — Aurore Darcissac" />
      </SlideAnimation>
      <SlideAnimation direction="top" duration={500} delay={800} trigger={true}>
        <nav className="main-nav">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            🎭 Meneur de Jeu
          </Link>
          <Link to="/joueurs" className={`nav-link ${location.pathname === '/joueurs' ? 'active' : ''}`}>
            🎲 Joueurs
          </Link>
        </nav>
      </SlideAnimation>
    </header>
  )
}

export default Header
