import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SlideAnimation, Title, Button } from 'react-kariu'
import { getTranslations } from '../i18n'
import { useLocale } from '../hooks/useLocale'

const AMAZON_LAUNCH_TIMESTAMP = new Date('2026-05-15T00:00:00+02:00').getTime()

function getDurationParts(durationMs: number) {
  const totalSeconds = Math.max(0, Math.floor(durationMs / 1000))
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

function HeroSection() {
  const navigate = useNavigate()
  const [locale] = useLocale()
  const t = getTranslations(locale)
  const [timeDeltaMs, setTimeDeltaMs] = useState(() => AMAZON_LAUNCH_TIMESTAMP - Date.now())

  useEffect(() => {
    const updateTimer = () => {
      setTimeDeltaMs(AMAZON_LAUNCH_TIMESTAMP - Date.now())
    }

    updateTimer()
    const timer = window.setInterval(updateTimer, 1000)

    return () => window.clearInterval(timer)
  }, [])

  const isLive = timeDeltaMs <= 0
  const displayedDurationMs = isLive ? Math.abs(timeDeltaMs) : timeDeltaMs
  const countdown = useMemo(() => getDurationParts(displayedDurationMs), [displayedDurationMs])

  return (
    <section className="hero-section">
      <div className="hero-bg" />

      <SlideAnimation direction="bottom" duration={700} delay={150} trigger={true}>
        <div className="hero-content">
          <span className="hero-eyebrow">{t.home.hero.eyebrow}</span>

          <div className="hero-main-row">
            <div className="hero-main-copy">
              <Title priority={1} text={t.home.hero.title} className="hero-title" />
              <Title priority={2} text={t.home.hero.subtitle} className="hero-title-sub" />

              <p className="hero-body">{t.home.hero.body}</p>

              <div className="hero-cta">
                <Button
                  label={`🎲 ${t.home.hero.ctaGm}`}
                  primary
                  className="btn-primary"
                  onClick={() => navigate('/meneur')}
                />
                <Button
                  label={`🎯 ${t.home.hero.ctaPlayers}`}
                  className="btn-outline"
                  onClick={() => navigate('/joueurs')}
                />
              </div>
            </div>

            <div className="launch-countdown" role="status" aria-live="polite">
              <span className="launch-countdown-label">
                {isLive ? t.home.hero.countdownAfter : t.home.hero.countdownBefore}
              </span>
              <div className="launch-countdown-grid">
                <div className="launch-countdown-item">
                  <span className="launch-countdown-value">{countdown.days}</span>
                  <span className="launch-countdown-unit">{t.home.hero.units.days}</span>
                </div>
                <div className="launch-countdown-item">
                  <span className="launch-countdown-value">{countdown.hours}</span>
                  <span className="launch-countdown-unit">{t.home.hero.units.hours}</span>
                </div>
                <div className="launch-countdown-item">
                  <span className="launch-countdown-value">{countdown.minutes}</span>
                  <span className="launch-countdown-unit">{t.home.hero.units.minutes}</span>
                </div>
                <div className="launch-countdown-item">
                  <span className="launch-countdown-value">{countdown.seconds}</span>
                  <span className="launch-countdown-unit">{t.home.hero.units.seconds}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideAnimation>
    </section>
  )
}

export default HeroSection
