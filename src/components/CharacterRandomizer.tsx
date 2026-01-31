import { useState, useEffect } from 'react'
import { HoverAnimation } from 'react-kariu'

interface Anormalite {
  id: string
  nom: string
  points: string
  retraitPossible: boolean | string
  exemple?: string
  note?: string
}

interface CharacterResult {
  gender: 'homme' | 'femme'
  age: number
  anormaliteConnue: Anormalite | null
  anormaliteInconnue: Anormalite | null
}

function CharacterRandomizer() {
  const [result, setResult] = useState<CharacterResult | null>(null)
  const [isRolling, setIsRolling] = useState(false)
  const [anormalites, setAnormalites] = useState<Anormalite[]>([])

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}anormalites.json`)
      .then(res => res.json())
      .then(data => setAnormalites(data.anormalites))
      .catch(err => console.error('Erreur chargement anormalités:', err))
  }, [])

  const getRandomAnormalites = (): { connue: Anormalite; inconnue: Anormalite } => {
    const shuffled = [...anormalites].sort(() => Math.random() - 0.5)
    return {
      connue: shuffled[0],
      inconnue: shuffled[1]
    }
  }

  const rollCharacter = () => {
    if (anormalites.length < 2) return
    
    setIsRolling(true)
    
    let rolls = 0
    const maxRolls = 10
    
    const interval = setInterval(() => {
      const { connue, inconnue } = getRandomAnormalites()
      setResult({
        gender: Math.random() < 0.5 ? 'homme' : 'femme',
        age: Math.floor(Math.random() * (109 - 15 + 1)) + 15,
        anormaliteConnue: connue,
        anormaliteInconnue: inconnue
      })
      rolls++
      
      if (rolls >= maxRolls) {
        clearInterval(interval)
        setIsRolling(false)
      }
    }, 80)
  }

  return (
    <div className="randomizer-container">
      <h3 className="randomizer-title">🎲 Randomiseur de PJ</h3>
      
      <div className="randomizer-buttons">
        <HoverAnimation duration={200} intensity={1.05} type="scale" className="randomizer-btn-container">
          <button 
            className={`randomizer-btn ${isRolling ? 'rolling' : ''}`}
            onClick={rollCharacter}
            disabled={isRolling || anormalites.length < 2}
          >
            {isRolling ? '🎲 Tirage...' : '🎲 Tirer'}
          </button>
        </HoverAnimation>
        
        {result && !isRolling && (
          <HoverAnimation duration={200} intensity={1.05} type="scale">
            <button 
              className="randomizer-btn clear-btn"
              onClick={() => setResult(null)}
            >
              🗑️
            </button>
          </HoverAnimation>
        )}
      </div>

      {result && (
        <div className={`randomizer-result ${isRolling ? 'rolling' : ''}`}>
          <div className="result-item">
            <span className="result-label">Genre</span>
            <span className="result-value">
              {result.gender === 'homme' ? '👨' : '👩'} {result.gender.charAt(0).toUpperCase() + result.gender.slice(1)}
            </span>
          </div>
          <div className="result-item">
            <span className="result-label">Âge</span>
            <span className="result-value">🎂 {result.age} ans</span>
          </div>
          
          {result.anormaliteConnue && (
            <div className="result-item anormalite connue">
              <span className="result-label">👁️ Anormalité connue</span>
              <span className="result-value anormalite-nom">{result.anormaliteConnue.nom}</span>
              <span className="anormalite-points">{result.anormaliteConnue.points} pts</span>
            </div>
          )}
          
          {result.anormaliteInconnue && (
            <div className="result-item anormalite inconnue">
              <span className="result-label">🔒 Anormalité inconnue</span>
              <span className="result-value anormalite-nom">{result.anormaliteInconnue.nom}</span>
              <span className="anormalite-points">{result.anormaliteInconnue.points} pts</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CharacterRandomizer
