import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '@/data/profile'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.text}>
          {profile.name} &middot; {new Date().getFullYear()}
        </span>
        <div className={styles.links}>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className={styles.socialLink}
            aria-label="E-mail"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  )
}
