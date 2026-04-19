import { Section, ResourceFile } from '../types'
import { extractNameFromPath, getPublicAssetPath, isExternalUrl } from '../utils/fileUtils'

function BentoSectionVisual({ section }: { section: Section }) {
  if (section.id === 'livret-joueur' || section.id === 'fiche-joueur') {
    return (
      <img
        src={`${import.meta.env.BASE_URL}images/fiche%20joueur%20vierge.png`}
        alt="Aperçu de la fiche joueur"
        className="bento-thumb-image"
      />
    )
  }

  return <span className="bento-thumb-icon">{section.icon}</span>
}

/* ── Lien bouton dans la carte principale ────────────────────── */
function BentoDownloadLink({ file, style }: { file: ResourceFile; style?: React.CSSProperties }) {
  const label    = file.label || extractNameFromPath(file.path)
  const href     = getPublicAssetPath(file.path)
  const external = isExternalUrl(file.path)

  return (
    <a
      href={href}
      download={external ? undefined : ''}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="btn-primary"
      style={{ fontSize: '0.78rem', padding: '0.75rem 1.25rem', justifyContent: 'center', ...style }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>download</span>
      {label}
    </a>
  )
}

/* ── Carte principale (grande, 8/12 cols) ──────────────────────── */
export function BentoMainCard({ section }: { section: Section }) {
  return (
    <div className="bento-card-main bento-main">
      {/* Zone "image" */}
      <div className="bento-thumb-main">
        <BentoSectionVisual section={section} />
        <div className="bento-thumb-overlay-main" />
        <span className="bento-label-featured">Essentiel</span>
      </div>

      {/* Corps */}
      <div className="bento-card-main-body">
        <div>
          <h3 className="bento-card-main-title">{section.title}</h3>
          <p className="bento-card-main-desc">
            {section.description || "La version la plus récente, optimisée pour l'immersion narrative."}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', minWidth: '180px' }}>
          {section.files.map((file, i) => (
            <BentoDownloadLink key={i} file={file} />
          ))}
          {section.files.length === 0 && section.placeholder && (
            <p className="placeholder">{section.placeholder}</p>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Carte latérale (side, 4/12 cols) ──────────────────────────── */
export function BentoSideCard({ section }: { section: Section }) {
  return (
    <div className="bento-card-side bento-side">
      <div>
        <span className="bento-card-side-icon">{section.icon}</span>
        <h3 className="bento-card-side-title">{section.title}</h3>
        <p className="bento-card-side-desc">
          {section.description || "Tous les plans disponibles pour naviguer dans l'univers de A/Normal."}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {section.files.map((file, i) => {
          const label    = file.label || extractNameFromPath(file.path)
          const href     = getPublicAssetPath(file.path)
          const external = isExternalUrl(file.path)

          return (
            <a
              key={i}
              href={href}
              download={external ? undefined : ''}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="download"
            >
              {file.icon} {label}
            </a>
          )
        })}
        {section.files.length === 0 && section.placeholder && (
          <p className="placeholder">{section.placeholder}</p>
        )}
      </div>
    </div>
  )
}
