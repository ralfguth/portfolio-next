import { experience } from '@/data/profile'
import styles from '@/styles/Experience.module.css'
import sectionStyles from '@/styles/Section.module.css'

export default function Experience() {
  return (
    <section className={sectionStyles.section}>
      <h2 className={sectionStyles.sectionTitle}>Experiência Profissional</h2>
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
