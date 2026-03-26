import { useNavigate } from 'react-router-dom'
import { SlideAnimation, Title, Button, HoverAnimation } from 'react-kariu'

function HomeCards() {
  const navigate = useNavigate()

  return (
    <section className="home-section">
      <div className="home-section-inner">

        <SlideAnimation direction="bottom" duration={600} delay={100} trigger={true}>
          <Title priority={2} text="Choisissez votre rôle" className="home-section-title" />
        </SlideAnimation>

        <div className="home-cards">

          {/* Card MJ */}
          <SlideAnimation direction="bottom" duration={600} delay={200} trigger={true}>
            <HoverAnimation duration={300} intensity={0.5} type="scale">
              <div className="home-card">
                <span className="home-card-icon">🎭</span>
                <span className="home-card-eyebrow">Confidentiel</span>
                <Title priority={3} text="Espace Meneur de Jeu" />
                <p className="home-card-desc">
                  Archives confidentielles réservées aux architectes de l'Étrange.
                  Fiches de PNJ, scénarios et ressources destinées au Meneur.<br />
                  <strong style={{ color: '#ffb4ab', fontSize: '0.82rem' }}>
                    ⚠️ Contient des spoilers.
                  </strong>
                </p>
                <Button
                  label="🎭 Accéder à l'espace MJ"
                  primary
                  className="btn-primary"
                  onClick={() => navigate('/meneur')}
                />
              </div>
            </HoverAnimation>
          </SlideAnimation>

          {/* Card Joueurs */}
          <SlideAnimation direction="bottom" duration={600} delay={350} trigger={true}>
            <HoverAnimation duration={300} intensity={0.5} type="scale">
              <div className="home-card">
                <span className="home-card-icon">🎲</span>
                <span className="home-card-eyebrow">Ressources libres</span>
                <Title priority={3} text="Espace Joueurs" />
                <p className="home-card-desc">
                  Fiches de personnage vierges, plans et générateur de personnage aléatoire.
                  Tout ce qu'il vous faut pour créer votre personnage et jouer.
                </p>
                <Button
                  label="🎲 Accéder à l'espace Joueurs"
                  className="btn-outline"
                  onClick={() => navigate('/joueurs')}
                />
              </div>
            </HoverAnimation>
          </SlideAnimation>

        </div>
      </div>
    </section>
  )
}

export default HomeCards
