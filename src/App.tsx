import { useEffect, useState } from 'react'
import { ResourcesConfig } from './types'
import Header from './components/Header'
import ResourceSection from './components/ResourceSection'
import Footer from './components/Footer'
import CharacterRandomizer from './components/CharacterRandomizer'
import { HoverAnimation, Button, Layout } from 'react-kariu'


function App() {
  const [config, setConfig] = useState<ResourcesConfig | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('./resources.json')
      .then(res => {
        if (!res.ok) throw new Error(`Erreur: ${res.status}`)
        return res.json()
      })
      .then(setConfig)
      .catch(err => setError(err.message))
  }, [])

  return (
    <>
      <Header />

      <section className="section">
        <p>
          Bienvenue sur la page officielle des supports de jeu <strong>A/Normal</strong>.<br />
          Ici, vous pouvez télécharger les fiches vierges, les tableaux de compétences et autres ressources pour enrichir vos parties.
        </p>
      </section>

      <main id="resources-container">
        {error && (
          <div className="error">
            ⚠️ Impossible de charger les ressources. Veuillez rafraîchir la page.
          </div>
        )}

        {config && (
          <>
            {/* Groupe les sections par 2 */}
            {Array.from({ length: Math.ceil(config.sections.length / 2) }, (_, i) => (
              <div className="wrap" key={i}>
                {config.sections.slice(i * 2, i * 2 + 2).map(section => (
                  <ResourceSection key={section.id} section={section} />
                ))}
              </div>
            ))}
          </>
        )}
      </main>
      <CharacterRandomizer />

      <section className="section lower-section">
        <Layout >
        <p>
          Ces documents sont offerts avec l'achat du livret officiel.<br />
          Merci de soutenir le travail d'auteurs indépendants 💛
        </p>
        <></>
        <HoverAnimation
          duration={300}
          intensity={1}
          type="scale"
        >
        <Button
          label="☕ Me soutenir sur Buy Me a Coffee"
          className="buymeacoffee-btn"
          onClick={() => window.open('https://buymeacoffee.com/lebloisaurk', '_blank')}
        />
        </HoverAnimation>
        </Layout>
      </section>

      <Footer />
    </>
  )
}

export default App
