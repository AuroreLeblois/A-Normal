import { SlideAnimation, Button, HoverAnimation } from 'react-kariu'

function PromoSection() {
  return (
    <SlideAnimation direction="bottom" duration={600} delay={400} trigger={true}>
      <div className="promo-section">
        <div className="promo-section-inner">

          <div>
            <span className="promo-badge">Exclusivité</span>
            <h2 className="promo-title">
              Le Livre Original :<br />
              <span className="accent">Archives Complètes</span>
            </h2>
            <p className="promo-desc">
              Accédez à l'intégralité du corpus théorique et pratique de l'Archive.
              Plus de 300 pages de contenu exclusif, des scénarios inédits et des
              mécaniques avancées pour les Meneurs de Jeu les plus exigeants.
            </p>
            <div className="promo-actions">
              <HoverAnimation duration={250} intensity={1} type="scale">
                <Button
                  label="Commander le Livre"
                  primary
                  className="btn-primary"
                  onClick={() => {}}
                />
              </HoverAnimation>
              <HoverAnimation duration={250} intensity={1} type="scale">
                <Button
                  label="Consulter un Extrait"
                  className="btn-outline"
                  onClick={() => {}}
                />
              </HoverAnimation>
            </div>
          </div>

          <div className="promo-book-visual">
            <div className="promo-book-card">
              📕
              <span className="promo-book-label">Livre Original</span>
            </div>
          </div>

        </div>
      </div>
    </SlideAnimation>
  )
}

export default PromoSection
