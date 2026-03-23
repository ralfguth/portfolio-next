import Link from 'next/link'
import { profile } from '@/data/profile'
import styles from '@/styles/Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={`${styles.name} animate-fade-in-up`}>{profile.name}</h1>
      <p className={`${styles.title} animate-fade-in-up delay-1`}>
        {profile.title}
      </p>
      <p className={`${styles.subtitle} animate-fade-in-up delay-2`}>
        {profile.subtitle}
      </p>
      <p className={`${styles.summary} animate-fade-in-up delay-3`}>
        {profile.summary}
      </p>
      <div className={`${styles.actions} animate-fade-in-up delay-4`}>
        <Link href="/about" className={styles.btnPrimary}>
          Sobre mim
        </Link>
        <a href={`mailto:${profile.email}`} className={styles.btnSecondary}>
          Contato
        </a>
      </div>
    </section>
  )
}
