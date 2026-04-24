import { Link } from 'react-router-dom'
import { SlideAnimation } from 'react-kariu'
import ErrorBanner from '../components/ErrorBanner'
import MJGate from '../components/MJGate'
import PageHeader from '../components/PageHeader'
import PromoSection from '../components/PromoSection'
import ResourceSection from '../components/ResourceSection'
import { useFetchJson } from '../hooks/useFetchJson'
import { useLocale } from '../hooks/useLocale'
import { useSessionStorage } from '../hooks/useSessionStorage'
import { getTranslations } from '../i18n'
import { ResourcesConfig } from '../types'

function MJPage() {
  const [locale] = useLocale()
  const t = getTranslations(locale)
  const [isMJConfirmed, setIsMJConfirmed] = useSessionStorage('mj-confirmed', false)

  const { data: config, error } = useFetchJson<ResourcesConfig>(
    isMJConfirmed ? `${import.meta.env.BASE_URL}resources-mj.json` : ''
  )

  const handleConfirmMJ = () => setIsMJConfirmed(true)

  if (!isMJConfirmed) {
    return <MJGate onConfirm={handleConfirmMJ} />
  }

  return (
    <div className="page-content">
      <PageHeader
        badge={t.pages.gm.badge}
        badgeClass="spoiler"
        titleJsx={
          <h1 className="mj-split-title">
            {t.pages.gm.titlePrefix} <span className="accent">{t.pages.gm.titleAccent}</span>
          </h1>
        }
        description={t.pages.gm.description}
      />

      <SlideAnimation direction="bottom" duration={500} delay={180} trigger={true}>
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/joueurs" className="mj-back-btn" style={{ display: 'inline-flex', width: 'auto' }}>
            {t.pages.gm.backToPlayers}
          </Link>
        </div>
      </SlideAnimation>

      {error && <ErrorBanner />}

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
