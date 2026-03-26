import { useNavigate } from 'react-router-dom'
import { SlideAnimation, Title, Button } from 'react-kariu'

function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="hero-section">
      <div className="hero-bg" />

      <SlideAnimation direction="bottom" duration={700} delay={150} trigger={true}>
        <div className="hero-content">

          <span className="hero-eyebrow">Ressources officielles</span>

          <Title priority={1} text="A NORMAL :" className="hero-title" />
          <Title priority={2} text="L'Archive des Ressources Officielles" className="hero-title-sub" />

          <p className="hero-body">
            Plongez dans les strates d'un monde onirique et brutal.
            Les archives du jeu de rôle d'Aurore Darcissac — fiches, plans,
            scénarios et outils pour enrichir chaque session.
          </p>

          <div className="hero-cta">
            <Button
              label="🎭 Espace Meneur de Jeu"
              primary
              className="btn-primary"
              onClick={() => navigate('/meneur')}
            />
            <Button
              label="🎲 Espace Joueurs"
              className="btn-outline"
              onClick={() => navigate('/joueurs')}
            />
          </div>

        </div>
      </SlideAnimation>
    </section>
  )
}

export default HeroSection
