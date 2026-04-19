import { ResourceFile } from '../types'
import { extractNameFromPath, getFileType, getPublicAssetPath, isExternalUrl } from '../utils/fileUtils'

interface Props {
  file: ResourceFile
  className?: string
}

function DownloadLink({ file, className = 'download' }: Props) {
  const label    = file.label || extractNameFromPath(file.path)
  const type     = getFileType(file.path)
  const href     = getPublicAssetPath(file.path)
  const external = isExternalUrl(file.path)

  return (
    <a
      className={className}
      href={href}
      download={external ? undefined : ''}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {file.icon && (
        <span style={{ fontSize: '0.95rem', flexShrink: 0 }}>{file.icon}</span>
      )}
      <span style={{ flex: 1 }}>{label}</span>
      <span style={{
        fontFamily: 'var(--f-label)',
        fontSize: '0.58rem',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        opacity: 0.5,
        flexShrink: 0,
      }}>
        {type}
      </span>
      <span className="material-symbols-outlined" style={{ fontSize: '0.9rem', opacity: 0.55, flexShrink: 0 }}>
        download
      </span>
    </a>
  )
}

export default DownloadLink
