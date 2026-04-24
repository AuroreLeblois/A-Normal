import { useNavigate } from 'react-router-dom'
import { SlideAnimation, Title, Button } from 'react-kariu'
import { getTranslations } from '../i18n'
import { useLocale } from '../hooks/useLocale'

function HomeCards() {
  const navigate = useNavigate()
  const [locale] = useLocale()
  const t = getTranslations(locale)

  return (
    <section className="home-section">
      <div className="home-section-inner">
        <SlideAnimation direction="bottom" duration={600} delay={100} trigger={true}>
          <span className="home-section-label">{t.home.cards.sectionLabel}</span>
          <Title priority={2} text={t.home.cards.sectionTitle} className="home-section-title" />
        </SlideAnimation>

        <div className="home-cards">
          <SlideAnimation direction="bottom" duration={600} delay={200} trigger={true}>
            <div className="home-card">
              <span className="home-card-icon">🎲</span>
              <span className="home-card-eyebrow">{t.home.cards.gm.eyebrow}</span>
              <Title priority={3} text={t.home.cards.gm.title} />
              <p className="home-card-desc">
                {t.home.cards.gm.body}
                <br />
                <strong style={{ color: '#ffb4ab', fontSize: '0.82rem' }}>
                  {`⚠️ ${t.home.cards.gm.spoilerWarning}`}
                </strong>
              </p>
              <Button
                label={`🎲 ${t.home.cards.gm.cta}`}
                primary
                className="btn-primary"
                onClick={() => navigate('/meneur')}
              />
            </div>
          </SlideAnimation>

          <SlideAnimation direction="bottom" duration={600} delay={350} trigger={true}>
            <div className="home-card">
              <span className="home-card-icon">🎯</span>
              <span className="home-card-eyebrow">{t.home.cards.players.eyebrow}</span>
              <Title priority={3} text={t.home.cards.players.title} />
              <p className="home-card-desc">{t.home.cards.players.body}</p>
              <Button
                label={`🎯 ${t.home.cards.players.cta}`}
                className="btn-outline"
                onClick={() => navigate('/joueurs')}
              />
            </div>
          </SlideAnimation>
        </div>
      </div>
    </section>
  )
}

export default HomeCards
