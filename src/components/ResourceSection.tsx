import { Title } from 'react-kariu'
import { useLocale } from '../hooks/useLocale'
import { formatTemplate, getTranslations } from '../i18n'
import { Section } from '../types'
import DownloadLink from './DownloadLink'

interface Props {
  section: Section
}

function ResourceSection({ section }: Props) {
  const [locale] = useLocale()
  const t = getTranslations(locale)
  const fileCountLabel =
    section.files.length > 1
      ? formatTemplate(t.common.fileCountMany, { count: section.files.length })
      : formatTemplate(t.common.fileCountOne, { count: section.files.length })

  return (
    <div className="resource-card">
      <div className="resource-card-thumb">
        <span className="resource-card-thumb-icon">{section.icon}</span>
        <div className="resource-card-thumb-overlay" />
        <span className="resource-card-badge">{section.title}</span>
      </div>

      <div className="resource-card-body">
        <Title priority={4} text={section.title} align="left" className="resource-card-title" />

        {section.files.length > 0 && (
          <p
            style={{
              fontFamily: 'var(--f-label)',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(213, 196, 171, 0.5)',
              marginBottom: '0.875rem',
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '0.8rem', verticalAlign: 'middle', marginRight: '0.25rem' }}
            >
              description
            </span>
            {fileCountLabel}
          </p>
        )}

        <div className="resource-card-files">
          {section.files.length > 0 ? (
            section.files.map((file, index) => <DownloadLink key={index} file={file} />)
          ) : section.placeholder ? (
            <p className="placeholder">{section.placeholder}</p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ResourceSection
