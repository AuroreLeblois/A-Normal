import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ResourcesConfig } from '../types'
import ResourceSection from '../components/ResourceSection'
import { Layout } from 'react-kariu'

function MJPage() {
  const [config, setConfig] = useState<ResourcesConfig | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isMJConfirmed, setIsMJConfirmed] = useState<boolean>(() => {
    return sessionStorage.getItem('mj-confirmed') === 'true'
  });

  useEffect(() => {
    if (!isMJConfirmed) return;

    fetch(`${import.meta.env.BASE_URL}resources-mj.json`)
      .then(res => {
        if (!res.ok) throw new Error(`Erreur: ${res.status}`)
        return res.json()
      })
      .then(setConfig)
      .catch(err => setError(err.message))
      .finally(() => {
        sessionStorage.setItem('page', 'home')
      })
  }, [isMJConfirmed])

  const handleConfirmMJ = () => {
    sessionStorage.setItem('mj-confirmed', 'true');
    setIsMJConfirmed(true);
  };

  // Écran de confirmation MJ
  if (!isMJConfirmed) {
    return (
      <div className="mj-gate">
          <div className="mj-gate-content">
            <div className="mj-gate-icon">🎭</div>
            <h2 className="mj-gate-title">Espace Meneur de Jeu</h2>
            <div className="mj-gate-warning">
              <span className="warning-icon">⚠️</span>
              <p>
                <strong>Attention !</strong> Cette section contient des <strong>spoilers</strong> destinés uniquement au Meneur de Jeu.
              </p>
              <p>
                Si vous êtes un <strong>joueur</strong>, veuillez retourner à l'espace Joueurs pour préserver votre expérience de jeu.
              </p>
            </div>
            <div className="mj-gate-buttons">
              <button className="mj-confirm-btn" onClick={handleConfirmMJ}>
                🎲 Je suis le MJ, accéder au contenu
              </button>
              <Link to="/joueurs" className="mj-back-btn">
                👥 Je suis un joueur, retourner
              </Link>
            </div>
          </div>
      </div>
    );
  }

  return (
    <>
      <section className="section">
        <p>
          Bienvenue sur la page officielle des supports de jeu <strong>A/Normal</strong>.<br />
          Ici, vous pouvez télécharger les fiches vierges, les tableaux de compétences, les fiches de PNJ principaux et autres ressources pour enrichir vos parties.
        </p>
      </section>
      <section className="section">
        <p>
          Cette page est destinée aux <strong> MJ</strong> et contient des spoilers.
          Si vous êtes un joueur, veuillez retourner à l'espace Joueurs pour préserver votre expérience de jeu.
        </p>
      </section>
      <section className="section">
        <Link to="/joueurs" className="mj-back-btn">
              👥 Je suis un joueur, aller à l'espace Joueurs
          </Link>
        </section>
      <main id="resources-container">
        {error && (
          <div className="error">
            ⚠️ Impossible de charger les ressources. Veuillez rafraîchir la page.
          </div>
        )}

        {config && (
          <>
            {/* Groupe les sections par 2 */}
            <Layout flexDirection="row" flexWrap="wrap" gap={"2rem"} alignItems="start">
            {Array.from({ length: Math.ceil(config.sections.length / 2) }, (_, i) => (
              <div key={i.toString()}>
                {config.sections.slice(i * 2, i * 2 + 2).map(section => (
                  <ResourceSection key={section.id+i.toString()} section={section} />
                ))}
                </div>
            ))}
            </Layout>
          </>
        )}
      </main>
    </>
  )
}

export default MJPage
