import { areas } from '@/data/profile'
import styles from '@/styles/Areas.module.css'
import sectionStyles from '@/styles/Section.module.css'

export default function Areas() {
  return (
    <section id="areas" className={sectionStyles.section}>
      <h2 className={sectionStyles.sectionTitle}>Áreas de Atuação</h2>
      <div className={styles.grid}>
        {areas.map((area, index) => (
          <div
            key={area.title}
            className={styles.card}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className={styles.cardTitle}>{area.title}</h3>
            <p className={styles.cardDescription}>{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
