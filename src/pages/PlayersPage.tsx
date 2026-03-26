import { ResourcesConfig } from '../types'
import CharacterRandomizer from '../components/CharacterRandomizer'
import PageHeader from '../components/PageHeader'
import ErrorBanner from '../components/ErrorBanner'
import { BentoMainCard, BentoSideCard } from '../components/BentoCards'
import { SlideAnimation, Button } from 'react-kariu'
import { useFetchJson } from '../hooks/useFetchJson'

function PlayersPage() {
  const { data: config, error } = useFetchJson<ResourcesConfig>(
    `${import.meta.env.BASE_URL}resources-joueurs.json`
  )

  const mainSection   = config?.sections[0]
  const otherSections = config?.sections.slice(1) ?? []

  return (
    <div className="page-content">

      <PageHeader
        icon="🎲"
        title="Espace Joueurs"
        titleClass="page-title"
        description="Préparez votre prochaine session avec notre archive d'outils essentiels.
          Tout le nécessaire pour donner vie à votre personnage et naviguer dans l'obscurité."
      />

      {error && <ErrorBanner />}

      {/* ── Bento grid ── */}
      {config && (
        <SlideAnimation direction="bottom" duration={600} delay={200} trigger={true}>
          <div className="bento-grid" style={{ marginBottom: '2rem' }}>

            {mainSection && <BentoMainCard section={mainSection} />}

            {otherSections.map(section => (
              <BentoSideCard key={section.id} section={section} />
            ))}

            {/* Générateur de personnage en colonne pleine */}
            <div className="bento-full">
              <div className="bento-card-half">
                <div className="bento-card-half-inner">
                  <div className="bento-card-half-icon">🎲</div>
                  <div style={{ flex: 1 }}>
                    <h4 className="bento-card-half-title">Générateur de personnage</h4>
                    <p className="bento-card-half-desc">
                      Tirez aléatoirement genre, âge, anormalités connue et inconnue pour votre personnage.
                    </p>
                    <CharacterRandomizer />
                  </div>
                </div>
              </div>
            </div>

            {/* Bannière communauté */}
            <div className="bento-full bento-community">
              <div className="bento-community-info">
                <span className="bento-community-icon">💬</span>
                <div>
                  <h4 className="bento-community-title">Ressources Communautaires</h4>
                  <p className="bento-community-desc">
                    Retrouvez des centaines de fiches créées par la communauté sur notre Discord.
                  </p>
                </div>
              </div>
              <Button
                label="Rejoindre le Discord"
                className="btn-outline"
                onClick={() => {}}
                sx={{ fontSize: '0.75rem', padding: '0.6rem 1.25rem' }}
              />
            </div>

          </div>
        </SlideAnimation>
      )}

    </div>
  )
}

export default PlayersPage
