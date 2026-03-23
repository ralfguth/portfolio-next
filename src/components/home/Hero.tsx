import Link from 'next/link'
import { profile, getTitle } from '@/data/profile'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/data/translations'
import { getContent } from '@/data/profile'
import styles from '@/styles/Hero.module.css'

export default function Hero() {
  const { locale } = useLanguage()
  const labels = t(locale)
  const content = getContent(locale)

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.title}>{content.title}</p>
        <p className={styles.subtitle}>{profile.subtitle}</p>
        <p className={styles.summary}>{content.summary}</p>
        <div className={styles.actions}>
          <Link href="/about" className={styles.btnPrimary}>
            {labels.hero.aboutMe}
          </Link>
          <a href={`mailto:${profile.email}`} className={styles.btnSecondary}>
            {labels.hero.contact}
          </a>
        </div>
      </div>
      <div className={styles.decoration} aria-hidden="true">
        <div className={styles.terminal}>
          <div className={styles.terminalBar}>
            <span className={styles.dot} data-color="red" />
            <span className={styles.dot} data-color="yellow" />
            <span className={styles.dot} data-color="green" />
          </div>
          <div className={styles.terminalBody}>
            <div className={`${styles.codeLine} ${styles.line1}`} data-accent />
            <div className={`${styles.codeLine} ${styles.line2}`} />
            <div className={`${styles.codeLine} ${styles.line3}`} data-accent />
            <div className={`${styles.codeLine} ${styles.line4}`} />
            <div className={`${styles.codeLine} ${styles.line5}`} />
            <div className={styles.codeLineCursor}>
              <div className={`${styles.codeLine} ${styles.line6}`} data-accent />
              <span className={styles.cursor} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
