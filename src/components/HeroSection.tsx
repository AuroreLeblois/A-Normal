import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SlideAnimation, Title, Button } from 'react-kariu'

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
          <span className="hero-eyebrow">Ressources officielles</span>

          <div className="hero-main-row">
            <div className="hero-main-copy">
              <Title priority={1} text="A NORMAL :" className="hero-title" />
              <Title priority={2} text="L'Archive des Ressources Officielles" className="hero-title-sub" />

              <p className="hero-body">
                Plongez dans les strates d'un monde onirique et brutal.
                Les archives du jeu de rôle d'Aurore Darcissac - fiches, plans,
                scénarios et outils pour enrichir chaque session.
              </p>

              <div className="hero-cta">
                <Button
                  label="🎲 Espace Meneur de Jeu"
                  primary
                  className="btn-primary"
                  onClick={() => navigate('/meneur')}
                />
                <Button
                  label="🎯 Espace Joueurs"
                  className="btn-outline"
                  onClick={() => navigate('/joueurs')}
                />
              </div>
            </div>

            <div className="launch-countdown" role="status" aria-live="polite">
              <span className="launch-countdown-label">
                {isLive ? 'Livre en ligne depuis' : 'Lancement Amazon dans'}
              </span>
              <div className="launch-countdown-grid">
                <div className="launch-countdown-item">
                  <span className="launch-countdown-value">{countdown.days}</span>
                  <span className="launch-countdown-unit">jours</span>
                </div>
                <div className="launch-countdown-item">
                  <span className="launch-countdown-value">{countdown.hours}</span>
                  <span className="launch-countdown-unit">heures</span>
                </div>
                <div className="launch-countdown-item">
                  <span className="launch-countdown-value">{countdown.minutes}</span>
                  <span className="launch-countdown-unit">minutes</span>
                </div>
                <div className="launch-countdown-item">
                  <span className="launch-countdown-value">{countdown.seconds}</span>
                  <span className="launch-countdown-unit">secondes</span>
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
