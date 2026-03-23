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
      <h1 className={`${styles.name} animate-fade-in-up`}>{profile.name}</h1>
      <p className={`${styles.title} animate-fade-in-up delay-1`}>
        {content.title}
      </p>
      <p className={`${styles.subtitle} animate-fade-in-up delay-2`}>
        {profile.subtitle}
      </p>
      <p className={`${styles.summary} animate-fade-in-up delay-3`}>
        {content.summary}
      </p>
      <div className={`${styles.actions} animate-fade-in-up delay-4`}>
        <Link href="/about" className={styles.btnPrimary}>
          {labels.hero.aboutMe}
        </Link>
        <a href={`mailto:${profile.email}`} className={styles.btnSecondary}>
          {labels.hero.contact}
        </a>
      </div>
    </section>
  )
}
