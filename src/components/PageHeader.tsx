import { ReactNode } from 'react'
import { SlideAnimation, Title } from 'react-kariu'

interface Props {
  /** Emoji ou icône affichée au-dessus du titre */
  icon?: string
  /** Badge texte (ex: "⚠️ Contient des spoilers") */
  badge?: string
  /** Classe CSS optionnelle du badge (ex: "spoiler") */
  badgeClass?: string
  /** Titre standard via react-kariu Title */
  title?: string
  /** Titre JSX custom (pour les titres fractionnés couleur) */
  titleJsx?: ReactNode
  /** Priorité H pour le Title react-kariu */
  priority?: 1 | 2 | 3 | 4 | 5 | 6
  /** Classe CSS du Title react-kariu */
  titleClass?: string
  /** Paragraphe de description */
  description?: string
  /** Contenu supplémentaire sous la description */
  children?: ReactNode
}

function PageHeader({
  badge,
  badgeClass = '',
  title,
  titleJsx,
  priority = 1,
  titleClass = 'page-title',
  description,
  children,
}: Props) {
  return (
    <SlideAnimation direction="bottom" duration={600} delay={100} trigger={true}>
      <header className="page-header">

        {badge && (
          <div className={`page-header-badge ${badgeClass}`.trim()}>
            {badge}
          </div>
        )}

        {titleJsx
          ? titleJsx
          : title && (
              <Title priority={priority} text={title} className={titleClass} />
            )
        }

        {description && (
          <p className="page-description">{description}</p>
        )}

        {children}
      </header>
    </SlideAnimation>
  )
}

export default PageHeader
