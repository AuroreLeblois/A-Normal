import { Link } from 'react-router-dom'
import { ResourcesConfig } from '../types'
import ResourceSection from '../components/ResourceSection'
import MJGate from '../components/MJGate'
import PageHeader from '../components/PageHeader'
import PromoSection from '../components/PromoSection'
import ErrorBanner from '../components/ErrorBanner'
import { SlideAnimation } from 'react-kariu'
import { useFetchJson } from '../hooks/useFetchJson'
import { useSessionStorage } from '../hooks/useSessionStorage'

function MJPage() {
  const [isMJConfirmed, setIsMJConfirmed] = useSessionStorage('mj-confirmed', false)

  const { data: config, error } = useFetchJson<ResourcesConfig>(
    isMJConfirmed ? `${import.meta.env.BASE_URL}resources-mj.json` : ''
  )

  const handleConfirmMJ = () => setIsMJConfirmed(true)

  /* ── Écran de garde ── */
  if (!isMJConfirmed) {
    return <MJGate onConfirm={handleConfirmMJ} />
  }

  /* ── Contenu MJ ── */
  return (
    <div className="page-content">

      <PageHeader
        badge="⚠️ Contient des spoilers"
        badgeClass="spoiler"
        titleJsx={
          <h1 className="mj-split-title">
            Espace <span className="accent">Meneur de Jeu</span>
          </h1>
        }
        description="Archives confidentielles réservées aux architectes de l'Étrange.
          Accédez aux structures narratives, cartographies occultes et dossiers
          de PNJ pour orchestrer vos sessions."
      />

      {/* ── Retour joueurs ── */}
      <SlideAnimation direction="bottom" duration={500} delay={180} trigger={true}>
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/joueurs" className="mj-back-btn" style={{ display: 'inline-flex', width: 'auto' }}>
            👥 Je suis un joueur — espace Joueurs
          </Link>
        </div>
      </SlideAnimation>

      {error && <ErrorBanner />}

      {/* ── Grille staggered 3 colonnes ── */}
      {config && (
        <SlideAnimation direction="bottom" duration={600} delay={280} trigger={true}>
          <div className="resource-grid-stagger">
            {config.sections.map(section => (
              <ResourceSection key={section.id} section={section} />
            ))}
          </div>
        </SlideAnimation>
      )}

      <PromoSection />

    </div>
  )
}

export default MJPage
