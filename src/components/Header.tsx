// @ts-ignore
import diceSvg from '/dice.svg'
import { useEffect } from 'react'
import { SlideAnimation, Button } from 'react-kariu'
import { Link, useLocation } from 'react-router-dom'
import { getTranslations, type Locale } from '../i18n'
import { useLocale } from '../hooks/useLocale'

function Header() {
  const location = useLocation()
  const [locale, setLocale] = useLocale()
  const t = getTranslations(locale)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <header className="main-header">
      <SlideAnimation direction="top" duration={500} delay={50} trigger={true}>
        <nav className="nav-container">
          <div className="nav-left">
            <Link to="/" className="nav-logo">
              A/Normal
            </Link>

            <div className="nav-links">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                {t.nav.home}
              </Link>
              <Link to="/meneur" className={`nav-link ${location.pathname === '/meneur' ? 'active' : ''}`}>
                {t.nav.gm}
              </Link>
              <Link to="/joueurs" className={`nav-link ${location.pathname === '/joueurs' ? 'active' : ''}`}>
                {t.nav.players}
              </Link>
              <Link to="/a-propos" className={`nav-link ${location.pathname === '/a-propos' ? 'active' : ''}`}>
                {t.nav.about}
              </Link>
            </div>
          </div>

          <div className="nav-right">
            <label className="nav-lang-label">
              <span>{t.nav.languageLabel}</span>
              <select
                className="nav-lang-select"
                value={locale}
                onChange={event => setLocale(event.target.value as Locale)}
                aria-label={t.nav.languageLabel}
              >
                <option value="fr">{t.nav.languageFr}</option>
                <option value="en">{t.nav.languageEn}</option>
              </select>
            </label>

            <Link to="/" className="nav-dice-btn" aria-label={t.nav.homeAriaLabel}>
              <img src={diceSvg} alt={t.nav.diceAlt} />
            </Link>

            <Button
              label={t.nav.support}
              primary
              className="nav-support-btn"
              onClick={() => window.open('https://buymeacoffee.com/lebloisaurk', '_blank')}
            />
          </div>
        </nav>
      </SlideAnimation>
    </header>
  )
}

export default Header
