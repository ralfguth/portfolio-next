import { education } from '@/data/profile'
import styles from '@/styles/Education.module.css'
import sectionStyles from '@/styles/Section.module.css'

export default function Education() {
  return (
    <section className={sectionStyles.section}>
      <h2 className={sectionStyles.sectionTitle}>Formação Acadêmica</h2>
      <ul className={styles.list}>
        {education.map((item, index) => (
          <li
            key={index}
            className={styles.item}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <strong className={styles.degree}>{item.degree}</strong>
            <span className={styles.institution}>{item.institution}</span>
            <div className={styles.meta}>
              {item.period && (
                <span className={styles.period}>{item.period}</span>
              )}
              {'status' in item && item.status && (
                <span className={styles.status}>{item.status}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
