import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '@/data/profile'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '@/styles/ExternalLinks.module.css'

export default function ExternalLinks() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`${styles.links} ${isVisible ? styles.linksVisible : styles.linksHidden}`}
    >
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        data-platform="github"
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
        data-platform="linkedin"
      >
        <span className={styles.linkIcon}>
          <FiLinkedin />
        </span>
        LinkedIn
      </a>
      <a
        href={`mailto:${profile.email}`}
        className={styles.link}
        data-platform="email"
      >
        <span className={styles.linkIcon}>
          <FiMail />
        </span>
        E-mail
      </a>
    </div>
  )
}
