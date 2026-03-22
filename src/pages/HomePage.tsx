import { Link } from 'react-router-dom'
import { SlideAnimation } from 'react-kariu'

function HomePage() {
  return (
    <main id="resources-container">
      <SlideAnimation direction="bottom" duration={500} delay={200} trigger={true}>
        <section className="section">
          <p>
            Bienvenue sur le site officiel des ressources de <strong>A/Normal</strong>, le jeu de rôle d'Aurore Darcissac.<br />
            Téléchargez gratuitement fiches de personnage, fiches de PNJ, plans et autres supports pour enrichir vos parties.
          </p>
        </section>
      </SlideAnimation>

      <SlideAnimation direction="bottom" duration={500} delay={400} trigger={true}>
        <div className="home-cards">
          <div className="home-card">
            <div className="home-card-icon">🎭</div>
            <h2 className="home-card-title">Espace Meneur de Jeu</h2>
            <p className="home-card-description">
              Accédez aux fiches de PNJ, scénarios et ressources réservées au Meneur de Jeu.
              <br />
              <strong>⚠️ Contient des spoilers.</strong>
            </p>
            <Link to="/meneur" className="mj-confirm-btn">
              🎭 Accéder à l'espace MJ
            </Link>
          </div>

          <div className="home-card">
            <div className="home-card-icon">🎲</div>
            <h2 className="home-card-title">Espace Joueurs</h2>
            <p className="home-card-description">
              Fiches de personnage vierges, plans et générateur de personnage aléatoire.<br />
              Tout ce qu'il vous faut pour créer votre personnage et jouer.
            </p>
            <Link to="/joueurs" className="mj-back-btn">
              🎲 Accéder à l'espace Joueurs
            </Link>
          </div>
        </div>
      </SlideAnimation>
    </main>
  )
}

export default HomePage
