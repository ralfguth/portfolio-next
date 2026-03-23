import { getEducation } from '@/data/profile'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/data/translations'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '@/styles/Education.module.css'
import sectionStyles from '@/styles/Section.module.css'

function EducationItem({
  item,
  index,
}: {
  item: { degree: string; institution: string; period: string; status?: string }
  index: number
}) {
  const { ref, isVisible } = useScrollReveal<HTMLLIElement>()
  const isActive = 'status' in item && !!item.status

  return (
    <li
      ref={ref}
      className={`${styles.item} ${isVisible ? styles.itemVisible : styles.itemHidden} ${isActive ? styles.itemActive : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={`${styles.dot} ${isActive ? styles.dotActive : ''}`} />
      <div className={styles.cardContent}>
        <strong className={styles.degree}>{item.degree}</strong>
        <span className={styles.institution}>{item.institution}</span>
        <div className={styles.meta}>
          {item.period && (
            <span className={styles.period}>{item.period}</span>
          )}
          {isActive && (
            <span className={styles.status}>
              <span className={styles.statusDot} />
              {item.status}
            </span>
          )}
        </div>
      </div>
    </li>
  )
}

export default function Education() {
  const { locale } = useLanguage()
  const education = getEducation(locale)
  const labels = t(locale)

  return (
    <section id="formacao" className={sectionStyles.section}>
      <h2 className={sectionStyles.sectionTitle}>
        {labels.sections.education}
      </h2>
      <ul className={styles.list}>
        {education.map((item, index) => (
          <EducationItem key={index} item={item} index={index} />
        ))}
      </ul>
    </section>
  )
}
