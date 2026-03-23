import { getAreas } from '@/data/profile'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/data/translations'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { FiServer, FiDollarSign, FiSend, FiDatabase, FiLayers, FiCheckCircle } from 'react-icons/fi'
import styles from '@/styles/Areas.module.css'
import sectionStyles from '@/styles/Section.module.css'

const areaIcons = [FiServer, FiDollarSign, FiSend, FiDatabase, FiLayers, FiCheckCircle]

function AreaCard({
  area,
  index,
}: {
  area: { title: string; description: string }
  index: number
}) {
  const { ref, isVisible } = useScrollReveal()
  const Icon = areaIcons[index] || FiServer

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.cardVisible : styles.cardHidden}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.iconCircle}>
          <Icon />
        </div>
        <h3 className={styles.cardTitle}>{area.title}</h3>
      </div>
      <p className={styles.cardDescription}>{area.description}</p>
    </div>
  )
}

export default function Areas() {
  const { locale } = useLanguage()
  const areas = getAreas(locale)
  const labels = t(locale)

  return (
    <section id="areas" className={sectionStyles.section}>
      <h2 className={sectionStyles.sectionTitle}>{labels.sections.areas}</h2>
      <div className={styles.grid}>
        {areas.map((area, index) => (
          <AreaCard key={area.title} area={area} index={index} />
        ))}
      </div>
    </section>
  )
}
