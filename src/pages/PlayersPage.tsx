import { useEffect, useState } from 'react'
import { ResourcesConfig } from '../types'
import ResourceSection from '../components/ResourceSection'
import CharacterRandomizer from '../components/CharacterRandomizer'
import { Layout } from 'react-kariu'

function PlayersPage() {
  const [config, setConfig] = useState<ResourcesConfig | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}resources-joueurs.json`)
      .then(res => {
        if (!res.ok) throw new Error(`Erreur: ${res.status}`)
        return res.json()
      })
      .then(setConfig)
      .catch(err => setError(err.message))
      .finally(() => {
        sessionStorage.setItem('page', 'players')
      })
  }, [])

  return (
    <>
      <section className="section">
        <p>
          Bienvenue dans l'espace <strong>Joueurs</strong> d'A/Normal.<br />
          Retrouvez ici toutes les ressources dédiées aux joueurs.
        </p>
      </section>

      <main id="resources-container">
        {error && (
          <div className="error">
            ⚠️ Impossible de charger les ressources. Veuillez rafraîchir la page.
          </div>
        )}
        
        <CharacterRandomizer />
        <Layout flexDirection="row" flexWrap="wrap" gap={"1rem"} alignItems="start">
          {config && config.sections.map(section => (
              <ResourceSection key={section.id} section={section} />
          ))}
        </Layout>
      </main>
    </>
  )
}

export default PlayersPage
