import { stackGroups } from '@/data/stack'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/data/translations'
import styles from '@/styles/Stack.module.css'
import sectionStyles from '@/styles/Section.module.css'

export default function Stack() {
  const { locale } = useLanguage()
  const labels = t(locale)

  return (
    <section id="stack" className={sectionStyles.section}>
      <h2 className={sectionStyles.sectionTitle}>{labels.sections.stack}</h2>
      <div className={styles.groups}>
        {stackGroups.map((group, groupIndex) => (
          <div
            key={group.title}
            className={styles.group}
            style={{ animationDelay: `${groupIndex * 0.1}s` }}
          >
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <div className={styles.items}>
              {group.items.map((tech) => (
                <span key={tech.name} className={styles.item}>
                  {tech.icon && (
                    <span
                      className={styles.icon}
                      style={{ color: tech.color }}
                    >
                      <tech.icon />
                    </span>
                  )}
                  <span className={styles.label}>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
