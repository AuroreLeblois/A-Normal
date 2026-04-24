import { Link } from 'react-router-dom'
import { SlideAnimation, Title } from 'react-kariu'
import { useLocale } from '../hooks/useLocale'
import { getTranslations } from '../i18n'

interface Props {
  onConfirm: () => void
}

function MJGate({ onConfirm }: Props) {
  const [locale] = useLocale()
  const t = getTranslations(locale)

  return (
    <div className="mj-gate">
      <SlideAnimation
        direction="bottom"
        duration={500}
        delay={100}
        trigger={true}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <div className="mj-gate-content">
          <span className="mj-gate-icon">🎲</span>
          <div className="mj-gate-spoiler-badge">{t.pages.gm.gate.spoilerBadge}</div>
          <Title priority={2} text={t.pages.gm.gate.title} className="mj-gate-title" />
          <div className="mj-gate-warning">
            <span className="warning-icon">⚠️</span>
            <p>
              <strong>{t.pages.gm.gate.warningTitle}</strong> {t.pages.gm.gate.warningBody}
            </p>
            <p>{t.pages.gm.gate.warningPlayers}</p>
          </div>
          <div className="mj-gate-buttons">
            <button className="mj-confirm-btn" onClick={onConfirm}>
              {t.pages.gm.gate.confirmCta}
            </button>
            <Link to="/joueurs" className="mj-back-btn">
              {t.pages.gm.gate.backCta}
            </Link>
          </div>
        </div>
      </SlideAnimation>
    </div>
  )
}

export default MJGate
