import { SlideAnimation, Title, Button } from 'react-kariu'
import { BMC_URL, DISCORD_URL } from '../constants/links'
import { useLocale } from '../hooks/useLocale'
import { getTranslations } from '../i18n'

function AboutPage() {
  const [locale] = useLocale()
  const t = getTranslations(locale)

  return (
    <div className="page-content">
      <section className="about-hero">
        <div className="about-hero-bg" />

        <SlideAnimation direction="bottom" duration={700} delay={100} trigger={true}>
          <div className="about-hero-inner">
            <div className="about-hero-text">
              <span className="hero-eyebrow">{t.pages.about.hero.eyebrow}</span>
              <h1 className="about-hero-title">
                {t.pages.about.hero.titleTop}
                <br />
                <span className="accent">{t.pages.about.hero.titleAccent}</span>
              </h1>
              <p className="about-hero-body">{t.pages.about.hero.body}</p>
            </div>

            <div className="about-hero-portrait">
              <div className="about-portrait-glow" />
              <div className="about-portrait-card">
                <img src={`${import.meta.env.BASE_URL}images/test.png`} alt={t.pages.about.hero.portraitAlt} />
              </div>
            </div>
          </div>
        </SlideAnimation>

        <SlideAnimation direction="bottom" duration={600} delay={350} trigger={true}>
          <div className="about-stats">
            {t.pages.about.stats.map(({ value, label }) => (
              <div key={label} className="about-stat">
                <span className="about-stat-value">{value}</span>
                <span className="about-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </SlideAnimation>
      </section>

      <SlideAnimation direction="bottom" duration={600} delay={150} trigger={true}>
        <section className="about-author">
          <div className="about-author-portrait">
            <div className="about-author-portrait-inner">
              <img
                src={`${import.meta.env.BASE_URL}images/photo-pro.png`}
                alt={t.pages.about.author.portraitAlt}
              />
            </div>
          </div>

          <div className="about-author-content">
            <span className="about-section-eyebrow">{t.pages.about.author.eyebrow}</span>
            <Title priority={2} text={t.pages.about.author.title} className="about-author-title" />
            <p className="about-author-body">{t.pages.about.author.paragraph1}</p>
            <p className="about-author-body">{t.pages.about.author.paragraph2}</p>
            <blockquote className="about-quote">{t.pages.about.author.quote}</blockquote>
          </div>
        </section>
      </SlideAnimation>

      <SlideAnimation direction="bottom" duration={600} delay={150} trigger={true}>
        <section className="about-anecdotes">
          <span className="about-section-eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>
            {t.pages.about.anecdotes.eyebrow}
          </span>

          <div className="about-anecdotes-grid">
            {t.pages.about.anecdotes.items.map(({ icon, label, title, text }) => (
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

      <SlideAnimation direction="bottom" duration={600} delay={150} trigger={true}>
        <section className="about-passions">
          <span className="about-section-eyebrow">{t.pages.about.passions.eyebrow}</span>
          <Title priority={3} text={t.pages.about.passions.title} className="about-passions-title" />
          <div className="about-passions-tags">
            {t.pages.about.passions.tags.map(tag => (
              <span key={tag} className="about-passion-tag">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </SlideAnimation>

      <SlideAnimation direction="bottom" duration={600} delay={150} trigger={true}>
        <section className="about-cta">
          <div className="about-cta-inner">
            <div className="about-cta-glow" />
            <span className="material-symbols-outlined about-cta-icon">favorite</span>
            <Title priority={2} text={t.pages.about.cta.title} className="about-cta-title" />
            <p className="about-cta-body">{t.pages.about.cta.body}</p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <Button
                label={t.pages.about.cta.supportCta}
                primary
                className="btn-primary"
                onClick={() => window.open(BMC_URL, '_blank')}
              />
              <Button
                label={t.pages.about.cta.discordCta}
                className="btn-outline"
                onClick={() => window.open(DISCORD_URL, '_blank', 'noopener,noreferrer')}
              />
            </div>
          </div>
        </section>
      </SlideAnimation>
    </div>
  )
}

export default AboutPage
