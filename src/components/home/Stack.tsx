import { stackGroups } from '@/data/stack'
import styles from '@/styles/Stack.module.css'
import sectionStyles from '@/styles/Section.module.css'

export default function Stack() {
  return (
    <section className={sectionStyles.section}>
      <h2 className={sectionStyles.sectionTitle}>Stack e Tecnologias</h2>
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
                    <span className={styles.icon}>
                      <tech.icon />
                    </span>
                  )}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
