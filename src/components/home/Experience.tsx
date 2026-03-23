import { experience } from '@/data/profile'
import styles from '@/styles/Experience.module.css'
import sectionStyles from '@/styles/Section.module.css'

export default function Experience() {
  return (
    <section className={sectionStyles.section}>
      <h2 className={sectionStyles.sectionTitle}>Experiência e Atuação</h2>
      <ul className={styles.list}>
        {experience.map((item, index) => (
          <li
            key={index}
            className={styles.item}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
