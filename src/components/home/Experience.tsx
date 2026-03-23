import { getExperience } from '@/data/profile'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/data/translations'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '@/styles/Experience.module.css'
import sectionStyles from '@/styles/Section.module.css'

function ExperienceItem({
  item,
  index,
  isCurrent,
}: {
  item: { role: string; company: string; period: string; description: string }
  index: number
  isCurrent: boolean
}) {
  const { ref, isVisible } = useScrollReveal<HTMLLIElement>()

  return (
    <li
      ref={ref}
      className={`${styles.item} ${isVisible ? styles.itemVisible : styles.itemHidden} ${isCurrent ? styles.itemCurrent : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={`${styles.dot} ${isCurrent ? styles.dotActive : ''}`} />
      <div className={styles.cardContent}>
        <div className={styles.header}>
          <strong className={styles.role}>{item.role}</strong>
          <span className={styles.period}>{item.period}</span>
        </div>
        <span className={styles.company}>{item.company}</span>
        {item.description && (
          <p className={styles.description}>{item.description}</p>
        )}
      </div>
    </li>
  )
}

export default function Experience() {
  const { locale } = useLanguage()
  const experience = getExperience(locale)
  const labels = t(locale)

  return (
    <section id="experiencia" className={sectionStyles.section}>
      <h2 className={sectionStyles.sectionTitle}>
        {labels.sections.experience}
      </h2>
      <ul className={styles.list}>
        {experience.map((item, index) => (
          <ExperienceItem
            key={index}
            item={item}
            index={index}
            isCurrent={index === 0}
          />
        ))}
      </ul>
    </section>
  )
}
