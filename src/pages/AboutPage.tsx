import { SlideAnimation, Title, Button, HoverAnimation } from 'react-kariu'
import { BMC_URL } from '../constants/links'

/* ── Statistiques ───────────────────────────────────────────── */
const STATS = [
  { value: '4',  label: 'Sessions jouées' },
  { value: '250', label: 'Pages de contenu' },
  { value: '20',  label: 'Ressources libres' },
  { value: '10', label: 'Scénarios' }
]

/* ── Passions / tags ────────────────────────────────────────── */
const PASSIONS = [
  'Horreur psychologique', 'Littérature noir', 'Jeu de rôle narratif',
  'développement', 'Musique ambiante', 'Cinéma de genre',
  'Écriture collaborative'
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
                L'Archive de<br />
                <span className="accent">l'Anormalité</span>
              </h1>
              <p className="about-hero-body">
                A/Normal est un jeu de rôle créé par Aurore Darcissac — une exploration
                où chaque session, chaque choix, chaque décision tisse une
                histoire unique entre enquête psychologique et dystopique.
                Cette archive rassemble toutes les ressources pour jouer, maîtriser et
                enrichir votre jeu de rôle.
              </p>
              <HoverAnimation duration={250} intensity={1} type="scale">
                <Button
                  label="☕ Soutenir le projet"
                  primary
                  className="btn-primary"
                  onClick={() => window.open(BMC_URL, '_blank')}
                />
              </HoverAnimation>
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
              text="L'Esprit derrière l'Anormalité"
              className="about-author-title"
            />
            <p className="about-author-body">
              Aurore Darcissac est auteure, game designer et Meneuse de Jeu passionnée.
              Depuis plus de deux ans, elle développe l'univers de A/Normal — un monde
              où les anormalités humaines ne sont que des malédictions, mais aussi les seules
              clés pour découvrir les portes de l'histoire.
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
              <HoverAnimation key={title} duration={300} intensity={0.4} type="scale">
                <div className="about-anecdote-card">
                  <span className="about-anecdote-icon">{icon}</span>
                  <span className="about-anecdote-badge">{label}</span>
                  <h3 className="about-anecdote-title">{title}</h3>
                  <p className="about-anecdote-text">{text}</p>
                </div>
              </HoverAnimation>
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
              <HoverAnimation duration={250} intensity={1} type="scale">
                <Button
                  label="☕ Soutenir le projet"
                  primary
                  className="btn-primary"
                  onClick={() => window.open(BMC_URL, '_blank')}
                />
              </HoverAnimation>
              <HoverAnimation duration={250} intensity={1} type="scale">
                <Button
                  label="💬 Rejoindre le Discord"
                  className="btn-outline"
                  onClick={() => {}}
                />
              </HoverAnimation>
            </div>
          </div>
        </section>
      </SlideAnimation>

    </div>
  )
}

export default AboutPage
