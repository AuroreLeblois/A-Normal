import { useState } from 'react'
import { HoverAnimation, Title } from 'react-kariu'
import { useFetchJson } from '../hooks/useFetchJson'
import { useLocale } from '../hooks/useLocale'
import { getTranslations } from '../i18n'

interface Anomaly {
  id: string
  nom: string
  points: string
  retraitPossible: boolean | string
  exemple?: string
  note?: string
}

interface AnomaliesData {
  anormalites: Anomaly[]
}

interface CharacterResult {
  gender: 'male' | 'female'
  age: number
  knownAnomaly: Anomaly | null
  unknownAnomaly: Anomaly | null
}

function CharacterRandomizer() {
  const [locale] = useLocale()
  const t = getTranslations(locale)
  const [result, setResult] = useState<CharacterResult | null>(null)
  const [isRolling, setIsRolling] = useState(false)

  const { data } = useFetchJson<AnomaliesData>(`${import.meta.env.BASE_URL}anormalites.json`)
  const anomalies = data?.anormalites ?? []

  const getRandomAnomalies = (): { known: Anomaly; unknown: Anomaly } => {
    const shuffled = [...anomalies].sort(() => Math.random() - 0.5)
    return { known: shuffled[0], unknown: shuffled[1] }
  }

  const rollCharacter = () => {
    if (anomalies.length < 2) return

    setIsRolling(true)

    let rolls = 0
    const maxRolls = 10

    const interval = setInterval(() => {
      const { known, unknown } = getRandomAnomalies()
      setResult({
        gender: Math.random() < 0.5 ? 'male' : 'female',
        age: Math.floor(Math.random() * (109 - 15 + 1)) + 15,
        knownAnomaly: known,
        unknownAnomaly: unknown,
      })
      rolls += 1

      if (rolls >= maxRolls) {
        clearInterval(interval)
        setIsRolling(false)
      }
    }, 80)
  }

  const genderLabel = result?.gender === 'male' ? t.pages.players.randomizer.male : t.pages.players.randomizer.female

  return (
    <div className="randomizer-container">
      <Title priority={4} text={t.pages.players.randomizer.title} align="center" />

      <div className="randomizer-buttons">
        <HoverAnimation duration={200} intensity={0.55} type="scale" className="randomizer-btn-container">
          <button
            className={`randomizer-btn ${isRolling ? 'rolling' : ''}`}
            onClick={rollCharacter}
            disabled={isRolling || anomalies.length < 2}
          >
            {isRolling ? t.pages.players.randomizer.rolling : t.pages.players.randomizer.roll}
          </button>
        </HoverAnimation>

        {result && !isRolling && (
          <HoverAnimation duration={200} intensity={0.55} type="scale">
            <button className="randomizer-btn clear-btn" onClick={() => setResult(null)}>
              X
            </button>
          </HoverAnimation>
        )}
      </div>

      {result && (
        <div className={`randomizer-result ${isRolling ? 'rolling' : ''}`}>
          <div className="result-item">
            <span className="result-label">{t.pages.players.randomizer.genderLabel}</span>
            <span className="result-value">{genderLabel}</span>
          </div>
          <div className="result-item">
            <span className="result-label">{t.pages.players.randomizer.ageLabel}</span>
            <span className="result-value">
              {result.age} {t.pages.players.randomizer.yearsSuffix}
            </span>
          </div>

          {result.knownAnomaly && (
            <div className="result-item anormalite connue">
              <span className="result-label">{t.pages.players.randomizer.knownAnomalyLabel}</span>
              <span className="result-value anormalite-nom">{result.knownAnomaly.nom}</span>
              <span className="anormalite-points">
                {result.knownAnomaly.points} {t.pages.players.randomizer.pointsSuffix}
              </span>
            </div>
          )}

          {result.unknownAnomaly && (
            <div className="result-item anormalite inconnue">
              <span className="result-label">{t.pages.players.randomizer.unknownAnomalyLabel}</span>
              <span className="result-value anormalite-nom">{result.unknownAnomaly.nom}</span>
              <span className="anormalite-points">
                {result.unknownAnomaly.points} {t.pages.players.randomizer.pointsSuffix}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CharacterRandomizer
