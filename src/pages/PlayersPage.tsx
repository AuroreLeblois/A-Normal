import { SlideAnimation, Button } from 'react-kariu'
import { BentoMainCard, BentoSideCard } from '../components/BentoCards'
import CharacterRandomizer from '../components/CharacterRandomizer'
import ErrorBanner from '../components/ErrorBanner'
import PageHeader from '../components/PageHeader'
import { DISCORD_URL } from '../constants/links'
import { useFetchJson } from '../hooks/useFetchJson'
import { useLocale } from '../hooks/useLocale'
import { getTranslations } from '../i18n'
import { ResourcesConfig } from '../types'

function PlayersPage() {
  const [locale] = useLocale()
  const t = getTranslations(locale)

  const { data: config, error } = useFetchJson<ResourcesConfig>(
    `${import.meta.env.BASE_URL}resources-joueurs.json`
  )

  const mainSection = config?.sections[0]
  const otherSections = config?.sections.slice(1) ?? []

  return (
    <div className="page-content">
      <PageHeader
        icon="🎯"
        title={t.pages.players.title}
        titleClass="page-title"
        description={t.pages.players.description}
      />

      {error && <ErrorBanner />}

      {config && (
        <SlideAnimation direction="bottom" duration={600} delay={200} trigger={true}>
          <div className="bento-grid" style={{ marginBottom: '2rem' }}>
            {mainSection && <BentoMainCard section={mainSection} />}

            {otherSections.map(section => (
              <BentoSideCard key={section.id} section={section} />
            ))}

            <div className="bento-full">
              <div className="bento-card-half">
                <div className="bento-card-half-inner">
                  <div style={{ flex: 1 }}>
                    <h4 className="bento-card-half-title">{t.pages.players.characterGenerator.title}</h4>
                    <p className="bento-card-half-desc">{t.pages.players.characterGenerator.description}</p>
                    <CharacterRandomizer />
                  </div>
                </div>
              </div>
            </div>

            <div className="bento-full bento-community">
              <div className="bento-community-info">
                <span className="bento-community-icon">💪</span>
                <div>
                  <h4 className="bento-community-title">{t.pages.players.community.title}</h4>
                  <p className="bento-community-desc">{t.pages.players.community.description}</p>
                </div>
              </div>
              <Button
                label={t.pages.players.community.cta}
                className="btn-outline"
                onClick={() => window.open(DISCORD_URL, '_blank', 'noopener,noreferrer')}
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
