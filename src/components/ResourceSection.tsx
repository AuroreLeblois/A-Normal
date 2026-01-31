import { Section, ResourceFile } from '../types'
import { HoverAnimation } from 'react-kariu'

interface Props {
  section: Section
}

function extractNameFromPath(filePath: string): string {
  const fileName = filePath.split('/').pop() || filePath
  const nameWithoutExt = fileName.replace(/\.[^.]+$/, '')
  return nameWithoutExt.replace(/[-_]/g, ' ')
}

function DownloadLink({ file }: { file: ResourceFile }) {
  const label = file.label || extractNameFromPath(file.path);
  
  return (
    <HoverAnimation
    duration={500}
    intensity={1}
    type="scale"
  >
    <a className="download" href={file.path} download>
      {file.icon} {label}
    </a>
    </HoverAnimation>
  )
}

function ResourceSection({ section }: Props) {
  return (
    <section id={section.id}>
      <h2>{section.icon} {section.title}</h2>
      
      {section.files.length > 0 ? (
        section.files.map((file, index) => (
          <DownloadLink key={index} file={file} />
        ))
      ) : section.placeholder ? (
        <div className="placeholder">{section.placeholder}</div>
      ) : null}
    </section>
  )
}

export default ResourceSection
