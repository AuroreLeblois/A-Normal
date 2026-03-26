import { ResourceFile } from '../types'
import { HoverAnimation } from 'react-kariu'
import { extractNameFromPath, getFileType } from '../utils/fileUtils'

interface Props {
  file: ResourceFile
  className?: string
}

function DownloadLink({ file, className = 'download' }: Props) {
  const label = file.label || extractNameFromPath(file.path)
  const type  = getFileType(file.path)

  return (
    <HoverAnimation duration={400} intensity={0.75} type="scale">
      <a
        className={className}
        href={file.path}
        target="_blank"
        rel="noopener noreferrer"
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
    </HoverAnimation>
  )
}

export default DownloadLink
