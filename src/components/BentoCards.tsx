import { Section, ResourceFile } from '../types'
import { HoverAnimation } from 'react-kariu'
import { extractNameFromPath } from '../utils/fileUtils'

/* ── Lien dans les cartes bento ──────────────────────────── */
function BentoDownloadLink({ file, style }: { file: ResourceFile; style?: React.CSSProperties }) {
  const label = file.label || extractNameFromPath(file.path)
  return (
    <HoverAnimation duration={300} intensity={0.8} type="scale">
      <a
        href={file.path}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        style={{ fontSize: '0.78rem', padding: '0.75rem 1.25rem', justifyContent: 'center', ...style }}
      >
        {file.icon} {label}
      </a>
    </HoverAnimation>
  )
}

/* ── Carte principale (grande, 8/12 cols) ──────────────────── */
export function BentoMainCard({ section }: { section: Section }) {
  return (
    <div className="bento-card-main bento-main">
      {/* Zone "image" */}
      <div className="bento-thumb-main">
        <span className="bento-thumb-icon">{section.icon}</span>
        <div className="bento-thumb-overlay-main" />
        <span className="bento-label-featured">Essentiel</span>
      </div>

      {/* Corps */}
      <div className="bento-card-main-body">
        <div>
          <h3 className="bento-card-main-title">{section.title}</h3>
          <p className="bento-card-main-desc">
            La version la plus récente, optimisée pour l'immersion narrative.
            Inclut des sections pour l'historique et l'équipement.
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

/* ── Carte latérale (side, 4/12 cols) ──────────────────────── */
export function BentoSideCard({ section }: { section: Section }) {
  return (
    <div className="bento-card-side bento-side">
      <div>
        <span className="bento-card-side-icon">{section.icon}</span>
        <h3 className="bento-card-side-title">{section.title}</h3>
        <p className="bento-card-side-desc">
          Tous les plans disponibles pour naviguer dans l'univers de A/Normal.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {section.files.map((file, i) => {
          const label = file.label || extractNameFromPath(file.path)
          return (
            <a
              key={i}
              href={file.path}
              target="_blank"
              rel="noopener noreferrer"
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
