import { Link } from 'react-router-dom'
import { formatTemplate, getTranslations } from '../i18n'
import { useLocale } from '../hooks/useLocale'

function Footer() {
  const currentYear = new Date().getFullYear()
  const [locale] = useLocale()
  const t = getTranslations(locale)

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="footer-brand-name">{t.footer.brand}</span>
        <span className="footer-copyright">
          {formatTemplate(t.footer.copyrightTemplate, { year: currentYear })}
        </span>
      </div>

      <nav className="footer-links">
        <Link className="footer-link" to="/mentions-legales">
          {t.footer.legal}
        </Link>
        <a
          className="footer-link"
          href="https://buymeacoffee.com/lebloisaurk"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.footer.support}
        </a>
      </nav>

      <div className="footer-support">
        <span className="footer-tagline">{t.footer.tagline}</span>
      </div>
    </footer>
  )
}

export default Footer
