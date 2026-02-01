import { Section, ResourceFile } from '../types'
import { HoverAnimation, Title } from 'react-kariu'

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
      <Title priority={4} text={section.icon + " " + section.title} align="left"/>
      
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
