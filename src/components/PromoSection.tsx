import { SlideAnimation, Button } from 'react-kariu'
import { AMAZON_MJ_BOOK_URL } from '../constants/links'
import { useLocale } from '../hooks/useLocale'

function PromoSection() {
  const [locale] = useLocale()

  if (locale !== 'fr') {
    return null
  }

  return (
    <SlideAnimation direction="bottom" duration={600} delay={400} trigger={true}>
      <div className="promo-section">
        <div className="promo-section-inner">

          <div>
            <span className="promo-badge">Exclusivité</span>
            <h2 className="promo-title">
              Le Livre du MJ :<br />
              <span className="accent">version Amazon</span>
            </h2>
            <p className="promo-desc">
              Retrouvez le livret complet du Meneur de Jeu sur Amazon, avec les
              scénarios, dossiers de PNJ et ressources avancées pour mener vos parties.
            </p>
            <div className="promo-actions">
              <Button
                label="Voir sur Amazon"
                primary
                className="btn-primary"
                onClick={() => window.open(AMAZON_MJ_BOOK_URL, '_blank', 'noopener,noreferrer')}
              />
            </div>
          </div>

          <div className="promo-book-visual">
            <div className="promo-book-card">
              📕
              <span className="promo-book-label">Livre du MJ</span>
            </div>
          </div>

        </div>
      </div>
    </SlideAnimation>
  )
}

export default PromoSection
