import { useEffect, useState } from 'react'
import { ResourcesConfig } from '../types'
import ResourceSection from '../components/ResourceSection'
import { Layout } from 'react-kariu'

function HomePage() {
  const [config, setConfig] = useState<ResourcesConfig | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}resources-mj.json`)
      .then(res => {
        if (!res.ok) throw new Error(`Erreur: ${res.status}`)
        return res.json()
      })
      .then(setConfig)
      .catch(err => setError(err.message))
  }, [])

  return (
    <>
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
            <Layout flexDirection="row" flexWrap="wrap" gap={"2rem"} alignItems="start">
            {Array.from({ length: Math.ceil(config.sections.length / 2) }, (_, i) => (
              <>
                {config.sections.slice(i * 2, i * 2 + 2).map(section => (
                  <ResourceSection key={section.id} section={section} />
                ))}
                </>
            ))}
            </Layout>
          </>
        )}
      </main>
    </>
  )
}

export default HomePage
