import PageHeader from '../components/PageHeader'

function LegalPage() {
  return (
    <div className="page-content">
      <PageHeader
        title="Mentions légales"
        titleClass="page-title"
        description="Informations relatives au site A/Normal, aux ressources mises à disposition et aux conditions d'utilisation des fichiers téléchargeables."
      />

      <section className="legal-page">
        <div className="legal-card legal-card-featured">
          <span className="legal-eyebrow">Utilisation des ressources</span>
          <h2 className="legal-title">Ressources offertes avec le livret officiel</h2>
          <p>
            Les ressources proposées sur ce site sont mises à disposition pour accompagner
            l'achat et l'utilisation du livre officiel A/Normal. Elles peuvent être
            téléchargées, imprimées et utilisées dans le cadre de parties privées ou
            associatives du jeu de rôle A/Normal.
          </p>
          <p>
            Toute reproduction, redistribution, modification ou réutilisation de ces
            ressources dans le but de les vendre, de les intégrer à une offre commerciale
            ou de les commercialiser sous quelque forme que ce soit est strictement interdite
            sans autorisation écrite préalable de l'autrice.
          </p>
        </div>

        <div className="legal-grid">
          <article className="legal-card">
            <span className="legal-eyebrow">Éditeur du site</span>
            <h2 className="legal-title">A/NORMAL</h2>
            <p>
              Le site A/NORMAL est édité par Aurore Darcissac, autrice et
              créatrice de l'univers A/NORMAL.
            </p>
            <p>
              Directrice de la publication : Aurore Darcissac.
            </p>
          </article>

          <article className="legal-card">
            <span className="legal-eyebrow">Propriété intellectuelle</span>
            <h2 className="legal-title">Droits d'auteur</h2>
            <p>
              Les textes, personnages, ressources, fiches, plans, illustrations, noms et
              éléments de l'univers A/Normal présents sur ce site sont protégés par le droit
              d'auteur, sauf mention contraire explicite.
            </p>
            <p>
              Aucune cession de droits n'est accordée par le téléchargement des fichiers.
              L'accès aux documents autorise uniquement leur usage personnel dans le cadre
              du jeu.
            </p>
          </article>

          <article className="legal-card">
            <span className="legal-eyebrow">Responsabilité</span>
            <h2 className="legal-title">Contenu du site</h2>
            <p>
              Les informations et fichiers proposés sont fournis pour faciliter la pratique
              du jeu A/Normal. L'éditrice s'efforce de maintenir les ressources accessibles
              et à jour, sans garantir l'absence permanente d'erreur, d'interruption ou
              d'indisponibilité.
            </p>
          </article>

          <article className="legal-card">
            <span className="legal-eyebrow">Liens externes</span>
            <h2 className="legal-title">Sites tiers</h2>
            <p>
              Le site peut contenir des liens vers des services externes, notamment Discord,
              Buy Me a Coffee ou des plateformes de vente. Ces sites disposent de leurs
              propres conditions d'utilisation et politiques de confidentialité.
            </p>
          </article>

          <article className="legal-card">
            <span className="legal-eyebrow">Données personnelles</span>
            <h2 className="legal-title">Collecte de données</h2>
            <p>
              A/Normal ne propose pas de compte utilisateur et ne collecte pas de
              données personnelles directement via un formulaire sur ce site.
            </p>
            <p>
              Les services externes accessibles depuis le site peuvent toutefois traiter des
              données selon leurs propres règles.
            </p>
          </article>

          <article className="legal-card">
            <span className="legal-eyebrow">Hébergement</span>
            <h2 className="legal-title">Prestataire technique</h2>
            <p>
              Le site est hébergé via GitHub Pages, service fourni par GitHub, Inc.,
              88 Colin P. Kelly Jr Street, San Francisco, CA 94107, États-Unis.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default LegalPage
