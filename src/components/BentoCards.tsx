import { useLocale } from '../hooks/useLocale'
import { getTranslations } from '../i18n'
import { ResourceFile, Section } from '../types'
import { extractNameFromPath, getPublicAssetPath, isExternalUrl } from '../utils/fileUtils'

function BentoSectionVisual({ section, imageAlt }: { section: Section; imageAlt: string }) {
  if (section.id === 'livret-joueur' || section.id === 'fiche-joueur') {
    return (
      <img
        src={`${import.meta.env.BASE_URL}images/fiche%20joueur%20vierge.png`}
        alt={imageAlt}
        className="bento-thumb-image"
      />
    )
  }

  return <span className="bento-thumb-icon">{section.icon}</span>
}

function BentoDownloadLink({ file, style }: { file: ResourceFile; style?: React.CSSProperties }) {
  const label = file.label || extractNameFromPath(file.path)
  const href = getPublicAssetPath(file.path)
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
      <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>
        download
      </span>
      {label}
    </a>
  )
}

export function BentoMainCard({ section }: { section: Section }) {
  const [locale] = useLocale()
  const t = getTranslations(locale)

  return (
    <div className="bento-card-main bento-main">
      <div className="bento-thumb-main">
        <BentoSectionVisual section={section} imageAlt={t.pages.players.bento.playerSheetAlt} />
        <div className="bento-thumb-overlay-main" />
        <span className="bento-label-featured">{t.pages.players.bento.featuredLabel}</span>
      </div>

      <div className="bento-card-main-body">
        <div>
          <h3 className="bento-card-main-title">{section.title}</h3>
          <p className="bento-card-main-desc">
            {section.description || t.pages.players.bento.mainFallbackDescription}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', minWidth: '180px' }}>
          {section.files.map((file, i) => (
            <BentoDownloadLink key={i} file={file} />
          ))}
          {section.files.length === 0 && section.placeholder && <p className="placeholder">{section.placeholder}</p>}
        </div>
      </div>
    </div>
  )
}

export function BentoSideCard({ section }: { section: Section }) {
  const [locale] = useLocale()
  const t = getTranslations(locale)

  return (
    <div className="bento-card-side bento-side">
      <div>
        <span className="bento-card-side-icon">{section.icon}</span>
        <h3 className="bento-card-side-title">{section.title}</h3>
        <p className="bento-card-side-desc">
          {section.description || t.pages.players.bento.sideFallbackDescription}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {section.files.map((file, i) => {
          const label = file.label || extractNameFromPath(file.path)
          const href = getPublicAssetPath(file.path)
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
        {section.files.length === 0 && section.placeholder && <p className="placeholder">{section.placeholder}</p>}
      </div>
    </div>
  )
}
