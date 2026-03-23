import { stackGroups } from '@/data/stack'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/data/translations'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '@/styles/Stack.module.css'
import sectionStyles from '@/styles/Section.module.css'

function StackGroup({
  group,
  index,
}: {
  group: (typeof stackGroups)[number]
  index: number
}) {
  const { ref, isVisible } = useScrollReveal()
  const primaryColor = group.items[0]?.color

  return (
    <div
      ref={ref}
      className={`${styles.group} ${isVisible ? styles.groupVisible : styles.groupHidden}`}
      style={{
        transitionDelay: `${index * 0.1}s`,
        borderLeftColor: primaryColor || 'var(--color-accent)',
      }}
    >
      <h3 className={styles.groupTitle}>
        {group.items[0]?.icon && (
          <span
            className={styles.groupIcon}
            style={{ color: primaryColor }}
          >
            {(() => {
              const Icon = group.items[0].icon!
              return <Icon />
            })()}
          </span>
        )}
        {group.title}
      </h3>
      <div className={styles.items}>
        {group.items.map((tech, techIndex) => (
          <span
            key={tech.name}
            className={styles.item}
            style={{ transitionDelay: isVisible ? `${techIndex * 0.04}s` : '0s' }}
          >
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
  )
}

export default function Stack() {
  const { locale } = useLanguage()
  const labels = t(locale)

  return (
    <section id="stack" className={sectionStyles.section}>
      <h2 className={sectionStyles.sectionTitle}>{labels.sections.stack}</h2>
      <div className={styles.groups}>
        {stackGroups.map((group, groupIndex) => (
          <StackGroup key={group.title} group={group} index={groupIndex} />
        ))}
      </div>
    </section>
  )
}
