import { SlideAnimation, Title, Button } from 'react-kariu'
import { BMC_URL } from '../constants/links'

/* ── Statistiques ───────────────────────────────────────────── */
const STATS = [
  { value: '12',  label: 'Sessions jouées' },
  { value: '142', label: 'Pages de contenu' },
  { value: '76',  label: 'Ressources libres' },
  { value: '31',  label: 'PNJ archivés'     },
]

/* ── Passions / tags ────────────────────────────────────────── */
const PASSIONS = [
  'Dystopie', 'Littérature noir', 'Jeu de rôle narratif',
  'Worldbuilding', 'Musique ambiante', 'Cinéma de genre',
  'Écriture collaborative', 'Folklore européen',
]

/* ── Anecdotes / jalons ─────────────────────────────────────── */
const ANECDOTES = [
  {
    icon: '📖',
    label: 'Genèse',
    title: "La Genèse",
    text: "Tout a commencé sur un bloc-notes et une question : et si l'anormalité n'était pas un défaut, mais une clé ? A/Normal est né de ce questionnement.",
  },
  {
    icon: '🕯️',
    label: 'Première session',
    title: 'La Première Session',
    text: "La première session a duré huit heures. Neuf joueurs, plein d'émotions, des avis divergents et des questions toujours plus profondes.",
  },
]

function AboutPage() {
  return (
    <div className="page-content">

      {/* ══════════════════════════════════════════════════════════
          HERO — Split : texte gauche + portrait droit
      ══════════════════════════════════════════════════════════ */}
      <section className="about-hero">
        <div className="about-hero-bg" />

        <SlideAnimation direction="bottom" duration={700} delay={100} trigger={true}>
          <div className="about-hero-inner">

            {/* Colonne texte */}
            <div className="about-hero-text">
              <span className="hero-eyebrow">À Propos</span>
              <h1 className="about-hero-title">
                La Quête de<br />
                <span className="accent">l'Obscur</span>
              </h1>
              <p className="about-hero-body">
                A/Normal est un jeu de rôle créé par Aurore Darcissac — une exploration
                des frontières entre le réel et l'étrange, où chaque session tisse une
                histoire unique entre enquête psychologique et horreur lovecraftienne.
                Cette archive rassemble toutes les ressources pour jouer, maîtriser et
                enrichir votre table.
              </p>
              <Button
                label="☕ Soutenir le projet"
                primary
                className="btn-primary"
                onClick={() => window.open(BMC_URL, '_blank')}
              />
            </div>

            {/* Portrait placeholder */}
            <div className="about-hero-portrait">
              <div className="about-portrait-glow" />
              <div className="about-portrait-card">
                <span className="about-portrait-emoji">🎭</span>
                <span className="about-portrait-label">Aurore Darcissac</span>
              </div>
            </div>

          </div>
        </SlideAnimation>

        {/* Bande de stats */}
        <SlideAnimation direction="bottom" duration={600} delay={350} trigger={true}>
          <div className="about-stats">
            {STATS.map(({ value, label }) => (
              <div key={label} className="about-stat">
                <span className="about-stat-value">{value}</span>
                <span className="about-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </SlideAnimation>
      </section>

      {/* ══════════════════════════════════════════════════════════
          L'ESPRIT DERRIÈRE L'OBSCUR
      ══════════════════════════════════════════════════════════ */}
      <SlideAnimation direction="bottom" duration={600} delay={150} trigger={true}>
        <section className="about-author">
          <div className="about-author-portrait">
            <div className="about-author-portrait-inner">
              <span className="about-author-portrait-emoji">✍️</span>
            </div>
          </div>

          <div className="about-author-content">
            <span className="about-section-eyebrow">La créatrice</span>
            <Title
              priority={2}
              text="L'Esprit derrière l'Obscur"
              className="about-author-title"
            />
            <p className="about-author-body">
              Aurore Darcissac est auteure, game designer et Meneuse de Jeu passionnée.
              Depuis plus de cinq ans, elle développe l'univers de A/Normal — un monde
              où les anormalités humaines ne sont pas des malédictions, mais les seules
              clés capables d'ouvrir les portes de l'étrange.
            </p>
            <p className="about-author-body">
              Formée aux arts narratifs et à l'écriture de scénario, elle conçoit chaque
              ressource de cette archive comme un objet littéraire à part entière : soigné,
              cohérent, et pensé pour nourrir l'imagination de ceux qui osent s'asseoir
              autour de la table.
            </p>
            <blockquote className="about-quote">
              "Les mots sont les seules chaînes qui retiennent l'oubli."
            </blockquote>
          </div>
        </section>
      </SlideAnimation>

      {/* ══════════════════════════════════════════════════════════
          ANECDOTES / JALONS
      ══════════════════════════════════════════════════════════ */}
      <SlideAnimation direction="bottom" duration={600} delay={150} trigger={true}>
        <section className="about-anecdotes">
          <span className="about-section-eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>
            Jalons de l'Archive
          </span>

          <div className="about-anecdotes-grid">
            {ANECDOTES.map(({ icon, label, title, text }) => (
              <div key={title} className="about-anecdote-card">
                <span className="about-anecdote-icon">{icon}</span>
                <span className="about-anecdote-badge">{label}</span>
                <h3 className="about-anecdote-title">{title}</h3>
                <p className="about-anecdote-text">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </SlideAnimation>

      {/* ══════════════════════════════════════════════════════════
          HORIZONS & OBSESSIONS
      ══════════════════════════════════════════════════════════ */}
      <SlideAnimation direction="bottom" duration={600} delay={150} trigger={true}>
        <section className="about-passions">
          <span className="about-section-eyebrow">Influences & Obsessions</span>
          <Title
            priority={3}
            text="Horizons & Obsessions"
            className="about-passions-title"
          />
          <div className="about-passions-tags">
            {PASSIONS.map(tag => (
              <span key={tag} className="about-passion-tag">{tag}</span>
            ))}
          </div>
        </section>
      </SlideAnimation>

      {/* ══════════════════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════════════════ */}
      <SlideAnimation direction="bottom" duration={600} delay={150} trigger={true}>
        <section className="about-cta">
          <div className="about-cta-inner">
            <div className="about-cta-glow" />
            <span className="material-symbols-outlined about-cta-icon">favorite</span>
            <Title
              priority={2}
              text="Ne restez pas seul face à l'obscurité"
              className="about-cta-title"
            />
            <p className="about-cta-body">
              Chaque don est une étincelle dans l'obscurité. Votre soutien permet de
              financer les illustrations, l'écriture et l'hébergement de ces ressources
              gratuites pour tous.
            </p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <Button
                label="☕ Soutenir le projet"
                primary
                className="btn-primary"
                onClick={() => window.open(BMC_URL, '_blank')}
              />
              <Button
                label="💬 Rejoindre le Discord"
                className="btn-outline"
                onClick={() => {}}
              />
            </div>
          </div>
        </section>
      </SlideAnimation>

    </div>
  )
}

export default AboutPage
