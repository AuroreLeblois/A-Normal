import { Section } from '../types'
import { Title } from 'react-kariu'
import DownloadLink from './DownloadLink'

interface Props {
  section: Section
}

function ResourceSection({ section }: Props) {
  return (
    <div className="resource-card">

      {/* ── Zone thumbnail ── */}
      <div className="resource-card-thumb">
        <span className="resource-card-thumb-icon">{section.icon}</span>
        <div className="resource-card-thumb-overlay" />
        {/* Badge catégorie */}
        <span className="resource-card-badge">{section.title}</span>
      </div>

      {/* ── Corps de la carte ── */}
      <div className="resource-card-body">

        <Title
          priority={4}
          text={section.title}
          align="left"
          className="resource-card-title"
        />

        {/* Métadonnées : nombre de fichiers */}
        {section.files.length > 0 && (
          <p style={{
            fontFamily: 'var(--f-label)',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: 'rgba(213, 196, 171, 0.5)',
            marginBottom: '0.875rem',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '0.8rem', verticalAlign: 'middle', marginRight: '0.25rem' }}>
              description
            </span>
            {section.files.length} fichier{section.files.length > 1 ? 's' : ''}
          </p>
        )}

        {/* Liens de téléchargement */}
        <div className="resource-card-files">
          {section.files.length > 0 ? (
            section.files.map((file, index) => (
              <DownloadLink key={index} file={file} />
            ))
          ) : section.placeholder ? (
            <p className="placeholder">{section.placeholder}</p>
          ) : null}
        </div>

      </div>
    </div>
  )
}

export default ResourceSection
