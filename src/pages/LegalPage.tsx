import PageHeader from '../components/PageHeader'
import { useLocale } from '../hooks/useLocale'
import { getTranslations } from '../i18n'

function LegalPage() {
  const [locale] = useLocale()
  const t = getTranslations(locale)

  return (
    <div className="page-content">
      <PageHeader
        title={t.pages.legal.title}
        titleClass="page-title"
        description={t.pages.legal.description}
      />

      <section className="legal-page">
        <div className="legal-card legal-card-featured">
          <span className="legal-eyebrow">{t.pages.legal.featured.eyebrow}</span>
          <h2 className="legal-title">{t.pages.legal.featured.title}</h2>
          <p>{t.pages.legal.featured.paragraph1}</p>
          <p>{t.pages.legal.featured.paragraph2}</p>
        </div>

        <div className="legal-grid">
          <article className="legal-card">
            <span className="legal-eyebrow">{t.pages.legal.sections.publisher.eyebrow}</span>
            <h2 className="legal-title">{t.pages.legal.sections.publisher.title}</h2>
            <p>{t.pages.legal.sections.publisher.paragraph1}</p>
            <p>{t.pages.legal.sections.publisher.paragraph2}</p>
          </article>

          <article className="legal-card">
            <span className="legal-eyebrow">{t.pages.legal.sections.copyright.eyebrow}</span>
            <h2 className="legal-title">{t.pages.legal.sections.copyright.title}</h2>
            <p>{t.pages.legal.sections.copyright.paragraph1}</p>
            <p>{t.pages.legal.sections.copyright.paragraph2}</p>
          </article>

          <article className="legal-card">
            <span className="legal-eyebrow">{t.pages.legal.sections.liability.eyebrow}</span>
            <h2 className="legal-title">{t.pages.legal.sections.liability.title}</h2>
            <p>{t.pages.legal.sections.liability.paragraph1}</p>
          </article>

          <article className="legal-card">
            <span className="legal-eyebrow">{t.pages.legal.sections.externalLinks.eyebrow}</span>
            <h2 className="legal-title">{t.pages.legal.sections.externalLinks.title}</h2>
            <p>{t.pages.legal.sections.externalLinks.paragraph1}</p>
          </article>

          <article className="legal-card">
            <span className="legal-eyebrow">{t.pages.legal.sections.personalData.eyebrow}</span>
            <h2 className="legal-title">{t.pages.legal.sections.personalData.title}</h2>
            <p>{t.pages.legal.sections.personalData.paragraph1}</p>
            <p>{t.pages.legal.sections.personalData.paragraph2}</p>
          </article>

          <article className="legal-card">
            <span className="legal-eyebrow">{t.pages.legal.sections.hosting.eyebrow}</span>
            <h2 className="legal-title">{t.pages.legal.sections.hosting.title}</h2>
            <p>{t.pages.legal.sections.hosting.paragraph1}</p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default LegalPage
