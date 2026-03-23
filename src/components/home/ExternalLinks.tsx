import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '@/data/profile'
import styles from '@/styles/ExternalLinks.module.css'

export default function ExternalLinks() {
  return (
    <div className={`${styles.links} animate-fade-in-up delay-5`}>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <span className={styles.linkIcon}>
          <FiGithub />
        </span>
        GitHub
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <span className={styles.linkIcon}>
          <FiLinkedin />
        </span>
        LinkedIn
      </a>
      <a href={`mailto:${profile.email}`} className={styles.link}>
        <span className={styles.linkIcon}>
          <FiMail />
        </span>
        E-mail
      </a>
    </div>
  )
}
