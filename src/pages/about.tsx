import Layout from '@/components/layout/Layout'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile, getAbout } from '@/data/profile'
import { stackGroups } from '@/data/stack'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/data/translations'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '@/styles/About.module.css'

function AboutBlock({
  children,
  index,
}: {
  children: React.ReactNode
  index: number
}) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`${styles.block} ${isVisible ? styles.blockVisible : styles.blockHidden}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {children}
    </div>
  )
}

export default function About() {
  const { locale } = useLanguage()
  const labels = t(locale)
  const about = getAbout(locale)

  return (
    <Layout
      title={labels.meta.aboutTitle}
      description={labels.meta.aboutDescription}
    >
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>{labels.about.pageTitle}</h1>
          <p className={styles.pageSubtitle}>{profile.name}</p>
        </div>

        <AboutBlock index={0}>
          <p className={styles.intro}>{about.intro}</p>
        </AboutBlock>

        <AboutBlock index={1}>
          <h2 className={styles.blockTitle}>{labels.about.trajectory}</h2>
          <p className={styles.text}>{about.trajectory}</p>
        </AboutBlock>

        <AboutBlock index={2}>
          <h2 className={styles.blockTitle}>{labels.about.focus}</h2>
          <p className={styles.text}>{about.focus}</p>
        </AboutBlock>

        <AboutBlock index={3}>
          <h2 className={styles.blockTitle}>{labels.about.technologies}</h2>
          <div className={styles.techGrid}>
            {stackGroups.slice(0, 3).flatMap((group) =>
              group.items.slice(0, 4).map((tech) => (
                <span key={tech.name} className={styles.techPill}>
                  {tech.icon && (
                    <span
                      className={styles.techIcon}
                      style={{ color: tech.color }}
                    >
                      <tech.icon />
                    </span>
                  )}
                  {tech.name}
                </span>
              ))
            )}
          </div>
        </AboutBlock>

        <AboutBlock index={4}>
          <h2 className={styles.blockTitle}>{labels.about.principles}</h2>
          <ol className={styles.principles}>
            {about.principles.map((principle) => (
              <li key={principle} className={styles.principle}>
                {principle}
              </li>
            ))}
          </ol>
        </AboutBlock>

        <AboutBlock index={5}>
          <h2 className={styles.blockTitle}>{labels.about.contact}</h2>
          <div className={styles.contactLinks}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <FiGithub /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={styles.contactLink}
            >
              <FiMail /> {profile.email}
            </a>
          </div>
        </AboutBlock>
      </div>
    </Layout>
  )
}
