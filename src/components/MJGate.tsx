import { Link } from 'react-router-dom'
import { SlideAnimation, Title } from 'react-kariu'

interface Props {
  onConfirm: () => void
}

function MJGate({ onConfirm }: Props) {
  return (
    <div className="mj-gate">
      <SlideAnimation direction="bottom" duration={500} delay={100} trigger={true} sx={{ display: 'flex', justifyContent: 'center' }}>
        <div className="mj-gate-content">
          <span className="mj-gate-icon">🎭</span>
          <div className="mj-gate-spoiler-badge">⚠️ Contient des spoilers</div>
          <Title priority={2} text="Espace Meneur de Jeu" className="mj-gate-title" />
          <div className="mj-gate-warning">
            <span className="warning-icon">⚠️</span>
            <p>
              <strong>Attention&nbsp;!</strong> Cette section contient des{' '}
              <strong>spoilers</strong> destinés uniquement au Meneur de Jeu.
            </p>
            <p>
              Si vous êtes un <strong>joueur</strong>, retournez à l'espace
              Joueurs pour préserver votre expérience de jeu.
            </p>
          </div>
          <div className="mj-gate-buttons">
            <button className="mj-confirm-btn" onClick={onConfirm}>
              🎲 Je suis le MJ — accéder au contenu
            </button>
            <Link to="/joueurs" className="mj-back-btn">
              👥 Je suis un joueur, retourner
            </Link>
          </div>
        </div>
      </SlideAnimation>
    </div>
  )
}

export default MJGate
