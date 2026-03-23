import { getExperience } from '@/data/profile'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/data/translations'
import styles from '@/styles/Experience.module.css'
import sectionStyles from '@/styles/Section.module.css'

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
          <li
            key={index}
            className={styles.item}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className={styles.header}>
              <strong className={styles.role}>{item.role}</strong>
              <span className={styles.period}>{item.period}</span>
            </div>
            <span className={styles.company}>{item.company}</span>
            {item.description && (
              <p className={styles.description}>{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
